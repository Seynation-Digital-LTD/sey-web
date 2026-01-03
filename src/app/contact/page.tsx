"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { bg } from "../../app/index.js";
import { ContactSection } from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      
      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-primaryOne/10 rounded-full blur-[150px] opacity-40 animate-pulse" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10">
        
        {/* Contact Hero */}
        <section className="container max-w-7xl mx-auto px-8 pt-40 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="flex-1 space-y-8"
            >
               <h6 className="text-primaryOne font-bold uppercase tracking-[0.4em] text-xs">Get In Touch</h6>
               <h1 className="text-5xl lg:text-7xl font-mina font-bold leading-tight">
                 Let&apos;s Create <br />
                 Something <span className="italic text-primaryOne">Extraordinary.</span>
               </h1>
               <p className="text-gray-400 text-xl font-inter leading-relaxed max-w-lg">
                 Have a bold project in mind? Looking for a partner to elevate your digital presence? 
                 Reach out, and let&apos;s turn your vision into a masterpiece.
               </p>
               
               <div className="flex flex-col gap-6 pt-4">
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primaryOne/50 transition-all">
                       <span className="text-primaryOne font-bold">@</span>
                    </div>
                    <div>
                       <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold">Email Us</span>
                       <a href="mailto:info@seynation.co" className="text-lg font-bold hover:text-primaryOne transition-colors">info@seynation.co</a>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primaryOne/50 transition-all">
                       <span className="text-primaryOne font-bold">#</span>
                    </div>
                    <div>
                       <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold">Location</span>
                       <span className="text-lg font-bold">Arusha, Tanzania</span>
                    </div>
                 </div>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full max-w-lg"
            >
               <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                 <Image src={bg} alt="Contact Hero" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                 <div className="absolute bottom-12 left-12">
                    <h4 className="text-3xl font-mina font-bold">The Forge of <br /> Innovation.</h4>
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Integrated Form Section */}
        <section className="w-full bg-white/[0.02] border-y border-white/5 py-24 mb-32">
           <ContactSection />
        </section>

        {/* Final Statement */}
        <section className="container max-w-5xl mx-auto px-8 pb-32 text-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
               <h2 className="text-3xl lg:text-4xl font-mina font-bold italic text-gray-500">
                 &quot;Every masterpiece starts with a single conversation.&quot;
               </h2>
               <div className="h-1 w-24 bg-primaryOne mx-auto rounded-full" />
            </motion.div>
        </section>

      </div>
    </div>
  );
}
