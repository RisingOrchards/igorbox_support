---
sidebar_position: 4
description: "What's on the front of the Input 16"
---

# Front Panel

The Input 16 front panel is dominated by its sixteen channel indicator LEDs — one for each input — plus indicators for the two onboard relay outputs.

:::caution
Photo coming soon.
:::

| Element | What it tells you |
| --- | --- |
| Status LED | Overall controller state — see [Status LED](/docs/controllers/shared/status-led) |
| 16 RGB channel indicators (inputs) | One per input. Lit when the input is active. Color is configurable per channel in Studio. |
| 2 RGB channel indicators (outputs) | One per relay output. Lit when the channel is on. |
| Front button | Configurable per controller — see [Front Button](/docs/controllers/shared/front-button) |

## Channel indicators

Each input has a dedicated RGB LED. By default it's white when the input is active and off otherwise — but every channel's color can be configured in Studio (Configuration tab → click the channel → Indicator Color).

This is more useful than it sounds. Color-code your inputs by puzzle, by zone, or by sensor type, and you can tell at a glance what's happening just by looking at the front panel:

- **Cyan** = scene-1 sensors
- **Magenta** = scene-2 sensors
- **Green** = "puzzle solved" indicators
- **Red** = E-stop / fault inputs

The front-panel brightness is also dimmable globally (Configuration tab → Channel LEDs → Brightness). Useful in dark haunt scenes where any glow would be distracting.

## Channel banks

If the controller is hosting a [remote channel bank](remote-channel-banks) for another Input 16, the indicators reflect the input state on this box. If the controller is the primary for remote banks, the indicators for channels 9–16 show the *remote* state.

If a remote host loses connection, those channels show off, and the status LED shows degraded.

## Mounting

Same chassis dimensions as the rest of the lineup, including the original Input 8 — existing brackets and racking are reusable.
