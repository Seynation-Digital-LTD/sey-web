"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { mastery, innovation, impact, collaboration } from "../../app/index.js";

const valueData = [
  {
    id: 1,
    title: "Clarity",
    description: "We keep things simple on purpose. Clear structure, clear messaging, clear decisions.",
    icon: mastery,
  },
  {
    id: 2,
    title: "Taste",
    description: "Details matter. We design with restraint and intention — not trends.",
    icon: innovation,
  },
  {
    id: 3,
    title: "Ownership",
    description: "We treat your project like it’s ours. We communicate, we deliver, we don’t disappear.",
    icon: collaboration,
  },
  {
    id: 4,
    title: "Results",
    description: "The goal is work that performs — people understand it, use it, and take action.",
    icon: impact,
  },
];

const processData = [
  {
    id: 1,
    title: "Discovery",
    description: "We learn the business, the audience, and what success should look like for this project.",
    step: "01",
  },
  {
    id: 2,
    title: "Strategy",
    description: "We define the direction — what to say, what to build, and what to prioritize first.",
    step: "02",
  },
  {
    id: 3,
    title: "Execution",
    description: "We design and build the work with care, then refine it until it feels right and works properly.",
    step: "03",
  },
  {
    id: 4,
    title: "Launch",
    description: "We ship cleanly, test properly, and stay available for fixes and improvements after launch.",
    step: "04",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Universal Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/10 rounded-full blur-[150px] mix-blend-screen opacity-40 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] mix-blend-screen opacity-30" />
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-primaryThree/5 rounded-full blur-[180px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10">
        {/* Cinematic Hero */}
        <section className="container max-w-7xl mx-auto px-4 pt-32 pb-24 lg:pt-48 lg:pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div className="space-y-4">
                <h6 className="text-primaryOne font-bold tracking-[0.3em] uppercase text-xs">
                  Since 2015
                </h6>
                <h1 className="text-4xl lg:text-6xl font-mina font-bold leading-tight">
                  We build the <br />
                  <span className="italic text-primaryOne">digital side</span> of brands.
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-primaryOne to-transparent rounded-full" />
              </div>
              <p className="font-inter text-gray-400 text-lg leading-relaxed max-w-xl">
                Web design, UX/UI, marketing, AI solutions, and content are offered as focused services depending on what you need.
                The work is simple: make your brand clear online, make it easy to use, and make it ready to grow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative group w-full max-w-lg"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primaryOne to-primaryThree rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                <video
                  src="/assets/storyvd3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Narrative Section - Our Story */}
        <section className="w-full py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-white/10"
              >
                <video
                  src="/assets/storyvd1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <h2 className="text-3xl lg:text-5xl font-mina font-bold">
                  About{" "}
                  <span className="text-primaryOne tracking-widest uppercase text-base block mt-2">
                    Seynation
                  </span>
                </h2>
                <p className="font-inter text-gray-400 text-lg leading-relaxed">
                  Seynation started as a simple idea: businesses deserve digital work that feels clear, looks right, and actually works.
                  <br />
                  <br />
                  Since then, we’ve worked with founders and teams who want the same thing, a strong online presence that people understand fast, trust quickly, and enjoy using.
                  <br />
                  <br />
                  We’re not here for noise. We’re here to do the work properly, website, UX, marketing, or AI, depending on what you need.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values - Glass Bento Grid */}
        <section className="container max-w-7xl mx-auto px-4 py-32">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-mina font-bold">
              The Sey <span className="text-primaryOne">Code.</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm">How we work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] hover:border-primaryOne/50 transition-all duration-500"
              >
                <div className="w-14 h-14 relative mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                  <Image src={item.icon} alt={item.title} fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 font-inter leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section - How We Work */}
        <section className="container max-w-7xl mx-auto px-4 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-12">
            <div className="space-y-4">
              <h6 className="text-primaryOne font-bold uppercase tracking-widest text-xs">
                Methodology
              </h6>
              <h2 className="text-4xl lg:text-5xl font-mina font-bold">
                How we <br /> <span className="italic">work.</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              A simple process that keeps the work clear, fast to review, and easy to build on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processData.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primaryOne/30 hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="text-6xl font-bold font-mina text-white/5 group-hover:text-primaryOne/20 transition-colors mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primaryOne transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission & Vision - Split Glass Cards */}
        <section className="container max-w-7xl mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <h3 className="text-3xl font-mina font-bold mb-6 text-primaryOne">Our Mission</h3>
              <p className="text-xl font-inter text-white leading-relaxed italic">
                &quot;To help brands show up clearly online, through work that looks right, works smoothly, and supports growth.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3rem] bg-gradient-to-bl from-white/10 to-transparent border border-white/10 backdrop-blur-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h3 className="text-3xl font-mina font-bold mb-6 text-primaryOne">Our Vision</h3>
              <p className="text-xl font-inter text-white leading-relaxed italic">
                &quot;To be the team people trust when the digital side of their brand needs to be done properly.&quot;
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container max-w-5xl mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 rounded-[4rem] bg-gradient-to-r from-primaryOne/20 to-primaryThree/20 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
            <h2 className="text-4xl lg:text-5xl font-mina font-bold mb-8">
              Want to build something <br /> <span className="italic text-primaryOne">that holds up?</span>
            </h2>
            <Link href="/contact">
              <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-primaryOne hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-2xl">
                Let’s talk
              </button>
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
