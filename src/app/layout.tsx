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
    default: "NYC Play Pass",
    template: "%s · NYC Play Pass",
  },
  description:
    "NYC Play Pass is a cinematic World Cup city pass for New York visitors, with a Statue of Liberty hero, venue discovery, ticket lanes, and a mobile-first matchday flow.",
  applicationName: "NYC Play Pass",
  keywords: ["NYC Play Pass", "World Cup", "bracelet", "pass", "venues", "tickets"],
  openGraph: {
    title: "NYC Play Pass",
    description:
      "A cinematic World Cup city pass for New York — Statue of Liberty, trophy energy, and a clean mobile journey.",
    url: "https://nycup26.com",
    siteName: "NYC Play Pass",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
