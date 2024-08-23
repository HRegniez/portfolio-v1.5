import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { ProfileServices } from "@/components/profile-services"
import { ProfileAboutMe } from "@/components/profile-about-me"
import Image from 'next/image'


export const ProfileSection = () => {
    return (
        <>
            <Card variant="ghost">
                <CardHeader>
                    <h2 className="text-2xl font-bold mb-4">
                        Profile
                    </h2>
                </CardHeader>
                <CardContent className="flex flex-col gap-8">
                    <ProfileAboutMe />
                    <ProfileServices />
                </CardContent>
            </Card>
        </>
    )
}