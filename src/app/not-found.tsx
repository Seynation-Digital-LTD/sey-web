"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex items-center justify-center overflow-hidden">
      
      {/* Universal Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="relative inline-block">
            <motion.h1 
              animate={{ 
                x: [0, -2, 2, -2, 0],
                opacity: [1, 0.8, 1, 0.9, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[12rem] md:text-[20rem] font-mina font-bold leading-none text-white/5 select-none"
            >
              404
            </motion.h1>
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.span 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="text-4xl md:text-6xl font-mina font-bold italic text-primaryOne drop-shadow-[0_0_15px_rgba(128,0,0,0.8)]"
               >
                 Lost in <br /> Innovation.
               </motion.span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-6 max-w-lg mx-auto"
          >
            <p className="text-gray-400 text-lg md:text-xl font-inter leading-relaxed">
              The coordinates you provided lead to uncharted digital territory. 
              Let&apos;s guide you back to the mastermind hub.
            </p>
            
            <Link 
              href="/"
              className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-primaryOne hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] uppercase tracking-widest text-xs font-mina"
            >
              Return to Reality
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient Glitch Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {[...Array(20)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-1 h-1 bg-primaryOne rounded-full"
             initial={{ 
               x: Math.random() * 100 + "%", 
               y: Math.random() * 100 + "%",
               opacity: Math.random()
             }}
             animate={{ 
               y: [null, Math.random() * 100 + "%"],
               opacity: [0, 1, 0]
             }}
             transition={{ 
               duration: Math.random() * 10 + 5, 
               repeat: Infinity,
               ease: "linear"
             }}
           />
         ))}
      </div>
    </div>
  );
}
