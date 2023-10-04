"use client";

import Image from "next/image";
import styles from "./pointComp.module.css";

export default function PointComponent({
  source,
  text,
}: {
  source: string | undefined;
  text: string | undefined;
}) {
  return (
    <div className={styles.containerPoint}>
      <div className={styles.containerImage}>
        <Image
          src={source ? source : ""}
          alt={text ? text : ""}
          width={24}
          height={24}
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
