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

A short press fires the show you've assigned to the front button.

When you set this mode, Studio surfaces a **Show** picker where you choose which show to fire. Press the button — the show plays.

**Use when:** you want demo modes ("press the button to see a sample of every effect"), walkthrough rehearsal cues, or a manual-fire backup for a sensor that's acting up.

### Safety Lock

A short press toggles a software lock that **prevents new shows from being triggered** on the controller. Already-playing shows continue to play to completion.

The status LED indicates the locked state, and Studio shows a lock badge on the controller.

**Use when:** maintenance windows, daytime hours in a haunt, walk-throughs where you don't want sensors firing scenes.

### Hard Lock

A short press toggles a stronger lock: **all playback stops immediately and nothing can play** until the lock is released. Even Manual Control and Live Preview are blocked.

**Use when:** electrical work, repairs, construction inside an attraction. Hard Lock turns a controller into a brick until someone explicitly unlocks it.

## Interaction with Logic Rules

When the mode is **Trigger**, the front button shows up as an input in the Logic Rules editor. You can use it as the input to any rule, just like a wired input.

When the mode is anything else, the front button is **filtered out** of the Logic Rules input picker — you can't accidentally bind a rule to a button that's set to do something else. If you change the mode back to Trigger, any rule that was previously bound to the button will need to be re-wired.

## Interaction with Manual Control

The front button doesn't fire Logic Rules during Manual Control — you're driving the channels directly. Pressing the front button while Manual Control is active does the basic mode behavior (Stop, Safety Lock, Hard Lock) but doesn't fire any rules.
