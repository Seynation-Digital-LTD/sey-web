"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const screenshots = [
    "/assets/hadraj_home.png",
    "/assets/hadraj_about.png",
    "/assets/hadraj_destinations.png",
];

export const HadrajPreview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(timer);
    }, []);

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
                        animate={{ y: ["0%", "-30%"] }} // Scroll down slightly to show content
                        transition={{
                            duration: 3.5, // Scroll duration matches interval closely
                            ease: "linear",
                            delay: 0.5, // Wait a bit before scrolling
                        }}
                        className="w-full"
                    >
                        <Image
                            src={screenshots[currentIndex]}
                            alt="Hadraj Safaris Preview"
                            width={800} // Adjust based on actual screenshot dimensions/aspect ratio
                            height={1600} // Adjust based on actual screenshot dimensions/aspect ratio
                            className="w-full h-auto object-cover object-top"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>

        </div>
    );
};
