"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./mainMenu.module.css";
import Stack from "@mui/material/Stack";
import { useMenuContext, MenuItem } from "@/containers/menuContext";
import toast, { Toaster } from "react-hot-toast";
import { URL_MENUS } from "@/utility/constants";
import fetchWithGlobalErrorHandler from "@/utility/fetchHelper";

type SelectedIndicatorImage = { source: string; name: string };
const indicatorImage: SelectedIndicatorImage = {
  source: "/main-menu-selected-indicator.png",
  name: "indicator",
};

export default function MainMenu() {
  const { menuItems, selectMenuItem, updateSubMenuItem } = useMenuContext();
  const [getSubMenus, setGetSubMenus] = useState(false);

  // actions
  const onClickItem = (id: number) => {
    const item = menuItems.find((item) => {
      return item.id === id;
    });
    if (item) {
      selectMenuItem(item.id);
      setGetSubMenus(true);
    }
  };

  // use callback hooks
  const callGetSubMenusAPI = useCallback(async () => {
    try {
      const options = {
        method: "GET",
      };

      const params = new URLSearchParams();

      const selectedMenuItem = menuItems.find((item) => item.isSelected);
      if (selectedMenuItem) {
        params.append("id", selectedMenuItem.id.toString());
      }

      const url = `${URL_MENUS}?${params.toString()}`;

      const response = await fetchWithGlobalErrorHandler(url, options);
      const body = await response.json();

      if (!response.ok) {
        // in case of error response body can contain handled error message from server
        throw new Error(
          body.message || response.statusText || "Something went wrong!"
        );
      }

      updateSubMenuItem(body.data);

      toast.success("Submenus fetched successfully!");
    } catch (error: any) {
      toast.error(error.message);
    }
  }, []);

  // use effect hooks
  useEffect(() => {
    setGetSubMenus(true); // on first load fetch submenus for selected main menu
  }, []);

  useEffect(() => {
    if (getSubMenus) {
      setGetSubMenus(false);
      toast.loading("Fetching sub menus...", { duration: 1000 });
      setTimeout(() => {
        callGetSubMenusAPI();
      }, 1000);
    }
  }, [getSubMenus, callGetSubMenusAPI]);

  // templates
  const getTemplateForItem = (item: MenuItem) => (
    <div key={item.id} className={styles.containerMenuIcon}>
      {/* indicator */}
      <div className={styles.containerIconSelectedIndicator}>
        {item.isSelected && (
          <Image
            src={indicatorImage.source}
            alt={indicatorImage.name}
            width={8}
            height={20}
            priority
          />
        )}
      </div>
      {/* button */}
      <button
        onClick={() => {
          onClickItem(item.id);
        }}
        className={styles.buttonWrapper}
      >
        <div
          className={`${styles.containerMenuIconCircle} ${
            item.isSelected && styles.containerMenuIconCircleSelected
          }`}
        >
          <Image
            src={item.source}
            alt={item.name}
            width={40}
            height={40}
            priority
          />
        </div>
      </button>
    </div>
  );

  return (
    <>
      <Toaster />
      <div className={styles.container}>
        <Stack direction="column" spacing={2}>
          {menuItems.map((item) => getTemplateForItem(item))}
        </Stack>
      </div>
    </>
  );
}
