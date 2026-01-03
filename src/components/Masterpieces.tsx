"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Websites",
    name: "Oltau Safaris",
    image: "/assets/oltau1.png",
    link: "/portfolio",
  },
  {
    id: 2,
    title: "Systems",
    name: "Winga POS",
    image: "/assets/winga1.png",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Marketing",
    name: "Digital Ads Campaign",
    image: "/assets/digitalmarketing.png",
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Apps",
    name: "AI Crop Detector",
    image: "/assets/addapp2.jpg",
    link: "/portfolio",
  },
];

export const Masterpieces = () => {
  return (
    <section className="w-full py-24 bg-transparent text-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h6 className="text-primaryOne font-bold tracking-widest text-xs uppercase mb-4">Our Gallery</h6>
            <h2 className="text-4xl lg:text-6xl font-mina font-bold leading-tight">
              Selected <br />
              <span className="italic">Masterpieces.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio" className="group flex items-center gap-4 text-white hover:text-primaryOne transition-colors font-medium">
              View All Work
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primaryOne transition-colors">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Horizontal Scroll Snap Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-10 scrollbar-hide -mx-4 px-4 lg:-mx-8 lg:px-8">
          {portfolioItems.map((item, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-primaryOne text-white rounded-full text-[10px] font-bold tracking-wider mb-2">
                    {item.title}
                  </span>
                  <h3 className="text-2xl font-mina font-bold mb-4">{item.name}</h3>
                  <Link href={item.link} className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-primaryOne transition-colors">
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
