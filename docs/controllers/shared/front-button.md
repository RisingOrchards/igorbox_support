---
sidebar_position: 4
description: "The front-panel button on every IgorBox controller is configurable"
---

# Front Button

Every IgorBox controller has a single multi-function button on the front panel. What it does on a short press depends on the **front button mode** you've set in IgorBox Studio.

There are four modes:

| Mode | What a press does | When to use it |
| --- | --- | --- |
| **Stop** *(default)* | Stops the currently playing show on this controller and returns to the ambient routine. | Most installs — gives you an emergency "kill" button. |
| **Trigger** | Makes the button act as an input you can wire to a show (or any rule) in Logic Rules. | Demo modes, walk-around testing, manually re-triggering a haunt scene. |
| **Safety Lock** | Toggles a lock that prevents anyone from triggering shows on this controller. Playback already in progress continues. | Maintenance windows, daytime in a haunt, walk-throughs. |
| **Hard Lock** | Hard-stops everything and locks the controller. Nothing plays until the controller is rebooted (power-cycled). | Repairs, electrical work, construction. |

You can change the mode any time from the controller's Configuration tab in Studio.

:::tip
**Stop** only stops playback on the controller you press the button on. If your show spans multiple controllers, set up a [Logic Rule](/docs/studio/logic-rules/overview) so a single button press can stop them together.
:::

## Holding the button (always available)

The reset behaviors are independent of the mode setting and only apply during boot. The status LED is **off** while the button is held — it gives feedback when you release.

- **Hold for ~7 seconds during boot, then release** — The LED gives **2 quick flashes**, the controller clears its WiFi credentials, and reboots. It stays connected to your account and remembers everything else.
- **Hold for ~20+ seconds during boot, then release** — The LED gives **3 quick flashes**, the controller wipes its local show, media, and config files, then reboots locked. It stays registered in your Studio — Magic Provision re-pairs it automatically. The setup ID is unchanged either way (it's tied to the hardware). Show data and configuration in Studio are preserved.

If you release before the ~7-second mark, the controller boots normally with no changes. See [Status LED](status-led) for the flash-count confirmation.

## Wiring the button into your show

Even though it's a physical button on the front panel, the front button shows up in IgorBox Studio as an input — same as any wired input. That means you can wire it into [Logic Rules](/docs/studio/logic-rules/overview).

:::important
The front button is only a Logic Rules input when its mode is set to **Trigger**. In any other mode, it's filtered out of the input picker so you can't accidentally bind a show to a button that does something else.
:::
