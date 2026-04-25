---
sidebar_position: 15
description: "Factory reset procedure for the legacy LabRat G2"
---

# Factory Reset

Sometimes you want to clear everything saved on the LabRat.

:::tip
Using the `SDCARD` mode doesn't write anything to onboard memory. Simply pulling your micro SD Card will effectively reset the device
:::

A factory reset can be done using the micro SD Card. Simply create a file named `RESET.txt` on the SD Card and insert it into the LabRat.

This will force a full format of internal memory, removed the `RESET.txt` file from the SD Card, and reboot the LabRat.

:::warning
If you have a `config.json` on the sdcard that writes data to the internal memory (ie: `STANDARD` mode), this will be reapplied. on the reboot.
:::

:::info
A factory reset only resets the internal memory but **does not** format your SD Card. It only removes the `RESET.txt` to prevent the a reboot loop.
:::
