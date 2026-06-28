import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type EyebrowTone = "accent" | "muted" | "secondary";
type EyebrowSize = "xs" | "sm" | "md";
type EyebrowTracking = "tight" | "normal" | "wide" | "section" | "hero";

const eyebrowSizeClasses: Record<EyebrowSize, string> = {
  xs: "text-[10px]",
  sm: "text-[11px]",
  md: "text-sm",
};

const eyebrowTrackingClasses: Record<EyebrowTracking, string> = {
  tight: "tracking-[0.18em]",
  normal: "tracking-[0.2em]",
  wide: "tracking-[0.22em]",
  section: "tracking-[0.24em]",
  hero: "tracking-[0.28em]",
};

const eyebrowToneClasses: Record<EyebrowTone, string> = {
  accent: "text-accent",
  muted: "text-muted",
  secondary: "text-accent-secondary",
};

type EyebrowProps = {
  tone?: EyebrowTone;
  size?: EyebrowSize;
  tracking?: EyebrowTracking;
  className?: string;
  children: React.ReactNode;
};

export function Eyebrow({
  tone = "accent",
  size = "sm",
  tracking = "hero",
  className,
  children,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono uppercase",
        eyebrowSizeClasses[size],
        eyebrowTrackingClasses[tracking],
        eyebrowToneClasses[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}

type SubheadingTone = "muted" | "accent" | "secondary";

const subheadingToneClasses: Record<SubheadingTone, string> = {
  muted: "text-muted",
  accent: "text-accent",
  secondary: "text-accent-secondary",
};

type SubheadingProps = {
  tone?: SubheadingTone;
  className?: string;
  children: React.ReactNode;
};

export function Subheading({ tone = "muted", className, children }: SubheadingProps) {
  return (
    <h2
      className={cn(
        "font-mono text-[11px] tracking-[0.22em] uppercase",
        subheadingToneClasses[tone],
        className,
      )}
    >
      {children}
    </h2>
  );
}

type HeadingVariant = "hero" | "page" | "section" | "card" | "card-lg";

const headingVariantClasses: Record<HeadingVariant, string> = {
  hero: "max-w-4xl text-5xl font-medium tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl",
  page: "text-4xl font-medium tracking-tight sm:text-5xl",
  section: "max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl",
  card: "text-xl font-medium",
  "card-lg": "text-2xl font-medium tracking-tight",
};

type HeadingProps<T extends ElementType = "h1"> = {
  as?: T;
  variant?: HeadingVariant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Heading<T extends ElementType = "h1">({
  as,
  variant = "hero",
  className,
  children,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? (variant === "section" ? "h2" : "h1");

  return (
    <Component className={cn(headingVariantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
}

type TextVariant = "lead" | "body" | "muted" | "subtle" | "caption";

const textVariantClasses: Record<TextVariant, string> = {
  lead: "text-lg leading-relaxed text-muted sm:text-xl",
  body: "text-base leading-relaxed text-foreground/90",
  muted: "text-sm leading-relaxed text-muted",
  subtle: "text-sm leading-relaxed text-foreground/80",
  caption: "text-xs leading-relaxed text-muted",
};

type TextProps<T extends ElementType = "p"> = {
  as?: T;
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Text<T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component className={cn(textVariantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
}
