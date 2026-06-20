---
sidebar_position: 1000
description: "Specifications for the LED Controller"
---

# Tech Specs

The reference card for the install team.

:::danger
The figures here are working limits. If you choose to operate outside them, you do so at your own risk.
:::

## Power

|  |  |
| --- | --- |
| Supply voltage | 9–24V DC |
| Recommended supply | 12V or 24V, 1A minimum |
| Connector | 5.5 × 2.1 mm barrel jack, center-positive |

## Outputs

|  |  |
| --- | --- |
| Channels | 16 |
| Type | Solid-state low-side switching with current clamp |
| **Current per channel** | **20 mA maximum (clamped)** |
| Channel voltage | 12V or 24V DC (per-controller, not per-channel) |

The 20 mA clamp means the onboard channels drive **low-current LED loads directly** — indicators, panel lights, and pinspots. For loads that draw more than 20 mA — LED strips, larger fixtures, or motors — use the [RGBW-PWR breakout](rgbw-pwr-breakout).

## Inputs

|  |  |
| --- | --- |
| Channels | 2 |
| Type | Optically isolated, polarity-insensitive |
| Voltage range | 6–48V AC or DC |

## Audio

|  |  |
| --- | --- |
| Output | Stereo line level, 3.5 mm TRS jack |

The LED Controller has the same audio hardware as the rest of the lineup.

## Connectivity

|  |  |
| --- | --- |
| Ethernet | 100Base-T, RJ45 |
| WiFi | 2.4 GHz, 802.11 b/g/n |

## Storage

32 GB onboard, formatted for low-latency audio playback.

## Mechanical

|  |  |
| --- | --- |
| Case material | 16ga Steel |
| Mounting | Wall or DIN rail (with optional din rail kit) |
| Operating temp | 0–50 °C |
| Storage temp | -20–70 °C |
