---
sidebar_position: 60
description: "Configuring what the controller's front button does"
---

# Front Button Modes

The hardware side of the front button is documented in [Front Button](/docs/controllers/shared/front-button). This page covers the Studio side: how to configure it, when to use each mode, and how it interacts with shows and Logic Rules.

## Setting the mode

1. Open the controller in Studio.
2. Configuration tab → **System Configuration** → **Front Button Mode**.
3. Pick a mode. Save.

The new mode pushes to the controller right away.

## The four modes

### Stop (default)

A short press stops the currently playing show on this controller and returns to the [ambient routine](ambient-routines).

This is the safest default. It's an "emergency stop" that anyone can press without doing damage. Useful for installs where staff need a fast way to kill a single controller's show.

**Use when:** you want a kill button that any operator can use; you want a way for a tour guide to stop a specific controller without affecting others.

### Trigger

A short press acts like a wired input — it fires whatever you've wired the front button to.

When you set this mode, the front button shows up as an input in the [Logic Rules](logic-rules/overview) editor (and in a show's Triggers editor). Wire it to a show — or to anything else — and a press fires it. There's no separate "show to fire" picker on the front-button setting itself; you choose what it does by wiring it in a rule.

**Use when:** you want demo modes ("press the button to see a sample of every effect"), walkthrough rehearsal cues, or a manual-fire backup for a sensor that's acting up.

### Safety Lock

A short press toggles a lock that **immediately stops the currently running show and prevents new shows from being triggered** on the controller. Press the button again to unlock — but this only works if the button is what locked it. If the controller was locked another way (by a Logic Rule or a system event), pressing the button will not unlock it.

The status LED indicates the locked state, and Studio shows the controller as **Locked**.

**Use when:** maintenance windows, daytime hours in a haunt, walk-throughs where you don't want sensors firing scenes.

### Hard Lock

A short press engages a stronger lock: **all playback stops immediately and nothing can play.** Even Manual Control and Live Preview are blocked. Unlike Safety Lock, a Hard Lock is **not** cleared by pressing the button again — the controller stays locked until it's **rebooted (power-cycled)**.

**Use when:** electrical work, repairs, construction inside an attraction. Hard Lock turns a controller into a brick until someone power-cycles it.

:::note
You can choose what each output does while the controller is locked — hold its current state, or switch off. This is set per channel in Studio.
:::

## Interaction with Logic Rules

When the mode is **Trigger**, the front button shows up as an input in the Logic Rules editor. You can use it as the input to any rule, just like a wired input.

When the mode is anything else, the front button is **filtered out** of the Logic Rules input picker — you can't accidentally bind a rule to a button that's set to do something else. If you change the mode back to Trigger, any rule that was previously bound to the button will need to be re-wired.

## Interaction with Manual Control

While Manual Control is active, the front button does nothing on the controller — it won't Stop, Safety Lock, or Hard Lock, and it won't fire any Logic Rules. You're driving the channels directly. The press is simply reported back to Studio.
