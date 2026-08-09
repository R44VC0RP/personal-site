---
title: "Misleading X Link Previews: What I Captured and How to Stay Safer"
date: "2026-08-09"
excerpt: "An X card appeared to show a trusted Supabase link while a captured redirect pointed somewhere else. These are the warning signs I now check first."
lede: "A familiar logo and domain label can lower your guard before you ever inspect where a link goes."
eyebrow: "Security / link previews"
readTime: "5 minute read"
tags:
  - "phishing awareness"
  - "X link previews"
  - "web security"
media:
  - type: "image"
    url: "https://pbs.twimg.com/media/HDxsM39XwAAmxsU.jpg"
    alt: "Screenshot of an X link card with Supabase branding and a highlighted From supabase.com label"
    caption: "The X card displayed Supabase branding and a familiar-looking source label."
  - type: "image"
    url: "https://pbs.twimg.com/media/HDxsTj9bwAAql_n.jpg"
    alt: "Screenshot of an HTTP redirect inspection showing a 302 response from x-loading.com to token-supabase.com"
    caption: "A separate capture showed a redirect ending at a different domain."
sourcePosts:
  - id: "2034620274998440236"
    url: "https://x.com/ryanvogel/status/2034620274998440236"
    published: "March 19, 2026"
    text: "this is obviously a scam but there is a worse issue here\n\nthe post shows the link is from https://t.co/bhZ5Z8kxzd but the attacker used a service to masquerade the real domain on @X \n\n@nikitabier I feel like this shouldn't be allowed https://t.co/RAqEvXtFSp https://t.co/0zKTxiOJGi"
    likes: 103
    bookmarks: 22
    impressions: 15891
---

## What the screenshots captured

On March 19, I saved two views of the same suspicious situation on X. The first showed a promotional-looking card with Supabase branding, the headline “Build in a weekend, Scale to millions,” and a source label that read “From supabase.com.” Taken by itself, it looked like the kind of card people see constantly in a feed.

The second image was the reason I posted about it. It showed an HTTP 302 response involving one domain and a destination on another domain. The destination was not Supabase’s official domain, even though the card had presented the familiar Supabase name and branding.

I only captured the card and one redirect response. I did not trace every hop or retry the behavior while writing this. I also do not know whether X handles the same setup differently today. What I know is that the name on a card and the domain a browser opens are two separate things.

## The dangerous signal is familiarity

Phishing rarely depends on one perfect imitation. It works by assembling enough familiar signals that a person stops checking. A recognizable logo helps. A real product description helps. A trusted-looking domain label helps. Placed inside a familiar feed, those signals can feel like confirmation even when they are only presentation.

That is what bothered me about this example. The post itself already looked suspicious, but a person who trusted the card’s footer could interpret that label as a guarantee. My screenshots show why that shortcut was unsafe in this case.

I use previews to decide whether something looks relevant, but never as a security boundary or certificate of ownership. A card cannot confirm that the final page belongs to the organization named on it. Even when every visual element looks right, I still care about the domain the browser actually opens.

## How I would handle a card like this

When a post asks for credentials, tokens, payment, recovery information, or another sensitive action, I would not use the card as the route into that account. I would open the service from a saved bookmark, a password manager, or an address I already know. That avoids making a suspicious link responsible for telling me where the real service lives.

If I have already followed a link, I check the address bar before entering anything. I look for the exact registered domain, not just a familiar word embedded somewhere in a longer hostname. An unexpected redirect, a newly introduced domain, an odd sign-in flow, or a password manager refusing to recognize the page is enough reason to stop.

I would also report the post and preserve screenshots without continuing deeper into the flow. That leaves a useful record while limiting exposure. There is no benefit to testing a suspicious page with real credentials or seeing how far it goes.

## Where my investigation stopped

The X card visibly associated the link with Supabase, while the redirect capture pointed to a different destination. I did not determine how X generated the preview, whether the mismatch was intentional, whether a platform fix followed, or whether the redirect still resolves.

I want to be precise about where I stopped. I can explain what made the card unsafe to trust without guessing at the machinery behind it or turning the trick into a recipe. The screenshots give me plenty of reason to be cautious.

The habit worth keeping is small: use link previews to understand content, never to authenticate a destination. When the next action is sensitive, navigate through a route you already trust.
