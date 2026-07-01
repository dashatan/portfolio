import type { SystemsContent } from "@/content/types";

export const systems: SystemsContent = {
  header: {
    index: "04 / Systems",
    title: "How I design frontend systems that teams can scale",
    description:
      "Senior frontend work is not only feature delivery — it is architecture, reusable foundations, typed contracts, performance strategy, and delivery standards that keep complex products maintainable as teams and domains grow.",
  },
  metrics: [
    { label: "Architecture scope", value: "Feature → Platform" },
    { label: "Ownership mode", value: "Design · Ship · Operate" },
    { label: "Product shape", value: "Maps · Tables · RTL" },
    { label: "Team impact", value: "Standards · Review · Velocity" },
  ],
  platformDescription:
    "I treat frontend as a long-lived platform: feature modules with clear boundaries, compound component layers that absorb repeated UI complexity, typed validation from API to form, and state flows that stay predictable as products add operational modules. The goal is parallel delivery without drift — whether the surface is a public design-system catalog, a fleet admin SPA, or a confidential map-heavy product used daily under load.",
  pillars: [
    {
      title: "Modular architecture",
      description:
        "Feature-owned modules, thin routes, and infrastructure ports so business domains do not entangle shared foundations.",
      items: [
        "Hexagonal and layered frontend structure",
        "Repository ports and thin data adapters",
        "Monorepo package boundaries (pnpm, Turborepo)",
        "Conventions that support parallel team delivery",
      ],
    },
    {
      title: "Reusable UI platforms",
      description:
        "Design systems and compound components that turn repeated operational patterns into catalog-ready building blocks.",
      items: [
        "40+ component categories across primitives and compounds",
        "Storybook, showcase apps, and catalog-driven validation",
        "Radix-based accessible interaction primitives",
        "Tables, maps, trackers, forms, and dashboard shells",
      ],
    },
    {
      title: "Typed data boundaries",
      description:
        "Contracts and validation that make incorrect states hard to build and safer to refactor across the stack.",
      items: [
        "Zod schemas shared between API and admin clients",
        "React Hook Form resolvers and feature-level DTOs",
        "TanStack Query server-state orchestration",
        "OpenAPI codegen and typed REST client boundaries",
      ],
    },
    {
      title: "Performance under load",
      description:
        "Optimization tied to real operator pain — large datasets, map workflows, long sessions, and weak networks.",
      items: [
        "Virtualized lists and enterprise table pagination",
        "Map and tracker engines isolated at primitive boundaries",
        "Web Worker patterns for heavy trace remapping",
        "Bundle strategy, render cost control, and Core Web Vitals",
      ],
    },
    {
      title: "Quality and delivery",
      description:
        "Engineering discipline that keeps releases stable as complexity grows — not bolted on after features ship.",
      items: [
        "Unit and E2E coverage (Vitest, Playwright, Testing Library)",
        "CI/CD pipelines, Docker builds, and release readiness",
        "Sentry observability and production debugging mindset",
        "Code review, Husky hooks, and team-wide conventions",
      ],
    },
    {
      title: "Operational product UX",
      description:
        "Interfaces built for daily use in complex domains — not presentation layers added at the end.",
      items: [
        "Map-first and data-dense admin workflows",
        "RTL, Persian/Jalali inputs, and multilingual surfaces",
        "RBAC-heavy operator tools and export-heavy reporting",
        "Accessibility fundamentals and responsive density",
      ],
    },
  ],
  demo: {
    panelTitle: "System ownership matrix",
    badge: "senior scope",
    columns: {
      entity: "Area",
      path: "System layer",
      status: "Depth",
      render: "Outcome",
    },
    rows: [
      {
        id: "ARCH-001",
        route: "Frontend architecture",
        status: "Lead",
        delay: "Scalable module boundaries",
        detail:
          "Feature modules, route shells, domain ports, and shared package tiers — so new operational surfaces plug in without rewriting foundations.",
      },
      {
        id: "COMP-014",
        route: "Component platforms",
        status: "Lead",
        delay: "Less duplicated UI work",
        detail:
          "Compound components, design-system catalogs, and showcase-driven validation — repeated patterns become reusable product infrastructure.",
      },
      {
        id: "DATA-022",
        route: "State and contracts",
        status: "Lead",
        delay: "Safer refactors and fewer bugs",
        detail:
          "TanStack Query, RTK where appropriate, Zod at API and form boundaries — server state and validation stay explicit as features grow.",
      },
      {
        id: "PERF-033",
        route: "Performance strategy",
        status: "Lead",
        delay: "Faster load and interaction",
        detail:
          "Virtualization, map/tracker isolation, worker-backed remapping, and render discipline for data-heavy views under production usage.",
      },
      {
        id: "QUAL-041",
        route: "Testing and review",
        status: "Lead",
        delay: "Stable releases at scale",
        detail:
          "Playwright and unit tests on critical flows, hands-on code review, and conventions that keep quality predictable across contributors.",
      },
      {
        id: "PIPE-052",
        route: "Delivery pipelines",
        status: "Lead",
        delay: "Repeatable production shipping",
        detail:
          "CI/CD readiness, containerized builds, environment discipline, and observability hooks so releases are operable — not one-off deploys.",
      },
      {
        id: "I18N-061",
        route: "Multilingual / RTL UX",
        status: "Lead",
        delay: "Usable across locales",
        detail:
          "RTL layouts, localized inputs, Jalali date workflows, and multilingual product surfaces built into component and routing foundations.",
      },
      {
        id: "OPS-070",
        route: "Production operations",
        status: "Lead",
        delay: "Software that survives daily use",
        detail:
          "Map-heavy admin, export workflows, RBAC surfaces, and monitoring views designed for operators — not demos that collapse under real data.",
      },
    ],
    selectedRowTitle: "Ownership focus",
    selectedRowDescription:
      "Select a row to see how I frame senior frontend ownership — architecture decisions, reusable foundations, production constraints, and practices that keep products maintainable at scale.",
  },
};
