"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsOfService() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "By accessing and using the Seynation Digital website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site or services."
    },
    {
      title: "Intellectual Property",
      content: "All content, designs, code, and materials on this site are the intellectual property of Seynation Digital or its licensors. You may not reproduce, distribute, or create derivative works without our express permission."
    },
    {
      title: "Service Scope",
      content: "We provide digital, creative, and marketing solutions. The specific scope, deliverables, and timelines for individual projects will be outlined in separate client agreements or project proposals."
    },
    {
      title: "User Responsibilities",
      content: "You agree to provide accurate information and to use our site and services in a lawful manner. Any misuse or unauthorized access is strictly prohibited."
    },
    {
      title: "Limitation of Liability",
      content: "Seynation Digital shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use our services."
    },
    {
      title: "Governing Law",
      content: "These terms are governed by and construed in accordance with the laws of the United Republic of Tanzania. Any disputes shall be subject to the exclusive jurisdiction of the competent courts."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* Universal Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 pt-32 lg:pt-48 pb-32">
        <section className="container max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h6 className="text-primaryOne font-bold uppercase tracking-[0.4em] text-xs">Legal Center</h6>
              <h1 className="text-5xl lg:text-7xl font-mina font-bold">Terms of <span className="italic text-primaryOne">Service.</span></h1>
              <p className="text-gray-500 font-inter">Last Updated: January 3, 2026</p>
            </div>

            <div className="space-y-16 mt-24">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-8">
                     <span className="text-primaryOne/20 font-mina font-bold text-4xl group-hover:text-primaryOne transition-colors duration-500">0{index + 1}</span>
                     <div className="space-y-4">
                        <h2 className="text-2xl font-mina font-bold text-white group-hover:text-primaryOne transition-colors">
                          {section.title}
                        </h2>
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group-hover:border-primaryOne/30 transition-all duration-500">
                          <p className="text-gray-400 font-inter leading-relaxed text-lg">
                            {section.content}
                          </p>
                        </div>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-24 text-center">
              <p className="text-gray-500 text-sm font-inter">
                By using our services, you acknowledge that you have read and understood these Terms. For inquiries, contact <a href="mailto:legal@seynation.co" className="text-primaryOne hover:underline">legal@seynation.co</a>
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
