"use client";

import { motion } from "framer-motion";

export default function LeadershipHero() {
    return (
        <section className="relative w-full min-h-[50vh] flex items-center justify-center bg-[#0E0E0E] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E0E] via-[#111111] to-[#1A1A1A] opacity-90"></div>

                {/* Subtle Radial Glow - similar to other heroes for consistency */}
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
                    Leadership
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
                    className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mt-6"
                >
                    Guiding vision. Driving impact.
                </motion.p>

                {/* Supporting Text */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-base md:text-lg text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto mt-4"
                >
                    Meet the leaders shaping our direction and helping organizations solve complex challenges through technology and strategy.
                </motion.p>

            </div>
        </section>
    );
}
