---
sidebar_position: 5
description: "Test shows on real hardware while you're editing"
---

# Live Preview

Live Preview is exactly what you'd hope: hit Play in the editor, the show plays on your real hardware, in real time, while you keep editing.

It's the fastest iteration loop in show control. Edit a control point, hit play, watch the result. Adjust an audio clip's volume, hit play, hear the result. No deploy, no rebuild, no upload.

## Starting Live Preview

Live Preview works on a show that targets a **single controller**. If your show targets more than one controller, deploy it to test on hardware instead.

Click **Live Preview** in the timeline editor's toolbar. The controller's status LED blinks **orange** while Live Preview is active.

Hit **Play** in the transport. The show plays on the hardware, synchronized with the editor playhead.

## What you can do during Live Preview

Anything you'd do while editing — Live Preview doesn't lock the editor.

- **Edit clips** — moves, resizes, splits all apply on the next play.
- **Edit lighting envelopes** — the next play loop reflects your changes.
- **Click in the ruler to seek** — the playhead jumps and the hardware follows right away.
- **Toggle tracks** — track mutes apply.

## Audio during Live Preview

During Live Preview, audio plays from your **browser**, through your computer's audio output. Your laptop's volume becomes the cue, synced to the lights and relays. When you deploy, the audio gets bundled with the show and plays from the controller's onboard storage instead.

This split keeps Live Preview fast (no audio uploads while you're iterating).

## Ending Live Preview

Click **Stop Preview**. The controller releases its channels and returns to whatever it was doing before — typically the [ambient routine](/docs/studio/ambient-routines).

Live Preview also ends if you close the editor tab, lose your network connection, or change the show's duration.

## Good to know

- Audio is browser-side, so playback fidelity during Live Preview depends on your computer's audio output. A laptop speaker is fine for blocking out timing; for dialing in mix levels, plug in monitors.
- Live Preview uses the same permissions as Manual Control — you need permission to control your controllers.

## Live Preview vs. Manual Control

Both drive a controller in real time. They're different tools:

- **[Manual Control](/docs/studio/manual-control)** drives channels directly from sliders. No timeline.
- **Live Preview** plays a timeline show on the hardware.

Starting one ends the other.
