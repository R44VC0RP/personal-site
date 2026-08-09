---
title: "Connecting to an iPhone Hotspot Device with IPv6 and mDNS"
date: "2026-08-09"
excerpt: "An iPhone reached a web server on its own hotspot-connected device through IPv6 and mDNS, creating a useful local networking primitive for hardware projects."
lede: "The phone providing the hotspot turned out to be able to reach the device connected to it."
eyebrow: "Networking / iPhone hotspot"
readTime: "5 minute read"
tags:
  - "iPhone hotspot"
  - "IPv6"
  - "mDNS"
media:
  - type: "image"
    url: "https://pbs.twimg.com/media/HJPrZmYasAAWGEm.jpg"
    alt: "Screenshot showing an iPhone accessing a web server hosted on a hotspot-connected device"
    caption: "The first successful connection from the hotspot iPhone to the attached device."
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2059285954586619905/vid/avc1/1280x720/pbSXbasFMjf4MvdJ.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2059285954586619905/img/r6f-v19mC6xuitqH.jpg"
    alt: "Screen recording demonstrating IPv6 and mDNS access from an iPhone to a hotspot-connected device"
    caption: "A 65-second demonstration of the IPv6 and mDNS connection."
sourcePosts:
  - id: "2059248283516805466"
    url: "https://x.com/ryanvogel/status/2059248283516805466"
    published: "May 26, 2026"
    text: "today i learned:\n\nif you connect a device with an ipv6 web server to an iPhone hotspot\n\nyou can actually hit that web server directly from the iPhone\n\nthis may not seem cool but if you have a tesla this will be very cool very soon https://t.co/UrKAo7vjoN"
    likes: 664
    bookmarks: 320
    impressions: 74951
  - id: "2059286342526267467"
    url: "https://x.com/ryanvogel/status/2059286342526267467"
    published: "May 26, 2026"
    text: "so apparently IPV6 and mDNS works when trying to connect to hotspot connected devices from the hotspot iphone\n\n this is so cool https://t.co/btkl09Mogy https://t.co/US4q2JNPGK"
    likes: 88
    bookmarks: 46
    impressions: 24914
---

I thought the iPhone hotspot was a one-way door. It was not: the iPhone could directly open a web server running on a device connected to that same hotspot.

I did not expect that route to be available. The iPhone was supplying the hotspot, so my assumption had been that the connected device would get internet access without becoming directly reachable from the phone. The test showed otherwise. I connected a device running an IPv6 web server, opened it from the iPhone, and got a response.

That small result changed the shape of the project I was considering. Instead of treating the hotspot as a one-way pipe to the internet, I could treat it as a local connection between the phone and another device.

## The first successful connection

My first test was narrow. A device joined the iPhone hotspot, the device exposed a web server over IPv6, and the iPhone reached that server directly. I captured the working page in a screenshot.

The phone occupied two roles at once. It provided the network while acting as the client trying to reach a service on that network. In this setup, those roles did not prevent a direct connection.

When I shared it, the result drew 320 bookmarks against 664 likes. It is the kind of platform behavior that is easy to overlook until a project specifically needs it. Once the route exists, a device attached to the hotspot can expose a local web interface that the phone can open.

I only documented the working connection. I did not include the hardware details, software versions, address output, or server configuration, so I cannot treat one successful setup as a universal recipe.

The surprise came from where I had assumed the network boundary lived. I was used to thinking of the phone as the thing supplying connectivity and the attached device as the thing consuming it. Opening the device's page from the phone reversed that relationship. The hotspot was also a small local network, and the phone could participate in it as a client.

## IPv6 made the route possible; mDNS made it approachable

Later that day I posted a 65-second demo and called out both IPv6 and mDNS. They solve different parts of the experience.

IPv6 gave the server and phone a way to address each other on the hotspot network. mDNS handled local discovery, which meant the connection did not have to be framed around a manually copied numeric address. Together they turned a surprising network path into something that could plausibly support a usable device experience.

That distinction changed the interaction I could imagine. A numeric address is enough to test whether two devices can talk. Local discovery is what starts to make the service feel like something the phone can find again. I did not measure discovery time or reconnect behavior; I was excited that both pieces worked together at all.

In the recording, I interacted with the connection instead of showing only the final loaded page. I still only tested that one combination, so I would not assume identical behavior across every iPhone and attached device.

I only tested the combination shown here. I do not know from this run how consistently the behavior survives reconnects, whether every hotspot-connected device behaves the same way, or what changes across operating-system versions. Direct access worked in my setup, and IPv6 plus mDNS were the mechanisms I identified.

## Why I mentioned Tesla

When I shared the first result, I ended with a deliberate hint: this would be useful if you have a Tesla. That was the direction I wanted to test next, but the networking result was already useful on its own.

What the network test supplied was a prerequisite. If a separate device joins an iPhone hotspot and the phone can reach a service on that device, the two can exchange a local web experience without pretending the attached hardware is a conventional public server. That is the useful primitive I had been looking for.

I mentioned Tesla because that was where I intended to apply the connection. The networking behavior was not unique to a Tesla, and I was not presenting a completed Tesla product. I had found a path that was useful enough to guide the next experiment.

I did not need every product decision before moving on. The result was simple and observable: the hotspot iPhone could talk back to the device it had connected.
