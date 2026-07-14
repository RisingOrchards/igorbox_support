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
| Status LED | Overall controller state — see [Status LED](/docs/controllers/shared/status-led) |
| 8 RGB channel indicators | One per output channel. The color and brightness tell you the channel's mode and whether it's on or off — see [Channel indicators](#channel-indicators) below. |
| Front button | Configurable per controller — see [Front Button](/docs/controllers/shared/front-button) |

## Channel indicators

Each channel has its own RGB LED. The **color** tells you how that channel is set up, and the **brightness** tells you whether it's on or off:

| Light | What it means |
| --- | --- |
| **Green** | A channel in [solid-state mode](multistate-relay) (powered output). Bright green when the channel is on, dark when it's off. |
| **Red** | A channel in relay mode (dry contact). Bright red when the channel is on, dark when it's off. |
| **Orange** | An inverted channel. Bright orange when the channel is on. When it's off, it keeps a faint glow instead of going dark: faint orange, or faint red if the channel is in relay mode. |

A couple of things to take away:

- **The color tells you the channel's mode** at a glance: green means solid-state, red means relay (dry contact), and orange means the channel is inverted.
- **Inverted channels are never fully dark.** They keep a faint glow when off, so you can always tell an inverted channel apart from one that's simply turned off or disabled.

The light reflects the **commanded state** of the channel, so an inverted channel shows its indicator on when the channel is *active*, even though that flips the output the opposite way.

The rear connector lights follow the same color language, with a faint always-on marker at every connector (as of firmware 2.2.0). See [Indicator Lights](/docs/controllers/shared/indicator-lights) for the full rear-panel reference.

You can dim the indicators globally or disable them entirely from the controller's Configuration tab in Studio (useful in pitch-black haunt environments where any light leak would break the scene).

## Mounting

The MKII chassis has the same dimensions and mounting hole pattern as the MKI, so existing rack-mount, wall-mount, and DIN-rail brackets all work. If you're upgrading from MKI, your mounting hardware is reusable.
