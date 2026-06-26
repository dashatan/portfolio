import { Eyebrow, Text } from "@/components/ui/typography";
import { cn } from "@/lib/cn";

type TileProps = {
  href: string;
  label: string;
  value: string;
  hint: string;
  external?: boolean;
  className?: string;
};

export function Tile({
  href,
  label,
  value,
  hint,
  external = false,
  className,
}: TileProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "rounded-xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40",
        className,
      )}
    >
      <Eyebrow tone="muted" size="xs" tracking="normal">
        {label}
      </Eyebrow>
      <p className="mt-3 text-sm text-accent">
        {value}
        {external ? " ↗" : ""}
      </p>
      <Text variant="caption" className="mt-3">
        {hint}
      </Text>
    </a>
  );
}
