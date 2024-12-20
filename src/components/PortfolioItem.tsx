import React from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface PortfolioItemProps {
  divItem: Array<{
    id: string | number;
    title: string;
    description: string;
    image: string | StaticImageData; // Allow both string and imported image types
    link: string;
  }>;
  from: number | string;
  to: number | string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ divItem, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 mb-11 gap-6"
      >
        {divItem.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-neutralOne p-4 rounded-lg w-[400px] h-[400px]"
          >
            <img
              src={typeof item.image === "string" ? item.image : item.image.src} // Handle both string and StaticImageData
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">{item.title}</h3>
            {/* <p className="text-sm text-gray-600">{item.description}</p> */}
            {/* <a
              href={item.link}
              className="mt-2 text-blue-500 hover:underline text-sm"
            >
              Learn More
              
            </a> */}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioItem;
