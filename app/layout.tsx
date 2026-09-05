import type { Metadata, Viewport } from "next";
import { Sora, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhamtiwari.me"),
  title: {
    default: "Shubham Tiwari · Solutions Architect",
    template: "%s · Shubham Tiwari",
  },
  description:
    "Shubham Tiwari is a Solutions Architect specializing in AI-powered applications using LLMs, RAG, and cloud infrastructure on AWS and Azure. 8+ years building scalable, cost-effective systems.",
  applicationName: "Shubham Tiwari",
  manifest: "/manifest.webmanifest",
  icons: {
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Shubham Tiwari",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Shubham Tiwari · Solutions Architect",
    description: "I build AI systems that scale without losing shape.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b1120" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
