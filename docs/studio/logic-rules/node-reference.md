---
sidebar_position: 2
description: "The building blocks you can drag into a Logic Rule"
---

# Building Blocks

Every Logic Rule is built out of these blocks. Drag them into the editor and connect them with lines.

There are three kinds:

- **Inputs** — stuff that fires (sensors, buttons, webhooks)
- **Logic** — gates and stateful blocks that shape what comes next
- **Outputs** — what actually happens (a show plays, a webhook fires)

## Inputs

### Input (channel)

Watches a physical input on a controller — an opto-isolated input on an Input 16, Output 8 MKII, or LED Controller, or the front button (when the front button is set to Trigger mode).

The input can be on **this controller or any other controller in your account** — so a button or sensor on one box can be a condition in a rule running on another. They just need to be on the same local network.

You can choose when it reacts: when the signal turns **On** (button pressed, sensor active), when it turns **Off** (button released, sensor clear), or on **both**.

The most common input. Wire a button to one of these and point it at a show — done.

### Webhook

An external system fires the rule by hitting a URL.

Studio gives you the URL when you set up the [inbound webhook](/docs/studio/webhooks/inbound). Hand it to your ticketing system, your custom hardware, your phone — whatever needs to trigger your show.

### Named Trigger

A signal another rule **on the same controller** can fire and listen for — handy for chaining rules together when one big rule would be too tangled.

To *listen* for one, add an **Input** block and point it at the named trigger instead of a physical input. To *send* one, use the Named Trigger output (under Outputs, below). To coordinate *across* controllers, you have two options: watch another controller's input directly (see the Input block above), or use a Show Trigger to fire any show in your Studio.

### DMX Input

Watches one slot of incoming DMX on an [IgorBox DMX](/docs/controllers/dmx/overview) and stays on while the value sits inside a range you set.

Point it at one of the controller's [named DMX inputs](/docs/studio/dmx/dmx-input#named-inputs) (or a raw slot number) and pick the range; "console fader above half" is a range of 128–255. The block turns on when the incoming value enters the range and off when it leaves.

It's stateless (it simply reflects the wire), so pair it with a **Latch** for "fire once and remember." The rule must run on the DMX controller doing the listening, and that controller's input must be live: always true in Buffer or Fixture mode, and in Standard mode once DMX input is enabled. See [DMX Input](/docs/studio/dmx/dmx-input).

## Logic

### And

Fires when **all** of its inputs are firing. Useful for "all four switches are set" patterns.

### Or

Fires when **any** of its inputs is firing.

### Not-And (Nand)

Fires when **not all** of its inputs are firing. Useful for "all-but" logic.

### Either-Or (Xor)

Fires when an **odd number** of its inputs is firing. With two inputs, that means one *or* the other, but not both.

### Delay

Holds a signal for a set amount of time before passing it along.

Use for "wait two seconds after the door opens, then trigger the scare."

You can also choose what happens if it fires *again* while it's still counting down:

- **Restart** — throws away the old countdown and starts the full wait over from the top. Good for "keep resetting the timer as long as the guest keeps moving."
- **Accumulate** — adds another full wait onto whatever's left, so repeated fires push the result further out.
- **Latch** — ignores the extra fires and lets the original countdown finish on schedule.

### Counter

Counts how many times something fires, then fires itself on the Nth time.

Wire a sensor to it, set the count to 5, and you've got a "fire the rare scare on the fifth guest" pattern. By default it fires once when it reaches the target and stays on until reset — turn on its **Auto-reset** option if you want it to re-arm and fire on *every* fifth guest.

### Latch

Captures a fire and **holds it on** until you reset it. Useful for "once the puzzle is solved, stay solved."

### Toggle

Flips on, then flips off, then on again — every time it fires. Useful for stateful buttons ("press to enable, press again to disable").

### Random

Routes a fire to one of several outputs at random. Useful for "every time a guest walks through, pick a random scare from a pool."

Set how many outputs you want (2 to 8). Each fire picks one of them with equal odds.

### Input Mask

Watches several inputs at once and fires when they match a specific on/off pattern. Perfect for combination locks — "these three switches on, that one off."

### Sequence

Fires when its inputs are triggered in the **right order**. Get the order wrong and it tells you (it has a separate "wrong input" output you can wire to a "try again" cue). The classic escape-room combination puzzle.

### Morse Code

Listens to a single input — a button, a telegraph key — for a **Morse-code pattern**. It has separate outputs for the correct code, a wrong attempt, and a timeout.

### Reset

Resets stateful blocks (latches, counters, sequences) back to their starting state. Wire a "reset the room" button to it so you can re-arm a puzzle between groups.

## Outputs

### Show Trigger

Plays a show — pick which show and which controller, then fire it from a rule. The show can live on a *different* controller than the rule, so one box's logic can drive a scene on another (same local network). Set its **action** to **Stop** instead of **Play** to end a show from a rule. A rule can hold several of these to fire or stop multiple shows at once — e.g. lighting on one box and audio on another from a single condition.

The most common output. Most rules end with one or more of these. (For a plain input-to-show link with no logic, you don't need a rule — see [Triggers](/docs/studio/triggers).)

### Webhook Emitter

Fires an [outbound webhook](/docs/studio/webhooks/outbound) to call out to some external system — Slack, PagerDuty, a custom dashboard, whatever you wired up.

### Named Trigger (output)

Sends a named signal that other rules **on the same controller** can listen for. The pair to the Named Trigger input above. Used to chain rules together on one box — not across controllers.

### Channel Hold

Forces a specific output channel on (or off) and **holds it there** until it's released. Useful for "keep this maglock powered until the puzzle is solved."

### DMX Slot Hold

The DMX cousin of Channel Hold: takes ownership of one DMX channel and **pins it at a value** until released. While held, shows, manual control, and the ambient routine can't move that channel; the rest of the universe stays free.

It has separate **Set** and **Release** connections, each with its own value, so "Set" can pin a fogger's channel to zero and "Release" can hand it back at its resting level. Wire a Reset (or any signal) to Release to let go. The target controller must be in Standard or Buffer mode; in Fixture mode nothing can drive the output. See [Operating Modes](/docs/controllers/dmx/modes).

### DMX Fixture Hold

Same idea, aimed at a [patched fixture](/docs/studio/dmx/patching-fixtures) instead of a raw channel: pick the fixture, tick which of its channels to hold, and set a value for each. Only the ticked channels are held; the rest of the fixture stays live for shows and manual control. Ideal for "park the moving head and kill its dimmer, but leave its strobe channel alone."

### Play Sound

Plays a sound straight from a rule (and can stop it again) — handy for a quick audio cue without building a whole show around it.

## Tips

- To combine multiple inputs into one signal, run them through an **Or** gate.
- To fan one input out to multiple outputs, just connect the same wire to multiple destinations — that's allowed.
- The editor catches mistakes (like loops that would never resolve) and tells you where the problem is.
