---
title: "Building a JFK TSA Wait-Time Dashboard from a GraphQL Request"
date: "2026-08-09"
excerpt: "Facing a tight flight from JFK, I found a GraphQL request for TSA wait data and used OpenCode to turn it into a focused airport status dashboard."
lede: "A tight connection turned an inconvenient airport lookup into a small, just-in-time software project."
eyebrow: "GraphQL / airport data"
readTime: "4 minute read"
tags:
  - "GraphQL"
  - "OpenCode"
  - "rapid prototyping"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2042634152454037504/vid/avc1/1280x720/k0ow-ncu5V5cP0Iq.mp4?tag=14"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2042634152454037504/img/BVOfNdSDT3ip-nkI.jpg"
    alt: "Screen recording of a simple dashboard displaying TSA wait information for JFK Airport"
    caption: "The short demo of the JFK TSA status page built for one immediate travel question."
sourcePosts:
  - id: "2042634219458040049"
    url: "https://x.com/ryanvogel/status/2042634219458040049"
    published: "April 10, 2026"
    text: "sitting here at omacon listening to @iamdothash and wanted a better way to check if TSA lines at JFK were bad since I have a tight flight\n\ni scraped the graphql request and had @opencode with https://t.co/NXmYKdxb7q build a simple clean status for TSA\n\nhttps://t.co/VUPOi92pXg https://t.co/UC1yCWA0fl"
    likes: 50
    bookmarks: 8
    impressions: 5048
---

I was sitting at OMACON listening to Hash when a practical concern started competing for my attention: I had a tight flight through JFK and wanted a better way to see whether the TSA lines were bad.

The information existed, but the lookup experience was not answering my question as directly as I wanted. So I found the underlying GraphQL request and used OpenCode, along with the UI guidance from `ui.sh`, to build a simple status page around it.

## Start with the decision, not the data

This was not an attempt to build a general airport platform. I had one immediate decision: how worried should I be about security at JFK?

That narrow scope shaped the output. Instead of reproducing the page where I found the information, I made a compact dashboard that elevated the status I cared about. It was designed to make one airport check faster to read.

Small tools are often best when they preserve that specificity. It is easy to discover a data source and immediately imagine accounts, notifications, historical charts, predictions, and support for every airport. None of that was necessary to answer the original question. A page could be useful before it became a product.

The moment also made this a good task for an agent. I could identify the need, locate the request that supplied the data, and describe the interface I wanted. OpenCode could help turn those ingredients into a working page while I remained focused on the outcome.

## The GraphQL request was the seam

Finding the GraphQL request changed the task from “extract meaning from a travel page” into “present a specific response more clearly.” I inspected the request and reused its response. I only tested it for this airport check; I did not test its long-term reliability, caching behavior, or update frequency.

That was acceptable for a quick personal experiment, but not enough for a service I could promise would stay online. A request visible in the browser does not come with a durable contract. If I wanted to operate the dashboard long term, I would need to verify that dependency instead of treating temporary access as an API guarantee.

I kept the result narrow: the request supplied the data and the agent helped produce a simple status view. It was not a new data source, an official TSA service, or a production-grade airport system. It was a personal tool built around the information available at that moment.

I was comfortable using that setup as a snapshot for myself. I would not build travel decisions for other people on top of it without learning who operates the request and what stability it offers. A clean UI can make information easier to understand, but it cannot make an unofficial dependency stable.

## Just-in-time software can stay small

The part I like most about this experiment is not GraphQL by itself. It is the speed with which a specific annoyance became software tailored to the moment.

Before coding agents, I could have built the same category of page, but the setup cost might have made it easier to tolerate the original lookup. With an agent available, the threshold changed. A tool did not need a business model or a long roadmap to justify existing. It only needed to improve the decision in front of me.

That does not remove engineering judgment. I still had to know what I wanted, find the relevant request, and decide what the screen should emphasize. The agent helped compress implementation, while the usefulness came from keeping the question precise.

This is the scale of personal software I want more of: a page shaped around one real situation, small enough to build while the situation still matters. Not every web request should become a service. This one was worth turning into a focused interface even though its first audience was one traveler with a tight flight.
