const fs = require('fs');
const path = require('path');

// Minimal self-contained generator for /llms.txt (curated index) and
// /llms-full.txt (full concatenated docs) — the emerging convention for
// making documentation easy for LLMs to discover and ingest.
// See https://llmstxt.org/

const FM_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function parseFrontmatter(raw) {
  const m = raw.match(FM_RE);
  if (!m) return {data: {}, body: raw};
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (mm) data[mm[1]] = mm[2].trim().replace(/^["']|["']$/g, '');
  }
  return {data, body: raw.slice(m[0].length)};
}

function firstH1(body) {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

// Strip MDX imports and JSX components (e.g. <ProductJsonLd/>, <LabRatConfigurator/>,
// <Link>…</Link>) so the full-text dump is clean prose rather than leaking raw tags.
function cleanBody(body) {
  return body
    .replace(/^import\s.+$/gm, '')
    // Paired components: <Foo ...>…</Foo> (capitalized tag name).
    .replace(/<([A-Z][A-Za-z0-9]*)\b[\s\S]*?<\/\1>/g, '')
    // Self-closing components: <Foo ... />.
    .replace(/<[A-Z][A-Za-z0-9]*\b[\s\S]*?\/>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function collect(dir, acc) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collect(full, acc);
    else if (/\.mdx?$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

function titleCase(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

module.exports = function llmsTxtPlugin(context) {
  return {
    name: 'llms-txt-plugin',
    async postBuild({siteConfig, outDir}) {
      const docsDir = path.join(context.siteDir, 'docs');
      if (!fs.existsSync(docsDir)) return;

      const base = siteConfig.url.replace(/\/$/, '');
      const baseUrl = siteConfig.baseUrl || '/';

      const entries = collect(docsDir, [])
        .sort()
        .map((file) => {
          // A single unreadable or malformed doc shouldn't crash the whole
          // build — skip it with a warning so the rest of llms.txt still ships.
          try {
            const raw = fs.readFileSync(file, 'utf8');
            const {data, body} = parseFrontmatter(raw);
            const rel = path
              .relative(docsDir, file)
              .replace(/\.mdx?$/, '')
              .split(path.sep)
              .join('/');
            // Docs flagged `beta:` in frontmatter get a disclaimer here too, so
            // LLM consumers see the same warning the on-page banner gives humans.
            const beta = data.beta
              ? data.beta === 'true'
                ? 'This page covers hardware that is in beta testing. Details can change before release, and your firmware may be ahead of or behind these docs.'
                : data.beta
              : null;
            return {
              rel,
              section: rel.includes('/') ? rel.split('/')[0] : 'overview',
              url: base + path.posix.join(baseUrl, 'docs', rel),
              title: data.title || firstH1(body) || rel.split('/').pop(),
              description: data.description || '',
              beta,
              body: cleanBody(body),
            };
          } catch (err) {
            console.warn(
              `[llms-txt-plugin] skipping ${file}: ${err.message}`,
            );
            return null;
          }
        })
        .filter(Boolean);

      // llms.txt — curated index grouped by top-level section.
      const groups = {};
      for (const e of entries) (groups[e.section] ||= []).push(e);

      // Surface the public MCP server so AI clients reading llms.txt can
      // connect directly instead of scraping pages.
      const mcpUrl = `${base}/mcp`;
      const mcpBlock = [
        '## MCP Server',
        '',
        `> Connect an AI assistant straight to these docs. An unauthenticated, read-only [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server is available at ${mcpUrl} — no API key or account required.`,
        '',
        `- IgorBox Documentation MCP server: ${mcpUrl}`,
        '',
      ];

      const idx = [`# ${siteConfig.title}`, '', `> ${siteConfig.tagline ?? ''}`, '', ...mcpBlock];
      for (const section of Object.keys(groups).sort()) {
        idx.push(`## ${titleCase(section)}`, '');
        for (const e of groups[section]) {
          idx.push(
            `- [${e.title}](${e.url})${e.beta ? ' **(Beta)**' : ''}${e.description ? ': ' + e.description : ''}`,
          );
        }
        idx.push('');
      }
      fs.writeFileSync(path.join(outDir, 'llms.txt'), idx.join('\n'), 'utf8');

      // llms-full.txt — every doc, full text, with its canonical URL.
      const full = [`# ${siteConfig.title}`, '', `> ${siteConfig.tagline ?? ''}`, '', ...mcpBlock];
      for (const e of entries) {
        full.push('---', '', `# ${e.title}`, `Source: ${e.url}`, '');
        if (e.description) full.push(`> ${e.description}`, '');
        if (e.beta) full.push(`> **Beta:** ${e.beta}`, '');
        full.push(e.body, '');
      }
      fs.writeFileSync(
        path.join(outDir, 'llms-full.txt'),
        full.join('\n'),
        'utf8',
      );
    },
  };
};
