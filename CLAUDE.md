# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website for an AI/ML Engineer (Md Al Emran Hossain), hosted on GitHub Pages. Deployed at: `https://emran144.github.io/alemran_portfolio/`

## Commands

```bash
npm run dev       # local dev server (http://localhost:3000)
npm run build     # static export to ./out/
npm run lint      # ESLint
```

## Architecture

- **Framework**: Next.js 16 (App Router) with `output: "export"` for static GitHub Pages deployment
- **Styling**: Tailwind CSS v4 + CSS custom properties (`var(--bg)`, `var(--accent)`, etc.) defined in `globals.css`
- **Dark mode**: Class-based — `document.documentElement.classList.toggle("dark")`. Anti-FOUC script in `layout.tsx` `<head>`. Theme state in `ThemeProvider.tsx`
- **basePath**: `/alemran_portfolio` — all internal links must account for this
- **Deployment**: GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys `./out` to GitHub Pages on push to `main`

## Content Management

All CV/portfolio content lives in `src/data/`:
- `personal.ts` — name, email, links, tagline, stats
- `experience.ts` — work history + education (exported as `experience` and `education`)
- `projects.ts` — all projects with `category: "Industry" | "MLOps" | "Research"`
- `publications.ts` — papers with DOI links
- `skills.ts` — skill groups
- `achievements.ts` — awards + extracurricular

**To add content**: edit only the relevant data file — no component changes needed.

## Key Constraints

- All components that use `onMouseEnter`/`onMouseLeave` or any React state must have `"use client"` at the top
- Images must use `unoptimized: true` (already set in `next.config.ts`) since GitHub Pages can't do Next.js image optimization
- The CV PDF is at `public/resume.pdf`
