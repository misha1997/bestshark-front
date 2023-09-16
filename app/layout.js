'use client'

import "./globals.css";
import { Inter } from "next/font/google";

import styles from './global.module.css';
import  {TheHeader}  from "./components/TheHeader/TheHeader.jsx";
import  {TheFooter}  from "./components/TheFooter/TheFooter.jsx";
import { usePathname } from "next/navigation";
import { TheGames } from "./components/TheGames";
import  Chat  from "./components/Chat/Chat.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`${styles.wrapper}`}>
          <TheGames/>
          <div className={`${styles.main}`}>
            <TheHeader />
            {/* <Chat/> */}
            {children}
            <TheFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
