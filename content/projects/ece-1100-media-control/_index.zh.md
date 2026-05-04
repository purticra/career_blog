---
title: "ECE 1100：媒体控制模块"
date: 2026-04-18
draft: false
description: "作为 ECE 1100 课程的一部分设计并构建的硬件媒体控制模块"
showTableOfContents: true
showBreadcrumbs: true
tags: ["ECE", "硬件", "嵌入式系统", "BLE", "3D 打印"]
---

{{< lead >}}
一款硬件媒体控制模块——作为 ECE 1100 课程的一部分设计并构建。
{{< /lead >}}

{{< github repo="purticra/ESPKeyboard" >}}

## 概述

佐治亚理工学院以其密集的职业导向课程著称，跟上学院的节奏需要切实的适应。对于电子工程系的大一新生，**ECE 1100** 就是这个入口：这门课程旨在通过引导校园探索和早期职业规划，帮助新生顺利过渡。

本页面记录了其中一项探索任务——**探索项目**。

## 项目路线图

### 初始规划

探索项目的核心是设计并制作一款 **Unicode 键盘**——一种允许用户直接输入十六进制 Unicode 值以向计算机插入特殊符号的定制输入设备。该装置基于一块充当 USB HID 键盘的 Arduino 板，配合 1602 LCD 实现实时输入反馈，物理按钮用于十六进制输入，并配有 3D 打印外壳。

主要资源包括用于 USB HID 功能的 [Arduino 键盘库](https://docs.arduino.cc/language-reference/en/functions/usb/Keyboard/)、佐治亚理工 Hive 创客空间（用于 3D 打印和原型制作），以及高级设计实验室（提供材料和组装指导）。

通过这个项目，我旨在培养焊接、嵌入式编程、系统级调试和 3D 建模等实践 ECE 技能。

### 可行性验证与修订方案

在初步研究后，我发现通过自制键盘实现真正的 Unicode 输入需要在宿主机上运行配套的"输入法"应用程序。这种方式过于复杂，因为它涉及绕过标准 HID 键盘安全协议。因此，我决定将项目目标转向标准 HID 键盘规范内可实现的方向。考虑到时间和可用工具的限制，修订后的项目专注于构建一款**媒体控制模块**——使用 ESP32 和触觉按钮向已连接的计算机发送标准 HID 媒体按键命令（播放、暂停、音量、切曲）。

## 项目概览

### 硬件设计

媒体控制模块在外形上与传统键盘不同。为充分利用 ESP32 的紧凑尺寸，整个设备尺寸约为 70&times;40&times;45 mm——可以舒适地握在单手中。顶面设有三个触觉按钮，分别用于暂停、上一曲和下一曲，控制电子元件封装在 3D 打印外壳内部。

{{< figure src="rendered_photo.png" alt="媒体控制模块渲染图" caption="媒体控制模块渲染效果" >}}

### 电气连接

ESP32 作为中央控制器，通过其 Micro-USB 接口供电。三个瞬时按钮分别连接到 GPIO 13、12 和 14，对应播放/暂停、下一曲和上一曲。所有输入使用 ESP32 的内部上拉电阻，每个按钮引脚直接接地——无需外部电阻。设备通过蓝牙低功耗（BLE）与宿主机进行无线通信。

*简化接线图：*

{{< mermaid >}}
graph LR
    USB[Micro-USB 5V] ==> ESP32[ESP32]

    subgraph Buttons
        direction TB
        B1[播放/暂停<br>GPIO 13]
        B2[下一曲<br>GPIO 12]
        B3[上一曲<br>GPIO 14]
    end

    B1 --- ESP32
    B2 --- ESP32
    B3 --- ESP32

    ESP32 -. BLE .-> HOST[宿主机]
{{< /mermaid >}}

### 固件

固件基于 [ESP32-BLE-Keyboard](https://github.com/T-vK/ESP32-BLE-Keyboard) 库构建，使 ESP32 能够作为标准蓝牙 HID 键盘出现在宿主机上。启动后，设备以 **"MediaPad"** 名称广播并等待 BLE 连接。

配对完成后，主循环持续轮询三个按钮输入。每个按钮使用 ESP32 内部上拉电阻的低电平有效逻辑——按下时，引脚被拉至地，触发相应的 HID 媒体按键命令：播放/暂停（GPIO 13）、下一曲（GPIO 12）或上一曲（GPIO 14）。每次按键后有 300ms 防抖延迟，防止重复输入。

## 成果

{{< figure src="product_photo.jpg" alt="媒体控制模块" caption="完成品媒体控制模块" >}}

{{< model-viewer src="https://raw.githubusercontent.com/purticra/ESPKeyboard/main/CAD/assemble.glb" title="媒体控制模块" height="500px" >}}

完成的媒体控制模块成功通过 BLE 与宿主机配对，并以可靠的输入响应发送播放/暂停、下一曲和上一曲命令。通过这个项目，我积累了 ESP32 嵌入式编程、在 Fusion 360 中为外壳进行 3D 建模，以及迭代硬件调试的实践经验——从最初的 Unicode 键盘概念到一款功能完善的口袋大小媒体控制器。
