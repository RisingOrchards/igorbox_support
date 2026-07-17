---
sidebar_position: 6
description: "What every light on the IgorBox DMX front panel means"
beta: true
---

# Front Panel

The front panel has the [Status LED](/docs/controllers/shared/status-led), the configurable [front button](/docs/controllers/shared/front-button), and eight indicator lights. On this controller the eight lights split into two groups: the first four show **activity** (dark when idle, like every IgorBox), and the last four are **always-on configuration markers**, a faint at-a-glance readout of how the DMX side is set up.

## Lights 1–4: activity

| Light | Shows | Colors |
| --- | --- | --- |
| 1 | Input 1 | Bright purple when active, dark when idle |
| 2 | Input 2 | Bright purple when active, dark when idle |
| 3 | Relay output 1 | Bright green when on, dark when off (orange if the channel is inverted: bright = on, faint = off) |
| 4 | Relay output 2 | Same as relay 1 |

## Lights 5–8: DMX configuration (always faint)

| Light | Shows | Colors |
| --- | --- | --- |
| 5 | Refresh rate | Blue = 44/sec, green = 30/sec, orange = 20/sec, red = 10/sec |
| 6 | DMX out | Green = Standard, orange = Buffer, dark = Fixture mode |
| 7 | DMX in | Green = listening (Standard, input enabled), orange = Buffer, red = Fixture mode, dark = input off |
| 8 | Terminator | Green = built-in terminator on, red = off |

Together, lights 6–7 tell you the [operating mode](modes) at a glance: green/green is Standard with the input listening, orange/orange is Buffer, dark/red is Fixture.

The rear panel adds a marker light beside every connector, plus its own mode and terminator lights. See [Indicator Lights](/docs/controllers/shared/indicator-lights).

## Mounting

Same chassis and mounting pattern as every current IgorBox controller. See [Mounting](/docs/controllers/shared/mounting) for the footprint drawing, wall-mount and DIN-rail options, and hardware-reuse notes.
