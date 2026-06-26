import { Button } from "@/components/ui/button";
import { PageSection } from "@/components/ui/section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <PageSection spacing="not-found">
      <div className="max-w-md text-center">
        <Eyebrow tracking="hero">404</Eyebrow>
        <Heading as="h1" variant="section" className="mt-4 max-w-none text-3xl">
          Route not found
        </Heading>
        <Text variant="muted" className="mt-3">
          The page you requested does not exist in this system map.
        </Text>
        <Button href="/" variant="outline" className="mt-8">
          Return home
        </Button>
      </div>
    </PageSection>
  );
}
