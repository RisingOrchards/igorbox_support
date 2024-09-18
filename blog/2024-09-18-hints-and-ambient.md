---
slug: hints-and-ambient
title: Hints and Ambient Support
authors: [lisa]
tags: ["Product Updates", IgorBox, Beta, Features]
---

We have a couple cool new features we want to talk about today. The first of which is the hints system!

## Hints System

Starting today, you'll be able to toggle hints on and off in the IgorBox web interface. This is a great way to get a little extra help when you're first starting out or if you're trying to figure out how to do something new. If you look at the top right of the header next to your name, there's a little "i" icon. Clicking on that will toggle hints on and off. When it's green, hints are on. When it's gray, hints are off.

![Hints Button](/img/blog/hint-button.png)

When the hints system is active, hovering over elements on a page will give a detailed explaination and even some pro-tips on how to use that element. This is a great way to learn how to use the IgorBox web interface and to get the most out of it.

![Hints Example](/img/blog/hints-header.png)

We have added a bunch of hints already, but there will be more to come in the future. We have a lot of plans for the hints system and we're excited to see how it evolves.

## Ambient Support

With the new Firmware release (version 1.0.5 -- more on that later) we have added support for ambient compositions! An ambient composition is played in a loop when no other compositions are active on the box. This is a great way to add some background sound effects or small movements to your environment while waiting for something to be triggered.

To make a composition an "ambient composition", you just activate the "Ambient" toggle on the composition settings page or when you create a new composition. This will make the composition play in a loop when no other compositions are active.

![Ambient Toggle](/img/blog/ambient-toggle.png)

:::warning
Ambient compositions deactivate any input triggers assigned to the composition.
:::

:::note
You can only have one Ambient composition per IgorBox.
:::

## Firmware Update

The last thing I want to talk about is all the changees that are in the new Firmware release (version 1.0.5). This release includes a bunch of bug fixes and improvements in addition to the ambient support. Here are some of the highlights (you can read the full change log [here](https://feedback.igorbox.com/changelog)):

- Added support for ambient compositions (as mentioned above)
- Made huge improvements to the network connection management system
- Completely reworked the compostion playback system to improve performance and reliability
- Improved media file handling to speed up deployment times and prevent re-downloading of large files
- Fixed a bunch of bugs that were causing crashes and reboots

## Conclusion

We hope you enjoy these new features and improvements and we can't wait to see what you create with them!

As always, if you have any questions or feedback, feel free to reach out to us at [feedback.igorbox.com](https://feedback.igorbox.com) or directly on Discord at [discord.igorbox.com](https://discord.igorbox.com). We're always happy to help and we love hearing from you!
