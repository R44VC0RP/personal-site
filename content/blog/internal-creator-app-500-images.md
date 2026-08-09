---
title: "Inside the Internal Creator App Behind 500+ Team Images"
date: "2026-08-09"
excerpt: "A look at the internal creator app I built, the prompt-and-reference workflow shown in its demo, and why focused team tools can earn real use."
lede: "The strongest signal for an internal tool is that people keep finding reasons to use it."
eyebrow: "Internal tools / image creation"
readTime: "5 minute read"
tags:
  - "internal tools"
  - "image generation"
  - "product engineering"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2064811688474374145/vid/avc1/1156x720/Q4_w5lDKmn9SiwP-.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2064811688474374145/img/9LrPomvZURpVuZ3I.jpg"
    alt: "Screen recording of Ryan demonstrating a dark internal image creator with a prompt composer and person references"
    caption: "A 49-second walkthrough of the internal image creator."
sourcePosts:
  - id: "2064811771181883665"
    url: "https://x.com/ryanvogel/status/2064811771181883665"
    published: "June 10, 2026"
    text: "i built our internal creator app and we have generated over 500+ images \n\nthis is how it works https://t.co/oIKZ2PJIUN https://t.co/Wuo17gdNMw"
    likes: 125
    bookmarks: 34
    impressions: 23147
---

## Five hundred is an output count, not a pitch

By the time I shared our internal creator app in June, the team had generated more than 500 images with it. That number tells me one specific thing: the app produced a substantial body of output. I did not break it down by active people, image reuse, cost, or approval rate, and I would not use it as a stand-in for any of those measurements.

Internal software rarely needs a grand launch story. It needs to remove enough friction that someone chooses it when there is a job to do. I built this application for our team, and the walkthrough follows the path from an idea to an image inside one focused interface.

## A 49-second tour

The 49-second recording opens on a dark workspace with a compact prompt composer. The interface includes a way to describe an image and visibly suggests adding a person with an `@` reference. The demonstration also moves through people and reference imagery, then shows prompts being entered and results appearing.

The prompt and its generated result stay inside that same dark workspace.

The interface stays focused: describe a result, ground the request with a person or image reference, and generate an output. I did not try to turn it into a general editing suite with every possible control on screen.

“Internal image generator” can mean almost anything. In this app, a teammate does not have to start from an empty collection of disconnected tools. The people, prompt, and output live in the same experience.

I did not record the model, storage path, review process, access rules, per-image cost, latency, or quality scores alongside this walkthrough. I am not going to reconstruct those details from memory. What worked at the interface level was keeping the people, reference material, prompt, and result close together so the team could stay inside one task.

## A narrow interface can be the advantage

The underlying capability did not have to be unique for this app to be worth building. I wanted to give the team a smaller surface shaped around one recurring action.

In this case, the visible interface centers the act of creating images around recognizable people and a direct prompt. That focus reduces the amount of product someone has to understand before getting to the task. It also gives the team one shared place to perform the workflow shown in the demo.

I did not measure why people returned, so I would not attribute the 500-plus figure to any particular feature. I only know that the narrow experience was used repeatedly enough to leave a meaningful trail of generated work. For an internal tool, that is more interesting than a long feature list.

## The number I care about next

The number I would want next is not 501. I want to know how often a generation becomes an image someone keeps, shares, or uses. I did not capture that breakdown for the first 500 images. I also did not track where people abandoned a prompt or immediately tried again, so the total cannot answer those questions.

I built a creator app for our team, and the team used it to generate more than 500 images. That real output history is the reason I wanted to share the app in the first place.
