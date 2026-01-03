import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "Seynation Digital - The Mastermind Agency",
    template: "%s | Seynation Digital"
  },
  description:
    "We are the masterminds shaping tomorrow’s digital world today. Experts in Digital Marketing, Social Media Management, Website Design & Development, Graphics Design, and Brand Strategy.",
  keywords: [
    // Core Brand
    "Seynation",
    "Seynation Limited",
    "Seynation Digital LTD",
    "Sey",
    "Seynation Media",
    "Seynation Tanzania",
    "Seynation Digital",
    "Seynation Agency",
    "The Mastermind Agency",
    "Seynation Creative",

    // Digital Marketing
    "Digital Marketing Tanzania",
    "Digital Marketing Africa",
    "Online Marketing Services",
    "Social Media Marketing Tanzania",
    "Paid Ads Management",
    "Facebook Ads Tanzania",
    "Instagram Ads Management",
    "TikTok Marketing Tanzania",
    "SEO Services in Tanzania",
    "Google Ads Tanzania",

    // Web & Tech
    "Website Design Tanzania",
    "Website Development Africa",
    "Next.js Web Development",
    "React Website Design",
    "WordPress Website Design",
    "Ecommerce Website Tanzania",
    "Custom Web Applications",
    "Mobile App Development Tanzania",

    // Creative & Branding
    "Graphics Design Tanzania",
    "Logo Design Tanzania",
    "Brand Identity Tanzania",
    "Branding Services Africa",
    "Creative Agency in Tanzania",
    "UI/UX Design Tanzania",
    "Motion Graphics Tanzania",

    // Content & Media
    "Social Media Management Tanzania",
    "Content Creation Tanzania",
    "Copywriting Services Tanzania",
    "Video Editing Tanzania",
    "Photography for Brands Tanzania",

    // Location-Based
    "Digital Agency in Tanzania",
    "Marketing Agency Dar es Salaam",
    "Web Design Tabora",
    "Creative Agency in East Africa",
    "Social Media Services Africa",
    "Branding Agency Tanzania",

    // Problem-Solving
    "How to grow business online in Tanzania",
    "Increase sales with digital marketing",
    "Best web design agency in Tanzania",
    "Affordable marketing solutions for startups",
    "Improve online presence Tanzania",
    "Social media growth for businesses",

    // Industry/Niche
    "Fintech Marketing Tanzania",
    "Education Marketing Tanzania",
    "Real Estate Digital Marketing",
    "Healthcare Branding Tanzania",
    "NGO Marketing Services",
    "Ecommerce Growth Tanzania"
  ],
  openGraph: {
    title: "Seynation Digital - The Mastermind Agency",
    description:
      "The masterminds shaping tomorrow’s digital world today. Every challenge becomes an opportunity for us to engineer brilliance that transforms industries.",
    url: "https://seynation.co",
    siteName: "Seynation Digital",
    images: [
      {
        url: "https://seynation.co/og-image.jpg", // add this image inside /public
        width: 1200,
        height: 630,
        alt: "Seynation Digital - The Mastermind Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seynation Digital - The Mastermind Agency",
    description:
      "We are the masterminds shaping tomorrow’s digital world today.",
    images: ["https://seynation.co/og-image.jpg"],
    creator: "@seynation",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
