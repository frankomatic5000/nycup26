import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nycup26.com"),
  title: {
    default: "NYC GAME PASS",
    template: "%s · NYC GAME PASS",
  },
  description:
    "NYC GAME PASS is a bold World Cup city pass for New York visitors, with a real Statue of Liberty hero, venue discovery, ticket lanes, and a mobile-first matchday flow.",
  applicationName: "NYC GAME PASS",
  keywords: ["NYC GAME PASS", "World Cup", "bracelet", "pass", "venues", "tickets"],
  openGraph: {
    title: "NYC GAME PASS",
    description:
      "A bold World Cup city pass for New York — Statue of Liberty, trophy energy, and a clean mobile journey.",
    url: "https://nycup26.com",
    siteName: "NYC GAME PASS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
