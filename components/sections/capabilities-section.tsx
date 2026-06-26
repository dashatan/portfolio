import { Card } from "@/components/ui/card";
import { Container, PageSection } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { Tag } from "@/components/ui/tag";
import { Eyebrow, Text } from "@/components/ui/typography";
import { capabilities } from "@/content/capabilities";
import { site } from "@/content/site";

export function CapabilitiesSection() {
  return (
    <PageSection id="capabilities">
      <Container>
        <SectionLabel {...site.sections.capabilities} />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((group) => (
            <Card key={group.title}>
              <Eyebrow tracking="wide">{group.title}</Eyebrow>
              <Text variant="muted" className="mt-3">
                {group.description}
              </Text>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag variant="pill">{item}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}
