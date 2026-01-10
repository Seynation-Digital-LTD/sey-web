import { HeroPage } from "@/components/Hero";
import Partners from "@/components/Partners";
import { AboutSection } from "@/components/AboutSection";
import { Masterpieces } from "@/components/Masterpieces";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import LatestBlogs from "@/components/LatestBlogs";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* Universal Dynamic Background (Portfolio Style) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/20 rounded-full blur-[150px] mix-blend-screen opacity-60 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/10 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-primaryThree/5 rounded-full blur-[180px] opacity-30" />
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10">
        <HeroPage />
        
        <div className="space-y-0">
          <Partners />
          <AboutSection />
          <ServicesSection />
          <Masterpieces />
          <LatestBlogs />
          <ContactSection />
        </div>

        {/* Floating Contact CTA */}
        <FloatingCTA />
      </div>
    </div>
  );
}
