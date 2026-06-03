---
sidebar_position: 100
description: "Connect your AI assistant to the IgorBox docs via MCP"
---

# MCP Server Setup

The IgorBox docs site runs a [Model Context Protocol](https://modelcontextprotocol.io/) server at `https://help.igorbox.com/mcp`. Once you add it to your AI assistant, the assistant can search and read this documentation directly without you copy-pasting or sharing links.

This is handy if you're building a show in IgorBox Studio with Claude open on the side, or asking Cursor to help wire up a controller, or anything else where the assistant needs accurate, up-to-date IgorBox knowledge.

## What the server provides

Two tools that your AI assistant will pick up automatically:

- **`docs_search`** — Search across every page on this site with relevance ranking. Returns matching pages with snippets and links.
- **`docs_fetch`** — Pull the full markdown of a specific page. The assistant uses this after a search to read the full content.

That's it. The server is read-only and only knows about pages published here.

## Add the server to your assistant

Pick your tool and follow the steps.

### Claude Code

In your terminal:

```bash
claude mcp add --transport http igorbox-docs https://help.igorbox.com/mcp
```

Verify it's registered:

```bash
claude mcp list
```

You should see `igorbox-docs` in the list. Start (or restart) a Claude Code session and the `docs_search` and `docs_fetch` tools will be available.

### Cursor / VS Code

Open your MCP config (in Cursor: settings → MCP; in VS Code with the Claude extension: `~/.config/claude/mcp.json` or the platform equivalent) and add:

```json
{
  "mcpServers": {
    "igorbox-docs": {
      "url": "https://help.igorbox.com/mcp"
    }
  }
}
```

Save and reload the editor.

### Claude Desktop

Edit `claude_desktop_config.json`:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux:** `~/.config/Claude/claude_desktop_config.json`

Add the server:

```json
{
  "mcpServers": {
    "igorbox-docs": {
      "url": "https://help.igorbox.com/mcp"
    }
  }
}
```

Quit and reopen Claude Desktop. The tools appear under the server toggles in the chat input.

## Using it

You don't have to do anything special. Once the server is connected, just ask your assistant questions about IgorBox and it will reach for the docs when it needs to. Examples:

- *"How do I wire a strobe to the Output 8 MKII?"*
- *"What's the difference between Magic Provision and manual setup?"*
- *"Show me how Logic Rules work in IgorBox Studio."*

If you want to be explicit, tell the assistant to use the IgorBox docs: *"Look it up in the igorbox-docs server and tell me…"*

## Removing the server

If you want to take it off later:

**Claude Code:** `claude mcp remove igorbox-docs`

**Cursor / VS Code / Claude Desktop:** Remove the `igorbox-docs` entry from your MCP config file and restart the app.

## Trouble?

If the server isn't showing up after install, the most common causes are:

- The app wasn't restarted after editing config.
- The config file has a JSON syntax error (a missing comma or brace will cause the whole MCP block to be skipped silently).
- An older client that doesn't support HTTP transport. Make sure your assistant is on a current version.

Still stuck? [Contact support](/docs/contact) and we'll help you get it wired up.
