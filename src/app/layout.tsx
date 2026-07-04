import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Treehouze — Social Integration for Modern Onboarding",
  description:
    "Treehouze helps European companies improve new hire integration and retention by turning belonging into a structured system from day one.",
  metadataBase: new URL("https://treehouze.de"),
  openGraph: {
    title: "Treehouze — Social Integration for Modern Onboarding",
    description:
      "Treehouze helps European companies improve new hire integration and retention by turning belonging into a structured system from day one.",
    siteName: "Treehouze",
    locale: "en_EU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treehouze — Social Integration for Modern Onboarding",
    description:
      "Treehouze helps European companies improve new hire integration and retention by turning belonging into a structured system from day one.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
