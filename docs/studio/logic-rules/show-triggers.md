---
sidebar_position: 3
description: "The most common rule pattern: input → show"
---

# Show Triggers

The single most common Logic Rule is "when this input fires, play this show." It's so common that we built a focused editor for it, accessible directly from the timeline editor.

## The Triggers button

Every show has a **Triggers** button in its metadata bar (right next to the show name and duration). Click it to open the Triggers editor.

Inside, you see a simplified rule graph:

- **Available inputs** on the left — every input on every controller in your account
- **The show's trigger** on the right — pre-wired to the show you're editing
- **Drag and drop** to wire inputs to the show

That's the whole UI. No logic gates, no counters, no delays. Just "input X fires show Y."

When you save, Studio pushes the rule to your controllers.

:::important
A show's trigger rule runs on a specific controller — by default, the first controller in the show's targets. You can change which one in the Triggers editor under **Settings**.
:::

## When to use the Triggers button vs. the full editor

| Use the Triggers button when... | Use the full editor when... |
| --- | --- |
| The show should fire on a single input | You need logic gates (and, or, etc.) |
| The show should fire on multiple inputs that are interchangeable | You need timing (delays, counters) |
| You want a quick view of "what triggers this show" | You're authoring multi-rule logic |
| You're a designer, not a programmer | You're integrating webhooks or external systems |

The button handles the most common case quickly. For anything more complex, click **Advanced Editor** to jump to the full Logic Rules editor.

## In the full editor

In the full editor, a show's trigger rule looks like any other rule with one constraint: the show output is **fixed** to the show that owns the rule. You can't wire it to a different show, and you can't delete it. Studio shows a notice banner explaining this.

Otherwise, you're free to add inputs, gates, delays, etc. — anything ending in the show's trigger.

## External rules that trigger the show

Other rules in your account can also play the show, even if they don't "own" it. For example, a rule on a different controller might detect a sequence of events and end with a trigger pointing at your show.

These rules show up in the show's **Logic Rules** button (next to the Triggers button). Click it for a list of every external rule that fires this show. Click any rule to jump to it in the full editor.

This is a quality-of-life feature: when you delete a show, you'd hate to discover six months later that another rule was firing it. The Logic Rules button gives you a single place to audit who-fires-what.

## Stopping a show

A show plays until it ends naturally, or until something explicitly stops it. To stop a show from a rule:

- Add a **Show Trigger** node pointed at the show and set its **action** to **Stop** (the default is **Start**), then wire your input to it.
- When that input fires, the show stops and the controller returns to its [ambient routine](/docs/studio/ambient-routines) if one is configured.

In the simple **Triggers** editor, this is a per-row **Action** of **Stop** instead of **Play**.

## Multi-show rules

A single rule can fire multiple shows — drag two show triggers into the graph, wire both to the same upstream input. Both shows play simultaneously (each on its own targeted controllers).

This is how you'd, e.g., have a haunt scene that fires lighting on one box and audio on another from a single sensor input.
