import { cn } from "@/lib/cn";

type TagVariant = "mono" | "pill" | "pill-muted" | "stack";

const tagVariantClasses: Record<TagVariant, string> = {
  mono: "border border-border px-2.5 py-1 font-mono text-[10px] text-muted",
  pill: "border border-border bg-background/50 px-3 py-1.5 text-sm text-foreground/90",
  "pill-muted": "border border-border bg-background/40 px-3 py-1.5 text-xs text-muted",
  stack: "border border-border px-3 py-1.5 text-sm",
};

type TagProps = {
  variant?: TagVariant;
  className?: string;
  children: React.ReactNode;
};

export function Tag({ variant = "mono", className, children }: TagProps) {
  return (
    <span className={cn("rounded-full", tagVariantClasses[variant], className)}>
      {children}
    </span>
  );
}
