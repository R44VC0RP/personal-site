---
title: "Adding IMAP and SMTP to Inbound for Unlimited Email Mailboxes"
date: "2026-08-09"
excerpt: "How I made Inbound work with ordinary email clients through IMAP and SMTP, including sending, folders, archiving, and unlimited mailboxes at low cost."
lede: "Inbound became much more tangible the moment I could open a normal email client and use it like a normal inbox."
eyebrow: "Inbound / Email compatibility"
readTime: "4 minute read"
tags:
  - "IMAP"
  - "SMTP"
  - "Inbound"
  - "email infrastructure"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2083731182496235520/vid/avc1/1044x720/dEhmQnDaaBDk1SHQ.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2083731182496235520/img/3yFj6dyU3R50ocXv.jpg"
    alt: "Email client logged into an Inbound mailbox through IMAP"
    caption: "Reading, sending, archiving, and using folders from a regular email client."
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2084218722890444800/vid/avc1/882x720/kCwJWGn8Qx0F12N-.mp4?tag=14"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2084218722890444800/img/jixbiAuUKgJ8PeN2.jpg"
    alt: "Demo of SMTP sending and custom IMAP mailboxes in Inbound"
    caption: "The follow-up added SMTP sending and custom IMAP mailboxes."
sourcePosts:
  - id: "2083731519168803202"
    url: "https://x.com/ryanvogel/status/2083731519168803202"
    published: "August 2, 2026"
    text: "this is so crazy, remember https://t.co/KNU9vmb4lU? my email platform? \n\ni made it so you can log in with imap on any email provider and access your inbox like normal\n\nread/send/archive/folders/etc ALL WORKS\n\ni can't believe this works\n\nunlimited mailboxes https://t.co/rL8q2iMK0N"
    likes: 188
    bookmarks: 179
    impressions: 13597
  - id: "2084218743094489221"
    url: "https://x.com/ryanvogel/status/2084218743094489221"
    published: "August 3, 2026"
    text: "a cool https://t.co/KNU9vmbCbs weekend ship\n\n1. smtp sending (for legacy systems)\n\n2. infinite imap custom mailboxes\n\nthis means that you can get infinite email inboxes for just around $4/month https://t.co/4bULSnLf1K"
    likes: 56
    bookmarks: 46
    impressions: 9506
---

Inbound is my email platform, and the demo that made it feel surprising was not a new dashboard. It was logging into a regular email client through IMAP and seeing the inbox behave the way an inbox is expected to behave.

The first version I showed could read, send, archive, and work with folders. I could use it from an ordinary client and access an Inbound mailbox like normal. It also supported unlimited mailboxes. A follow-up added SMTP sending for legacy systems and infinite custom IMAP mailboxes, putting the setup at around $4 per month.

Those two short demos describe a useful shift: an email platform built for developers can also meet existing email software where it already is.

For me, that is where compatibility stopped being a protocol checkbox and became something visible in everyday use.

## Compatibility is a product surface

An API and a webhook are natural interfaces for new software. They are less useful when the software on the other side already expects an inbox.

IMAP compatibility gives that existing client a familiar way to access mail. From the client’s point of view, the behavior is what matters. Messages can be read. Sending works. Archiving works. Folders work. I wanted those ordinary actions to work instead of stopping at a protocol checkbox.

When I opened the mailbox in a normal client, I did not need a custom admin surface to tell me whether the integration felt real. The client itself became the test: read a message, archive it, send mail, open the folders, and keep using the inbox.

That behavior is the contract. A folder is not useful merely because its name appears. Moving through the mailbox has to continue feeling coherent from the client. Archiving has to produce the state the user expects. Sending has to leave the inbox in a useful state.

I tested logging in and using the read, send, archive, and folder operations shown here. I did not test every email client or every IMAP edge case, so I am keeping the scope to the flows I actually ran.

## SMTP opened the legacy path

The next addition was SMTP sending. I described it specifically as being for legacy systems.

Compatibility work can give an existing system a path forward without requiring it to be rebuilt first. A system that already knows how to send through SMTP can use that interface. For this pass, I focused on getting SMTP sending working for legacy systems. I did not benchmark it or try to document every authentication and relay edge case.

Put together, the two interfaces cover complementary jobs: IMAP for accessing custom mailboxes through a normal client and SMTP for sending from systems built around that older interface. They extend Inbound beyond its modern API and webhook identity without requiring the user experience to look unfamiliar.

That familiarity is why I cared about this weekend ship. Inbound could keep its developer-facing side while the mailbox appeared inside software people already know how to use.

## Unlimited mailboxes change the shape of the idea

The other part of the project is scale at the mailbox level. I started with unlimited mailboxes, then added infinite custom IMAP mailboxes. In the setup I shared, that puts infinite email inboxes at around $4 per month.

I use “infinite” to describe the mailbox model, not literal physical capacity. A user is not buying and configuring another conventional mailbox each time they need a new address. I have not included a full cost calculation, resource limit, or operating breakdown here, so the roughly $4 figure belongs to this setup rather than every possible deployment.

Practically, an Inbound mailbox can be opened in an ordinary email client. The familiar read, send, archive, and folder actions work in the flow I tested. SMTP extends sending to legacy systems, and custom mailboxes fit inside the roughly $4-per-month setup I described.

That is enough to make Inbound feel less like infrastructure hidden behind an API and more like an email system that can participate in the software people already use.
