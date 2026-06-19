---
sidebar_position: 3
description: "How inputs 9–16 live on the Input 16's included breakout boards"
---

# Channel Breakout Boards

The Input 16 has sixteen inputs, but there isn't room on the main box for all sixteen connectors. So inputs **9–12** and **13–16** terminate on two small **breakout boards** that ship in the box. Each breakout connects back to the controller with a **standard Ethernet cable**.

The Ethernet cable is just a convenient, cheap, locking 8-conductor cable — it carries the input signals between the controller and the breakout. It is **not** a network connection, and the breakout is **not** a separate IgorBox. There's nothing to provision and no second device in Studio: it's one 16-input controller.

## Why it's built this way

Sixteen inputs' worth of WAGO® terminals won't fit across the front of the chassis. Moving inputs 9–16 onto breakout boards keeps the main box compact and lets you mount those inputs closer to where the sensors actually are — at the back of the attraction, near the exit, wherever the wiring is shortest.

## Wiring the breakouts

1. Plug a standard Ethernet cable from the controller's breakout port into the breakout board.
2. Wire your buttons and sensors to the breakout's inputs exactly as you would the onboard inputs — same isolated, polarity-insensitive 6–48V AC/DC inputs. See the [Wiring Guide](wiring-guide).

Inputs on the breakouts behave identically to inputs 1–8 in Studio: they show up in [Logic Rules](/docs/studio/logic-rules/overview), fire triggers, and appear in Live Preview just like local inputs.

## See also

- [Wiring Guide](wiring-guide)
- [Front Panel](front-panel)
