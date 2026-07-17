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

:::danger Prototype Controller Inputs De-Rated
Serial Number 000001 through 000010 inputs can only handle 6V to 12V DC or AC due to a manufacturing issue with the prototypes.

**DO NOT EXCEED 12V**
:::

:::danger Label Issue
Serial Number 000001 through 000010 has its inputs and outputs mislabeled (they are swapped). The Channels with purple indicators are inputs and green indicators are outputs.
:::

## Power

9–24V DC center-positive barrel, included supply is our standard 12VDC 1A power supply.
