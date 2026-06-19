---
sidebar_position: 50
description: "Drive any channel live, in real time, from the browser"
---

# Manual Control

Manual Control is exactly what it sounds like: you grab the channels of a controller (or group) and drive them yourself, in real time, from your browser. Sliders, buttons, color pickers — every change you make hits the hardware right away.

It's the fastest way to verify wiring, debug a flaky sensor, troubleshoot a stuck show, or just demonstrate the system to someone walking by.

## Starting manual control

From a controller's Overview tab, click **Manual Control**. From a group's page, click Manual Control on the group's overview.

The controller's status LED pulses **blue** to indicate it's in manual control mode. Show playback is paused while you have control.

## Driving channels

The manual control panel shows one row per channel:

- **Switching outputs** (Output 8 MKII relay and Multistate channels — either mode — and Input 16 relays) — a toggle button. Click to flip on/off.
- **Dimmable outputs** (LED Controller channels) — a slider, 0–100%.
- **Servo outputs** — a slider, 0–180°.
- **Channel indicators** — drive the front-panel LED color directly, independent of any wired output.

Drag a slider — the load follows. Click a button — the relay clicks.

## Ending manual control

Click **End Manual Control**. The controller releases its channels and goes back to whatever it was doing before — typically the [ambient routine](ambient-routines).

Manual Control also ends automatically if you close the browser tab, lose your network connection, or start manual control from another tab on the same controller.

## Manual Control vs. Live Preview

Manual Control and [Live Preview](timeline-editor/live-preview) both drive a controller in real time, but they're different tools:

- **Manual Control** drives channels directly from sliders and buttons. No timeline. For wiring tests, demos, troubleshooting.
- **Live Preview** plays a show from the timeline editor on real hardware. For authoring shows.

Starting one ends the other.

## Permissions

Manual Control requires the **Control Devices** permission in your Studio role. Viewers can't drive channels; editors and admins can. Set per-user roles in your Studio's Settings → Members.
