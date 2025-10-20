import type { Metadata } from "next";
import "./globals.scss";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: `${defaultMetadata.title} - CV`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
