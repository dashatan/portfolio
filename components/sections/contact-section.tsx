import { Card } from "@/components/ui/card";
import { GridPanel } from "@/components/ui/panel";
import { Container, PageSection } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { Tile } from "@/components/ui/tile";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function ContactSection() {
  const { contact: contactSection } = site.sections;
  const { email, github, linkedin } = site.contact.channels;

  return (
    <PageSection id="contact" spacing="contact">
      <Container>
        <Card padding="none" overflow>
          <GridPanel variant="header">
            <SectionLabel
              {...contactSection}
              className="mb-0 sm:mb-0"
              titleClassName="mt-4"
            />
          </GridPanel>

          <div className="grid gap-4 px-6 py-8 sm:grid-cols-3 sm:px-10">
            <Tile
              href={`mailto:${profile.contact.email}`}
              label={email.label}
              value={profile.contact.email}
              hint={email.hint}
            />
            <Tile
              href={profile.contact.github}
              label={github.label}
              value={github.display}
              hint={github.hint}
              external
            />
            <Tile
              href={profile.contact.linkedin}
              label={linkedin.label}
              value={linkedin.display}
              hint={linkedin.hint}
              external
            />
          </div>
        </Card>
      </Container>
    </PageSection>
  );
}
