---
title: "Resume"
description: ""
date: 2025-02-01T23:00:00-05:00
lastmod: 2026-11-20T20:00:00-05:00
layout: "simple"
showDate: false
showDateUpdated: true
showWordCount: false
showReadingTime: false
showPagination: false
showAuthor: false
showComments: false
sharingLinks: false
---

{{< lead >}}
Junior Electrical Engineering student at Georgia Tech (EE '28). I design PCBs and mixed-signal hardware, and I research ultrasonic phased arrays and wearable haptics in the Flavin Neuromachines Lab. I'm looking for Spring/Summer 2027 internships in PCB and hardware design.
{{< /lead >}}

{{< button href="/pdf/Lyu_Resume_Fall_2026.pdf" target="_blank" >}}
View / Download PDF Resume
{{< /button >}}

&nbsp;

{{< tabs >}}

{{< tab label="Experience" icon="list-check" >}}

### Yellow Jacket Space Program (YJSP): Avionics
**Avionics Hardware Designer** · Atlanta, GA · Jan 2026 – Aug 2026

- Designed a two-layer RTD test board around an STM32H573 and a TI ADS114S06 16-bit delta-sigma ADC. It reads two four-wire PT100s ratiometrically: one on-chip IDAC drives each RTD and its 0.01% reference resistor, so current error cancels.
- Added matched RC filters on the ADC inputs and tied AGND to GND at a single 0 Ω link near the ADC.
- Protected the 24 V input with a resettable PTC fuse and a TVS diode. Chose a MAX17503 buck for the 3.3 V rail because a linear drop would run near 14% efficiency; its internal regulator supplies the ADC's 5 V analog rail.
- Revised the existing 24 V power tree on the team's larger sensor board to cut dissipation.
- Participated in team design reviews and ported verified footprints and symbols into the shared Altium library.

{{< btnrow >}}
{{< btn href="/projects/yjsp-onboarding" >}}YJSP Onboarding Project Page{{< /btn >}}
{{< /btnrow >}}

---

### Flavin Neuromachines Lab: Ultrasonic Phased Arrays and Wearable Haptics
**Undergraduate Researcher** · Georgia Institute of Technology · PI: Prof. Matthew Flavin · May 2026 – Present

- Bringing up a 4-channel 40 kHz drive chain: EP4CE6 FPGA square-wave phase control into TC4427 drivers, single-ended at the 12 V rail, driving MA40S4S transducers. A receiving transducer shows a sine on the scope.
- Laying out the PCB for a 6×10 (60-element) transducer array that will replace the 4-channel breadboard prototype.
- Solder small packages on flexible PCBs for wearable vibrotactile nodes and verify each one before pairing it with the hub.
- Flash and test the wireless vibration nodes over J-Link and link them to a Jetson Nano drone for the lab's Active Navigation tests.
- Developing a chest-mounted hand-guidance system (Raspberry Pi 5, two IMX219 cameras, Ultraleap 2, MediaPipe) that computes a hand-to-target vector for a haptic wristband. Ran its ChArUco stereo calibration.
- Evaluated DAC options (DAC80508 kept as a backup) and showed that a 1.17λ element pitch puts grating lobes near ±59°.

{{< btnrow >}}
{{< btn href="/projects/ultrasonic-array" >}}Parametric Audio Phased Array{{< /btn >}}
{{< btn href="https://flavinlab.io" target="_blank" >}}Flavin Neuromachines Lab{{< /btn >}}
{{< /btnrow >}}

---

### L42i (Lab for Interaction and Immersion), Georgia Tech School of Music
**Undergraduate Researcher** · VIP: Interacting with Sound and Space · Jan 2026 – Present

- Added Sony IMX500 AI cameras to the four BIKES mobile audio platforms (Raspberry Pi 5) and fed their on-sensor recognition into SuperCollider scripts that call out detections in real time over external speakers.
- Revised the BONG PCB schematic in EasyEDA (rotary encoder in place of the potentiometer, corrected mic amplifier wiring) and helped turn BONG into a self-contained instrument.
- Prototyped FDM-printed speaker bells, drew DXF files for laser-cut stacked-ring plywood bells, and co-authored the NIME-format semester report as an equal-contribution author.

{{< btnrow >}}
{{< btn href="/projects/bong" >}}BONG{{< /btn >}}
{{< btn href="https://l42i.music.gatech.edu/projects/bong" target="_blank" >}}L42i BONG Project Page{{< /btn >}}
{{< /btnrow >}}

---

### Shanghai Huatai Automation Co., Ltd.
**Student Intern, Mechanical and Electrical Design** · Shanghai, China · Jul 2025

- Took two EasyEDA gripper control boards (PCF8574 I²C) from schematic to assembly and wrote their assembly procedures.
- Modified the gripper in Fusion 360 to house the boards and cabling, designed a modular camera bracket, and 3D-printed the parts.

---

### Intelligent Wireless Technology Lab, Ningbo University
**Research Intern** · Ningbo, China · Jul 2024 – Aug 2024

- Designed two WLAN-band SIW bandpass filters in Ansys HFSS on FR4 and 0.51 mm Rogers RO4350 and measured them on an Agilent PNA. The FR4 filter reached 23 dB return loss and 1.2 dB insertion loss at 2.46 GHz.

{{< /tab >}}

{{< tab label="Personal Projects" icon="pencil" >}}

### ESP32 Bluetooth Media Control Keypad (ECE Discovery Project)
**Personal Project** · Mar 2026 – Apr 2026

- Built a pocket-sized BLE HID media controller using ESP32, three tactile buttons, rotary encoder, and SSD1306 OLED display
- Developed firmware for BLE keyboard emulation with play/pause, track skip, volume control, and mute functions
- Designed and 3D-printed a custom enclosure in Fusion 360; open-sourced code and CAD files on GitHub

{{< btnrow >}}
{{< btn href="/projects/ece-1100-media-control" >}}Media Control Keypad Project Page{{< /btn >}}
{{< /btnrow >}}

---

### Bionic Frog Robot
**Student Developer** · School of Physics, East China Normal University (ECNU) · Dec 2022 – May 2024

- Individual guided project to design a swimming robot using pneumatic flexible joint actuators
- Modeled it in Fusion 360, ran Abaqus FEA, and built Arduino-based control
- Validated wireless sensing and maneuvering; presented the project at Regeneron ISEF 2024 in Los Angeles as a finalist

{{< btnrow >}}
{{< btn href="/projects/frog" >}}Bionic Frog Project Page{{< /btn >}}
{{< /btnrow >}}

{{< /tab >}}

{{< tab label="Activities" icon="globe" >}}

### Hive Makerspace: Peer Instructor
Aug 2026 – Present

Train students on the electronics bench, 3D printers, and laser cutters, and help organize volunteer events held at the Hive.

---

### RoboRambler: Georgia Tech RoboMaster Robotics Club
Jan 2026 – Present

Electrical department member contributing to electrical system design for competition robots.

---

### Yellow Jacket Space Program: Avionics Onboarding
Aug 2025 – Aug 2026

- Completed the department onboarding project, a Rapid Test Board designed in Altium Designer, passing schematic and layout review
- Moved into the Hardware-in-the-Loop group as an avionics hardware designer

---

### HyTech Racing: Electrical Control Department
Aug 2025 – Dec 2025

General Electrical Engineer.

{{< /tab >}}

{{< tab label="Awards" icon="star" >}}

### GT IEEE Robotech Hackathon: First Place ($1,000)
**Team TachyAstroach** · Jan 2026

Chief mechanical designer of MoonLine, a parent-subunit moon surface rover.

{{< btnrow >}}
{{< btn href="/projects/tachyastroach" >}}MoonLine Project Page{{< /btn >}}
{{< /btnrow >}}

---

### Inventure Prize 2026: µCHIMERA
**Multimodal Nano-power Gathering Stackable Device** · Jan 2026

Designer of the PZT nano-power generating module and overall mechanical designer.

{{< btnrow >}}
{{< btn href="/projects/uchimera" >}}μChimera Project Page{{< /btn >}}
{{< /btnrow >}}

---

### Regeneron ISEF 2024: Finalist
**Los Angeles** · May 2024

Bio-inspired swimming robot with Abaqus FEA and Arduino control.

{{< btnrow >}}
{{< btn href="/projects/frog" >}}Bionic Frog Project Page{{< /btn >}}
{{< /btnrow >}}

{{< /tab >}}

{{< tab label="Skills" icon="code" >}}

**Hardware Design**

{{< keywordList >}}
{{< keyword >}} Altium Designer {{< /keyword >}}
{{< keyword >}} EasyEDA {{< /keyword >}}
{{< keyword >}} Mixed-Signal Grounding {{< /keyword >}}
{{< keyword >}} Buck + LDO Power {{< /keyword >}}
{{< keyword >}} 16-bit ΔΣ ADCs {{< /keyword >}}
{{< keyword >}} Small Package Soldering {{< /keyword >}}
{{< /keywordList >}}

**Test and Validation**

{{< keywordList >}}
{{< keyword >}} Oscilloscope {{< /keyword >}}
{{< keyword >}} Electronic Load {{< /keyword >}}
{{< keyword >}} Bench Supply {{< /keyword >}}
{{< keyword >}} J-Link {{< /keyword >}}
{{< keyword >}} VNA S-Parameter Measurement {{< /keyword >}}
{{< keyword >}} Ansys HFSS {{< /keyword >}}
{{< /keywordList >}}

**Digital and Embedded**

{{< keywordList >}}
{{< keyword >}} FPGA (VHDL) {{< /keyword >}}
{{< keyword >}} C on STM32 and ESP32 {{< /keyword >}}
{{< keyword >}} RISC-V Assembly {{< /keyword >}}
{{< keyword >}} I²C / SPI / UART {{< /keyword >}}
{{< keyword >}} MIPI CSI {{< /keyword >}}
{{< /keywordList >}}

**Software**

{{< keywordList >}}
{{< keyword >}} Git {{< /keyword >}}
{{< keyword >}} Linux CLI {{< /keyword >}}
{{< keyword >}} Python (NumPy, PyTorch, OpenCV, MediaPipe) {{< /keyword >}}
{{< keyword >}} MATLAB {{< /keyword >}}
{{< keyword >}} Fusion 360 {{< /keyword >}}
{{< /keywordList >}}

**Fabrication**

{{< keywordList >}}
{{< keyword >}} 3D Printing {{< /keyword >}}
{{< keyword >}} Laser Cutting {{< /keyword >}}
{{< keyword >}} Mechanical Assembly {{< /keyword >}}
{{< /keywordList >}}

**Languages**

{{< keywordList >}}
{{< keyword >}} Mandarin (Native) {{< /keyword >}}
{{< keyword >}} English (Professional Working Proficiency) {{< /keyword >}}
{{< /keywordList >}}

{{< /tab >}}

{{< tab label="Education" icon="graduation-cap" >}}

### Georgia Institute of Technology
**B.S. in Electrical Engineering** · Atlanta, GA · Aug 2025 – Present

- GPA: 4.00 / 4.00
- Expected Graduation: May 2028
- Coursework: Digital Design (ECE 2020), Digital Design Lab (ECE 2031), HW/SW Systems (ECE 2035), Signal Processing (ECE 2026)

{{< /tab >}}

{{< /tabs >}}

&nbsp;
