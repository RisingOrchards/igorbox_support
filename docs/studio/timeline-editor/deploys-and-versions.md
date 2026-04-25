---
sidebar_position: 5
description: "Going from draft to live, and how to roll back"
---

# Deploys and Versions

A show in IgorBox Studio is either a **draft** (you're editing it; it's not on any controller yet) or **deployed** (a copy is on your controllers, ready to fire).

## Deploying a show

In the timeline editor, click **Deploy**. Studio packages up the show, sends it to each targeted controller, and waits for them to confirm.

You'll see a progress indicator per target. A successful deploy ends with each one showing a green check.

If a controller is offline when you click Deploy, the show is **queued**. The next time the controller connects, it pulls the latest version automatically — Studio shows the queued state so you know it's not yet live.

## Versions

Every deploy creates a new **version** of the show. The Versions panel (in the show detail view) lists every version with:

- The version number
- When it was deployed
- Who deployed it
- Which controllers received it

You can see exactly what each controller is running and when it was last updated.

## Rolling back

If a deploy goes sideways and you need to get back to a known-good version:

1. Open the Versions panel.
2. Find the version you want to roll back to.
3. Click **Restore to Draft**. The editor loads that old version as a draft.
4. Verify it looks right.
5. Click **Deploy** again.

Rollback is a two-step on purpose: it gives you a chance to verify what you're deploying, and it preserves the version history.

## A note on audio

For best playback results, use 44.1 kHz / 16-bit lossless audio (WAV or FLAC). Studio will warn you on the media card if you upload something outside that sweet spot. The deploy still goes through — it's just a heads-up.

## Deleting a show

You can't delete a show that's currently set as an [ambient routine](/docs/studio/ambient-routines) — Studio will block the delete and tell you which controllers are using it. Clear the ambient assignment first.
