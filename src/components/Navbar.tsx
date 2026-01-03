"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";
import { seynation } from "../app/index.js";
import { NavbarMenu } from "../app/mockdata/data";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 pt-6 px-4 md:px-8">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className={`mx-auto max-w-7xl h-20 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
            scrolled 
            ? "bg-black/60 border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]" 
            : "bg-white/5 border-white/5 backdrop-blur-md"
          }`}
        >
          <div className="h-full container mx-auto flex items-center justify-between px-8">
            {/* Logo area */}
            <div className="flex items-center gap-2 group">
              <Link href="/" className="relative flex items-center">
                <div className="absolute -inset-2 bg-primaryOne/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image 
                  src={seynation} 
                  alt="Seynation" 
                  priority 
                  className="h-8 w-auto transform transition-transform group-hover:scale-105" 
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {NavbarMenu.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="relative group text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors py-2"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primaryOne to-transparent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-6">
              <Link href="/getquote" className="hidden md:block">
                <button className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-primaryOne hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                  Get a Quote
                </button>
              </Link>

              <button
                className="lg:hidden p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
                onClick={() => setOpen(!open)}
              >
                {open ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[90] bg-black/80 lg:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {NavbarMenu.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-mina font-bold text-white hover:text-primaryOne transition-colors"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <Link href="/getquote" onClick={() => setOpen(false)}>
                  <button className="px-10 py-4 rounded-full bg-primaryOne text-white font-bold text-lg shadow-2xl">
                    Get a Quote
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
