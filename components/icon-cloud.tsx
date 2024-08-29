"use client";

import { useEffect, useState } from "react";
import { Cloud, ICloud } from "react-icon-cloud";
import Image from 'next/image';

const cloudProps: Omit<ICloud, "children"> = {
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
    maxSpeed: 0.015,
    minSpeed: 0.01,
  },
};

export type DynamicCloudProps = {
  icons: { name: string; icon: string }[];
};

export default function IconCloud({ icons }: DynamicCloudProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const renderedIcons = icons.map((icon, index) => (
    <a key={`${icon.name}-${index}`}  href="#" onClick={e => e.preventDefault()} title={icon.name}>
      <Image
        src={icon.icon}
        alt={`${icon.name} icon`}
        width={48}
        height={48}
        style={{ width: 'auto', height: 'auto', maxWidth: '48px', maxHeight: '48px' }}
      />
    </a>
  ));

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}
