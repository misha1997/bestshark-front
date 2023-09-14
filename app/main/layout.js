'use client'

import "../globals.css";
import { Inter } from "next/font/google";
import  {TheGames}  from "../components/TheGames";
import  {TheHeader}  from "../components/TheHeader/TheHeader.jsx";
import  Chat from "../components/Chat/Chat.jsx";

import { usePathname } from "next/navigation";

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
        <TheGames />
         <Chat />
        <main>
          <TheHeader />
          <div className="container wrapper">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}