import { HeroOrbit } from "./hero-orbit"
import { ContactDialog } from "./contact-dialog"
import HyperText from "./hyper-text";

export const HeroHeader = () => {
    return (
      <div className="relative z-10">
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full h-[80svh] left-0 top-0">
          <h1 className="sr-only ">
            Bonjour, Je suis Henri
          </h1>
          <div className="flex flex-col gap-2 w-fit">
            <p className="text-2xl md:text-7xl font-bold">Bonjour, je suis</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-2xl md:text-7xl font-bold" >Je suis</p>
            <HyperText className="text-primary text-2xl md:text-7xl font-bold" text="Henri" />
          </div>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            <span className="text-primary font-bold">Développeur web</span> front-end freelance passionné, je crée des interfaces modernes avec React, Next.js et Tailwind CSS.
          </p>
          <div className="absolute bottom-8 right-0 p-4 w-full">
            <p className="text-foreground text-sm sm:text-base mt-auto text-end ml-auto mb-2 sm:mr-16">
                Passionné par les défis logiques,<br />
                à la recherche de projets innovants.
            </p>
          </div>
        <HeroOrbit />
        <div className="absolute -bottom-4 left-8">
          <ContactDialog />
        </div>
        </div>
      </div>
    );
  };