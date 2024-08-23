import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProfileAboutMe = () => {
    return (
        <Card className="bg-muted hover:bg-muted-foreground">
            <CardHeader>
            <CardTitle className="text-xl mb-4">A propos de moi</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4 ">
                <article className="flex flex-col gap-4 justify-between h-[40svh]">

                <p className="text-foreground">
                    Bonjour! Je suis Henri, <br /> 
                    un franco-britannique passionné par le développement web.
                </p>
                <p className="text-muted-foreground">
                    Passionné par les défis logiques,<br />
                    à la recherche de projets innovants.
                </p>
                </article>
                <div className="w-[200px] h-[200px] bg-muted-foreground rounded-full">
                    <Image src="/images/profile.png" alt="Henri" width={400} height={400} />
                </div>
            </CardContent>
            
        </Card>
    )
}