import { cn } from "@/lib/cn";

type BadgeVariant = "solid" | "dim" | "outline";

const badgeVariantClasses: Record<BadgeVariant, string> = {
  solid: "bg-accent text-background uppercase",
  dim: "bg-accent-dim text-accent",
  outline: "border border-border text-muted uppercase",
};

type BadgeProps = {
  variant?: BadgeVariant;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function Badge({ variant = "outline", title, className, children }: BadgeProps) {
  return (
    <span
      title={title}
      className={cn(
        "rounded-full px-2 py-1 font-mono text-[10px]",
        badgeVariantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
