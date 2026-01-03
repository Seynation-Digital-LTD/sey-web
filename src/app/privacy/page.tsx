"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Seynation Digital";
  }, []);
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* Universal Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 pt-32 pb-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm font-medium text-primaryOne tracking-wider uppercase">Legal Center</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-mina font-bold leading-tight mb-6">
              Privacy <span className="text-primaryOne italic drop-shadow-[0_0_30px_rgba(255,0,0,0.4)]">Policy</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your privacy matters. Here&apos;s how we protect and manage your data with transparency and care.
            </p>

            <div className="mt-4 text-sm text-gray-500">
              Last Updated: January 2026
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Section 01 */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold text-primaryOne/20">01</span>
                <h2 className="text-3xl font-mina font-bold">Information We Collect</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We collect information you provide directly to us when you use our services, contact us, or engage with our digital platforms. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, phone number, and company details</li>
                  <li>Project requirements and communication preferences</li>
                  <li>Usage data, including IP addresses, browser types, and device information</li>
                  <li>Cookies and analytics data to improve user experience</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 02 */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold text-primaryOne/20">02</span>
                <h2 className="text-3xl font-mina font-bold">How We Use Your Information</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Your information helps us deliver exceptional services and tailor experiences to your needs:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To communicate with you about projects, updates, and support</li>
                  <li>To analyze usage patterns and optimize platform performance</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 03 */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold text-primaryOne/20">03</span>
                <h2 className="text-3xl font-mina font-bold">Data Protection & Security</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. Our practices include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure data storage with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on data privacy and protection</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 04 */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold text-primaryOne/20">04</span>
                <h2 className="text-3xl font-mina font-bold">Your Rights</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and review your personal data</li>
                  <li>Request corrections or updates to your information</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications at any time</li>
                  <li>Withdraw consent for data processing where applicable</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 05 */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold text-primaryOne/20">05</span>
                <h2 className="text-3xl font-mina font-bold">Contact Us</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  If you have questions about this Privacy Policy or how we handle your data, reach out to us:
                </p>
                <div className="space-y-2 mt-4">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:hello@seynation.co" className="text-primaryOne hover:underline">hello@seynation.co</a></p>
                  <p><strong className="text-white">Location:</strong> Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </motion.section>

          </div>

          {/* Footer CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primaryOne hover:bg-primaryOne/90 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-xl shadow-primaryOne/20"
            >
              Return to Homepage
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
