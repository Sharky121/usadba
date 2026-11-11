import type { Metadata } from "next";
import { Forum, Geist, Kurale } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const forum = Forum({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-forum",
});

/** Пункты меню ≥1280px (Kurale) */
const kurale = Kurale({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-kurale",
});

export const metadata: Metadata = {
  title: "Усадьба — Next.js",
  description: "Заготовка для переноса сайта",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${forum.variable} ${kurale.variable} h-full`}
    >
      <body
        className={`${geistSans.className} flex min-h-full flex-col bg-white text-neutral-900 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
