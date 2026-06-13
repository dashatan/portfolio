"use client";

import { useMemo, useState } from "react";
import { GridField } from "@/components/effects/grid-field";
import { profile } from "@/content/profile";

const demoRows = [
  { id: "NODE-042", route: "Region A → Region C", status: "Active", delay: "0.4s" },
  { id: "NODE-118", route: "Region B → Region E", status: "Queued", delay: "1.1s" },
  { id: "NODE-903", route: "Region D → Region F", status: "Active", delay: "0.2s" },
  { id: "NODE-771", route: "Region A → Region B", status: "Review", delay: "2.0s" },
];

export function HeroSection() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden border-b border-border pb-20 pt-16 sm:pb-28 sm:pt-24"
    >
      <GridField />
      <div className="scanline pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-shell relative">
        <div className="fade-up flex flex-col gap-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
            <span>{profile.name}</span>
            <span className="text-border">/</span>
            <span>{profile.location}</span>
            <span className="text-border">/</span>
            <span>{profile.languages}</span>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <p className="font-mono text-sm tracking-[0.18em] text-accent uppercase">
                {profile.roleLabel}
              </p>
              <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
                {profile.headline}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
                {profile.intro}
              </p>
              <p className="max-w-3xl text-base leading-relaxed text-foreground/80">
                {profile.extendedIntro}
              </p>
            </div>

            <div className="space-y-4">
              <div className="surface-card p-6">
                <p className="font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
                  How I work
                </p>
                <ul className="mt-4 space-y-4">
                  {profile.principles.map((principle) => (
                    <li key={principle.title}>
                      <p className="text-sm font-medium text-foreground">{principle.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{principle.body}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="surface-card p-4">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xl font-medium">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="surface-card p-6">
            <p className="font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
              Typical focus areas
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {profile.workingStyle.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              Explore selected work
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Read experience
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SystemsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRow = demoRows[activeIndex];

  const metrics = useMemo(
    () => [
      { label: "Components", value: "40+" },
      { label: "Locales", value: "en / fa / ar" },
      { label: "Layers", value: "core · ui · styles" },
      { label: "Showcase", value: "Vite app" },
    ],
    [],
  );

  return (
    <section id="systems" className="border-b border-border py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12">
          <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
            04 / Systems
          </p>
          <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Where repeated complexity becomes reusable craft
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            dash-comps is my public component platform — typed primitives, compound widgets,
            core utilities, and a live showcase for the kind of systems I build under NDA
            elsewhere. It is how I make complex UI legible to a team: cataloged, typed,
            tested in isolation, and composed in production features.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="surface-card p-4">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-2xl font-medium">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="surface-card space-y-5 p-6">
              <p className="text-sm leading-relaxed text-muted">
                The platform includes an enterprise table for massive datasets, a GPS tracker
                with playback engine, localized date and structured inputs, location picking,
                dashboard shells, and chart/map integrations — with third-party libraries kept
                at primitive boundaries.
              </p>
              <ul className="grid gap-2 text-sm text-foreground/90">
                <li>• Worker-backed tracker remapping for smoother playback on large traces</li>
                <li>• RTL-ready compound inputs and locale validation across markets</li>
                <li>• Showcase-driven catalog workflow for documenting behavior, not just visuals</li>
                <li>• Shared patterns reused across confidential production platforms</li>
                <li>• Monorepo separation between styles, core logic, primitives, and compounds</li>
              </ul>
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                Live fragment · data table
              </p>
              <span className="rounded-full bg-accent-dim px-2 py-1 font-mono text-[10px] text-accent">
                interactive
              </span>
            </div>

            <div className="grid-bg p-4">
              <div className="overflow-hidden rounded-xl border border-border bg-background/80">
                <div className="grid grid-cols-[1.1fr_1fr_auto_auto] gap-3 border-b border-border px-4 py-3 font-mono text-[10px] tracking-wide text-muted uppercase">
                  <span>Entity</span>
                  <span>Path</span>
                  <span>Status</span>
                  <span>Render</span>
                </div>
                {demoRows.map((row, index) => (
                  <button
                    key={row.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`grid w-full grid-cols-[1.1fr_1fr_auto_auto] gap-3 border-b border-border px-4 py-3 text-left text-sm transition-colors last:border-b-0 ${
                      activeIndex === index
                        ? "bg-accent-dim text-foreground"
                        : "text-muted hover:bg-surface-elevated hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono text-xs">{row.id}</span>
                    <span>{row.route}</span>
                    <span>{row.status}</span>
                    <span className="font-mono text-xs text-accent">{row.delay}</span>
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-border bg-surface-elevated/90 p-4">
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  Selected row
                </p>
                <p className="mt-2 text-sm">
                  {activeRow.id} · {activeRow.route}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Example of the kind of table behavior I build for operational software:
                  virtualized row rendering, server pagination, typed cell boundaries, and UI
                  that stays responsive when operators inspect high-volume datasets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
