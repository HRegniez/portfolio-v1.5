import { useState, useEffect } from 'react';
import OrbitingCircles from "./orbiting-circles"
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiFramer } from "react-icons/si";

const outerOrbitData = [
    { Icon: FaReact, delay: 0, className: 'text-7xl sm:text-5xl', name: 'React' },
    { Icon: SiShadcnui, delay: 20, className: 'text-6xl sm:text-4xl', name: 'Shadcn UI' },
    { Icon: RiNextjsLine, delay: 40, className: 'text-6xl sm:text-4xl', name: 'Next.js' },
    { Icon: RiTailwindCssFill, delay: 60, className: 'text-7xl sm:text-5xl', name: 'Tailwind CSS' },
    { Icon: SiFramer, delay: 80, className: 'text-6xl sm:text-4xl', name: 'Framer Motion' },
];

const innerOrbitData = [
    { Icon: FaCss3Alt, delay: 0, className: 'text-5xl sm:text-3xl', name: 'CSS3' },
    { Icon: FaSass, delay: 20, className: 'text-4xl sm:text-2xl', name: 'Sass' },
    { Icon: FaHtml5, delay: 40, className: 'text-5xl sm:text-3xl', name: 'HTML5' },
];

export const HeroOrbit = () => {
    const [hoveredName, setHoveredName] = useState('');
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="w-1 h-1 relative z-0 overflow-visible">
            {outerOrbitData.map(({ Icon, delay, className, name }, index) => (
                <OrbitingCircles
                    key={index}
                    className="absolute left-[56svw] top-[10vh] sm:top-[10vh] w-24 h-24 sm:w-16 sm:h-16"
                    duration={100}
                    delay={delay}
                    radius={isSmallScreen ? 160 : 240}
                >
                    <div 
                        className="relative whitespace-nowrap overflow-visible "
                        onMouseEnter={() => setHoveredName(name)}
                        onMouseLeave={() => setHoveredName('')}
                    >
                        <Icon className={`border-none text-muted hover:text-primary hover:scale-110 transition-all duration-300 ${className}`}/>
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
                    className="absolute left-[55svw] top-[8vh] sm:top-[12vh] w-24 h-24 sm:w-16 sm:h-16"
                    duration={60}
                    delay={delay}
                    radius={isSmallScreen ? 70 : 100}
                    reverse
                >
                    <div 
                        className="relative whitespace-nowrap overflow-visible"
                        onMouseEnter={() => setHoveredName(name)}
                        onMouseLeave={() => setHoveredName('')}
                    >
                        <Icon className={`border-none text-muted hover:text-primary hover:scale-110 transition-all duration-300 ${className}`}/>
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