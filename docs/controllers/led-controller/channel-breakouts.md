---
sidebar_position: 5
description: "How channels 9–16 live on the LED Controller's included breakout boards"
---

# Channel Breakout Boards

The LED Controller is a 16-channel device, but there isn't room on the main box for all sixteen output connectors. So channels **9–12** and **13–16** terminate on two small **breakout boards** that ship in the box. Each breakout connects back to the controller with a **standard Ethernet cable**.

The Ethernet cable here is just a convenient, cheap, locking 8-conductor cable — it carries the channel signals between the controller and the breakout. It is **not** a network connection, and the breakout is **not** a separate IgorBox. There's nothing to provision, no host to pick, and no second device in Studio. To Studio it's all one 16-channel controller.

## Why it's built this way

Sixteen channels' worth of WAGO® terminals won't fit across the front of the chassis. Moving channels 9–16 onto breakout boards keeps the main box compact and lets you mount those channels wherever the wiring is most convenient — at the far end of a prop, inside a separate enclosure, or right next to the controller.

## Wiring the breakouts

1. Plug a standard Ethernet cable from the controller's breakout port into the breakout board.
2. Wire your loads to the breakout's channels exactly as you would the onboard channels — same 20 mA-per-channel signal, same channel voltage, same polarity convention. See the [Wiring Guide](wiring-guide).

The breakout channels behave identically to channels 1–8 in Studio: same envelopes, same dimming, same indicator colors.

## Higher-current channels

The standard breakout carries the same low-current signal as the onboard channels. If you need a breakout that can actually drive a higher-current or different-voltage load on those four channels, use the [RGBW-PWR breakout](rgbw-pwr-breakout) in place of a standard breakout board.

## See also

- [Wiring Guide](wiring-guide)
- [RGBW-PWR Breakout](rgbw-pwr-breakout) — a higher-current alternative to a standard breakout board
