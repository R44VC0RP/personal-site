---
title: "Sift: A Swipe Interface for Cleaning Up Your X Following"
date: "2026-08-09"
excerpt: "I built Sift to turn an overloaded X following list into one decision at a time: swipe right to keep an account, or swipe left to unfollow it."
lede: "A feed-quality problem is much easier to face when the next decision fits on one card."
eyebrow: "Product experiment / X following"
readTime: "5 minute read"
tags:
  - "Sift"
  - "X following"
  - "interaction design"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2037162212809482240/vid/avc1/754x720/r3YSd4swhMqZuIAY.mp4?tag=14"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2037162212809482240/img/_sppkWQcNkrec3oN.jpg"
    alt: "Screen recording of Sift showing X account cards with red unfollow and green keep controls"
    caption: "The 21-second Sift demo moves through one followed account at a time."
sourcePosts:
  - id: "2037162264118362432"
    url: "https://x.com/ryanvogel/status/2037162264118362432"
    published: "March 26, 2026"
    text: "x's new features depend heavily on who you follow so i built tinder for who you follow\n\nswipe right to keep, swipe left to unfollow\n\nhttps://t.co/irzUylEkpO https://t.co/BojjEeKfOk"
    likes: 63
    bookmarks: 11
    impressions: 7622
---

## The feed problem starts with the follow list

Many experiences on X depend on who you follow. That makes the follow list more than a directory of accounts: it is one of the inputs shaping what the product has to work with.

Cleaning that list up is easy to postpone. A long account-management screen turns the task into an audit, and an audit feels like work. You have to scan names, remember why each person is there, open profiles for context, and keep track of the decision you were making. The total list is the problem, but no single decision is especially complicated.

That mismatch is what I wanted to compress with Sift. Instead of presenting the whole backlog, I turned cleanup into a sequence of individual choices.

## One account, two directions

The interaction is deliberately easy to explain: swipe right to keep an account and left to unfollow it. I described the first version as “Tinder for who you follow” because the comparison communicates the entire gesture model in a few words.

The demo shows a centered profile card with an account’s photo, name, handle, description, and visible account counts. Beneath it are two controls: a red dismissal action and a green keep action. Once a choice is made, the interface advances to another account. The recording cycles through several profiles without turning the experience into a dense settings table.

This layout changes the size of the question. It does not ask, “How should I reorganize everyone I follow?” It asks, “Do I still want this account in my feed?” The product remains focused on that one decision until it is resolved.

The card also carries enough visible context to make the choice recognizable. A name alone is often not enough; the bio and profile image can remind me why I followed someone. Sift keeps that context beside the action instead of making cleanup depend on bouncing between separate screens.

## Why the constraint is the product

Sift is a small experiment, and that is part of what makes it legible. There are only two outcomes in the interaction I demonstrated. One preserves the follow; the other removes it. The next card creates a natural rhythm without asking the user to design a taxonomy or maintain a separate system.

That does not make the underlying decision harmless. Unfollowing can be consequential. In the short demo I only walked through the card sequence; I did not cover confirmation, undo, rate-limit handling, ordering, or safeguards against accidental actions. I am not treating the clip as a specification for behavior I never demonstrated.

I built Sift because I believed the follow graph mattered to X’s newer experiences. I did not benchmark my feed before and after using it, so I cannot put numbers behind reduced noise, feed quality, or retention. The experiment was about making the cleanup interaction manageable.

## A useful shape for neglected maintenance

What I like about Sift is how it treats maintenance work. I avoid cleanup when an interface makes me confront the entire mess at once. Giving myself one meaningful decision and then immediately presenting the next one makes the same job feel finite.

For Sift, that unit is an account. The profile card supplies context, the two directions force a choice, and the sequence turns a sprawling list into a session that can stop after any card. I was not promising a perfect feed. I wanted a clearer way to decide who still belongs in mine.
