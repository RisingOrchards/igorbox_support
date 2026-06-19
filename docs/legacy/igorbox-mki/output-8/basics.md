---
sidebar_position: 1
description: "Getting started with an Output 8 IgorBox"
---

# Getting Started with Output 8

The IgorBox Output 8 is our flagship 8 relay output device. It is designed to be a simple and reliable way to control and program up to 8 relays from IgorBox.com. The Output 8 is perfect for controlling pnuematics, lights, motors, and other devices that require a simple on/off control.

To get started with your Output 8, you will need to connect it to your IgorBox account. You can do this by following the instructions in the [Connecting your IgorBox Guide](/docs/legacy/igorbox-mki/connect).

Once your Output 8 is connected to your account, you can start creating compositions and triggers to control your relays.

## The Front Panel

![Front Panel](/img/ibo8/ibo8-panel.png)

## I/O Connector Block

The I/O Connector Block is where you will connect your relays and power to the Output 8.

The I/O connector provides 2 "high power" relays and 6 "lower power" relays. The high power relays are rated for 3Amps and the low power relays are rated for 1Amp.

The I/O connector block also provides a "Power" section in the middle that can be used to power external devices by passing through the voltage supplied to the Output 8.

You can read more about wiring the I/O connector block in the [Wiring Guide](/docs/legacy/igorbox-mki/output-8/wiring-guide).

## Channel Indicators

The Channel Indicators are a set of 8 LEDs that indicate the status of each relay channel. The LEDs will light up when channel is active and turn off when the channel is inactive.

:::important
The Channel Indicators will show the status of the channel's "on state" not the relay's "on state". This means that if you set a channel to "Normally Closed" in the web interface, the LED will be on when the relay is off and off when the relay is on.
:::

## Powering the Output 8

The Output 8 comes with a 12V 1Amp DC power supply. To power the Output 8, simply plug the power supply into the barrel jack on the back of the device.

The Output 8 can run at voltages between 9VDC and 24VDC. If you need to use a different power supply, make sure it is rated for at least 1Amp and that the polarity is correct (center positive).

:::danger
Do not use a power supply that is rated for more than 24VDC. Doing so can and will damage internal components.
:::

### Why use a different power supply?

The voltage you supply will be exposed on the "Power" section in the middle of the I/O connector block. This can be a convenient way to get power to devices through jumpering (which we'll cover in the [Wiring Guide](/docs/legacy/igorbox-mki/output-8/wiring-guide)).

But basically, if you have 24VDC devices, you can power them directly from the Output 8 without needing a separate power supply.

:::info
The internal wiring bus is rated for 2 amps. If you need to power more than 2 amps, you will need to use an external power supply.
:::

## Status LED

The Status LED is a single color LED that indicates the status of the Output 8 using blink patterns.

| _Pattern_ | _Meaning_ |
| --- | --- |
| Slow Pulse (3 second cycle) | The IgorBox is booting up |
| Steady On | The IgorBox is running and all systems are nominal |
| Slow Blink (2 second cycle) | The IgorBox cannot reach the Internet but still has network (Degraded state) |
| Fast Blink (1 second cycle) | The IgorBox is in "Lockout Mode" |
| Fast Pulse (1 second cycle) | The IgorBox is in "Manual Mode" |
| Blinking in groups with a pause | This is an unrecoverable error and the number of blinks in the group indicate the error code |

_you can read more about error codes in the [Error Codes Guide](/docs/legacy/igorbox-mki/output-8/error-codes)_

## Lockout Modes

Lockout modes is a state where the IgorBox will not run normal operation and is indicated by a fast blinking or pulsing status LED.

This is typically due to one of 2 reasons:

1. The IgorBox is doing an imporant administrative task (like a firmware update or downloading a new composition) (blinking LED)
2. The IgorBox is in "Manual Control Mode" initiated by the user on the web interface (pulsing status LED)

## Front Button

The Front Button is a multi-function button that can be used to perform various tasks on the IgorBox.

The button can be used to:

- **Reset the IgorBox**: Press and hold the button when powering on the IgorBox to reset (10 seconds will reset wifi settings, 20+ seconds will reset all settings)
- **Trigger a Composition**: Press the button to trigger the currently selected composition
- **Stop Playback**: Press the button to stop the currently playing composition and return the IgorBox to the ambient state.

:::info
The "Front Button" is considered an "input" on the web interface and can be assigned to trigger any composition.
:::

:::warning
The front button will only stop plabyack of a composition on it's own IgorBox. It will not stop playback on other IgorBoxes.
:::

## Stereo Line Output

The Output 8 has a stereo line output that can be used to connect to an external amplifier or speaker system. The line output is a 3.5mm stereo jack that outputs high quality line level signal.

The line output is always active and will output the audio from the currently playing composition.
