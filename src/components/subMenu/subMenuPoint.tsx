"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./subMenuPoint.module.css";
import { SubMenuPoint as Point } from "@/utility/menus-mock-data";

export default function SubMenuPoint({ point }: { point: Point | undefined }) {
  const progressCompleted =
    point && !isNaN(point.progressDone) ? point.progressDone : 0;

  const progressTotal =
    point && !isNaN(point.progressTotal) ? point.progressTotal : 100;

  const progressPercentage = Math.round(
    (progressCompleted / progressTotal) * 100
  );

  const progressPercentageInString = `${progressPercentage}%`;

  const getTemplateForProfile = () => {
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
        <span className={styles.text}>{point?.textProfile}</span>
      </div>
    );
  };

  const getTemplateForPoint = (
    source: string | undefined,
    text: string | undefined
  ) => {
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
  };

  const getTemplateForProgress = () => {
    return (
      <div className={styles.containerProgress}>
        <div className={styles.containerProgressBox}>
          <span className={styles.text}>{point?.progressText}</span>
        </div>
        <div className={styles.containerProgressRectangle}>
          <span
            className={styles.text}
          >{`${point?.progressDone} / ${point?.progressTotal}`}</span>
          <div
            className={styles.containerSubProgressReact}
            style={{ width: progressPercentageInString }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {getTemplateForProfile()}
      <div className={styles.containerPoints}>
        {getTemplateForPoint(point?.sourceGold, point?.textGold)}
        {getTemplateForPoint(point?.sourceDiamond, point?.textDiamond)}
        {getTemplateForPoint(point?.sourceKboom, point?.textKboom)}
      </div>
      {getTemplateForProgress()}
    </div>
  );
}
