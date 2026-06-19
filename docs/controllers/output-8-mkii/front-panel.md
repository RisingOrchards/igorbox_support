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
| 8 RGB channel indicators | One per output channel. Lit when the channel is active — see [Channel indicators](#channel-indicators) below. |
| Front button | Configurable per controller — see [Front Button](/docs/controllers/shared/front-button) |

## Channel indicators

Each channel has its own RGB LED. The LED reflects the **commanded state** of the channel — so a "normally closed" channel shows the indicator on when the channel is *active*, even though the underlying relay is open.

You can disable the channel indicators entirely from the controller's Configuration tab in Studio (useful in pitch-black haunt environments where any LED leak would break the scene).

## Mounting

The MKII chassis has the same dimensions and mounting hole pattern as the MKI, so existing rack-mount, wall-mount, and DIN-rail brackets all work. If you're upgrading from MKI, your mounting hardware is reusable.
