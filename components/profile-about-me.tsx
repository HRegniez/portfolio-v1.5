import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProfileAboutMe = () => {
    return (
        <Card className="bg-secondary">
            <CardHeader>
            <CardTitle className="text-xl mb-4">A propos de moi</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4 ">
                <article className="flex flex-col col-span-2 pl-2 mr-4 gap-4 h-[40svh] pr-4">
                <p className="text-muted-foreground">
                    Bonjour ! Je suis <strong className="text-foreground">Henri</strong>, développeur web franco-britannique <strong className="text-foreground">passionné</strong> par les solutions web innovantes.
                </p>
                <p className="text-muted-foreground">
                    Ayant vécu 10 ans en <strong className="text-foreground">UK</strong>, j&apos;ai découvert le code au collège et obtenu mon <strong className="text-foreground">A-level</strong>, je suis ensuite revenu en France pour étudier les sciences et le génie des matériaux.
                </p>
                <p className="text-muted-foreground">
                    Après des années dans le bâtiment, je suis revenu à ma passion pour l&apos;informatique. J&apos;ai depuis appris le <strong className="text-foreground">HTML</strong>, <strong className="text-foreground">CSS</strong>, <strong className="text-foreground">JavaScript</strong>, <strong className="text-foreground">SCSS/SASS</strong>, <strong className="text-foreground">React</strong>, <strong className="text-foreground">Tailwind CSS</strong> et <strong className="text-foreground">TypeScript</strong>.
                </p>
                <p className="text-muted-foreground">
                    Aujourd&apos;hui, je me spécialise dans <strong className="text-foreground">Next.js</strong> et <strong className="text-foreground">Shadcn-UI</strong> pour le front-end, et j&apos;explore <strong className="text-foreground">THREE.js</strong> pour la 3D, avec l&apos;objectif de créer des interfaces élégantes et performantes.
                </p>
                <p className="text-foreground mt-auto ml-auto mb-2 mr-16">
                    Passionné par les défis logiques,<br />
                    à la recherche de projets innovants.
                </p>
                </article>
                <Card className="bg-background relative">
                    <div className="w-[150px] col-span-1 h-[150px] bg-black rounded-full absolute -top-10 -left-10">
                        <Image src="/images/profile.png" alt="Henri" width={400} height={400} />
                    </div>
                    <CardContent className="flex flex-col h-full gap-2 my-4">
                        <div className='ml-24 mb-10 mt-2'>
                            <h3 className="text-xl font-bold ">Henri REGNIEZ</h3>
                            <p className="text-muted-foreground">30.07.1994</p>
                        </div>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <p className="text-muted-foreground">Développeur web front-end</p>
                                <div className="w-[80%] h-4"></div>
                                <p className="text-muted-foreground">Grenoble 38 000, France</p>
                                <p className="text-muted-foreground">(+33) 06 01 21 39 13</p>
                                <p className="text-muted-foreground">hregniez.dev@gmail.com</p>
                            </div>
                            <div>
                                <h4 className="">Langues :</h4>
                                <p className="text-muted-foreground"> <strong>Anglais/Français:</strong> bilingue,
                                    <br /> <strong>Espagnol:</strong> bases</p>
                            </div>
                        </div>
                        
                        

                        <div className="mt-2">

                        </div>
                    </CardContent>
                </Card>
            </CardContent>
            
        </Card>
    )
}