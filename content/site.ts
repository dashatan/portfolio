import type { ContactChannel, SectionHeader } from "@/content/types";

type ContactSectionHeader = SectionHeader & {
  secondaryDescription: string;
};

export const site = {
  menu: "Menu",
  metadataTitleSuffix: "Systems-minded builder",
  openGraph: {
    eyebrow: "PORTFOLIO",
    roleLabel: "systems-minded builder",
  },
  footer:
    "Built with Next.js, TypeScript, and Tailwind v4 — designed as a product, not a template.",
  sections: {
    publicWork: {
      index: "02 / Public work",
      title: "Projects you can explore directly",
      description:
        "Deployed public apps you can explore directly: dash-comps.vercel.app and dash-logistics.vercel.app, with architecture decisions visible in code and behavior.",
    },
    productionDomains: {
      index: "03 / Production domains",
      title: "Confidential systems I've helped build",
      description:
        "A large part of my strongest work cannot be shown by name. These domain overviews explain the kinds of systems, responsibilities, and technical themes involved — without exposing protected product details.",
    },
    experience: {
      index: "05 / Experience",
      title: "A builder's trajectory",
      description:
        "Ten years of moving from startup ownership to platform-scale frontend work — with increasing focus on architecture, reusable systems, and production delivery.",
    },
    capabilities: {
      index: "06 / Capabilities",
      title: "Craft grouped by what I actually do",
      description:
        "These are not keyword dumps. They reflect the tools, patterns, and problem spaces that recur across my public work and confidential production systems.",
    },
    contact: {
      index: "07 / Contact",
      title: "If you're building something complex, let's talk systems.",
      description:
        "Email is the best way to reach me. I am especially interested in products where frontend architecture, maps, data density, multilingual UX, or long-term platform maintainability are central — not cosmetic concerns added at the end.",
      secondaryDescription:
        "Happy to discuss public work, confidential domain experience at a high level, code reviews, architecture conversations, or full-time and contract opportunities.",
    } satisfies ContactSectionHeader,
  },
  work: {
    flagship: "Flagship",
    problem: "Problem ·",
    built: "Built ·",
    impact: "Impact ·",
    caseStudy: "Case study ↗",
    liveDemo: "Live demo ↗",
    nda: "NDA",
    myRole: "My role ·",
    domainOverview: "Read domain overview →",
  },
  projectPage: {
    backLink: "← Back to work",
    problem: "Problem",
    built: "What I built",
    approach: "Approach",
    impact: "Why it matters",
    stack: "Stack",
    highlights: "Highlights",
    links: "Links",
    relatedTitle: "More selected work",
    notFound: "Project not found",
  },
  domainPage: {
    backLink: "← Back to work",
    context: "Context",
    focus: "System focus",
    contribution: "My contribution",
    approach: "Approach",
    outcomes: "Outcomes",
    technicalThemes: "Technical themes",
    relatedTitle: "Other production domains",
    notFound: "Domain not found",
  },
  contact: {
    channels: {
      email: {
        label: "Email",
        hint: "Best for introductions, architecture discussions, and opportunities.",
      },
      github: {
        label: "GitHub",
        display: "github.com/dashatan",
        hint: "Public code, experiments, and side projects.",
      },
      linkedin: {
        label: "LinkedIn",
        display: "abbas-mo-d",
        hint: "Professional background and direct messaging.",
      },
    } satisfies Record<string, ContactChannel | Omit<ContactChannel, "display">>,
  },
} as const;
