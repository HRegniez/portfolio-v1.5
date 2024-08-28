import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import IconCloud from "@/components/icon-cloud"



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
    { name: "Vite", icon: "/icons/icons8-vite.svg" },
    { name: "Webpack", icon: "/icons/js_webpack-icon.svg" },
    { name: "SASS/SCSS", icon: "/icons/icons8-avatar-sass.svg" },
    { name: "Redux", icon: "/icons/redux.svg" },
    { name: "Git", icon: "/icons/git-icon.svg" },
    { name: "GitHub", icon: "/icons/github-icon-1.svg" },
    { name: "Swagger", icon: "/icons/swagger-seeklogo.com.svg" },
    { name: "THREE js", icon: "/icons/THREEjs.svg" },
    { name: "Node js", icon: "/icons/node-js-seeklogo.svg" },
    { name: "MongoDB", icon: "/icons/mongodb-seeklogo.svg" },
    { name: "Express js", icon: "/icons/express-js-seeklogo.svg" },
    { name: "HTML", icon: "/icons/icons8-html-5.svg" },
    { name: "CSS", icon: "/icons/icons8-css3.svg" },
    { name: "JS", icon: "/icons/icons8-javascript.svg" },
    { name: "REACT", icon: "/icons/icons8-réagir.svg" },
    { name: "NEXT JS", icon: "/icons/next-js-icon-seeklogo.svg" },
    { name: "TAILWIND", icon: "/icons/Tailwind_CSS_Logo.svg" },
    { name: "TypeScript", icon: "/icons/icon8-typescript.svg" },
    { name: "Prisma", icon: "/icons/icon8-prisma-orm.svg" },
    { name: "VS Code", icon: "/icons/icon8-vs-code.svg" },
    { name: "Figma", icon: "/icons/icon8-figma.svg" },
    { name: "Zod", icon: "/icons/zod-icon.svg" },
    { name: "ESLint", icon: "/icons/eslint-icon.svg" },
    { name: "PostCSS", icon: "/icons/postcss-icon.svg" },
    { name: "GSAP", icon: "/icons/gsap-icon.svg" },
    { name: "Liveblocks", icon: "/icons/liveblocks-icon.svg" },
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
                                        <Image src={tech.icon} alt={`${tech.name} icon`} width={80} height={80} />
                                        <h5 className="mt-2 text-sm">{tech.name}</h5>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className="bg-secondary h-full">
                            <CardHeader>
                                <h4 className="text-xl">Parcours</h4>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {background.map((item, index) => (
                                        <li key={index} className="border-b pb-2 last:border-b-0">
                                            <span className="block text-sm font-semibold">{item.year}</span>
                                            <h5 className="text-base font-medium">{item.title}</h5>
                                            <p className="text-sm text-muted-foreground">{item.institution}</p>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className=" col-span-3 h-full">
                            <CardHeader>
                                <h4 className="text-xl">Technologies que j&apos;ai utilisées</h4>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-8 max-w-5xl my-8 mx-auto">
                                <IconCloud icons={pastTech} />
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
    )
}