---
sidebar_position: 4
description: "What's on the front of the Output 8 MKII"
---

# Front Panel

The Output 8 MKII front panel is laid out for fast at-a-glance status checks during a show.

:::caution
Photo coming soon.
:::

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
| **Green** | A standard relay channel. Solid green when the channel is on, dark when it's off. |
| **Orange** | A standard relay channel set to inverted. Bright when the channel is on, and dimly lit when it's off (so it's never fully dark). |
| **Red** | A solid-state (powered) channel. Lit when the channel is on. If that channel is also set to inverted, it stays dimly lit when off instead of going fully dark. |

A couple of things to take away:

- **The color tells you the channel's mode** at a glance — green means a standard relay, red means solid-state, and orange means the channel is inverted.
- **Inverted channels are never fully dark.** They keep a faint glow when off, so you can always tell an inverted channel apart from one that's simply turned off or disabled.

The light reflects the **commanded state** of the channel — so an inverted channel shows its indicator on when the channel is *active*, even though that flips the output the opposite way.

You can disable the channel indicators entirely from the controller's Configuration tab in Studio (useful in pitch-black haunt environments where any light leak would break the scene).

## Mounting

The MKII chassis has the same dimensions and mounting hole pattern as the MKI, so existing rack-mount, wall-mount, and DIN-rail brackets all work. If you're upgrading from MKI, your mounting hardware is reusable.
