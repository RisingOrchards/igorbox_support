---
title: IgorBox for Haunted Houses
sidebar_position: 1
description: How haunted house and haunt-attraction builders use IgorBox to fire pneumatic props, trigger scares from sensors, and sync lights, sound, and motion — no programming required.
keywords:
  - haunted house
  - haunt attraction
  - pneumatic prop
  - prop controller
  - show control
  - animatronics
  - scare actor
  - Halloween attraction
---

# IgorBox for Haunted Houses

Haunted houses live and die by timing. A scare that fires half a second late isn't a scare. IgorBox lets you design that timing visually. A guest crosses a sensor, the air cylinder fires, the lights snap to red, the scream plays, and the drop panel falls. You can have it hit exactly the same way for every group, all night long, or even adjust throughout the night as crowd size and movements change with easy deploys and revision history.

No programming. You draw the show on a timeline, wire your props to the box, and let IgorBox handle the rest.

## What you can build

- **Sensor-triggered scares** — a guest steps on a mat or breaks an IR beam and a prop fires instantly.
- **Pneumatic props** — air cylinders for drop panels, jumping spiders, slamming doors, coffin lids, and wall-bangers.
- **Synchronized light, sound, and motion** — one timeline drives the whole moment so the bang, the flash, and the scream land together.
- **Scare-actor triggers** — a hidden button an actor presses to fire a scare on cue.
- **Hands-free reset** — when the scare's show ends, channels return to their rest state and the [ambient routine](/docs/studio/ambient-routines) resumes, ready for the next group.

## Which IgorBox for which job

| The job | Use this |
| --- | --- |
| Fire pneumatic props, drop panels, foggers, and switched lights | [Output 8](/docs/controllers/output-8-mkii/overview) |
| Read buttons, step pads, IR beams, and motion sensors | [Input 16](/docs/controllers/input-16/overview) |
| Dimmable LED lighting — glowing eyes, candle flicker, accent washes | [LED Controller](/docs/controllers/led-controller/overview) |

Most haunts use a mix: an Output 8 to drive the props, an Input 16 to read the triggers, and an LED Controller for atmosphere. Because [every input is a global event](/docs/controllers/input-16/overview), a sensor on one box can fire a prop on another anywhere on your network.

If you only need 1 or 2 inputs, the Output 8 and the LED Controller both have 2 inputs that can be used for triggers. So you don't need to purchase an Input 16 unless you want more trigger sources for different show playback.

## How it works

1. **Wire it** — [Easywire™](/docs/controllers/shared/easywire) lights up the right terminal for each prop and sensor so you don't have to guess.
2. **Build the show** — lay out the scare on the [timeline](/docs/studio/timeline-editor/basics): props, lights, and sound on one clock.
3. **Trigger it** — a [Trigger](/docs/studio/triggers) wires the step pad straight to the scare ("when the input fires → play the show"). For scares that depend on several inputs or timing, use a [Logic Rule](/docs/studio/logic-rules/overview) instead.

You can have multiple shows on a single controller and use different inputs to trigger each show. 

## Common patterns

- **Step pad → scare:** guest hits the mat → drop panel fires, light flashes, sound plays, then everything resets.
- **Actor button → scare:** an actor presses a hidden button to fire on the perfect beat.
- **Skip while playing:** set the trigger's [Retrigger](/docs/studio/triggers) to *Skip if Playing* so a re-trip is ignored until the scare finishes and resets.

:::tip
Pair blank space at the end of your scare with the **Skip if playing** feature to tune the reset time.
:::

## Get started

- New here? Start with the [documentation home](/docs/intro).
- Pick your hardware: [Output 8](/docs/controllers/output-8-mkii/overview), [Input 16](/docs/controllers/input-16/overview), [LED Controller](/docs/controllers/led-controller/overview).
- Wiring a prop for the first time? See the [Output 8 wiring guide](/docs/controllers/output-8-mkii/wiring-guide) and the [FAQ](/docs/faq).
- New to the terms? The [Glossary](/docs/glossary) explains pneumatics, maglocks, pinspots, and more.
