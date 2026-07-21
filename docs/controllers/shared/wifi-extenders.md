---
sidebar_position: 6
description: "Why WiFi range extenders and repeaters can break controller-to-controller triggers, and what to use instead"
---

# WiFi Extenders and Repeaters

Short version: **don't put IgorBox controllers on a network that uses a WiFi range extender or repeater.** If you need more coverage, use access points connected by cable or a proper mesh system.

## Why this matters

Your controllers do two different kinds of talking:

1. **Talking to the cloud.** This is how you push shows, see telemetry, and manage things in Studio. It works like any normal internet traffic.
2. **Talking to each other.** When an input on one controller triggers a show on another controller, that message travels directly across your local network, box to box. It never touches the internet. This is what keeps your show running even when the internet is down.

That second kind of talking works like a shout to the whole room: one controller calls out, and every other controller on the network hears it at the same time.

A range extender or repeater (a device that rebroadcasts your existing WiFi under the same network name) splits that room in two. Devices connected through the extender are in one room, devices on the main router are in the other, and the shout often doesn't make it from one room to the other. Regular internet traffic passes through fine, which is what makes this so sneaky.

:::info Repeaters are not mesh
Extenders and repeaters are not the same thing as a mesh WiFi system, even though both add coverage. An extender simply listens to your existing WiFi and rebroadcasts what it hears. The units in a mesh system work together as one coordinated network, so traffic (including the controller-to-controller "shout") reaches every unit reliably.
:::

## What it looks like when this happens

The confusing part is that everything *looks* healthy:

- Every controller shows online in your Studio
- Shows play normally on each controller
- Inputs trigger shows on the **same** controller just fine

But controller-to-controller triggers misbehave:

- An input on one controller doesn't fire the show on another controller
- It works after a reboot, then stops later
- It works some days and not others, with no pattern you can find
- One controller seems "deaf" while its neighbors work perfectly

The reason it comes and goes: each controller picks which access point to connect to every time it powers on. A controller that lands on the main router today might land on the extender tomorrow.

## Current firmware helps, but don't rely on it

Firmware 2.2.0 and later includes safeguards that keep controller-to-controller triggers working through most of these setups.

Treat that as a safety net, not a plan. A clean network is still the right foundation, and it also avoids the slower response times an extender adds to every trigger.

## What to do instead

- **Best: run cable.** Ethernet to each controller sidesteps all of this. See [Connectivity](connectivity).
- **Need more WiFi coverage?** Use additional access points connected back to your router by cable, or a quality mesh system designed as one unit (like UniFi). These share the room properly.
- **Already have an extender for something else?** Give it a different network name so the controllers can't connect to it. Extenders for printers, cameras, or office gear are fine as long as your controllers stay off them.
- **Keep controllers on their own network.** A dedicated network name just for controllers, on one good access point, is simple and bulletproof. More on that in [Connectivity](connectivity).

## Not sure if you have one?

Walk your space and look for anything plugged into an outlet that mentions "extender," "repeater," or "booster," including older Apple AirPort units in extend mode. If you find one and you're not sure whether it's affecting your controllers, ask us on [Discord](https://discord.igorbox.com) or email help@igorbox.com and we'll help you check.
