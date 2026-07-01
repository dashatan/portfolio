import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection, SystemsSection } from "@/components/sections/hero-systems";
import { WorkSection } from "@/components/sections/work-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <SystemsSection />
      <ExperienceSection />
      <CapabilitiesSection />
      <ContactSection />
    </>
  );
}
