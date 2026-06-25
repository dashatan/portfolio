import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getFeaturedProjects, getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getFeaturedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: site.projectPage.notFound };
  }

  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.featured) {
    notFound();
  }

  const related = projects
    .filter((item) => item.featured && item.slug !== project.slug)
    .slice(0, 3);

  return (
    <article className="py-16 sm:py-24">
      <div className="section-shell">
        <Link
          href="/#work"
          className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase transition-colors hover:text-accent"
        >
          {site.projectPage.backLink}
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-mono text-[11px] tracking-[0.24em] text-accent uppercase">
              {project.type}
            </p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 text-lg text-muted">{project.tagline}</p>

            <div className="mt-10 space-y-8 text-base leading-relaxed">
              <section>
                <h2 className="font-mono text-[11px] tracking-[0.22em] text-accent-secondary uppercase">
                  {site.projectPage.problem}
                </h2>
                <p className="mt-3 text-foreground/90">{project.problem}</p>
              </section>

              <section>
                <h2 className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
                  {site.projectPage.built}
                </h2>
                <p className="mt-3 text-foreground/90">{project.built}</p>
              </section>

              {project.approach ? (
                <section>
                  <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                    {site.projectPage.approach}
                  </h2>
                  <p className="mt-3 text-foreground/90">{project.approach}</p>
                </section>
              ) : null}

              <section>
                <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                  {site.projectPage.impact}
                </h2>
                <p className="mt-3 text-foreground/90">{project.impact}</p>
              </section>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="surface-card p-6">
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                {site.projectPage.stack}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1.5 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card p-6">
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                {site.projectPage.highlights}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/90">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.visualNote ? (
              <div className="surface-card border-dashed p-6 text-sm text-muted">
                {project.visualNote}
              </div>
            ) : null}

            {project.links?.length ? (
              <div className="surface-card p-6">
                <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                  {site.projectPage.links}
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>

        {related.length > 0 ? (
          <section className="mt-20 border-t border-border pt-12">
            <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
              {site.projectPage.relatedTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="surface-card p-5 transition-transform hover:-translate-y-1"
                >
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="mt-2 text-sm text-muted">{item.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
