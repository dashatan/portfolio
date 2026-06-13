import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="surface-card overflow-hidden">
          <div className="grid-bg border-b border-border px-6 py-10 sm:px-10 sm:py-12">
            <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
              08 / Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl">
              If you're building something complex, let's talk systems.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Email is the best way to reach me. I am especially interested in products where
              frontend architecture, maps, data density, multilingual UX, or long-term platform
              maintainability are central — not cosmetic concerns added at the end.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80">
              Happy to discuss public work, confidential domain experience at a high level, code
              reviews, architecture conversations, or full-time and contract opportunities.
            </p>
          </div>

          <div className="grid gap-4 px-6 py-8 sm:grid-cols-3 sm:px-10">
            <a
              href={`mailto:${profile.contact.email}`}
              className="rounded-xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                Email
              </p>
              <p className="mt-3 text-sm text-accent">{profile.contact.email}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Best for introductions, architecture discussions, and opportunities.
              </p>
            </a>

            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                GitHub
              </p>
              <p className="mt-3 text-sm text-accent">github.com/dashatan ↗</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Public code, experiments, and side projects.
              </p>
            </a>

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                LinkedIn
              </p>
              <p className="mt-3 text-sm text-accent">abbas-mo-d ↗</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Professional background and direct messaging.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
