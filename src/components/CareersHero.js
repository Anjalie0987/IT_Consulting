"use client";

import { motion } from "framer-motion";

export default function CareersHero() {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-[#0E0E0E] overflow-hidden">
            {/* 1. Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/backgrounds/career_bg.jpg"
                    alt="Careers Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay (Black ~60% opacity) */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content Container - Center Aligned */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                >
                    Join Us
                </motion.h1>

                {/* Accent Line */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 80, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="h-[2px] bg-[#DC2626] mx-auto mt-4"
                ></motion.div>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed max-w-3xl mx-auto mt-6"
                >
                    Build your career where technology, innovation, and impact come together.
                </motion.p>

            </div>
        </section>
    );
}
