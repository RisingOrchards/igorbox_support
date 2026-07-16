---
sidebar_position: 1
title: IgorBox DMX
description: "What the IgorBox DMX is and how to get started with it"
beta: true
---

:::caution
Photo coming soon.
:::

{/* TODO: enable once price, image, and store URL are final
import ProductJsonLd from '@site/src/components/ProductJsonLd';

<ProductJsonLd
  name="IgorBox DMX"
  sku="IBDMX"
  description="A cloud-connected DMX-512 show controller: one full universe of lighting control plus DMX input, two relay outputs, two isolated inputs, and synchronized stereo audio. Runs lights, sound, and props from one timeline for haunted houses, escape rooms, and themed entertainment."
  image="https://assets.igorbox.cloud/product/dmx.png"
  url="https://help.igorbox.com/docs/controllers/dmx/overview"
  price="TODO"
  offerUrl="TODO"
  specs={[
    {name: 'DMX output', value: '1 universe (512 DMX channels)'},
    {name: 'DMX input', value: 'Yes: buffer, listen, and record'},
    {name: 'Relay outputs', value: '2 (TODO: rating)'},
    {name: 'Isolated inputs', value: '2'},
    {name: 'Connectivity', value: 'Ethernet + Wi-Fi (cloud-connected, not cloud-dependent)'},
    {name: 'Audio output', value: 'Stereo line out (3.5 mm)'},
    {name: 'Onboard storage', value: '32 GB'},
  ]}
/>
*/}

The IgorBox DMX is a show controller that speaks DMX. It drives a **full universe** of stage and effect lighting (par cans, moving heads, fog machines, DMX-controlled props) from the same timeline that plays your audio and fires your relays. One box, one show, everything in sync.

It's also a good citizen in rigs it doesn't own: drop it between an existing lighting console and your fixtures in [Buffer mode](modes) and it passes the console's signal through untouched, overriding only the DMX channels your IgorBox show uses. And if the controller ever loses power, a hardware failsafe hardwires the DMX input straight to the output, so a dead IgorBox never blacks out your chain.

**[TODO: product photo]**

## What's in the box

| | |
| --- | --- |
| DMX out | 1 full universe of 512 DMX channels |
| DMX in | Buffer an existing console, listen for triggers, or record |
| Relay outputs | 2 × relay outputs rated at 1.5 amps. Each is a dry contact: a simple switch you pass your own power through |
| Inputs | 2 × isolated inputs for directly triggering shows|
| Connectivity | Ethernet + WiFi |
| Connectors | 3-pin XLR + WAGO® terminals |
| Audio | Stereo line out (3.5 mm) |
| Storage | 32 GB onboard |
| Front panel | Status LED, 8 RGB indicators, configurable [front button](/docs/controllers/shared/front-button) |
| Power | 9–24V DC barrel, included supply is 12V DC |

## Best for

- **Show lighting and Stage lighting**: par cans, moving heads, strobes, and anything else that speaks DMX, with smooth fades and full color control from the Studio timeline
- **DMX props**: foggers, flame effect controllers, servo-driven animatronics, and other DMX-controlled effects
- **Adding scares to an existing DMX Universe**: Buffer mode lets IgorBox take over just the fixtures it needs, while your lighting console keeps running everything else
- **Lights + audio + props in one scene**: the DMX universe, stereo audio, two relays, and two trigger inputs all live on one controller and one timeline

## Quick start

1. **Power it up**
2. **Connect to the network**: plug in Ethernet, or add your WiFi network in your Studio's **Settings** before you provision. See [Connectivity](/docs/controllers/shared/connectivity).
3. **[Magic Provisioning](/docs/controllers/shared/magic-provision)**: read the setup ID and add the controller in IgorBox Studio.
4. **Connect your first fixture**: DMX out to the fixture's DMX in, then set the fixture's address. New to DMX? Start with [DMX Basics](dmx-basics).
5. **[Patch it in the Studio](/docs/studio/dmx/patching-fixtures)**: add the fixture to your controller so the Studio knows what's at each address.
6. **Build a show** in the [Timeline Editor](/docs/studio/timeline-editor/basics) and deploy.
