# MEXT to UTokyo — CS Aspirant Roadmap

> A practical engineering roadmap for Indian high schoolers, polytechnic scholars, and university undergraduates targeting Computer Science at the prestigious **University of Tokyo (東京大学)**, fully funded by the Japanese Government's **Monbukagakusho (MEXT)** scholarship.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-cyan.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

---

## 📌 Project Overview

Navigating Japanese national scholarship admissions for Computer Science is notoriously complex and shrouded in misconceptions. This web application provides a definitive, engineering-grade blueprint for candidates targeting CS admissions at the University of Tokyo (UTokyo).

Built with a **Tokyo Cyber-Academic** aesthetic (ink-dark carbon canvas, glassmorphic card tiers, glowing neon cyan/violet accents), the application delivers actionable intelligence, interactive calculators, lab directories, and milestone checklists.

---

## ✨ Key Features

### 1. ⚠️ Crucial Advisory: PEAK CS Mythbuster
- Addresses the widespread misconception regarding **PEAK (Programs in English at Komaba)** for Computer Science.
- Details the historical reality that PEAK has **never offered a CS major** (only Japan in East Asia & Environmental Sciences) and is concluding its final incoming class in **September 2026**.
- Outlines the two genuine entry vectors:
  - **Japanese Undergrad Track:** Faculty of Engineering (EEIC) or Faculty of Science (Dept. of CS), preceded by the mandatory 1-year MEXT language prep institute.
  - **English Graduate Track:** Graduate School of Information Science and Technology (GSIST).

### 2. 💰 Coverage & Value Calculator
- Complete breakdown of MEXT scholarship perks:
  - **100% Full Waiver** of entrance examination, matriculation, and annual tuition fees.
  - **¥117,000 to ¥145,000/month** tax-free living stipend wired directly to scholars.
  - **Relocation airfare** (India ⇄ Tokyo round-trip flights) + 1-year language immersion school.
- **Interactive Multi-Currency Simulator:** Convert 4-year and 5-year values between **JPY (¥)**, **INR (₹)**, and **USD ($)** for Undergraduate, Master's, and PhD tracks.

### 3. 🗺️ Ingress Vectors & Spec-Sheet Matrix
- Side-by-side analysis of the 3 primary application channels:
  - **Track 01:** Embassy Recommendation (via Embassy of Japan in New Delhi)
  - **Track 02:** University Recommendation (via UTokyo GSIST)
  - **Track 03:** Domestic Selection (for self-funded students already in Japan)
- **METRIC MATRIX Spec-Sheet:** Detailed comparison of screening bodies, entrance exams, prior professor contact rules, and application windows.
- **Track Diagnostic Engine:** 3-question diagnostic modal that immediately calculates a student's recommended route.

### 4. ⏱️ Chronological Prep Checklist & Timeline
- Stepped glowing vertical timeline from high school through embassy submission:
  - **Stage 01:** Secondary School Core & Technical Portfolio (11th–12th Grade / Fresh Undergrad)
  - **Stage 02:** EJU Prep & Academic Literature Alignment (12–18 Months Out)
  - **Stage 03:** JLPT Certifications & Standardized Proofs (6–12 Months Out)
  - **Stage 04:** Submission to Embassy of Japan in New Delhi (April–May Annually)
- Interactive checkboxes with strikethrough styling, live readiness completion gauge, expandable tactical guidelines, and **`localStorage` persistence**.

### 5. 🔬 Where CS Lives at UTokyo: Labs & Departments
- Department switcher between **Undergraduate (学部)** and **Graduate (大学院)** faculties:
  - Faculty of Engineering (EEIC Course)
  - Faculty of Science (Department of Information Science)
  - Graduate School of Information Science & Technology (GSIST)
  - Interfaculty Initiative in Information Studies (III / GSII)
- **Interactive Lab Directory:** Filterable by research domain (AI & Vision, HCI & Graphics, Systems & Robotics, Theory & PL), featuring:
  - Takeo Igarashi Lab (HCI & 3D Interactive Graphics)
  - Tatsuya Harada Lab (Multimodal AI & Embodied Intelligence)
  - Yoichi Sato Lab (First-Person Computer Vision & Gaze Tracking)
  - Masashi Sugiyama Lab (Statistical Machine Learning Theory / RIKEN AIP)
  - Ishikawa & Senoo Lab (1000-fps High-Speed Vision & Robotics)
  - Naoki Kobayashi Lab (Programming Languages & Higher-Order Model Checking)

### 6. 💻 Interactive Quick-Ref Terminal (`mext-utokyo-quickref.sh`)
- Embedded BASH CLI emulator supporting clickable command chips and live keyboard input:
  - `$ help` — List all available commands
  - `$ syllabus` — Natural Sciences A / Math Course B examination structure
  - `$ stipend` — Exact monthly figures and regional allowance data
  - `$ labs` — Key UTokyo CS laboratories and professors
  - `$ links` — Direct links to the Embassy of Japan portal, GSIST admissions, and past papers
  - `$ peak-status` — Official advisory on PEAK and English undergraduate tracks
  - `$ deadlines` — Annual application calendar
  - `$ clear` — Reset terminal output

### 7. ❓ Admissions Advisory & FAQ Vault
- Answers to nuanced questions:
  - Applying prior to CBSE / State Board results with predicted grades.
  - Difficulty comparison of MEXT Math Course B vs. JEE Main / Advanced.
  - Japanese language requirements (aptitude benchmark vs. qualification filter).
  - Letter of Provisional Acceptance (*Naitei*) protocols and rules.

---

## 🛠️ Tech Stack

- **Framework:** React 19 (SPA)
- **Language:** TypeScript 5.x
- **Build Tool:** Vite 6.x
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`, `@theme` tokens)
- **Icons:** Lucide React & Google Material Symbols
- **Typography:** Space Grotesk (Display, Headers, Terminal) & Inter (Body prose)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mext-utokyo-cs-roadmap.git

# Navigate to the project directory
cd mext-utokyo-cs-roadmap

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Production Build

```bash
npm run build
```

The compiled assets will be output to the `dist/` directory.

---

## 📂 Project Directory Structure

```
├── index.html                  # HTML entry point with fonts & metadata
├── metadata.json               # AI Studio applet configuration
├── package.json                # Project dependencies and build scripts
├── tsconfig.json               # TypeScript compiler options
├── vite.config.ts              # Vite configuration with Tailwind CSS plugin
├── README.md                   # Repository documentation (this file)
└── src/
    ├── App.tsx                 # Core App component and state orchestrator
    ├── main.tsx                # React root mount
    ├── index.css               # Tailwind CSS v4 theme variables & utilities
    ├── types.ts                # TypeScript interfaces (Checklist, Lab, Track, etc.)
    ├── data/
    │   └── roadmapData.ts      # Authoritative admissions data, labs & syllabus
    └── components/
        ├── Header.tsx          # Sticky navigation with live progress counter
        ├── Hero.tsx            # Atmospheric hero section & PEAK mythbuster bento card
        ├── CoverageSection.tsx # Scholarship benefits & currency converter simulator
        ├── RoutesSection.tsx   # 3 Ingress vectors & comparative spec-sheet
        ├── TimelineSection.tsx # Stepped glowing timeline with interactive tasks
        ├── DepartmentsSection.tsx # UTokyo CS department switcher & lab directory
        ├── TerminalSection.tsx # Interactive BASH terminal quickref emulator
        ├── FaqSection.tsx      # Admissions advisory accordion
        ├── Footer.tsx          # Project footer & credits
        └── TrackFinderModal.tsx # 3-question diagnostic route finder modal
```

---

## 📜 Disclaimer & Credits

- **Curated By:** Bhuvan (Sakuta Fx) — [github.com/bhuvan0x](https://github.com/bhuvan0x)
- **Notice:** This project is an independent student community initiative designed to assist prospective CS applicants. It is **not** an official publication of Monbukagakusho (MEXT), the Embassy of Japan in India, or the University of Tokyo. Official guidelines should always be confirmed via [in.emb-japan.go.jp](https://www.in.emb-japan.go.jp) and [u-tokyo.ac.jp](https://www.u-tokyo.ac.jp).

---

## 📄 License

This project is licensed under the Apache 2.0 License.
