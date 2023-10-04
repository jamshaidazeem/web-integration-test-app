"use client";

import Image from "next/image";
import styles from "./pointProfile.module.css";
import { SubMenuPoint as Point } from "@/utility/menus-mock-data";

export default function PointProfile({ point }: { point: Point | undefined }) {
  return (
    <div className={styles.containerProfile}>
      <div className={styles.containerImage}>
        <Image
          src={point ? point.sourceProfile : ""}
          alt={point ? point.textProfile : ""}
          width={32}
          height={32}
          priority
        />
      </div>
      <span id="fontAsap" className={styles.text}>
        {point?.textProfile}
      </span>
    </div>
  );
}
