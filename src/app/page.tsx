"use client";
import { HeroPage } from "@/components/Hero";
import Patners from "@/components/Patners";
import { AboutSection } from "@/components/AboutSection";
import { Masterpieces } from "@/components/Masterpieces";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";

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
          <Patners />
          <AboutSection />
          <ServicesSection />
          <Masterpieces />
          <ContactSection />
        </div>

        {/* Floating Contact CTA */}
        <motion.div 
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 2 }}
           className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
          <a 
            href="mailto:hello@seynation.co"
            className="flex items-center gap-3 px-6 py-4 bg-primaryOne text-white font-bold rounded-full shadow-[0_0_30px_rgba(128,0,0,0.5)] hover:scale-110 transition-transform active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </div>
  );
}
