import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type CardPadding = "none" | "sm" | "md" | "lg";

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  padding?: CardPadding;
  interactive?: boolean;
  dashed?: boolean;
  overflow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Card<T extends ElementType = "div">({
  as,
  padding = "lg",
  interactive = false,
  dashed = false,
  overflow = false,
  className,
  children,
  ...props
}: CardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "surface-card",
        paddingClasses[padding],
        interactive && "transition-transform duration-300 hover:-translate-y-1",
        dashed && "border-dashed",
        overflow && "overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

type CardHeaderProps = {
  className?: string;
  children: React.ReactNode;
};

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-border px-4 py-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
