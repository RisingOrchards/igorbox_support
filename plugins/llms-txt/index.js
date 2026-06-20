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

// Strip MDX imports and JSON-LD component blocks so the full-text dump is clean prose.
function cleanBody(body) {
  return body
    .replace(/^import\s.+$/gm, '')
    .replace(/<ProductJsonLd[\s\S]*?\/>/g, '')
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
          const raw = fs.readFileSync(file, 'utf8');
          const {data, body} = parseFrontmatter(raw);
          const rel = path
            .relative(docsDir, file)
            .replace(/\.mdx?$/, '')
            .split(path.sep)
            .join('/');
          return {
            rel,
            section: rel.includes('/') ? rel.split('/')[0] : 'overview',
            url: base + path.posix.join(baseUrl, 'docs', rel),
            title: data.title || firstH1(body) || rel.split('/').pop(),
            description: data.description || '',
            body: cleanBody(body),
          };
        });

      // llms.txt — curated index grouped by top-level section.
      const groups = {};
      for (const e of entries) (groups[e.section] ||= []).push(e);

      const idx = [`# ${siteConfig.title}`, '', `> ${siteConfig.tagline}`, ''];
      for (const section of Object.keys(groups).sort()) {
        idx.push(`## ${titleCase(section)}`, '');
        for (const e of groups[section]) {
          idx.push(
            `- [${e.title}](${e.url})${e.description ? ': ' + e.description : ''}`,
          );
        }
        idx.push('');
      }
      fs.writeFileSync(path.join(outDir, 'llms.txt'), idx.join('\n'), 'utf8');

      // llms-full.txt — every doc, full text, with its canonical URL.
      const full = [`# ${siteConfig.title}`, '', `> ${siteConfig.tagline}`, ''];
      for (const e of entries) {
        full.push('---', '', `# ${e.title}`, `Source: ${e.url}`, '');
        if (e.description) full.push(`> ${e.description}`, '');
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
