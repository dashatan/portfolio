import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type TextLinkVariant = "accent" | "muted" | "back" | "logo" | "mobile";

const textLinkVariantClasses: Record<TextLinkVariant, string> = {
  accent: "text-sm text-accent transition-opacity hover:opacity-80",
  muted: "text-sm text-muted transition-colors hover:text-accent",
  back: "font-mono text-[11px] tracking-[0.22em] text-muted uppercase transition-colors hover:text-accent",
  logo: "font-mono text-xs tracking-[0.24em] text-muted uppercase transition-colors hover:text-accent   hover:underline",
  mobile:
    "block rounded-lg px-3 py-2 font-mono text-xs tracking-wide text-muted uppercase hover:bg-surface hover:text-foreground",
};

type TextLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: TextLinkVariant;
  className?: string;
};

export function TextLink({ variant = "accent", className, children, ...props }: TextLinkProps) {
  return (
    <Link className={cn(textLinkVariantClasses[variant], className)} {...props}>
      {children}
    </Link>
  );
}

type AnchorLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: TextLinkVariant;
  className?: string;
};

export function AnchorLink({
  variant = "accent",
  className,
  children,
  ...props
}: AnchorLinkProps) {
  return (
    <a className={cn(textLinkVariantClasses[variant], className)} {...props}>
      {children}
    </a>
  );
}

type ExternalLinkProps = ComponentPropsWithoutRef<"a"> & {
  className?: string;
  children: React.ReactNode;
};

export function ExternalLink({ className, children, ...props }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={cn("text-sm text-muted transition-colors hover:text-accent", className)}
      {...props}
    >
      {children} ↗
    </a>
  );
}

type NavLinkProps = ComponentPropsWithoutRef<"a"> & {
  active?: boolean;
  className?: string;
};

export function NavLink({ active = false, className, children, ...props }: NavLinkProps) {
  return (
    <a
      className={cn(
        "rounded-full px-3 py-1.5 font-mono text-[11px] tracking-wide uppercase transition-colors",
        "text-muted hover:text-foreground",
        active && "text-accent/90 underline hover:text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
