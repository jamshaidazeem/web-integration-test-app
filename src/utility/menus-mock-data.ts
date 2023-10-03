export type SubMenuListItem = {
  id: number;
  source: string;
  sourceSelected: string;
  name: string;
  isSelected: boolean;
};

const subMenuListItems: SubMenuListItem[] = [
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

export type SubMenuAccount = {
  heading: string;
  listItems: SubMenuListItem[];
};

export const accountsMenu: SubMenuAccount = {
  heading: "Account Management",
  listItems: [
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

export type SubMenuItem = {
  mainMenuId: number;
  listItems: SubMenuListItem[];
  menuAccount: SubMenuAccount;
};

export const subMenuItems: SubMenuItem[] = [
  {
    mainMenuId: 1,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 2,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 3,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 4,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 5,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 6,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
];
