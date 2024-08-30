import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card"


export default function CompetencesParcours({ background }: { background: any[] }) {
    return (
    <Card className="bg-secondary h-full">
        <CardHeader>
            <h4 className="text-xl">Parcours</h4>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                {background.map((item, index) => (
                    <li key={index} className="pb-2 last:border-b-0">
                        <span className="block text-sm font-semibold">{item.year}</span>
                        <h5 className="text-base font-medium">{item.title}</h5>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </li>
                ))}
            </div>
        </CardContent>
    </Card>
    )
}