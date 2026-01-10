"use client";

import { motion } from "framer-motion";

export const FloatingCTA = () => {
  return (
    <motion.div 
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 2 }}
       className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <a 
        href="mailto:hello@seynation.co"
        className="flex items-center gap-3 px-6 py-4 bg-primaryOne text-white font-bold rounded-full shadow-[0_0_30px_rgba(128,0,0,0.5)] hover:scale-110 transition-transform active:scale-95"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        Let&apos;s Talk
      </a>
    </motion.div>
  );
};
