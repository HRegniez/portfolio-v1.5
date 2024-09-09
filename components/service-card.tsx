"use client"

import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
    title?: string | undefined;
    description?: string | undefined;
    icon?: React.ComponentType<{ active: boolean; className?: string }>;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card 
            className="p-2 sm:p-4 group hover:bg-muted w-52 sm:w-80 transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader className="flex flex-col items-center gap-1 sm:gap-2 p-0">
                {Icon && <Icon active={isHovered} className="text-muted group-hover:text-primary w-24 h-24 sm:w-40 sm:h-40 my-2 sm:my-4" />}
                <CardTitle className="text-base text-center sm:text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-1 p-2 sm:p-6 sm:pt-2">
                <p className="text-sm text-center sm:text-base">{description}</p>
            </CardContent>
        </Card>
    )
}