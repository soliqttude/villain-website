import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteIntro } from "@/components/site-intro";
import "./villain-home.css";

const sans = Familjen_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono"
});

const title = "Villain — the bot you add instead of five";
const description = "Moderation, music, tickets, levels, giveaways and temporary voice. Prefix and slash, one Discord bot.";

export const viewport: Viewport = {
  themeColor: "#0e0e0c",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL("https://villain.best"),
  title: {
    default: title,
    template: "%s · Villain"
  },
  description,
  openGraph: {
    title,
    description,
    url: "https://villain.best",
    siteName: "Villain",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"]
  },
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
