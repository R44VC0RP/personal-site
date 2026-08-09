---
title: "A macOS NDI Menu Bar Controller for My OBS Workflow"
date: "2026-08-09"
excerpt: "I built an Apple-silicon menu bar controller for NDI streams, then tested the workflow by recording 4K60 in OBS across a 10 Gb network at my desk."
lede: "I wanted changing an NDI monitor to feel like changing the volume, not like reconfiguring a broadcast rig."
eyebrow: "macOS / live video"
readTime: "5 minute read"
tags:
  - "macOS"
  - "NDI"
  - "OBS"
  - "Apple silicon"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2045554812654059520/vid/avc1/1280x720/P635anH9h-dE6AE3.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2045554812654059520/img/ermCTgmtprb8g1b4.jpg"
    alt: "Ryan demonstrating an NDI stream controller from the macOS menu bar"
    caption: "The Apple-silicon menu bar controller switching between available NDI monitor streams."
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2045600649837002752/vid/avc1/1280x720/UDxdFdPdlTQFTUdU.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2045600649837002752/img/sqxuL14_SQ9KQ-fC.jpg"
    alt: "A Mac desktop and OBS recording workflow using an NDI stream over a network"
    caption: "A separate recording test captured 4K60 in OBS while sending 1440p over the network."
sourcePosts:
  - id: "2045555908944523481"
    url: "https://x.com/ryanvogel/status/2045555908944523481"
    published: "April 18, 2026"
    text: "excuse how rough I look\n\nbut i made a simple topbar NDI stream controller for my OBS setup, and it's just too cool not to share\n\nyou can checkout the source below if you want to use it yourself (arm macos only) https://t.co/pt8h4s9WBa"
    likes: 155
    bookmarks: 68
    impressions: 18826
  - id: "2045601219146584505"
    url: "https://x.com/ryanvogel/status/2045601219146584505"
    published: "April 18, 2026"
    text: "so this was recorded on OBS at 4k, 60fps over my 10GB network, sent 1440p over network\n\nhttps://t.co/DF6kX3MCLJ https://t.co/SbXCZmAiN0 https://t.co/L96U8RGi4c"
    likes: 240
    bookmarks: 130
    impressions: 50238
---

The annoying part of a multi-machine video setup is rarely the big box in the middle. It is the tiny action that happens twenty times while everything is live: finding the right stream, bringing it onto the right display, and doing it without digging through windows. My OBS setup had reached that point. NDI gave me the streams I wanted, but selecting one still felt heavier than it should.

So I made **ndi-bar**, a small controller that lives in the macOS menu bar. The public version is intentionally narrow: it is for Apple-silicon Macs, it controls NDI monitor streams, and its source is available on [GitHub](https://github.com/R44VC0RP/ndi-bar). I was not trying to turn the menu bar into another production console. I wanted one recurring action to be close at hand.

## The menu bar is the interface

The first demo is the best description of the product. I open the menu-bar item and use its compact list to choose between monitor streams. The menu also exposes the basic application actions around that choice. There is no dashboard to keep open and no large control surface taking space away from OBS or whatever else I am watching.

That smallness matters. A controller like this earns its place by disappearing between uses. The menu bar is always available, so I can change a monitor without arranging another window or remembering where it ended up. The control sits at the same level as the other quick settings I reach for throughout the day.

The first post called it a “simple topbar NDI stream controller,” which is still the most accurate description. It does one job. The 172-second video shows the job in my actual desk setup instead of presenting a polished product reel. That roughness is useful because this was built for a workflow before it was shared as software.

## The network test put it in context

A controller is only interesting if the stream behind it holds up. Later that day I shared a second recording from the same setup. OBS recorded at 4K and 60 frames per second over my 10 Gb network while I sent 1440p across the network. The 82-second clip is not a universal performance benchmark, and I do not treat it as one. It records the exact conditions of one working run.

Those numbers are worth keeping separate. The OBS recording was 4K60. The stream sent over the network was 1440p. The network was 10 Gb. Collapsing that into “4K over NDI” would make the story sound cleaner while making it less accurate. The value of the example is that it keeps the capture result, network resolution, and network capacity explicit.

It also explains why I wanted the controller. This was not an abstract NDI experiment. I had a networked recording path running between real screens and applications, and I needed to move among the available monitor feeds quickly. The menu-bar utility is the small human interface on top of that larger setup.

## Where I stopped testing

On my Apple-silicon Mac, the menu-bar app controls the NDI monitor streams in my OBS workflow. I also recorded one 4K60 OBS session while sending 1440p over a 10 Gb network. Both demos are embedded here, and [ndi-bar is on GitHub](https://github.com/R44VC0RP/ndi-bar) for anyone who wants to inspect or try it.

I only tested the setup I had at my desk. I never tested an Intel Mac, a slower network, every kind of NDI source, or enough combinations to give anyone a minimum hardware recommendation. One clean recording tells me my setup worked; it cannot tell someone else exactly what bandwidth their setup will need.

That was the right size for this project. I fixed the step that kept slowing me down, opened the code for the machine I use, and wrote down the exact recording conditions that worked. ndi-bar is not an all-purpose broadcast package. It is the small macOS control that made my own OBS and NDI setup easier to operate.
