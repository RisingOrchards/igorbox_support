---
title: "Introducing IgorBox Connect"
authors: [lisa]
tags: [IgorBox, Announcements]
date: 2026-06-27
image: /img/blog/2026-06-27-igorbox-connect/og.jpg
---

Setting up a controller on WiFi used to mean dragging an Ethernet cable to it for the first boot, even if that controller was only ever going to live on WiFi. Today that step goes away. **IgorBox Connect** is our new free app for iPhone and Android that sets up a controller's WiFi over Bluetooth. No cable, no laptop, no captive portal. Just your phone and the controller in front of you.

It's available now on the [App Store](https://apps.apple.com/us/app/igorbox-connect/id6762228692) and [Google Play](https://play.google.com/store/apps/details?id=com.risingorchards.igorboxmanager).

<!-- truncate -->

<div style={{display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', margin: '0.5rem 0 1.5rem'}}>
  <a href="https://apps.apple.com/us/app/igorbox-connect/id6762228692" aria-label="Download IgorBox Connect on the App Store">
    <img src="/img/igorbox_connect/app-store-badge.svg" alt="Download on the App Store" height="40" style={{height: '40px', width: 'auto'}} />
  </a>
  <a href="https://play.google.com/store/apps/details?id=com.risingorchards.igorboxmanager" aria-label="Get IgorBox Connect on Google Play">
    <img src="/img/igorbox_connect/google-play-badge.png" alt="Get it on Google Play" height="58" style={{height: '58px', width: 'auto'}} />
  </a>
</div>

## The cable you no longer have to run

We built [Magic Provision](/docs/controllers/shared/magic-provision) so adding a controller to your Studio is just a setup ID and one screen. It can configure WiFi too, but only after the controller is already online, which usually meant plugging in Ethernet for that very first boot. For permanent installs where you are running cable anyway, that is no problem. For a prop cart, a hard-to-reach attic fogger, or a room where the nearest switch is a long way off, that first cable was a hassle or you were provisioning controllers in an office and then taking them out to the site.

IgorBox Connect removes it. A brand-new controller (or one you have reset) with no network connection starts advertising over Bluetooth. The app finds it, you confirm you are standing right next to it, you pick your WiFi, and the controller joins. From there it is online and ready to pair with Studio like any other controller.

## How it works

![The IgorBox Connect setup flow, from finding a controller to joining WiFi](/img/blog/2026-06-27-igorbox-connect/flow.jpg)

The whole thing takes about a minute:

1. **Find your controller.** Open the app and it scans for nearby controllers in setup mode. Yours shows up by model and serial number.
2. **Connect and confirm.** Tap it, and the app reads back the serial, model, and firmware so you know you have the right box.
3. **Authorize at the controller.** This is the part we are proud of (more on it below).
4. **Pick your WiFi.** The controller scans for networks and lists them with signal strength and security, strongest first.
5. **Done.** Enter the password and the controller joins your WiFi. When it comes online, the Bluetooth connection closes on its own. That is your sign it worked.

## A button press instead of a password

A controller that is waiting for setup has no network and no credentials yet, which is exactly when it would be easiest to mess with. So before the app can change anything, the controller blinks its status LED blue and asks you to press the physical front button within 30 seconds.

It is a small thing that does a lot. It proves the person setting up WiFi is actually standing at the controller, not a curious guest who happened to open the app across the room. No press, no setup. We would rather you tap one extra button than leave an offline controller open to anyone nearby.

## A status LED decoder in your pocket

While we were at it, we added something handy to the app's About screen: an animated reference for every status LED state, matched to exactly what the controller does in the field. Blue pulse, green blink, the purple lockout, the red fault codes, all of it. Next time you are squinting at a controller trying to remember what "slow blue pulse" means, it is right there in your hand. It links straight to the [full Status LED guide](/docs/controllers/shared/status-led) too.

<video autoPlay loop muted playsInline poster="/img/igorbox_connect/status-leds-poster.jpg" style={{display: 'block', width: '300px', maxWidth: '100%', margin: '1.5rem auto', borderRadius: '16px', border: '1px solid var(--ifm-color-emphasis-300)'}}>
  <source src="/img/igorbox_connect/status-leds.webm" type="video/webm" />
  <source src="/img/igorbox_connect/status-leds.mp4" type="video/mp4" />
  <img src="/img/igorbox_connect/status-leds-poster.jpg" alt="The IgorBox Connect app's animated Status LEDs reference" style={{display: 'block', width: '300px', maxWidth: '100%', margin: '1.5rem auto'}} />
</video>

## Try it

IgorBox Connect is free and live on both stores today. Grab it, and the next time you set up a WiFi-only controller, leave the cable in the bag.

- [Read the IgorBox Connect guide](/docs/controllers/shared/igorbox-connect)
- [Download on the App Store](https://apps.apple.com/us/app/igorbox-connect/id6762228692)
- [Get it on Google Play](https://play.google.com/store/apps/details?id=com.risingorchards.igorboxmanager)
