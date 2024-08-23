import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { ProfileServices } from "@/components/profile-services"
import { ProfileAboutMe } from "@/components/profile-about-me"
import Image from 'next/image'
import { MarginWrapper } from "@/components/ui/margin-wrapper"



export const ProfileSection = () => {
    return (
        <>
            <MarginWrapper>
                <Card variant="ghost">
                    <CardHeader>
                        <h2 className="text-2xl font-bold mb-4">
                            Profile
                        </h2>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-8 ">
                        <div className="flex flex-col gap-8">
                            <ProfileAboutMe />
                        </div>
                    </CardContent>
                </Card>
            </MarginWrapper>
            <ProfileServices />
        </>
    )
}