import { cn } from "@/lib/cn";

type GridPanelProps = {
  variant?: "default" | "header";
  className?: string;
  children: React.ReactNode;
};

const gridPanelVariantClasses: Record<NonNullable<GridPanelProps["variant"]>, string> = {
  default: "p-4",
  header: "border-b border-border px-6 py-10 sm:px-10 sm:py-12",
};

export function GridPanel({ variant = "default", className, children }: GridPanelProps) {
  return (
    <div className={cn("grid-bg", gridPanelVariantClasses[variant], className)}>{children}</div>
  );
}

type GridOverlayProps = {
  className?: string;
};

export function GridOverlay({ className }: GridOverlayProps) {
  return <div className={cn("absolute inset-0 grid-bg opacity-80", className)} />;
}

type InsetPanelProps = {
  elevated?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function InsetPanel({ elevated = false, className, children }: InsetPanelProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border",
        elevated ? "bg-surface-elevated/90 p-4" : "bg-background/80",
        className,
      )}
    >
      {children}
    </div>
  );
}

type CalloutProps = {
  className?: string;
  children: React.ReactNode;
};

export function Callout({ className, children }: CalloutProps) {
  return (
    <p
      className={cn(
        "rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm leading-relaxed text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}

type VisualNoteProps = {
  className?: string;
  children: React.ReactNode;
};

export function VisualNote({ className, children }: VisualNoteProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-accent/30 bg-background/70 px-3 py-2 text-xs text-muted backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}
