import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IndexLabel, LabeledText } from "@/components/ui/detail";
import { DashItem, DashList } from "@/components/ui/list";
import { GridOverlay, VisualNote } from "@/components/ui/panel";
import { Container, PageSection } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { Tag } from "@/components/ui/tag";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { ExternalLink, TextLink } from "@/components/ui/link";
import { productionDomains } from "@/content/domains";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";
import type { ProductionDomain, Project } from "@/content/types";

function PublicProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card
      as="article"
      padding="none"
      interactive
      overflow
      className={`group flex h-full flex-col`}
    >
      <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-[linear-gradient(135deg,rgba(94,234,212,0.08),rgba(251,191,36,0.05))]">
        <GridOverlay />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-3">
            <Eyebrow tone="muted" size="xs" tracking="wide">
              {project.type}
            </Eyebrow>
            {project.flagship ? <Badge variant="solid">{site.work.flagship}</Badge> : null}
          </div>
          <div>
            <Heading as="p" variant="card-lg">
              {project.name}
            </Heading>
            <Text variant="muted" className="mt-1">
              {project.tagline}
            </Text>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-3">
          <LabeledText label={site.work.problem} labelClassName="text-accent-secondary">
            {project.problem}
          </LabeledText>
          <LabeledText label={site.work.built} labelClassName="text-accent">
            {project.built}
          </LabeledText>
          <LabeledText label={site.work.impact} labelClassName="text-foreground/85">
            {project.impact}
          </LabeledText>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((item) => (
            <Tag key={item} variant="mono">
              {item}
            </Tag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-4">
            <TextLink href={`/projects/${project.slug}`} className="group-hover:opacity-80">
              {site.work.caseStudy}
            </TextLink>
            {project.liveDemo ? (
              <ExternalLink href={project.liveDemo}>{site.work.liveDemo}</ExternalLink>
            ) : null}
            {project.links?.map((link) => (
              <ExternalLink key={link.href} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
          <IndexLabel value={index + 1} />
        </div>
      </div>
    </Card>
  );
}

function DomainCard({ domain }: { domain: ProductionDomain }) {
  return (
    <Card as="article" className="flex h-full flex-col">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <Eyebrow tone="secondary" size="xs" tracking="wide">
          {domain.scope}
        </Eyebrow>
        <Badge variant="outline" title={domain.constraints}>
          {site.work.nda}
        </Badge>
      </div>

      <Heading as="h3" variant="card" className="mt-4 tracking-tight">
        {domain.label}
      </Heading>
      <Text variant="muted" className="mt-3">
        {domain.context}
      </Text>
      <Text className="mt-4">{domain.focus}</Text>
      <LabeledText label={site.work.myRole} labelClassName="text-accent" className="mt-4">
        {domain.contribution}
      </LabeledText>

      <DashList className="mt-5">
        {domain.outcomes.slice(0, 3).map((outcome) => (
          <DashItem key={outcome} tone="secondary" size="sm">
            {outcome}
          </DashItem>
        ))}
      </DashList>

      <ul className="mt-5 flex flex-wrap gap-2">
        {domain.technicalThemes.map((theme) => (
          <li key={theme}>
            <Tag variant="pill-muted">{theme}</Tag>
          </li>
        ))}
      </ul>

      <TextLink href={`/domains/${domain.slug}`} className="mt-auto pt-6">
        {site.work.domainOverview}
      </TextLink>
    </Card>
  );
}

export function WorkSection() {
  const publicProjects = getFeaturedProjects();

  return (
    <PageSection id="work">
      <Container className="space-y-20">
        <div>
          <SectionLabel {...site.sections.publicWork} />

          <div className="grid gap-5 md:grid-cols-2">
            {publicProjects.map((project, index) => (
              <PublicProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>

        <div>
          <SectionLabel {...site.sections.productionDomains} />

          <div className="grid gap-5 lg:grid-cols-3">
            {productionDomains.map((domain) => (
              <DomainCard key={domain.slug} domain={domain} />
            ))}
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
