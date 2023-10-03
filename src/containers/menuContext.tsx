"use client";

import React, { createContext, useContext, ReactNode } from "react";

export type MenuItem = {
  id: number;
  source: string;
  name: string;
  isSelected: boolean;
};

const items: MenuItem[] = [
  {
    id: 1,
    source: "/main-menu-image-team-kboom.png",
    name: "Team KBoom",
    isSelected: true,
  },
  {
    id: 2,
    source: "/main-menu-image-team-go.png",
    name: "Team Go",
    isSelected: false,
  },
  {
    id: 3,
    source: "/main-menu-image-team-white.png",
    name: "Team White",
    isSelected: false,
  },
  {
    id: 4,
    source: "/main-menu-image-team-yellow.png",
    name: "Team Yellow",
    isSelected: false,
  },
  {
    id: 5,
    source: "/main-menu-image-team-pink.png",
    name: "Team Pink",
    isSelected: false,
  },
];

// Define your context type
export type MenuContextType = {
  // Define the data you want to store in the context
  menuItems: MenuItem[];
  selectMenuItem: (itemId: number) => void;
};

// Create a context
export const MenuContext = createContext<MenuContextType | null>(null);

// Create a custom hook for accessing the context
export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
}

// Define your provider component
interface MenuContextProviderProps {
  children: ReactNode;
}

const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [menuItems, setMenuItems] = React.useState<MenuItem[]>(items);

  const selectMenuItem = (itemId: number) => {
    let tempItems = [...menuItems];
    tempItems.map((item) => {
      item.isSelected = item.id === itemId;
    });
    setMenuItems(tempItems);
  };

  const contextValue: MenuContextType = {
    menuItems,
    selectMenuItem,
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;