---
sidebar_position: 5
description: "Distribute LED Controller channels across the network"
---

# Remote Channel Banks

Just like the [Input 16](/docs/controllers/input-16/remote-channel-banks), the LED Controller can host channels **9–12** and **13–16** on a remote IgorBox over Ethernet, while still appearing as a single 16-channel device in Studio.

This is how you spread sixteen channels of lighting across a long attraction without a sixteen-conductor cable run.

## Why you'd want this

Lighting wire runs tend to be **the** bottleneck in attraction wiring — every panel, pinspot, or strip needs a dedicated pair, and they fan out to wherever the lights are mounted.

Putting a host LED Controller in each zone of the attraction, then federating channels back to a single controller in Studio, means:

- Power supplies live near the loads (less voltage drop on long runs)
- One Ethernet drop per zone replaces 8 or 16 lighting wires
- Studio still shows one controller with sixteen channels — the show is authored as if everything is in one place

## Setting it up

1. Provision both the **primary** LED Controller and any remote hosts in IgorBox Studio normally.
2. Open the primary's Configuration tab.
3. For each remote bank (9–12, 13–16), pick the host controller from your account.
4. Save.

Once configured, the remote channels appear in the timeline editor and respond to Logic Rules just like local channels.

## Voltage matching

The remote host's channel voltage **must match** the primary's. If the primary is set for 24V and the remote host is set for 12V, Studio will refuse the configuration.

If you need different voltages in different parts of the attraction, use separate LED Controllers — one per voltage.

## Latency

Remote bank latency is in the single-digit milliseconds on a healthy local network. Not noticeable for lighting cues.

## Limits

Same as the Input 16:

- **Two remote banks per primary** (9–12 and 13–16)
- **One bank per host**
- **Same local network** as the primary
