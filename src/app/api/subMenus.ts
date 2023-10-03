export type SubMenuItem = {
  id: number;
  source: string;
  sourceSelected: string;
  name: string;
  isSelected: boolean;
};

export const subMenuItems: SubMenuItem[] = [
  {
    id: 1,
    source: "/tabler-icon-license.png",
    sourceSelected: "/tabler-icon-license-sel.png",
    name: "Quests",
    isSelected: false,
  },
  {
    id: 2,
    source: "/tabler-icon-map.png",
    sourceSelected: "/tabler-icon-map-sel.png",
    name: "Adventures",
    isSelected: false,
  },
  {
    id: 3,
    source: "/tabler-icon-medal.png",
    sourceSelected: "/tabler-icon-medal-sel.png",
    name: "Leaderboard",
    isSelected: false,
  },
  {
    id: 4,
    source: "/tabler-icon-building-store.png",
    sourceSelected: "/tabler-icon-building-store-sel.png",
    name: "Shop",
    isSelected: false,
  },
  {
    id: 5,
    source: "/tabler-icon-military-award.png",
    sourceSelected: "/tabler-icon-military-award-sel.png",
    name: "Club",
    isSelected: false,
  },
  {
    id: 6,
    source: "/tabler-icon-bell.png",
    sourceSelected: "/tabler-icon-bell-sel.png",
    name: "Notifications",
    isSelected: false,
  },
];

export const accountsMenu = {
  heading: "Account Management",
  subMenuItems: [
    {
      id: 7,
      source: "/tabler-person-icon.png",
      sourceSelected: "/tabler-person-icon-sel.png",
      name: "Account",
      isSelected: false,
    },
    {
      id: 8,
      source: "/tabler-settings-icon.png",
      sourceSelected: "/tabler-settings-icon-sel.png",
      name: "Settings",
      isSelected: false,
    },
  ],
};

export const Items = [
  {
    mainMenuId: 1,
    subMenuItems: subMenuItems,
    accounts: accountsMenu,
  },
  {
    mainMenuId: 2,
    subMenuItems: subMenuItems,
    accounts: accountsMenu,
  },
  {
    mainMenuId: 3,
    subMenuItems: subMenuItems,
    accounts: accountsMenu,
  },
  {
    mainMenuId: 4,
    subMenuItems: subMenuItems,
    accounts: accountsMenu,
  },
  {
    mainMenuId: 5,
    subMenuItems: subMenuItems,
    accounts: accountsMenu,
  },
  {
    mainMenuId: 6,
    subMenuItems: subMenuItems,
    accounts: accountsMenu,
  },
];
