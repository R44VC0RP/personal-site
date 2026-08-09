---
title: "Building Hark for Interactive iPhone Agent Workflows"
date: "2026-08-09"
excerpt: "How Hark grew from a webhook notification app into an open-source interface for agent replies, approvals, Live Activities, and remote workflows."
lede: "A notification stopped being enough the moment I wanted my phone to answer the agent back."
eyebrow: "Hark / Agent workflows"
readTime: "5 minute read"
tags:
  - "Hark"
  - "AI agents"
  - "iPhone automation"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2080955218033061888/vid/avc1/1280x720/1tR8kv7KJfnFbzt1.mp4?tag=14"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2080955218033061888/img/L9OFnwUqW52p7ca3.jpg"
    alt: "Screen recording of a custom Hark notification arriving on an iPhone"
    caption: "The first Hark demo showed images, links, a title, and a description sent through a webhook."
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2081355945255575552/vid/avc1/1280x720/l__P5vAkv0PpWdTc.mp4?tag=14"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2081355945255575552/img/lip-Vf80OgVcKqQ_.jpg"
    alt: "Screen recording demonstrating Hark notification replies and a Live Activity"
    caption: "Hark added text and option responses, webhook-controlled Live Activities, and a CLI."
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2081470615740198912/vid/avc1/1280x720/YGTcAXlKRJBWzmrQ.mp4?tag=14"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2081470615740198912/img/1dSsHK9dKYGLKAZV.jpg"
    alt: "Terminal agent sending a Hark notification and controlling an iPhone Live Activity"
    caption: "An agent uses Hark to send a notification and control a Live Activity."
sourcePosts:
  - id: "2080955231274463629"
    url: "https://x.com/ryanvogel/status/2080955231274463629"
    published: "July 25, 2026"
    text: "i made an app that lets you send custom notifications via a webhook\n\n☑︎ custom images\n☑︎ custom links (on click)\n☑︎ title and description\n\ntry it out now at https://t.co/fEacNfmw8g https://t.co/LFGyl8GNtv"
    likes: 1763
    bookmarks: 2268
    impressions: 611700
  - id: "2081355974020153442"
    url: "https://x.com/ryanvogel/status/2081355974020153442"
    published: "July 26, 2026"
    text: "notifications are so 2010, interactivity is the new trend\n\nhark now has support for 3 new things\n\n☑︎ custom live activities (controlled by webhooks)\n☑︎ notification responses (reply with text / options)\n☑︎ a fully featured 𝕙𝕒𝕣𝕜𝕔𝕥𝕝 CLI for agents and workflows https://t.co/NqNsJnMuhL https://t.co/5lEjQtCfGQ"
    likes: 258
    bookmarks: 206
    impressions: 93615
  - id: "2081124588558397951"
    url: "https://x.com/ryanvogel/status/2081124588558397951"
    published: "July 25, 2026"
    text: "i decided to also make hark open source\n\nso if you don't trust me and think i'm some evil dictator you can check + contribute your own features\n\nand it's all self sufficient so you can self-host as well if you want\n\nhttps://t.co/1wdqBCKxD6 https://t.co/QTpxGI6ZTD https://t.co/5lEjQtCfGQ"
    likes: 276
    bookmarks: 241
    impressions: 34072
  - id: "2081440434346504433"
    url: "https://x.com/ryanvogel/status/2081440434346504433"
    published: "July 26, 2026"
    text: "who am I to say what live activity layout you should use\n\nhttps://t.co/fEacNfmw8g natively ships with 5 different layouts with custom text/color/icons all controlled via webhooks &amp; CLI\n\ndon't see one you like? you can contribute your own\n\nhttps://t.co/1wdqBCKxD6 https://t.co/27HNtx2nTH https://t.co/ado4Zta6QI"
    likes: 111
    bookmarks: 73
    impressions: 12173
  - id: "2081470655313420799"
    url: "https://x.com/ryanvogel/status/2081470655313420799"
    published: "July 26, 2026"
    text: "software made for agents too complex and confusing\n\nthe hark cli is intuitive and the skill makes it complete\n\nthis is an agent sending a notification and controlling a live activity\n\nhttps://t.co/fEacNfmw8g (now with sign in with apple) https://t.co/d5xlZIKRrc https://t.co/ado4Zta6QI"
    likes: 98
    bookmarks: 72
    impressions: 12903
  - id: "2081368727442841816"
    url: "https://x.com/ryanvogel/status/2081368727442841816"
    published: "July 26, 2026"
    text: "I was away from my machine and needed to publish a new NPM version (which requires passkey)\n\nSo I had the agent run publish and send me the auth URL as a hark notification so I could approve on mobile https://t.co/Fzfjlnsroj https://t.co/69QvkBD16y"
    likes: 104
    bookmarks: 43
    impressions: 14780
---

Hark began with a tiny, obvious contract: send a webhook and get a useful notification on my iPhone. The first version supported a custom image, a link to open on tap, a title, and a description. That was enough to turn output from a script or service into something I would actually see away from my desk.

The demo traveled much further than I expected. The 2,268 bookmarks mattered more to me than the likes: people wanted a way to connect their own tools to the phone in their pocket.

## The webhook was the right starting point

A webhook keeps the sending side simple. The caller does not need to understand the notification app. It only needs somewhere to send a request and a small set of values describing what should appear.

That boundary made Hark useful to more than one category of software. A CI job can have an event worth seeing. A monitor can have a state worth surfacing. A coding agent can finish a task while I am away. The notification can carry enough context to tell those sources apart, and its link can take me back to the place where the next action belongs.

The first release only moved information in one direction. A system could get my attention, but I still needed to leave the notification and find another interface to do anything about it. That limitation became the next version of Hark.

## From alerts to interaction

I added three pieces together: notification responses, custom Live Activities, and a CLI for agents and workflows.

Responses let a notification ask for text or present options. Live Activities let a webhook control information that should remain visible and change over time. The CLI gave an agent a direct way to use both without forcing it through a complicated product-specific interface.

The layouts stayed deliberately flexible. Hark shipped with five Live Activity layouts, with custom text, colors, and icons controlled through webhooks and the CLI. I did not want my choice of layout to become everyone else's permanent limitation, so the open-source project can accept more.

That agent-facing layer matters because software built for agents can become strangely difficult. A capability may exist, yet still demand enough setup and translation that an agent cannot use it cleanly. The Hark CLI and skill make the available actions explicit: send the notification, collect a response, or control a Live Activity.

The demo of an agent sending a notification and updating a Live Activity is the compact version of that idea. Hark is still a phone interface, but the caller can be an automated workflow rather than a person clicking through a dashboard.

## The remote approval that made it real

The best test happened while I was away from my machine. I needed to publish a new NPM version, and that process required a passkey. I had the agent start the publish, then send its authentication URL to me as a Hark notification. I opened the URL on my phone and approved it there.

That workflow is small, but it draws a useful security boundary. The agent could perform the work it was equipped to perform. When the process reached an approval tied to me, it did not need my credential or a fake shortcut around the check. It handed the decision to my phone.

This is the shape I wanted: automation continues until it reaches a moment that genuinely needs a person, then that moment arrives with enough context to act. The notification is no longer the end of the workflow. It is the handoff between the agent and me.

## Open source and self-hostable

Notifications can contain sensitive information, and an approval channel deserves scrutiny. I made Hark open source so people can inspect the project, contribute features, and self-host it if that is the right trust model for their work.

Sign in with Apple was added as the product expanded, but the larger principle stayed the same: Hark should remain understandable at its boundaries. A source sends a webhook or uses the CLI. The phone presents information or collects an explicit response. The source continues with that response.

You can try Hark at [hark.ryan.ceo](https://hark.ryan.ceo/) or inspect the [open-source project](https://github.com/R44VC0RP/hark/). Hark gives scripts and agents a clear, interruptible path to a human when the work actually calls for one.
