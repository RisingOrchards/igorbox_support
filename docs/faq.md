---
title: Frequently Asked Questions
sidebar_position: 90
description: Common questions about using IgorBox for haunted houses, escape rooms, and themed entertainment — triggering props, firing pneumatics, releasing maglocks, playing sound, and getting started.
keywords:
  - IgorBox FAQ
  - show control
  - haunted house controller
  - escape room controller
  - prop controller
---

import Head from '@docusaurus/Head';

<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is IgorBox?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'IgorBox is a line of show-control hardware and software for haunted houses, escape rooms, and themed entertainment. You wire props, lights, and sensors to IgorBox controllers and design the show visually in IgorBox Studio — no programming required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to know how to code to use IgorBox?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Shows are built on a visual timeline, and behaviors are created with Logic Rules, a drag-and-drop rules engine. You never write code.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use IgorBox for a haunted house or escape room?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — those are exactly what it is built for. Haunted houses use IgorBox to fire pneumatic props and synchronize scares; escape rooms use it for puzzle logic and maglock releases.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I trigger a prop when someone steps on a mat or crosses a sensor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wire the mat, button, or IR beam to an IgorBox Input 16 input, then add a Logic Rule that fires your prop or show when that input activates.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I fire a pneumatic (air) prop with IgorBox?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wire the air solenoid valve to an Output 8 channel and switch it from your show. The Output 8 relays handle the inrush current of typical show pneumatic valves.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I release a maglock when a puzzle is solved?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wire the maglock through an Input 16 relay output set to Inverted. The relay holds the lock during play and releases it when the puzzle is solved or power is lost, so it fails safe.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which IgorBox controller do I need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the Output 8 to switch props, pneumatics, and lights; the Input 16 to read buttons and sensors and release locks; and the LED Controller for dimmable LED lighting. Many builds use a mix of all three.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can one IgorBox controller trigger something on another controller?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every input on any IgorBox is a global event, so a sensor on one controller can trigger a show or effect on another controller anywhere on your network.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can IgorBox play sound?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every controller has a stereo line-level audio output and onboard storage, so a show can play synchronized sound alongside lights and props.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I control dimmable lighting or LED strips?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The LED Controller provides smooth dimmable channels for indicator LEDs, panel lights, and pinspots, and drives larger fixtures and LED strips through the RGBW-PWR breakout.',
          },
        },
      ],
    })}
  </script>
</Head>

# Frequently Asked Questions

## What is IgorBox?

IgorBox is a line of show-control hardware and software for haunted houses, escape rooms, and themed entertainment. You wire your props, lights, and sensors to IgorBox controllers and design the show visually in [IgorBox Studio](/docs/studio/overview) — no programming required.

## Do I need to know how to code?

No. Shows are built on a visual [timeline](/docs/studio/overview), and behaviors are created with [Logic Rules](/docs/studio/logic-rules/overview) — a drag-and-drop rules engine. You never write code.

## Can I use IgorBox for a haunted house or escape room?

Yes — those are exactly what it's built for. See [IgorBox for Haunted Houses](/docs/use-cases/haunted-houses) and [IgorBox for Escape Rooms](/docs/use-cases/escape-rooms).

## How do I trigger a prop when someone steps on a mat or crosses a sensor?

Wire the mat, button, or IR beam to an [Input 16](/docs/controllers/input-16/overview) input, then add a [Logic Rule](/docs/studio/logic-rules/overview) that fires your prop or show when that input activates.

## How do I fire a pneumatic (air) prop?

Wire the air solenoid valve to an [Output 8](/docs/controllers/output-8-mkii/overview) channel and switch it from your show. The Output 8's relays handle the inrush of typical show pneumatic valves — see the [Output 8 wiring guide](/docs/controllers/output-8-mkii/wiring-guide).

## How do I release a maglock when a puzzle is solved?

Wire the maglock through an [Input 16](/docs/controllers/input-16/overview) relay output set to **Inverted**. The relay holds the lock during play and releases it when the puzzle is solved — or when power is lost — so it fails safe. Details are in the [Input 16 wiring guide](/docs/controllers/input-16/wiring-guide).

## Which IgorBox controller do I need?

- [Output 8](/docs/controllers/output-8-mkii/overview) — switch props, pneumatics, motors, and lights.
- [Input 16](/docs/controllers/input-16/overview) — read buttons and sensors, and release locks.
- [LED Controller](/docs/controllers/led-controller/overview) — dimmable LED lighting.

Many builds use a mix of all three.

## Can one controller trigger something on another controller?

Yes. Every input on any IgorBox is a global event, so a sensor on one controller can trigger a show or effect on another controller anywhere on your network.

## Can IgorBox play sound?

Yes. Every controller has a stereo line-level audio output and onboard storage, so a show can play synchronized sound alongside your lights and props.

## Can I control dimmable lighting or LED strips?

Yes. The [LED Controller](/docs/controllers/led-controller/overview) provides smooth dimmable channels for indicator LEDs, panel lights, and pinspots, and drives larger fixtures and LED strips through the [RGBW-PWR breakout](/docs/controllers/led-controller/rgbw-pwr-breakout).

## How do I get started?

Start at the [documentation home](/docs/intro), pick a controller, and wire your first prop with [Easywire™](/docs/controllers/shared/easywire). New to the terminology? See the [Glossary](/docs/glossary).
