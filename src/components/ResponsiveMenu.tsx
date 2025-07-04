"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavbarMenu } from "@/app/mockdata/data";
import Link from "next/link";
import { Button } from "./ui/button";

interface ResponsiveMenuProps {
  open: boolean;
  onClose: () => void;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-40"
        >
          <div className="font-semibold uppercase bg-gradient-to-bl from-primaryOne via-primarySix to-primarySeven text-white py-10 mx-5 rounded-3xl flex flex-col gap-6 items-center justify-center">
            <ul className="flex flex-col gap-4 items-center text-base">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} onClick={onClose}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* "Get a Quote" button */}
            <Link href="/getquote" onClick={onClose}>
              <Button variant="outline" size="sm">
                Get a Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
