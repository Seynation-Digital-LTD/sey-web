"use client";
import { HeroPage } from "@/components/Hero";
import Patners from "@/components/Patners";
import { AboutSection } from "@/components/AboutSection";
import { CtaSection } from "@/components/CtaSection";
import { CtaSection2 } from "@/components/CtaSection";
import { CtaSection3 } from "@/components/CtaSection";
import { CtaSection4 } from "@/components/CtaSection";
import { Portfolio } from "@/components/Portfolio";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
export default function Home() {
  return (
    <div>
      <HeroPage />

      <div className="flex flex-col items-center justify-center gap-10">
        <Patners />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </div>
    </div>
  );
}
