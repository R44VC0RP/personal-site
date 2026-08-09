---
title: "A Coding Agent Built a Bare-Metal Hackintosh Through JetKVM"
date: "2026-08-09"
excerpt: "GPT-5.6 Sol used OpenCode and JetKVM to produce a functional macOS Sequoia Hackintosh on physical hardware in four hours and twenty-two minutes."
lede: "I gave a coding agent a remote view of physical hardware and waited to see whether macOS would boot."
eyebrow: "OpenCode / Bare metal"
readTime: "4 minute read"
tags:
  - "OpenCode"
  - "JetKVM"
  - "Hackintosh"
media:
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2079613471398748161/vid/avc1/1280x720/Cr5U27M9Kb7m68sv.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2079613471398748161/img/8IyW0hXUosYAya26.jpg"
    alt: "Timelapse of GPT-5.6 Sol working through JetKVM toward a macOS Sequoia installation"
    caption: "The first timelapse shows GPT-5.6 Sol controlling the physical machine through OpenCode and JetKVM."
  - type: "video"
    url: "https://video.twimg.com/amplify_video/2080047550581579776/vid/avc1/1280x720/R8o7DIWY8leC-jOm.mp4"
    poster: "https://pbs.twimg.com/amplify_video_thumb/2080047550581579776/img/adFpl_HMknHxDXG0.jpg"
    alt: "Full timelapse of the completed bare-metal macOS Sequoia Hackintosh build"
    caption: "The completed run took four hours and twenty-two minutes, with much of the time spent updating the BIOS."
sourcePosts:
  - id: "2079613664940724326"
    url: "https://x.com/ryanvogel/status/2079613664940724326"
    published: "July 21, 2026"
    text: "GPT 5.6 Sol was able to create a fully functional macOS Sequoia hackintosh from scratch\n\nfull timelapse below https://t.co/PBasTSEwpU"
    likes: 120
    bookmarks: 38
    impressions: 14723
  - id: "2080047698653155560"
    url: "https://x.com/ryanvogel/status/2080047698653155560"
    published: "July 22, 2026"
    text: "gpt 5.6 bare metal hackintosh 100% complete\n\ncontrolled via opencode jetkvm \n\n4hours 22minutes\n\ntotal timelapse (lmao halve the time was updating the BIOS) https://t.co/RTEfh57V5H https://t.co/7vCoauHa6L"
    likes: 269
    bookmarks: 115
    impressions: 38533
---

Most coding-agent demos stay inside a repository. I wanted to see what happened when the work crossed into a physical machine, where the screen, keyboard, boot process, and waiting were all real.

The experiment used GPT-5.6 Sol through OpenCode, with JetKVM providing control of the target hardware. The outcome was a functional macOS Sequoia Hackintosh built on bare metal. The completed run took four hours and twenty-two minutes, and I recorded the process as a timelapse.

I only tested this machine and this setup, and I am not treating the run as fully autonomous. The agent reached a working installation through the remote hardware interface, but I did not keep a step-by-step ledger of human help.

## Giving an agent access to the machine

JetKVM changes the surface available to the agent. Instead of interacting only with files and shell output, the workflow can reach the display and input of a physical computer. OpenCode is the place where the agent is controlled; JetKVM is the bridge to the machine it is trying to configure.

That bridge matters during a bare-metal installation because important states exist outside the operating system. A machine can be in firmware, at a boot menu, inside an installer, or waiting through a restart. There may be no normal remote shell to connect to yet. The experiment tests whether an agent can keep making progress when the computer itself is the interface.

The timelapse preserves the visible sequence. I did not publish the prompts, exact hardware list, bootloader configuration, or a detailed intervention log, so I am keeping the result scoped to what I actually recorded: GPT-5.6 Sol, controlled through OpenCode and JetKVM, produced the functional macOS Sequoia installation shown at the end.

## Four hours, twenty-two minutes

The elapsed time sounds dramatic until the recording explains where much of it went. Roughly half the run was spent updating the BIOS.

That is a useful reminder about agent work on physical systems. Wall-clock time includes all the slow parts of the machine: downloads, flashing, reboots, installers, and waiting for screens to change. An agent can move quickly between decisions and still spend hours inside a process whose bottleneck is hardware or firmware.

The number therefore should not be read as a benchmark for “building a Hackintosh.” It is the duration of this recorded run. Different hardware, software versions, connectivity, and required updates would change it. Its value is that it makes the cost of the experiment visible rather than compressing everything into a before-and-after screenshot.

The timelapse also keeps the slow parts honest. A final macOS desktop only shows where the run ended; it hides the repetitive navigation and long waits. The recording preserves the shape of the work without asking anyone to watch more than four hours in real time.

## What “from scratch” meant in this run

I called the Hackintosh build “from scratch” when the first timelapse finished. When the full run completed, I recorded the control path as OpenCode through JetKVM.

By “from scratch,” I mean the run reached a functional installation on the target hardware instead of beginning from an already running macOS desktop. I am not saying the agent selected the hardware, designed every component of the setup, or operated with zero assistance.

The difficult boundary is moving an agent from a textual software environment into a machine that can reboot underneath it. This control loop crossed that boundary and arrived at a working system.

## A physical test for computer use

I was testing execution: could a coding agent, given a remote path to a real computer, turn Hackintosh instructions into a finished installation?

For this machine and setup, the answer was yes. A repeatable run would also log the access given to the agent, every human intervention, recovery when the screen diverges from the expected state, and the source of hardware-specific knowledge.

If I run it again, I will separate agent decisions, machine waiting, and human help in the log. This run ended with macOS Sequoia booting on the bare-metal Hackintosh after four hours and twenty-two minutes of OpenCode and JetKVM control.
