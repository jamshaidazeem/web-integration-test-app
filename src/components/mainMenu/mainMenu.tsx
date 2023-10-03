"use client";

import * as React from "react";
import Image from "next/image";
import styles from "./mainMenu.module.css";
import Stack from "@mui/material/Stack";
import { useMenuContext, MenuItem } from "@/containers/menuContext";

type SelectedIndicatorImage = { source: string; name: string };
const indicatorImage: SelectedIndicatorImage = {
  source: "/main-menu-selected-indicator.png",
  name: "indicator",
};

export default function MainMenu() {
  const { menuItems, selectMenuItem } = useMenuContext();

  const onClickItem = (id: number) => {
    const item = menuItems.find((item) => {
      return item.id === id;
    });
    if (item) {
      selectMenuItem(item.id);
    }
  };

  const getTemplateForItem = (item: MenuItem) => (
    <div key={item.id} className={styles.containerMenuIcon}>
      {/* indicator */}
      <div className={styles.containerIconSelectedIndicator}>
        {item.isSelected && (
          <Image
            src={indicatorImage.source}
            alt={indicatorImage.name}
            width={8}
            height={20}
            priority
          />
        )}
      </div>
      {/* icon */}
      <div
        className={`${styles.containerMenuIconCircle} ${
          item.isSelected && styles.containerMenuIconCircleSelected
        }`}
      >
        <Image
          src={item.source}
          alt={item.name}
          width={40}
          height={40}
          priority
          onClick={() => {
            onClickItem(item.id);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Stack direction="column" spacing={2}>
        {menuItems.map((item) => getTemplateForItem(item))}
      </Stack>
    </div>
  );
}
