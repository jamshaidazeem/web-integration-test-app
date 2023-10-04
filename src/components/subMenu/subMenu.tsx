"use client";

import styles from "./subMenu.module.css";
import { useMenuContext } from "@/containers/menuContext";
import SubMenuHeader from "./subMenuHeader";
import SubMenuListItem from "./subMenuListItem";
import { SubMenuListItem as ListItem } from "@/utility/menus-mock-data";
import SubMenuPoint from "./subMenuPoint/subMenuPoint";

export default function SubMenu() {
  const { menuItems, subMenuItem, selectSubMenuListItem } = useMenuContext();
  const selectedMenuItem = menuItems.find(
    (item) => item.id === subMenuItem?.mainMenuId
  );

  const onClickSubMenuListItem = (item: ListItem) => {
    selectSubMenuListItem(item.id);
  };

  if (!subMenuItem) {
    return null;
  }

  return (
    <div className={styles.container}>
      {/* header and list items */}
      <div className={styles.containerContent}>
        <SubMenuHeader menuItem={selectedMenuItem} />
        <SubMenuPoint point={subMenuItem?.menuPoint} />
        {subMenuItem?.listItems.map((item) => (
          <SubMenuListItem
            key={item.id}
            item={item}
            onSelect={onClickSubMenuListItem}
          />
        ))}
      </div>
      {/* footer */}
      <div className={styles.containerContent}>
        <span className={styles.text}>{subMenuItem?.menuAccount.heading}</span>
        {subMenuItem?.menuAccount.listItems.map((item) => (
          <SubMenuListItem
            key={item.id}
            item={item}
            onSelect={onClickSubMenuListItem}
          />
        ))}
      </div>
    </div>
  );
}
