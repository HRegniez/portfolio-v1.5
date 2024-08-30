import { HeroOrbit } from "./hero-orbit"
import { ContactDialog } from "./contact-dialog"
import HyperText from "./hyper-text";

export const HeroHeader = () => {
    return (
      <div className="relative z-10">
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
          <h1 className="sr-only ">
            Bonjour, Je suis Henri
          </h1>
          <div className="flex flex-col gap-2 w-fit">
            <HyperText className="text-2xl md:text-7xl font-bold" animateOnLoad={false} text="Bonjour," />
          </div>
          <div className="flex items-center gap-2">
            <HyperText className="text-2xl md:text-7xl font-bold" animateOnLoad={false} text="Je suis" />
            <HyperText className="text-primary text-2xl md:text-7xl font-bold" text="Henri" />
          </div>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
  Développeur web front-end freelance passionné, je crée des interfaces modernes aveqc React, Next.js et Tailwind CSS.
          </p>
        <HeroOrbit />
        <div className="absolute bottom-[-30svh] left-8">
          <ContactDialog />
        </div>
        </div>
      </div>
    );
  };