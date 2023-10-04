import "./globals.css";
import "@fontsource/asap"; // Defaults to weight 400
import "@fontsource/asap/400.css"; // Specify weight
import "@fontsource/asap/400-italic.css"; // Specify weight and style

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Header from ".././components/header/header";
import MainMenu from "@/components/mainMenu/mainMenu";
import SubMenu from "@/components/subMenu/subMenu";
import MenuContextProvider from "@/containers/menuContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuContextProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className} suppressHydrationWarning={true}>
          <div className={styles.container}>
            <Header />
            <div className={styles.containerLayout}>
              {/* menu */}
              <div className={styles.containerMenus}>
                <MainMenu />
                <SubMenu />
              </div>
              {/* children */}
              <div className={styles.containerChildren}>{children}</div>
            </div>
          </div>
        </body>
      </html>
    </MenuContextProvider>
  );
}
