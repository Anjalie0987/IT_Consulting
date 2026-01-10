"use client";

import { motion } from "framer-motion";

export default function CybersecurityRiskHero() {
    return (
        <section className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0E0E0E]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/bg/whatWeDo.jpg"
                    alt="Cybersecurity & Risk Background"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 z-1 bg-[#0E0E0E]/60"></div>
            <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0E0E0E]/80 via-transparent to-[#0E0E0E]/80"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-24 text-center">

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest uppercase"
                >
                    Cybersecurity & Risk
                </motion.h1>

                {/* Accent Line - Red for Security/Risk */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 80, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="h-[2px] bg-[#DC2626] mx-auto mt-6"
                ></motion.div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.8, ease: "easeOut" }}
                    className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto mt-8 font-medium"
                >
                    Protecting critical systems, data, and operations in an evolving threat landscape.
                </motion.p>

            </div>
        </section>
    );
}
