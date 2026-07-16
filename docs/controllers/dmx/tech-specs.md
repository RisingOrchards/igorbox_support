---
sidebar_position: 1000
description: "IgorBox DMX technical specifications"
beta: true
---

# Tech Specs

## DMX

| | |
| --- | --- |
| Universes | 1 out |
| DMX channels | 512 |
| Refresh rate | 10 / 20 / 30 / 44 per second, selectable (default 30) |
| Input | Yes (fully isolated): Buffer pass-through with per-channel override, rule triggers, recording |
| Termination | Built-in 120Ω on input side, software-switchable |
| Failsafe | Hardware relay connects DMX in → out when unpowered or in Fixture mode |
| Connectors | 3-pin XLR and WAGO |
| Safe Zones | Per-channel min/max limits enforced on all output, including [paired fine/coarse (16-bit) channels](safe-zones) |

## Relay outputs

| | |
| --- | --- |
| Count | 2 |
| Type / rating | 1.5A max (same relays as other Controllers) |
| Inversion | Per-channel, in IgorBox Studio |

## Inputs

| | |
| --- | --- |
| Count | 2, isolated |
| Voltage range | 6V-48V DC/AC |

## Audio

| | |
| --- | --- |
| Output | Stereo line out, 3.5 mm |
| Formats | WAV, FLAC, MP3 |
| Storage | 32 GB onboard |

## Connectivity

| | |
| --- | --- |
| Ethernet | 10/100 |
| WiFi | 2.4 GHz |
| Operation | Cloud-connected, not cloud-dependent: deployed shows, triggers, and rules run without internet |

## Power

| | |
| --- | --- |
| Input | 9–24V DC, center-positive barrel |
| Included supply | 12VDC 1A |
| Consumption | ~400mA |

## Mechanical

|  |  |
| --- | --- |
| Case material | 16ga Steel |
| Mounting | Wall or DIN rail (with optional din rail kit) |
| Operating temp | 0–50 °C |
| Storage temp | -20–70 °C |
