"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/profile";
import { site } from "@/content/site";

export function SiteHeader() {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      const marker = window.innerHeight * 0.3;
      let next: (typeof navItems)[number]["id"] = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= marker) {
          next = item.id;
        }
      }

      setActive(next);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <div className="section-shell flex h-14 items-center justify-between gap-4">
        <a
          href="#intro"
          className="font-mono text-xs tracking-[0.24em] text-muted uppercase transition-colors hover:text-accent"
        >
          {profile.name}
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
          {site.menu}
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
