---
sidebar_position: 1
description: "What Logic Rules are"
---

# Logic Rules: Overview

Logic Rules are how you go from "the input fired" to "the right thing happens" — without writing any code.

If all you want is "this input plays this show," you don't even need a rule — that's a [**Trigger**](/docs/studio/triggers), and you can wire one up in seconds. Reach for a Logic Rule when you need *logic* in between: combining several inputs, timers, counters, latches, or random choices.

A **rule** is a graph of building blocks connected by lines. You drag inputs (button presses, sensor activations, timers, webhooks) onto a canvas, drop in some logic (and, or, delay, counter, latch, random), and connect them to outputs (fire a show, send a webhook, notify another rule).

If you've used a "no-code" automation tool before — Twilio Studio, Node-RED, IFTTT — the metaphor is the same. We've just specialized it for show control.

## What Logic Rules are good for

- **Conditional show firing** — "fire this show only when both the door and the floor plate are on"
- **Escape room puzzle logic** — "when all four switches are flipped, unlock the next phase"
- **Counter-based effects** — "every fifth time someone walks past the sensor, fire the rare scare instead"
- **Random selection** — "when this trigger fires, randomly pick one of three shows"
- **Timed effects** — "wait 30 seconds after the last guest leaves, then reset"
- **Multi-controller coordination** — "input on this box triggers an output on that box"
- **Webhooks in and out** — bridge to outside systems

## Triggers vs. Logic Rules

For the simple case — "this input plays this show" — you don't need a rule at all. Use a [Trigger](/docs/studio/triggers): quicker to set up, and all most shows need.

Reach for the full Logic Rules editor (**Rules** in the sidebar) when a scene depends on more than a single input — combinations, timing, counting, or state. Drag in whatever building blocks you need; the rest of this section covers them.

:::info
**Triggers are free; Logic Rules are a paid feature.** Triggers — wiring an input to play, stop, or lock a show or controller — are included on every plan. The full Logic Rules editor (gates, timers, counters, puzzles) is available on the **Builder** plan and up.
:::

## Rules run on the controller

Rules run on your controllers, not in the cloud. That means rule logic continues to work even if the cloud goes offline. The cloud's only job is to author and push out the rules — once they're on the box, they're independent.

## Rules span your whole system

A rule isn't limited to the controller it runs on. From a single rule you can:

- **use an input from any controller as a condition** — a button or sensor on one box can drive logic running on another, and
- **fire a show on any other controller** — light up one box and play audio on a second from the same condition.

So one box's sensor can feed the puzzle logic on a second box and launch scenes on a third. The only requirement is that your controllers are on the same local network (see [Connectivity](/docs/controllers/shared/connectivity)).

(For a plain input-to-show link with no logic, you don't need a rule at all — see [Triggers](/docs/studio/triggers), which work across controllers too.)

## Where to next

- [Building Blocks](node-reference) — what each block does, in plain English
- [Triggers](/docs/studio/triggers) — fire a show straight from an input, no rule needed
- [Examples](examples) — recipes for haunts, escape rooms, and immersive events
