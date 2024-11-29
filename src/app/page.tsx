"use client";
import { HeroPage } from "@/components/Hero";
import  Patners  from "@/components/Patners";
import { AboutSection } from "@/components/AboutSection";
import { CtaSection } from "@/components/CtaSection";
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
        <CtaSection />
        <PortfolioSection />
        <CtaSection />
        <ContactSection />
        <CtaSection />
      </div>
    </div>
  );
}
