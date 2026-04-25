---
sidebar_position: 1
description: "What Logic Rules are"
---

# Logic Rules: Overview

Logic Rules are how you go from "the input fired" to "the right thing happens" — without writing any code.

A **rule** is a graph of building blocks connected by lines. You drag inputs (button presses, sensor activations, timers, webhooks) onto a canvas, drop in some logic (and, or, delay, counter, latch, random), and connect them to outputs (fire a show, send a webhook, notify another rule).

If you've used a "no-code" automation tool before — Twilio Studio, Node-RED, IFTTT — the metaphor is the same. We've just specialized it for show control.

## What Logic Rules are good for

- **Show triggers** — "when this button is pressed, fire this show"
- **Escape room puzzle logic** — "when all four switches are flipped, unlock the next phase"
- **Counter-based effects** — "every fifth time someone walks past the sensor, fire the rare scare instead"
- **Random selection** — "when this trigger fires, randomly pick one of three shows"
- **Timed effects** — "wait 30 seconds after the last guest leaves, then reset"
- **Multi-controller coordination** — "input on this box triggers an output on that box"
- **Webhooks in and out** — bridge to outside systems

## Two ways to build them

### From the timeline editor (show triggers)

Every show has a **Triggers** chip in the metadata bar. Click it for a simple editor that lets you wire inputs to fire the show you're editing. This handles the most common case: "when this input fires, play this show." No logic gates, no counters — just inputs to shows.

### From the full Logic Rules editor

For anything more complex (gates, delays, counters, random, multi-rule coordination), use the full editor at **Rules** in the sidebar. Drag in any building blocks you need.

## Rules run on the controller

Rules run on your controllers, not in the cloud. That means rule logic continues to work even if the cloud goes offline. The cloud's only job is to author and push out the rules — once they're on the box, they're independent.

## Where to next

- [Building Blocks](node-reference) — what each block does, in plain English
- [Show Triggers](show-triggers) — the simplest and most common pattern
- [Examples](examples) — recipes for haunts, escape rooms, and immersive events
