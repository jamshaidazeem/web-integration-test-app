"use client";

import * as React from "react";
import Image from "next/image";
import styles from "./mainMenu.module.css";
import Stack from "@mui/material/Stack";

type IconList = {
  id: number;
  source: string;
  name: string;
  isSelected: boolean;
};

const iconsList: IconList[] = [
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

type SelectedIndicatorImage = { source: string; name: string };
const indicatorImage: SelectedIndicatorImage = {
  source: "/main-menu-selected-indicator.png",
  name: "indicator",
};

export default function MainMenu() {
  const onClickIcon = (id: number) => {
    const icon = iconsList.find((icon) => {
      return icon.id === id;
    });
    if (icon) {
      // TODO:
    }
  };

  const getTemplateForIcon = (data: IconList) => (
    <div key={data.id} className={styles.containerMenuIcon}>
      {/* indicator */}
      <div className={styles.containerIconSelectedIndicator}>
        {data.isSelected && (
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
          data.isSelected && styles.containerMenuIconCircleSelected
        }`}
      >
        <Image
          src={data.source}
          alt={data.name}
          width={40}
          height={40}
          priority
          onClick={() => {
            onClickIcon(data.id);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Stack direction="column" spacing={2}>
        {iconsList.map((icon) => getTemplateForIcon(icon))}
      </Stack>
    </div>
  );
}
