---
title: "简历"
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
佐治亚理工学院电气工程大三学生（EE '28）。我做 PCB 与混合信号硬件设计，同时在 Flavin Neuromachines Lab 研究超声相控阵与可穿戴触觉。正在寻找 2027 年春季或夏季的 PCB 与硬件设计实习。
{{< /lead >}}

{{< button href="/pdf/Lyu_Resume_Fall_2026.pdf" target="_blank" >}}
查看 / 下载 PDF 简历
{{< /button >}}

&nbsp;

{{< tabs >}}

{{< tab label="工作经历" icon="list-check" >}}

### 黄夹克太空计划（YJSP）：航电部门
**航电硬件设计师** · 美国佐治亚州亚特兰大 · 2026年1月 – 2026年8月

- 设计了一块双层 RTD 测试板，核心是 STM32H573 和 TI ADS114S06 16 位 ΔΣ ADC，以比例测量方式读取两路四线制 PT100：每路由片上 IDAC 同时驱动 RTD 和 0.01% 参考电阻，电流误差因此相互抵消。
- 在 ADC 输入端加了匹配的 RC 滤波，并在 ADC 附近用一个 0 Ω 单点连接 AGND 与 GND。
- 24 V 输入端用自恢复 PTC 保险丝和 TVS 二极管做保护。3.3 V 轨选用 MAX17503 降压芯片，因为线性降压的效率只有约 14%；其内部稳压器为 ADC 提供 5 V 模拟电源。
- 修改了团队大传感板上原有的 24 V 电源树，降低功耗。
- 参与团队设计评审，并把验证过的封装和符号移植进共享的 Altium 库。

{{< btnrow >}}
{{< btn href="/projects/yjsp-onboarding" >}}YJSP 入职项目页面{{< /btn >}}
{{< /btnrow >}}

---

### Flavin Neuromachines Lab：超声相控阵与可穿戴触觉
**本科研究员** · 佐治亚理工学院 · 导师：Matthew Flavin 教授 · 2026年5月 – 至今

- 正在调通 4 通道 40 kHz 驱动链路：EP4CE6 FPGA 输出方波相位控制，经 TC4427 驱动器以 12 V 单端方式驱动 MA40S4S 换能器，接收端换能器在示波器上可以看到正弦波。
- 正在为 6×10（60 单元）换能器阵列画 PCB，用来替代 4 通道面包板原型。
- 在柔性 PCB 上焊接小封装元件，制作可穿戴振动触觉节点，每个节点验证后再与主控配对。
- 用 J-Link 为无线振动节点烧录并测试，再把它们接入 Jetson Nano 无人机，用于实验室的 Active Navigation 测试。
- 正在开发胸挂式手部引导系统（Raspberry Pi 5、两颗 IMX219 摄像头、Ultraleap 2、MediaPipe），计算手到目标的向量并驱动触觉腕带；完成了它的 ChArUco 双目标定。
- 评估了 DAC 方案（DAC80508 作为备选），并算出 1.17λ 的单元间距会让栅瓣出现在约 ±59° 处。

{{< btnrow >}}
{{< btn href="/projects/ultrasonic-array" >}}参数化发声相控阵{{< /btn >}}
{{< btn href="https://flavinlab.io" target="_blank" >}}Flavin Neuromachines Lab 官网{{< /btn >}}
{{< /btnrow >}}

---

### L42i（Lab for Interaction and Immersion），佐治亚理工学院音乐学院
**本科研究员** · VIP：Interacting with Sound and Space · 2026年1月 – 至今

- 为四辆 BIKES 移动音频平台（Raspberry Pi 5）加装 Sony IMX500 AI 摄像头，把片上识别结果接入 SuperCollider 脚本，通过外接扬声器实时播报识别内容。
- 在 EasyEDA 中修改 BONG 的 PCB 原理图（用旋转编码器替换电位器，修正麦克风放大器接线），并协助把 BONG 做成独立乐器。
- 用 FDM 打印制作扬声器号口原型，绘制激光切割叠环胶合板号口的 DXF 文件，并以同等贡献作者身份合著 NIME 格式的学期报告。

{{< btnrow >}}
{{< btn href="/projects/bong" >}}BONG{{< /btn >}}
{{< btn href="https://l42i.music.gatech.edu/projects/bong" target="_blank" >}}L42i BONG 项目页面{{< /btn >}}
{{< /btnrow >}}

---

### 上海华泰自动化有限公司
**学生实习生，机械与电气设计** · 中国上海 · 2025年7月

- 用 EasyEDA 完成两块夹爪控制板（PCF8574 I²C）从原理图到装配的全过程，并编写装配流程。
- 在 Fusion 360 中修改夹爪结构以容纳电路板和线缆，设计模块化摄像头支架，并 3D 打印零件。

---

### 宁波大学智能无线技术实验室
**研究实习生** · 中国宁波 · 2024年7月 – 2024年8月

- 在 Ansys HFSS 中设计了两款 WLAN 频段 SIW 带通滤波器，分别基于 FR4 和 0.51 mm Rogers RO4350，并在 Agilent PNA 上测量；FR4 滤波器在 2.46 GHz 处回波损耗 23 dB，插入损耗 1.2 dB。

{{< /tab >}}

{{< tab label="个人项目" icon="pencil" >}}

### ESP32 蓝牙媒体控制键盘（ECE 探索项目）
**个人项目** · 2026年3月 – 4月

- 使用 ESP32、三个触觉按钮、旋转编码器和 SSD1306 OLED 显示器构建了口袋大小的 BLE HID 媒体控制器
- 开发了支持播放/暂停、切曲、音量控制和静音功能的 BLE 键盘仿真固件
- 在 Fusion 360 中设计并 3D 打印了定制外壳；在 GitHub 上开源了代码和 CAD 文件

{{< btnrow >}}
{{< btn href="/projects/ece-1100-media-control" >}}媒体控制键盘项目页面{{< /btn >}}
{{< /btnrow >}}

---

### 仿生蛙机器人
**学生开发者** · 华东师范大学物理学院 · 2022年12月 – 2024年5月

- 个人指导项目：设计使用气动柔性关节执行器的游泳机器人
- 在 Fusion 360 中建模，用 Abaqus 做有限元分析，并搭建基于 Arduino 的控制
- 验证了无线传感和机动性能；作为决赛选手在 2024 年洛杉矶 Regeneron ISEF 上展示

{{< btnrow >}}
{{< btn href="/projects/frog" >}}仿生蛙项目页面{{< /btn >}}
{{< /btnrow >}}

{{< /tab >}}

{{< tab label="课外活动" icon="globe" >}}

### Hive Makerspace：同伴讲师
2026年8月 – 至今

培训同学使用电子工作台、3D 打印机和激光切割机，并协助组织在 Hive 举办的志愿活动。

---

### RoboRambler：Georgia Tech RoboMaster 机器人俱乐部
2026年1月 – 至今

电气部门成员，参与竞赛机器人的电气系统设计。

---

### 黄夹克太空计划：航电入职项目
2025年8月 – 2026年8月

- 完成部门入职项目：使用 Altium Designer 设计快速测试板（RTB），原理图与布局均通过评审
- 随后进入硬件在环（HITL）组，担任航电硬件设计师

---

### HyTech Racing：电气控制部门
2025年8月 – 12月

通用电气工程师。

{{< /tab >}}

{{< tab label="荣誉奖项" icon="star" >}}

### GT IEEE Robotech 黑客马拉松：第一名（1,000 美元）
**TachyAstroach 团队** · 2026年1月

母子月球车 MoonLine 的首席机械设计师。

{{< btnrow >}}
{{< btn href="/projects/tachyastroach" >}}MoonLine 项目页面{{< /btn >}}
{{< /btnrow >}}

---

### Inventure Prize 2026：µCHIMERA
**多模态纳功率可堆叠发电装置** · 2026年1月

PZT 纳功率发电模块设计师及整体机械设计师。

{{< btnrow >}}
{{< btn href="/projects/uchimera" >}}μCHIMERA 项目页面{{< /btn >}}
{{< /btnrow >}}

---

### Regeneron ISEF 2024：决赛选手
**洛杉矶** · 2024年5月

仿生游泳机器人，使用 Abaqus 有限元分析和 Arduino 控制。

{{< btnrow >}}
{{< btn href="/projects/frog" >}}仿生蛙项目页面{{< /btn >}}
{{< /btnrow >}}

{{< /tab >}}

{{< tab label="技能" icon="code" >}}

**硬件设计**

{{< keywordList >}}
{{< keyword >}} Altium Designer {{< /keyword >}}
{{< keyword >}} EasyEDA {{< /keyword >}}
{{< keyword >}} 混合信号接地 {{< /keyword >}}
{{< keyword >}} Buck + LDO 电源 {{< /keyword >}}
{{< keyword >}} 16 位 ΔΣ ADC {{< /keyword >}}
{{< keyword >}} 小封装焊接 {{< /keyword >}}
{{< /keywordList >}}

**测试与验证**

{{< keywordList >}}
{{< keyword >}} 示波器 {{< /keyword >}}
{{< keyword >}} 电子负载 {{< /keyword >}}
{{< keyword >}} 台式电源 {{< /keyword >}}
{{< keyword >}} J-Link {{< /keyword >}}
{{< keyword >}} VNA S 参数测量 {{< /keyword >}}
{{< keyword >}} Ansys HFSS {{< /keyword >}}
{{< /keywordList >}}

**数字与嵌入式**

{{< keywordList >}}
{{< keyword >}} FPGA（VHDL）{{< /keyword >}}
{{< keyword >}} STM32 与 ESP32 上的 C 开发 {{< /keyword >}}
{{< keyword >}} RISC-V 汇编 {{< /keyword >}}
{{< keyword >}} I²C / SPI / UART {{< /keyword >}}
{{< keyword >}} MIPI CSI {{< /keyword >}}
{{< /keywordList >}}

**软件**

{{< keywordList >}}
{{< keyword >}} Git {{< /keyword >}}
{{< keyword >}} Linux 命令行 {{< /keyword >}}
{{< keyword >}} Python（NumPy、PyTorch、OpenCV、MediaPipe）{{< /keyword >}}
{{< keyword >}} MATLAB {{< /keyword >}}
{{< keyword >}} Fusion 360 {{< /keyword >}}
{{< /keywordList >}}

**制造工艺**

{{< keywordList >}}
{{< keyword >}} 3D 打印 {{< /keyword >}}
{{< keyword >}} 激光切割 {{< /keyword >}}
{{< keyword >}} 机械装配 {{< /keyword >}}
{{< /keywordList >}}

**语言能力**

{{< keywordList >}}
{{< keyword >}} 中文（母语）{{< /keyword >}}
{{< keyword >}} 英语（专业工作水平）{{< /keyword >}}
{{< /keywordList >}}

{{< /tab >}}

{{< tab label="教育背景" icon="graduation-cap" >}}

### 佐治亚理工学院
**电气工程理学学士** · 美国佐治亚州亚特兰大 · 2025年8月 – 至今

- GPA：4.00 / 4.00
- 预计毕业时间：2028年5月
- 相关课程：数字设计（ECE 2020）、数字设计实验（ECE 2031）、软硬件系统（ECE 2035）、信号处理（ECE 2026）

{{< /tab >}}

{{< /tabs >}}

&nbsp;
