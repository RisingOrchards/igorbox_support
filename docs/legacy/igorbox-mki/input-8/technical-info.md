---
sidebar_position: 1000
description: "For those that are interested in the technical details of the IgorBox Input 8"
---

# Technical Information

In this section, we are going to dig a little deeper into the components that are used so you can get a better understanding of the capabilities and limitations of the IgorBox Input 8.

:::danger
This section is for people with an understanding of electronics and engineering. This information is provided for reference only. If you choose to use this information to do something outside of our recommendations or limits, you do so at your own risk.
:::

## Optical Inputs

The inputs are optically isolated, so the signal side is electrically separated from the rest of the device.

The input circuit is designed to handle up to **24VDC**. Applying more than 24VDC to an input can damage the input circuitry — stay at or below that limit.

## LEDs and Indicators

We designed the system to go dark with the change of configuration in the web interface. This means that the LEDs are software controlled.

If you elect to turn the LEDs of in the web console, the firmware will turn them off and they will stay off until you turn them back on or you go into manual control mode.

## Audio

The Input 8 plays back high-quality 24-bit audio with low noise even at high amplification levels. Supported formats include lossless **FLAC** and **WAV**, as well as **MP3** and **AAC** for situations where a smaller file size matters.

Audio plays back directly from the onboard storage rather than streaming from the cloud, so you get low latency and the show keeps playing even if your internet drops.

## Storage

The Input 8 has plenty of onboard storage for compositions and audio files in a typical attraction.

:::info
If you need more storage than the Input 8 ships with, [contact support](/docs/contact) and we can talk through your options.
:::

## Power

The power is regulated using an onboard Point of Load (POL) regulator. This regulator takes up to 30VDC input and converts it to the 3.3VDC for all the onboard systems. This regulator is rated for 2 amps and is more than enough to power the inputs, audio, and microcontroller. The 3.3VDC rail is not user accessible and is only used for the onboard systems.

:::warning
Even though the POL is rated to handle 30VDC, we do not recommend using anything over 24VDC. There are components that use the unregulated power and they cannot handle more than 24VDC. If you use more than 24VDC, you risk damaging the IgorBox and voiding the warranty.
:::

### Pass through power

We wanted to make it easy to power devices directly from the IgorBox, so we added a pass-through power section on the I/O connector block. This allows you to jump power from the power supply to the input channels to power devices directly from the IgorBox. This power is unregulated and unprotected so be sure to check the voltage and current requirements of the devices you are powering. We literally just jumped power from the power connector directly to the I/O connector block, so it's the same voltage and current as the power supply.

:::warning
The internal systems are protected against reverse polarity. The pass-through power is not. If you reverse the polarity of the power supply, the IgorBox will not be damaged or even turn on.. but anything you have connected to the pass-through power will get the backwards voltage and could be damaged.
:::
