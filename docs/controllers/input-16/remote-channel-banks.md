---
sidebar_position: 3
description: "Distribute Input 16 channels across the network"
---

# Remote Channel Banks

The Input 16 has sixteen physical input terminals — but you don't have to use all sixteen on the same physical box. Channels **9–12** and **13–16** can be hosted on a remote IgorBox over Ethernet, while still appearing as a single Input 16 in Studio.

This is what we call **remote channel banks**: one Input 16 spread across multiple physical boxes.

## Why you'd want this

Wiring runs are the single biggest cost driver in a permanent attraction. Pulling 16 sensor wires from the entrance back to the control rack is expensive, slow, and prone to interference.

Remote channel banks let you:

- Put one Input 16 in the entrance with the entry sensors on channels 1–8
- Put a second IgorBox at the back of the attraction with sensors on channels 9–12
- Put a third near the exit with sensors on channels 13–16
- Wire one Ethernet cable between them

In Studio, it's still **one Input 16** with all 16 channels, all the same Logic Rules, all the same UI. The transport between the boxes is just plumbing.

## What can host a remote bank

Any current IgorBox controller with the right number of inputs can host a remote bank. In practice, that means another Input 16.

The boxes must be on the **same local network**. See [Connectivity](/docs/controllers/shared/connectivity).

## Setting it up

1. Open the **primary** Input 16 (the one that owns channels 1–8).
2. Go to the Configuration tab.
3. For each remote bank (9–12, 13–16), pick the **host controller** from the list of controllers in your account.
4. Save.

Once configured, channels on the remote bank behave exactly like local channels — they show up in Logic Rules, they fire triggers, they appear in Live Preview.

## Latency

Channel banks talk to the primary over local Ethernet, so latency is in the single-digit milliseconds. Not noticeable for trigger inputs.

If your network is congested or the host loses connection, the status LED on the remote host shows degraded, and the channels won't fire until connectivity is restored.

## Limits

- A primary Input 16 can host **two** remote banks (9–12 and 13–16).
- A host can serve **one** bank to one primary.
- Remote banks must be on the **same local network** as the primary.
