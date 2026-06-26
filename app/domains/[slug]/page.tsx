import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { DetailBlock } from "@/components/ui/detail";
import { DashItem, DashList } from "@/components/ui/list";
import { Callout } from "@/components/ui/panel";
import { Container, RelatedSection } from "@/components/ui/section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { TextLink } from "@/components/ui/link";
import { getDomain, productionDomains } from "@/content/domains";
import { site } from "@/content/site";

type DomainPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productionDomains.map((domain) => ({ slug: domain.slug }));
}

export async function generateMetadata({ params }: DomainPageProps) {
  const { slug } = await params;
  const domain = getDomain(slug);

  if (!domain) {
    return { title: site.domainPage.notFound };
  }

  return {
    title: domain.label,
    description: domain.context,
  };
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { slug } = await params;
  const domain = getDomain(slug);

  if (!domain) {
    notFound();
  }

  const related = productionDomains.filter((item) => item.slug !== domain.slug);

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <TextLink href="/#work" variant="back">
          {site.domainPage.backLink}
        </TextLink>

        <div className="mt-10 max-w-3xl">
          <Eyebrow tone="secondary" tracking="section">
            {domain.scope}
          </Eyebrow>
          <Heading variant="page" className="mt-4">
            {domain.label}
          </Heading>
          <Callout className="mt-4">{domain.constraints}</Callout>

          <div className="mt-10 space-y-8 text-base leading-relaxed">
            <DetailBlock title={site.domainPage.context}>
              {domain.context}
            </DetailBlock>

            <DetailBlock title={site.domainPage.focus}>
              {domain.focus}
            </DetailBlock>

            <DetailBlock title={site.domainPage.contribution} tone="accent">
              {domain.contribution}
            </DetailBlock>

            <DetailBlock title={site.domainPage.approach}>
              {domain.approach}
            </DetailBlock>

            <DetailBlock title={site.domainPage.outcomes} tone="secondary">
              <DashList>
                {domain.outcomes.map((outcome) => (
                  <DashItem key={outcome}>{outcome}</DashItem>
                ))}
              </DashList>
            </DetailBlock>

            <DetailBlock title={site.domainPage.technicalThemes}>
              <DashList>
                {domain.technicalThemes.map((theme) => (
                  <DashItem key={theme}>{theme}</DashItem>
                ))}
              </DashList>
            </DetailBlock>
          </div>
        </div>

        {related.length > 0 ? (
          <RelatedSection title={site.domainPage.relatedTitle}>
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Card
                  key={item.slug}
                  as={Link}
                  href={`/domains/${item.slug}`}
                  interactive
                  padding="md"
                >
                  <Heading as="p" variant="card" className="text-lg">
                    {item.label}
                  </Heading>
                  <Text variant="muted" className="mt-2">
                    {item.context}
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
