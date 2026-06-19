---
sidebar_position: 1.5
description: "What an IgorBox controller does from power-on until it's ready"
---

# Boot Sequence

## When you power it on

When a controller first gets power, the channel lights run a brief, colorful sweep — a quick hello to let you know it's alive. The [Status LED](status-led) then slowly pulses orange while the controller starts up and joins your network.

Once it's on the network and has loaded its settings, it plays a short welcome sound — a little robotic voice saying "IgorBox" — out the [Audio Out](audio-out). A few seconds later, when it has finished connecting and is ready to go, the status light turns solid green.

## Status light during startup

While it's coming up, the status light walks you through where it is:

- **Pulsing orange** — starting up
- **Blue** — on the network, still connecting to the cloud (see [Status LED](status-led) for what the different blue patterns mean)
- **Solid green** — ready

## Holding the front button at power-on

You can hold the [Front Button](front-button) while powering the controller on to do one of two things. The lights flash to confirm as you pass each step, so you can let go at the right moment.

- **Hold about 7 seconds** — forget the saved WiFi. Use this when you're moving the controller to a new network.
- **Hold about 20 seconds** — full factory reset. This wipes the controller's saved content and settings and clears its local pairing. It stays registered in your Studio, though, and re-pairs automatically the next time it's online.

## If it restarts unexpectedly

If a controller restarts on its own, it comes back quietly. It skips the welcome sound and gets straight back to running its ambient show from the beginning — so a self-recovery won't startle anyone standing nearby.

It does not pick up at the exact moment it left off; the ambient show simply starts over.
