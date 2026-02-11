"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectPreview } from "./ProjectPreview";
import { portfolioData } from "../data/portfolioData";

export const Masterpieces = () => {
  const featuredItem = portfolioData.find((item) => item.name === "Hadraj Safaris");

  // Choose which other items to show in the carousel
  const showcaseIds = [
    "oltau-safaris",
    "winga-pos",
    "addapp",
    "digital-marketing",
    "ghala-app",
    "neurotech-hq",
    "sumosa-logistics",
    "kujengana-social",
    "sadakalawe-social"
  ];

  const otherItems = portfolioData.filter((item) => showcaseIds.includes(item.id));

  return (
    <section className="w-full py-24 bg-transparent text-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h6 className="text-primaryOne font-bold tracking-widest text-xs uppercase mb-4">SO FAR THIS IS OUR</h6>
            <h2 className="text-4xl lg:text-6xl font-mina font-bold leading-tight">
              Portfolio
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio" className="group flex items-center gap-4 text-white hover:text-primaryOne transition-colors font-medium">
              View More Works
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primaryOne transition-colors">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Featured Item */}
        {featuredItem && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 group">
              <ProjectPreview images={featuredItem.previewImages || []} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-block px-4 py-1.5 bg-primaryOne text-white rounded-full text-xs font-bold tracking-wider">
                    FEATURED PROJECT
                  </span>
                  <span className="inline-block px-4 py-1.5 bg-white text-black rounded-full text-xs font-bold tracking-wider animate-pulse">
                    NEW LAUNCH
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-mina font-bold mb-6">{featuredItem.name}</h3>
                <Link
                  href={featuredItem.link}
                  target="_blank"
                  className="inline-flex items-center gap-3 text-lg font-medium text-white group-hover:text-primaryOne transition-colors"
                >
                  Visit Live Website
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-primaryOne/20 group-hover:border-primaryOne transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Horizontal Scroll Snap Grid for Other Items */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-10 scrollbar-hide -mx-4 px-4 lg:-mx-8 lg:px-8">
          {otherItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="snap-center shrink-0 w-[85vw] md:w-[45%] lg:w-[30%] group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-primaryOne text-white rounded-full text-[10px] font-bold tracking-wider">
                      {item.title}
                    </span>
                  </div>
                  <h3 className="text-2xl font-mina font-bold mb-4">{item.name}</h3>
                  <Link href={`/portfolio/${item.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-primaryOne transition-colors">
                    View Details
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primaryOne/20 group-hover:border-primaryOne transition-all">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          {/* End Spacer */}
          <div className="w-[10vw] shrink-0" />
        </div>

      </div>
    </section>
  );
};
