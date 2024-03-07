---
sidebar_position: 1
---

# Overview

The LabRat is a simple 1 input and 1 output box that can trigger many types of animated props/decorations.

## Getting Started Video

You can watch the getting started video for the LabRat which should cover most of the basics of the device.

--video goes here

## Modes

There are 3 operating modes for the LabRat:

- **Random Retrigger** - This mode will randomly trigger the output within a set time range and after a set delay.
- **Delayed Trigger** - This mode will delay the input trigger by a set time before triggering the output.
- **Motion** - This mode disables the onboard input and uses the Passive Infrared (PIR) sensor to trigger the output with or without a delay.

### Random Retrigger

The first mode is the Random Retrigger mode. This mode will randomly trigger the output within a set time range and after a set delay.

There are two settings for this mode:

- **Delay** - This the time in seconds the LabRat will wait before starting the randomized timer.
- **Range** - This is the maximum time in seconds the LabRat will set the randomized timer to.

#### Examples

- **Delay** - 0, **Range** - 5
  - This will trigger the output between 0 and 5 seconds randomly on a loop.
- **Delay** - 5, **Range** - 10
  - This will wait 5 seconds before starting the random timer and then trigger the output between that moment and 10 seconds randomly on a loop.
- **Delay** - 0, **Range** - 0
  - This will trigger the output immediately and then again immediately on a loop. (very annoying)
- **Delay** - 5, **Range** - 0
  - This will trigger the output every 5 seconds on a loop.

### Delayed Trigger

The second mode is the Delayed Trigger mode. This mode will delay the input trigger by a set time before triggering the output.

There are two settings for this mode:

- **Delay** - This the time in seconds the LabRat will wait before triggering the output after the input is triggered.
- **Reset** - This is the time in seconds the LabRat will wait before allowing the input to trigger the output again.

#### Examples

- **Delay** - 0, **Reset** - 5
  - This will trigger the output immediately and then wait 5 seconds before allowing the input to trigger the output again.
- **Delay** - 5, **Reset** - 10
  - When the input is triggered, the LabRat will wait 5 seconds before triggering the output and then wait 10 seconds before allowing the input to trigger the output again.

### Motion

The third mode is the Motion mode. This mode disables the onboard input and uses the Passive Infrared (PIR) sensor to trigger the output with or without a delay.

There are two settings for this mode:

- **Delay** - This the time in seconds the LabRat will wait before triggering the output after the PIR sensor is triggered.
- **Reset** - This is the time in seconds the LabRat will wait before allowing the PIR sensor to trigger the output again.

#### Examples

- **Delay** - 0, **Reset** - 5
  - This will trigger the output immediately and then wait 5 seconds before allowing the PIR sensor to trigger the output again.
- **Delay** - 5, **Reset** - 10
  - When the PIR sensor is triggered, the LabRat will wait 5 seconds before triggering the output and then wait 10 seconds before allowing the PIR sensor to trigger the output again.

## Display

The LabRat has an OLED display that will show the current mode and the current settings for that mode. The display will turn off after 30 seconds of inactivity. You can wake the display by pressing down on the knob.

## Knob

The LabRat has a single knob that can be turned to ycle through the modes and settings. The knob can also be pressed down to select or confirm settings.

## Buttons

The LabRat has 2 buttons, the first button is the main button and is part of the knob. The second button is a small button on the side of the device. This button is linked to the input and can be used to trigger the input manually.

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

## Input

The LabRat has a single input that is a 3.5mm mono jack. This input can be connected to any animated props or decorations that have a 3.5mm mono output. The input is triggered when the tip and ring of the jack are shorted together.

## PIR Sensor

The LabRat has a Passive Infrared (PIR) sensor that can be used to trigger the output in the Motion mode. The PIR sensor has a range of about 20 feet and about a 100 degree field of view. The PIR sensor is always active when the LabRat is powered on.

:::warning
The PIR sensor is very sensitive and can be triggered by small animals, insects, and even changes in temperature. It is best to use the PIR sensor in a controlled environment.
:::

## LED

The LabRat has 2 LEDs on the device. The first LED is a power indicator (green) and will light up when the LabRat is powered on. The second LED is a trigger indicator (red) and will light up when the output is triggered.

:::tip
You can disable the power LED by removing the jumper on the PCB next to the power jack
:::

## DIY 3D Printable Enclosure

If you purchased the bare PCB version of the LabRat, you can 3D print your own enclosure. We provide STL files for the enclosure that can be found on Thangs (url goes here).

:::tip
The enclosure is designed to be printed with a 0.4mm nozzle and 0.2mm layer height. The enclosure is designed to be printed without supports.
:::

## Technical Information

For the technically inclined, we provide the following technical information about the LabRat.

### Input

The input is optically isolated from the rest of the circuit. The input is triggered when the tip and ring of the 3.5mm mono jack are shorted together. The input jack outputs the same voltage as the power supply and can handle up to 24VDC continuously.

### Output

The output uses a simple relay to switch the output. The output is normally open and will close when triggered. The relay model used is the J1031C3VDC.15S made by CIT relay & switch. The relay is rated for 2A at 60VDC and we designed the PCB traces around this spec. If you want to read the datasheet you can find it [here](https://www.citrelay.com/Catalog%20Pages/RelayCatalog/J103.pdf).
