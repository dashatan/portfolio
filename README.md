# Portfolio — Abbas Mohammadian

Personal portfolio built as a designed product: dark editorial layout, map/data-inspired motion, and case-study depth for real systems work.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4 (`app/global.css`)
- pnpm

## Local development

```bash
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Deploy (Vercel)

```bash
pnpm dlx vercel --prod
```

Or connect the repo to Vercel for automatic deployments.

## Content

Editable content lives in:

| Path | Purpose |
|------|---------|
| `content/profile.ts` | Identity, nav, contact |
| `content/domains.ts` | NDA-safe production domain summaries |
| `content/projects.ts` | Public project case studies |
| `content/experience.ts` | Timeline |
| `content/capabilities.ts` | Skill groups |
| `content/tools.ts` | Meta-tools links |

## TODO assets

- Add dash-comps showcase visuals or embedded demo
- Add Equipe demo screenshots when ready
- Update trade-bot link if you open-source or deploy it
