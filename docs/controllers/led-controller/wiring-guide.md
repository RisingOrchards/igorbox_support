---
sidebar_position: 2
description: "Wiring indicators, breakouts, and inputs to the LED Controller"
---

# Wiring Guide

The LED Controller's sixteen channels are dimmable DC outputs, each clamped at **20 mA maximum**. That makes them perfect for:

- Indicator LEDs (small panel-mount or PCB LEDs)
- Solid-state relay inputs
- Driving the [RGBW-PWR breakout](rgbw-pwr-breakout) for real lighting

For anything bigger than an indicator LED — panel lights, pinspots, LED strips, motors — you'll want the breakout. The instructions below cover both.

[Easywire™](/docs/controllers/shared/easywire) walks you through every wiring recipe visually.

:::caution
Photos coming soon.
:::

## The terminal block

Each channel is a vertical pair of WAGO® terminals. The top terminal is V+ (positive), the bottom terminal is the channel's switched output.

This is the opposite polarity convention from the Output 8 — on the LED Controller, you bring V+ from your power supply to the load's V+, and the controller switches the GND/negative leg of the load.

There's also a center power passthrough zone, and two isolated input pairs.

## Wiring an indicator LED

The simplest case — drive a single indicator LED:

1. Connect the supply's V+ to the LED's anode (with a series resistor sized for the LED — don't skip this).
2. Connect the LED's cathode to one terminal of a controller channel.
3. Connect the supply's GND to the controller's GND in the passthrough zone.

When the controller dims the channel up, the LED brightens. With the channel clamped at 20 mA, you don't need a beefy supply — a single LED's current draw is well within the channel's limit.

### Channel voltage selection

The controller's channels operate at the voltage you set during provisioning — **12V or 24V**. Mixing channel voltages on a single controller isn't supported; if you need both, use two LED Controllers.

If you got it wrong at provisioning, you can change the channel voltage in Studio (Configuration tab → Channel Voltage). Studio will warn you, since it implies your wiring needs to match.

## Wiring a panel light, pinspot, or strip — use the breakout

For real lighting loads, **don't wire the load directly to a channel**. The 20 mA clamp will limit how bright it gets, and the channel can't deliver the current the load wants.

Instead, use the [RGBW-PWR breakout](rgbw-pwr-breakout). The breakout takes the channel's signal and drives the actual lighting load with substantially more current. From Studio's perspective, breakout channels look just like onboard channels — same envelopes, same dimming, same UI.

## Wiring a solid-state relay or other power stage

Solid-state relays (SSRs) and similar power stages typically need only milliamps to trigger. The LED Controller's channels are sized exactly right for this:

1. Connect the SSR's input GND to a controller channel.
2. Connect the SSR's input V+ to a power supply (the controller's passthrough is fine).
3. Wire the SSR's *output* side to whatever you're switching (lights, motors, line-voltage gear).

Now you can dim the SSR's input and the SSR drives the actual load.

## Wiring the inputs

The two inputs follow the same conventions as the inputs on the [Output 8 MKII](/docs/controllers/output-8-mkii/wiring-guide#wiring-an-input) and [Input 16](/docs/controllers/input-16/wiring-guide). They're isolated, polarity-insensitive, and accept 6–48V AC or DC.

To use a button or sensor:

1. Connect the input voltage source's V+ through the button to one terminal of an input channel.
2. Connect the input voltage source's GND to the other terminal.

The inputs feed straight into [Logic Rules](/docs/studio/logic-rules/overview) and can trigger anything in your show.

## What you should *not* wire

- **Lighting loads larger than an indicator LED, directly to a channel** — use the breakout.
- **AC loads** — the channels are DC only.
- **Above the channel voltage** — running 36V on a 24V controller will damage the channels.
- **Mixed-voltage loads on the same controller** — pick one voltage at provisioning and stick to it.
