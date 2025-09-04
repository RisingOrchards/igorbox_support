---
sidebar_position: 20
---

# Firmware Update

The firmware update process on the LabRat G2 is much simpler then the previous generation.

## The SD Card update.

When a new firmware is available, its as simple as downloading it and placing it on the SD card. The LabRat will look for a `labrat.bin` firmware file. It verifies the file, loads it, and reboots into the new firmware.

While updating, both LED indicators will flash to let you know that the new firmware is being loaded.

:::tip
SD Card hot loading lets you do this while the box is on and running!
:::

:::warning
The LabRat uses "Secure Boot" which means it will only load "official" firmware files.
:::

:::info
If the firmware fails to load or has an issue (like you pulled the SD Card out while it was writing), it will detect the issue and reboot into the previous version.

_If_ you manage to brick your LabRat because of a firmware update, **[contact support](/docs/contact)** for help. We've got you covered.
:::

## Over the Air updates

In IgorBox mode, you don't even have to worry about downloading files and loading them onto the SD Card. It's as easy as clicking the "Update Firmware" button and everything is handled for you!
