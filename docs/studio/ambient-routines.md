---
sidebar_position: 40
description: "Loop a show whenever nothing else is playing"
---

# Ambient Routines

An **ambient routine** is a show that loops on a controller whenever nothing else is playing. It's the "default state" of your attraction — the heartbeat that keeps things alive between scenes.

Examples of what an ambient routine is good for:

- **Background ambience** — looping crow caws, distant thunder, low rumble all night long
- **Idle lighting** — a slow color cycle on accent panels when no scene is active
- **Attractor mode** — eye-catching lighting and audio at the entrance to draw guests in
- **Test patterns** — for installs and rehearsals

## Setting an ambient routine

1. Open the controller in Studio.
2. Go to the Configuration tab.
3. Scroll to **Ambient Show** and pick a deployed show from the dropdown.
4. Save.

The change takes effect right away. The next time the controller has nothing else to play, the ambient show starts.

## Triggered shows take priority

An ambient routine never blocks a triggered show. If a sensor fires while the ambient is playing, the ambient stops, the triggered show plays, and the ambient picks up again afterwards.

This is how a haunt's "background ambience" coexists with the scene-specific cues that fire as guests walk through.

## Deleting a show that's set as ambient

If you try to delete a show that's currently set as an ambient routine somewhere, Studio will block the deletion and tell you which controllers are using it. Clear the ambient assignment first, then delete the show.
