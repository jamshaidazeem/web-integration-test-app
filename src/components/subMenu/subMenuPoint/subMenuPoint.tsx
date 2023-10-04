"use client";

import styles from "./subMenuPoint.module.css";
import { SubMenuPoint as Point } from "@/utility/menus-mock-data";
import PointProfile from "./pointProfile";
import PointProgress from "./pointProgress";
import PointComponent from "./pointComp";

export default function SubMenuPoint({ point }: { point: Point | undefined }) {
  return (
    <div className={styles.container}>
      <PointProfile point={point} />
      <div className={styles.containerPoints}>
        <PointComponent
          source={point?.sourceGold}
          text={point?.textGold}
          width={point?.widthGold}
          height={point?.heightGold}
        />
        <PointComponent
          source={point?.sourceDiamond}
          text={point?.textDiamond}
          width={point?.widthDiamond}
          height={point?.heightDiamond}
        />
        <PointComponent
          source={point?.sourceKboom}
          text={point?.textKboom}
          width={point?.widthKboom}
          height={point?.heightKboom}
        />
      </div>
      <PointProgress point={point} />
    </div>
  );
}
