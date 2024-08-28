"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import Image from 'next/image';

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.02, // Reduced from 0.04 to 0.02
    minSpeed: 0.01, // Reduced from 0.02 to 0.01
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon | string, theme: string) => {
  if (typeof icon === 'string') {
    return (
      <Image
        src={icon}
        alt="Icon"
        width={42}
        height={42}
        style={{ filter: 'none' }} // Remove any filters that might affect color
      />
    );
  }

  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  icons: { name: string; icon: string }[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ icons }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const slugMap: { [key: string]: string } = {
      'SASS/SCSS': 'sass',
      'THREE js': 'threedotjs',
      'Node js': 'nodejs',
      'Express js': 'express',
      'NEXT JS': 'nextdotjs',
      'JS': 'javascript',
      'REACT': 'react',
      'TAILWIND': 'tailwindcss',
      'VS Code': 'visualstudiocode',
      'GitHub': 'github',
      'MongoDB': 'mongodb',
      'TypeScript': 'typescript',
      'Prisma': 'prisma',
      'Figma': 'figma',
      'Vite': 'vite',
      'Webpack': 'webpack',
      'Redux': 'redux',
      'Git': 'git',
      'Swagger': 'swagger',
      'HTML': 'html5',
      'CSS': 'css3',
      'Zod': 'zod',
      'ESLint': 'eslint',
      'PostCSS': 'postcss',
      'GSAP': 'greensock',
      'Liveblocks': 'liveblocks',
    };

    const iconSlugs = icons.map(icon => slugMap[icon.name] || icon.name.toLowerCase().replace(/\s/g, ''));
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [icons]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return icons.map((icon) => {
      const slugMap: { [key: string]: string } = {
        'SASS/SCSS': 'sass',
        'THREE js': 'threedotjs',
        'Node js': 'nodejs',
        'Express js': 'express',
        'NEXT JS': 'nextdotjs',
        'JS': 'javascript',
        'REACT': 'react',
        'TAILWIND': 'tailwindcss',
        'VS Code': 'visualstudiocode',
        'GitHub': 'github',
        'MongoDB': 'mongodb',
        'TypeScript': 'typescript',
        'Prisma': 'prisma',
        'Figma': 'figma',
      };
      
      const slug = slugMap[icon.name] || icon.name.toLowerCase().replace(/\s/g, '');
      const simpleIcon = data.simpleIcons[slug];
      
      if (!simpleIcon) {
        console.warn(`Icon not found for: ${icon.name} (slug: ${slug})`);
        return renderCustomIcon(icon.icon, theme || "dark");
      }
      
      return renderCustomIcon(simpleIcon, theme || "dark");
    }).filter(Boolean);
  }, [data, theme, icons]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
