import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://villain.best"),
  title: {
    default: "Villain — Less bot clutter. More control.",
    template: "%s | Villain"
  },
  description: "Moderation, protection, server tools, music, and community features in one Discord bot.",
  openGraph: {
    title: "Villain — Less bot clutter. More control.",
    description: "Moderation, protection, server tools, music, and community features in one Discord bot.",
    url: "https://villain.best",
    siteName: "Villain",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Villain — Less bot clutter. More control.",
    description: "Moderation, protection, server tools, music, and community features in one Discord bot."
  },
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
