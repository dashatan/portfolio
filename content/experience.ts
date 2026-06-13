import type { ExperienceEntry } from "@/content/types";

export const experience: ExperienceEntry[] = [
  {
    period: "Sep 2023 – Present",
    title: "Senior Frontend Engineer",
    company: "Hesaba",
    location: "Tehran · Full-time",
    summary:
      "Leading frontend architecture for confidential national-scale operational platforms that share a codebase, design language, and delivery pipeline.",
    highlights: [
      "Defined feature-module structure, component tiers, TypeScript conventions, and CI/CD patterns so multiple products could evolve in parallel.",
      "Built a layered frontend platform from scratch: enterprise data table, tracker widgets, localized inputs, theming, user preferences, and map-ready compound components.",
      "Led a greenfield rebuild that materially improved first-load performance through modular Next.js architecture, bundle strategy, backend-synced caching, and render optimization.",
      "Delivered 60+ responsive operational modules spanning maps, analytics, fleet visualization, and high-volume admin workflows.",
      "Owned production delivery with Docker multi-stage builds, GitLab CI/CD, and Sentry monitoring.",
    ],
  },
  {
    period: "Feb 2023 – Sep 2023",
    title: "Front-End Developer",
    company: "Javan Fekran Dadeh Gostar (Vista)",
    location: "Tehran",
    summary:
      "Built and stabilized the frontend of a cross-platform accounting and invoicing product used across desktop, mobile, and PWA clients.",
    highlights: [
      "Worked across Electron, React Native, and web surfaces with shared product logic but platform-specific UX constraints.",
      "Improved first-load and interaction performance through route splitting, asset optimization, and refactoring expensive render paths.",
      "Rebuilt component architecture for reuse: standardized state patterns, cleaned dependency sprawl, and established a faster production-debug workflow.",
    ],
  },
  {
    period: "Apr 2022 – Jan 2023",
    title: "Independent Study & Projects",
    company: "Remote",
    location: "",
    summary:
      "Focused period of deepening modern frontend practice through self-directed study and production-style projects published on GitHub.",
    highlights: [
      "Built projects centered on scalable component design, state management, and maintainable app architecture.",
      "Used this period to move deliberately from capable implementation work toward stronger system design instincts.",
    ],
  },
  {
    period: "Nov 2019 – Apr 2022",
    title: "Full-Stack Developer",
    company: "Khavaran Sazeh Tabriz",
    location: "Tabriz",
    summary:
      "Developed a B2B platform connecting industrial zones, factories, and production networks, with increasing ownership of frontend modernization.",
    highlights: [
      "Worked across Laravel, MySQL, and React to deliver business workflows, messaging, and operational modules.",
      "Led migration from Blade/jQuery patterns to a React SPA with clearer structure and better long-term maintainability.",
      "Built responsive UI for both desktop operators and mobile users in the field.",
    ],
  },
  {
    period: "Jul 2016 – Oct 2019",
    title: "Founder & Full-Stack Developer",
    company: "Charchi e-store",
    location: "Maragheh",
    summary:
      "Co-founded an e-commerce startup and owned product development from storefront to backend infrastructure.",
    highlights: [
      "Grew the platform to more than 1,000 registered users through iterative product delivery and direct user feedback.",
      "Evolved the stack from WordPress to Laravel and MySQL to improve performance, maintainability, and feature depth.",
      "Handled everything from UI and backend features to deployment concerns in a small-team startup context.",
    ],
  },
];
