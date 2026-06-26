import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DashItem, DashList } from "@/components/ui/list";
import { Container, PageSection } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { Heading, Text } from "@/components/ui/typography";
import { site } from "@/content/site";
import { tools } from "@/content/tools";

export function ToolsSection() {
  return (
    <PageSection id="tools">
      <Container>
        <SectionLabel {...site.sections.tools} />

        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <Card key={tool.name} as="article">
              <Heading as="h3" variant="card">
                {tool.name}
              </Heading>
              <Text variant="muted" className="mt-3">
                {tool.description}
              </Text>
              <DashList className="mt-5">
                {tool.details.map((detail) => (
                  <DashItem key={detail}>{detail}</DashItem>
                ))}
              </DashList>
              <div className="mt-5 flex flex-wrap gap-3">
                {tool.links.map((link) => (
                  <Button
                    key={link.href}
                    href={link.href}
                    variant="outline"
                    external
                    className="px-4 py-2"
                  >
                    {link.label} ↗
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}
