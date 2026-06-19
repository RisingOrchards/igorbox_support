---
sidebar_position: 2
description: "Building dimming cues with control points and envelopes"
---

# Lighting

Lighting tracks are how you build dimming cues for the LED Controller and any other dimmable hardware. (The Output 8 MKII's channels switch on and off rather than dim — those go on a relay track instead.) Servo tracks behave the same way; just substitute "0–180°" for "0–100%".

## Control points

A lighting track is defined by a series of **control points**. Each control point is a (time, value) pair. Between control points, the channel ramps smoothly from one value to the next — a control point at 2 seconds at 0% and another at 3 seconds at 100% gives you a 1-second linear ramp from off to full.

The track shows you the envelope as a filled area below a solid line, with a circle at each control point.

## Endpoints

Every lighting track always has two endpoints:

- **Start endpoint** — at the very beginning of the show
- **End endpoint** — at the very end of the show

These endpoints **can't be moved horizontally** and can't be deleted. They're how the controller knows what value the channel starts and ends at.

By default, the two endpoints are **linked** — drag one and the other follows, so the start and end values match. This is what you want for an ambient routine that loops cleanly. To unlink, hold **Ctrl** while dragging an endpoint. To re-link, double-click the end endpoint.

## Adding a control point

Switch to the **Draw** tool. Click anywhere in the track area to place a control point at your cursor position. The horizontal position is grid-snapped; the vertical position is whatever you clicked at.

Click-and-hold to drag the control point you just placed — useful for fine adjustments before you commit. The creation and the drag count as a single undo step.

## Editing a control point

In **Select** mode:

- **Drag** any control point to move it. Endpoints can only move vertically. Interior control points move both ways.
- **Drag past a neighbor** to reorder. The editor lets you drag a control point through its neighbors instead of clamping; the order updates as you cross.
- **Double-click an endpoint** to re-link to the other endpoint's value.

## Editing several at once

You can select multiple control points and drag them as a group:

- **Ctrl+click** to add control points to the selection one at a time.
- **Click-and-drag in empty track area** (Select mode) to draw a selection rectangle.
- Drag any selected control point and they all move together — even across multiple tracks.

This is how you'd shift a whole lighting cue's timing by a fraction of a second: select all the control points, drag them.

## Deleting a control point

Two ways:

- **Select** mode + Delete/Backspace key — deletes selected control points.
- **Delete** tool + click a control point — deletes that one.

Endpoints can't be deleted. Move them instead.

## Tips

- For a smooth fade-in from black, drag the start endpoint to 0% and the next control point to your peak value.
- For a flat hold at full, set two control points at the same value with a time gap between them.
- For a sharp transition, put two control points very close together at different values.
- Loops should start and end at the same value, with the linked endpoints (the default). Otherwise you'll see a visible "snap" at the loop boundary.
