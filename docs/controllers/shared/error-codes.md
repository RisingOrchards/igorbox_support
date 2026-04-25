---
sidebar_position: 7
description: "What to do when the status LED shows an error"
---

# Error Codes

When the [status LED](status-led) is signaling an error, the controller is reporting an unrecoverable problem and has stopped normal operation. Playback is paused and the controller will sit in this state until it's power-cycled or recovered.

## Reading the blink code

In the error pattern, the status pixel turns red and blinks **N times in a quick burst** (about half a second on, half a second off), pauses for about two seconds, then repeats the burst. The number of blinks per burst is the **error code**.

For example: `blink, blink, blink — pause — blink, blink, blink — pause —` is **error code 3**.

Count the blinks in a single burst and match it below.

| Code | Subsystem | What happened |
| --- | --- | --- |
| **1** | Expansion / daughter board | A connected expansion board didn't initialize. |
| **2** | Expansion / daughter board config | An expansion board was detected, but its configuration didn't match what's connected. |
| **3** | Storage | The on-board show storage couldn't be mounted. |
| **6** | Configuration memory | The controller couldn't access its internal configuration storage. |
| **8** | Firmware update | A firmware update didn't complete. Your show data and configuration are preserved — see below. |

:::note
The list isn't sequential — that's intentional. Some codes are reserved for subsystems that don't currently report blink-code errors. If you see a burst that doesn't match a code above, [contact support](/docs/contact) with the count and the device's serial number.
:::

## What to try first

For any error code, **power-cycle the controller first**. The vast majority of one-off errors clear on a clean boot.

If it comes back with the same code, follow the steps below — they're ordered from least invasive to most.

### General recovery (any error code)

1. **Power-cycle** the controller. Wait 5 seconds before powering it back on so capacitors can discharge.
2. **Try a different power supply.** Several errors — especially codes 1, 2, and 3 — can be caused by brownouts when the supply can't deliver enough current under load. Use the supply that shipped with the controller, or one rated equal or higher.
3. **Re-flash the firmware.** Studio's Configuration tab has a "Reinstall current firmware" option that re-downloads and re-flashes without changing your configuration.
4. **Factory reset.** Hold the front button for ~20 seconds during boot (see [Front Button](front-button)). This clears all local state and lets the controller re-pair with your Studio. Show data and configuration in Studio are preserved.

### Code-specific notes

- **Codes 1 and 2 (Expansion board)** — Power down the controller, reseat any connected expansion board, and power back on. If code 2 persists after a clean reseat, the connected board is likely set up for a different controller variant — [contact support](/docs/contact) before trying anything else.
- **Code 3 (Storage)** — Power-cycle the controller. If the error persists after a clean boot, [contact support](/docs/contact) — onboard storage isn't user-serviceable.
- **Code 6 (Configuration memory)** — A factory reset will usually clear this. If it returns after a factory reset, the device needs to be replaced under [warranty](https://www.igorbox.com/warranty).
- **Code 8 (Firmware update)** — Your show data and configuration are preserved. Power-cycle the controller and, once it's back up, retry the update in Studio. If it fails repeatedly, the controller may have lost cloud connectivity mid-update — see [Connectivity](connectivity).

## When to contact support

If two power cycles and a firmware reinstall don't clear the error, [contact support](/docs/contact) with:

- The error code (number of blinks per burst)
- The controller's serial number (printed on the back)
- What was happening when the error first appeared (firmware update? new wiring? site power event?)

We can almost always recover the device remotely or RMA it under [warranty](https://www.igorbox.com/warranty).
