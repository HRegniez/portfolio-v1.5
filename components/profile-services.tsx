import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDisplay, faChartLine, faWrench, faMobileAlt, faTabletAlt, faSearch, faCheckCircle, faHeadset, faRocket } from '@fortawesome/free-solid-svg-icons'
import Marquee from "./marquee"
import { MarginWrapper } from "./ui/margin-wrapper"

const servicesData = [
    {
        icon: faCode,
        title: "Développement Web",
        description: "Création de sites web personnalisés avec React et Tailwind CSS."
    },
    {
        icon: faDisplay,
        title: "Multi-plateforme",
        description: "Développement cross-browser compatible avec tous les appareils."
    },
    {
        icon: faMobileAlt,
        title: "Mobile-first",
        description: "Approche mobile-first pour une expérience optimale sur tous les écrans."
    },
    {
        icon: faTabletAlt,
        title: "Responsive Design",
        description: "Conception adaptative pour une compatibilité parfaite sur tous les appareils."
    },
    {
        icon: faSearch,
        title: "Optimisation SEO",
        description: "Amélioration de la visibilité en ligne et respect des normes W3C."
    },
    {
        icon: faWrench,
        title: "Support et Maintenance",
        description: "Assurer un fonctionnement optimal et une mise à jour continue du site."
    },
    {
        icon: faRocket,
        title: "Animations et Performance",
        description: "Animations fluides et optimisation des performances web."
    }
];

export const ProfileServices = () => {
    return (
        <div>
            <MarginWrapper className="my-8">
                <h3 className="text-xl">Services</h3>
                <Marquee pauseOnHover className="my-8">
                    {servicesData.map((service, index) => (
                        <Card key={index} className="p-4 group hover:bg-muted w-80">
                            <CardHeader className="flex flex-col items-center gap-2 p-0">
                                <FontAwesomeIcon icon={service.icon} className="text-muted group-hover:text-primary w-40 h-40 my-4" />
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