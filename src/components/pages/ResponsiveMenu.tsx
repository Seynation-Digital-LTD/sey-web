"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavbarMenu } from "@/app/mockdata/data";

interface ResponsiveMenuProps {
  open: boolean;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="font-semibold uppercase bg-gradient-to-bl from-primaryOne via-primarySix to-primarySeven text-white py-10 m-5 rounded-3xl">
            <ul className="flex flex-col gap-4 items-center justify-center">
              {NavbarMenu.map((item) => (
                <li key={item.id}> <a href={item.link} className=""> {item.title}</a></li>
              ))}
              
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
