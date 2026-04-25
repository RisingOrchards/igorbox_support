---
sidebar_position: 3
description: "Wiring lights, solenoids, motors, and inputs to the Output 8 MKII"
---

# Wiring Guide

This guide walks through the most common things you'll wire to an Output 8 MKII. For everything covered here, [Easywire™](/docs/controllers/shared/easywire) can light up the right terminals on the controller and walk you through it visually — these instructions are the manual fallback.

:::caution
Photos coming soon. The wiring procedures below are accurate; we're working on diagrams to match.
:::

:::info
We know wiring is intimidating the first time. If anything below is unclear, jump on [Discord](https://discord.igorbox.com) — someone in the community has wired exactly the thing you're wiring.
:::

## The terminal block

The MKII terminal block is divided into three zones:

- **Outputs (left)** — channels 1–6 (Multistate, 1.5A) and channels 7–8 (standard, 3A)
- **Power passthrough (center)** — V+ and GND mirrored from the barrel jack
- **Inputs (right)** — the two isolated inputs

Each terminal is a WAGO® lever. Lift the lever, insert the wire, drop the lever. No screwdriver, no torquing, no spring fatigue.

## Channel basics

Every output channel is a vertical pair of WAGO terminals:

- **Off** — the two terminals are not connected.
- **On** — the two terminals are connected. Power flows through the load.

Treat each channel like a light switch in the load's positive (V+) leg.

## Wiring a light

1. Connect the power supply's GND to the light's GND.
2. Connect the power supply's V+ to one terminal of an output channel.
3. Connect the other terminal of that channel to the light's V+.

When the channel turns on, the light turns on. When it's off, the light is off.

### Using the passthrough power

If the light runs off the same voltage as the controller (12V or 24V DC), you can save a power supply by jumping power from the center passthrough zone to the channel:

1. Connect the light's GND to the GND terminal in the passthrough zone.
2. Jump V+ from the passthrough zone to one terminal of an output channel.
3. Connect the other terminal of that channel to the light's V+.

:::warning
The passthrough is the **same voltage** as your input supply and shares its rails with the controller. The internal bus is rated for **2A total**. If you're powering more than 2A worth of loads, use an external supply for the loads.
:::

## Wiring a pneumatic solenoid

Pneumatics are wired exactly like a light, but pay attention to current and voltage:

- Most show pneumatic solenoids are 12V or 24V DC.
- Coil current at hold is usually under 1A.
- **Inrush current** at the moment of latching can spike to 2–3× the hold current.

For a typical 24V monster valve (~0.5A hold), a Multistate channel in **relay mode** is fine. For a heavier valve (>1A hold or >2A inrush), use channel 7 or 8 (the 3A standard relays).

:::tip
Pneumatic solenoids are inductive. Use a flyback diode across the solenoid's coil if it doesn't have one built in. Most show valves do; check your spec sheet.
:::

## Wiring a motor (light duty, with speed control)

A motor with speed control is the canonical use case for **Multistate solid-state mode**:

1. Wire it the same way as a light, with the motor in place of the bulb.
2. Set the channel to **solid-state mode** in Studio (Configuration tab → click the channel → Mode: Solid-state).
3. In the timeline editor, drag the channel to a lighting track and draw an envelope. The motor speed will follow your control points.

:::warning
Solid-state mode is DC only. Don't try to dim an AC load this way.
:::

## Wiring a motor (heavy duty, ON/OFF only)

A wiper motor or other high-inrush motor needs the bigger relays:

1. **Use channel 7 or 8** (the 3A standard relays).
2. Use an external power supply for the motor — don't pull motor current through the controller's passthrough.
3. Wire it like a light: GND to GND, V+ through the channel.

:::danger
Don't power motors from the controller's barrel jack passthrough. Motor inrush will brown out the controller and may damage components.
:::

## Wiring an input

The two inputs on the right side of the terminal block are isolated and accept **6–48V AC or DC**. They're polarity-insensitive — you can't wire them backwards.

To use a button or footswitch:

1. Connect the input voltage source's V+ through the button to one terminal of an input channel.
2. Connect the input voltage source's GND to the other terminal.

When the button is pressed, the input fires. The inputs feed straight into the [Logic Rules](/docs/studio/logic-rules/overview) engine and can be used as triggers.

## What about mains power?

We do not recommend or support running mains AC voltage through any IgorBox controller.

If you need to switch mains, use a **show-control-grade relay panel** wired to one of the IgorBox's outputs. The IgorBox switches a low-voltage signal that drives the panel; the panel switches the mains.
