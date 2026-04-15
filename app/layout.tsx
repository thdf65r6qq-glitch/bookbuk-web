import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "BookBuk - Notebook for iPad",
  description: "A distraction-free notebook for iPad. Write, draw, and organise your thoughts into books and pages.",
  metadataBase: new URL("https://bookbuk.ink"),
  openGraph: {
    title: "BookBuk - Notebook for iPad",
    description: "A distraction-free notebook for iPad. Write, draw, and organise your thoughts into books and pages.",
    url: "https://bookbuk.ink",
    siteName: "BookBuk",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookBuk - Notebook for iPad",
    description: "A distraction-free notebook for iPad. Write, draw, and organise your thoughts into books and pages.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body>{children}</body>
    </html>
  );
}
