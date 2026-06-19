---
sidebar_position: 5
description: "Network requirements and connectivity options for IgorBox controllers"
---

# Connectivity

Every IgorBox controller has both Ethernet and WiFi built in. You don't pick one at purchase — you pick whichever is convenient on site.

## Ethernet vs. WiFi

|  | Ethernet | WiFi |
| --- | --- | --- |
| Speed | Plenty | Plenty |
| Range | Limited by cable | Anywhere your access point reaches |
| Reliability | Bulletproof | Depends on your access point |
| **Recommended for** | Permanent installs, anywhere you can pull a cable | Temporary installs, hard-to-cable locations, prop carts |

:::tip
For permanent attractions, run a cable. The IgorBox WiFi stack is solid, but a CAT6 run is cheap insurance against interference from LED drivers, motors, ballasts, and the inevitable visitor with a hotspot.
:::

## What your network needs

For the controller to run normally, your network needs:

- **DHCP** so the controller can get an IP address (most networks do this by default)
- **Single VLAN** for all your controllers that need to communicate (most routers do this by default)

For configuration and management of shows

- **DNS** that can resolve `*.igorbox.studio`, `*.igorbox.io` and `*.igorbox.com`
- **Outbound HTTPS to those domains** — open standard web ports (443) outbound

If you have a managed firewall and need to allowlist specific destinations, those three domains plus port 443 outbound is what to allow. (dedicated ip blocks available to Enterprise tier customers)

## Internet is not required for the show to run

Once a controller has its show data, it plays back fully offline. Triggers, audio, lighting, logic — all of it runs from the onboard storage. The internet is only needed to:

- Push a new show or configuration
- See live telemetry in Studio
- Run [Live Preview](/docs/studio/timeline-editor/live-preview) while you're editing

If your internet drops in the middle of a show night, **the show keeps running**. The status LED will show degraded, and you'll see the controller as offline in Studio, but everything plays.

## A dedicated network is highly recommended

Whatever device gets onto the network with your IgorBox controllers can talk to them. Anyone on your guest WiFi could potentially reach the controllers' local management interface.

Best practice for any production attraction:

- Put the controllers on their own VLAN or their own access point, isolated from guest and office networks.
- Hide the SSID and use a strong password.
- Use a quality access point.

## Recommended hardware

We've installed and tested these in the field. Any of them will run an IgorBox install reliably:

- **[Ubiquiti UniFi](https://www.ui.com/products)** — Our default. Mesh-capable, great management software, scales from one room to a campus.
- **[Netgear Nighthawk](https://www.netgear.com/home/products/networking/wifi-routers/)** — What we run in our office. Solid for medium attractions.
- **[TP-Link Archer](https://www.tp-link.com/us/home-networking/wifi-router/)** — Budget-friendly, surprisingly reliable for single-AP installs.

If you have a specific router in mind, ask us on [Discord](https://discord.igorbox.com) or reach out to help@igorbox.com — we've probably tried it.
