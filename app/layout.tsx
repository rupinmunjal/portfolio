import type {Metadata} from "next";
import {Ovo, Outfit} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Navbar} from "@/components/Navbar";
import {Providers} from "@/app/providers";
import {portfolioData} from "@/data/portfolio";
import "./globals.css";

const siteUrl = "https://rupinmunjal.tech";
const title = `${portfolioData.name} ${portfolioData.lastName} | Full-Stack Software Developer`;
const description =
  "Toronto-based software developer building full-stack applications with Next.js, React, TypeScript, Java, Spring Boot, and AWS.";

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
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: `${portfolioData.name} ${portfolioData.lastName} Portfolio`,
    images: [
      {
        url: "/assets/images/user-image.jpeg",
        width: 400,
        height: 400,
        alt: `Portrait of ${portfolioData.name} ${portfolioData.lastName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/images/user-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ovo.variable} ${outfit.variable}`}>
      <body className="min-h-screen w-full bg-background text-foreground antialiased">
        <Providers>
          <Navbar />
          <main className="w-full">{children}</main>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
