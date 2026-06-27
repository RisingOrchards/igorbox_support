---
sidebar_position: 2
description: "Your first IgorBox show, from sign-in to playback"
---

# Getting Started

This walks through everything from signing into IgorBox Studio for the first time to playing your first show on real hardware. If you have a controller in front of you, this should take about thirty minutes.

## Step 1 — Sign in

IgorBox Studio is currently invite-only. If you've ordered hardware and don't have a Studio yet, [contact support](/docs/contact) and we'll set one up for you.

You'll receive an email invitation with a link. Click the link, sign in with email + password (or GitHub or Google), and land in your Studio at `https://<your-org>.igorbox.studio`.

## Step 2 — Add a controller

1. From the dashboard, click **Add Controller**.
2. Power on your controller and connect it to your network — see [Connectivity](/docs/controllers/shared/connectivity) if it's not already on WiFi.
3. Find the **8-character setup ID** on the controller's serial-number sticker.
4. Enter the setup ID in the **Setup Token** field.
5. Pick a name (something like "Front Door" or "Coffin Room"), add tags if you want.
6. Click **Add to Account**.

Within a few seconds, the controller appears in your Studio with a green online indicator. Full details: [Magic Provisioning](/docs/controllers/shared/magic-provision).

## Step 3 — Open the controller

Click the controller in the dashboard. You'll see a row of tabs across the top:

- **Overview** — at-a-glance status, current state, and the **Start Manual Control** button
- **Shows** — the shows deployed to this controller
- **Triggers** — inputs wired to fire shows on this controller
- **Events** — recent activity for this controller
- **Configuration** — channel names, voltage settings, front button mode, ambient show
- **Provisioning** — setup ID and re-provisioning options (shown for magic-provisioned controllers)
- **Technical Details** — telemetry from the device

Spend a minute looking around. Don't change anything yet.

## Step 4 — Try Manual Control

Before building a show, verify your wiring works.

1. Click **Start Manual Control** in the controller's Overview tab.
2. The channel sliders appear. Drag a slider, click a button, watch the channel react.
3. The front-panel indicator on the controller will follow your input in real time. So will the actual wired load.

When you're done, click **End Manual Control**. The controller returns to its previous state.

See [Manual Control](manual-control) for the full reference.

## Step 5 — Make a show

1. From the top navigation, click **Shows**, then **Create Show**.
2. Give it a name and a duration (the default 10 seconds is fine for a first show).
3. Add the controller you just provisioned to the show's targets.

Now you're in the **timeline editor**. You'll see a track per channel that the controller has.

### Build something

Drop a clip on a relay channel: switch to **Draw** tool and click-and-drag in the track. That's an ON pulse. Drag the right edge to extend it. Drag it horizontally to move it.

Drop a lighting envelope on a lighting channel: in **Draw** mode, click anywhere in the track to place a control point. Each control point is a (time, value) pair; the channel ramps smoothly between them.

Drop an audio clip on the audio track: click the **+** button on the audio track, pick a media file.

See [Timeline Editor: Basics](timeline-editor/basics) for the full feature tour.

## Step 6 — Live Preview

Before deploying, preview the show on real hardware:

1. Click **Live Preview** at the top of the editor.
2. Hit **Play** in the transport.
3. The show plays — on your real controller — with audio, lighting, relays, the works.

Edit the show, hit play again. The change applies on the next playback. This is the fastest iteration loop in show control.

See [Live Preview](timeline-editor/live-preview) for details.

## Step 7 — Deploy

Once the show is right:

1. Click **Deploy**.
2. Studio packages the show and sends it to each target controller.
3. The controller acknowledges within a few seconds.

The show is now permanently on the controller. You can trigger it from a [Logic Rule](logic-rules/overview), from a webhook, by pressing the front button, or manually from the controller's Overview tab.

## Step 8 — Make it run on its own

The simplest "show triggers automatically" recipe is the [ambient routine](ambient-routines):

1. In the controller's Configuration tab, scroll to **Ambient Show**.
2. Pick the show you just deployed.
3. Save.

The controller now plays your show on a loop whenever nothing else is playing.

For input-triggered shows (button press, sensor activation, webhook), see the [Logic Rules overview](logic-rules/overview).

## What next?

You've got the skeleton. From here, it's all depth:

- [Timeline editor: Lighting](timeline-editor/pwm-and-lighting) — building lighting cues
- [Timeline editor: Audio Clips](timeline-editor/audio-clips) — slip editing, per-clip volume, multi-track audio
- [Logic Rules](logic-rules/overview) — game logic without code
- [Webhooks](webhooks/inbound) — trigger shows from outside systems
