import type { ProductionDomain } from "@/content/types";

export const productionDomains: ProductionDomain[] = [
  {
    slug: "transport-operations",
    label: "Transport & fleet operations",
    scope: "Confidential · National-scale production",
    context:
      "Large-scale operational software used by teams who need continuous visibility into movement, compliance, reporting, and admin workflows — often across regions and under strict access control.",
    focus:
      "Dashboards for freight movement, fleet visibility, provincial workflows, seasonal reporting, GPS-related views, exports, and map-heavy admin tools that must stay usable with real data volume.",
    contribution:
      "Shared frontend architecture across products, feature-module conventions, performance strategy, typed UI platform work, and production delivery for software used daily by operational teams.",
    approach:
      "Design features as modules that can share tables, maps, filters, and admin patterns without coupling business domains. Optimize early for weak networks, RTL, and long sessions at the UI level.",
    outcomes: [
      "Parallel product delivery on a shared codebase without architectural drift",
      "Custom data-table and tracker patterns reused across high-volume workflows",
      "Material first-load improvements through modular architecture and render strategy",
      "Stable production pipeline with containerized builds and monitored releases",
    ],
    technicalThemes: [
      "MapLibre workflows across regions",
      "High-volume reports and exports",
      "RBAC-heavy admin surfaces",
      "RTL-first operational UI",
      "Docker · GitLab CI · Sentry",
    ],
    constraints:
      "Product names, client branding, and implementation screenshots are intentionally omitted because this work is under NDA.",
  },
  {
    slug: "traffic-intelligence",
    label: "Traffic intelligence & monitoring",
    scope: "Confidential · Multi-generation platform",
    context:
      "A long-lived monitoring domain where operators and investigators move between records, maps, devices, search tools, and bulk workflows — often under tight performance and reliability expectations.",
    focus:
      "Investigative interfaces for device monitoring, record search, watch workflows, bulk operations, profile views, notifications, and map-first analysis tools.",
    contribution:
      "Led greenfield rebuild and multi-generation platform evolution — modular Next.js architecture, embedded component tiers, theme systems, render optimization, and conventions that survived legacy migration.",
    approach:
      "Treat map workflows, search, and record inspection as first-class product surfaces rather than feature add-ons. Keep rendering cost visible and controlled in data-heavy views.",
    outcomes: [
      "Modern platform architecture replacing slow legacy frontend patterns",
      "Embedded compound component tier inside the product itself",
      "Theme and preference systems supporting long operator sessions",
      "Continuous delivery of advanced search and monitoring workflows",
    ],
    technicalThemes: [
      "Leaflet and map editing workflows",
      "Advanced search and filtering",
      "Compound widget library inside the product",
      "Multiple theme modes · i18n / RTL",
      "Legacy-to-modern stack migration",
    ],
    constraints:
      "No product names, screenshots, or identifying workflows are shown here by design.",
  },
  {
    slug: "accounting-fintech",
    label: "Accounting & business software",
    scope: "Confidential · Commercial SaaS history",
    context:
      "Business software where users spend hours inside forms, reports, exports, and branch-aware workflows — often in RTL markets with strict expectations around financial correctness and clarity.",
    focus:
      "Invoicing, inventory, payroll, cheques, subscriptions, branch management, SMS integrations, and financial reporting across large module surfaces.",
    contribution:
      "Full-product frontend ownership spanning complex forms, reporting, exports, responsive layouts, and long-lived commercial delivery in both startup and product-team contexts.",
    approach:
      "Prioritize predictable form architecture, report readability, and module boundaries so financial features can evolve without turning the UI into an unmaintainable patchwork.",
    outcomes: [
      "Large module surfaces delivered with consistent UI patterns",
      "Reporting and export flows built for real business operations",
      "Cross-platform delivery experience across web and desktop-like clients",
      "Strong foundation in business-domain complexity before platform-scale work",
    ],
    technicalThemes: [
      "Financial reporting UI",
      "Complex form and validation flows",
      "PDF and spreadsheet export paths",
      "Offline-aware client patterns",
      "Cross-platform delivery history",
    ],
    constraints:
      "Specific product branding and client assets are omitted.",
  },
];

export function getDomain(slug: string): ProductionDomain | undefined {
  return productionDomains.find((domain) => domain.slug === slug);
}
