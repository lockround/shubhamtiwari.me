import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description:
    "The installable mobile app experience for Shubham Tiwari, Solutions Architect.",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}