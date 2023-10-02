"use client";

import * as React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Stack from "@mui/material/Stack";

type IconList = { id: number; source: string; name: string };

const iconsList: IconList[] = [
  { id: 1, source: "/Twitter.png", name: "Twitter" },
  { id: 2, source: "/Twitch.png", name: "Twitch" },
  { id: 3, source: "/TikTok.png", name: "TikTok" },
  { id: 4, source: "/YouTube.png", name: "YouTube" },
  { id: 5, source: "/Instagram.png", name: "Instagram" },
  { id: 6, source: "/Facebook.png", name: "Facebook" },
  { id: 7, source: "/Discord.png", name: "Discord" },
];

type LogoImage = { source: string; name: string };
const LogoImage: LogoImage = { source: "/LogoKBOOM.png", name: "KBOOM" };

export default function Header() {
  const onClickSocialIcon = (id: number) => {
    const icon = iconsList.find((icon) => {
      return icon.id === id;
    });
    if (icon) {
      // TODO:
    }
  };

  const getTemplateForSocialIcon = (data: IconList) => (
    <Image
      key={data.id}
      src={data.source}
      alt={data.name}
      width={24}
      height={24}
      priority
      onClick={() => {
        onClickSocialIcon(data.id);
      }}
    />
  );

  const onClickLogo = () => {
    // TODO:
  };

  return (
    <div className={styles.container}>
      <Image
        src={LogoImage.source}
        alt={LogoImage.name}
        width={93}
        height={32}
        priority
        onClick={onClickLogo}
      />
      <Stack direction="row" spacing={2}>
        {iconsList.map((icon) => getTemplateForSocialIcon(icon))}
      </Stack>
    </div>
  );
}
