"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { bg } from "../../app/index.js";

export default function Solutions() {
  const solutionsData = [
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Build a loyal community and drive engagement with data-driven social media strategies tailored to your brand voice.",
      video: "/assets/smedia1.mp4",
      offerings: ["Community Growth", "Content Calendars", "Engagement", "Analytics"],
      color: "from-purple-500/20",
    },
    {
      id: "seo-ads",
      title: "SEO & Paid Ads",
      description: "Dominate search results and maximize ROI with precision-targeted PPC campaigns and organic SEO growth.",
      image: "/assets/emerge.jpg",
      offerings: ["Keyword Strategy", "Google Ads", "Technical SEO", "Conversion Optimization"],
      color: "from-blue-500/20",
    },
    {
      id: "content",
      title: "Content Creation",
      description: "Tell your story with compelling visuals, videos, and copy that resonates with your audience and converts.",
      video: "/assets/smedia3.mp4",
      offerings: ["Video Production", "Copywriting", "Photography", "Visual Storytelling"],
      color: "from-red-500/20",
    },
    {
      id: "web-design",
      title: "Website Design",
      description: "Stunning, user-centric web designs that blend aesthetics with functionality to create unforgettable digital experiences.",
      image: "/assets/ux.jpg",
      offerings: ["UI/UX Design", "Wireframing", "Responsive Layouts", "Design Systems"],
      color: "from-pink-500/20",
    },
    {
      id: "development",
      title: "Custom Development",
      description: "Robust, scalable software solutions built to solve complex business challenges and streamline operations.",
      video: "/assets/web2.mp4",
      offerings: ["Full-Stack Dev", "API Integration", "Cloud Solutions", "SaaS Platforms"],
      color: "from-cyan-500/20",
    },
    {
      id: "apps",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that keep your business at your customers' fingertips.",
      image: "/assets/addapp2.jpg",
      offerings: ["iOS & Android", "React Native", "App Store Optimization", "User Testing"],
      color: "from-green-500/20",
    },
    {
      id: "branding",
      title: "Brand Strategy",
      description: "Define your identity and position your brand for long-term success with a comprehensive strategic roadmap.",
      video: "/assets/smedia4.mp4",
      offerings: ["Brand Positioning", "Market Research", "Voice & Tone", "Go-to-Market"],
      color: "from-orange-500/20",
    },
    {
      id: "identity",
      title: "Identity & Logo",
      description: "Visual identity systems and logos that capture the essence of your brand and leave a lasting impression.",
      image: "/assets/about2.jpg",
      offerings: ["Logo Design", "Visual Assets", "Brand Guidelines", "Typography"],
      color: "from-indigo-500/20",
    },
    {
      id: "creative",
      title: "Creative Design",
      description: "Pushing boundaries with innovative graphic design that captures attention and communicates your message effectively.",
      image: "/assets/digitalmarketing.png",
      offerings: ["Marketing Materials", "Packaging", "Illustrations", "Print Design"],
      color: "from-yellow-500/20",
    },
  ];
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* Universal Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10">

        {/* Solutions Hero */}
        <section className="container max-w-7xl mx-auto px-8 pt-32 lg:pt-56 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl space-y-12"
          >
            <div className="space-y-4">
              <motion.h6
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primaryOne font-bold tracking-[0.5em] uppercase text-xs"
              >
                Our Expertise
              </motion.h6>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-mina font-bold leading-[0.9] tracking-tighter">
                Architecting <br />
                <span className="italic text-primaryOne">Possibilities.</span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center border-t border-white/10 pt-12">
              <p className="text-gray-400 text-xl lg:text-2xl font-inter max-w-2xl leading-relaxed">
                We don't just offer services; we engineer bespoke digital solutions. Whether it's a campaign or code, we build to dominate.
              </p>
              <div className="hidden md:block h-24 w-px bg-gradient-to-b from-primaryOne to-transparent" />
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-4xl font-mina">100+</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest">Global Deliveries</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Immersive Service Verticals */}
        <div className="pb-32">
          {solutionsData.map((item, index) => (
            <section
              key={item.id}
              className="relative min-h-screen py-32 flex items-center overflow-hidden border-t border-white/5"
            >
              {/* Background Glow for each section */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-20 pointer-events-none`} />

              <div className="container max-w-7xl mx-auto px-8 relative z-10">
                <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>

                  {/* Visual Content */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 w-full relative group"
                  >
                    <div className="absolute -inset-4 bg-primaryOne/10 rounded-[3rem] blur-2xl group-hover:bg-primaryOne/20 transition-all duration-700 opacity-50" />
                    <div className="relative aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl">
                      {item.video ? (
                        <video
                          src={item.video}
                          autoPlay loop muted playsInline
                          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 opacity-70 group-hover:opacity-100"
                        />
                      ) : (
                        <Image
                          src={item.image || bg}
                          alt={item.title}
                          fill
                          className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 opacity-70 group-hover:opacity-100"
                        />
                      )}

                      {/* Glass Overlay on Image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                      {/* Floating Indicator */}
                      <div className="absolute top-8 left-8">
                        <span className="text-primaryOne font-bold text-6xl opacity-20 font-mina">0{index + 1}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-12"
                  >
                    <div className="space-y-6">
                      <div className="h-1 w-20 bg-primaryOne rounded-full" />
                      <h2 className="text-4xl lg:text-6xl font-mina font-bold leading-tight">{item.title}</h2>
                      <p className="text-gray-400 text-xl leading-relaxed font-inter max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                      {item.offerings.map((offering) => (
                        <div key={offering} className="flex items-center gap-4 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-primaryOne group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_#ff0000] transition-all" />
                          <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase group-hover/item:text-white transition-colors">
                            {offering}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/solutions/${item.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold overflow-hidden mt-8"
                      >
                        <div className="absolute inset-0 bg-primaryOne translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10 group-hover:text-white transition-colors font-mina uppercase tracking-widest text-xs">Explore Solution</span>
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Closing CTA Section */}
        <section className="container max-w-7xl mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-20 lg:p-32 rounded-[4rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden text-center"
          >
            {/* Decorative Glow */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primaryOne/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primaryThree/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-12">
              <h2 className="text-5xl lg:text-7xl font-mina font-bold mb-8 leading-[0.9]">
                Ready to Scale <br />
                <span className="italic text-primaryOne">Your Legacy?</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-xl font-inter leading-relaxed">
                Brilliant ideas deserve a mastermind approach. Let&apos;s engineer the next phase of your brand together and dominate the digital landscape.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-12 py-6 bg-white text-black font-bold rounded-full hover:bg-primaryOne hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] font-mina uppercase tracking-widest text-sm"
                >
                  Start a Project
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
