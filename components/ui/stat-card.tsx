import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/typography";
import { cn } from "@/lib/cn";

type StatCardProps = {
  label: string;
  value: string;
  valueClassName?: string;
  className?: string;
};

export function StatCard({ label, value, valueClassName, className }: StatCardProps) {
  return (
    <Card padding="sm" className={className}>
      <Eyebrow tone="muted" size="xs" tracking="normal">
        {label}
      </Eyebrow>
      <p className={cn("mt-2 font-medium", valueClassName ?? "text-xl")}>{value}</p>
    </Card>
  );
}
