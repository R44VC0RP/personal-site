---
title: "From bunx gametui to a Multiplayer Terminal Game Platform"
date: "2026-08-09"
excerpt: "A playable multiplayer TUI grew from one bunx command into an SSH lobby with multiple games, custom URLs, and a path for community-made games."
lede: "The first version was one multiplayer terminal game; the next version was a place where many games could live."
eyebrow: "Terminal games / Multiplayer"
readTime: "5 minute read"
tags:
  - "terminal UI"
  - "multiplayer games"
  - "OpenCode"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2048901100976414720/vid/avc1/1152x720/NIsUSK__vawM_Uv7.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2048901100976414720/img/hMFFoTEZjigNBO-5.jpg"
    alt: "Video demonstration of a multiplayer game running in terminal windows"
    caption: "The first multiplayer TUI demo, joinable with bunx gametui."
  - type: "image"
    url: "https://pbs.twimg.com/media/HIOH1BzW8AAHvVS.jpg"
    alt: "Terminal interface showing the later multiplayer game lobby"
    caption: "The later SSH lobby for choosing among terminal games."
sourcePosts:
  - id: "2048901274943320368"
    url: "https://x.com/ryanvogel/status/2048901274943320368"
    published: "April 27, 2026"
    text: "i made the world first multiplayer TUI game with @opencode \n\njoin live with `bunx gametui` https://t.co/dc7mTP4lzE"
    likes: 219
    bookmarks: 54
    impressions: 97177
  - id: "2054635512967598119"
    url: "https://x.com/ryanvogel/status/2054635512967598119"
    published: "May 13, 2026"
    text: "we have gotten surprisingly far on building a hypixel clone inside of the terminal \n\n[ ssh &lt;server&gt; ] → [ enter game lobby ] → [ can join any game lobby via the custom URLs ] \n\nhttps://t.co/k3HbvW1JkW\n\nsoon everyone will be able to make their own games and add it to the lobby https://t.co/bhhmVu9qVB"
    likes: 85
    bookmarks: 16
    impressions: 15846
---

On April 27, I posted a working multiplayer TUI game built with OpenCode. The invitation was intentionally short: run `bunx gametui` and join live.

That command made the idea legible immediately. This was a real multiplayer game running in terminal interfaces, and people could enter it instead of only watching a recording. The demo received more than 97,000 impressions, but the more interesting part came after the first reaction: I kept building until the one game started to look like a platform.

## One command made the prototype public

I called the project the first multiplayer TUI game when I shared the initial video. I had not produced a survey of every terminal game before it, so the part worth focusing on is the working demo: OpenCode helped me build a multiplayer terminal experience, and people could join it with `bunx gametui`.

The command turned the explanation into an action. People could see the terminal game, run one line, and enter it themselves.

That immediacy fit the terminal format. A browser game usually begins with a URL; this one began with a shell command. The command was part of the identity of the project rather than setup hidden before the experience. It also kept the first test focused: could people reach the live game and share a terminal-native multiplayer space?

I did not document the renderer, multiplayer transport, state model, or deployment in that first update. The sequence was much simpler: I built the game, made it joinable, and put it in front of people while it was live.

That was enough to test the central idea. A terminal could be the actual game interface, and multiple people could share the experience.

## The game became an SSH lobby

Sixteen days later, the project had moved beyond the original `bunx` entry point. I described it as a Hypixel clone inside the terminal because of the direction of the experience: connect to a shared place, enter a lobby, and choose a game. I was not suggesting that the terminal project had matched Hypixel feature for feature.

By then, the flow had three visible stages. A player would SSH to a server, arrive in a game lobby, and use custom URLs to join individual game lobbies. I shared the newer lobby interface alongside the update.

The entry point had changed along with the ambition. `bunx gametui` invited someone into the original game. SSH made the server itself the destination, and the lobby gave that destination a persistent shape. A player could arrive first and choose a game second.

The lobby changed the mental model. The first version said, “run this game.” The next one said, “enter this place and decide what to play.” The terminal remained the interface, but now it had structure beyond a single session.

Custom URLs gave each game a distinct destination. I did not explain the URL format or routing implementation, but separate game lobbies were reachable through those URLs in the build I demonstrated.

That separation was important for a growing collection of games. A lobby could introduce the available choices, while a direct destination could bring someone to a particular game. I had moved from one public entry command to a small set of places inside the same terminal world.

## A platform needs room for other builders

The most ambitious step was letting anyone make a game and add it to the lobby. At that moment it was still the direction I wanted to take, not a public extension system that people could already use.

I wanted the catalog to grow beyond games I made myself. Saying that publicly created a clear next threshold for the project: other builders needed a real way to contribute. I had not reached that threshold yet, but it was the difference between a lobby for my experiments and a shared terminal game platform.

Multiple games made the lobby useful; games from other builders would make it a platform. I had not shared a plugin API, packaging format, moderation model, or hosting arrangement, so those pieces were still outside the demonstrated build.

I started with a multiplayer TUI people could join with one command. Then I added an SSH lobby with multiple game destinations and custom URLs. The next direction was clear: open the lobby to games made by other people.

That is the part I still find compelling. The terminal began as the visual constraint for a game and ended up becoming the front door to an entire multiplayer space.
