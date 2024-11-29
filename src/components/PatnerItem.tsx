import React from "react";
import { motion } from "framer-motion";

interface PatnerItemProps {
  images: string[];
  from: number | string;
  to: number | string;
}

const PatnerItem: React.FC<PatnerItemProps> = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 mb-11"
      >
        {images.map((image, index) => {
          return (
            <img
              className=" flex flex-row items-center justify-center w-56 object-contain pr-12"
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 "
      >
        {images.map((image, index) => {
          return (
            <img
              className=" w-56 object-contain pr-12"
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default PatnerItem;
