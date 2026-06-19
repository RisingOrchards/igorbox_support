---
sidebar_position: 6
description: "The stereo line output on every IgorBox controller"
---

# Audio Output

Every IgorBox controller has a stereo line-level audio output on the back panel. We've spent a lot of time tuning this circuit — clean, low-noise output ready to feed amplifiers and powered speakers.

## Connecting an amplifier or speakers

The output is a **3.5 mm stereo jack**, line-level (not headphone-level — don't plug headphones directly into it).

Most show installs feed this into:

- A powered speaker pair (left + right)
- An amplifier driving passive speakers
- A mixer for venues that already have a sound system

You'll want a 3.5 mm TRS to dual-RCA or 3.5 mm to dual-1/4" cable for most amps and mixers. We don't sell those — any music store or Amazon will do.

## File formats

Audio plays from the controller's onboard storage — no streaming from the cloud, so latency is low and reliability is high.

| Format    | Supported | Notes                           |
| --------- | --------- | ------------------------------- |
| WAV (PCM) | Yes       | Lossless, biggest files         |
| FLAC      | Yes       | Lossless, much smaller than WAV |
| MP3       | Yes       | Lossy, smallest files           |
| AAC       | No        |                                 |
| AIFF      | No        |                                 |

For best playback fidelity, use **44.1 kHz, 16-bit, lossless** (WAV or FLAC). Studio will warn you if you upload media that's outside this sweet spot and it will prevent you from using incompatible audio formats.

## When the output is active

The line output produces signal whenever something is playing — show playback, the ambient routine, Live Preview, or Manual Control playback.

If nothing is playing, the output is silent.

## Master volume

- Set a per-clip volume in the timeline editor (right-click an audio clip → Volume)

If you need a hardware volume control on stage, put a powered speaker with a volume knob downstream of the controller, or use a mixer.
