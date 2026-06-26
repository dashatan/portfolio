import { Subheading } from "@/components/ui/typography";
import { cn } from "@/lib/cn";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ className, children }: ContainerProps) {
  return <div className={cn("section-shell", className)}>{children}</div>;
}

type PageSectionSpacing =
  | "default"
  | "hero"
  | "contact"
  | "detail"
  | "not-found";

const spacingClasses: Record<PageSectionSpacing, string> = {
  default: "border-b border-border py-10 px-4 sm:px-8",
  hero: "relative overflow-hidden border-b border-border py-10 bg-background-secondary",
  contact: "py-20 sm:py-28",
  detail: "py-16 sm:py-24",
  "not-found": "grid min-h-[60vh] place-items-center px-5 py-24",
};

type PageSectionProps = {
  id?: string;
  spacing?: PageSectionSpacing;
  className?: string;
  children: React.ReactNode;
};

export function PageSection({
  id,
  spacing = "default",
  className,
  children,
}: PageSectionProps) {
  return (
    <section id={id} className={cn(spacingClasses[spacing], className)}>
      {children}
    </section>
  );
}

type RelatedSectionProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function RelatedSection({
  title,
  className,
  children,
}: RelatedSectionProps) {
  return (
    <section className={cn("mt-20 border-t border-border pt-12", className)}>
      <Subheading className="mb-6">{title}</Subheading>
      {children}
    </section>
  );
}
