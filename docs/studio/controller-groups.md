---
sidebar_position: 30
description: "Synchronized playback across multiple controllers"
---

# Controller Groups

A **controller group** is two or more IgorBox controllers that play shows in sync, as if they were one big controller. Build one show, deploy it to the group, every controller plays its part in lock-step.

This is how you build multi-room shows, multi-zone attractions, and any show that spans more than one box.

## When to use a group

- **Multi-room synchronized shows** — a haunt scene that lights one room while a sound cue fires in the next
- **Multi-zone audio** — different audio in each room, all running off one show
- **More channels than one box has** — group two LED Controllers and now you've got 32 channels of dimming

## Creating a group

1. From the sidebar, click **Groups** → **New Group**.
2. Pick a name.
3. Add the controllers that should be in the group.
4. Pick a primary controller — this is the one that drives the timing for the rest.
5. Save.

The group is now selectable as a target when you create or edit a show.

## How channels show up

When you build a show that targets a group, the timeline editor shows you all the channels of all the members, end to end. There's no manual channel mapping — Studio figures out which physical channel on which box every timeline track lives on.

:::important
Group shows control **outputs** across the group's controllers. Inputs (sensors, buttons) stay tied to their physical controller — if you want an input on one box to drive behavior across the group, wire it through a [Logic Rule](logic-rules/overview).
:::

## Manual control of a group

The group page has a **Manual Control** tab that drives every channel in the group at once. Same UI as a single-controller manual control, just with more channels.

## Live Preview of a group

Live Preview works on groups exactly like single controllers. If a member is offline when you start preview, the show still plays on the available members, and the missing one catches up when it reconnects.

## Deploying to a group

When you deploy a show targeting a group, every member receives its share of the show automatically. If a member is offline when you click Deploy, the show is queued and pushed when it reconnects.

## Good to know

- A controller can belong to **one group at a time**.
- Mixing controller types in a group is fine and common — e.g., one Output 8 MKII for relays plus one LED Controller for lights.
- Groups stay tightly in sync on a healthy local network.
