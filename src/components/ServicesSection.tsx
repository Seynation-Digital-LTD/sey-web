"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { branding2, web, mobile, digitalstrategy, ecom2, digitalmarketing } from "../app/index.js";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "From stunning landing pages to complex web applications, we engineer digital experiences that convert.",
    image1: web,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-primaryOne/20 to-primaryOne/5"
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions that live in your users' pockets.",
    image1: mobile,
    colSpan: "md:col-span-1",
    bg: "bg-white/5"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Data-driven strategies to amplify your voice and reach your target audience.",
    image1: digitalmarketing,
    colSpan: "md:col-span-1",
    bg: "bg-white/5"
  },
  {
    id: 4,
    title: "E-Commerce",
    description: "Scalable online stores built for speed, security, and sales growth.",
    image1: ecom2,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-primaryThree/20 to-primaryThree/5"
  },
  {
    id: 5,
    title: "Branding",
    description: "Crafting memorable brand identities that resonate and remain.",
    image1: branding2,
    colSpan: "md:col-span-1",
    bg: "bg-white/5"
  },
  {
    id: 6,
    title: "Content Strategy",
    description: "Compelling narratives that engage, educate, and inspire action.",
    image1: digitalstrategy,
    colSpan: "md:col-span-2",
    bg: "bg-white/5"
  },
];

export const ServicesSection = () => {
  return (
    <section className="w-full py-20 bg-transparent text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primaryOne/10 rounded-full blur-[120px] mix-blend-screen opacity-30" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-primaryThree/10 rounded-full blur-[120px] mix-blend-screen opacity-20" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading Section */}
        <div className="text-center space-y-4 mb-16">
          <motion.h6 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mina font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
          >
            Capabilities
          </motion.h6>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="font-inter text-gray-400 max-w-xl text-lg">
              A comprehensive suite of digital services designed to elevate your brand.
            </p>
            <div className="h-1 w-20 bg-primaryOne rounded-full mt-2" />
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group rounded-[2rem] overflow-hidden border border-white/10 backdrop-blur-md p-8 flex flex-col justify-between h-[300px] md:h-[350px] ${item.colSpan} ${item.bg} hover:border-white/20 transition-all duration-300`}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-2xl border border-white/5 shadow-inner">
                  {/* Icon Rendering - Simplified for mixed sources */}
                  <div className="relative w-8 h-8">
                     <Image
                        src={item.image1}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                  </div>
                </div>
                <h3 className="font-mina text-2xl md:text-3xl font-bold mb-3 group-hover:text-primaryThree transition-colors">
                  {item.title}
                </h3>
                <p className="font-inter text-gray-400 leading-relaxed text-sm md:text-base pr-4">
                  {item.description}
                </p>
              </div>

              {/* Decorative Number */}
              <div className="absolute bottom-4 right-6 text-[8rem] font-bold text-white/5 font-mina leading-none select-none pointer-events-none group-hover:text-white/10 transition-colors">
                0{item.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
