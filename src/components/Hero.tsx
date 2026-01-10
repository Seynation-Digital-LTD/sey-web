
"use client";
import { Button } from "./ui/button";
import { hero3 } from "../app/index.js"; // Keeping import for now, but might replace usage
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroPage = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Animated Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/20 rounded-full blur-[120px] mix-blend-screen opacity-40 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primaryThree/10 rounded-full blur-[120px] mix-blend-screen opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20 lg:pt-0">
        
        {/* Left Content - Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-primaryOne font-bold tracking-widest text-xs uppercase">The Mastermind Agency</span>
          </div>
          
          <h1 className="font-mina font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6 drop-shadow-2xl">
            We Engineer <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryThree to-primaryOne">Digital Brilliance.</span>
          </h1>
          
          <p className="font-inter text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Shaping tomorrow’s digital world today. We transform complex challenges into powerful, elegant solutions that drive growth.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/portfolio">
              <Button className="px-8 py-6 text-lg rounded-xl bg-primaryOne hover:bg-primaryOne/90 text-white shadow-[0_0_20px_rgba(128,0,0,0.3)] transition-all hover:scale-105 border-0">
                View Masterpieces
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105">
                About Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Visual/Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end"
        >
            <div className="relative">
                {/* Decorative Elements around image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primaryOne to-primaryThree rounded-[2rem] opacity-20 blur-xl animate-pulse" />
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
                    <Image
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    src={hero3}
                    alt="Digital Excellence"
                    priority
                    />
                </div>
                {/* Floating Badge */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-8 -left-8 bg-transparent border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                >
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <div>
                        <p className="text-white text-sm font-bold">System Status</p>
                        <p className="text-xs text-gray-500">All Systems Operational</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primaryOne to-transparent opacity-50" />
      </motion.div>
    </div>
  );
};
