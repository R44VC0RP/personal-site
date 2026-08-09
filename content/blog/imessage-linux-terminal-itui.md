---
title: "itui: Bringing an iMessage Experience to the Linux Terminal"
date: "2026-08-09"
excerpt: "I wanted iMessage while working on Linux, so I built itui and recorded a full two-minute demonstration of the cross-platform messaging experience."
lede: "I kept leaving Linux to answer iMessages, so I built the missing surface I wanted to use."
eyebrow: "Linux / messaging"
readTime: "5 minute read"
tags:
  - "itui"
  - "iMessage"
  - "Linux"
  - "terminal UI"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2045157726267858944/vid/avc1/1280x720/FptgiGvONgpTHcx3.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2045157726267858944/img/I_B3_x0USJ3Sa2-R.jpg"
    alt: "Ryan demonstrating itui with an iMessage conversation while working from Linux"
    caption: "The original 118-second itui demonstration shows the messaging experience in use."
sourcePosts:
  - id: "2045158124206625127"
    url: "https://x.com/ryanvogel/status/2045158124206625127"
    published: "April 17, 2026"
    text: "i wished imessage existed on linux\n\nnow it does\n\nintroducing itui https://t.co/uwXUhkh1j4"
    likes: 254
    bookmarks: 93
    impressions: 22140
---

The entire reason for itui fits in one sentence: I wished iMessage existed on Linux. That was not a theoretical platform argument. It was a gap in the environment where I was already doing work. My conversations were in one place, my terminal was in another, and switching away every time I wanted to read or send a message was exactly the kind of repeated friction that eventually becomes a project.

So I built itui and introduced it with a 118-second recording. The name describes the product more clearly than a long launch paragraph could: it is an interface for using an iMessage experience from the Linux side of my setup. The demo, not a list of promised features, was the center of the release.

## The problem was continuity

Messaging is easy when the device and the work environment are already the same thing. It is much more noticeable when the conversation you need lives outside the machine in front of you. A Linux workflow can be comfortable right up until a normal personal communication task pulls you out of it.

I did not want to replace iMessage or make a grand statement about messaging protocols. I wanted access to my conversations while staying in the environment I had chosen. itui is the interface I built for that specific gap, not a new messaging network or identity system.

The video moves from the Linux-side context into active conversations. That loop is the product for me: find a conversation, read it, respond, and see the result. I recorded it in motion because a static screenshot would only show the shape of the interface.

itui uses the terminal space directly. The demonstration shows a conversation list on the left, the selected thread on the right, timestamps beside messages, and a compose field along the bottom. I can move through the list, read the existing thread, type a reply, and send without leaving the keyboard-driven layout.

I kept a normal browser open beside it during the recording. That side-by-side view explains the project better than an isolated glamour shot: itui lives next to the work already happening on the Linux desktop. The messaging window is available without taking over the machine or forcing the rest of the workflow away.

## What I tested

I tested the experience in my own setup and recorded it there. I have not documented how a Mac or Apple device participates, how messages synchronize, how attachments work, what authentication it uses, or where its trust boundaries sit. I also have not tested itui across Linux distributions.

Those are not minor implementation details for a messaging tool. They determine which devices must remain available and what “on Linux” means in practice. I would rather be explicit about what I have not documented than invent an architecture after the fact.

What I built is narrower and easier to describe. itui came from wanting iMessage while I worked on Linux, and the nearly two-minute recording shows it operating against real conversations. People understood the missing workflow immediately because they had felt the same context switch.

The interface also keeps the familiar parts of a conversation visible. Incoming and outgoing messages remain distinct, the thread stays readable while I compose, and a new reply appears in the same place I was already looking. I was not trying to redesign texting. I was trying to make the ordinary messaging loop comfortable inside a terminal-shaped workspace.

## Why I shared the result early

I waited until the first complete loop worked before sharing it. “I wish this existed” is easy to say. Recording the thing in use is the part that made itui feel real to me.

I introduced itui in three lines: the frustration, the result, and the name. The video carried the rest because the interaction was more interesting than a feature list.

itui is my working answer to a personal cross-platform problem. It is not yet a reproducible setup guide, and I would not ask someone else to run a messaging tool without the missing setup and security details. I wanted to keep communicating without leaving Linux, so I turned that irritation into an interface I could use end to end.
