import Link from "next/link";
import { productionDomains } from "@/content/domains";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";
import type { ProductionDomain, Project } from "@/content/types";

function PublicProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={`group surface-card flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
        project.flagship ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-[linear-gradient(135deg,rgba(94,234,212,0.08),rgba(251,191,36,0.05))]">
        <div className="grid-bg absolute inset-0 opacity-80" />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-3">
            <span className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              {project.type}
            </span>
            {project.flagship ? (
              <span className="rounded-full bg-accent px-2 py-1 font-mono text-[10px] text-background uppercase">
                {site.work.flagship}
              </span>
            ) : null}
          </div>
          <div>
            <p className="text-2xl font-medium tracking-tight">{project.name}</p>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </div>
        </div>
        {project.visualNote ? (
          <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-dashed border-accent/30 bg-background/70 px-3 py-2 text-xs text-muted backdrop-blur">
            {project.visualNote}
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-3 text-sm leading-relaxed text-muted">
          <p>
            <span className="text-accent-secondary">{site.work.problem} </span>
            {project.problem}
          </p>
          <p>
            <span className="text-accent">{site.work.built} </span>
            {project.built}
          </p>
          <p>
            <span className="text-foreground/85">{site.work.impact} </span>
            {project.impact}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm text-accent transition-opacity group-hover:opacity-80"
            >
              {site.work.fullCaseStudy}
            </Link>
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </article>
  );
}

function DomainCard({ domain }: { domain: ProductionDomain }) {
  return (
    <article className="surface-card flex h-full flex-col p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="font-mono text-[10px] tracking-[0.22em] text-accent-secondary uppercase">
          {domain.scope}
        </p>
        <span
          className="rounded-full border border-border px-2 py-1 font-mono text-[10px] text-muted uppercase"
          title={domain.constraints}
        >
          {site.work.nda}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-medium tracking-tight">{domain.label}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{domain.context}</p>
      <p className="mt-4 text-sm leading-relaxed text-foreground/85">{domain.focus}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        <span className="text-accent">{site.work.myRole} </span>
        {domain.contribution}
      </p>

      <ul className="mt-5 space-y-2">
        {domain.outcomes.slice(0, 3).map((outcome) => (
          <li key={outcome} className="flex gap-3 text-xs leading-relaxed text-foreground/85">
            <span className="text-accent-secondary">—</span>
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {domain.technicalThemes.map((theme) => (
          <li
            key={theme}
            className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-muted"
          >
            {theme}
          </li>
        ))}
      </ul>

      <Link
        href={`/domains/${domain.slug}`}
        className="mt-auto pt-6 text-sm text-accent transition-opacity hover:opacity-80"
      >
        {site.work.domainOverview}
      </Link>
    </article>
  );
}

export function WorkSection() {
  const publicProjects = getFeaturedProjects();

  return (
    <section id="work" className="border-b border-border py-20 sm:py-28">
      <div className="section-shell space-y-20">
        <div>
          <SectionLabel {...site.sections.publicWork} />

          <div className="grid gap-5 md:grid-cols-2">
            {publicProjects.map((project, index) => (
              <PublicProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>

        <div>
          <SectionLabel {...site.sections.productionDomains} />

          <div className="grid gap-5 lg:grid-cols-3">
            {productionDomains.map((domain) => (
              <DomainCard key={domain.slug} domain={domain} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
