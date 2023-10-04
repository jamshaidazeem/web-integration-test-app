"use client";

import Image from "next/image";
import styles from "./pointComp.module.css";

export default function PointComponent({
  source,
  text,
  width,
  height,
}: {
  source: string | undefined;
  text: string | undefined;
  width: number | undefined;
  height: number | undefined;
}) {
  const iconWidth = width ? width : 24;
  const iconHeight = height ? height : 24;

  return (
    <div className={styles.containerPoint}>
      <div className={styles.containerImage}>
        <Image
          src={source ? source : ""}
          alt={text ? text : ""}
          width={iconWidth}
          height={iconHeight}
          priority
        />
      </div>
      <div className={styles.containerImageSmall}>
        <Image
          src={"/pseudo-6.png"}
          alt={"Plus"}
          width={12}
          height={12}
          priority
        />
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
