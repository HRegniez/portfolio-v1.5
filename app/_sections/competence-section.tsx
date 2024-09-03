import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import IconCloud from "@/components/icon-cloud"
import CompetencesParcours from "@/components/competences-parcours"
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const technologies = [
    { name: "HTML", Icon: FaHtml5 },
    { name: "CSS", Icon: FaCss3Alt },
    { name: "JS", Icon: FaJs },
    { name: "REACT", Icon: FaReact },
    { name: "NEXT JS", Icon: SiNextdotjs },
    { name: "TAILWIND", Icon: SiTailwindcss }
] as const;

const technologyColors: Record<typeof technologies[number]['name'], string> = {
    HTML: "text-orange-500",
    CSS: "text-blue-500",
    JS: "text-yellow-400",
    REACT: "text-cyan-400",
    "NEXT JS": "text-white",
    TAILWIND: "text-cyan-400"
};

const background = [
    { year: "2013", title: "A-level (équivalent Bac-S)", institution: "St Julians School - Newport, UK" },
    { year: "2014 - 2015", title: "DUT Science et Genie des materiaux", institution: "IUT Bourget du lac" },
    { year: "2021 - 2022", title: "Initiation au métier de développeur web", institution: "OpenClassrooms" },
    { year: "2023", title: "Formation Intégrateur Web", institution: "OpenClassrooms" }
]

const pastTech = [
    { name: "Vite", icon: "/icons/icons8-vite.svg", description: "Outil de build rapide pour les projets web modernes" },
    { name: "Webpack", icon: "/icons/js_webpack-icon.svg", description: "Bundler de modules JavaScript très populaire" },
    { name: "SASS/SCSS", icon: "/icons/icons8-avatar-sass.svg", description: "Préprocesseur CSS pour des styles plus puissants" },
    { name: "Redux", icon: "/icons/redux.svg", description: "Bibliothèque de gestion d'état pour applications JavaScript" },
    { name: "Git", icon: "/icons/git-icon.svg", description: "Système de contrôle de version distribué" },
    { name: "GitHub", icon: "/icons/github-icon-1.svg", description: "Plateforme de développement collaboratif basée sur Git" },
    { name: "Swagger", icon: "/icons/swagger-seeklogo.com.svg", description: "Outil pour concevoir et documenter des API REST" },
    { name: "THREE js", icon: "/icons/THREEjs.svg", description: "Bibliothèque JavaScript pour créer des graphiques 3D" },
    { name: "Node js", icon: "/icons/node-js-seeklogo.svg", description: "Environnement d'exécution JavaScript côté serveur" },
    { name: "MongoDB", icon: "/icons/mongodb-seeklogo.svg", description: "Base de données NoSQL orientée documents" },
    { name: "Express js", icon: "/icons/express-js-seeklogo.svg", description: "Framework web minimaliste pour Node.js" },
    { name: "HTML", icon: "/icons/icons8-html-5.svg", description: "Langage de balisage pour structurer le contenu web" },
    { name: "CSS", icon: "/icons/icons8-css3.svg", description: "Langage de style pour la mise en forme des pages web" },
    { name: "JS", icon: "/icons/icons8-javascript.svg", description: "Langage de programmation pour le web dynamique" },
    { name: "REACT", icon: "/icons/icons8-réagir.svg", description: "Bibliothèque JavaScript pour construire des interfaces utilisateur" },
    { name: "NEXT JS", icon: "/icons/next-js-icon-seeklogo.svg", description: "Framework React pour le rendu côté serveur" },
    { name: "TAILWIND", icon: "/icons/Tailwind_CSS_Logo.svg", description: "Framework CSS utilitaire pour un développement rapide" },
    { name: "TypeScript", icon: "/icons/icons8-typescript.svg", description: "Surensemble typé de JavaScript" },
    { name: "Prisma", icon: "/icons/icons8-prisma-orm.svg", description: "ORM moderne pour Node.js et TypeScript" },
    { name: "VS Code", icon: "/icons/icons8-vs-code.svg", description: "Éditeur de code source développé par Microsoft" },
    { name: "Figma", icon: "/icons/icons8-figma.svg", description: "Outil de conception d'interface utilisateur collaboratif" },
    { name: "Zod", icon: "/icons/zod-icon.svg", description: "Bibliothèque de validation de schéma pour TypeScript" },
    { name: "ESLint", icon: "/icons/eslint-icon.svg", description: "Outil d'analyse statique pour identifier les problèmes dans le code JavaScript" },
    { name: "PostCSS", icon: "/icons/postcss-icon.svg", description: "Outil pour transformer le CSS avec des plugins JavaScript" },
    { name: "GSAP", icon: "/icons/gsap-icon.svg", description: "Bibliothèque d'animation JavaScript professionnelle" },
    { name: "Liveblocks", icon: "/icons/liveblocks-icon.svg", description: "Plateforme pour ajouter des fonctionnalités collaboratives aux applications web" },
    // Slack, Python, Django, Mongoose, SQL
]

export const CompetenceSection = () => {
    return (
        <Card className="w-full p-0 sm:p-6">
            <CardHeader>
                <CardTitle className="text-xl">Mes compétences</CardTitle>
            </CardHeader>
            <CardContent className="md:grid grid-cols-3 p-0 sm:p-6 gap-8">
                <Card className="bg-background/50 p-0 sm:p-8 col-span-2 h-full">

                    <CardContent className="sm:grid flex items-center flex-col  grid-cols-3 gap-2 sm:gap-8 mt-8">
                        {technologies.map((tech, index) => (
                            <div key={index} className="flex flex-col w-28  items-center justify-center p-2 group relative">
                                <tech.Icon className={`w-20 h-20 mb-4 ${technologyColors[tech.name]} transition-transform duration-300 ease-in group-hover:scale-110`} />
                                <h5 className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">{tech.name}</h5>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <CompetencesParcours background={background} />
                <Card className="p-0 sm:p-6 col-span-3 h-full">
                    <CardHeader>
                        <h4 className="text-xl">Experiences</h4>
                    </CardHeader>
                    <CardContent className="w-full p-0 sm:p-6 max-w-5xl my-8 mx-auto">
                        <IconCloud icons={pastTech} />
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}