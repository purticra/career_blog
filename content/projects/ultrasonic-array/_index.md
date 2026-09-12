---
title: "Parametric Audio Phased Array"
date: 2026-05-01
draft: false
description: "Parametric audio from an ultrasonic phased array — sound that travels as a narrow, steerable beam"
showTableOfContents: true
showBreadcrumbs: true
tags: ["Acoustics", "Phased Array", "Embedded Systems", "Research"]
lastmod: 2026-09-01
# Visual refresh (see layouts/projects/list.html) — no photography yet: renders PHOTO PENDING
featured: true
kindLabel: "RESEARCH"
field: "Acoustics"
status: "ONGOING RESEARCH"
specs:
  - { k: "ROLE", v: "Undergraduate Researcher" }
  - { k: "PERIOD", v: "May 2026 – Present" }
  - { k: "LAB", v: "Flavin Neuromachines Lab" }
  - { k: "PI", v: "Prof. Matthew Flavin" }
  - { k: "STATUS", v: "Prototype bring-up" }
cta: { label: "Flavin Neuromachines Lab", url: "https://flavinlab.io" }
---

{{< lead >}}
Sound you can aim.
{{< /lead >}}

## Overview

Ongoing research at the **Flavin Neuromachines Lab**, Georgia Tech, under Prof. Matthew Flavin, with day-to-day mentorship from a PhD student in the group.

A parametric loudspeaker radiates modulated ultrasound instead of audible sound. The air itself demodulates the beam through its own nonlinearity, so the listener hears audio only inside a narrow column. Adding phased-array control on top means that column can be steered, focused, and reshaped electronically, with no moving parts.

## What I Work On

- **Literature review** across parametric acoustics, ultrasonic levitation, and phased-array beamforming, tracing the design trade-offs from the foundational work through recent results
- **System architecture selection** for the drive chain: where modulation happens, how many independent channels the array needs, and what the timing and resolution budget looks like per channel
- **Multichannel signal generation** for the transducer array, with per-element phase control
- **GPU-accelerated field computation** so acoustic field solving and beam steering can run in real time rather than offline
- **Real-time interactive input**, so the beam can respond to a listener rather than staying fixed
- **Prototype bring-up**: assembling the array, validating the drive electronics, and measuring what actually comes out

## Status

Architecture and toolchain decisions are settled and the prototype is being brought up. Detailed results are held back while the work is unpublished.

*Last updated: September 2026*
