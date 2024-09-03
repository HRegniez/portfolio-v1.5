import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProfileAboutMe = () => {
    return (
        <Card className="bg-secondary rounded-none sm:rounded-xl">
            <CardHeader>
            <CardTitle className="text-xl mb-4">A propos de moi</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 ">
                <article className="relative pl-2 col-span-2 mr-4 gap-4 h-[25svh] mb-8 pr-4">
                    <div className="flex flex-col gap-4 h-full overflow-y-scroll">
                        <p className="text-muted-foreground ">
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
                    </div>

                </article>
                <Card className="bg-background relative">
                    <div className="w-[140px] h-[140px]  lg:w-[170px] lg:h-[170px] col-span-1  overflow-hidden bg-black rounded-full absolute -top-6 -left-4 md:-top-16 md-left-10 shadow-md">
                        <Image src="/images/profile.webp" className="object-cover scale-110" alt="Henri" width={180} height={180} />
                    </div>
                    <CardContent className="flex flex-col h-full gap-2 my-4">
                        <div className='ml-28 mb-10 mt-2'>
                            <h3 className="text-xl font-bold ">Henri REGNIEZ</h3>
                            <p className="text-muted-foreground">30.07.1994</p>
                        </div>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <p className="text-foreground">Développeur web front-end</p>
                                <div className="w-[80%] h-4"></div>
                                <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground">Grenoble 38 000, France</p>
                                <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground">(+33) 06 01 21 39 13</p>
                                <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground">hregniez.dev@gmail.com</p>
                            </div>
                            <div className="text-muted-foreground transition-colors duration-300 hover:text-foreground">
                                <h4 >Langues :</h4>
                                <p > Anglais/Français: bilingue,
                                    <br />Espagnol: bases</p>
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