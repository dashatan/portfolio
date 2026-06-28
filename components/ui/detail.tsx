import { Eyebrow, Subheading, Text } from "@/components/ui/typography";

type DetailBlockProps = {
  title: string;
  tone?: "muted" | "accent" | "secondary";
  className?: string;
  children: React.ReactNode;
};

export function DetailBlock({ title, tone = "muted", className, children }: DetailBlockProps) {
  return (
    <section className={className}>
      <Subheading tone={tone}>{title}</Subheading>
      <div className="mt-3 text-foreground/90">{children}</div>
    </section>
  );
}

type LabeledTextProps = {
  label: string;
  labelClassName?: string;
  className?: string;
  children: React.ReactNode;
};

export function LabeledText({ label, labelClassName, className, children }: LabeledTextProps) {
  return (
    <Text variant="muted" className={className}>
      <span className={labelClassName}>{label} </span>
      {children}
    </Text>
  );
}

type IndexLabelProps = {
  value: number;
  className?: string;
};

export function IndexLabel({ value, className }: IndexLabelProps) {
  return (
    <Eyebrow tone="muted" size="xs" tracking="normal" className={className}>
      {String(value).padStart(2, "0")}
    </Eyebrow>
  );
}
