---
sidebar_position: 5
description: "Connecting the IgorBox DMX to fixtures, consoles, inputs, and relays"
beta: true
---

# Wiring Guide

:::caution
Photo coming soon.
:::

The rear panel carries the DMX ports plus the same style of WAGO® terminals you'll find on every IgorBox: two relay outputs, two isolated inputs, and power. Every connector has an [indicator light](/docs/controllers/shared/indicator-lights) next to it, and [Easywire™](/docs/controllers/shared/easywire) can blink the exact terminal you're looking for.

## The DMX chain

The common case, where IgorBox drives the fixtures:

1. **DMX out** → first fixture's **DMX in**.
2. First fixture's **out/thru** → next fixture's **in**, and so on.
3. **Terminate the last fixture** in the chain (see [DMX Basics](dmx-basics#termination)).
4. Set each fixture's address, leaving [gaps between fixtures](dmx-basics#leave-gaps-when-addressing).

Adding the box to an **existing console's rig** ([Buffer mode](modes#buffer)):

1. Console's DMX out → the IgorBox **DMX in**.
2. IgorBox **DMX out** → the first fixture, chain as usual.
3. The chain's far end still gets a terminator; the box handles its own place in the middle.

Using a console cue as a trigger ([Fixture mode](modes#fixture)): wire the box anywhere in the chain, **in** from the previous device, **out** onward to the next. If the box is the last device, switch on its built-in terminator from IgorBox Studio instead of using a plug.


## Relay outputs and inputs

The two relay outputs and two isolated inputs wire up exactly like their counterparts on the other controllers. See the [Output 8 MKII wiring guide](/docs/controllers/output-8-mkii/wiring-guide) for the recipes (lights, solenoids, and input switches all apply here).

These are the same Outputs and Inputs on all other IgorBox devices.

The outputs are rated at 1.5A max and the inputs are rated 6V - 48V DC or AC.

:::danger Beta units SN 000001–000010: inputs are 12V max
The isolated inputs on the first ten beta units (Rev A.1) accept **6–12V DC or AC**, not the usual 6–48V. A part that can't handle the full input range made it into this revision. We caught it after these units were built, and rather than delay the beta we're shipping them with this limit documented. Production units are corrected and accept the full 6–48V.

**Do not exceed 12V on these units' inputs.** Higher voltage can damage the input circuit. Your serial number is on the label on the bottom of the controller.
:::

:::danger Beta units SN 000001–000010: input and output labels are swapped
On the first ten beta units (Rev A.1), the rear-panel labels for the inputs and the relay outputs are swapped. Trust the indicator lights, not the printed labels: **purple** lights mark the inputs, **green** lights mark the outputs. Production units are labeled correctly.
:::

## Power

9–24V DC center-positive barrel, included supply is our standard 12VDC 1A power supply.
