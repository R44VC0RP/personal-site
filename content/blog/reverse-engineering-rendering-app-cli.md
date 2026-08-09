---
title: "Turning an iPhone and Mac Rendering App Into a Portable CLI"
date: "2026-08-09"
excerpt: "I used Kimi K3 to study an installed device-rendering app and produce a portable CLI, then compared its render output and speed on my machine."
lede: "The most useful result was not another rendering interface; it was a command I could run anywhere."
eyebrow: "AI experiments / rendering"
readTime: "5 minute read"
tags:
  - "Kimi K3"
  - "CLI"
  - "device renders"
  - "AI coding"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2083935623526715392/vid/avc1/1280x720/SSMsfNgMpTbxmCz1.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2083935623526715392/img/fzgW04fh0DhJtZhW.jpg"
    alt: "A terminal generating device render files followed by iPhone and Mac render previews"
    caption: "The demo shows the CLI producing output files and opening several device-framed renders."
sourcePosts:
  - id: "2083935724760383849"
    url: "https://x.com/ryanvogel/status/2083935724760383849"
    published: "August 2, 2026"
    text: "kimi k3 is severely underrated\n\ni had it reverse engineer an app i had installed that would let me do iPhone and Mac renders \n\nit made a CLI that I can use on any machine to generate high quality renders (like 5x faster too) https://t.co/h6jaalBrvy"
    likes: 145
    bookmarks: 62
    impressions: 12489
---

I had a Mac application installed that could turn source material into polished iPhone and Mac device renders. The output was useful, but the shape of the tool was not how I wanted to work. I wanted rendering to be a command-line step: something repeatable that could live beside the rest of a project instead of requiring me to operate a separate app by hand.

I gave that problem to Kimi K3. My description was blunt—I had it reverse engineer the installed app—and the result was a CLI that I could use on other machines to generate device renders. In my test, the new path also felt roughly five times faster. The 34-second recording shows the terminal run, the output files, and several of the finished renders.

## From an installed app to a command

The demo starts in a terminal and ends with render files I can open and inspect. It shows multiple outputs being generated, files appearing in an output folder, and finished images framed as Apple devices. The examples include different iPhone and Mac presentations rather than a single hard-coded result.

One terminal run writes several files, then I move into Finder and open the results. That sequence is the appeal in miniature. I can stay with the command while it works, inspect the output directory when it finishes, and choose the render that fits the screen I am presenting.

That is the workflow change I cared about. A CLI makes the rendering action addressable from the same environment where I already build everything else. It can accept work, write output, and finish without asking me to keep another editing interface in the foreground. “Portable” is narrow here: I used the command on another machine. I did not test every operating system or hardware configuration.

The model's role was concrete. I did not ask Kimi K3 to brainstorm what a rendering tool might look like. I pointed it at an application I already had and used its analysis to get to an executable command-line result. I did not record the prompts, inspected files, or reconstruction process in enough detail to turn this into a step-by-step reverse-engineering tutorial.

## The output I got

The CLI produced files, and the video opens several device renders from that run. I care more about those files than a screenshot of a prompt. They are the part of the experiment I can actually use.

I described it as “like 5x faster” because that was my impression during the run. I did not make a timing table, define a fixed input set, repeat the test, or record the original application's time on the same machine. It was an observation from my setup, not a benchmark I expect everyone to reproduce.

I called the renders high quality because the visible outputs met the standard I wanted for this experiment. I did not run pixel-level comparisons, survey every device frame, or create a scoring method. The examples in the recording are the examples I tested, not a compatibility matrix.

## Why this experiment stuck with me

Kimi K3 felt underrated here because it moved from an existing, concrete reference to a tool with a different operating shape. The valuable change was not merely reproducing a screen. It was turning a capability I reached through an installed GUI into a command I could put closer to my normal development workflow.

A general-purpose rendering system would need exact timings for identical inputs, side-by-side output comparisons, a list of machines where the CLI ran, and a list of supported device styles. I have not done that work, so I use this as the tool I built for my workflow rather than presenting it as a universal renderer.

That is why Kimi K3 impressed me here. It analyzed an app I had installed, produced a CLI I could run across my machines, and generated the iPhone and Mac renders in the recording. I ended the experiment with a tool in my terminal, not just a recommendation about which model to try.
