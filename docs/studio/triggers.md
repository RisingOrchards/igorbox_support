---
sidebar_position: 3
description: "Fire a show straight from a controller input — no Logic Rule needed"
---

# Triggers

A **Trigger** ties a controller input straight to a show: "when this input turns on, play this show." It's the simplest way to make something happen — wire an input to a show and you're done. No Logic Rule, no wiring diagram, no code.

For "button plays scene," a Trigger is all you need. When a scene depends on *combinations* or *timing* — several inputs together, a delay, a counter, a puzzle sequence — that's what [Logic Rules](/docs/studio/logic-rules/overview) are for.

:::tip The input and the show don't have to be on the same box
You can wire **any input on any controller** to fire **any show on any other controller** — a button on one box can launch a show on another. They just need to be on the same local network. The list of available inputs includes every input across your account.
:::

## Setting one up

Every show has a **Triggers** button in its metadata bar (right next to the show name and duration). Click it to open the Triggers editor.

Inside, you see a simple input-to-show editor:

- **Available inputs** on the left — every input on every controller in your account
- **The show** on the right — the show you're editing
- **Drag and drop** to wire an input to the show

That's the whole thing. When you save, Studio sends the trigger to your controllers — and once it's there, it keeps working whether or not the cloud is connected.

A show also has a **Logic Rules** button next to Triggers. It lists every rule (including ones on other controllers) that fires this show, so you have one place to see everything that can play it.

## On, off, or both

For each wired input, you choose when it fires the show:

- **On** — when the input turns on (button pressed, sensor activated). The usual choice.
- **Off** — when the input turns off (button released, sensor clears).
- **Both** — either change fires it.

## Play or stop

A trigger's **action** is normally **Play**, but you can set it to **Stop** instead — so one input plays a scene and another stops it. When a show is stopped, the controller returns to its [ambient routine](/docs/studio/ambient-routines) if one is set.

## Where a trigger runs

A show's trigger runs on a specific controller — by default, the first controller in the show's targets. You can change which one in the Triggers editor under **Settings**.

## Triggering a show that's already playing

Sometimes a trigger fires while the show is still running — a guest steps on the same trip plate twice, or two sensors point at the same scene. You decide what happens next with the trigger's **Retrigger** setting:

| Setting | What happens |
| --- | --- |
| **Restart** | The show stops where it is and starts over from the beginning. Good for a scare that should always begin fresh. |
| **Ignore while playing** | The new trigger is skipped until the show finishes on its own. Good for a scene you never want to interrupt. |
| **Toggle** | The first trigger starts the show; the next one stops it. Handy for a button or lever that turns a scene on and off. |
| **Take over** | Stops whatever is currently playing and immediately plays this show. Useful when this scene should always take over. |

Pick whichever matches how the scene should feel to your guests. If you want a show to keep cycling on its own rather than respond to repeat triggers, see [Looping & Chaining](/docs/studio/timeline-editor/looping-and-chaining).

## When you need more

Triggers are deliberately simple — one input, one show. When a scene depends on *combinations* or *timing* — all four switches flipped, every fifth guest, a 30-second delay, a Morse-code puzzle — step up to [Logic Rules](/docs/studio/logic-rules/overview). A rule can still fire shows (and can even use an input from another controller as a condition); it just adds the logic in between.
