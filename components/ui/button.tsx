import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-dim text-background font-medium transition-all hover:bg-accent-dim/80",
  secondary:
    "border border-accent-dim bg-accent-dim/5 text-foreground transition-colors hover:bg-accent-dim/10 ",
  outline:
    "border border-border text-accent transition-colors hover:border-accent/40",
  ghost:
    "border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent",
};

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses = "inline-flex items-center rounded-full px-5 py-2.5 text-sm";

export function Button({
  variant = "secondary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, buttonVariantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props;

    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={classes}
          {...(linkProps as ComponentPropsWithoutRef<"a">)}
        >
          {children}
        </a>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a
          href={href}
          className={classes}
          {...(linkProps as ComponentPropsWithoutRef<"a">)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<"button">;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

type NavButtonProps = ComponentPropsWithoutRef<"button"> & {
  className?: string;
  children: React.ReactNode;
};

export function NavButton({ className, children, ...props }: NavButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full border border-border px-3 py-1.5 font-mono text-[11px] tracking-wide text-muted uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
