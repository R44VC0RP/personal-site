---
title: "How I Paste Clipboard Images into OpenCode over SSH and tmux"
date: "2026-08-09"
excerpt: "A practical workaround for moving a Mac clipboard image into OpenCode running inside a remote SSH and tmux session, using a shared file path."
lede: "My remote development setup was missing one tiny interaction that made the whole thing feel broken: pasting a screenshot into OpenCode."
eyebrow: "Remote development / Clipboard images"
readTime: "4 minute read"
tags:
  - "OpenCode"
  - "SSH"
  - "tmux"
  - "macOS clipboard"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2053096910635061248/vid/avc1/1280x720/1Kuw61VltoIhVEgd.mp4?tag=14"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2053096910635061248/img/f-esg4ATyvTH3-9D.jpg"
    alt: "A Mac screen recording demonstrating a clipboard image being passed through SSH and tmux into OpenCode"
    caption: "The original demo of the clipboard image, SSH, tmux, and OpenCode workflow."
sourcePosts:
  - id: "2053097008613986325"
    url: "https://x.com/ryanvogel/status/2053097008613986325"
    published: "May 9, 2026"
    text: "clipboard image → ssh → tmux → opencode\n\nthis wasn't possible before since you can't \"paste\" anything into a tmuxed ssh session\n\nso i built a friendly, and intuitive workaround\n\ni probably won't open source this, since it's pretty niche but let me know what you think https://t.co/bDIG28fUyz"
    likes: 249
    bookmarks: 92
    impressions: 25800
  - id: "2053174318369013762"
    url: "https://x.com/ryanvogel/status/2053174318369013762"
    published: "May 9, 2026"
    text: "so made my implementation of this open source since people seemed to like it\n\nunder the hood it: \n\n1. grabs the image from your clipboard\n2. uploads that to a shared ~/.opencode-uploads/*.png file\n3. takes the full path and loads that into local mac clipboard\n\nlink below https://t.co/qpzTnxdhTH"
    likes: 71
    bookmarks: 25
    impressions: 8421
---

My remote development setup was missing one tiny interaction that made the whole thing feel broken: pasting a screenshot into OpenCode.

I was running OpenCode on a remote machine through SSH, inside tmux. That setup is useful because the work can stay in a persistent terminal session, but it creates an awkward boundary. The image is sitting on my Mac clipboard while OpenCode is running somewhere else. Pasting text into the terminal does not make the clipboard image appear as a file on the remote machine.

I wanted the interaction to feel as direct as it does locally: copy an image, invoke the workaround, and give OpenCode something it can actually read.

## Why the clipboard stops at the terminal boundary

There are several layers in this setup: the Mac clipboard, the SSH connection, the tmux session, and OpenCode. A copied image begins on only one side of those layers.

That distinction matters because an image is not useful to the remote process until it has a location that the remote process can access. The terminal can carry keystrokes, including pasted text, but the image itself is still local. tmux keeps the terminal session alive; it does not make the Mac clipboard part of that session.

The missing piece was not a new image format or a special kind of terminal paste. It was a small handoff that turned the clipboard image into a remote file and then made the location of that file easy to paste.

## The three-step workaround

The workaround does exactly three things:

1. It grabs the image from the local clipboard.
2. It copies that image into a shared `~/.opencode-uploads/*.png` file.
3. It takes the full path to that file and loads the path into the local Mac clipboard.

After that sequence, my clipboard no longer holds the image data. It holds the full path that OpenCode can use from inside the remote session. I can paste that path into the prompt without trying to push an image through tmux as though it were ordinary terminal text.

That is the entire mechanism. The image becomes a file where OpenCode is running, while the clipboard becomes the bridge for the lightweight part of the exchange: the file path.

## Why the path handoff feels natural

The workaround matches the way I already work. Screenshots begin on the clipboard, and prompts end in the terminal. The helper changes what happens between those two moments without asking me to abandon either one.

Before the handoff, the copied image exists only on my Mac. After it runs, two useful things are true: the PNG exists under `~/.opencode-uploads`, and my Mac clipboard contains its full path. The next paste is therefore meaningful to the remote OpenCode process.

This also keeps the role of each tool clear. SSH still connects me to the remote machine. tmux still holds the persistent terminal session. OpenCode still receives a prompt that points to an image. The workaround only carries the image across the gap and returns a reference I can paste.

I originally thought this was too niche to open source. Enough people wanted it that I changed my mind and opened up the implementation. The interest made sense in hindsight: remote development is comfortable right up until a basic local interaction, like attaching a screenshot, hits the machine boundary.

## What this changes in my setup

Now the workflow crosses the exact stack I use every day: clipboard image, SSH, tmux, and OpenCode. I start with the screenshot on my Mac, move it into the shared upload directory, and finish with its full remote path ready to paste.

tmux still cannot natively paste the image, and the SSH terminal still does not understand my Mac clipboard. I still need the PNG to exist on the remote machine before OpenCode can use it. The workaround simply makes that transfer and gives me a convenient path to reference.

It is a small fix, but it removes a surprisingly sharp edge. I can keep the durable remote session I want and still bring a visual reference into OpenCode without breaking the flow of the terminal.
