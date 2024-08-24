import { HeroOrbit } from "./hero-orbit"
import { ContactDialog } from "./contact-dialog"

export const HeroHeader = () => {
    return (
      <div className="relative z-10">
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
          <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
            Bonjour,  <br /> Je suis <span className="text-primary">Henri</span>
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
  Développeur web front-end freelance passionné, je crée des interfaces modernes avec React, Next.js et Tailwind CSS.
          </p>
        <HeroOrbit />
        <div className="absolute bottom-[-30svh] left-8">
          <ContactDialog />
        </div>
        </div>
      </div>
    );
  };