import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villain — Discord Selfbot Hosting",
  description: "Free Discord selfbot hosting with custom presence, commands, and multi-account support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
