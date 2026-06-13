import { SectionLabel } from "@/components/ui/section-label";
import { capabilities } from "@/content/capabilities";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-b border-border py-20 sm:py-28">
      <div className="section-shell">
        <SectionLabel
          index="06 / Capabilities"
          title="Craft grouped by what I actually do"
          description="These are not keyword dumps. They reflect the tools, patterns, and problem spaces that recur across my public work and confidential production systems."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((group) => (
            <div key={group.title} className="surface-card p-6">
              <h3 className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{group.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
