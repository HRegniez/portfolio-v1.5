import { useState } from 'react';
import OrbitingCircles from "./orbiting-circles"
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiFramer } from "react-icons/si";

const outerOrbitData = [
    { Icon: FaReact, delay: 0, className: 'text-7xl', name: 'React' },
    { Icon: SiShadcnui, delay: 20, className: 'text-6xl', name: 'Shadcn UI' },
    { Icon: RiNextjsLine, delay: 40, className: 'text-6xl', name: 'Next.js' },
    { Icon: RiTailwindCssFill, delay: 60, className: 'text-7xl', name: 'Tailwind CSS' },
    { Icon: SiFramer, delay: 80, className: 'text-6xl', name: 'Framer Motion' },
];

const innerOrbitData = [
    { Icon: FaCss3Alt, delay: 0, className: 'text-5xl', name: 'CSS3' },
    { Icon: FaSass, delay: 20, className: 'text-4xl', name: 'Sass' },
    { Icon: FaHtml5, delay: 40, className: 'text-5xl', name: 'HTML5' },
];

export const HeroOrbit = () => {
    const [hoveredName, setHoveredName] = useState('');

    return (
        <div className="w-1 h-1 relative z-0 overflow-visible">
            {outerOrbitData.map(({ Icon, delay, className, name }, index) => (
                <OrbitingCircles
                    key={index}
                    className="absolute left-[55svw] top-[15vh] w-24 h-24"
                    duration={100}
                    delay={delay}
                    radius={240}
                >
                    <div 
                        className="relative"
                        onMouseEnter={() => setHoveredName(name)}
                        onMouseLeave={() => setHoveredName('')}
                    >
                        <Icon className={`border-none text-muted hover:text-primary ${className}`}/>
                        {hoveredName === name && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-background text-foreground text-sm rounded shadow">
                                {name}
                            </div>
                        )}
                    </div>
                </OrbitingCircles>
            ))}

            {innerOrbitData.map(({ Icon, delay, className, name }, index) => (
                <OrbitingCircles
                    key={index}
                    className="absolute left-[55svw] top-[15vh] w-24 h-24"
                    duration={60}
                    delay={delay}
                    radius={100}
                    reverse
                >
                    <div 
                        className="relative"
                        onMouseEnter={() => setHoveredName(name)}
                        onMouseLeave={() => setHoveredName('')}
                    >
                        <Icon className={`border-none text-muted hover:text-primary ${className}`}/>
                        {hoveredName === name && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-background text-foreground text-sm rounded shadow">
                                {name}
                            </div>
                        )}
                    </div>
                </OrbitingCircles>
            ))}
        </div>
    )
}