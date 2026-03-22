# Advanced_PasswordGenerator — React Application
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-green?logo=vite)
![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)
![PWA](https://img.shields.io/badge/PWA-Supported-purple?logo=pwa)

---

A **production-grade Password Generator Single Page Application** built using React and Context API. It demonstrates real-world frontend engineering concepts including **live strength analysis, password history management, PWA install support, inline confirm toasts, and persistent user preferences.**


---

## 🔗 Live Demo

[View the live app on Vercel](https://password-generator-three-ashen.vercel.app/)

## 🔗 Git Repo

[View source code on GitHub](https://github.com/mayurpanchal-12/Password-Generator.git)

---

## 🚀 Project Overview

Advanced Password Generator is a complete password utility where users can:

- Generate secure passwords with customizable length (4–32) and character options
- See real-time strength indicators (Weak / Medium / Strong)
- Copy passwords to clipboard with toast confirmation
- Browse and manage a saved password history (max 10)
- Delete individual passwords or clear all with inline confirm toasts
- Read security best practices on the Guide page
- Install the app as a PWA on mobile and desktop
- Error Boundry for Routes

The project focuses on **production-level practices**, not just a basic random string generator.

---

## Application Flow

```
Open App → Password auto-generated on load
        ↓
Adjust length (4–32) via range slider
        ↓
Toggle Special Characters and/or Numbers
        ↓
Strength score updates live (Weak / Medium / Strong)
        ↓
Copy password → toast confirms "Copied to clipboard! ✅"
        ↓
Every generated password saved to History (max 10)
        ↓
View History page → see all saved passwords with strength badge
        ↓
Copy or delete individual passwords from History
        ↓
Clear All → confirmation toast before wiping history
        ↓
View Guide page → password security tips and best practices
        ↓
Install as PWA → 📲 Install button appears in Navbar if installable
```

---

## 🧭 Navigation

- 🔑 Generator (Home)
- 🕐 History
- 📖 Guide
- ⚠️ 404 Wildcard

---

## 🛠 Tech Stack

### Core

- React 18 (useState, useEffect, useCallback, useRef, useId — no Redux needed)
- React Router DOM v6 (BrowserRouter, Routes, Route, NavLink, wildcard route)
- Context API (PasswordContext — password state, history, strength, PWA install prompt)
- TailwindCSS v4 (@custom-variant dark — dark mode via `.dark` class on `<html>`)
- Vite + Vite PWA Plugin (registerSW() in main.jsx — installable, works offline)
- localStorage (passlength, char, num toggles, and full password history persisted)

---

### 📦 Libraries & Tools

- react-hot-toast — toast notifications + inline confirmation dialogs for delete and clear
- Web Clipboard API — `navigator.clipboard.writeText()` for one-click copy
- Vercel — deployment with automatic preview on push
- GitHub — version control and source hosting

---

## ✨ Core Features

- Password length selector (4–32 via range slider)
- Toggle Special Characters and Numbers independently
- Live strength indicator — Weak / Medium / Strong updates as settings change
- Copy to clipboard — Web Clipboard API with toast confirmation
- Password history — auto-saved on every generate, capped at 10 entries
- Delete individual password or Clear All with inline confirm toast
- Guide page — password security tips and best practices
- Theme toggle — dark mode via `.dark` on `<html>` with Tailwind `@custom-variant`
- PWA support — installable on mobile and desktop, works offline

---

## 🔥 Additional Highlights

### 🔐 Strength Calculator
- `calculateStrength()` scores length (8+, 12+) and enabled character options
- Returns Weak / Medium / Strong live as settings change
- Visual badge shown on both Generator and History pages

---

### 📋 Inline Confirm Toasts
- `react-hot-toast` used as a modal replacement
- Delete and Clear All show Cancel + Confirm buttons inside the toast itself
- No separate modal component needed — clean and lightweight

---

### 📲 PWA Install Button
- `beforeinstallprompt` event captured and stored in Context
- Install button appears automatically in Navbar when browser detects installability
- Two variants — full pill button on `sm+`, icon-only circle on mobile
- `appinstalled` event fires → `isInstallable` set to false → button removed automatically

---

### 🌙 Dark Mode
- Theme component toggles `.dark` on `<html>`
- Tailwind `@custom-variant dark` applies styles across all components
- No flash on load — handled at class level

---

## ⚙️ Key Engineering Decisions

- **useCallback on generatePassword** → stable reference, fires via `useEffect` whenever length, char, or num changes — auto-generates without manual trigger
- **History cap at 10** → history sliced to last 10 entries on every generate — prevents unbounded localStorage growth
- **Per-route Error Boundary** → Generator, History, and Guide each isolated — one crash doesn't break the others
- **Context API** → PasswordContext holds all shared state — no prop drilling, no Redux needed at this scale
- **PWA with registerSW({ immediate: true })** → service worker registered on first load — app works offline instantly

---

## ⚡ Performance Optimizations

- `useCallback` for `generatePassword` — prevents unnecessary re-creation on every render
- `useEffect` dependency array — password only regenerates when settings actually change
- localStorage persistence — preferences and history survive page refresh
- Minimal bundle — no Redux, no heavy libraries beyond toast
- Vite PWA Plugin — service worker and manifest auto-generated at build time

---

## 🛡️ Error Handling Strategy

```text
User unchecks Special and Numbers
↓
!char && !num check fires
↓
generatePassword() sets currentPass to ''
↓
Empty password shown, no crash ✅


PassGen / History / Guide throws during render
↓
Unexpected JS error fires
↓
Per-route ErrorBoundary catches it
↓
"Something went wrong ⚠️" fallback shown ✅


User visits /randompage
↓
No matching route found
↓
Wildcard (*) route catches it
↓
404 page with Go Home / Go Back shown ✅


User installs the PWA
↓
appinstalled event fires
↓
isInstallable set to false
↓
Install button removed from Navbar ✅
```

---

## ▶️ Getting Started

```bash
git clone https://github.com/mayurpanchal-12/Password-Generator.git
cd Password-Generator
npm install
npm run dev
```
