"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogCTA() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-20 mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-primaryOne/10 via-primaryThree/5 to-transparent border border-white/10 p-8 md:p-12"
        >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primaryOne/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primaryThree/20 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="font-mina text-3xl md:text-4xl font-bold mb-4 text-white">
                    Ready to Build Something{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOne to-primaryThree">
                        Brilliant?
                    </span>
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                    Let's turn your vision into reality. Whether it's a website, app, or digital strategy, we're here to help you succeed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/getquote"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primaryOne hover:bg-primaryThree text-white font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primaryOne/20"
                    >
                        Get a Free Quote
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Contact Us
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}
