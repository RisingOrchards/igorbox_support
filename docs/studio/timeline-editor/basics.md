---
sidebar_position: 1
description: "Tracks, clips, the playhead, and how to navigate the timeline"
---

# Timeline Editor: Basics

The IgorBox timeline editor is modeled on the video editors most people already know — Premiere, DaVinci Resolve, Final Cut. If you've used any of them, the muscle memory carries over.

This page covers the basics: what's on the screen, how to navigate, how to add and move clips. Subsequent pages go deeper on lighting, audio, and deploying.

:::caution
Editor screenshots coming soon.
:::

## What you see

When you open a show, you see:

- **Metadata bar (top)** — show name, duration, target controllers and groups, ambient badge if applicable, Triggers and Logic Rules buttons
- **Status bar (just below)** — Ready / Saving / Buffering / Waiting for audio
- **Transport (top right)** — Play, Stop, scrub, zoom, follow-playhead toggle, Live Preview, Deploy
- **Ruler** — time scale (in seconds and frames)
- **Track headers (left)** — one per channel, plus audio tracks; collapsible by controller or group
- **Track content (center, scrollable)** — where clips live

## Tracks

A **track** is a row in the editor. Each track corresponds to one channel of one of your controllers.

Track types:

- **Relay** — for relay outputs (like the Output 8 MKII). Clips are simple ON pulses.
- **Lighting** — for dimmable channels. Clips are envelopes you draw with control points.
- **Servo** — for servo outputs. Same as lighting, but the value is an angle.
- **Audio** — for audio clips. Per-clip volume, slip editing, waveform display.

The editor only shows tracks for channels the targeted controllers actually have. If a show targets a controller without any servos, you won't see any servo tracks.

## Tools

The toolbar in the transport gives you four tools:

| Tool | What it does |
| --- | --- |
| **Select** *(default)* | Click clips to select. Drag to move or resize. |
| **Draw** | Click-drag on a track to create a clip; on a lighting track, click anywhere to place a control point. |
| **Split** | Click on a clip to cut it in two. |
| **Delete** | Click a clip to delete it. |

## Adding clips

### Relay

Switch to **Draw** mode. Click and drag in the track. You've created an ON pulse from your start drag to your release. Switch back to Select; drag the clip to move it, drag its edges to resize.

### Lighting / Servo

In Draw mode on a lighting track, click anywhere in the track area to place a control point. The horizontal position becomes the time; the vertical position becomes the value. Click-and-hold to drag the control point you just placed. Hit Escape to bail out.

In Select mode, drag any control point to move it. See [Lighting](pwm-and-lighting) for the full picture.

### Audio

Click the **+** button on an audio track header. The Media Browser opens. Pick a file or upload a new one. The clip lands at the playhead.

You can also double-click on empty space in an audio track to do the same thing.

## Moving and editing clips

| Action | How |
| --- | --- |
| Move | Drag the body of the clip horizontally |
| Resize right | Drag the right edge |
| Resize left | Drag the left edge |
| Slip (audio only) | Alt-drag the body of an audio clip — moves the audio content within the clip without changing its position or duration |
| Split | Split tool, click on the clip |
| Delete | Select + Delete/Backspace, or Delete tool + click |

Clips on the same track **can't overlap**. Drag a clip into another and it snaps to the gap after.

## Snap

Clips snap to a grid. The snap interval is set in the transport (default: 1 second; options for half-second, frame-precise, no snap).

## Undo / redo

Standard `Cmd+Z` / `Cmd+Shift+Z` (or `Ctrl+Z` / `Ctrl+Shift+Z` on Windows).

Drag operations count as a single step — drag a clip across the timeline, that's one undo, not many.

## Auto-save

The show saves to the cloud automatically as you work. The status bar shows **Saving…** while a save is in flight, then **Ready** when it's done.

You don't need to hit Save. There is no Save button.

## Where to next

- [Lighting](pwm-and-lighting) — control points and envelopes
- [Audio Clips](audio-clips) — slip editing, per-clip volume, waveforms
- [Live Preview](live-preview) — testing shows on real hardware
- [Deploys and Versions](deploys-and-versions) — going from draft to live
- [Keyboard Shortcuts](keyboard-shortcuts) — speed-run the editor
