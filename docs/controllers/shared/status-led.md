---
sidebar_position: 3
description: "Decode the front-panel status LED on any IgorBox controller"
---

# Status LED

Every IgorBox controller has a status LED on the front panel. It's how the controller tells you what state it's in without needing a screen or a laptop.

The LED communicates with two things together: a **color** (green, blue, orange, purple, red) and a **pattern** (solid, slow breathing, fast blinking). The same color can mean different things at different patterns — green solid is "ready", green blink is "show playing" — so always read color _and_ pattern together.

## Patterns at a glance

| State | Color & pattern | What it means |
| --- | --- | --- |
| **Booting** | Orange, slow breath (~2 s cycle) | The controller is starting up. |
| **No network** | Blue, slow breath (~3 s cycle) | The controller has no working network connection. This shows during first-time setup (no ethernet link and no saved WiFi yet), and also when a controller that was online has lost its connection and is trying to reconnect. Plug into ethernet, set WiFi credentials in [Studio Settings](magic-provision) before powering on, or set its WiFi over Bluetooth with the [IgorBox Connect](igorbox-connect) app. |
| **Idle / Ready** | Green, solid (dim) | All systems nominal. Idle, waiting for a trigger or a scheduled show. |
| **Show playing** | Green, fast blink | A show or routine is actively playing. |
| **Degraded** | Blue, slow blink (about once a second) | The controller is online locally but can't reach the cloud. Your show keeps running — you just can't push updates or see live telemetry until connectivity is restored. |
| **Manual Control** | Orange, fast blink | Someone in [IgorBox Studio](/docs/studio/manual-control) is driving the channels live. |
| **Lockout** | Purple, fast blink | The controller is doing administrative work — firmware update, downloading a new show, or held by an operator. Playback is paused. |
| **Hard Lock (E-stop)** | Purple, fast blink — _every pixel on the device_ | A hard E-stop has been triggered. Nothing plays. The controller stays this way until it's rebooted. |
| **Error** | Red, blink code (a burst of N blinks, ~2 s pause, repeat) | An unrecoverable problem. The number of blinks in each burst is the error code — see [Error Codes](error-codes). |

:::tip
**Lockout vs. Hard Lock** — both are purple, fast-blinking. The visual giveaway is _how many pixels are blinking_:

- **Lockout** — only the status pixel goes purple. The channel indicators stay live, showing their normal channel state.
- **Hard Lock (E-stop)** — every pixel on the front panel goes purple. The channel indicators stop reflecting channel state and join the lockdown blink. There's no missing it.

A Lockout clears on its own once the controller finishes its task (or when an operator releases it). A Hard Lock keeps blinking until you reboot the controller — see [Front Button](front-button) and [Front Button Modes](/docs/studio/front-button-modes) for what triggers it.
:::

## What "degraded" really means

When the status LED shows degraded, **your show keeps running**. IgorBox is designed to work without internet — losing connectivity is a degraded state, not a failed state. You'll just lose the ability to push new shows, see live telemetry in Studio, or receive remote triggers until connectivity is restored.

To diagnose:

- **Cable / WiFi link** — is the network indicator on the back panel lit?
- **Local network** — can other devices on the same network reach the internet?
- **Firewall** — is outbound HTTPS to `*.igorbox.studio`, `*.igorbox.io`, and `*.igorbox.com` allowed?

See [Connectivity](connectivity) for the full network requirements.

## Resetting the controller

The front button can reset the controller if you hold it during boot. As you keep holding, the status LED gives a quick flash each time you reach the next action — so you can watch the LED and let go at the one you want. When you **release**, the LED gives one longer flash to confirm the action it locked in:

- **Forget WiFi** — the saved WiFi credentials are cleared. The controller reboots and stays connected to your account.
- **Factory reset** — the controller wipes its local show, media, and config files, then reboots locked and ready to be re-paired.

If you let go before the first flash, no action is taken and the controller boots normally.

See [Front Button](front-button) for the exact hold times, and [Boot Sequence](boot-sequence) for the full power-on light progression.

:::warning
A full factory reset removes the controller's authentication and wipes its local content (shows, media, configuration files). You **don't** need to re-add it to Studio — the controller stays registered in your Studio and Magic Provision will re-pair it automatically as soon as it's back on the network. Show data and configuration in Studio are preserved.

If you're sending the controller to a different organization, the original Studio's admin needs to **delete the controller** from Studio to release the binding _before_ the new Studio can add it.
:::

## About the indicator lights

The status light and the channel indicator lights show what the controller _intends_ to be doing — they follow the controller's commands, not a direct reading of the wiring. That means:

- A channel indicator shows the channel's _intended_ on/off state. If you've set a channel as "normally closed", its light is on when the channel is "active" — even though that's when its contacts are open.
- You can turn the indicators off entirely from Studio if your install needs to be dark.
- Manual Control drives the indicators in real time, so you can verify wiring without a multimeter.
- During a Hard Lock, every light on the front panel switches to the purple blink, so the E-stop is visually unmissable.
