import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Villain — Less bot clutter. More control.";
const description = "Moderation, server protection, music and community tools in one Discord bot.";

export const metadata: Metadata = {
  metadataBase: new URL("https://villain.best"),
  title: {
    default: title,
    template: "%s | Villain"
  },
  description,
  openGraph: {
    title,
    description,
    url: "https://villain.best",
    siteName: "Villain",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Villain — Less bot clutter. More control." }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.svg"]
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
