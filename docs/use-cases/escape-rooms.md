---
title: IgorBox for Escape Rooms
sidebar_position: 2
description: How escape room designers use IgorBox to wire puzzle inputs, release maglocks on solve, drive reveals, and build whole-room logic visually — without writing code.
keywords:
  - escape room
  - puzzle logic
  - maglock
  - magnetic lock
  - RFID puzzle
  - reed switch
  - prop reveal
  - escape game
---

# IgorBox for Escape Rooms

An escape room is one big state machine: inputs (buttons, magnets, RFID tags, sensors) feed puzzle logic, and when the logic is satisfied, something happens — a lock pops, a drawer reveals, lights change, the next clue appears. IgorBox lets you build that entire flow visually, with every sensor in the room reporting to one place.

No code. You wire the inputs, draw the logic, and connect it to the locks and effects.

## What you can build

- **Maglock releases** — solve the puzzle, the magnetic lock drops, the door or compartment opens. Wired **fail-safe** so a power loss unlocks the room.
- **Multi-step puzzle logic** — "all four switches in the right order," "the correct RFID tag on the reader," "three plates pressed at once."
- **Reveals** — open a hidden drawer, drop a curtain, or light up a clue when a step is solved.
- **Sequence and counter logic** — detect order, count actions, latch progress — all without programming.
- **Game-master controls** — reset the room, force-open a lock, or trigger a hint from one button.

## Which IgorBox for which job

| The job | Use this |
| --- | --- |
| Read every puzzle input — buttons, magnetic/reed switches, RFID readers, photo gates | [Input 16](/docs/controllers/input-16/overview) |
| Release maglocks and small locks, fire reveals and effects | [Input 16 relay outputs](/docs/controllers/input-16/wiring-guide) or an [Output 8](/docs/controllers/output-8-mkii/overview) |
| Puzzle-board LEDs, lit clues, and accent lighting | [LED Controller](/docs/controllers/led-controller/overview) |

The [Input 16](/docs/controllers/input-16/overview) is the heart of most rooms: sixteen isolated inputs in one box, so you can build the whole room's logic as a single rule with everything feeding into it.

## Maglocks, done right

Maglocks should **fail safe** — they hold the door locked while powered and release when power is removed, so the room opens on a power outage. On IgorBox you wire the lock through a relay output set to **Inverted**, so the relay holds the lock during play and drops it the moment the puzzle is solved (or the power goes out). See the [Input 16 wiring guide](/docs/controllers/input-16/wiring-guide) for the exact wiring.

## How it works

1. **Wire the inputs** — [Easywire™](/docs/controllers/shared/easywire) guides each button, magnet, and reader to the right terminal.
2. **Build the logic** — a [Logic Rule](/docs/studio/logic-rules/overview) combines inputs ("switch A AND switch B AND tag C") into a solved condition.
3. **Drive the payoff** — the rule releases the maglock, opens the reveal, and cues the lights.

## Common patterns

- **Solve → unlock:** the puzzle's solved condition opens the maglock and lights the next area.
- **Wrong-answer feedback:** a buzzer or red flash when the input combination is incorrect.
- **One-button reset:** the game master resets every lock, light, and counter for the next group.

## Get started

- New here? Start with the [documentation home](/docs/intro).
- Centralize your inputs with the [Input 16](/docs/controllers/input-16/overview).
- See real wiring in the [Input 16 wiring guide](/docs/controllers/input-16/wiring-guide), and learn the rules engine in [Logic Rules](/docs/studio/logic-rules/overview).
- Unsure on a term? The [Glossary](/docs/glossary) covers maglocks, reed switches, dry contacts, and more.
