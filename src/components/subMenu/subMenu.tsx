"use client";

import React from "react";
import Image from "next/image";
import styles from "./subMenu.module.css";
import { useMenuContext, MenuItem } from "@/containers/menuContext";

export default function SubMenu() {
  const { menuItems, subMenuItem, selectSubMenuListItem } = useMenuContext();

  // actions
  const onClickItem = (id: number) => {
    selectSubMenuListItem(id);
  };

  return <div className={styles.container}></div>;
}
