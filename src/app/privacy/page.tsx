"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: "At Seynation Digital, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services."
    },
    {
      title: "Information Collection",
      content: "We collect information that you provide directly to us, such as when you request a quote, contact us, or sign up for our newsletter. This may include your name, email address, phone number, and project details."
    },
    {
      title: "Use of Information",
      content: "We use the information we collect to provide and improve our services, communicate with you, and personalize your experience. We may also use your information for marketing and promotional purposes with your consent."
    },
    {
      title: "Data Protection",
      content: "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure."
    },
    {
      title: "Third-Party Disclosure",
      content: "We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to provide our services."
    },
    {
      title: "Changes to Policy",
      content: "We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new policy on this page."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* Universal Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] opacity-20" />
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
              <h1 className="text-5xl lg:text-7xl font-mina font-bold">Privacy <span className="italic text-primaryOne">Policy.</span></h1>
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
                If you have any questions about our Privacy Policy, please contact us at <a href="mailto:privacy@seynation.co" className="text-primaryOne hover:underline">privacy@seynation.co</a>
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
