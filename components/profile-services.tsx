import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDisplay, faChartLine, faWrench } from '@fortawesome/free-solid-svg-icons'
import Marquee from "./marquee"
import { MarginWrapper } from "./ui/margin-wrapper"

const servicesData = [
    {
        icon: faCode,
        title: "Développement Web",
        description: "Application personnalisée adaptée aux besoins du client."
    },
    {
        icon: faDisplay,
        title: "Multi-plateforme",
        description: "Compatible avec tous les appareils, ordinateurs de bureau, mobiles et tablettes."
    },
    {
        icon: faChartLine,
        title: "SEO",
        description: "Amélioration de la visibilité en ligne grâce à l'optimisation du code et à des améliorations stratégiques."
    },
    {
        icon: faWrench,
        title: "Maintenance Web",
        description: "Assurer un fonctionnement sans faille et une optimisation continue du code."
    }
];

export const ProfileServices = () => {
    return (
        <div>
            <MarginWrapper className="my-8">
                <h3 className="text-xl">Services</h3>
                <Marquee pauseOnHover className="my-8">
                    {servicesData.map((service, index) => (
                        <Card key={index} className="p-4 hover:bg-primary w-80 bg-muted">
                            <CardHeader className="flex flex-col items-center gap-2 p-0">
                                <FontAwesomeIcon icon={service.icon} className="text-primary w-40 h-40 my-4" />
                                <CardTitle className="text-lg">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-2">
                                <p>{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Marquee>
            </MarginWrapper>
        </div>
    )
}