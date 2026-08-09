---
title: "How I Turn Screen Recordings Into an Automatic Daily Work Journal"
date: "2026-08-09"
excerpt: "How I connect Coast screen recordings, OpenCode, and Hark to turn scattered work into a custom morning summary that I can revisit each morning."
lede: "My most useful work journal is assembled from what was actually on my screen, then delivered back to me the next morning."
eyebrow: "Personal automation / Work journal"
readTime: "4 minute read"
tags:
  - "screen recordings"
  - "OpenCode"
  - "Coast"
  - "Hark"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2082522071301578752/vid/avc1/1280x720/KS8BfqiGN4pQr7WT.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2082522071301578752/img/reOooqdNiZ5lImzi.jpg"
    alt: "Screen recording of a generated daily work summary site"
    caption: "The morning summary generated from my screen-recording history."
sourcePosts:
  - id: "2082522122119680290"
    url: "https://x.com/ryanvogel/status/2082522122119680290"
    published: "July 29, 2026"
    text: "i have found https://t.co/sxojyiTT36 incredibly helpful\n\ni made opencode to use the coast CLI to search my screen recordings to find what I worked on \n\nthen sends me a custom site every morning via hark where I can see my summary https://t.co/BcKzZDHvyl https://t.co/gLi3Gszk1S"
    likes: 122
    bookmarks: 105
    impressions: 24933
---

I have tried plenty of ways to remember what I worked on. The problem is rarely a lack of activity. It is that a day of work gets spread across terminals, browser tabs, messages, and half-finished ideas. By the next morning, the sequence is already blurry.

The workflow starts with Coast screen recordings. I have found Coast incredibly helpful because the recording becomes a history I can search instead of a memory I have to reconstruct. I connected OpenCode to the Coast CLI so it can search those recordings for what I worked on. It turns that material into a custom site, and Hark sends the site to me every morning.

The loop is simple: record, search, summarize, deliver.

## Search the day instead of reconstructing it

A screen recording captures the day at a different level from a task list. A task list contains what I intended to do. The recording contains what was actually on the screen while I was doing it.

For a daily journal, the difference is huge. Work does not always follow the plan that existed in the morning. A debugging session can consume an afternoon. A small experiment can turn into the most important result of the day. A conversation can change the direction of a build. If the journal depends on me remembering those changes at the end of the day, some of them will disappear.

Using the Coast CLI gives OpenCode a way to search the recorded history. I do not have to scrub manually through hours of footage just to find the relevant moments. I am still careful about the queries and selection rules. A useful journal has to distinguish meaningful progress from routine screen activity, and the quality of the morning page depends on that filtering.

## Make the summary something I will open

The output is not another notification containing a dense paragraph. It is a custom site where I can see the summary. That presentation changes the artifact from a transient message into something browsable.

A site gives the day structure without forcing every kind of work into the same line-item format. It can make separate pieces of work legible together and give me a place to return to later. I care more about preserving the shape of the day than forcing every morning’s page into one fixed template.

Hark handles the final delivery. Instead of expecting myself to remember to run the review, the finished page comes back to me in the morning. That handoff is a small part of the system, but it closes the loop. A journal that gets generated and then sits undiscovered in a folder has not solved the recall problem.

## The hard part is deciding what counts

Connecting the three products is the visible part of the experiment. The more interesting design question is what the summary should treat as work.

Time on screen is not the same as progress. Repetition can mean focused iteration or simply being stuck. A finished result may occupy only a few seconds of the recording even though it represents hours of investigation. Any version of this workflow has to make choices about relevance, duplication, and the amount of context worth keeping.

There is also a boundary between a useful private record and a page that is safe to share. Screen recordings can contain context that belongs in a personal journal but nowhere else. I do not treat every recorded moment as material for the page. The part I want to review is the selected summary, not the raw recording itself.

Every morning, I get a concrete artifact built from my actual screen activity: OpenCode searches Coast through its CLI, a custom site contains the summary, and Hark delivers it. Its usefulness still depends on the questions I ask and the judgment used to decide what deserves a place in the day’s story. That gives me something specific to revisit before the next day takes over.
