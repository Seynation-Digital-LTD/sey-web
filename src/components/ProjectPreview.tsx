"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectPreviewProps {
    images: string[];
}

export const ProjectPreview = ({ images }: ProjectPreviewProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(timer);
    }, [images]);

    if (!images || images.length === 0) {
        return <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white/20">No preview images available</div>;
    }

    return (
        <div className="relative w-full h-full bg-white overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Scrolling Animation Container */}
                    <motion.div
                        animate={{ y: ["0%", "-20%"] }} // Scroll down slightly to show content - reduced to 20% to be safer for different aspect ratios
                        transition={{
                            duration: 3.5, // Scroll duration matches interval closely
                            ease: "linear",
                            delay: 0.5, // Wait a bit before scrolling
                        }}
                        className="w-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Project Preview ${currentIndex + 1}`}
                            width={1200}
                            height={1600}
                            className="w-full h-auto object-cover object-top"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
