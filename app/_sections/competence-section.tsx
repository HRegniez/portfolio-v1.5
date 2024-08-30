import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import IconCloud from "@/components/icon-cloud"
import CompetencesParcours from "../../components/competences-parcours"




const technologies = [
    { name: "HTML", icon: "/icons/icons8-html-5.svg" },
    { name: "CSS", icon: "/icons/icons8-css3.svg" },
    { name: "JS", icon: "/icons/icons8-javascript.svg" },
    { name: "REACT", icon: "/icons/icons8-réagir.svg" },
    { name: "NEXT JS", icon: "/icons/next-js-icon-seeklogo.svg" },
    { name: "TAILWIND", icon: "/icons/Tailwind_CSS_Logo.svg" }
]

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
        <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-xl">Mes compétences</CardTitle>
                    </CardHeader>
                    <CardContent className="md:grid grid-cols-3 gap-8">
                        <Card className=" col-span-2 h-full">
                            <CardHeader>
                                <h4 className="text-xl">J&apos;aime travailler avec</h4>
                            </CardHeader>
                            <CardContent className="grid grid-cols-3 gap-4">
                                {technologies.map((tech, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center p-2 h-40">
                                        <Image 
                                            src={tech.icon} 
                                            alt={`${tech.name} icon`} 
                                            width={80} 
                                            height={80}
                                            style={{ width: 'auto', height: 'auto', maxWidth: '80px', maxHeight: '80px' }}
                                        />
                                        <h5 className="mt-2 text-sm">{tech.name}</h5>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <CompetencesParcours background={background} />
                        <Card className=" col-span-3 h-full">
                            <CardHeader>
                                <h4 className="text-xl">Technologies que j&apos;ai utilisées</h4>
                            </CardHeader>
                            <CardContent className="flex w-full justify-between gap-8 max-w-5xl my-8 mx-auto">
                                <IconCloud icons={pastTech} />
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
    )
}