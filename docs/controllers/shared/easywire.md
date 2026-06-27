---
sidebar_position: 2
description: "Easywire™ guided wiring for every IgorBox controller"
---

# Easywire™

Easywire™ is the guided wiring system on every IgorBox controller. There's an LED next to every WAGO® connector, and Studio uses those LEDs to walk you through wiring a new prop, sensor, light, or motor — one wire at a time.

It's the difference between staring at a wiring diagram with a multimeter in one hand and a flashlight in the other, and just plugging the wire into the connector that's blinking.

## How it works

In Studio, on the controller's **Configuration** tab, click **Connection Helper** next to the channel you're wiring. A friendly little robot named CarlBot walks you through three steps.

### 1. Pick what you're connecting

Choose your peripheral from the list — DC solenoid, LED panel, wiper motor, button, reed switch, and so on. Studio shows you a picture of the device and the list of wires you'll be working with (and any jumper wires you'll need).

### 2. Install the wires

CarlBot tells you which wire to grab and the corresponding LED on the controller starts blinking. Plug that wire into the blinking connector, hit **Done — next wire**, and CarlBot moves you to the next one.

If a step has a safety warning (high inrush, polarity, hot side first), it shows up in red before the wiring instruction. Read it.

For multistate channels (the ones that can be either a relay or a solid-state output), CarlBot will ask you to pick the mode that matches your peripheral before the wiring starts.

### 3. Test it

Once everything's wired, Studio drops you into a test mode for that channel:

- **Outputs** (lights, solenoids, motors) — Use the on-screen control to drive the channel and confirm the peripheral does what it should.
- **Inputs** (buttons, sensors) — Trigger the input physically (press the button, trip the sensor); the on-screen indicator lights up so you can confirm it's wired right.

While you're here, you can also give the channel a friendly name ("Front Door Hit", "Coffin Lid", "Strobe") and pick a channel color so you can spot it later in the timeline editor.

When everything works, click **Done**. That's it.

## What it covers

The Easywire library covers the peripherals we ship plus the most common haunt and escape-room hardware:

- DC pneumatic solenoids
- LED panels and pinspots
- Wiper motors and other DC motors
- Buttons, footswitches, reed sensors, and other inputs
- The RGBW-PWR breakout for the [LED Controller](/docs/controllers/led-controller/rgbw-pwr-breakout) (with its own dedicated install wizard)

We add to the library regularly. If we don't have a recipe for the thing you're wiring, you can still wire it manually using the wiring guide for your controller — and please [tell us about it](/docs/contact) so we can add it.

## Why we built it

Wiring is where most show-control installs go wrong. A miswired solenoid will burn out a relay; a sensor wired backwards won't trigger; a motor on the wrong channel will trip on inrush.

Easywire turns wiring from "read the manual carefully" into "follow the lights." Less stress, fewer dead components, faster install.

## See also

- [Status LED](status-led) — the front-panel status LED uses similar color signals
- [Magic Provisioning](magic-provision) — provisioning a brand-new controller
- The wiring guide for your specific controller, linked from each controller's overview page
