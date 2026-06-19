---
sidebar_position: 3
description: "Use placeholder variables in outbound webhook bodies"
---

# Template Variables

Outbound webhook bodies support template variables — placeholders that get filled in with real values at the moment the webhook fires. This lets a single webhook configuration adapt to whatever rule fired it.

## Syntax

Variables are wrapped in double curly braces — for example, `{{variable}}` inside a body gets replaced when the webhook fires.

## Available variables

The full list of variables you can use, along with what each one expands to, lives **in Studio** itself. When you open an outbound webhook in the Studio editor, the template editor shows every available variable in context, so you can pick the one you want without having to memorize names.

This keeps the public docs simple and means the in-Studio reference is always up to date with what the editor actually supports.

## Example: Slack notification

Set the webhook URL to your Slack incoming-webhook URL, and write a body that mixes plain text with template variables. For example:

```json
{
  "text": "Show '<trigger name>' fired on <controller name> at <timestamp>"
}
```

Replace each `<...>` with the corresponding `{{variable}}` from the in-Studio template editor. Once it fires, you'll get a Slack message like:

> Show 'Welcome Scene' fired on Front Hallway at 2026-04-26T19:42:13.000Z