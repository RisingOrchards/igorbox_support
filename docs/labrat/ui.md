---
sidebar_position: 5
description: "Learn how to interact and program your LabRat"
---

# User Interface

## Display

The LabRat has an OLED display that will show the current mode and the current settings for that mode. The display will turn off after 30 seconds of inactivity. You can wake the display by pressing down on the knob.

:::tip
You can change the display timeout by scrolling to the settings menu and changing the `Display Timeout` setting.
:::

## Knob

The LabRat has a single knob that can be turned to cycle through the modes and settings. The knob can also be pressed down to select or confirm settings.

We designed it with a single knob and programming button to simplify the user interface. This makes it easy to use and program without needing to remember a bunch of button combinations.

## Buttons

The LabRat has 2 buttons, the first button is the main button and is part of the knob. This button is used to confirm setting changes and commit them to the device.

The second button is a small button on the side of the device. This button is linked to the input and can be used to trigger the input manually. When you press this button, it triggers the input the same way the input would be triggered if it was connected to a 3.5mm mono output that was shorted.

## Menus

The LabRat will display the current mode and the current settings for that mode. You can cycle through the modes and settings by turning the knob. When you have selected the mode or setting you want to change, you can press down on the knob to enter the setting. You can then turn the knob to change the setting and press down on the knob to confirm the setting.

## Settings

In addition to setting the mode, you can also view the serial number and the firmware version of the LabRat by cycling through the settings menu.

:::note
The serial number and firmware version are read-only and cannot be changed.
:::

## Factory Reset

You can factory reset the LabRat by holding down the knob and powering the device on. The display will show a countdown and then reset the device to the factory settings when the countdown reaches 0.

## Power

The LabRat is powered by a 9VDC-24VDC power supply. The power supply should be rated for at least 1A. The power supply should be connected to the 2.1mm barrel jack on the side of the LabRat.

The pin is center positive and the outer ring is negative.

## Output

The LabRat has a single output that is a 3.5mm mono jack. This output can be connected to any animated props or decorations that have a 3.5mm mono input. The output is a simple switch that is normally open and will close when triggered.

Basically, when the LabRat is triggered, it will short the tip and ring of the 3.5mm mono jack together for the amount of time you have set for `Relay on-time` in the settings. _This is defaulted to 1 second_

## Input

The LabRat has a single input that is a 3.5mm mono jack. This input can be connected to any animated props or decorations that have a 3.5mm mono output. The input is triggered when the tip and ring of the jack are shorted together. We designed it this way to make it simple to trigger and to support many of the commonly available foot pads and other triggers.

## PIR Sensor

The LabRat has a Passive Infrared (PIR) sensor that can be used to trigger the output in the Motion mode. The PIR sensor has a range of about 20 feet and about a 100 degree field of view. The PIR sensor is always active when the LabRat is powered on, however it is only used when in `Motion` mode.

:::warning
The PIR sensor is very sensitive and can be triggered by small animals, insects, and even changes in temperature. It is best to use the PIR sensor in a controlled environment.
:::

## LED

The LabRat has 2 LEDs on the device. The first LED is a power indicator (green) and will light up when the LabRat is powered on. The second LED is a trigger indicator (red) and will light up when the output is triggered.

:::tip
You can disable the power LED by removing the jumper on the PCB next to the power jack
:::
