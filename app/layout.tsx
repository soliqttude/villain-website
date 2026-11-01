import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://villain.best"),
  title: {
    default: "Villain — Discord Bot",
    template: "%s | Villain"
  },
  description: "Villain is a Discord bot with moderation, information, utility, community, music, and fun commands.",
  openGraph: {
    title: "Villain — Discord Bot",
    description: "Moderation, information, utility, community, music, and fun commands for Discord servers.",
    url: "https://villain.best",
    siteName: "Villain",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Villain — Discord Bot",
    description: "Moderation, information, utility, community, music, and fun commands for Discord servers."
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
