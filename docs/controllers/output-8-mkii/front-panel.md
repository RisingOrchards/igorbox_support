---
sidebar_position: 4
description: "What's on the front of the Output 8 MKII"
---

# Front Panel

The Output 8 MKII front panel is laid out for fast at-a-glance status checks during a show.

![Front Panel](https://assets.igorbox.cloud/product/IgorBox-Front-square.png)

From left to right:

| Element | What it tells you |
| --- | --- |
| Status LED | Overall controller state. See [Status LED](/docs/controllers/shared/status-led) |
| 8 RGB channel indicators | One per output channel. The color and brightness tell you the channel's mode and whether it's on or off. See [Channel indicators](#channel-indicators) below. |
| Front button | Configurable per controller. See [Front Button](/docs/controllers/shared/front-button) |

## Channel indicators

Each channel has its own RGB LED. The **color** tells you how that channel is set up, and the **brightness** tells you whether it's on or off:

| Light | What it means |
| --- | --- |
| **Green** | A channel in relay mode (dry contact). Bright green when the channel is on, dark when it's off. |
| **Orange** | An **inverted** relay-mode channel. Bright orange when the channel is on, faint orange when it's off. |
| **Red** | A channel in [solid-state mode](multistate-relay) (powered output). Bright red when the channel is on. When it's off: dark for a normal channel, a faint red glow for an inverted one. |

A couple of things to take away:

- **The color tells you the channel's mode** at a glance: green and orange are relay mode (orange marks it inverted), red is solid-state.
- **Inverted channels are never fully dark.** They keep a faint glow when off (orange in relay mode, red in solid-state mode), so you can always tell an inverted channel apart from one that's simply turned off or disabled.

The light reflects the **commanded state** of the channel, so an inverted channel shows its indicator on when the channel is *active*, even though that flips the output the opposite way.

The rear connector lights follow the same color language, with a faint always-on marker at every connector (as of firmware 2.2.0). See [Indicator Lights](/docs/controllers/shared/indicator-lights) for the full rear-panel reference.

You can dim the indicators globally or disable them entirely from the controller's Configuration tab in Studio (useful in pitch-black haunt environments where any light leak would break the scene).

## Mounting

The MKII chassis has holes for wall-mount directly with screws through the side flanges, and we sell a DIN-rail bracket kit that can use the side flange holes to position the controller in 5 different positions.