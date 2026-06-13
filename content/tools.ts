import type { ToolEntry } from "@/content/types";

export const tools: ToolEntry[] = [
  {
    name: "Interview flashcards",
    description:
      "A study tool built from a large senior-level frontend interview Q&A corpus — focused on recall, filtering, and quick translation while reviewing.",
    details: [
      "Card deck with part/section filters and shuffle modes",
      "Progress tracking stored locally per card",
      "Hover translation for technical terms during review",
      "Generated from structured markdown source content",
    ],
    links: [
      { label: "Open live", href: "https://resumes-silk.vercel.app/flashcards" },
    ],
  },
  {
    name: "Resume editor & PDF pipeline",
    description:
      "A content system for maintaining resume data once and rendering it into previews, HTML exports, and multiple ATS-friendly PDF variants.",
    details: [
      "Browser editor with live preview and structured JSON storage",
      "Eight localized PDF variants for different roles and markets",
      "Puppeteer-based build pipeline for repeatable output",
      "Deployed with serverless API routes and static UI",
    ],
    links: [
      { label: "Open editor", href: "https://resumes-silk.vercel.app" },
    ],
  },
];
