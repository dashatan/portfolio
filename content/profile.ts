import type { ProfileStat } from "@/content/types";

export const profile = {
  name: "Abbas Mohammadian",
  roleLabel: "Systems-minded software builder",
  location: "Tehran, Iran · Open to relocation",
  languages: "Native in two languages · English C1 for technical work",
  headline: "I turn complex domains into scalable web systems.",
  intro:
    "For more than a decade I've built production software where maps, data density, RTL, performance, and architecture matter as much as interface polish. My work sits at the intersection of product engineering and platform thinking — the kind of frontend that has to survive real operators, weak networks, large datasets, and years of iteration.",
  extendedIntro:
    "I am most useful when a product is no longer a set of pages but a system: feature modules, typed boundaries, shared UI layers, delivery pipelines, and conventions that let a team ship fast without losing coherence. That shows up in public projects here and in confidential production platforms I describe by domain rather than name.",
  principles: [
    {
      title: "Platforms over one-offs",
      body: "If a UI problem appears twice, it belongs in a reusable layer — not copied across features.",
    },
    {
      title: "Typed boundaries",
      body: "Features, schemas, component tiers, and API contracts should make incorrect states hard to build.",
    },
    {
      title: "Complete delivery loops",
      body: "I care about the path from UI to state, tooling, observability, and deployment — not just the visible layer.",
    },
    {
      title: "Production reality",
      body: "I optimize for software used daily under load, not demos that collapse under real data or real workflows.",
    },
  ],
  stats: [
    { label: "Production experience", value: "10+ yrs" },
    { label: "Public projects here", value: "4" },
    { label: "Confidential domains", value: "3" },
    { label: "Typical stack", value: "TS · React · Next" },
  ] satisfies ProfileStat[],
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
} as const;

export const navItems = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "systems", label: "Systems" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "tools", label: "Tools" },
  { id: "contact", label: "Contact" },
] as const;
