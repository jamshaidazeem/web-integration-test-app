"use client";

import React from "react";
import Image from "next/image";
import styles from "./subMenuListItem.module.css";
import { SubMenuListItem as ListItem } from "@/utility/menus-mock-data";

export default function SubMenuListItem({
  item,
  onSelect,
}: {
  item: ListItem | undefined;
  onSelect: any;
}) {
  return (
    <div
      className={`${styles.container} ${
        item && item.isSelected && styles.containerSel
      }`}
      onClick={() => {
        onSelect(item);
      }}
    >
      <div className={styles.containerImage}>
        <Image
          src={
            item ? (item.isSelected ? item.sourceSelected : item.source) : ""
          }
          alt={item ? item.name : ""}
          width={24}
          height={24}
          priority
        />
      </div>
      <span
        className={`${styles.text} ${
          item && item.isSelected && styles.textSel
        }`}
      >
        {item?.name}
      </span>
    </div>
  );
}
