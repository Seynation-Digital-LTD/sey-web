import type { Metadata } from "next";
import "./globals.css";
import { Navbar2 } from "@/components/Navbar2";
import { Footer } from "@/components/Footer";
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
      <body>
        <Navbar2 />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
