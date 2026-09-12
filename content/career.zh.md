---
title: "职业经历"
description: ""
date: 2025-05-01T19:00:00-04:00
lastmod: 2026-09-01T12:00:00-04:00
layout: "career"   # 视觉改版：layouts/_default/career.html
# timelineItem 参数：cat = research | teams | competition | industry | education | personal
#                    link = 相关项目页（显示为“项目名 →”）
# 条目按 badge 中出现的第一个年份分组，组内保持本文件顺序。
showDate: false
showDateUpdated: true
showWordCount: false
showReadingTime: false
showPagination: false
showAuthor: false
showComments: false
sharingLinks: false
---

{{< timeline >}}

{{< timelineItem icon="pencil" cat="research" link="/zh/projects/ultrasonic-array/" header="超声相控阵与参数化发声研究" badge="2026年5月 – 至今" subheader="Flavin Neuromachines Lab，佐治亚理工 — 本科研究员" >}}
研究基于超声相控阵的参数化扬声器，内容涵盖数字域调制、面向换能器阵列的多通道驱动信号生成、GPU 加速的声场计算与波束赋形，以及实时交互输入。负责文献综述、系统架构选型与原型搭建。
{{< /timelineItem >}}

{{< timelineItem icon="graduation-cap" cat="research" link="/zh/projects/bong/" header="BONG Mk. III — 数字铜管乐器" badge="2026年1月 – 至今" subheader="垂直整合项目：声音与空间的交互（L42i） — 本科研究员" >}}
将 L42i 的 BONG 控制器改造为具备板载合成、功放与反馈延迟发声能力的独立乐器。在 EasyEDA 中完成 PCB 原理图改动，承担喇叭口声学调研，用 FDM 3D 打印制作扬声器喇叭原型，并合著学期报告。
{{< /timelineItem >}}

{{< timelineItem icon="pencil" cat="teams" link="/zh/projects/yjsp-onboarding/" header="YJSP 航电传感与阀门控制 PCB" badge="2026年2月 – 8月" subheader="Yellow Jacket 太空计划 — 航电硬件设计师" >}}
使用 Altium Designer 设计了用于火箭硬件在环（ Hardware-in-the-Loop ）测试的 PCB。将 STM32H573 MCU 与 ADS114S06 ADC 集成，用于四线制 PT100 RTD 温度测量。实现了电源调节（24V Buck、LDO）、继电器驱动、INA228 电流监测和 PCF8575 GPIO 扩展。
{{< /timelineItem >}}

{{< timelineItem icon="dev" cat="personal" link="/zh/projects/ece-1100-media-control/" header="ESP32 蓝牙媒体控制键盘" badge="2026年3月 – 4月" subheader="个人项目" >}}
使用 ESP32、触觉按钮和 SSD1306 OLED 构建了一个口袋大小的 BLE HID 媒体控制器。开发了 BLE 键盘仿真固件。在 Fusion 360 中设计并 3D 打印了定制外壳。已在 GitHub 上开源。
{{< /timelineItem >}}

{{< timelineItem icon="lightbulb" cat="competition" link="/zh/projects/tachyastroach/" header="GT IEEE Robotech 黑客马拉松 — 第一名" badge="2026年1月" subheader="TachyAstroach 团队 — 首席机械设计师" >}}
母子月球车 MoonLine 的首席机械设计师。
{{< /timelineItem >}}

{{< timelineItem icon="lightbulb" cat="competition" link="/zh/projects/uchimera/" header="Inventure Prize 2026" badge="2026年1月" subheader="μCHIMERA：多模态纳功率可堆叠发电装置" >}}
压电效应微功率发电模块设计师及整体机械设计师。
{{< /timelineItem >}}

{{< timelineItem icon="pencil" cat="education" header="Hive Makerspace — 同伴讲师" badge="2026年秋季 – 至今" subheader="佐治亚理工学院" >}}
3D 打印、激光切割和电子工作台区域的认证志愿讲师。
{{< /timelineItem >}}

{{< timelineItem icon="pencil" cat="teams" header="RoboRambler" badge="2026年1月 – 至今" subheader="Georgia Tech RoboMaster 机器人俱乐部 — 电气部门" >}}
电气部门成员，参与竞赛机器人的电气系统设计。
{{< /timelineItem >}}

{{< timelineItem icon="pencil" cat="teams" header="Hytech Racing" badge="2025年8月 – 12月" subheader="电气控制部门 — 通用电气工程师" >}}
参与佐治亚理工学院 Formula SAE 电动赛车的电气系统设计。
{{< /timelineItem >}}

{{< timelineItem icon="graduation-cap" cat="education" header="佐治亚理工学院" badge="2025年8月 – 至今" subheader="电气工程学士 — GPA 4.00" >}}
课程：信号处理（ECE 2026）、电路分析（ECE 2040）、数字逻辑设计（ECE 2020）、数字设计实验（ECE 2031）、软硬件系统编程（ECE 2035）、微分方程（MATH 2552）、多元微积分（MATH 2551）、音乐科技（MUSI 3450）。
{{< /timelineItem >}}

{{< timelineItem icon="pencil" cat="industry" header="上海华泰自动化有限公司" badge="2025年7月" subheader="学生实习生 — 机械与电气设计" >}}
开发了一款模仿学习夹爪。使用 LCEDA 设计末端关节控制电路。在 Fusion 360 中修改机械结构。通过 3D 打印制造原型零件。
{{< /timelineItem >}}

{{< timelineItem icon="pencil" cat="research" header="宁波大学 — 基片集成波导滤波器研究" badge="2024年7月 – 8月" subheader="实习研究员 — 智能无线技术实验室" >}}
设计并制造了基片集成波导（SIW）微波带通滤波器。在 FR4 和 Rogers 基板上构建原型，使用 Ansys HFSS 优化，并用矢量网络分析仪验证。
{{< /timelineItem >}}

{{< timelineItem icon="dev" cat="research" link="/zh/projects/frog/" header="仿生蛙机器人" badge="2022年12月 – 2024年5月" subheader="华东师范大学 — 学生开发者" >}}
个人指导项目：使用气动柔性关节执行器的水面机器人。基于 Fusion 360 建模、ABAQUS 有限元仿真和 Arduino 无线控制。在 2024 年洛杉矶 ISEF 上展示。
{{< /timelineItem >}}

{{< /timeline >}}
