import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://villain.best"),
  title: {
    default: "Villain — Your server, under control.",
    template: "%s | Villain"
  },
  description: "Villain is an all-in-one Discord bot for moderation, server tools, music, tickets, and more.",
  openGraph: {
    title: "Villain",
    description: "One bot. Your entire server.",
    url: "https://villain.best",
    siteName: "Villain",
    type: "website"
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
