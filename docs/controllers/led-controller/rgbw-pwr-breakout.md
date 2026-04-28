---
sidebar_position: 3
description: "Drive higher-power lighting and motors with the RGBW-PWR breakout"
---

# RGBW-PWR Breakout

The RGBW-PWR breakout is an optional expansion accessory for the LED Controller. It's a separate board that connects to the controller and drives **up to 120W of lighting per board** — far beyond what the controller's onboard channels can handle alone.

If you're driving big LED panels, large strip runs, or higher-current motors, this is what gets you there.

:::caution
Photo coming soon.
:::

## What it does

The breakout takes a channel (or a group of channels) from the LED Controller and routes it to a beefier power stage. To Studio, it looks like a regular channel — same envelopes, same color, same dimming behavior. The only difference is what it can drive.

Each breakout has up to four output groups, typically configured as:

- **One RGBW group** (R, G, B, W on four channels — drives a high-power RGBW fixture)
- **Four independent channels** (one per color or one per fixture)
- **A mix** (e.g., one RGBW group plus a single high-power white channel)

The exact mapping is configured in Studio when you add the breakout.

## Connection styles

The breakout supports two connection styles, configurable at install time:

### Ethernet (RJ45) style

The breakout has its own RJ45 jack and connects to the LED Controller via Ethernet. This is the simplest install — single cable run, can be located anywhere on the same local network.

This is the recommended style for permanent installs.

### Terminal style

The breakout connects directly to the LED Controller's expansion jack via a multi-conductor cable. Use this when the controller and breakout are mounted in the same enclosure or rack.

Higher density, slightly less flexibility — but no separate Ethernet drop.

## Power for the breakout

The breakout has its own dedicated power input. **Do not power it from the LED Controller's passthrough** — that's only sized for the controller itself, not for high-power loads.

A typical install:

- 120W LED fixture → 24V supply → RGBW-PWR breakout → fixture
- LED Controller has its own small supply for logic; breakout has the big supply for the load.

## In Studio

Once the breakout is wired and reachable on the network, add it from the LED Controller's Configuration tab:

1. Click **Add Breakout**.
2. Select the connection style.
3. Pick the channel mapping (RGBW group, four independent channels, etc.).
4. Studio adds the breakout's channels to the controller as if they were native channels.

After that, the breakout's channels show up in the timeline editor and Logic Rules just like onboard channels — no special handling required.

## Limits

- **One breakout per LED Controller** at launch.
- **120W maximum per breakout.** This is the thermal limit of the board.
- **DC only.** Same as the controller's onboard channels.

## Order one

The breakout is sold separately. See the [IgorBox Store](https://store.igorbox.com) for current pricing and availability.
