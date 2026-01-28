import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
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

// 1. Updated SEO Metadata
export const metadata: Metadata = {
  title: "LocalBiz | Premium Service Booking",
  description:
    "Book your next appointment in seconds. The professional platform for local service providers.",
  keywords: ["booking", "service", "local business", "saas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black pt-20 flex flex-col min-h-screen`}
      >
        <Navbar />

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
