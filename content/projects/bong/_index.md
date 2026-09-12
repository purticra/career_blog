---
title: "BONG Mk. III"
date: 2026-05-01
draft: false
description: "Turning a digital brass controller into a self-contained instrument — onboard synthesis, amplification, and feedback-delay sound"
showTableOfContents: true
showBreadcrumbs: true
tags: ["Music Technology", "PCB Design", "Acoustics", "3D Printing", "Embedded Systems"]
# Visual refresh (see layouts/projects/list.html) — no photography yet
kindLabel: "INSTRUMENT"
field: "Music technology"
status: "VIP · L42i"
specs:
  - { k: "ROLE", v: "Undergraduate Researcher" }
  - { k: "PERIOD", v: "Jan 2026 – Present" }
  - { k: "PROGRAM", v: "VIP: Interacting with Sound and Space" }
  - { k: "LAB", v: "L42i, Center for Music Technology" }
  - { k: "TOOLS", v: "EasyEDA, Daisy Seed, FDM printing" }
  - { k: "TEAM", v: "With Alexander Akstens and Sarina Saleem" }
cta: { label: "L42i BONG Project Page", url: "https://l42i.music.gatech.edu/projects/bong" }
---

{{< lead >}}
An interface that stopped needing a computer.
{{< /lead >}}

## What is BONG?

**BONG** is a digital instrument and musical interface developed over several years at the **Lab for Interaction and Immersion (L42i)**, part of Georgia Tech's Center for Music Technology. It explores what happens when a performer's instrument can interact with the room it is played in and with the other instruments around it.

I joined the project in January 2026 through the Vertically Integrated Projects program *Interacting with Sound and Space*, working on the Mk. III iteration through the spring semester.

## Lineage

**Mk. I (BINBONG)** established the core interface: four trumpet-style valves acting as a binary counter for pitch selection. A user study found a high error rate on simple tasks but no significant difference in response time, which pointed toward ergonomic changes and wireless connectivity rather than a redesign of the pitch scheme.

**Mk. II** turned that interface into a controller for expressive spectro-spatial synthesis. It streamed control data to third-party spatial rendering software driving a surround-sound installation. The associated HCI study let participants define their own mappings, and they converged on IMU orientation driving spatial placement with the valves kept for pitch.

**Mk. III** is the step that removes the external computer and speaker rig. The goal is a self-contained instrument that can be carried into a new space and played with little or no setup.

## Physical Design

The base housing carries over from Mk. II largely unchanged. New components were designed to meet the existing geometry so that nothing from the previous build had to be discarded, and the wooden excitation pad and brass valves remain central to how the instrument is played. The visible change is a speaker mount and an acoustic bell for directing the output.

### Bell Acoustics

The bell shapes how the instrument sounds, so historical and modern bell design were both surveyed before committing to a first prototype:

- **Size.** Smaller bells sound bright, direct and articulate; larger ones are warmer and more resonant. A 3.5 inch opening diameter was chosen to keep the instrument compact and bright, with the throat dimension set by the PCB casing.
- **Material.** Traditional bells are brass, but wood and resin both offer usable resonance. Under the semester's time constraints, thermoplastic filament won on fabrication speed while still behaving acceptably.
- **Flare profile.** Brass instruments overwhelmingly use conical and exponential flares; straight horns are rare in modern designs. A cone flare was selected for the first model because it is the simplest to CAD around the speaker constraints, with an exponential flare as the likely next step.

Back-wave propagation from the driver also resonates inside the instrument body. That gives the feedback microphone a concentrated source to pick up and produces haptic vibration, which makes the instrument feel less like an electronic controller in the hand.

## Electronics

The internal electronics were overhauled to move synthesis onboard:

- **Daisy Seed.** An audio-oriented microcontroller with two high-fidelity input and output channels and plenty of ADCs for control. It can be programmed in C++ or Arduino, or by compiling Max/MSP and Pure Data patches directly to the device.
- **Amplifier and speaker.** A 3.5 inch driver paired with a TPA3118 30 W amplifier breakout. Earlier attempts with the LM386 and TPA6211 could not drive the speaker to any meaningful volume; the TPA3118 is efficient enough to run the instrument on a 1300 mAh battery for a usable stretch.
- **ESP32 wireless unit.** Mk. II's wireless connectivity is retained so that multiple instruments can talk to each other and to a host machine, which matters for user testing.
- **Microphones.** Two of them. The internal microphone sits in the resonant chamber and picks up the speaker, enabling feedback-delay synthesis. The external microphone is housed in a mouthpiece so the performer's breath becomes an excitation source, an idea borrowed in part from blowing into the microphone in Mario Kart DS.
- **USB port.** Usable for flashing prebuilt binaries from a formatted USB drive, but not for loading patches through DaisyDuino.

## Manufacturing

Most of the semester went into fabricating the new components, using a mix of third-party manufacturers and on-campus makerspaces.

### PCB

The Hive makerspace offers in-house PCB fabrication via LPKF router and laser etcher, but the success rate is low, and installing the surface-mount TPA6211 consistently scorched the copper traces past recovery. Ordering from a third-party fab turned out to be both faster and cheaper: ten boards for under $15 plus $25 shipping, with under a week of lead time.

The board was designed in EasyEDA for easier collaboration. Practices that made the biggest difference:

- **Assign long trace paths by axis.** Keeping vertical and horizontal runs on opposite layers, joined through vias, removes most crossing problems before they happen.
- **Use teardrops.** Smoothing the pad-to-trace transition reduces both signal reflection and mechanical stress concentration at the junction.
- **Pour copper fills tied to ground.** They shield sensitive signals and hold performance stable.
- **Avoid SMD packages on hand-assembled boards** unless there is no alternative. When unavoidable, tin the pads first, place the part with tweezers, and reflow with a heat gun while holding it down.

### Bell Fabrication

Fitting a larger speaker required a two-part bell and mount, with the bell interchangeable so performers can swap in different acoustic characters. Several fabrication routes were compared:

- **FDM 3D printing** is the cheapest way to a first prototype, but layer artifacts cost precision, surface quality and acoustic performance.
- **SLA printing** solidifies resin layer by layer at much higher resolution, with negligible seams, so it should perform better acoustically.
- **CNC machining** carves a bell from solid wood and gives the best precision and part integrity.
- **Laser cutting** stacks rings cut from plywood into a bell with a corrugated inner surface, which is the fastest wood route when thick stock is unavailable.
- **Wood-filament 3D printing** is a useful dimensional check before committing to a wood part. Resin printing has a high failure rate on these shapes and is best avoided.

## My Contribution

- Designed the PCB schematic modifications in EasyEDA, including replacing the analog potentiometer with a rotary encoder and routing corrective wiring for the microphone amplifier stage
- Ran the bell acoustics research and prototyped speaker bell enclosures via FDM 3D printing
- Prepared DXF files for laser-cut stacked-ring plywood fabrication as an alternative manufacturing path
- Co-authored the semester report documenting PCB design practices, bell acoustics research, and manufacturing workflows

## Remaining Work

- **Rotary encoder mapping.** The pin header is on the board; the assignment, likely volume or patch selection, is still open.
- **ESP32 wiring fix.** One ground pin is unconnected and needs a jumper, and the pin-header stack is too tall for the tube housing, so the module should be soldered directly to the board.
- **USB flashing.** The micro USB port cannot flash the Daisy Seed, so the prototype housing needs an access hole for the boot and reset buttons.
- **Bell prototype.** It has to protect the speaker cone and maximize dispersion across the instrument's fundamental range.
- **Acoustic testing.** Front and back profiles of the installed driver, measured in the Audio and Telecommunications Lab. The back profile and microphone response should be flat within ±3 dB across the instrument's range for feedback synthesis to behave predictably; a digital filter on the speaker output can get it there.
- **New housing.** Two of them, one for the prototype with full access ports and one for the final build.
- **Mouthpiece.** With foam ahead of the microphone to keep spit off the element.
- **Synthesis algorithms.** Feedback synthesis depends on the physical properties of the assembled system, so this waits on the new housing.

## Team

Developed with Alexander Akstens and Sarina Saleem, advised by Prof. Henrik von Coler at L42i. Sarina and I contributed equally to the Mk. III work.

{{< btnrow >}}
{{< btn href="https://l42i.music.gatech.edu/projects/bong" target="_blank" >}}L42i BONG Project Page{{< /btn >}}
{{< /btnrow >}}
