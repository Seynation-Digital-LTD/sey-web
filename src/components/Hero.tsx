
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownLeft, Globe, Play, Star } from "lucide-react";

// Keeping the same rotating logic
export const HeroPage = () => {
  const words = ["Web Design", "Digital Marketing", "AI Solutions"];
  const [index, setIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX - window.innerWidth / 2) / 50,
      y: (clientY - window.innerHeight / 2) / 50
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#030303] text-white pt-24 lg:pt-0"
      onMouseMove={handleMouseMove}
    >

      {/* 1. Cinematic Video Background with Heavy Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/30 to-transparent z-10" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.07] z-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

        <video
          src="/assets/videos/vid2.mp4"
          autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-40 grayscale mix-blend-screen scale-105"
        />
      </div>

      {/* 2. Abstract Geometric Accents (Parallax) */}
      <motion.div
        animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primaryOne/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        className="absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-primaryThree/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"
      />

      {/* 3. Floating Dust Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden md:block">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.5, 0],
              x: Math.random() * 100 - 50
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">

        {/* Left Col: Typography & Manifesto */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left pt-0 md:pt-10">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 cursor-default"
          >
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-green-500" />
            </div>
            <span className="text-xs font-mono tracking-widest uppercase text-gray-300">Accepting New Clients</span>
          </motion.div>

          {/* Massive Headline */}


          <div className="font-mina font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[0.95] tracking-tight mb-8">

            {/* Line 1 */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 pb-2"
            >
              The Leading
            </motion.div>

            {/* Line 2: Animated Word + Agency */}
            <div className="flex flex-col sm:flex-row items-center lg:items-baseline gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                // Increased line-height/height slightly and added pb-2 to accommodate descenders and gradient clipping
                className="relative h-[1.4em] w-auto inline-flex overflow-hidden text-primaryOne pb-2"
              >
                {/* Spacer: Renders current word invisibly to set container width dynamically */}
                <div className="invisible whitespace-nowrap opacity-0">{words[index]}</div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={words[index]}
                    className="absolute left-0 top-0 whitespace-nowrap"
                  >
                    {words[index].split("").map((letter, i) => (
                      <motion.span
                        key={`${words[index]}-${i}`}
                        initial={{ y: 40, opacity: 0, rotateX: -90 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -40, opacity: 0, rotateX: 90 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: i * 0.05, // Stagger effect
                        }}
                        className="inline-block bg-gradient-to-r from-primaryOne to-primaryThree bg-clip-text text-transparent origin-bottom pb-1"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/40"
              >
                Agency<span className="text-primaryOne">.</span>
              </motion.div>
            </div>

          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-base md:text-lg text-gray-400 leading-relaxed mb-10 lg:border-l-2 lg:border-primaryOne/50 lg:pl-6 bg-white/5 lg:bg-transparent lg:bg-none py-4 px-4 lg:px-0 rounded-xl lg:rounded-none"
          >
            We build <span className="text-white font-medium">digital foundations</span> brands can confidently grow on, through thoughtful web design, strong <span className="text-white font-medium">UX</span>, and <span className="text-white font-medium">digital marketing</span> built to perform today and scale with you over time.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-primaryOne hover:text-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] flex items-center justify-center gap-3 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">View Portfolio <ArrowDownLeft className="w-5 h-5 group-hover:rotate-45 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-primaryThree to-primaryOne opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/30 text-lg transition-all group">
                <span>Get in Touch</span>
              </Button>
            </Link>
          </motion.div>

        </div>

        {/* Right Col: Interactive Glass Card */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-center perspective-1000">
          <motion.div
            initial={{ opacity: 0, rotateY: -10, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            whileHover={{ rotateY: -5, rotateX: 5, z: 50 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative w-80 h-[500px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-[2.5rem] backdrop-blur-2xl p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-style-3d group"
          >
            {/* Reflcetion Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-black/50 flex items-center justify-center border border-white/10 mb-8 shadow-inner">
                <Globe className="w-7 h-7 text-white animate-spin-slow" />
              </div>
              <h3 className="font-mina text-3xl font-bold leading-none mb-2">Global <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Reach</span></h3>
              <p className="text-[10px] text-white font-mono tracking-widest mt-2">SERVING CLIENTS WORLDWIDE</p>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-md">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-4xl font-bold font-mina text-white">4.9</span>
                  <span className="text-xs text-green-400 font-mono mb-1">▲ TOP RATED</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-primaryOne fill-primaryOne" />)}
                </div>
                <p className="text-[10px] text-gray-500 mt-2 leading-tight">Average Client Satisfaction Score based on 50+ recent deliverables.</p>
              </div>

              <Link href="/about" className="block transform transition-transform active:scale-95">
                <div className="w-full py-4 rounded-xl bg-white text-black text-center text-xs font-bold uppercase hover:bg-primaryOne hover:text-white transition-colors cursor-pointer tracking-wider">
                  Why Choose Us?
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Floating Element Behind */}
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-primaryOne rounded-full blur-[120px] opacity-30 -z-10 animate-pulse mix-blend-color-dodge" />
        </div>

      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 w-full flex justify-center py-4 z-20"
      >
        <div className="flex flex-col items-center gap-2 opacity-50">
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </motion.div>

    </div>
  );
};
