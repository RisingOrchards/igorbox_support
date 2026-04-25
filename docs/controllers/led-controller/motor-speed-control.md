---
sidebar_position: 4
description: "Driving DC motors with smooth speed control through the LED Controller"
---

# Motor Speed Control

The LED Controller's onboard channels are clamped at 20 mA — way too low to drive a motor directly. For motor speed control, you have two good paths:

1. **Pair the LED Controller with the [RGBW-PWR breakout](rgbw-pwr-breakout)** — the breakout has the current to drive small DC motors smoothly from a timeline envelope.
2. **Pair the LED Controller with an external motor driver** — feed the channel's signal into a third-party motor driver that handles the actual switching.

For light-duty motors that don't need speed control (just ON/OFF), use the [Output 8 MKII](/docs/controllers/output-8-mkii/overview)'s relay channels instead.

## Why use a lighting controller for motors at all?

Most show controllers force you into a relay-style ON/OFF for motors, then make you bolt on a separate motor driver if you want speed control. The LED Controller's dimming channels are exactly the kind of signal an external motor driver wants — variable, smooth, frame-accurate, drawn directly in your timeline.

So you build a wiper-motor cue that ramps from 0 to 70% over two seconds, holds for ten, then ramps back down — directly in the timeline editor. No separate motor controller, no programming.

## Path 1 — RGBW-PWR breakout

The [RGBW-PWR breakout](rgbw-pwr-breakout) takes a channel from the LED Controller and drives the actual motor. From your perspective in Studio, you draw a speed envelope on the channel just like a lighting envelope, and the breakout handles the rest.

This is the cleanest setup for small DC motors (a few amps continuous).

## Path 2 — External motor driver

For larger motors, or motors you've already specified a driver for, use an external motor driver that accepts a speed signal:

1. Connect the LED Controller channel to the driver's signal input.
2. Connect a power supply to the driver's power input (sized for the motor).
3. Connect the motor to the driver's output.

The exact wiring depends on the driver — refer to its data sheet.

## Direction control

Neither the LED Controller's channels nor the RGBW-PWR breakout reverses motor direction. For direction control:

- Use an external H-bridge driven by relay channels (one per direction) on an Output 8 MKII, with a channel from the LED Controller for speed.
- Or use a third-party motor driver that takes a separate direction signal.

## Flyback protection

DC motors are inductive. When power is removed, the motor's coil generates a back-voltage spike that can damage whatever drove it.

Most motors include a flyback diode internally, but cheap hobby motors often don't. Whichever path you use (breakout or external driver), make sure flyback protection is in place — either built into the motor, the driver, or added externally with a diode.

## Brake mode

Neither path actively brakes the motor — when the channel switches off, the motor freewheels until friction stops it. If you need active braking (e.g., to stop a heavy curtain quickly), use an external brake circuit triggered from another channel.
