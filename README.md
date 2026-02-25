# Tegar Rizki Wirandhana — Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js 16 showcasing Tegar Rizki Wirandhana's professional experience, projects, and skills as a Software Engineer with 6+ years of Android development expertise.

---

## Table of Contents

- [Tegar Rizki Wirandhana — Software Engineer Portfolio](#tegar-rizki-wirandhana--software-engineer-portfolio)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

---

## About

- **Title:** Tegar Rizki Wirandhana — Software Engineer Portfolio
- **Description:**A modern, responsive portfolio website built with Next.js 16, showcasing professional experience, projects, and technical expertise as a Software Engineer specializing in Android Native development (Kotlin/Java). Experienced in Backend and Infrastructure Engineering, and currently contributing as an AI Engineer.
- **Version:** 1.0.0
- **Last Updated:** 2026-02-25
- **Live Demo:** https://rizkitegar.github.io/

---

## Features

- 🎨 **Gradient Theme** — Consistent pink–purple–blue palette (`#C06C84`, `#6C5B7B`, `#355C7D`) across all sections
- 🌓 **Light & Dark Mode** — Toggle with sun/moon icon; preference persisted in `localStorage` with FOUC prevention
- 📱 **Responsive Layout** — Mobile-first design with adaptive layouts for mobile, tablet, and desktop
- 🧭 **Scroll-Aware Navbar** — Frosted-glass `backdrop-blur` effect on scroll with pill-shaped desktop layout and hamburger menu on mobile
- 🎞️ **Smooth Animations** — Fade-in, hover scale/translate, modal transitions, and custom CSS keyframe animations
- 🚀 **Lottie Back to Top** — Animated rocket button powered by `lottie-react`, appears after 300px scroll
- 💼 **Experience Timeline** — Left-aligned vertical timeline with nested project cards, auto-computed duration, and bilingual (EN/ID) month support
- 🗂️ **Project Modal** — Detailed popup per project with screenshot gallery, full tech stack, and conditional demo/source links
- ⚡ **Performance** — Next.js SSR, automatic code splitting, and CSS `scroll-behavior: smooth`

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.0.1 |
| **UI Library** | React 19.2.0 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Custom CSS keyframes + Lottie (`lottie-react`) |
| **State Management** | React Context API + `localStorage` |
| **Linting** | ESLint 9 + `eslint-config-next` |
| **CSS Processing** | PostCSS with `@tailwindcss/postcss` |

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata, fonts, and ThemeProvider
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Global styles, Tailwind v4 config, custom animations
├── components/
│   ├── Navbar.tsx          # Scroll-aware navigation bar with theme toggle
│   ├── Hero.tsx            # Full-screen hero with profile photo and CTAs
│   ├── Experience.tsx      # Work experience timeline with nested projects
│   ├── Projects.tsx        # Project grid with detail modals
│   ├── Contact.tsx         # Contact section (available but not rendered)
│   ├── Footer.tsx          # Footer with copyright text
│   └── BackToTop.tsx       # Floating Lottie rocket back-to-top button
├── contexts/
│   └── ThemeContext.tsx    # Theme context provider (light/dark mode)
├── data/
│   ├── experiences.ts      # Work experience data (separated from UI)
│   └── projects.ts         # Projects data (separated from UI)
├── hooks/
│   └── useScrollPosition.ts # Reusable scroll-position hook
├── public/
│   └── Rocket Lunch.json  # Lottie animation data for BackToTop
├── types/
│   └── index.ts            # Shared TypeScript interfaces (Project, ExperienceItem, etc.)
├── utils/
│   └── duration.ts         # Date parsing and duration formatting helpers
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18 or above
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-portfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in the browser.

```bash
# Build for production
npm run build

# Start the production server
npm start
```

