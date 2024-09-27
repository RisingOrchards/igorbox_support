---
sidebar_position: 10
description: "Wifi tips and tricks"
---

# Wireless Networking Tips

We at IgorBox have been working with wireless networks for a long time. Here are some tips and tricks to help you get the most out of your IgorBox system at your attraction.

## A bit of history

First we want to share a little history about the IgorBox system and its evolution to what it is today.

We started with a simple meshed network system that was designed to communicated on it's own radio network. This system worked great for small installations, but fell short when installations grew to be more than a dozen or so boxes. This was because the network traffic on the radio network would become congested and the boxes would have a hard time communicating with each other reliably.

When we hit this wall, we started looking at creating our own backbone mesh network routing system. With multiple decades of experience in networking, we knew that we could create a system that would work well for our needs and be able to scale to hundreds of boxes. The more we developed this system, the more we realized that we were reinventing the wheel by creating a proprietary wifi router system. When we stepped back and looked at the big picture, we realized that we were never going to be able to compete with the big players in the wifi router market. The meshed WiFi routers available today from big brands like linksys, netgear, etc are so good and so cheap that it would be impossible for us to compete with them. So why not just use them?

That's what we did. We dumped months of work on our proprietary mesh network system and started using off-the-shelf WiFi routers. This was a game changer for us. We were able to create a system that was more reliable, faster, and cheaper than our old system. We were able to scale to hundreds of boxes without any issues. And we were able to focus on what we do best: show control!

This is why our system runs on standard WiFi networks. For the most part, we don't need anything special. We just need a good, reliable WiFi network. (We don't even need internet access for the show to function).

## Suggested WiFi hardware

Most, off-the-shelf WiFi routers will work with the IgorBox system. However, we have found that some routers work better than others. Here are some routers that we have tested and recommend:

- [Ubiquiti Unifi](https://www.ui.com/products/#default) - These are our go-to routers for installations. They are reliable, fast, and have great coverage. They are a bit more expensive than consumer-grade routers, but they are worth it and the management software is amazing.
- [Netgear NightHawk](https://www.netgear.com/home/products/networking/wifi-routers/) - These routers are great and have good coverage and mesh capabilities. These are what we use in our office and are rock solid.
- [TP-Link Archer](https://www.tp-link.com/us/home-networking/wifi-router/) - These routers are a great value and work well for most installations. They are a bit cheaper than the other routers on this list, but they are still reliable and have good coverage. If you are on a budget, and don't need to mesh the routers for large area coverage, these are a great choice.

:::info
If you have questions about a specific router, feel free to reach out to us on Discord at [discord.igorbox.com](https://discord.igorbox.com) or [contact support](/docs/contact).
:::

### What is mesh networking?

Mesh networking is a way to cover a large area with WiFi by using multiple routers that communicate with each other to create a seamless network. This is great for large installations where you need to cover a large area with WiFi. The routers communicate with each other to create a seamless network that allows devices to be part of the same network/vlan across the entire covered area.

## WiFi Setup

The IgorBox devices running solely on the 2.4GHz band. This is because the 2.4GHz band has better range and penetration than the 5GHz band. We don't need the higher transfer rates of 5GHz because we are not streaming video or large files. We are just sending small packets of data for telemetry and device programming.

When setting up your WiFi network, we recommend creating a separate SSID for the IgorBox devices of using a seperate router and network address space all together. This will help to keep the network traffic separate from other devices on the network and will help to prevent congestion on the network as well keep your show running smoothly and secure.

:::warning
We **Highly Recommend** using a dedicated network for your IgorBox system! Any other devices on the network will have access to the IgorBox devices and could potentially trigger compositions and control devices if they have access to the local network that your IgoBoxes are connected to.
:::

### Security Considerations

The IgorBox system is designed to be secure and reliable. However, it is important to consider the security of your network and the devices connected to it. The local administration interfaces of the IgorBox devices are exposed on the local network and should be protected from unauthorized access. It is possible for an attacker to trigger compositions and control devices if they have access to the local network that your IgoBoxes are connected to.

We also recommend hiding the SSID of the network and using a strong password. This will help to prevent unauthorized access to your network and the devices connected to it.

:::important
If you have any questions or concerns, feel free to reach out to us on Discord at [discord.igorbox.com](https://discord.igorbox.com) or [contact support](/docs/contact). We are here to help!
:::
