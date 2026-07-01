import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "dash-comps",
    name: "Dash Components",
    tagline: "Component platform, design-system catalog, and live showcase",
    type: "Design system · Monorepo · Vite showcase",
    stack: [
      "pnpm",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "TanStack Router",
      "Zustand",
      "MapLibre",
      "ECharts",
      "Radix UI",
    ],
    problem:
      "Operational UIs repeatedly re-solve the same problems — tables, maps, trackers, forms, overlays, localized inputs — without a shared typed layer. That creates inconsistent behavior, duplicated effort, and slower feature delivery across teams.",
    built:
      "A pnpm monorepo with separated packages for core utilities, styles, common primitives, and compound widgets, plus a Vite showcase app that documents and exercises 40+ component categories in isolation and in realistic compositions.",
    approach:
      "Keep third-party engines at primitive boundaries (maps, charts, overlays) while owning product behavior in typed compound components, stores, and feature-ready APIs. Catalog-driven development so components are validated as systems, not one-off screens.",
    impact:
      "Public expression of how I design frontend platforms: repeated complexity becomes a catalog, not a rewrite. Same patterns support RTL, theme modes, large datasets, and map-centric workflows.",
    highlights: [
      "40+ catalog categories across common primitives and compound widgets (table, tracker, form, dashboard, location-picker, file-uploader, and more)",
      "Enterprise table patterns for server pagination, filtering, and high-volume datasets",
      "GPS tracker with playback engine, map abstraction, and worker-backed trace remapping",
      "Localized inputs, Persian date picker, and multi-locale validation workflows",
      "Showcase app with per-component pages, code previews, and featured home compositions",
    ],
    featured: true,
    flagship: true,
    liveDemo: "https://dash-comps.vercel.app/",
    visualNote: "TODO: Add showcase screenshots from dash-comps.vercel.app",
  },
  {
    slug: "dash-logistics",
    name: "Dash Logistics",
    tagline:
      "European fleet operations admin with real API and production-style frontend layers",
    type: "Operational dashboard · React SPA · Hono API",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack Router",
      "TanStack Query",
      "Hono",
      "Zod",
      "SQLite",
      "Tailwind v4",
    ],
    problem:
      "Fleet and logistics products need dense operational UIs — live maps, shipments, fleet assignments, finance, reports — with maintainable frontend architecture as modules grow. Ad-hoc data fetching and page-level coupling make long-term delivery fragile.",
    built:
      "A full-stack demo: logistics-admin SPA with hexagonal frontend layers (routes, features, domain ports, infrastructure repositories) backed by a Hono REST API, shared Zod contracts, and seeded operational data — deployed as dash-logistics on Vercel.",
    approach:
      "Thin route files, feature-owned pages, repository ports for data access, and TanStack Query for server state. Feature modules (overview, fleet, tracker, customers, finance, warehouses, routes, reports, settings) compose shared dash-comps UI primitives.",
    impact:
      "Demonstrates senior frontend delivery on a real product shape: modular routing, typed API boundaries, map/tracker flows, form sheets with Zod validation, i18n-ready surfaces, and patterns that scale when new operational modules are added.",
    highlights: [
      "Live and playback tracker pages wired through repository layer and periodic query refetch",
      "20+ feature modules across fleet, shipments, finance, analytics, reports, and settings",
      "Typed customer account/contract forms with react-hook-form + Zod resolvers in sheet workflows",
      "Shared contracts package keeping API and admin DTOs aligned",
      "European-themed operational data: hubs, corridors, fleet utilization, and delivery performance views",
    ],
    featured: true,
    liveDemo: "https://dash-logistics.vercel.app/",
    visualNote: "TODO: Add logistics admin screenshots from dash-logistics.vercel.app",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
