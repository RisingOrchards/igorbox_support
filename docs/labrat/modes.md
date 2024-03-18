---
sidebar_position: 10
description: "There are 3 operating modes for the LabRat. Learn more here."
---

# Modes

There are 3 operating modes for the LabRat:

- **Random Retrigger** - This mode will randomly trigger the output within a set time range and after a set delay.
- **Delayed Trigger** - This mode will delay the input trigger by a set time before triggering the output.
- **Motion** - This mode disables the onboard input and uses the Passive Infrared (PIR) sensor to trigger the output with or without a delay.

## Random Retrigger

The first mode is the Random Retrigger mode. This mode will randomly trigger the output within a set time range and after a set delay.

There are two settings for this mode:

- **Delay** - This the time in seconds the LabRat will wait before starting the randomized timer.
- **Range** - This is the maximum time in seconds the LabRat will set the randomized timer to.

### Examples

- **Delay** - 0, **Range** - 5
  - This will trigger the output between 0 and 5 seconds randomly on a loop.
- **Delay** - 5, **Range** - 10
  - This will wait 5 seconds before starting the random timer and then trigger the output between that moment and 10 seconds randomly on a loop.
- **Delay** - 0, **Range** - 0
  - This will trigger the output immediately and then again immediately on a loop. (very annoying)
- **Delay** - 5, **Range** - 0
  - This will trigger the output every 5 seconds on a loop.

## Delayed Trigger

The second mode is the Delayed Trigger mode. This mode will delay the input trigger by a set time before triggering the output.

There are two settings for this mode:

- **Delay** - This the time in seconds the LabRat will wait before triggering the output after the input is triggered.
- **Reset** - This is the time in seconds the LabRat will wait before allowing the input to trigger the output again.

### Examples

- **Delay** - 0, **Reset** - 5
  - This will trigger the output immediately and then wait 5 seconds before allowing the input to trigger the output again.
- **Delay** - 5, **Reset** - 10
  - When the input is triggered, the LabRat will wait 5 seconds before triggering the output and then wait 10 seconds before allowing the input to trigger the output again.

## Motion

The third mode is the Motion mode. This mode disables the onboard input and uses the Passive Infrared (PIR) sensor to trigger the output with or without a delay.

There are two settings for this mode:

- **Delay** - This the time in seconds the LabRat will wait before triggering the output after the PIR sensor is triggered.
- **Reset** - This is the time in seconds the LabRat will wait before allowing the PIR sensor to trigger the output again.

### Examples

- **Delay** - 0, **Reset** - 5
  - This will trigger the output immediately and then wait 5 seconds before allowing the PIR sensor to trigger the output again.
- **Delay** - 5, **Reset** - 10
  - When the PIR sensor is triggered, the LabRat will wait 5 seconds before triggering the output and then wait 10 seconds before allowing the PIR sensor to trigger the output again.
