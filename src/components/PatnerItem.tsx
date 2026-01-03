"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PatnerItemProps {
  images: string[];
  from: number | string;
  to: number | string;
}

const PatnerItem: React.FC<PatnerItemProps> = ({ images, from, to }) => {
  return (
    <div className="flex overflow-hidden w-full relative">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 items-center"
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-32 h-16 md:w-48 md:h-24 mx-8 flex-shrink-0">
            <Image
                src={image}
                alt={`Partner logo ${index + 1}`}
                fill
                className="object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" 
            />
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
          <div key={`clone-${index}`} className="relative w-32 h-16 md:w-48 md:h-24 mx-8 flex-shrink-0">
             <Image
                src={image}
                alt={`Partner logo ${index + 1}`}
                fill
                className="object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PatnerItem;
