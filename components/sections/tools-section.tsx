import { SectionLabel } from "@/components/ui/section-label";
import { tools } from "@/content/tools";

export function ToolsSection() {
  return (
    <section id="tools" className="border-b border-border py-20 sm:py-28">
      <div className="section-shell">
        <SectionLabel
          index="07 / Tools"
          title="Live utilities I built for myself"
          description="Smaller products that show how I improve my own workflow — useful, deployed, and maintained because I actually use them."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <article key={tool.name} className="surface-card p-6">
              <h3 className="text-xl font-medium">{tool.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tool.description}</p>
              <ul className="mt-5 space-y-2">
                {tool.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <span className="text-accent">—</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                {tool.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm text-accent transition-colors hover:border-accent/40"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
