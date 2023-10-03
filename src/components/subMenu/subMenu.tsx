"use client";

import React from "react";
import styles from "./subMenu.module.css";
import { useMenuContext } from "@/containers/menuContext";
import SubMenuHeader from "./subMenuHeader";

export default function SubMenu() {
  const { menuItems, subMenuItem, selectSubMenuListItem } = useMenuContext();
  const selectedMenuItem = menuItems.find(
    (item) => item.id === subMenuItem?.mainMenuId
  );

  return (
    <div className={styles.container}>
      <SubMenuHeader menuItem={selectedMenuItem} />
    </div>
  );
}
