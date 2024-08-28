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
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
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
    const iconSlugs = icons.map(icon => {
      // Create a mapping for special cases
      const slugMap: { [key: string]: string } = {
        'SASS/SCSS': 'sass',
        'THREE js': 'threedotjs',
        'Node js': 'nodedotjs',
        'Express js': 'express',
      };
      
      // Use the mapping if available, otherwise use a default slug
      const slug = slugMap[icon.name] || icon.name.toLowerCase().replace(/\s/g, '');
      return slug;
    });
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [icons]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return icons.map((icon) => {
      const slugMap: { [key: string]: string } = {
        'SASS/SCSS': 'sass',
        'THREE js': 'threedotjs',
        'Node js': 'nodedotjs',
        'Express js': 'express',
      };
      
      const slug = slugMap[icon.name] || icon.name.toLowerCase().replace(/\s/g, '');
      const simpleIcon = data.simpleIcons[slug];
      
      if (!simpleIcon) {
        console.warn(`Icon not found for: ${icon.name}`);
      }
      
      return simpleIcon ? renderCustomIcon(simpleIcon, theme || "light") : null;
    }).filter(Boolean);
  }, [data, theme, icons]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
