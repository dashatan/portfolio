import type { CtaLink, ProfileStat } from "@/content/types";

export const profile = {
  name: "Abbas Mohammadian",
  roleLabel: "Senior Frontend Engineer",
  headline: "I design and ship scalable frontend systems for complex products.",
  intro:
    "Senior frontend engineer with 10+ years of production experience building React and Next.js products where performance, maintainability, and delivery quality matter. I focus on architecture that survives scale: reusable component systems, typed boundaries, and feature modules that teams can evolve without drift.",
  extendedIntro:
    "I work best in products with real operational complexity: map-heavy workflows, data-dense dashboards, multilingual and RTL UX, and long-lived codebases. The portfolio combines public systems from dash-comps with production experience summarized by domain.",
  principles: [
    {
      title: "Platforms over one-offs",
      body: "Compound components, design systems, and shared packages should absorb repeated work once — not per feature.",
    },
    {
      title: "Typed end-to-end",
      body: "From API contracts and Zod schemas to forms and state, invalid paths should be caught before they reach users.",
    },
    {
      title: "Team-scale architecture",
      body: "Feature modules, repository ports, and team conventions should let products grow without architectural drift.",
    },
    {
      title: "Production-first engineering",
      body: "Performance, observability, testing, and delivery discipline matter when software runs under real production load.",
    },
  ],
  stats: [
    { label: "Production experience", value: `+${new Date().getFullYear() - 2016} yrs` },
    { label: "Public projects here", value: "2" },
    { label: "Confidential domains", value: "3" },
    { label: "Typical stack", value: "TS · React · Next" },
  ] satisfies ProfileStat[],
  skills: [
    "React, Next.js & TypeScript",
    "Modern JavaScript (ES6+), HTML5 & CSS",
    "Tailwind CSS, CVA & scalable styling patterns",
    "Vite, Turbopack & modern frontend tooling",
    "Feature-module, hexagonal & layered frontend architecture",
    "Design systems, Radix UI & compound component libraries",
    "Monorepos (pnpm, Turborepo), Storybook, tsup & Changesets",
    "SSR, SSG, RSC & rendering strategy",
    "TanStack Query, TanStack Router & server-state patterns",
    "Redux Toolkit, Redux Persist, Zustand & state architecture",
    "React Hook Form, Zod & typed validation",
    "REST APIs, Axios, OpenAPI codegen & typed client boundaries",
    "Hono, shared Zod contracts & full-stack typed integration",
    "NextAuth, JWT & application authentication flows",
    "Prisma, MongoDB & full-stack product delivery",
    "Unit & E2E testing (Jest, Vitest, Playwright, Testing Library)",
    "react-virtuoso, virtualization & Web Worker performance patterns",
    "Performance optimization, bundle strategy & Core Web Vitals",
    "CI/CD, Docker, GitLab CI & Sentry observability",
    "Git workflows, Husky, Prettier & code review standards",
    "i18n, RTL, Persian/Jalali inputs & multilingual interfaces",
    "Leaflet, react-leaflet, MapLibre, ECharts & operational dashboards",
    "Framer Motion, @dnd-kit & advanced interaction UI",
    "localforage & offline-friendly client persistence",
    "Accessibility fundamentals & responsive UX",
    "Cross-functional delivery with product, design & backend",
  ],
  workingStyle: [
    "Greenfield architecture and legacy migration",
    "Design systems and compound component libraries",
    "Map-heavy and data-dense operational interfaces",
    "Multilingual / RTL product surfaces",
    "Performance work tied to real user pain",
    "Hands-on code review and convention-setting",
  ],
  contact: {
    email: "dashatanad@gmail.com",
    github: "https://github.com/dashatan",
    linkedin: "https://linkedin.com/in/abbas-mo-d",
  },
  education:
    "Self-directed software engineering education backed by continuous production delivery",
  hero: {
    howIWork: "Engineering approach",
    coreSkills: "Core skills",
    focusAreas: "Typical focus areas",
    cta: [
      { href: "#work", label: "Explore selected work" },
      { href: "#experience", label: "Read experience" },
      { href: "#contact", label: "Get in touch" },
    ] satisfies CtaLink[],
  },
} as const;

export const navItems = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "systems", label: "Systems" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
] as const;
