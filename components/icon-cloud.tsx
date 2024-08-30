"use client";

import { useEffect, useState, useCallback, memo } from "react";
import { Cloud, ICloud } from "react-icon-cloud";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%", // This ensures the cloud takes full width of its container
      height: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "pointer",
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
  icons: { name: string; icon: string; description: string }[];
  onIconClick?: (icon: { name: string; icon: string; description: string }) => void;
};

const IconCloudInner = memo(({ icons, onIconClick }: DynamicCloudProps) => {
  const handleIconClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, icon: { name: string; icon: string; description: string }) => {
    e.preventDefault();
    console.log('Icon clicked:', icon);
    if (onIconClick) {
      onIconClick(icon);
    }
  }, [onIconClick]);

  const renderedIcons = icons.map((icon, index) => (
    <a
      href="#"
      key={`${icon.name}-${index}`}
      onClick={(e) => handleIconClick(e, icon)}
      title={icon.name}
    >
      <Image
        src={icon.icon}
        alt={`${icon.name} icon`}
        width={48}
        height={48}
        style={{ 
          width: 'auto', 
          height: 'auto', 
          maxWidth: '48px', 
          maxHeight: '48px',
        }}
      />
    </a>
  ));

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
});

IconCloudInner.displayName = 'IconCloudInner';

const SelectedIconCard = memo(({ selectedIcon }: { selectedIcon: { name: string; icon: string; description: string } | null }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>Selected Technology</CardTitle>
    </CardHeader>
    <CardContent>
      {selectedIcon ? (
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              src={selectedIcon.icon}
              alt={`${selectedIcon.name} icon`}
              width={64}
              height={64}
              style={{ width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px' }}
            />
            <span className="text-lg font-semibold">{selectedIcon.name}</span>
          </div>
          <p className="text-sm text-muted-foreground">{selectedIcon.description}</p>
        </div>
      ) : (
        <p>Click on an icon to see details</p>
      )}
    </CardContent>
  </Card>
));

SelectedIconCard.displayName = 'SelectedIconCard';

export default function IconCloud({ icons, onIconClick }: DynamicCloudProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<{ name: string; icon: string; description: string } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIconClick = useCallback((icon: { name: string; icon: string; description: string }) => {
    setSelectedIcon(icon);
    if (onIconClick) {
      onIconClick(icon);
    }
  }, [onIconClick]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
      <div className="w-full md:w-2/3 lg:w-3/4"> {/* Adjusted width */}
        <IconCloudInner icons={icons} onIconClick={handleIconClick} />
      </div>
      <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 mt-8 md:mt-0"> {/* Adjusted width */}
        <SelectedIconCard selectedIcon={selectedIcon} />
      </div>
    </div>
  );
}
