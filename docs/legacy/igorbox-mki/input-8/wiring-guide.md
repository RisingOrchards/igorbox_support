---
sidebar_position: 2
description: "Learn how to connect things to your IgorBox Input 8"
---

# Wiring Guide

The IgorBox Input 8 is designed to be a simple and reliable way to read and control up to 8 inputs from IgorBox.com. The Input 8 is perfect for reading sensors, buttons, footswitches, and other devices that provide a simple on/off voltage signal.

:::info
We know that wiring can be a bit intimidating, so we're here to help! This guide will walk you through the basics of wiring the Input 8 and give you some examples to get you started. If you have questions or need some help, feel free to reach out to us directly on Discord at [discord.igorbox.com](https://discord.igorbox.com).
:::

## The I/O Connector Block

![I/O Connector Block](/img/ibi8/connector-layout.png)

## Channel Wiring

Each channel is a vertical pair of pins where the bottom pin is the negative lead and the top pin is the positive lead of the optical input.

When you provide 9VDC to 24VDC to the pins of a channel the channel goes to an "on" state and will trigger the composition the input is assigned to on the IgorBox web interface.

![Simple Input Wiring](/img/ibi8/simple-trigger.png)

## Using the Power Section

As mentioned earlier, the for pairs of pins in the center of the connector provide power via a pass-through from the power supply.

This means you can use the Input 8 to power devices or the optical inputs directly from the connector block by jumping power from the power pin to a channel pins. This is a great way to power devices or trigger channels on the Input 8 without needing a separate power supply. We will cover how to do this in the wiring examples below.

:::warning
The internal optical inputs are rated for 24VDC. If you want to trigger the input with more power, you'll need to step it down to below 24VDC.
:::

## Wiring Examples

### Wiring a Button

Let's start with a simple example of wiring a button to trigger a composition on the Input 8.

![Simple Button Wiring](/img/ibi8/simple-trigger-button.png)

As you can see by this example, the button breaks the connection of the positive lead of the optical input. When the button is pressed, the connection is made and the input is triggered.

#### Using the Power from the IgorBox

If this button is a 12VDC button, you can power it directly from the Input 8 by jumping power from the power pin to the channel pin.

![Simple Button Wiring with Power](/img/ibi8/trigger-button-powered.png)

_There will be more wiring examples coming soon!_
