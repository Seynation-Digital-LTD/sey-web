import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seynation Digital",
  description:
    "The Masterminds in Digital Marketing, Social Media Management, Website Design and Development, Graphics Deign and Brand Strategy",
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
