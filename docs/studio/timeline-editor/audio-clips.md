---
sidebar_position: 3
description: "Slip editing, per-clip volume, and waveforms for audio tracks"
---

# Audio Clips

Audio in IgorBox shows is sample-accurate, multi-track, and edited like you would in any modern video editor. Drop them on an audio track, slip them, set per-clip volume, deploy them.

## Adding an audio clip

Two ways:

- **Plus button** on an audio track header — opens the Media Browser. Pick a file or upload a new one. The clip lands at the playhead.
- **Double-click empty space** in the audio track content area — same Media Browser, clip lands at the click position.

The Media Browser is your audio library. Upload `.wav`, `.flac`, `.mp3`, or `.aac` files.

## Drag types

Audio clips have four distinct drag interactions:

| Drag | What it does |
| --- | --- |
| **Move** | Drag the body of the clip to reposition it. The audio content stays pinned within the clip — you've just moved when it plays. |
| **Right resize** | Drag the right edge to extend or shorten the clip from the end. |
| **Left resize** | Drag the left edge. The audio stays in sync with the timeline automatically. |
| **Slip (Alt+drag)** | Hold Alt and drag the body. The clip stays in place but the audio content shifts inside it. Drag right to reveal earlier audio; drag left to reveal later audio. |

Slip editing is the audio version of "scrubbing the take" — useful for nudging a hit point a few frames without redoing the whole clip.

## Waveform display

Every audio clip shows its waveform inside its bounds. The waveform respects:

- **Slip offset** — what you see is what plays.
- **Per-clip volume** — bars scale by the clip's volume setting.

## Per-clip volume

Click a selected audio clip's **speaker icon** (top-right corner of the clip). A vertical slider appears, 0–100%.

- Drag to set the per-clip volume.
- Double-click the speaker icon to reset to 100%.
- The clip body shows a percentage when volume isn't 100%.

Per-clip volume is multiplied by the show's master volume — so a 50% clip on a 50% master plays at 25%.

## Splitting an audio clip

Switch to the **Split** tool. Hover over the clip — you'll see a vertical preview line showing where the cut will land (grid-snapped). Click to split.

The right half automatically stays in sync with the audio so playback continues seamlessly across the split. You can resize either half, slip them independently, or delete one.

## Audio formats

The controller plays `.wav`, `.flac`, `.mp3`, and `.aac`.

For best results, use **44.1 kHz, 16-bit, lossless** (WAV or FLAC). Studio shows a warning on the media card if you upload something outside that sweet spot.

## Multi-track audio

Each audio track is independent. You can have:

- One track for ambient bed
- One track for cue stingers
- One track for dialog

…all playing simultaneously.

## Track-level mute

Each audio track header has a **speaker icon** that mutes the whole track. Click to toggle.

Track mutes are a playback preference, not part of the show data — they don't affect the deployed show. Useful for editing one track at a time while you can hear it without the others.

## A note on buffering

When you press Play and the audio for an upcoming clip isn't fully buffered yet, the playhead holds until buffering completes. You'll see "Waiting for audio…" in the status bar. Better a brief pause before playback than choppy audio in the middle.
