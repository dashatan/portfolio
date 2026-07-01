import { GridField } from "@/components/effects/grid-field";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DemoDataTable } from "@/components/ui/demo-data-table";
import { BulletItem, BulletList, DotList, DotListItem } from "@/components/ui/list";
import { Container, PageSection } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { StatCard } from "@/components/ui/stat-card";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { profile } from "@/content/profile";
import { systems } from "@/content/systems";

export function HeroSection() {
  return (
    <PageSection id="intro" spacing="hero">
      <GridField />
      <div className="scanline pointer-events-none absolute inset-0 opacity-40" />

      <Container className="relative">
        <div className="fade-up flex flex-col gap-10">
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <Eyebrow tone="accent" size="md" tracking="tight">
                {profile.roleLabel}
              </Eyebrow>
              <Heading variant="hero">{profile.headline}</Heading>
              <Text variant="lead" className="max-w-3xl">
                {profile.intro}
              </Text>
              <Text variant="subtle" className="max-w-3xl">
                {profile.extendedIntro}
              </Text>
            </div>

            <div className="space-y-4">
              <Card>
                <Eyebrow tone="muted" tracking="section">
                  {profile.hero.howIWork}
                </Eyebrow>
                <ul className="mt-4 space-y-4">
                  {profile.principles.map((principle) => (
                    <li key={principle.title}>
                      <Text as="p" variant="muted" className="font-medium text-foreground">
                        {principle.title}
                      </Text>
                      <Text variant="muted" className="mt-1">
                        {principle.body}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="grid grid-cols-2 gap-3">
                {profile.stats.map((stat) => (
                  <StatCard key={stat.label} label={stat.label} value={stat.value} />
                ))}
              </div>
            </div>
          </div>

          <Card>
            <Eyebrow tone="muted" tracking="section">
              {profile.hero.coreSkills}
            </Eyebrow>
            <BulletList className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {profile.skills.map((item) => (
                <BulletItem key={item} tone="secondary">
                  {item}
                </BulletItem>
              ))}
            </BulletList>
          </Card>

          <Card>
            <Eyebrow tone="muted" tracking="section">
              {profile.hero.focusAreas}
            </Eyebrow>
            <BulletList className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {profile.workingStyle.map((item) => (
                <BulletItem key={item} tone="secondary">
                  {item}
                </BulletItem>
              ))}
            </BulletList>
          </Card>

          <div className="flex flex-wrap gap-3">
            {profile.hero.cta.map((link, index) => (
              <Button
                key={link.href}
                href={link.href}
                variant={index === 0 ? "primary" : "secondary"}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export function SystemsSection() {
  return (
    <PageSection id="systems">
      <Container>
        <SectionLabel {...systems.header} />

        <div className="grid gap-6">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {systems.metrics.map((metric) => (
              <StatCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                valueClassName="text-2xl"
              />
            ))}
          </div>

          <Card>
            <Text variant="muted" className="max-w-4xl">
              {systems.platformDescription}
            </Text>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {systems.pillars.map((pillar) => (
              <Card key={pillar.title}>
                <Text as="p" variant="muted" className="font-medium text-foreground">
                  {pillar.title}
                </Text>
                <Text variant="muted" className="mt-2">
                  {pillar.description}
                </Text>
                <DotList className="mt-4">
                  {pillar.items.map((item) => (
                    <DotListItem key={item}>{item}</DotListItem>
                  ))}
                </DotList>
              </Card>
            ))}
          </div>

          <DemoDataTable {...systems.demo} />
        </div>
      </Container>
    </PageSection>
  );
}
