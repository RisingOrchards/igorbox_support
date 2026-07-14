---
sidebar_position: 3.5
description: "What every indicator light on an IgorBox controller means, front and rear"
---

# Indicator Lights

Beyond the [Status LED](status-led), every IgorBox controller is covered in small indicator lights: one next to every front-panel channel, and one next to every rear connector. As of firmware **2.2.0** they all follow one philosophy and color coding standard:

- **Front panel shows activity.** Front lights show what's happening right now. When a channel is idle, its front light is dark.
- **Rear panel marks every connector.** Each rear connector keeps a faint always-on glow so you can find and identify the type of connector at a glance, and jumps to full brightness when it's active.

So a light is always doing one of three things: **bright** (active), **faint** (an idle marker), or **dark** (nothing to show). Everything scales with the controller's LED Brightness setting in Studio (Configuration tab), and you can turn the lights off entirely for pitch-black scenes.

## Color Code Standard

:::info New in firmware 2.2.0
The faint idle markers on the rear input connectors are new in firmware 2.2.0. If your rear input lights stay dark when nothing is active, your controller simply hasn't received the update yet. It will start showing the markers after its next firmware update.
:::

* **GREEN** - Normal Relay
* **ORANGE** - Inverted Relay
* **PURPLE** - Input
* **RED** - Power Positive
* **BLUE** - Power Negative

## Rear connector lights

These apply to the Output 8 MKII, Input 16, and LED Controller:

| Connector | Idle | Active |
| --- | --- | --- |
| Power (+) terminal | Faint red, always on | Faint red, always on |
| Power (−) terminal | Faint blue, always on | Faint blue, always on |
| Input connector (both lights of the pair) | Faint purple | Bright purple |
| Output / relay connector pair | See below | See below |

The red and blue power markers are there purely to help you identify polarity when wiring: red is always positive, blue is always negative.

### Output connector pairs

Each output channel's rear connector pair signals both the channel's state and, through its color, how the channel is set up:

- **Standard channel (not inverted)**: both lights are bright green when the channel is on. When it's off, one light keeps a faint green marker glow and the other goes dark.
- **Inverted channel**: the same idea in orange. When the channel is on, one light is bright orange. When it's off, both lights keep a faint orange glow.

**Output 8 MKII channels in relay mode** (a dry contact, see [Multistate Relay™](/docs/controllers/output-8-mkii/multistate-relay)) are special: the pair shows the **actual switch position**, not the commanded state. A red light marks the common terminal and a blue light marks the switched terminal. Both glow bright when the contacts are closed and faint when they're open. If the channel is inverted, the red light turns orange and the bright and faint states swap.

## Front panel lights

Each controller's front panel is covered on its own page:

- [Output 8 MKII front panel](/docs/controllers/output-8-mkii/front-panel): color shows the channel's mode, brightness shows on or off
- [Input 16 front panel](/docs/controllers/input-16/front-panel): purple per-input lights
- [LED Controller front panel](/docs/controllers/led-controller/front-panel): each light dims smoothly with its channel

With the exception of relay-mode rear pairs noted above, every indicator reflects the state the controller is **commanding**, not a live electrical reading of the wiring. An inverted channel shows "on" when the channel is logically active, even though the physical output does the opposite.
