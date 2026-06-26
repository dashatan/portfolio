"use client";

import { useEffect, useState } from "react";
import { NavButton } from "@/components/ui/button";
import { AnchorLink, NavLink } from "@/components/ui/link";
import { Container } from "@/components/ui/section";
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
      <Container className="flex h-14 items-center justify-between gap-4">
        <AnchorLink href="#intro" variant="logo">
          {profile.name}
        </AnchorLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.id} href={`#${item.id}`} active={active === item.id}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavButton
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {site.menu}
        </NavButton>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <AnchorLink
                  href={`#${item.id}`}
                  variant="mobile"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
