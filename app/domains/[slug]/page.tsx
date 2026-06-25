import Link from "next/link";
import { notFound } from "next/navigation";
import { getDomain, productionDomains } from "@/content/domains";
import { site } from "@/content/site";

type DomainPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productionDomains.map((domain) => ({ slug: domain.slug }));
}

export async function generateMetadata({ params }: DomainPageProps) {
  const { slug } = await params;
  const domain = getDomain(slug);

  if (!domain) {
    return { title: site.domainPage.notFound };
  }

  return {
    title: domain.label,
    description: domain.context,
  };
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { slug } = await params;
  const domain = getDomain(slug);

  if (!domain) {
    notFound();
  }

  const related = productionDomains.filter((item) => item.slug !== domain.slug);

  return (
    <article className="py-16 sm:py-24">
      <div className="section-shell">
        <Link
          href="/#work"
          className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase transition-colors hover:text-accent"
        >
          {site.domainPage.backLink}
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.24em] text-accent-secondary uppercase">
            {domain.scope}
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
            {domain.label}
          </h1>
          <p className="mt-4 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm leading-relaxed text-muted">
            {domain.constraints}
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                {site.domainPage.context}
              </h2>
              <p className="mt-3 text-foreground/90">{domain.context}</p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                {site.domainPage.focus}
              </h2>
              <p className="mt-3 text-foreground/90">{domain.focus}</p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
                {site.domainPage.contribution}
              </h2>
              <p className="mt-3 text-foreground/90">{domain.contribution}</p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                {site.domainPage.approach}
              </h2>
              <p className="mt-3 text-foreground/90">{domain.approach}</p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-accent-secondary uppercase">
                {site.domainPage.outcomes}
              </h2>
              <ul className="mt-4 space-y-3">
                {domain.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-sm text-foreground/90">
                    <span className="text-accent">—</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                {site.domainPage.technicalThemes}
              </h2>
              <ul className="mt-4 space-y-3">
                {domain.technicalThemes.map((theme) => (
                  <li key={theme} className="flex gap-3 text-sm text-foreground/90">
                    <span className="text-accent">—</span>
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-20 border-t border-border pt-12">
            <h2 className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
              {site.domainPage.relatedTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/domains/${item.slug}`}
                  className="surface-card p-5 transition-transform hover:-translate-y-1"
                >
                  <p className="text-lg font-medium">{item.label}</p>
                  <p className="mt-2 text-sm text-muted">{item.context}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
