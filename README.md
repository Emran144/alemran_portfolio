# Md Al Emran Hossain — Portfolio

Personal portfolio site built with Next.js, deployed at **https://emran144.github.io/alemran_portfolio/**

---

## Making Content Changes

All portfolio content lives in `src/data/`. You never need to touch component code to update your info.

| File | What it controls |
|---|---|
| `src/data/personal.ts` | Name, tagline, email, phone, links, stats |
| `src/data/experience.ts` | Work history and education |
| `src/data/projects.ts` | All projects (Industry / MLOps / Research) |
| `src/data/publications.ts` | Papers with DOI links |
| `src/data/skills.ts` | Skill groups and individual skills |
| `src/data/achievements.ts` | Awards and extracurricular activities |

### Steps to apply a change

1. Edit the relevant file in `src/data/`
2. Commit and push:
   ```bash
   git add src/data/
   git commit -m "update: <what you changed>"
   git push
   ```
3. GitHub Actions will automatically build and deploy — your live site updates in ~2 minutes.

To watch the deployment: **https://github.com/Emran144/alemran_portfolio/actions**

---

## Preview Locally Before Pushing

```bash
npm install       # only needed once
npm run dev       # starts at http://localhost:3000
```

Changes to `src/data/` files hot-reload instantly in the browser while `dev` is running.

---

## Replacing the Profile Photo

1. Put your new photo at `public/avatar.png` (overwrite the existing file)
2. Commit and push:
   ```bash
   git add public/avatar.png
   git commit -m "update: profile photo"
   git push
   ```

---

## Replacing the CV / Resume

1. Put your new PDF at `public/resume.pdf` (overwrite the existing file)
2. Commit and push:
   ```bash
   git add public/resume.pdf
   git commit -m "update: resume"
   git push
   ```

---

## Local Commands

```bash
npm run dev      # development server with hot reload
npm run build    # production build (outputs to ./out/)
npm run lint     # ESLint
```
