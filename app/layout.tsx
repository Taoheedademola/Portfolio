import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import RootLayoutClient from "./RootLayout"; // client component

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo",
  description: "Olasupo Toaheed Ademola - Full-Stack Developer & Digital Craftsman",
  openGraph: {
    title: "Demo",
    description: "Olasupo Toaheed Ademola - Full-Stack Developer & Digital Craftsman",
    url: "https://tedecx.com",
    siteName: "Demo",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
