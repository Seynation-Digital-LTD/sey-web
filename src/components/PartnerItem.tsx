"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PartnerItemProps {
  images: string[];
  from: number | string;
  to: number | string;
}

const PartnerItem: React.FC<PartnerItemProps> = ({ images, from, to }) => {
  return (
    <div className="flex overflow-hidden w-full relative">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 items-center"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-40 h-20 md:w-56 md:h-28 flex-shrink-0 group mx-6"
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md" />

            {/* Logo container */}
            <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 p-5 backdrop-blur-sm group-hover:border-white/60 transition-all duration-300 shadow-xl">
              <Image
                src={image}
                alt={`Partner logo ${index + 1}`}
                fill
                className="object-contain p-2 brightness-110 contrast-110"
              />
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 items-center"
      >
        {images.map((image, index) => (
          <div
            key={`clone-${index}`}
            className="relative w-40 h-20 md:w-56 md:h-28 flex-shrink-0 group mx-6"
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md" />

            {/* Logo container */}
            <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 p-5 backdrop-blur-sm group-hover:border-white/60 transition-all duration-300 shadow-xl">
              <Image
                src={image}
                alt={`Partner logo ${index + 1}`}
                fill
                className="object-contain p-2 brightness-110 contrast-110"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnerItem;
