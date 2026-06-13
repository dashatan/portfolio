import { SectionLabel } from "@/components/ui/section-label";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border py-20 sm:py-28">
      <div className="section-shell">
        <SectionLabel
          index="05 / Experience"
          title="A builder's trajectory"
          description="Ten years of moving from startup ownership to platform-scale frontend work — with increasing focus on architecture, reusable systems, and production delivery."
        />

        <div className="relative space-y-0">
          <div className="absolute top-2 bottom-2 left-[7px] hidden w-px bg-border sm:block" />

          {experience.map((entry) => (
            <article
              key={`${entry.company}-${entry.period}`}
              className="relative grid gap-4 border-b border-border py-8 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <div className="relative sm:pl-8">
                <span className="absolute top-1.5 left-0 hidden h-3.5 w-3.5 rounded-full border border-accent bg-background sm:block" />
                <p className="font-mono text-xs tracking-wide text-accent">{entry.period}</p>
                <p className="mt-2 text-sm text-muted">{entry.location}</p>
              </div>

              <div>
                <h3 className="text-xl font-medium">{entry.title}</h3>
                <p className="mt-1 text-sm text-muted">{entry.company}</p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/85">
                  {entry.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {entry.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
