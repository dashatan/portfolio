import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function ContactSection() {
  const { contact: contactSection } = site.sections;
  const { email, github, linkedin } = site.contact.channels;

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="surface-card overflow-hidden">
          <div className="grid-bg border-b border-border px-6 py-10 sm:px-10 sm:py-12">
            <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
              {contactSection.index}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl">
              {contactSection.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {contactSection.description}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80">
              {contactSection.secondaryDescription}
            </p>
          </div>

          <div className="grid gap-4 px-6 py-8 sm:grid-cols-3 sm:px-10">
            <a
              href={`mailto:${profile.contact.email}`}
              className="rounded-xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                {email.label}
              </p>
              <p className="mt-3 text-sm text-accent">{profile.contact.email}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">{email.hint}</p>
            </a>

            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                {github.label}
              </p>
              <p className="mt-3 text-sm text-accent">{github.display} ↗</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">{github.hint}</p>
            </a>

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                {linkedin.label}
              </p>
              <p className="mt-3 text-sm text-accent">{linkedin.display} ↗</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">{linkedin.hint}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
