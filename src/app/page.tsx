import { HeroSection } from "@/features/home/ui/HeroSection";
import { AboutSection } from "@/features/about/ui/AboutSection";
import { SkillsSection } from "@/features/skills/ui/SkillsSection";
import { ProjectsSection } from "@/features/projects/ui/ProjectsSection";
import { ContactSection } from "@/features/contact/ui/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
