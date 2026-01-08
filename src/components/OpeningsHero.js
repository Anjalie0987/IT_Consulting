"use client";

import { motion } from "framer-motion";

export default function OpeningsHero() {
    return (
        <section className="relative w-full min-h-[50vh] flex items-center justify-center bg-[#0E0E0E] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E0E] via-[#111111] to-[#1A1A1A] opacity-90"></div>

                {/* Subtle Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Content Container - Center Aligned */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                >
                    Current Openings
                </motion.h1>

                {/* Accent Line */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 80, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="h-[2px] bg-[#DC2626] mx-auto mt-6"
                ></motion.div>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mt-6"
                >
                    Explore open roles and find an opportunity to grow, learn, and make an impact with us.
                </motion.p>

            </div>
        </section>
    );
}
