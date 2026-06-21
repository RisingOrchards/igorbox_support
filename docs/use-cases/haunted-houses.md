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

Haunted houses live and die by timing. A scare that fires half a second late isn't a scare. IgorBox lets you design that timing visually — a guest crosses a sensor, the air cylinder fires, the lights snap to red, the scream plays, and the drop panel falls — and have it hit exactly the same way for every group, all night long.

No programming. You draw the show on a timeline, wire your props to the box, and let IgorBox handle the rest.

## What you can build

- **Sensor-triggered scares** — a guest steps on a mat or breaks an IR beam and a prop fires instantly.
- **Pneumatic props** — air cylinders for drop panels, jumping spiders, slamming doors, coffin lids, and wall-bangers.
- **Synchronized light, sound, and motion** — one timeline drives the whole moment so the bang, the flash, and the scream land together.
- **Scare-actor triggers** — a hidden button an actor presses to fire a scare on cue.
- **Automatic reset** — every prop returns to its start state for the next group, hands-free.

## Which IgorBox for which job

| The job | Use this |
| --- | --- |
| Fire pneumatic props, drop panels, foggers, and switched lights | [Output 8](/docs/controllers/output-8-mkii/overview) |
| Read buttons, step pads, IR beams, and motion sensors | [Input 16](/docs/controllers/input-16/overview) |
| Dimmable LED lighting — glowing eyes, candle flicker, accent washes | [LED Controller](/docs/controllers/led-controller/overview) |

Most haunts use a mix: an Output 8 to drive the props, an Input 16 to read the triggers, and an LED Controller for atmosphere. Because [every input is a global event](/docs/controllers/input-16/overview), a sensor on one box can fire a prop on another anywhere on your network.

## How it works

1. **Wire it** — [Easywire™](/docs/controllers/shared/easywire) lights up the right terminal for each prop and sensor so you don't have to guess.
2. **Build the show** — lay out the scare on the [timeline](/docs/studio/overview): props, lights, and sound on one clock.
3. **Trigger it** — a [Logic Rule](/docs/studio/logic-rules/overview) says "when the step pad fires → play the scare."

## Common patterns

- **Step pad → scare:** guest hits the mat → drop panel fires, light flashes, sound plays, then everything resets.
- **Actor button → scare:** an actor presses a hidden button to fire on the perfect beat.
- **Cooldown:** ignore re-triggers for a few seconds so the prop fully resets before it can fire again.

## Get started

- New here? Start with the [documentation home](/docs/intro).
- Pick your hardware: [Output 8](/docs/controllers/output-8-mkii/overview), [Input 16](/docs/controllers/input-16/overview), [LED Controller](/docs/controllers/led-controller/overview).
- Wiring a prop for the first time? See the [Output 8 wiring guide](/docs/controllers/output-8-mkii/wiring-guide) and the [FAQ](/docs/faq).
- New to the terms? The [Glossary](/docs/glossary) explains pneumatics, maglocks, pinspots, and more.
