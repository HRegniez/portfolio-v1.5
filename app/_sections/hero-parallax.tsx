// "use client" directive indicates this is a Client Component
"use client";

// Importing necessary dependencies
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { HeroHeader } from "../../components/hero-header";

// HeroParallax component definition
export const HeroParallax = ({ children }: { children: React.ReactNode }) => {
  // Creating a ref for the scroll container
  const ref = React.useRef(null);

  // Using Framer Motion's useScroll hook to track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Configuration for spring animations
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Creating various animations based on scroll progress
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-full overflow-hidden pb-[500px] antialiased flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <HeroHeader />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          translateX,
          opacity,
        }}
        className=""
      >
        {children}
      </motion.div>
    </div>
  );
};
