# Kelvin Atsu Djayouri - Portfolio

A modern, high-performance developer portfolio built to showcase my projects, experience, and technical blog.

## Tech Stack
- **Framework:** [Next.js](https://nextjs.org) (App Router, Static Export)
- **Styling:** Vanilla CSS, [TailwindCSS v4](https://tailwindcss.com/)
- **Content:** MDX (Markdown + React Components) via `next-mdx-remote`
- **Theming:** Dark mode by default using `next-themes`
- **Animations:** Framer Motion

## Getting Started Locally

First, install dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This portfolio is strictly configured for **Static Export** (`output: export` in `next.config.ts`), meaning it generates pure HTML/CSS/JS files at build time. 

It is automatically deployed to **GitHub Pages** using GitHub Actions. 
Every push to the `main` branch triggers the `.github/workflows/deploy.yml` workflow, which builds the application from the `next_portfolio` subdirectory and publishes the static files to the repository's GitHub Pages environment.

**Live URL:** [https://djayourikelvinatsu-hub.github.io/](https://djayourikelvinatsu-hub.github.io/)
