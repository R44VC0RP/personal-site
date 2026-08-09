---
title: "How I Turned a Discord Voice Channel Into a 24/7 AI Radio Station"
date: "2026-08-09"
excerpt: "I connected an internal Discord voice channel to anomaly.fm, then added continuous YouTube and X streams with OpenCode acting as the hourly DJ."
lede: "A link from our internal Discord voice channel turned into a public station that never stops broadcasting."
eyebrow: "anomaly.fm / Discord radio"
readTime: "4 minute read"
tags:
  - "Discord radio"
  - "AI DJ"
  - "OpenCode"
  - "anomaly.fm"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2072749733357953024/vid/avc1/1280x720/cTKKumU2-ILvJk-Q.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2072749733357953024/img/xHgpCw_JG9GYxIQM.jpg"
    alt: "anomaly.fm radio station playing audio from a Discord voice channel"
    caption: "The first public anomaly.fm demo linked to our internal Discord voice channel."
  - type: "image"
    url: "https://pbs.twimg.com/media/HMQJXwQXAAA4ero.jpg"
    alt: "anomaly.fm running as a continuous public radio stream"
    caption: "The project expanded into continuous YouTube and X streams with an hourly OpenCode DJ."
sourcePosts:
  - id: "2072749986505179263"
    url: "https://x.com/ryanvogel/status/2072749986505179263"
    published: "July 2, 2026"
    text: "we made our own radio station\n\nhttps://t.co/yErRolb9Vx\n\nit's linked to our internal discord voice channel so you can tune in whenever\n\nthere will be lots of cool easter eggs as well https://t.co/057ZuvGC3y"
    likes: 228
    bookmarks: 101
    impressions: 34556
  - id: "2072792095677403539"
    url: "https://x.com/ryanvogel/status/2072792095677403539"
    published: "July 2, 2026"
    text: "this has become a whole project now\n\nwe now have a 24/7 youtube and X stream\n\nopencode comes on the air hourly and updates everyone on the time and DJs the music as well\n\nhttps://t.co/yErRolb9Vx - live 24/7 \n\nsoon we will support radio call ins https://t.co/xrOr1nfcIF https://t.co/fwMcBrTMgw"
    likes: 86
    bookmarks: 24
    impressions: 7948
---

The first version of anomaly.fm had a simple, strange premise: connect our internal Discord voice channel to a public radio station so anyone with the link could tune in whenever.

That was enough to make it feel alive. The station was not a static playlist presented as radio. It was connected to the place where we were already sharing audio internally. I also promised easter eggs, because a station should reward the people who leave it playing long enough to encounter something unexpected.

There is something fun about making a small internal room audible to anyone who happens to tune in. A Discord voice channel usually feels temporary: you are there or you miss it. Giving that room a persistent public station changes the experience without asking every listener to enter the Discord.

Later that same day, the experiment had already expanded. We had a 24/7 YouTube stream and a 24/7 X stream. OpenCode came on the air every hour, announced the time, and DJed the music. Radio call-ins were the next feature I wanted to support.

## Start with the room where the audio already lives

The defining connection is between the internal Discord voice channel and the public station. Discord is where the audio begins; anomaly.fm is where a listener can tune in.

People inside the Discord channel participate in the room. People outside can listen through the station. The public experience has the immediacy of a live voice channel without requiring every listener to join the internal Discord.

I have not written up the capture method, encoder settings, buffering behavior, or moderation controls. This is the version I put on air, not a reference architecture for every Discord radio station.

The practical flow is straightforward for the listener: audio in the internal channel becomes something they can tune into whenever they want.

## OpenCode gave the station a host

Once the station moved to continuous YouTube and X streams, it needed moments that made the broadcast feel intentional rather than unattended. OpenCode became part of the programming.

Every hour, OpenCode came on the air to update listeners on the time and DJ the music. That gives the coding agent an unusual role. It is not sitting beside the station as a chat interface; it is appearing inside the broadcast as an on-air presence.

I have not broken down how the hourly appearance is scheduled or how music is selected. What listeners hear is a recurring, recognizable interruption instead of an endless anonymous stream.

An hourly time announcement is deliberately old-fashioned. It gives a listener who arrives at any point a small piece of live context. Combined with the DJ role and easter eggs, it helps the station feel programmed even when nobody is speaking from the Discord channel.

The time check is tiny, but it gives the broadcast a rhythm. A listener does not need to know how long the stream has been running to recognize that something is happening now. OpenCode returning each hour also gives the station a voice that can become familiar over a long listening session.

## One station, several places to listen

The project quickly stopped being only a website fed by Discord. The follow-up added 24/7 streams on both YouTube and X while anomaly.fm remained the live destination.

Putting it on YouTube and X meant the same ongoing broadcast could be encountered in more than one place. The station was the program; each platform was another place to listen.

“Radio station” describes the continuous program, not one particular player. A listener can encounter the broadcast on a platform they already use. I did not benchmark latency across every destination or publish an uptime report. “Live 24/7” is the operating format I announced.

Call-ins were still future tense. I said support was coming soon; callers were not already joining the station. That feature would let listeners become participants instead of staying on the receiving side of the broadcast.

At this point, the internal Discord voice channel had become a public station, the broadcast had expanded to continuous YouTube and X streams, and OpenCode had taken an hourly on-air shift. Each addition made anomaly.fm feel more like a place listeners could drop into at any time and less like a one-off experiment.
