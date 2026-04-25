---
sidebar_position: 1
description: "Getting started with a legacy IgorBox MKI controller"
---

# IgorBox MKI Basics

:::info Legacy product
The IgorBox MKI lineup (Output 8 and Input 8) is no longer in active production. These docs remain for existing customers — for new attractions, see the [Output 8 MKII](/docs/controllers/output-8-mkii/overview) and [Input 16](/docs/controllers/input-16/overview) on the current lineup.
:::

The IgorBox system is a networked show controller system that allows you to control your show from anywhere in the world. The system is made up of a series of devices that can be connected to your account and programmed through the web interface.

## Minimum System Requirements

When setting up an IgorBox system, there are some minimum requirements and considerations that you need to be aware of.

### Network Requirements

The IgorBox system requires a stable local network connection.

The IgorBoxes use this local network to communicate with each other and syncronize compositions and triggers between devices.

If a stable internet connection is available, the IgorBoxes will also use this connection to syncronize compositions and triggers with the IgorBox.com servers and send telemetry data to your account.

:::important
The IgorBox system **does not require** an internet connection to operate. However, an internet connection is required to connect the devices to your account and to program the devices.
:::

In addition to the local network connection, the network must support multicast traffic and all IgorBoxes that need to intercommunicate must be on the same subnet. If you don't know what this means, don't worry! Most modern networks support these requirements out of the box. If you have any questions or concerns, feel free to reach out to us on Discord at [discord.igorbox.com](https://discord.igorbox.com) or [contact support](/docs/contact).

### Security Considerations

The IgorBox system is designed to be secure and reliable. However, it is important to consider the security of your network and the devices connected to it. The local administration interfaces of the IgorBox devices are exposed on the local network and should be protected from unauthorized access. It is possible for an attacker to trigger compositions and control devices if they have access to the local network that your IgoBoxes are connected to.

:::warning
We **Highly Recommend** using a dedicated network for your IgorBox system! This will help to ensure that your show runs smoothly and securely.
:::

In addition to using a dedicated network, we recommend hiding the SSID of the network and using a strong password. This will help to prevent unauthorized access to your network and the devices connected to it.

## The IgorBox Devices

### IgorBox Output 8

The IgorBox Output 8 is our flagship 8 relay output device. It is designed to be a simple and reliable way to control and program up to 8 relays from IgorBox.com. The Output 8 is perfect for controlling pnuematics, lights, motors, and other devices that require a simple on/off control.

You can read the Output 8 [Documentation](/docs/legacy/igorbox-mki/output-8/basics) for more information.

### IgorBox Input 8

The IgorBox Input 8 is our flagship 8 input device. It is designed to be a simple and reliable way to read and control up to 8 inputs from IgorBox.com. The Input 8 is perfect for reading sensors, buttons, footswitches, and other devices that provide a simple on/off voltage signal.

You can read the Input 8 [Documentation](/docs/legacy/igorbox-mki/input-8/basics) for more information.

### IgorBox DMX

:::info
Coming Soon!
:::

The IgorBox DMX is a networked DMX controller that allows you to control a DMX universe. The DMX is perfect for controlling lighting fixtures, moving heads, and other DMX devices.
