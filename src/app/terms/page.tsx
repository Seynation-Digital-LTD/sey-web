"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | Seynation Digital";
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
              Terms of <span className="text-primaryOne italic drop-shadow-[0_0_30px_rgba(255,0,0,0.4)]">Service</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Clear terms for a transparent partnership. Understand your rights and our commitments.
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
                <h2 className="text-3xl font-mina font-bold">Acceptance of Terms</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  By accessing or using Seynation Digital&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
                <p>
                  We reserve the right to update or modify these terms at any time. Your continued use of our services following any changes indicates your acceptance of the new terms.
                </p>
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
                <h2 className="text-3xl font-mina font-bold">Services Provided</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Seynation Digital provides a range of digital services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Digital Marketing & Social Media Management</li>
                  <li>Website Design & Development</li>
                  <li>Graphics Design & Branding</li>
                  <li>Content Creation & Strategy</li>
                  <li>Mobile Application Development</li>
                </ul>
                <p>
                  All services are subject to availability and will be provided as outlined in individual project agreements or proposals.
                </p>
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
                <h2 className="text-3xl font-mina font-bold">User Responsibilities</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As a client or user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Make timely payments as outlined in project agreements</li>
                  <li>Provide necessary materials and feedback in a timely manner</li>
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
                <h2 className="text-3xl font-mina font-bold">Intellectual Property</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  All content, designs, code, and materials created by Seynation Digital remain our intellectual property until final payment is received. Upon full payment:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ownership of commissioned work transfers to the client as specified in the project agreement</li>
                  <li>We retain the right to showcase the work in our portfolio unless otherwise agreed</li>
                  <li>Pre-existing materials and templates remain our property</li>
                  <li>Source code and proprietary tools remain our intellectual property</li>
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
                <h2 className="text-3xl font-mina font-bold">Limitation of Liability</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Seynation Digital shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.
                </p>
                <p>
                  We make every effort to ensure quality and timeliness but do not guarantee specific results from marketing campaigns or digital strategies.
                </p>
              </div>
            </motion.section>

            {/* Section 06 */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold text-primaryOne/20">06</span>
                <h2 className="text-3xl font-mina font-bold">Contact Information</h2>
              </div>
              <div className="pl-0 lg:pl-20 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  For questions or concerns about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 mt-4">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:hello@seynation.co" className="text-primaryOne hover:underline">hello@seynation.co</a></p>
                  <p><strong className="text-white">Location:</strong> Dar es Salaam, Tanzania</p>
                  <p><strong className="text-white">Website:</strong> <a href="https://seynation.co" className="text-primaryOne hover:underline">https://seynation.co</a></p>
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
