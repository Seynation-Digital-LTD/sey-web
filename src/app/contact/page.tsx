"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { bg } from "../../app/index.js";
import { ContactSection } from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Universal Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 pt-32 lg:pt-48">
        {/* Contact Hero */}
        <section className="container max-w-7xl mx-auto px-8 mb-24 lg:mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-12"
            >
              <div className="space-y-4">
                <motion.h6
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-primaryOne font-bold uppercase tracking-[0.4em] text-xs"
                >
                  Get In Touch
                </motion.h6>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-mina font-bold leading-[0.9] tracking-tighter">
                  Let&apos;s talk. <br />
                  <span className="italic text-primaryOne drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                    Tell us what you need.
                  </span>
                </h1>
              </div>

              <p className="text-gray-400 text-md lg:text-xl font-inter leading-relaxed max-w-xl">
                Have a project in mind, or still figuring it out? Either way, reach out. We&apos;ll ask a few questions,
                understand what you&apos;re building, and suggest the next best step.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-primaryOne/50 transition-all"
                >
                  <span className="block text-xs uppercase tracking-widest text-primaryOne font-bold mb-4">
                    Email
                  </span>
                  <a href="mailto:info@seynation.co" className="text-xl font-bold hover:underline">
                    info@seynation.co
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-primaryOne/50 transition-all"
                >
                  <span className="block text-xs uppercase tracking-widest text-primaryOne font-bold mb-4">
                    Location
                  </span>
                  <span className="text-xl font-bold">Arusha, Tanzania</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 w-full relative"
            >
              <div className="absolute -inset-4 bg-primaryOne/10 rounded-[4rem] blur-3xl opacity-50" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group bg-neutral-900">
                <Image
                  src={bg}
                  alt="Contact Hero"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Floating Element */}
                <div className="absolute bottom-12 left-12 right-12 p-8 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10">
                  <h4 className="text-3xl font-mina font-bold text-white mb-2">
                    A clear start.
                  </h4>
                  <p className="text-gray-400 text-sm">
                    A short conversation to understand the project and what makes sense next.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integrated Form Section */}
        <section className="relative w-full py-32 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primaryOne/5 to-transparent pointer-events-none" />
          <div className="container max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-mina font-bold">
                Send a message. <span className="text-primaryOne italic">We&apos;ll reply.</span>
              </h2>
            </div>
            <ContactSection />
          </div>
        </section>

        {/* Final Statement */}
        <section className="container max-w-5xl mx-auto px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primaryOne" />
              <div className="w-1.5 h-1.5 rounded-full bg-primaryOne opacity-50" />
              <div className="w-1.5 h-1.5 rounded-full bg-primaryOne opacity-20" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-mina font-bold italic text-gray-400/80 leading-tight">
              &quot;A good project starts with a clear conversation.&quot;
            </h2>
            <p className="text-primaryOne font-bold uppercase tracking-[0.3em] text-xs">
              Seynation Digital
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
