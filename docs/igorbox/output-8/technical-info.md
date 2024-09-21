---
sidebar_position: 1000
description: "For those that are interested in the technical details of the IgorBox Output 8"
---

# Technical Information

In this section, we are going to dig a little deeper into the components that are used so you can get a better understanding of the capabilities and limitations of the IgorBox Output 8.

:::danger
This section is for people with an understanding of electronics and engineering. This information is provided for reference only. If you choose to use this information to do something outside of our recommendations or limits, you do so at your own risk.
:::

## Relays

Let's start with the relays and the circuits that control them.

### High power channels

Channel 1 and 2 use the [CIT J105D1AS3VDC.45 relay](https://www.digikey.com/en/products/detail/cit-relay-and-switch/J105D1AS3VDC-45/14001846). This is a 3.3VDC relay with a 10 amp rating at 277VAC.

You can read the full datasheet [here](https://www.citrelay.com/Catalog%20Pages/RelayCatalog/J105D.pdf).

So why did we set the max current to 3Amps on the channels. Well, there are two main reasons:

1. The circuit board space limited us to a max of 5 amp traces to route everything on the board. This means that the traces that connect the relay to the I/O connector block are rated for 5 amps max.
1. Given the traces are rated to handle a max of 5 amps, we de-rated the relay channel to 3 amps to give a little headroom for safety and reliability.

### Lower power channels

Channels 3 through 8 use the [J1031C3VDC.15S relay](https://www.digikey.com/en/products/detail/cit-relay-and-switch/J1031C3VDC-15S/14001722). This is a 3.3VDC relay with a 2 amp rating at 125VAC.

You can read the full datasheet [here](https://www.citrelay.com/Catalog%20Pages/RelayCatalog/J103.pdf).

The same reasons for the 3 amp rating on the high power channels apply to the 1 amp rating on the lower power channels. We used smaller traces and de-rated the relay to give a little headroom for safety and reliability.

:::warning
We realize these relays are rated for AC voltage at mains levels. **We absolutely do not recommend or condone the use of mains power though the Output 8.** Mains power (what comes out of your wall) is dangerous and is not something we want to be responsible for. If you need to control mains power, please follow all local electrical codes and regulations. If you use the Output 8 to control mains power, **you do so at your own risk**.
:::

## LEDs and Indicators

We designed the system to go dark with the change of configuration. This means that the LEDs are software controlled. This allows us to change the behavior of the LEDs based on the configuration of the relay. As an example, why setting a channel to "normal closed", the firmware will turn the relay on and the LED off. This way, the LED will show the state of the channel (based on your composition or manual control), not the state of the relay.

If you elect to turn the LEDs of in the web console, the firmware will turn them off and they will stay off until you turn them back on or you go into manual control mode.

## Audio

The onboard audio Digital to Analog Converter (DAC) is a [Texas Instruments PCM5102A](https://www.ti.com/product/PCM5102A). This is a 24-bit DAC that can handle sample rates well into the audiophile range.

Being audio snobs ourselves, we wanted to make sure that the audio quality was top-notch, so we spent a great deal of time and testing to make sure the audio circuits are very clean and free of noise.

Beyond this, we support lossless audio formats like FLAC and WAV, so you can be sure that your audio will sound great! (We also support MP3 and AAC for those that need smaller file sizes).

All of the decoding and playback is done on the onboard microcontroller. This means that the audio is not being streamed from the cloud, but is being played directly from the onboard storage. This allows for very low latency and high-quality audio playback regardless of the file encoding.

## Storage

The onboard storage is a 64gb SDMMC card. This should be more than enough space for all of your compositions and audio files. We chose this size to give you plenty of room to grow and expand your library without having to worry about running out of space. This card has some special formatting to increase the performance of the audio playback and its not recommended to remove or replace the card as it may cause issues with the firmware.

:::info
If you absoultely need more storage on your IgorBox, please reach out to us directly and we can discuss options for expanding the storage with bigger SDMMC cards and how to format them correctly. (Also, swapping out the card is actually kind of a pain, so we don't recommend it unless talk to us first).
:::

## Power

The power is regulated using an onboard Point of Load (POL) regulator. This regulator takes up to 30VDC input and converts it to the 3.3VDC for all the onboard systems. This regulator is rated for 2 amps and is more than enough to power the relays, audio, and microcontroller. The 3.3VDC rail is not user accessible and is only used for the onboard systems.

:::warning
Even though the POL is rated to handle 30VDC, we do not recommend using anything over 24VDC. There are components that use the unregulated power and they cannot handle more than 24VDC. If you use more than 24VDC, you risk damaging the IgorBox and voiding the warranty.
:::

### Pass through power

We wanted to make it easy to power devices directly from the IgorBox, so we added a pass-through power section on the I/O connector block. This allows you to jump power from the power supply to the relay channels to power devices directly from the IgorBox. This power is unregulated and unprotected so be sure to check the voltage and current requirements of the devices you are powering. We literally just jumped power from the power connector directly to the I/O connector block, so it's the same voltage and current as the power supply.

:::warning
The internal systems are protected against reverse polarity. The pass-through power is not. If you reverse the polarity of the power supply, the IgorBox will not be damaged or even turn on.. but anything you have connected to the pass-through power will get the backwards voltage and could be damaged.
:::
