---
title: "Why AI Agent Memory Needs a Repo-Local Stack Overflow"
date: "2026-08-09"
excerpt: "After an AI coding agent repeated the same Expo mistake, I realized agent memory needs searchable, repo-local answers instead of a growing scrapbook."
lede: "A fresh coding-agent session repeated a bug I had already spent 1.3 million tokens fixing."
eyebrow: "AI agents / developer tools"
readTime: "4 minute read"
tags:
  - "AI agent memory"
  - "coding agents"
  - "developer tools"
media: []
sourcePosts:
  - id: "2065093490795557293"
    url: "https://x.com/ryanvogel/status/2065093490795557293"
    published: "June 11, 2026"
    text: "I still think we need some /learn command\n\nI just burned 1.3M fable tokens on some weird expo bug, then fixed it, but then spawned a new session and fable made the same mistake AGAIN. \n\nThere needs to be like some internal repo stackoverflow reference guide"
    likes: 231
    bookmarks: 40
    impressions: 76392
  - id: "2065104487404999117"
    url: "https://x.com/ryanvogel/status/2065104487404999117"
    published: "June 11, 2026"
    text: "you guys aren't understanding this\n\nthis isn't memory\n\nthis should be a internal stackoverflow, where once an agent figures out a bug it posts a little \"question/answer\" into the folder\n\nthat way future agents can refer to that if they run into the same issue https://t.co/l0VpATacmy"
    likes: 368
    bookmarks: 162
    impressions: 104001
---

I burned 1.3 million Fable tokens on a weird Expo bug. The agent eventually fixed it, so I started a new session and kept working. Then the new session made the same mistake again.

That was the moment the usual idea of “agent memory” stopped making sense to me. The useful thing was not a summary of the conversation or another fact about my preferences. I needed the next agent to find one narrow piece of hard-won knowledge when it encountered the same problem.

My shorthand for that is an internal, repo-local Stack Overflow.

## The lesson disappeared with the session

The frustrating part was not that solving the Expo issue took a lot of tokens. Some bugs are difficult, and an agent may need room to investigate them. The waste came afterward: the correct answer existed, but a fresh session had no practical way to benefit from it.

The first session had already traveled through the bad path. It had seen the failure, tried to understand it, and reached a fix. None of that helped when the next session ran into the same situation. From my perspective, I had paid the cost of learning once and then immediately paid part of it again.

This is especially painful in a codebase because the same strange failures tend to return. A framework-specific edge case can disappear for weeks and show up again when a nearby feature changes. By then, I may remember that we solved something similar without remembering the exact detail that mattered. A coding agent has the same retrieval problem, except its boundary can be the end of a session.

That is why I suggested a `/learn` command. I want a deliberate way to mark a solved problem as something future sessions should be able to find.

## This is different from general agent memory

When I described the idea, people kept interpreting it as another memory system. That is not what I meant.

General memory tends to collect background: how I like to work, which tools I use, decisions made in earlier conversations, or summaries of what happened. Some of that can be useful, but dropping every niche bug into the agent’s everyday context would create its own problem. Most conversations will never need the detail behind one specific Expo failure.

The knowledge has value only when the matching question appears. Until then, it should stay out of the way.

Stack Overflow is the closer metaphor because it separates the problem from the answer. Someone encounters a specific failure, searches for it, and finds a focused explanation written by someone who already went through the investigation. I want that same relationship inside a repository. Once an agent figures out a bug, it should be possible to leave a small question-and-answer entry for a future agent facing the same issue.

I have not built this system yet. Right now, `/learn` is the name I use for the behavior I want: a solved problem becomes a focused reference instead of disappearing when the session closes. I have not settled the storage format or retrieval mechanics.

## The repository is the useful boundary

The phrase “repo-local” matters. The Expo lesson came from work in a particular codebase, and its usefulness depends on that context. Treating it as universal knowledge would be misleading. Keeping the answer with the repository gives it an obvious scope: this is something learned while working here, for problems that happen here.

It also makes the knowledge part of the project rather than part of one temporary conversation. A new session may start with no memory of the old one, but it still starts in the same repository. That shared location is the continuity I care about.

The name “internal Stack Overflow” also sets a better standard than “save everything.” A useful answer has a question it responds to. It should help with a recognizable problem. If a future agent cannot tell when the entry applies, then preserving it has not solved much.

## I want durable answers, not infinite context

The answer to repeated agent mistakes is often framed as a bigger context window. I do not want every obscure lesson loaded into every future conversation. The Expo issue is exactly the sort of knowledge I might need next month and almost never need elsewhere.

What I want is simpler to describe: after an agent solves a difficult, repeatable problem, I should be able to preserve that result in the repository as a focused question and answer. When another agent encounters the same issue, it should be able to refer to what the earlier session learned.

I am still at the proposal stage. I know the failure I do not want to repeat: an expensive lesson was learned, the session ended, and the next session made the same mistake. A repo-local Stack Overflow is the direction I want to explore because it could preserve the answer without pretending every answer belongs in memory.
