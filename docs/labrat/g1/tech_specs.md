---
sidebar_position: 100
description: "Technical information for those that want it."
---

# Technical Information

For the technically inclined, we provide the following technical information about the LabRat.

## Input

The input is optically isolated from the rest of the circuit. The input is triggered when the tip and ring of the 3.5mm mono jack are shorted together. The input jack outputs the same voltage as the power supply and can handle up to 24VDC continuously.

## Output

The output uses a simple relay to switch the output. The output is normally open and will close when triggered. The relay model used is the J1031C3VDC.15S made by CIT relay & switch. The relay is rated for 2A at 60VDC and we designed the PCB traces around this spec. If you want to read the datasheet you can find it [here](https://www.citrelay.com/Catalog%20Pages/RelayCatalog/J103.pdf).
