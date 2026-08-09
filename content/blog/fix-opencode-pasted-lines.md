---
title: "Show Pasted Text Instead of ‘Pasted N Lines’ in OpenCode"
date: "2026-08-09"
excerpt: "OpenCode can display the text you pasted instead of a collapsed ‘Pasted N Lines’ block. Here are the command-palette and config options shown in my demo."
lede: "When I paste context into an agent, I often want to see the context—not a receipt for how many lines it contained."
eyebrow: "OpenCode / terminal UX"
readTime: "5 minute read"
tags:
  - "OpenCode"
  - "terminal UI"
  - "configuration"
  - "developer experience"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2053243116824465414/vid/avc1/1310x720/InQ7Dbxss3z-AujY.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2053243116824465414/img/sLVDj3A9AEyellvI.jpg"
    alt: "OpenCode changing from a collapsed pasted-lines summary to visible pasted text"
    caption: "The demo toggles paste summaries off and verifies that a long paste remains visible in the prompt."
sourcePosts:
  - id: "2053243486271320177"
    url: "https://x.com/ryanvogel/status/2053243486271320177"
    published: "May 9, 2026"
    text: "[ 🄿🄰🅂🅃🄴🄳 1️⃣ 🄻🄸🄽🄴🅂 ]\n\nhate getting the text block instead of the actual text you pasted in @opencode? \n\nhere's how to fix it: https://t.co/PFIFZ5i2SD"
    likes: 258
    bookmarks: 121
    impressions: 16207
---

OpenCode summarizes a multiline paste as a compact block such as `[Pasted ~1 lines]`. That keeps a large input from taking over the terminal, which is useful until the pasted text is exactly what I need to inspect. When I am shaping a prompt, checking a copied command, or making sure the final paragraph made it across, the summary hides the part I care about.

In the OpenCode version from my May 2026 demo, I can change that behavior from the command palette or make it my default in `opencode.json`.

## Turn off paste summaries from the command palette

Open the OpenCode command palette with `Ctrl+P`, then run:

```text
Disable paste summary
```

After the toggle, paste the text again. Instead of replacing it with a line-count block, OpenCode leaves the actual text visible in the prompt. The 52-second recording shows the change directly: first the collapsed paste summary, then a longer dictated paragraph displayed in the input area after the setting is disabled.

There is no default keybinding for this toggle in the version from the demo. The command palette is the shortest path when I want to change the behavior interactively, test it, or switch it for the current setup without editing a file.

The label is deliberately plain. If the current behavior is showing paste summaries, choose **Disable paste summary**. If a later version or an existing saved state presents the opposite action, follow the action shown by the palette rather than assuming the old label will always be present.

I use the visible-text mode most when I paste dictated paragraphs or detailed instructions. Those inputs are easy to get almost right. Keeping the full block in front of me lets me catch a missing ending, an accidental extra line, or a sentence that changed meaning before I hand it to the agent.

## Make visible pasted text the default

The demo also shows the corresponding `opencode.json` option:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "experimental": {
    "disable_paste_summary": true
  }
}
```

With `experimental.disable_paste_summary` set to `true`, the configuration expresses the same preference as a default: do not collapse pasted text into the summary block. This is the useful choice when I consistently want to see what I pasted instead of reaching for the command palette in each workflow.

The `experimental` namespace is an important part of the example. This was not presented as a permanent, version-independent configuration contract. The article records the setting demonstrated in May 2026. If the option is absent or rejected in a newer OpenCode build, the current configuration schema and command palette are the right places to check for its replacement.

## Verify the behavior with a real paste

I verify this setting with the exact input that made me want it. Copy several lines with obvious first and last sentences, paste them into OpenCode, and read the input before sending. If the full text is visible, paste summaries are disabled. If OpenCode shows only `[Pasted … lines]`, the summarizing behavior is still active.

I prefer that test to assuming a configuration edit loaded successfully. It checks the behavior at the point where it matters and makes a saved command-palette state visible. The TUI persists its command-palette toggle, so an earlier interactive choice can affect what I see later. Testing a multiline paste removes the ambiguity.

In the recording, the comparison stays deliberately simple: paste with summaries enabled, change the setting, then paste long text again. The visible difference is the test result. There is no separate status screen to interpret and no need to send the prompt just to confirm its presentation.

I do not always leave summaries disabled. Showing every pasted line makes the input easier to audit, but a very large paste also consumes more of the terminal. I disable summaries when visibility is more valuable than density, then use the same command-palette control to bring them back when the prompt becomes harder to navigate.

The fix is small because the problem is small. Press `Ctrl+P` and disable paste summaries for an interactive change, or set `experimental.disable_paste_summary` to `true` in `opencode.json` for the demonstrated default. Then paste several lines and confirm that the words—not just their count—remain in front of you.
