import type { CapabilityGroup } from "@/content/types";

export const capabilities: CapabilityGroup[] = [
  {
    title: "Frontend & UI systems",
    description:
      "The core of my work — typed React surfaces, platform layers, and interfaces meant to survive iteration.",
    items: [
      "React",
      "Next.js App Router",
      "TypeScript",
      "Tailwind v3/v4",
      "Design systems",
      "Compound components",
      "Radix UI",
      "State architecture",
      "Render performance",
      "i18n / RTL",
    ],
  },
  {
    title: "Data-heavy product UI",
    description:
      "Interfaces where maps, charts, tables, and monitoring views are the product — not decoration.",
    items: [
      "Leaflet",
      "MapLibre",
      "GPS trackers",
      "ECharts",
      "Enterprise tables",
      "Operational dashboards",
      "Search-heavy admin UX",
    ],
  },
  {
    title: "Engineering & delivery",
    description:
      "How features are structured, validated, shipped, and kept observable in production.",
    items: [
      "Feature architecture",
      "Zod validation",
      "API collaboration",
      "Docker",
      "CI/CD",
      "Sentry",
      "Monorepos",
      "Codegen and tooling",
    ],
  },
  {
    title: "Full-stack when needed",
    description:
      "Enough backend and infrastructure depth to own a product loop end to end when the problem requires it.",
    items: [
      "Node.js",
      "Prisma",
      "NextAuth",
      "MongoDB",
      "Laravel / PHP",
      "REST APIs",
      "Serverless deployment",
    ],
  },
  {
    title: "Domains I know in production",
    description: "Problem spaces where I have real delivery history, not portfolio fiction.",
    items: [
      "Transport and logistics",
      "Traffic intelligence",
      "Accounting and fintech",
      "E-commerce",
      "Trading automation",
    ],
  },
];
