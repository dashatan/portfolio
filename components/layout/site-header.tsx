"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/profile";

export function SiteHeader() {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <div className="section-shell flex h-14 items-center justify-between gap-4">
        <a
          href="#intro"
          className="font-mono text-xs tracking-[0.24em] text-muted uppercase transition-colors hover:text-accent"
        >
          AM
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-3 py-1.5 font-mono text-[11px] tracking-wide uppercase transition-colors ${
                active === item.id
                  ? "bg-accent-dim text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] tracking-wide text-muted uppercase md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2 font-mono text-xs tracking-wide text-muted uppercase hover:bg-surface hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
