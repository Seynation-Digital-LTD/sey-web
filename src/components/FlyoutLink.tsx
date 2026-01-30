"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NavbarItem } from "@/app/mockdata/data";

export const FlyoutLink = ({ item }: { item: NavbarItem }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = item.subContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit group"
    >
      <Link
        href={item.link}
        className="relative text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors py-2 block"
      >
        {item.title}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out opacity-0"
        />
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primaryOne to-transparent transition-all duration-300 group-hover:w-full" />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 -translate-x-1/2 bg-[#0D0C0B]/90 backdrop-blur-3xl border border-white/10 text-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 w-[800px]"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            {/* Arrow indicator */}
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#0D0C0B]/90 border-l border-t border-white/10 backdrop-blur-3xl" />
            
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {item.subContent?.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xs font-bold text-primaryOne uppercase tracking-widest border-b border-white/10 pb-2 mb-4">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {section.items.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        className="group/link block"
                      >
                        <div className="text-sm font-medium text-gray-200 group-hover/link:text-white transition-colors">
                          {subItem.name}
                        </div>
                        {subItem.description && (
                          <div className="text-xs text-gray-500 mt-0.5 group-hover/link:text-gray-400 transition-colors">
                            {subItem.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative background element */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primaryOne/5 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
