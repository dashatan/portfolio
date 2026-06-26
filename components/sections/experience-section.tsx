import { BulletItem, BulletList } from "@/components/ui/list";
import { Container, PageSection } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { Heading, Text } from "@/components/ui/typography";
import { experience } from "@/content/experience";
import { site } from "@/content/site";

export function ExperienceSection() {
  return (
    <PageSection id="experience">
      <Container>
        <SectionLabel {...site.sections.experience} />

        <div className="relative space-y-0">
          <div className="absolute top-2 bottom-2 left-[7px] hidden w-px bg-border sm:block" />

          {experience.map((entry) => (
            <article
              key={`${entry.company}-${entry.period}`}
              className="relative grid gap-4 border-b border-border py-8 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <div className="relative sm:pl-8">
                <span className="absolute top-1.5 left-0 hidden h-3.5 w-3.5 rounded-full border border-accent bg-background sm:block" />
                <Text as="p" className="font-mono text-xs tracking-wide text-accent">
                  {entry.period}
                </Text>
                <Text variant="muted" className="mt-2">
                  {entry.location}
                </Text>
              </div>

              <div>
                <Heading as="h3" variant="card">
                  {entry.title}
                </Heading>
                <Text variant="muted" className="mt-1">
                  {entry.company}
                </Text>
                <Text className="mt-4 max-w-3xl">{entry.summary}</Text>
                <BulletList className="mt-5">
                  {entry.highlights.map((highlight) => (
                    <BulletItem key={highlight} className="text-muted">
                      {highlight}
                    </BulletItem>
                  ))}
                </BulletList>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}
