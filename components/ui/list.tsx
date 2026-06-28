import { cn } from "@/lib/cn";

type BulletTone = "accent" | "secondary";

const bulletToneClasses: Record<BulletTone, string> = {
  accent: "bg-accent",
  secondary: "bg-accent-secondary",
};

type BulletItemProps = {
  tone?: BulletTone;
  className?: string;
  children: React.ReactNode;
};

export function BulletItem({ tone = "accent", className, children }: BulletItemProps) {
  return (
    <li
      className={cn(
        "flex items-start gap-3 text-sm leading-relaxed text-foreground/90",
        className,
      )}
    >
      <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", bulletToneClasses[tone])} />
      <span>{children}</span>
    </li>
  );
}

type BulletListProps = {
  className?: string;
  children: React.ReactNode;
};

export function BulletList({ className, children }: BulletListProps) {
  return <ul className={cn("space-y-3", className)}>{children}</ul>;
}

type DashTone = "accent" | "secondary";

const dashToneClasses: Record<DashTone, string> = {
  accent: "text-accent",
  secondary: "text-accent-secondary",
};

type DashItemProps = {
  tone?: DashTone;
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

export function DashItem({ tone = "accent", size = "md", className, children }: DashItemProps) {
  return (
    <li
      className={cn(
        "flex gap-3 leading-relaxed",
        size === "sm" ? "text-xs text-foreground/85" : "text-sm text-foreground/85",
        className,
      )}
    >
      <span className={dashToneClasses[tone]}>—</span>
      <span>{children}</span>
    </li>
  );
}

type DashListProps = {
  className?: string;
  children: React.ReactNode;
};

export function DashList({ className, children }: DashListProps) {
  return <ul className={cn("space-y-2", className)}>{children}</ul>;
}

type DotListProps = {
  className?: string;
  children: React.ReactNode;
};

export function DotList({ className, children }: DotListProps) {
  return <ul className={cn("grid gap-2 text-sm text-foreground/90", className)}>{children}</ul>;
}

type DotListItemProps = {
  children: React.ReactNode;
};

export function DotListItem({ children }: DotListItemProps) {
  return <li>• {children}</li>;
}
