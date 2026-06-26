import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/cn";

type SectionLabelProps = {
  index: string;
  title: string;
  description?: string;
  secondaryDescription?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionLabel({
  index,
  title,
  description,
  secondaryDescription,
  className,
  titleClassName,
  descriptionClassName,
}: SectionLabelProps) {
  return (
    <div className={cn("mb-10 flex flex-col gap-3 sm:mb-12", className)}>
      <Eyebrow tracking="hero">{index}</Eyebrow>
      <Heading as="h2" variant="section" className={titleClassName}>
        {title}
      </Heading>
      {description ? (
        <Text
          variant="body"
          className={cn("max-w-2xl text-muted", descriptionClassName)}
        >
          {description}
        </Text>
      ) : null}
      {secondaryDescription ? (
        <Text variant="subtle" className="max-w-2xl">
          {secondaryDescription}
        </Text>
      ) : null}
    </div>
  );
}
