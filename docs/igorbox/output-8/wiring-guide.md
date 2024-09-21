---
sidebar_position: 2
description: "Learn how to connect things to your IgorBox Output 8"
---

# Wiring Guide

The IgorBox Output 8 is designed to be a simple and reliable way to control and program up to 8 relays from IgorBox.com. The Output 8 is perfect for controlling pnuematics, lights, motors, and other devices that require a simple on/off control.

:::info
We know that wiring can be a bit intimidating, so we're here to help! This guide will walk you through the basics of wiring the Output 8 and give you some examples to get you started. If you have questions or need some help, feel free to reach out to us directly on Discord at [discord.igorbox.com](https://discord.igorbox.com).
:::

## The I/O Connector Block

![I/O Connector Block](/img/ibo8/connector-layout.png)

## Channel Wiring

Each channel is a vertical pair of pins that are connected to the internal relay.

When you the relay is "open" or "off" the pins are not connected. When the relay is "closed" or "on" the pins are connected.

![Open Relay](/img/ibo8/open-relay.png)

![Closed Relay](/img/ibo8/closed-relay.png)

You can use this like a simple switch to control power to a device and toggle that device on and off using the IgorBox web interface and compositions.

## Using the Power Section

As mentioned earlier, the for pairs of pins in the center of the connector provide power via a pass-through from the power supply.

This means you can use the Output 8 to power devices directly from the connector block by jumping power from the power pin to a channel pin. This is a great way to power devices that are controlled by the Output 8 without needing a separate power supply. We will cover how to do this in the wiring examples below.

:::warning
The internal wiring bus is rated for 2 amps. If you need to power more than 2 amps, you will need to use an external power supply.
:::

## Wiring Examples

### Wiring a Light

Let's start with a simple example of wiring a light to be controlled by the Output 8.

![Simple Light Wiring](/img/ibo8/simple-light.png)

In the above example, we have connected the negative (or Ground) wire of the power supply to the negative (or Ground) of the light. The postive (or V+) wire of the power supply goes to one of the pins of a relay channel (in this example it's channel 1), and then the other pin of the relay channel goes to the positive (or V+) of the light.

When the relay is "closed" or "on" the light will turn on. When the relay is "open" or "off" the light will turn off.

You can think of the the output channel as a light switch that breaks the postive wire of the light when off or makes the connection when on.

#### Using the Power from the IgorBox

If this light is a 12VDC light (like many show LEDs), you can power it directly from the Output 8 by jumping power from the power pin to the channel pin.

![Simple Light Wiring with Power](/img/ibo8/simple-light-jumped.png)

In this example, you can see that we connected the negative (or Ground) wire of the light to the "Power Ground" on the I/O connector. The positive (or V+) wire of the light is connected to the channel pin of the relay (in this example it's channel 1). The power pin of the connector block is jumped to the channel pin of the relay.

This way, the light is powered directly from the Output 8 and can be controlled by the relay.

:::warning
The power coming from the Output 8 is limited to 2 amps and will be the same voltage as the power supply. Make sure your light can handle the voltage and current.
:::

## Wiring a Pnuematic Solendoid

Wiring a pnuematic solenoid is very similar to wiring a light, but you will need to make sure you have the correct voltage and current for the solenoid.

Many industry standard pneumatic solenoids are either 12VDC or 24VDC and require a few amps to operate. Make sure you have the correct power supply and that the Output 8 can handle the current.

![Simple Solenoid Wiring](/img/ibo8/solenoid.png)

In the above example, we have connected the negative (or Ground) wire of the power supply to the negative (or Ground) of the solenoid. The postive (or V+) wire of the power supply goes to one of the pins of a relay channel (in this example it's channel 8), and then the other pin of the relay channel goes to the positive (or V+) of the solenoid.

When the relay is "closed" or "on" the solenoid will activate. When the relay is "open" or "off" the solenoid will deactivate.

## Wiring a Motor

A common use case for the Output 8 is to control a windshield wiper motor. Motors can be a bit tricky because they require a lot of current to start and stop. Because of this, we recommend using a relay that is rated for at least 3 amps (channel 1 or 2) **AND** using an external power supply.

:::danger
Do not try to power a motor directly from the Output 8. The Output 8 is not designed to handle the current required to start and stop a motor.
:::

To wire a motor, you would wire it the same as the simple light example that uses an external power supply and just replace the lightbulb with the motor.
