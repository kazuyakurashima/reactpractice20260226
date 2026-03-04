# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite with HMR)
- **Build:** `npm run build` (runs `tsc -b && vite build`, output to `dist/`)
- **Lint:** `npm run lint` (ESLint flat config, TS/TSX files only)
- **Preview production build:** `npm run preview`

No test framework is configured.

## Tech Stack

- React 19 + TypeScript (strict mode) on Vite 7
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (imported as `@import 'tailwindcss'` in `src/index.css`)
- ESLint flat config with `react-hooks` and `react-refresh` plugins

## Architecture

Single-page app with a flat component structure in `src/`. Entry point is `src/main.tsx` -> `App.tsx`. Some components use `.jsx` (Card, CardExample) while the main app uses `.tsx`.

## Notes

- TypeScript is configured with `verbatimModuleSyntax: true` and `erasableSyntaxOnly: true` — use `import type` for type-only imports
- `noUnusedLocals` and `noUnusedParameters` are enabled in tsconfig
