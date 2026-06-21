---
title: Glossary
sidebar_position: 95
description: Plain-language definitions of the show-control, haunt, and escape-room terms used throughout the IgorBox docs — pneumatics, maglocks, pinspots, SSRs, PWM, and more.
keywords:
  - show control glossary
  - haunt terms
  - escape room terms
  - pneumatic
  - maglock
---

# Glossary

Plain-language definitions of the terms you'll see across the IgorBox docs. New to show control? Start here.

### Air cylinder (pneumatic actuator)

A piston that extends or retracts when compressed air is applied. The muscle behind drop panels, popping props, fast moving armatures, and slamming doors. Air flow is switched by a [solenoid valve](#solenoid-valve).

### Ambient routine (Ambient show)

A show set to loop on a controller whenever nothing else is playing — the "default state" of your attraction (background ambience, idle lighting, an attractor loop). A triggered show always interrupts it, then the ambient picks back up. See [Ambient Routines](/docs/studio/ambient-routines).

### Anode / cathode

The two legs of an LED: the **anode** is the positive (+) side, the **cathode** is the negative (−) side. On the LED Controller you wire the anode to the channel's (+) terminal and the cathode to the (−). See the [LED Controller wiring guide](/docs/controllers/led-controller/wiring-guide).

### Animatronics

Automated, mechanically-driven figures or props — the moving creatures and characters in an attraction. IgorBox drives their motion, lights, and sound as part of a show.

### Back-voltage spike

The surge of voltage an inductive load (like a DC motor) kicks back when its power is suddenly cut. Left unchecked it can damage whatever switched it — which is why motors want [flyback](#flyback-diode) protection. See [Motor Speed Control](/docs/controllers/led-controller/motor-speed-control).

### Brake mode

Actively stopping a motor instead of letting it coast. Neither the LED Controller nor the RGBW-PWR breakout brakes a motor — when the channel switches off the motor [freewheels](#freewheel) until friction stops it; for active braking use an external brake circuit. See [Motor Speed Control](/docs/controllers/led-controller/motor-speed-control).

### Breakout board

A small board that carries some of a controller's channels out to a separate location, connected by jumper wires or a standard Ethernet cable (signal only — not a network). It's still one controller. See [Channel Breakout Boards](/docs/controllers/led-controller/channel-breakouts).

### Center-positive barrel jack

The round power connector on every controller (5.5 × 2.1 mm), wired center-positive — the inner pin is positive (+) and the outer sleeve is ground. See [Tech Specs](/docs/controllers/output-8-mkii/tech-specs).

### Channel indicator

The per-channel RGB light on a controller's front panel. Its color shows how the channel is set up and whether it's on — reflecting the controller's *intended* state, not a live reading of the wiring. You can turn the indicators off for dark installs. See [Front Panel](/docs/controllers/output-8-mkii/front-panel).

### Clip

A block of content on a timeline [track](#track) — a relay On-pulse, a lighting envelope, or an audio clip. Drag to move, drag the edges to resize, split, or delete. See [Timeline Editor: Basics](/docs/studio/timeline-editor/basics).

### Contact closure

A plain switch that completes a circuit by closing its contacts — carrying no voltage of its own. It's how many sensors and buttons signal an input. See the [Input 16 wiring guide](/docs/controllers/input-16/wiring-guide).

### Control point

A (time, value) point on a lighting [track](#track). Between control points the channel ramps smoothly from one value to the next — or you can set a point to **step (hold)** for a hard jump. See [Lighting](/docs/studio/timeline-editor/pwm-and-lighting).

### Current clamp

A built-in limit on how much current a channel will pass. The LED Controller clamps every channel at 20 mA — which is why an LED can't pull more than its safe current and you don't need a series resistor. See [Tech Specs](/docs/controllers/led-controller/tech-specs).

### Dark ride

An indoor ride-through attraction where guests move past scenes of synchronized lighting, sound, and effects — one of the themed-entertainment setups IgorBox is used for. See [IgorBox for Themed Entertainment](/docs/use-cases/themed-entertainment).

### Deploy

Sending a show from Studio to its target controllers so it's live and ready to fire. Studio packages the show, pushes it to each controller, and waits for confirmation; an offline controller pulls it when it reconnects. Every deploy creates a new [version](#version-history). See [Deploys and Versions](/docs/studio/timeline-editor/deploys-and-versions).

### DHCP

The common network service that automatically hands out IP addresses. Your network needs DHCP so a controller can get an address when it connects (most networks do this by default). See [Connectivity](/docs/controllers/shared/connectivity).

### DIN rail

A standard metal mounting rail used inside electrical enclosures. IgorBox controllers can wall-mount or clip to a DIN rail (with the optional kit). See [Tech Specs](/docs/controllers/output-8-mkii/tech-specs).

### Draft

A show that exists only in the editor and hasn't been deployed to any controller yet. The editor's state badge reads **Draft** until you [deploy](#deploy). See [Deploys and Versions](/docs/studio/timeline-editor/deploys-and-versions).

### Dry contact

A relay output that's just a switch — two terminals that connect or disconnect, carrying no power of their own. You pass your own power through it, exactly like a light switch. The opposite of a powered (solid-state) output.

### Easywire™

IgorBox's guided wiring helper: it lights up the exact terminal for whatever you're wiring and walks you through it. See [Easywire™](/docs/controllers/shared/easywire).

### Envelope

The shape a dimmable channel's value follows over time, drawn on a lighting [track](#track) as a filled curve between [control points](#control-point). See [Lighting](/docs/studio/timeline-editor/pwm-and-lighting).

### Factory reset

Wiping a controller's local shows, media, and configuration and rebooting it locked. The controller stays registered in your Studio and [Magic Provision](#magic-provision) re-pairs it automatically; the setup ID is used to restore your data from your Studio. Triggered by holding the front button at power-on. See [Front Button](/docs/controllers/shared/front-button).

### Fail-safe

Designed so a loss of power or other failure leaves things in the safe state. A [maglock](#maglock) is fail-safe because it unlocks when power is removed — and you keep that behavior by switching it through an [inverted output](#inverted-output). See [IgorBox for Escape Rooms](/docs/use-cases/escape-rooms).

### Flyback diode

A diode placed across an inductive load (like a solenoid or motor) to absorb the voltage spike created when power is removed. Protects your electronics and reduces radio interference. See [Multistate Relay™ › Flyback Diodes](/docs/controllers/output-8-mkii/multistate-relay).

### Fogger

A device that produces fog or haze for atmosphere. Switch it from a relay channel like any other effect. (See also [mister](#mister).)

### Freewheel

When a motor coasts to a stop on its own after power is removed, rather than being actively braked. See [Motor Speed Control](/docs/controllers/led-controller/motor-speed-control).

### Game master

The staff member who runs an escape room — watching the group, sending hints, and resetting or force-opening locks. IgorBox supports game-master controls like a one-button room reset. See [IgorBox for Escape Rooms](/docs/use-cases/escape-rooms).

### Global event

On IgorBox, every input is a global event: an input on any controller can trigger a show or rule on any other controller on the same local network. See [Triggers](/docs/studio/triggers).

### GND (ground)

Ground — the negative/return side of a DC circuit and the common reference your wiring shares. Often the leg a channel switches. Marked GND or V− on the terminals. See the wiring guides.

### H-bridge

A circuit that reverses the direction of current to a DC motor so it can run both ways. Neither the LED Controller nor the RGBW-PWR breakout reverses direction on its own — use an external H-bridge for that. See [Motor Speed Control](/docs/controllers/led-controller/motor-speed-control).

### Hard Lock (E-stop function)

An emergency stop that halts all playback and keeps the controller locked until it's power-cycled — set as a [front button](/docs/controllers/shared/front-button) mode or fired from a trigger. On the front panel, *every* light blinks purple so it's unmistakable. See [Status LED](/docs/controllers/shared/status-led). Not certified for "safety of life" operations.

### Hold current

The smaller, steady current a solenoid or relay coil needs to *stay* energized after it first pulls in — lower than the initial [inrush current](#inrush-current). See the [Output 8 wiring guide](/docs/controllers/output-8-mkii/wiring-guide).

### Inductive load

Anything with a coil — solenoids, relays, motors — that stores energy in a magnetic field and kicks back a voltage spike when power is cut. Inductive loads want a [flyback diode](#flyback-diode). See [Multistate Relay™ › Flyback Diodes](/docs/controllers/output-8-mkii/multistate-relay).

### Inrush current

The brief surge of current when a load first switches on — for a pneumatic valve it can spike to 2–3× the steady [hold current](#hold-current). Size the channel for the inrush, not just the hold. See the [Output 8 wiring guide](/docs/controllers/output-8-mkii/wiring-guide).

### Inverted output

A channel whose relay is energized at rest and drops out when the channel activates — the reverse of normal. Used for **fail-safe** [maglocks](#maglock): the lock stays powered (locked) during play and releases on solve or on power loss.

### IR beam (break beam)

An invisible infrared beam between an emitter and receiver that signals when something crosses it — a common trip trigger for scares and gates. Wire its output to an input. See the [Input 16 wiring guide](/docs/controllers/input-16/wiring-guide).

### Isolated input

An input with no shared electrical connection to the controller's internals, so you can't damage the box by wiring it backwards. IgorBox inputs are polarity-insensitive and accept 6–48V AC or DC.

### Latch

A [Logic Rule](#logic-rule) block that captures a state and holds it on until it's reset — "once the puzzle is solved, stay solved." See [Building Blocks](/docs/studio/logic-rules/node-reference).

### Line level

The strength of the controller's audio output — meant to feed amplifiers, powered speakers, or a mixer, not headphones. The jack is a 3.5 mm stereo ([TRS](#trs-jack)) output. See [Audio Output](/docs/controllers/shared/audio-out).

### Live Preview

Playing a show on the real hardware in real time while you keep editing — the fast iteration loop, no deploy needed. It works on a show targeting a single controller; the status LED blinks orange while it's active. See [Live Preview](/docs/studio/timeline-editor/live-preview).

### Logic Rule

IgorBox's visual, no-code rules engine. Combine inputs and conditions ("switch A and switch B") to trigger shows, effects, and outputs. See [Logic Rules](/docs/studio/logic-rules/overview).

### Magic Provision

How you get a brand-new controller onto your Studio: read its 8-character setup ID off the sticker, enter it in Studio, and power the controller on — no IP setup or cables to configure. See [Magic Provision](/docs/controllers/shared/magic-provision).

### Maglock

A magnetic lock that holds a door shut while it's powered and releases when power is removed. Common in escape rooms, and inherently **fail-safe** (a power outage unlocks the door). See [IgorBox for Escape Rooms](/docs/use-cases/escape-rooms).

### Manual Control

Driving a controller's channels yourself, live, from the browser with sliders and buttons — for testing wiring, troubleshooting, or demos. Show playback pauses while you have control, and the status LED blinks orange. See [Manual Control](/docs/studio/manual-control).

### Media Browser

Studio's audio library dialog, where you pick or upload a sound to drop onto an audio [track](#track). See [Audio Clips](/docs/studio/timeline-editor/audio-clips).

### Mister

A device that puts out a fine water mist for fog/humidity effects — switched from a relay channel like any other low-power effect. See the [Output 8 wiring guide](/docs/controllers/output-8-mkii/wiring-guide).

### Multistate Relay™

An IgorBox feature where a single channel can act as either a standard relay (dry contact) or a solid-state like (powered) output, switchable in software. See [Multistate Relay™](/docs/controllers/output-8-mkii/multistate-relay).

### Named Trigger

A signal one [Logic Rule](#logic-rule) can send and another rule **on the same controller** can listen for — used to chain rules together. (To coordinate across controllers, watch the other controller's input or use a show trigger.) See [Building Blocks](/docs/studio/logic-rules/node-reference).

### Normally open / normally closed

A relay's resting (unpowered) state. **Normally open** means the contacts are open until the relay is energized; **normally closed** means they're closed until energized. All IgorBox relays are normally open; a maglock wants the opposite, which you get with an [inverted output](#inverted-output). See the [Input 16 wiring guide](/docs/controllers/input-16/wiring-guide).

### Optically isolated / optocoupler

Isolation that passes a signal across a gap using light instead of a shared wire, so no current flows between the two sides. IgorBox inputs are optically isolated, which is why they're safe to wire in any polarity. An **optocoupler** is the component that does this. See [Input 16 Tech Specs](/docs/controllers/input-16/tech-specs).

### Par can / fixture

A stage/architectural light. Bigger fixtures need more current than a signal-level channel can provide — drive them through the [RGBW-PWR breakout](/docs/controllers/led-controller/rgbw-pwr-breakout).

### Passthrough (power / zone)

A set of terminals that brings the controller's barrel-jack supply voltage out to the channels, so a channel can switch that same voltage without a separate power supply. The internal bus has a current limit, so it's for modest loads — heavier loads get their own supply. See the [Output 8 wiring guide](/docs/controllers/output-8-mkii/wiring-guide).

### Photo-eye / proximity sensor

Industrial sensors that detect an object without touching it (proximity) or by an interrupted light path (photo-eye). They often run on 24V and output a 24V signal; both PNP and NPN types work with an isolated input. See the [Input 16 wiring guide](/docs/controllers/input-16/wiring-guide).

### Pinspot

A small, narrow-beam light — often a single LED — used for tight accent lighting. Low current, so it wires straight to an [LED Controller](/docs/controllers/led-controller/overview) channel.

### Playhead

The vertical line on the timeline marking the current playback position; new clips land at the playhead and it follows playback. See [Timeline Editor: Basics](/docs/studio/timeline-editor/basics).

### Polarity / polarity-insensitive

Polarity is which wire is positive and which is negative. A **polarity-insensitive** connection works either way round — IgorBox inputs are polarity-insensitive, so you can't wire them backwards. See [Input 16 Tech Specs](/docs/controllers/input-16/tech-specs).

### PWM (dimming)

Pulse-width modulation — switching a channel on and off very fast to set brightness or speed. It's how the [LED Controller](/docs/controllers/led-controller/overview) dims lights smoothly and runs [DC motor speed control](/docs/controllers/led-controller/motor-speed-control).

### Reed switch

A small switch that closes or opens when a magnet comes near it — no moving parts to wear out and tamper-resistant, which makes it a favorite for escape-room puzzle pieces. Wire it like a button. See the [Input 16 wiring guide](/docs/controllers/input-16/wiring-guide).

### Retrigger

What a trigger does when it fires again while its show is already playing — **Restart**, **Skip if Playing**, **Toggle**, or **Take Over**. See [Triggers](/docs/studio/triggers).

### RFID reader / tag

A wireless ID system: a **tag** (card or fob) is held to a **reader**, which fires an input when the right tag is present — common for escape-room puzzles. See [IgorBox for Escape Rooms](/docs/use-cases/escape-rooms).

### RGBW

A four-color fixture or channel group — **R**ed, **G**reen, **B**lue, and **W**hite. On the LED Controller you can tie the channels into a color group and drive them as one color. See [RGBW-PWR Breakout](/docs/controllers/led-controller/rgbw-pwr-breakout).

### RGBW-PWR breakout

The powered version of a 4-channel breakout: it adds its own supply so four LED Controller channels can drive real lighting (or a small motor) at higher current or a different voltage than the controller's own channels. See [RGBW-PWR Breakout](/docs/controllers/led-controller/rgbw-pwr-breakout).

### Safety Lock

A lock that stops the show currently playing on a controller and prevents new ones from starting until you toggle it back off — for maintenance, daytime, or walk-throughs. Available as a [front button](/docs/controllers/shared/front-button) mode or a trigger action (called Soft Lock there). Unlike a [Hard Lock](#hard-lock-e-stop-function), it doesn't need a reboot.

### Show

A timed sequence of commands — relays, lighting, audio, motor moves — authored on the [timeline](#timeline-editor) and deployed to one or more controllers. The core thing you build in Studio. See [What is IgorBox Studio?](/docs/studio/overview).

### Show control

The umbrella term for coordinating lights, sound, motion, logic, and effects so they play together on cue. It's what IgorBox does.

### Slip editing

Shifting the audio *inside* a clip without moving the clip itself (Alt-drag the clip body) — nudging which part of the sound plays at that spot. See [Audio Clips](/docs/studio/timeline-editor/audio-clips).

### Solenoid valve

An electrically operated air valve. Energize it and air flows to the [air cylinder](#air-cylinder-pneumatic-actuator); de-energize and it stops. Switched by a relay like on an [Output 8](/docs/controllers/output-8-mkii/overview) channel.

### Solid-state mode

A [Multistate Relay™](#multistate-relay) channel mode where the channel passes the controller's own supply through to the output using an internal software controlled relay to jump the power through to the connector — a live, powered output rather than a [dry contact](#dry-contact). DC only.

### Solid-state relay (SSR)

An electronic on/off switch with no moving parts. A small control signal switches a much larger load — handy for mains lighting or big motors. A low-current channel can drive one directly; see the [LED Controller wiring guide](/docs/controllers/led-controller/wiring-guide).

### SSID

The name of a WiFi network. For a production install, put the controllers on their own network and consider hiding the SSID and using a strong password. See [Connectivity](/docs/controllers/shared/connectivity).

### Status LED

The single front-panel light that tells you a controller's state through a **color** and a **pattern** together — e.g. solid green is ready, fast-blink green is a show playing, orange blink is Manual Control, purple is a lock. See [Status LED](/docs/controllers/shared/status-led).

### Studio (IgorBox Studio)

The web app where you add controllers, build shows, set up logic, and run your attraction — it runs in any browser. Your shows run on the controllers, not the cloud, so they keep playing if the internet drops; the cloud is for building and pushing them. See [What is IgorBox Studio?](/docs/studio/overview).

### Timeline editor

Studio's show-building screen, modeled on video editors and digital audio workstations: [tracks](#track) for each channel, with [clips](#clip) and [control points](#control-point) arranged over time. See [Timeline Editor: Basics](/docs/studio/timeline-editor/basics).

### Toggle

A [Logic Rule](#logic-rule) block (also a trigger/retrigger mode) that flips on, then off, then on again on each fire — for press-on/press-off buttons. See [Building Blocks](/docs/studio/logic-rules/node-reference).

### Track

A row in the [timeline editor](#timeline-editor), one per controller channel. Track types are **Relay** (on pulses), **Lighting** (dimming envelopes), and **Audio**. See [Timeline Editor: Basics](/docs/studio/timeline-editor/basics).

### Trigger

Anything that starts a show or rule — a button press, a sensor, a timer, or an event from another controller. On IgorBox, every input is a global event that can trigger anything on your network.

### TRS jack

The 3.5 mm three-conductor (tip-ring-sleeve) stereo connector used for the controller's [line-level](#line-level) audio output. A 3.5 mm-to-dual-RCA or dual-¼″ cable feeds most amps and mixers. See [Audio Output](/docs/controllers/shared/audio-out).

### V+ / V−

Shorthand for the positive (V+) and negative (V−) sides of a DC connection. On powered terminals the helper LEDs mark them — red for V+, blue for V−. See the wiring guides.

### Version history

Studio's record of every [deploy](#deploy) of a show — version number, when it went out, which controllers have it, and notes — and where you roll back to a known-good version. See [Deploys and Versions](/docs/studio/timeline-editor/deploys-and-versions).

### VLAN

A virtual network that keeps a group of devices logically separate on shared hardware. Keep all controllers that talk to each other on a single VLAN, and ideally isolate them from guest and office networks. See [Connectivity](/docs/controllers/shared/connectivity).

### WAGO connector

The lever-action, tool-free wire connector on every IgorBox terminal: lift the lever, insert the wire, drop the lever — no screwdriver. See the wiring guides.

### Waveform

The visual shape of an audio clip's sound, shown inside the clip on its [track](#track); it reflects the clip's slip offset and volume. See [Audio Clips](/docs/studio/timeline-editor/audio-clips).

### Webhook (inbound / outbound)

A web link that connects IgorBox to other systems. An **inbound** webhook is a URL that fires a trigger when something calls it (a ticketing system, a script, a phone). An **outbound** webhook lets a [Logic Rule](#logic-rule) call an external URL when something happens (post to Slack, hit a dashboard). Webhooks are a Pro/Enterprise feature. See [Inbound Webhooks](/docs/studio/webhooks/inbound) and [Outbound Webhooks](/docs/studio/webhooks/outbound).

### Wiper motor

A car windshield-wiper motor — cheap, high-torque, and a haunt favorite for mechanical props. It's a high-inrush motor, so switch it on a 3A relay (Output 8 channel 7 or 8) with its own supply. See the [Output 8 wiring guide](/docs/controllers/output-8-mkii/wiring-guide).
