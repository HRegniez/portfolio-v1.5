"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../components/ui/card"
import Image from "next/image"
import { Button } from "../../components/ui/button"

const projects = [
    {
        "id": 1,
        "title": "Data-React",
        "imgLink": "/images/dataReact.webp",
        "description": "Ce site web est le résultat d'un crash cours gratuit pour améliorer mes compétences en React et Tailwind.",
        "siteLink": "https://hregniez.github.io/data_react_tailwind/",
        "githubLink": "https://github.com/HRegniez/data_react_tailwind",
        "techs": ["REACT", "TAILWIND"]
    },
    {
        "id": 2,
        "title": "Atelier Tour à Tour",
        "imgLink": "/images/tourTour.webp",
        "description": "Site Web realisé pour un artisant de l'affutage et du remoulage",
        "siteLink": "https://www.ateliertouratour.fr/",
        "githubLink": "https://github.com/HRegniez/Atelier_tour_a_tour_v2/tree/master/front",
        "techs": ["HTML", "REACT", "SASS"]
    },
    {
        "id": 3,
        "title": "SunnySide",
        "imgLink": "/images/sunnySide.webp",
        "description": "Cette page web était un défi de Frontend Mentor.",
        "siteLink": "https://hregniez.github.io/sunnyside-agency-landing-page-main/",
        "githubLink": "https://github.com/HRegniez/sunnyside-agency-landing-page-main",
        "techs": ["HTML", "JS", "SCSS"]
    },
    {
        "id": 4,
        "title": "Oh My Food",
        "imgLink": "/images/ohMyFood.webp",
        "description": "Ce projet a été codé pour améliorer mes compétences en animation de sites web.",
        "siteLink": "https://hregniez.github.io/OC---OhMyFood/",
        "githubLink": "https://github.com/HRegniez/OC---OhMyFood",
        "techs": ["HTML", "SASS"]
    },
    {
        "id": 5,
        "title": "Mini-jeu - Shooter",
        "imgLink": "/images/shooter.webp",
        "description": "J'ai décidé de coder ce simple jeu de tir pour en savoir plus sur la programmation JavaScript tout en m'amusant.",
        "siteLink": "https://hregniez.github.io/simple_canvas_game/",
        "githubLink": "https://github.com/HRegniez/simple_canvas_game",
        "techs": ["HTML", "JS"]
    },
    {
        "id": 6,
        "title": "3D - Materials",
        "imgLink": "/images/3dMaterials.webp",
        "description": "Ce projet a été codé dans le cadre de mon cours de Three.js, cette leçon visait à apprendre les différents matériaux.",
        "siteLink": "http://threejsmaterials.hregniez.com/",
        "githubLink": "https://github.com/HRegniez/11-materials",
        "techs": ["HTML", "JS", "THREE.JS"]
    },
    {
        "id": 7,
        "title": "Snap Landing page",
        "imgLink": "/images/snapLanding.webp",
        "description": "Page de destination réalisée dans l'idée d'améliorer mes compétences.",
        "siteLink": "https://hregniez.github.io/intro-section-with-dropdown-navigation-main/",
        "githubLink": "https://github.com/HRegniez/intro-section-with-dropdown-navigation-main",
        "techs": ["HTML", "SASS", "JS"]
    },
    {
        "id": 8,
        "title": "Sign-up form",
        "imgLink": "/images/signUpForm.webp",
        "description": "J'ai décidé de relever ce défi pour en savoir plus sur les formulaires et comment les gérer en utilisant JavaScript",
        "siteLink": "https://hregniez.github.io/intro-component-with-signup-form-master/",
        "githubLink": "https://github.com/HRegniez/intro-component-with-signup-form-master",
        "techs": ["HTML", "JS", "SCSS"]
    },
    {
        "id": 9,
        "title": "Interactive rating",
        "imgLink": "/images/interactiveRating.webp",
        "description": "J'ai réalisé ce petit projet pour m'entraîner à gérer les interactions utilisateur et à mettre à jour le DOM",
        "siteLink": "https://hregniez.github.io/interactive-rating-component-main/",
        "githubLink": "https://github.com/HRegniez/interactive-rating-component-main/blob/main/README.md",
        "techs": ["HTML", "JS", "SCSS"]
    },
    {
        "id": 10,
        "title": "Nina Carducci",
        "imgLink": "/images/ninaCarducci.webp",
        "description": "Site web de l'artiste où la tâche consistait à améliorer le temps de chargement et le SEO.",
        "siteLink": "https://hregniez.github.io/08_NinaCarducci/",
        "githubLink": "https://github.com/HRegniez/08_NinaCarducci/",
        "techs": ["HTML", "JS"]
    },
    {
        "id": 11,
        "title": "Composant - Expenses chart",
        "imgLink": "/images/expensesChart.webp",
        "description": "Défi realisé pour m'habituer à travailler avec des fichiers de données JSON et pour améliorer mes compétences en algorithme.",
        "siteLink": "https://hregniez.github.io/expenses-chart-component-main/",
        "githubLink": "https://github.com/HRegniez/expenses-chart-component-main",
        "techs": ["HTML", "JS", "SASS", "JSON"]
    }
]

export const ProjectsSection = () => {
    const [visibleProjects, setVisibleProjects] = useState(4);

    const loadMoreProjects = () => {
        setVisibleProjects((prev) => Math.min(prev + 4, projects.length));
    };

    return (
        <Card className="bg-muted my-16">
            <CardHeader >
                <h2 className="text-2xl font-bold">
                    Projets
                </h2>
            </CardHeader>
            <CardContent>
                <div className="md:grid grid-cols-2 gap-4 ">
                    {projects.slice(0, visibleProjects).map((project) => (
                        <Card key={project.id} className="w-full h-96 bg-primary sm:my-8 rounded-lg shadow-lg overflow-hidden relative mb-4 md:mb-0 group hover:scale-[1.02] transition-transform duration-1000 ease-in-out">
                            <CardContent className="relative p-0 h-full flex flex-col justify-end">
                                <div className="absolute inset-0 transition-transform duration-300 ease-in group-hover:scale-105">
                                    <Image 
                                        src={project.imgLink} 
                                        alt={project.title} 
                                        fill
                                        style={{objectFit: "cover"}}
                                    />
                                </div>
                                <div className="relative inset-0 bg-black bg-opacity-70 p-4 transition-all duration-300 ease-out h-30 translate-y-10 transform group-hover:translate-y-0">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <p className="text-sm w-[75%] text-white mt-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">{project.description}</p>
                                </div>
                                <Button className="absolute bottom-0 right-0 p-2 m-4">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        Github
                                    </a>
                                </Button>
                                <div className="flex absolute top-0 right-0 mt-2">
                                    {project.techs.map((tech) => (
                                        <span key={tech} className="mr-2 text-xs bg-white text-black px-2 py-1 rounded">{tech}</span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="p-0">
                                <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="w-full h-full absolute top-0 left-0 z-10">
                                    <span className="sr-only">View project</span>
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                {visibleProjects < projects.length && (
                    <div className="mt-6 text-center">
                        <Button onClick={loadMoreProjects}>
                            Charger plus
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}