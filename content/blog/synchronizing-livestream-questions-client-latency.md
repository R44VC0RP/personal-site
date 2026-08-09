---
title: "Synchronizing Livestream Questions Across Clients with Different Latency"
date: "2026-08-09"
excerpt: "How Rebase ties live trivia questions to stream position so viewers with different playback latency encounter each question at the intended moment."
lede: "A live trivia question is only fair if every viewer reaches it at the same point in the show."
eyebrow: "Rebase / Stream synchronization"
readTime: "4 minute read"
tags:
  - "Livestream synchronization"
  - "Rebase TV"
  - "Distributed systems"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2078267367071903745/vid/avc1/1200x720/9coSfO_6wjmHIF74.mp4?tag=14"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2078267367071903745/img/JXIcEx41QhEa8nbP.jpg"
    alt: "Screen recording of a Rebase trivia question attached to a livestream timestamp"
    caption: "A Rebase question event is tied to stream position rather than a single wall-clock instant."
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2086106499172999169/vid/avc1/1280x720/g8v-y4VWHMY7dl41.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2086106499172999169/img/0wiYEo-anDke76GX.jpg"
    alt: "Rebase livestream latency test showing the broadcaster and a client display"
    caption: "A later Rebase test measured about 500 milliseconds between broadcaster and clients."
sourcePosts:
  - id: "2078267380279779685"
    url: "https://x.com/ryanvogel/status/2078267380279779685"
    published: "July 17, 2026"
    text: "rebase has a unique problem\n\ni (as the host) need to open a question for everyone at the same time\n\nbut some clients can be at different points in the livestream, so the question events need to attach to the timestamp so everyone gets it at the same time\n\nguess how i built this? https://t.co/LvwvskHRWW"
    likes: 53
    bookmarks: 18
    impressions: 10829
  - id: "2086106692039725151"
    url: "https://x.com/ryanvogel/status/2086106692039725151"
    published: "August 8, 2026"
    text: "apple hates rebase, so we have to innovate\n\nnow the next rebase game will have around 500ms of latency between broadcaster and clients\n\nhelp me test it: https://t.co/fu5RPubD8h https://t.co/uvvaCBXCH9"
    likes: 83
    bookmarks: 13
    impressions: 40563
---

Rebase is live trivia. I host the show, open a question, and viewers answer for real money. That sounds like a normal real-time event until the livestream becomes the clock.

Two viewers can be watching the same broadcast while sitting at different positions in the stream. If the server tells every phone to open a question at one wall-clock instant, those viewers may see the prompt against different moments in the show. A person who is further behind is not receiving the same experience; they are receiving the same message too early in their playback.

The question therefore has to belong to a timestamp in the program, not only to the instant when I pressed a button.

## “Now” is different for every client

In a room, the host can ask a question and everyone hears it together. In a livestream, the word “together” needs a definition. The broadcaster has a position. Every viewer has a position. Transport, buffering, playback, and the viewer's own device can put distance between them.

That means there are two clocks to think about. Wall time tells us when an event was created. Stream time tells us where the viewer is in the program. For the Rebase interaction, stream time is the useful one.

Attaching the question event to a timestamp lets each client encounter it when playback reaches the intended point. The event can be distributed earlier or later in absolute time without changing where it belongs in the show. The viewer who is behind does not need to pretend to be caught up; their question waits for the matching position.

I start with one rule: question timing follows playback timing. The transport and message format can change, but the relationship between the prompt and the program timestamp is the behavior viewers depend on.

## Synchronization and low latency are separate jobs

A timestamp-bound event does not eliminate latency. It gives latency a consistent meaning.

Reducing the distance between broadcaster and client still improves the show. A later Rebase test measured around 500 milliseconds between broadcaster and clients. That is a concrete update to the live path, and it makes the interaction feel much closer to the host's moment.

But a low average does not make every client identical. Even at roughly 500 milliseconds, viewers can have different playback positions. The synchronization rule remains necessary because low latency answers “how far behind?” while timestamp binding answers “when should this question appear in this viewer's stream?”

Keeping those concerns separate makes the system easier to reason about. One effort can reduce end-to-end delay. Another can preserve the relationship between content and interaction when delay varies.

## The edge cases live on the timeline

Once stream position becomes the trigger, the interesting failures move with it. A client can pause, buffer, reconnect, or jump. The app has to decide what a question means after its intended point has passed and how much state a returning viewer should recover.

I still have to make an explicit decision for each of those cases. The timestamp is the durable piece of information. A wall-clock broadcast says only that something happened. A program timestamp says where it belonged, which gives a client enough context to make a deliberate choice after disruption.

Fairness also depends on the answering window. The prompt, the content cue, and the available response time need to stay related from the viewer's perspective. Synchronizing the opening moment is the foundation for that experience; it does not automatically settle every policy around late or interrupted clients.

## Building around the show

The technical solution serves a very physical product moment: I ask a question, and every viewer should feel that the show asked them at the right time. The system should disappear behind that timing.

The first Rebase test puts the timestamp-bound question model on screen. The second records an approximately 500-millisecond broadcaster-to-client path for the next game. Interactive video has to keep the livestream and its questions on the same timeline.

Rebase is testing this in public through [Rebase Research](https://research.rebase.tv/). Viewers need to share the same moment in the program even when the network gives every device a slightly different “now.”
