import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { DetailBlock } from "@/components/ui/detail";
import { DashItem, DashList } from "@/components/ui/list";
import { Container, RelatedSection } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { Eyebrow, Heading, Subheading, Text } from "@/components/ui/typography";
import { ExternalLink, TextLink } from "@/components/ui/link";
import { getFeaturedProjects, getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getFeaturedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: site.projectPage.notFound };
  }

  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.featured) {
    notFound();
  }

  const related = projects
    .filter((item) => item.featured && item.slug !== project.slug)
    .slice(0, 3);

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <TextLink href="/#work" variant="back">
          {site.projectPage.backLink}
        </TextLink>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow tracking="section">{project.type}</Eyebrow>
            <Heading variant="page" className="mt-4">
              {project.name}
            </Heading>
            <Text variant="lead" className="mt-4">
              {project.tagline}
            </Text>

            <div className="mt-10 space-y-8 text-base leading-relaxed">
              <DetailBlock title={site.projectPage.problem} tone="secondary">
                {project.problem}
              </DetailBlock>

              <DetailBlock title={site.projectPage.built} tone="accent">
                {project.built}
              </DetailBlock>

              {project.approach ? (
                <DetailBlock title={site.projectPage.approach}>
                  {project.approach}
                </DetailBlock>
              ) : null}

              <DetailBlock title={site.projectPage.impact}>
                {project.impact}
              </DetailBlock>
            </div>
          </div>

          <aside className="space-y-5">
            <Card>
              <Subheading>{site.projectPage.stack}</Subheading>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item}>
                    <Tag variant="stack">{item}</Tag>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <Subheading>{site.projectPage.highlights}</Subheading>
              <DashList className="mt-4">
                {project.highlights.map((item) => (
                  <DashItem key={item}>{item}</DashItem>
                ))}
              </DashList>
            </Card>

            {project.visualNote ? (
              <Card dashed>
                <Text variant="muted">{project.visualNote}</Text>
              </Card>
            ) : null}

            {project.links?.length ? (
              <Card>
                <Subheading>{site.projectPage.links}</Subheading>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <ExternalLink
                      key={link.href}
                      href={link.href}
                      className="text-accent hover:underline"
                    >
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </Card>
            ) : null}
          </aside>
        </div>

        {related.length > 0 ? (
          <RelatedSection title={site.projectPage.relatedTitle}>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Card
                  key={item.slug}
                  as={Link}
                  href={`/projects/${item.slug}`}
                  interactive
                  padding="md"
                >
                  <Heading as="p" variant="card" className="text-lg">
                    {item.name}
                  </Heading>
                  <Text variant="muted" className="mt-2">
                    {item.tagline}
                  </Text>
                </Card>
              ))}
            </div>
          </RelatedSection>
        ) : null}
      </Container>
    </article>
  );
}
