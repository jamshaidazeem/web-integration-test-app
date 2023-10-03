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

export type SubMenuPoint = {
  sourceProfile: string;
  textProfile: string;
  sourceGold: string;
  textGold: string;
  sourceDiamond: string;
  textDiamond: string;
  sourceKboom: string;
  textKboom: string;
  progressTotal: number;
  progressDone: number;
  progressText: string;
};

const subMenuPoint: SubMenuPoint = {
  sourceProfile: "/pseudo-1.png",
  textProfile: "Pseudo",
  sourceGold: "/pseudo-4.png",
  textGold: "12,897",
  sourceDiamond: "/pseudo-5.png",
  textDiamond: "322",
  sourceKboom: "/pseudo-3.png",
  textKboom: "2/5",
  progressTotal: 1000,
  progressDone: 268,
  progressText: "7",
};

export type SubMenuItem = {
  mainMenuId: number;
  menuPoint: SubMenuPoint;
  listItems: SubMenuListItem[];
  menuAccount: SubMenuAccount;
};

export const subMenuItems: SubMenuItem[] = [
  {
    mainMenuId: 1,
    menuPoint: subMenuPoint,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 2,
    menuPoint: subMenuPoint,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 3,
    menuPoint: subMenuPoint,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 4,
    menuPoint: subMenuPoint,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 5,
    menuPoint: subMenuPoint,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
  {
    mainMenuId: 6,
    menuPoint: subMenuPoint,
    listItems: subMenuListItems,
    menuAccount: accountsMenu,
  },
];
