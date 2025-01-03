import React from "react";
import { motion } from "framer-motion";

interface PatnerItemProps {
  images: string[];
  from: number | string;
  to: number | string;
}

const PatnerItem: React.FC<PatnerItemProps> = ({ images, from, to }) => {
  return (
    <div className="flex overflow-hidden w-full MyGradient">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Partner logo ${index + 1}`}
            className="w-24 md:w-36 lg:w-48 object-contain pr-4 md:pr-8 lg:pr-12"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Partner logo ${index + 1}`}
            className="w-24 md:w-36 lg:w-48 object-contain pr-4 md:pr-8 lg:pr-12"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PatnerItem;
