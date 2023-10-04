"use client";

import Image from "next/image";
import styles from "./subMenuHeader.module.css";
import { MenuItem } from "@/containers/menuContext";

export default function SubMenuHeader({
  menuItem,
}: {
  menuItem: MenuItem | undefined;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <Image
          src={menuItem ? menuItem.source : ""}
          alt={menuItem ? menuItem.name : ""}
          width={48}
          height={48}
          priority
        />
      </div>
      <div className={styles.text}>
        <span className={styles.text}>{menuItem?.name}</span>
      </div>
    </div>
  );
}
