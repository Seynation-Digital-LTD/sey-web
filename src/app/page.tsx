"use client";
import { HeroPage } from "@/components/Hero";
import Patners from "@/components/Patners";
import { AboutSection } from "@/components/AboutSection";

import { PortfolioSection2 } from "@/components/PortofolioSection2";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
export default function Home() {
  return (
    <div>
      <HeroPage />

      <div className="flex flex-col items-center justify-center gap-6">
        <Patners />
        <AboutSection />
        <ServicesSection />
       
        <PortfolioSection2 />
        <ContactSection />
      </div>
    </div>
  );
}
