"use client";

import styles from "./pointProgress.module.css";
import { SubMenuPoint as Point } from "@/utility/menus-mock-data";

export default function PointProgress({ point }: { point: Point | undefined }) {
  const progressCompleted =
    point && !isNaN(point.progressDone) ? point.progressDone : 0;

  const progressTotal =
    point && !isNaN(point.progressTotal) ? point.progressTotal : 100;

  const progressPercentage = Math.round(
    (progressCompleted / progressTotal) * 100
  );

  const progressPercentageInString = `${progressPercentage}%`;

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
}
