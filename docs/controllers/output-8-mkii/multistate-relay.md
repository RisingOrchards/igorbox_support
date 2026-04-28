---
sidebar_position: 2
description: "How Multistate Relay™ lets a single channel switch between relay and solid-state on the fly"
---

# Multistate Relay™

The big feature on the Output 8 MKII is **Multistate Relay™** — six of the eight output channels can act as either a standard mechanical relay *or* a solid-state output, and you flip between them in software.

You don't have to commit to a hardware role at install time. Wire the channel once, and let the show decide whether each cue wants a clean ON/OFF (relay) or a smooth dimming ramp (solid-state).

## Why it matters

Traditional show controllers force you to choose a channel type when you specify the box. Want dimming on channel 5? Order the version with a solid-state board. Want to switch a 24V solenoid on channel 6? Order the relay version. Need both? Order two boxes.

Multistate Relay™ collapses the decision. The same Output 8 MKII can run a haunt scene with:

- **Channel 1 (relay mode)** — bumping a 24V pneumatic monster
- **Channel 2 (solid-state mode)** — fading a panel LED in and out
- **Channel 3 (solid-state mode)** — driving a small DC motor with smooth speed control
- **Channel 4 (relay mode)** — switching a 12V mister
- **Channel 7 (standard 3A relay)** — kicking a high-inrush wiper motor
- **Channel 8 (standard 3A relay)** — switching a 24V show-control beacon

All on one box. All from one show in the timeline editor.

## When to use which mode

- **Relay mode** — for switching things ON and OFF: AC loads, slow-coil solenoids, anything that doesn't need to dim.
- **Solid-state mode** — for dimming and smooth ramps: panel LEDs, DC motor speed control, anything that needs to fade.

Each Multistate channel is rated for **1.5A** in either mode. If you need more current, use channels 7 or 8 (the standard 3A relays).

## Switching modes

Open the controller in Studio, go to the Configuration tab, and click the channel. Pick the mode and Studio pushes the change to the controller right away.

Don't switch modes mid-cue — the channel needs a moment to transition.

## Limits

- **Voltage**: 9–24V DC working range. Don't run mains through any IgorBox.
- **AC loads**: only on relay-mode Multistate channels and on the two standard 3A relays. Solid-state mode is DC only.

## See also

- [Wiring Guide](wiring-guide) — example wiring for both relay-mode and solid-state-mode loads
- [Lighting](/docs/studio/timeline-editor/pwm-and-lighting) — driving solid-state-mode channels from the timeline
