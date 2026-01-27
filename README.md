# CV / Portfolio

Single-page CV website built with React that highlights a short intro, experience, skills, and projects. The UI includes localization and motion effects, making it suitable for a personal portfolio or candidate page.

## Features

- Hero section with name, role, and short summary.
- Experience, skills, and projects sections.
- Localization via i18next (RU/EN).
- Reveal animations with framer-motion.
- Tailwind CSS styling.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- i18next + react‑i18next
- Framer Motion

## Quick start

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project structure

- `src/app` — app layout and routing.
- `src/sections` — page sections (experience, skills, projects).
- `src/i18n` — localization files.
- `src/components` — shared UI components.

## Localization

Copy `src/i18n/locales/<lang>/common.json` to add a new language and update the i18next configuration.
