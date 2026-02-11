"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData, PortfolioItem } from "../../data/portfolioData";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Ref for horizontal scrolling interaction
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle category button click
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Get unique categories from portfolio items
  // First map to get all categories, then set to unique, then map to object
  const uniqueCategories = [
    { id: "all", title: "All" },
    ...Array.from(new Set(portfolioData.map(item => item.category))).map(cat => ({
      id: cat,
      title: cat === "uiux" ? "UI/UX" : cat.charAt(0).toUpperCase() + cat.slice(1) + (cat === "social" ? " Media" : "s")
    }))
  ];

  // Filter portfolios
  const filteredPortfolios =
    selectedCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/20 rounded-full blur-[150px] mix-blend-screen opacity-60 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/10 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-primaryThree/5 rounded-full blur-[180px] opacity-30" />
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="px-4 pt-44 pb-8">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mina font-extrabold text-4xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-white to-gray-400 drop-shadow-2xl"
            >
              Digital Masterpieces
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-inter text-md lg:text-lg text-gray-400 max-w-2xl leading-relaxed"
            >
              Explore our curated gallery of innovations.
            </motion.p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center pb-8 px-4">
          <div className="flex flex-wrap gap-3 justify-center bg-white/5 backdrop-blur-2xl p-2 rounded-2xl border border-white/10 shadow-2xl ring-1 ring-white/5">
            {uniqueCategories.map((item) => (
              <button
                key={item.id}
                onClick={() => handleCategoryClick(item.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 tracking-wide capitalize ${selectedCategory === item.id
                    ? "bg-primaryOne text-white shadow-[0_0_20px_rgba(128,0,0,0.4)] scale-105"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Cinema Reel (Horizontal Scroll Snap) - 2 Rows */}
        <div className="flex-grow flex flex-col justify-center pb-10">
          <div
            ref={sliderRef}
            className="grid grid-rows-2 grid-flow-col gap-6 px-[5vw] py-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {filteredPortfolios.map((item, index) => (
              <PortfolioCard
                key={index}
                item={item}
              />
            ))}
            {/* Spacer */}
            <div className="w-[5vw]" />
          </div>

          <div className="text-center text-gray-500 font-light tracking-widest uppercase text-xs mt-2 animate-pulse">
            Drag or Scroll Horizontally &larr; &rarr;
          </div>
        </div>
      </div>
    </div>
  );
}

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <Link href={`/portfolio/${item.slug}`} className="block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-[280px] w-[320px] md:h-[320px] md:w-[450px] cursor-pointer overflow-hidden rounded-[1.5rem] bg-white/5 border border-white/10 shadow-xl transition-all snap-center"
      >
        <div className="absolute inset-0 z-0">
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-2 py-0.5 bg-primaryOne/80 backdrop-blur-md rounded-full text-[10px] font-semibold tracking-wide mb-2 shadow-lg border border-primaryOne/50">
            {item.title}
          </span>
          <h3 className="text-xl md:text-2xl font-mina font-bold mb-1 leading-tight drop-shadow-lg truncate">{item.name}</h3>
        </div>
      </motion.div>
    </Link>
  );
};
