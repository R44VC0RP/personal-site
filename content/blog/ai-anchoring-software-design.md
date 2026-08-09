---
title: "AI Anchoring in Software Design: Why I Sketch the Solution First"
date: "2026-08-09"
excerpt: "AI can accelerate implementation while quietly anchoring software design. Here is why I protect the blank page before asking a model for solutions."
lede: "A plausible AI answer can narrow the solution space before I have decided what the problem deserves."
eyebrow: "Software design / AI anchoring"
readTime: "4 minute read"
tags:
  - "software design"
  - "AI coding"
  - "cognitive bias"
media: []
sourcePosts:
  - id: "2033197602380865545"
    url: "https://x.com/ryanvogel/status/2033197602380865545"
    published: "March 15, 2026"
    text: "I think the opposite is true, when the AI proposes a solution it pollutes your creative ability.\n\nIt’s much harder to come up with a solution when you have another partial solution presented, rather than starting from scratch. https://t.co/wp50cvvHk4"
    likes: 243
    bookmarks: 32
    impressions: 23072
  - id: "2033198257602547914"
    url: "https://x.com/ryanvogel/status/2033198257602547914"
    published: "March 15, 2026"
    text: "The current project I am working on internally is very niche, it hasn’t been done a lot and the AI has very bad takes on how it should be done.\n\nI have already had to do multiple iterative loops to undo work by the AI to implement the plan that I think is best.\n\nI honestly think https://t.co/QQoTJA8Ckl"
    likes: 67
    bookmarks: 11
    impressions: 6920
---

One of the most valuable parts of software design is the moment before a solution exists. The problem is still open. I can move pieces around, question the premise, and consider structures that would look unreasonable next to a polished proposal.

An AI model can collapse that moment almost instantly. Ask it what to build and it will produce something plausible, organized, and ready to react to. That feels like progress. It can also become an anchor.

## The first proposal changes the problem

When a model presents a partial solution, I stop looking at an empty space. I am now evaluating its choices. Even if I dislike the answer, its vocabulary and structure are present in my head. My attention moves toward repairing what exists instead of inventing independently.

That is what I meant when I wrote that an AI proposal can “pollute” creative ability. I was responding to the idea that AI makes it easier to explore more possibilities. Sometimes it does. But a fast answer is not neutral. It gives the rest of the exploration a starting point, and that starting point can be hard to escape.

The effect hit hardest on a niche internal project. The model kept steering toward approaches I thought were wrong, and I went through multiple iterative loops undoing its work so I could return to the plan I believed was right. I did not benchmark the time lost, and one internal project is not a universal test. It was enough to make me change when I invite a model into the design process.

The model did not merely fail to save time. Its initial direction created work that had to be unwound.

## Design first, ask later

My response is not to exclude AI from software work. It is to protect the part of the process where I decide what I think.

Before asking for a solution, I want to write down the problem in my own language. What must remain true? Which tradeoffs matter? What would make an implementation unacceptable? If I already have an architectural instinct, I want to make it explicit before a model supplies a competing frame.

That does not require a perfect specification. The point is to preserve an independent reference. Once the model responds, I can compare its proposal with an idea that existed before the answer. Without that reference, it is easy to mistake “different from the model” for “original.”

After the design has a spine, AI becomes much more useful to me. I can ask it to challenge a named assumption, enumerate failure cases, or implement a bounded piece. Those prompts still invite alternatives, but the model is entering a process with declared constraints rather than defining the whole solution space by being first.

## Where AI exploration still helps

Anchoring is not an argument against asking a model for options. There are plenty of situations where an immediate conventional answer is exactly what I need. Familiar integration work, API usage, repetitive implementation, and broad option discovery can benefit from a quick first pass.

The distinction is whether the core design judgment is the valuable part of the work. If the problem is common and the acceptable shape is known, speed matters. If the problem is niche and the architecture itself is the invention, I want to be careful about outsourcing the first move.

I also do not assume my independent plan is automatically better. Writing it first only makes the comparison possible. The model may expose a constraint I missed or offer a cleaner approach. I can change my mind without surrendering the blank page.

My rule is simple: I want to have a position before I ask the model for one. Then I can use it as a critic, explorer, and implementer without letting its most convenient answer silently decide where the design conversation begins.
