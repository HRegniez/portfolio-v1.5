import Image from "next/image";
import { HeroParallax } from "./_sections/hero-parallax";
import { ProjectsSection } from "./_sections/projects-section";
import { ProfileSection } from "./_sections/profile-section";
import { CompetenceSection } from "./_sections/competence-section";

export default function Home() {
  return (
    <main>
      <HeroParallax>
        <div className="flex flex-col gap-8 p-8 max-w-[1200px] mx-auto">
          <ProfileSection />
          <CompetenceSection />
          <ProjectsSection />
        </div>
      </HeroParallax>

      
    </main>
  );
}
