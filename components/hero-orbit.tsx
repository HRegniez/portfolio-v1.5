import OrbitingCircles from "./orbiting-circles"
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiFramer } from "react-icons/si";

export const HeroOrbit = () => {
    return (
        <div className="w-1 h-1 relative overflow-visible">
            <OrbitingCircles
            className="absolute left-[50svw] top-0 w-24 h-24 " 
            duration={100}
            delay={0}
            radius={380}
            >
                <FaReact className='border-none text-muted text-8xl hover:text-primary'/>
            </OrbitingCircles> 

            <OrbitingCircles
            className="absolute left-[50svw] top-0 w-24 h-24"
            duration={100}
            delay={20}
            radius={380}
            >
                <SiShadcnui className='border-none text-muted text-7xl hover:text-primary'/>
            </OrbitingCircles>

            <OrbitingCircles
            className="absolute left-[50svw] top-0 w-24 h-24" 
            duration={100}
            delay={40}
            radius={380}
            >
                <RiNextjsLine className='border-none text-muted text-7xl hover:text-primary'/>
            </OrbitingCircles> 

            <OrbitingCircles
            className="absolute left-[50svw] top-0 w-24 h-24" 
            duration={100}
            delay={60}
            radius={380}
            >
                <RiTailwindCssFill className='border-none text-muted text-8xl hover:text-primary'/>
            </OrbitingCircles>

            <OrbitingCircles
            className="absolute left-[50svw] top-0 w-24 h-24" 
            duration={100}
            delay={80}
            radius={380}
            >
                <SiFramer className='border-none text-muted text-7xl hover:text-primary'/>
            </OrbitingCircles>

            <OrbitingCircles
            className="absolute left-[50svw] top-0 w-24 h-24" 
            duration={60}
            delay={0}
            radius={160}
            reverse
            >
                <FaCss3Alt className='border-none text-muted text-6xl hover:text-primary'/>
            </OrbitingCircles> 

            <OrbitingCircles
            className="absolute left-[50svw] top-0 w-24 h-24" 
            duration={60}
            delay={20}
            radius={160}
            reverse
            >
                <FaSass className='border-none text-muted text-5xl hover:text-primary'/>
            </OrbitingCircles> 

            <OrbitingCircles
            className="absolute left-[50svw] top-0 w-24 h-24" 
            duration={60}
            delay={40}
            radius={160}
            reverse
            >
                <FaHtml5 className='border-none text-muted text-6xl hover:text-primary'/>
            </OrbitingCircles> 
        </div>
    )
}