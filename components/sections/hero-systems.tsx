"use client";

import { useState } from "react";
import { GridField } from "@/components/effects/grid-field";
import { profile } from "@/content/profile";
import { systems } from "@/content/systems";

export function HeroSection() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden border-b border-border py-10 bg-background-secondary"
    >
      <GridField />
      <div className="scanline pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-shell relative">
        <div className="fade-up flex flex-col gap-10">
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
                  {profile.hero.howIWork}
                </p>
                <ul className="mt-4 space-y-4">
                  {profile.principles.map((principle) => (
                    <li key={principle.title}>
                      <p className="text-sm font-medium text-foreground">
                        {principle.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {principle.body}
                      </p>
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
              {profile.hero.focusAreas}
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
            {profile.hero.cta.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  index === 0
                    ? "inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                    : "inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SystemsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRow = systems.demo.rows[activeIndex];

  return (
    <section id="systems" className="border-b border-border py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12">
          <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
            {systems.header.index}
          </p>
          <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            {systems.header.title}
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            {systems.header.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {systems.metrics.map((metric) => (
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
                {systems.platformDescription}
              </p>
              <ul className="grid gap-2 text-sm text-foreground/90">
                {systems.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                {systems.demo.panelTitle}
              </p>
              <span className="rounded-full bg-accent-dim px-2 py-1 font-mono text-[10px] text-accent">
                {systems.demo.badge}
              </span>
            </div>

            <div className="grid-bg p-4">
              <div className="overflow-hidden rounded-xl border border-border bg-background/80">
                <div className="grid grid-cols-[1.1fr_1fr_auto_auto] gap-3 border-b border-border px-4 py-3 font-mono text-[10px] tracking-wide text-muted uppercase">
                  <span>{systems.demo.columns.entity}</span>
                  <span>{systems.demo.columns.path}</span>
                  <span>{systems.demo.columns.status}</span>
                  <span>{systems.demo.columns.render}</span>
                </div>
                {systems.demo.rows.map((row, index) => (
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
                    <span className="font-mono text-xs text-accent">
                      {row.delay}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-border bg-surface-elevated/90 p-4">
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  {systems.demo.selectedRowTitle}
                </p>
                <p className="mt-2 text-sm">
                  {activeRow.id} · {activeRow.route}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {systems.demo.selectedRowDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
