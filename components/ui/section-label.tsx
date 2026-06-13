type SectionLabelProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionLabel({ index, title, description }: SectionLabelProps) {
  return (
    <div className="mb-10 flex flex-col gap-3 sm:mb-12">
      <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
        {index}
      </p>
      <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
