import "./globals.css";
import type { Metadata } from "next";
import { Comic_Neue, Luckiest_Guy } from "next/font/google";
import HeaderBar from "./components/layout/HeaderBar";
import clsx from "clsx";

const comic = Comic_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-comic-neue",
});

const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-luckiest-guy",
});

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
    <html lang="en" className={`${luckiest.variable} ${comic.variable}`}>
      <body
        className={clsx(
          `before:bg-[url('/paper.png')] before:content-['']`,
          `before:absolute before:inset-0 before:z-[-1]`,
          `before:bg-sky-300 before:bg-blend-multiply`,
          `relative z-[1] before:opacity-90`,
          `bg-[radial-gradient(rgba(0,0,0.1)_20%,transparent_20%),radial-gradient(rgba(0,0,0,0.3)_20%,transparent_20%)]`,
          `bg-[0_0,20px_20px] bg-[length:40px_40px]`
        )}
      >
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}
