"use client";
import { HeroPage } from "@/components/Hero";
import Patners from "@/components/Patners";
import { AboutSection } from "@/components/AboutSection";
import { CtaSection } from "@/components/CtaSection";
import { CtaSection2 } from "@/components/CtaSection";
import { CtaSection3 } from "@/components/CtaSection";
import { CtaSection4 } from "@/components/CtaSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
export default function Home() {
  return (
    <div>
      <HeroPage />
      <div className="ml-20 mr-20">
        <Patners />
        <AboutSection />
        <CtaSection />
        <ServicesSection />
        <CtaSection2 />
        <PortfolioSection />
        <CtaSection3 />
        <ContactSection />
        <CtaSection4 />
      </div>
    </div>
  );
}
