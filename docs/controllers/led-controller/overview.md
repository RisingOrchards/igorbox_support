---
sidebar_position: 1
description: "What the LED Controller is and how to get started with it"
---

# LED Controller

The LED Controller is a 16-channel low-current dimmable controller. Each onboard channel is a smooth dimming output, perfect for low-current LED loads — puzzle-board LEDs, signal indicators, panel lights, pinspots, low-power "puzzle solved" lights — or for driving an external power stage that does the heavy switching.

For higher-current loads — LED strips and larger fixtures — pair it with the [RGBW-PWR breakout](rgbw-pwr-breakout). The breakout adds a power stage so four channels can drive up to 120W of lighting per board.

It also has two isolated inputs you can wire into Logic Rules just like any other input.

![LED Controller Back Panel](https://assets.igorbox.cloud/product/led.png)

## What's in the box

| Outputs | 16 × dimmable channels (low current — clamped at 20 mA per channel) |
| --- | --- |
| Inputs | 2 × isolated inputs (6–48V AC/DC) |
| Voltage | 12V or 24V DC (selected during provisioning) |
| Connectivity | Ethernet + WiFi |
| Connectors | WAGO® on every terminal |
| Audio | Stereo line out (3.5 mm) |
| Storage | 32 GB onboard |
| Front panel | Status LED, RGB channel indicators, configurable [front button](/docs/controllers/shared/front-button) |
| Power | 9–24V DC, center-positive barrel jack (12V 1A supply included) |
| Expansion | [RGBW-PWR breakout](rgbw-pwr-breakout) — higher-current / different-voltage output for 4 channels, up to 120W per board |
| Channel breakouts | Channels 9–16 ship on two included [breakout boards](channel-breakouts), connected by a standard Ethernet cable |

## What 20 mA means in practice

Each onboard channel can drive **up to 20 mA**. That's enough for:

- A single indicator LED (the 5 mm or SMD kind on a circuit board)
- A panel light or pinspot — they're low-current LEDs too
- A solid-state relay's input
- An optocoupler that drives a downstream high-current circuit
- A low-power signal to another show controller

It's **not** enough for:

- A length of LED strip
- A larger fixture
- A motor

For those, use the [RGBW-PWR breakout](rgbw-pwr-breakout). The breakout takes the LED Controller's signal and drives the actual load with substantially more current.

## Best for

- **Escape room puzzle boards** — sixteen indicator LEDs that flash, fade, and reveal solved puzzles
- **Status indicator panels** — visual readouts of show state for staff
- **Driving external power stages** — the LED Controller's channels are exactly what an SSR or breakout board wants on its input
- **Real lighting** — paired with the RGBW-PWR breakout (LED strips and larger fixtures, up to 120W)
- **Motor speed control** — paired with the RGBW-PWR breakout or an external motor driver

## Quick start

1. **Power it up.** 9–24V DC.
2. **Set the channel voltage.** During [Magic Provision](/docs/controllers/shared/magic-provision), Studio asks whether the channels are wired for 12V or 24V loads. This is per-controller, not per-channel.
3. **Connect to the network.** See [Connectivity](/docs/controllers/shared/connectivity).
4. **Wire your channels** with [Easywire™](/docs/controllers/shared/easywire) or follow the [wiring guide](wiring-guide).
5. **Build a show.** [Lighting](/docs/studio/timeline-editor/pwm-and-lighting) is the place to start.

## See also

- [Wiring Guide](wiring-guide)
- [RGBW-PWR Breakout](rgbw-pwr-breakout) — the accessory for real lighting and motor loads
- [Motor Speed Control](motor-speed-control)
- [Channel Breakout Boards](channel-breakouts)
- [Front Panel](front-panel)
- [Tech Specs](tech-specs)
- [Regulatory Compliance](compliance) — FCC & ISED statements
