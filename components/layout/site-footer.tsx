import { Container } from "@/components/ui/section";
import { Eyebrow, Text } from "@/components/ui/typography";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Eyebrow tone="muted" tracking="normal" className="tracking-wide">
          {profile.name} · {new Date().getFullYear()}
        </Eyebrow>
        <Text variant="muted" className="max-w-md">
          {site.footer}
        </Text>
      </Container>
    </footer>
  );
}
