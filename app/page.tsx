import Image from "next/image";
import { HeroParallax } from "./_sections/hero-parallax";
import { ProjectsSection } from "./_sections/projects-section";
import { ProfileSection } from "./_sections/profile-section";
import { CompetenceSection } from "./_sections/competence-section";
import { MarginWrapper } from "../components/ui/margin-wrapper";

export default function Home() {
  return (
    <main>
      <HeroParallax>
        <MarginWrapper>
          <ProfileSection />
          <CompetenceSection />
          <ProjectsSection />
        </MarginWrapper>
        
      </HeroParallax>

      
    </main>
  );
}
