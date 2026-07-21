---
sidebar_position: 50
description: "Drive any channel live, in real time, from the browser"
---

# Manual Control

Manual Control is exactly what it sounds like: you grab the channels of a controller and drive them yourself, in real time, from your browser. Sliders, buttons, color pickers — every change you make hits the hardware right away.

It's the fastest way to verify wiring, debug a flaky sensor, troubleshoot a stuck show, or just demonstrate the system to someone walking by.

## Starting manual control

From a controller's Overview tab, click **Start Manual Control**.

The controller's status LED blinks **orange** to indicate it's in manual control mode. Show playback is paused while you have control.

## Driving channels

The manual control panel shows one row per channel:

- **Switching outputs** (Output 8 MKII relay and Multistate channels — either mode — and Input 16 relays) — a toggle button. Click to flip on/off.
- **Dimmable outputs** (LED Controller channels) — a slider, 0–100%.
- **Channel indicators** — drive the front-panel LED color directly, independent of any wired output.
- **DMX fixtures** (IgorBox DMX): a card per patched fixture with fixture-appropriate controls; see below.

Drag a slider — the load follows. Click a button — the relay clicks.

## Driving DMX fixtures

On an IgorBox DMX in Standard or Buffer mode, the Overview tab shows a **DMX Fixtures** panel with a card per [patched fixture](dmx/patching-fixtures). Each card's controls follow the fixture's [channel kinds](dmx/fixture-channels):

- **Dimmers and levels**: percentage sliders (16-bit channels get extra-fine resolution automatically).
- **Color groups**: a color picker with swatches, plus an **Off** button; expand it for per-component sliders.
- **Pan/tilt**: a 2D joystick pad, with per-axis sliders and fine controls on 16-bit heads.
- **Named states**: a dropdown of the fixture's named ranges (gobos, programs, reset functions). Scrubable ranges like strobe speed get a slider.

Each fixture card has an **Off** button, and the panel a **Zero All**. Both return DMX channels to their configured [defaults](dmx/fixture-channels#default-values) rather than blindly to zero, so props with a home position park correctly.

If the controller listens to incoming DMX, the Overview tab also shows a live [DMX In](dmx/dmx-input#watching-it-live) panel; that one is view-only and doesn't need a manual control session.

:::note
A channel that a [Logic Rule](logic-rules/overview) is currently driving can't be changed from Manual Control. It shows as unavailable for as long as the rule is holding it.
:::

## Ending manual control

Click **End Manual Control**. The controller releases its channels and goes back to whatever it was doing before — typically the [ambient routine](ambient-routines).

Manual Control also ends automatically if you close the browser tab, lose your network connection, or start manual control from another tab on the same controller.

If the controller loses contact with Studio, Manual Control ends on its own after about 30 seconds and the channels return to their normal programmed behavior. A manual session you forget about can't leave outputs stuck.

## Manual Control vs. Live Preview

Manual Control and [Live Preview](timeline-editor/live-preview) both drive a controller in real time, but they're different tools:

- **Manual Control** drives channels directly from sliders and buttons. No timeline. For wiring tests, demos, troubleshooting.
- **Live Preview** plays a show from the timeline editor on real hardware. For authoring shows.

Starting one ends the other.

## Permissions

Manual Control requires permission to control your controllers. Viewers can't drive channels; editors and admins can. Set per-user roles in your Studio's **Settings → Members**.
