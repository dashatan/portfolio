import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "dash-comps",
    name: "dash-comps",
    tagline: "Enterprise UI platform & design system",
    type: "Design system · Monorepo · Showcase",
    stack: [
      "pnpm",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Zustand",
      "MapLibre",
      "ECharts",
      "Framer Motion",
      "Radix UI",
    ],
    problem:
      "Operational products repeatedly solved the same expensive UI problems — server-driven tables, trackers, maps, localized inputs, dashboard shells — without a shared typed layer. That created drift, duplicated effort, and inconsistent behavior across features.",
    built:
      "A pnpm monorepo with separated packages for core utilities, styles, common primitives, and compound widgets, plus a Vite showcase app that documents and stress-tests more than 40 modules in isolation and in realistic compositions.",
    approach:
      "Keep third-party libraries at primitive boundaries only — overlays, chart engines, map engines — while owning product-specific behavior in typed compound components, stores, and feature-ready APIs.",
    impact:
      "This is the most direct public expression of how I design frontend platforms: repeated complexity becomes a catalog, not a rewrite. The same patterns support RTL, theme modes, large datasets, and map-centric workflows.",
    highlights: [
      "Enterprise table built for server pagination, filtering, lean row rendering, and high-volume datasets",
      "GPS tracker with playback engine, map engine abstraction, and worker-backed data remapping",
      "Localized date picker, structured inputs, location picker, license-style inputs, and dashboard shells",
      "Locale validation workflow across English, Arabic, and additional RTL markets",
      "Showcase-driven development so components are tested as products, not Storybook ornaments",
    ],
    featured: true,
    flagship: true,
    visualNote: "TODO: Add showcase screenshots or an embedded demo recording",
  },
  {
    slug: "trade-bot",
    name: "trade-bot",
    tagline: "TradingView → exchange → Telegram loop",
    type: "Full-stack side project",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Prisma",
      "SQLite",
      "NextAuth",
      "TanStack Query",
      "Docker",
    ],
    problem:
      "Manual trading workflows break down when signal detection, exchange execution, and alerting live in separate tabs and mental contexts. I wanted one system that could observe conditions, act, log outcomes, and be configured without redeploying code.",
    built:
      "A full-stack app with authenticated admin UI, Prisma-backed configuration and signal history, a CLI bot runner, CoinEx integration for spot and futures flows, and Telegram notifications for state changes and executions.",
    approach:
      "Treat the bot as a product with observability: every signal, config change, and execution path should be inspectable from the UI or logs, not hidden in a script.",
    impact:
      "Demonstrates that I can own the entire loop outside client work — frontend, auth, persistence, background logic, external APIs, and deployment packaging.",
    highlights: [
      "TradingView-derived RSI/MACD signal pipeline with configurable thresholds",
      "Separate admin dashboard and long-running bot runner",
      "Authenticated access, persisted configs, and signal history",
      "Docker Compose setup with documented local and deployment workflow",
      "Typed API boundaries and pragmatic error handling around exchange responses",
    ],
    featured: true,
  },
  {
    slug: "equipe",
    name: "Equipe",
    tagline: "Social activity matching prototype",
    type: "Product prototype · UI-first",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind v4",
      "Radix UI",
      "NextAuth",
      "MongoDB",
      "Motion",
    ],
    problem:
      "Generic social products optimize for feed engagement, not for helping people find the right group for a specific shared activity. The UX challenge here is discovery, trust, and clarity — not infinite scroll.",
    built:
      "A feature-based Next.js application with a marketing landing page, auth-ready app shell, explore/nearby/group/profile flows, admin panel scaffolding, and a cohesive component system built early enough to support iteration.",
    approach:
      "Invest in information architecture and UI structure before pretending the backend is finished. Prototype the product shape clearly even when data is still thin.",
    impact:
      "Shows product thinking and frontend architecture in an early-stage idea — how I structure a app so real features can land without rewriting the shell.",
    highlights: [
      "Feature-folder architecture with clear separation between marketing and app surfaces",
      "Auth-ready dashboard shell and admin panel structure",
      "Explore, nearby, groups, chat, and profile flows designed as a coherent system",
      "Motion-aware UI that supports clarity rather than decoration",
      "Strong base for turning prototype screens into wired product flows",
    ],
    featured: true,
    visualNote: "TODO: Add demo screenshots or a deploy preview when ready",
  },
  {
    slug: "resumes",
    name: "Resume tooling",
    tagline: "Editor, PDF pipeline & interview flashcards",
    type: "Personal meta-engineering",
    stack: ["Node.js", "Puppeteer", "Vanilla JS", "Tailwind CDN", "Vercel serverless"],
    problem:
      "Maintaining multiple resume variants, localized PDF output, and interview prep in separate documents created friction every time I updated content or targeted a different role/market.",
    built:
      "A local editor and serverless deployment with structured resume data, live preview, save/build APIs, eight ATS PDF variants, HTML export, and flashcards generated from a large senior-level interview Q&A corpus.",
    approach:
      "Make content the source of truth and treat rendering as a pipeline problem — preview, HTML, PDF, and study tools should all derive from the same structured data.",
    impact:
      "A practical example of builder mindset: I improve my own workflow with software, not spreadsheets and manual duplication.",
    highlights: [
      "Browser editor with live preview and structured JSON data model",
      "Eight localized ATS PDF variants generated through Puppeteer",
      "Interview flashcards with filters, progress tracking, and hover translation",
      "Serverless deployment with static UI and API routes on Vercel",
      "Content pipeline from markdown Q&A bank into interactive study tooling",
    ],
    featured: true,
    links: [
      { label: "Flashcards", href: "https://resumes-silk.vercel.app/flashcards" },
      { label: "Editor", href: "https://resumes-silk.vercel.app" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
