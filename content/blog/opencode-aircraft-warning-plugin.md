---
title: "Building an OpenCode Plugin With Aircraft-Style GPWS Audio"
date: "2026-08-09"
excerpt: "I used OpenCode plugin event hooks to build a GPWS-style audio layer that makes an agent’s activity audible while it works in the terminal nearby."
lede: "Once an agent can emit events while it works, its interface does not have to end at text on a screen."
eyebrow: "OpenCode / Event-driven plugins"
readTime: "4 minute read"
tags:
  - "OpenCode plugins"
  - "GPWS audio"
  - "coding agents"
  - "terminal interface"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2037680826436169728/vid/avc1/720x720/mRhT95oN-_xXY2nI.mp4?tag=14"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2037680826436169728/img/YQ_mziFydiTS8-bk.jpg"
    alt: "Terminal session where an OpenCode plugin plays aircraft-style warning audio"
    caption: "A custom OpenCode plugin communicating in GPWS style during an agent session."
sourcePosts:
  - id: "2037681158071496822"
    url: "https://x.com/ryanvogel/status/2037681158071496822"
    published: "March 28, 2026"
    text: "you can extend @opencode with custom plugins that hook into events while the agent is working\n\nso i wired mine up to communicate in GPWS style\n\n(watch to the end) https://t.co/VJ0VzNc3Q3"
    likes: 662
    bookmarks: 272
    impressions: 75005
---

I wired OpenCode to communicate in the style of an aircraft Ground Proximity Warning System. It is funny, but it also uses a genuinely useful extension point: custom plugins can hook into events while the agent is working.

In the 104-second run, the plugin sits inside a real agent session. The terminal remains the working surface, while audio gives the session another way to announce itself. I can look away and still have some awareness that the agent’s state has changed.

I like the GPWS version because it makes the extension point impossible to miss. Instead of a subtle chime, the agent sounds like a cockpit demanding attention.

GPWS is intentionally excessive. A normal notification can blend into the rest of the desktop; this gives the session a distinct identity. I wanted to hear the agent as an active presence rather than another process sitting silently behind a tab.

## The event hook is the interface

The plugin is possible because OpenCode exposes events during the agent’s work. A plugin can observe those events and respond outside the default terminal presentation.

In my version, the response is GPWS-style communication. I did not try to define a universal event list or publish a complete mapping from each event to each sound. I mapped the session into the cues that made sense for this particular cockpit-style experiment.

OpenCode does the work and emits events. The plugin decides how those events should be expressed. Audio is one option, and the same extension point leaves room for other ambient interfaces without changing the basic agent experience.

I was not creating a universal sound language for coding agents. I wanted a recognizable style that worked for the way I wanted my own session to feel.

## Why audio changes the terminal experience

A terminal is visually dense. When an agent is working, the session competes with every other window for attention. The obvious way to monitor it is to keep looking at the output.

Sound gives the session a second channel. It can communicate while the terminal is not the window in front. That does not mean every event deserves a noise. An audio interface becomes exhausting if it treats routine activity like an emergency. The useful design problem is selecting which agent events are meaningful enough to hear and choosing cues that remain understandable over time.

The aircraft style pushes that idea to a playful extreme. GPWS communication is designed to be noticeable. In the demo, that intensity is part of the joke and part of what makes the plugin memorable. It shows the range of the extension system better than a quiet, generic notification would.

There is a balance, though. A cue has to correspond to something the user can recognize. If the same sound appears for unrelated states, it stops carrying information. If too many sounds arrive close together, the interface turns into noise. I only ran this version through the session shown here; I did not tune it for every pattern of repetition, timing, or shared workspace.

## A plugin can change the character of the tool

This plugin does not add another command or another panel. It changes the personality of the working environment.

OpenCode still looks like OpenCode. The agent still works in the terminal. The plugin adds a layer that makes the session feel more physical and more present in the room. That is a small interface change with a large effect on how the tool is perceived.

The event hooks let the audio react while work is happening rather than waiting for a command to finish. My aircraft-warning version is deliberately theatrical, but it is grounded in that practical capability.

An OpenCode plugin can hook into events while the agent works, and those hooks can drive a GPWS-style audio interface. I chose the event mapping and audio behavior for my own terminal. That freedom is what made it possible to turn a coding session into something that sounds like a cockpit.
