---
title: "Why TeslaNav Shut Down—and How I Brought It Back"
date: "2026-08-09"
excerpt: "TeslaNav lost its Waze API and faced a $1,500 monthly Mapbox bill. Four months later, I brought it back without external service dependencies."
lede: "TeslaNav went from a shutdown announcement to something I can host indefinitely, and the difference was dependency removal."
eyebrow: "TeslaNav / Shutdown postmortem"
readTime: "5 minute read"
tags:
  - "TeslaNav"
  - "dependency risk"
  - "Mapbox costs"
  - "Waze for Tesla"
media:
  - type: "image"
    url: "https://pbs.twimg.com/media/HD9xfgEagAAxy2o.jpg"
    alt: "TeslaNav shutdown announcement displayed on a dark screen"
    caption: "The March shutdown followed the loss of the Waze API and an unsustainable map bill."
  - type: "image"
    url: "https://pbs.twimg.com/media/HN3uO5tWgAEmUu8.jpg"
    alt: "Rewritten TeslaNav interface showing alerts on a map"
    caption: "The rewritten TeslaNav returned in July without external service dependencies."
sourcePosts:
  - id: "2035470345378119847"
    url: "https://x.com/ryanvogel/status/2035470345378119847"
    published: "March 21, 2026"
    text: "https://t.co/VG3x1uypIU is shutting down\n\nthe API it uses for Waze got shutdown, and without it I can't justify the $1500/mo Mapbox bill to keep it running\n\nthat said I did make it open-source 100%\n\nif you are interested in acquiring the domain dm or email me https://t.co/rwrFTlPLaM"
    likes: 82
    bookmarks: 20
    impressions: 35652
  - id: "2080080737223524705"
    url: "https://x.com/ryanvogel/status/2080080737223524705"
    published: "July 23, 2026"
    text: "proud to announce that https://t.co/VG3x1uxRTm is back!\n\nit has been rewritten to not depend on any external services or products\n\nthis means I will be able to host it on a server forever!\n\nyou can now get the full waze experience back in your tesla for 100% free https://t.co/EnLWJIS6kZ https://t.co/Q9xANU3TyS"
    likes: 66
    bookmarks: 23
    impressions: 16961
---

On March 21, I announced that TeslaNav was shutting down. The API it used for Waze had been shut down, and without that API I could not justify paying a $1,500-per-month Mapbox bill to keep the project running.

I open-sourced TeslaNav completely. At the time, I was also willing to talk to someone interested in acquiring the domain. It looked like the end of the hosted product.

This was a real shutdown, not a maintenance window with a relaunch date already waiting behind it.

Four months later, on July 23, I announced that TeslaNav was back. I had rewritten it so it no longer depended on external services or products. That changed the hosting equation enough for me to say I could keep it on a server forever and make the Waze-style experience available in a Tesla for free.

## The shutdown was two dependency failures at once

The immediate problem was the API TeslaNav used for Waze. Once that disappeared, an essential part of the existing product disappeared with it.

The second problem was economic. Keeping the remaining experience online meant carrying a Mapbox bill of $1,500 every month. Even if the application code still ran, that cost was not something I could justify without the API the product relied on.

Those pressures were connected. The API shutdown reduced the value of the product while the map cost remained. That is why I shut TeslaNav down in March instead of treating it like a routine maintenance problem.

The choice became fairly blunt: keep paying for a reduced version of the project, or stop the hosted service and preserve the work another way. I chose shutdown and open source rather than pretending the old operating model still made sense.

For TeslaNav, those third-party services were not replaceable implementation details. They shaped whether the hosted project could exist at all. One disappeared; the other made continued operation too expensive.

The shutdown decision came from the actual bill, not a hypothetical cost model: $1,500 per month. That was the level I could not justify for TeslaNav in that form.

## Open source kept the project available

When I shut down the hosted version, I made TeslaNav 100% open source.

Open source did not solve the external API problem by itself. It did mean the code did not have to disappear with my hosting decision. The project could remain inspectable and usable by people willing to work with it.

Open-sourcing also separated two decisions that often get treated as one: whether I should keep paying to operate a public instance, and whether the project itself should continue to exist. I could stop the first without erasing the second.

At that moment I did not promise a relaunch. I was shutting down the hosted version, making the code available, and being direct about the API loss and the bill.

## The rewrite changed the operating premise

The July version was a rewrite rather than a small patch to the old deployment. It did not depend on any external services or products.

In March, external dependencies determined both function and cost. By July, removing those dependencies made indefinite hosting feel possible. I could offer the full Waze-style experience in a Tesla for free again.

I have not included the replacement data, internal architecture, or ongoing server requirements here. The concrete change was that the rewritten version no longer depended on external services or products.

When I said I could “host it on a server forever,” I meant that as the new operating goal, not a promise that software never needs maintenance. The monthly viability is no longer tied to the same external API and product bill that forced the first version offline.

TeslaNav’s short shutdown made the risk concrete. A useful product can become impossible to operate even while its own code is intact. The July rewrite brought the map back by changing the condition that had made the March shutdown necessary.
