"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-transparent text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content - Text */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h6 className="font-mina font-bold text-4xl lg:text-5xl mb-4 leading-tight">
                We build the <br />
                <span className="text-primaryOne">digital side</span> of brands.
              </h6>
              <div className="h-1 w-24 bg-gradient-to-r from-primaryOne to-transparent mx-auto lg:mx-0 rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-inter text-gray-400 text-lg leading-relaxed"
            >
              That can mean web design, UX design, or digital marketing, depending on what’s needed. Each service is approached on its own terms, with care, clear thinking, and attention to how it will be used over time. The aim is simple: do the work properly, so brands feel confident relying on it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <Link href="/about">
                <Button className="px-8 py-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all text-white backdrop-blur-sm">
                  Our story
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Video/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primaryOne to-primaryThree rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <video
                src="/assets/aboutvd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
