---
sidebar_position: 6
description: "Going from draft to live, and how to roll back"
---

# Deploys and Versions

A show in IgorBox Studio is either a **draft** (you're editing it; it's not on any controller yet) or **deployed** (a copy is on your controllers, ready to fire).

## Deploying a show

In the timeline editor, click **Deploy**. Studio packages up the show, sends it to each targeted controller, and waits for them to confirm.

You'll see a progress indicator per target. A successful deploy ends with each one showing a green check.

If a controller is offline when you click Deploy, it can't confirm yet — the deploy stays in a **Pending** state for that controller. The next time the controller connects, it pulls the latest version automatically and the state updates.

## Versions

Every deploy creates a new **version** of the show. Open **History** in the timeline editor's toolbar to see the **Version History** for the show — every version, with:

- The version number
- When it was deployed
- How many of the target controllers have the version
- The deployment notes

You can see exactly what each controller is running and when it was last updated.

## Deployed-state badge

While you're editing, a badge in the metadata bar tells you — live — how the show on screen compares to what's on your controllers:

- **Draft** — never deployed yet.
- **Modified** — you've made changes since the last deploy; they aren't on the controllers until you deploy again.
- **Pending** — you've deployed, but the controllers haven't confirmed receipt yet.
- **Partial** — some, but not all, of the target controllers have the latest version.
- **Deployed** — every target controller has confirmed the latest version. You're fully live.

## Rolling back

If a deploy goes sideways and you need to get back to a known-good version:

1. Open **History** in the editor toolbar.
2. Find the version you want to roll back to.
3. Click **Restore**, then confirm **Restore to Draft** in the dialog (it warns that your current draft will be overwritten). The editor loads that old version as a draft.
4. Verify it looks right.
5. Click **Deploy** again.

Rollback is a two-step on purpose: it gives you a chance to verify what you're deploying, and it preserves the version history.

## A note on audio

For best playback results, use 44.1 kHz / 16-bit lossless audio (WAV or FLAC), and Studio flags anything outside that sweet spot on the media card.

If an audio clip's format isn't something the target controller can play, the **deploy is blocked** — Studio tells you which clips and controllers are the problem so you can re-export and re-upload. Most everyday formats are fine; this only bites unusual codecs or sample rates.

## Deleting a show

You can't delete a show that's currently set as an [ambient routine](/docs/studio/ambient-routines) — Studio will block the delete and tell you which controllers are using it. Clear the ambient assignment first.
