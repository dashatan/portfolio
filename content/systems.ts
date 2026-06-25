import type { SystemsContent } from "@/content/types";

export const systems: SystemsContent = {
  header: {
    index: "04 / Systems",
    title: "Where repeated complexity becomes reusable craft",
    description:
      "dash-comps is my public component platform — typed primitives, compound widgets, core utilities, and a live showcase for the kind of systems I build under NDA elsewhere. It is how I make complex UI legible to a team: cataloged, typed, tested in isolation, and composed in production features.",
  },
  metrics: [
    { label: "Components", value: "40+" },
    { label: "Locales", value: "en / fa / ar" },
    { label: "Layers", value: "core · ui · styles" },
    { label: "Showcase", value: "Vite app" },
  ],
  platformDescription:
    "The platform includes an enterprise table for massive datasets, a GPS tracker with playback engine, localized date and structured inputs, location picking, dashboard shells, and chart/map integrations — with third-party libraries kept at primitive boundaries.",
  highlights: [
    "Worker-backed tracker remapping for smoother playback on large traces",
    "RTL-ready compound inputs and locale validation across markets",
    "Showcase-driven catalog workflow for documenting behavior, not just visuals",
    "Shared patterns reused across confidential production platforms",
    "Monorepo separation between styles, core logic, primitives, and compounds",
  ],
  demo: {
    panelTitle: "Live fragment · data table",
    badge: "interactive",
    columns: {
      entity: "Entity",
      path: "Path",
      status: "Status",
      render: "Render",
    },
    rows: [
      {
        id: "NODE-042",
        route: "Region A → Region C",
        status: "Active",
        delay: "0.4s",
      },
      {
        id: "NODE-118",
        route: "Region B → Region E",
        status: "Queued",
        delay: "1.1s",
      },
      {
        id: "NODE-903",
        route: "Region D → Region F",
        status: "Active",
        delay: "0.2s",
      },
      {
        id: "NODE-771",
        route: "Region A → Region B",
        status: "Review",
        delay: "2.0s",
      },
    ],
    selectedRowTitle: "Selected row",
    selectedRowDescription:
      "Example of the kind of table behavior I build for operational software: virtualized row rendering, server pagination, typed cell boundaries, and UI that stays responsive when operators inspect high-volume datasets.",
  },
};
