"use client";

import { motion } from "framer-motion";

export default function SuccessStoriesHero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0E0E0E]">
            {/* Background with Gradient and Shape */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#1A1A1A] to-[#0E0E0E] opacity-90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent opacity-50"></div>

                {/* Abstract Floating Cube / Geometric Effect */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/10 rounded-3xl rotate-12 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-700/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-24 text-center">

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-semibold text-white tracking-widest uppercase"
                >
                    Success Stories
                </motion.h1>

                {/* Accent Line */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 80, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="h-[2px] bg-[#DC2626] mx-auto mt-4"
                ></motion.div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.8, ease: "easeOut" }}
                    className="text-sm md:text-base text-[#B3B3B3] leading-relaxed max-w-2xl mx-auto mt-6"
                >
                    Real-world examples of how we help organizations solve complex challenges and deliver meaningful business outcomes through technology.
                </motion.p>

            </div>
        </section>
    );
}
