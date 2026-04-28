---
sidebar_position: 4
description: "Recipes for haunts, escape rooms, and immersive events"
---

# Examples

A handful of Logic Rules patterns we've seen built across haunts, escape rooms, and immersive attractions. Use them as starting points and adapt to your install.

## 1. Simple input → show

The hello world. Wire a button to a show.

```
[Input: "Front Door Button"] ────► [Show: "Welcome Scene"]
```

Use the [Triggers button](show-triggers) on the show — this is exactly what it's for.

## 2. Random scare from a pool

Every guest who walks past the sensor gets a scare, but you have three different scares and you want them shuffled.

```
[Input: "Hallway Sensor"] ────► [Random]
                                    ├─► [Show: "Scare A"]
                                    ├─► [Show: "Scare B"]
                                    └─► [Show: "Scare C"]
```

Configure the Random block's weights to control how often each scare fires. Equal weights for uniform random; want Scare A to be 50% likely and B/C 25% each? Set weights to 2/1/1.

## 3. "Rare scare" every Nth guest

Most guests get the regular scare. Every fifth one gets a special one.

```
[Input: "Sensor"] ─┬─► [Counter, threshold=5] ──► [Show: "Rare Scare"]
                   │
                   └─► [Show: "Regular Scare"]
```

The Counter only fires on the 5th time its input fires. The regular scare fires every time. So guests 1–4 see Regular, guest 5 sees Rare *and* Regular.

If you want guest 5 to see Rare *instead of* Regular, add a Not-And gate to suppress Regular on the 5th guest.

## 4. Escape room: four switches in any order

Four magnetic switches must all be flipped to unlock the next phase. Order doesn't matter; all four must be set.

```
[Input: "Switch 1"] ──► [Latch] ──┐
[Input: "Switch 2"] ──► [Latch] ──┤
[Input: "Switch 3"] ──► [Latch] ──┤── [And] ──► [Show: "Phase 2 Unlock"]
[Input: "Switch 4"] ──► [Latch] ──┘
```

Each Latch captures a switch flip and holds it on. The And gate fires when all four latches are set. Add a reset input to each Latch (driven by a phase-reset button) so the room can be reset between groups.

## 5. Multi-controller coordination

Input on Box A triggers an output on Box B and an output on Box C.

```
On Box A:
[Input: "Trigger"] ──► [Named Trigger out: "scene-fire"]

On Box B:
[Named Trigger in: "scene-fire"] ──► [Show: "Lights Show"]

On Box C:
[Named Trigger in: "scene-fire"] ──► [Show: "Audio Show"]
```

Named Triggers are how IgorBox controllers can talk to each other natively. Works regardless of which controller the input is on or which controllers the outputs are on, as long as they're all in the same Studio.

## 6. Webhook bridge

External system fires a webhook → your show fires.

```
[Webhook: "scene-1-trigger"] ──► [Show: "Scene 1"]
```

Studio gives you a unique URL for the webhook. Configure your external system to hit it. When it does, your show fires.

For the reverse direction (show fires → external webhook), use a Webhook Emitter:

```
[Input: "Done Button"] ──► [Webhook Emitter: "Send to stats system"]
```

See [Webhooks](/docs/studio/webhooks/inbound) for details.

## 7. Anti-spam with a delay

Sensor fires too frequently? Use a Latch + Delay + reset pattern to ignore re-triggers for a window.

```
[Input: "Sensor"] ──► [Latch (set)] ──► [Show: "Scare"]
                         │                  │
                         │                  └─► [Delay: 5s] ──► [Latch (reset)]
```

The sensor fires the latch and the show. Five seconds later, the delay output resets the latch. Within the 5-second window, additional sensor fires don't re-trigger because the latch is already set.

## When examples aren't enough

If you've designed a rule and you're not sure if it's going to work, **deploy it and test it with Live Preview**. The rule runs in real time on the controller, and you can drive inputs from Manual Control to verify the logic without setting up the physical sensors.

For thornier debugging, drop us a note on [Discord](https://discord.igorbox.com) — we've seen most patterns and can usually point you at the right approach.
