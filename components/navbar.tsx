"use client"

import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useState } from "react"

interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface NavBarProps {
  navItems: NavItem[];
}

export default function NavBar({ navItems }: NavBarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <NavigationMenu className="flex justify-between items-center max-w-[1200px] sm:mx-[auto] px-4">
      <div className="flex items-center justify-center h-12 w-12">
        <Button variant="secondary" className="text-2xl font-bold h-12 w-14 hover:bg-primary-foreground hover:text-primary" asChild>
          <Link href="/" className="text-3xl font-bold">HR</Link>
        </Button>
      </div>
      <NavigationMenuList className="flex justify-between items-center gap-4">
        {navItems.map((item, index) => (
          <NavigationMenuLink
            key={index}
            href={item.link}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            asChild
          >
            <Button variant="secondary" className="font-bold h-10 hover:bg-primary-foreground hover:text-primary">
              {item.name}
              {React.cloneElement(item.icon as React.ReactElement, { isActive: hoveredItem === item.name })}
            </Button>
          </NavigationMenuLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}