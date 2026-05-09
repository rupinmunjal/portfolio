import type {Metadata} from "next";
import {Ovo, Outfit} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Navbar} from "@/components/Navbar";
import {portfolioData} from "@/data/portfolio";
import "./globals.css";

const ovo = Ovo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ovo",
  display: "swap",
});

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.name} ${portfolioData.lastName} | Portfolio`,
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ovo.variable} ${outfit.variable}`}>
      <body className="min-h-screen w-full bg-background text-foreground antialiased">
        <Navbar />
        <main className="w-full">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}