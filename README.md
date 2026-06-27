# Franck NKOMA — Personal Portfolio

Personal portfolio of Franck Brondon Bayema, junior full-stack software engineer based in Paris. Built to present my work, technical stack, and background to engineering teams and recruiters.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Docker / Docker Compose

## Sections

- **Hero** — Introduction, role, and call to action
- **About** — Background, strengths, and positioning
- **Stack** — Technologies grouped by domain
- **Projects** — Four selected projects with context, contribution, and result
- **Highlights** — Key capabilities and focus areas
- **News & Events** — Meetups, hackathons, and milestones
- **Contact** — Email, LinkedIn, GitHub

## Getting started

### With Docker (recommended)

```bash
docker compose up
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Without Docker

```bash
npm install
npm run dev
```

## Project structure

```
.
├── app/                    # Next.js App Router entry point
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # One component per page section
│   └── ui/                 # Reusable UI atoms
├── data/                   # Static content (projects, stack, events)
├── hooks/                  # useActiveSection, useScrollReveal
├── lib/                    # Utility functions
├── public/                 # Static assets and event photos
└── types/                  # Shared TypeScript types
```

## Updating content

All content is stored in `data/` as plain TypeScript files — no CMS or database required.

| File | What it controls |
|------|-----------------|
| `data/projects.ts` | Featured projects |
| `data/stack.ts` | Tech stack groups |
| `data/highlights.ts` | Key metrics and strength tags |
| `data/news.ts` | Events and milestones |

To add a project: open `data/projects.ts` and append a new entry following the `Project` type from `types/index.ts`.

To add an event photo: drop the image in `public/images/events/` and reference the path in `data/news.ts`.

## Contact

[brondonbayema@gmail.com](mailto:brondonbayema@gmail.com) — [GitHub](https://github.com/FranckBG1)
