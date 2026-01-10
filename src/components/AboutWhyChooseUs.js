"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        title: "Client-First Approach",
        desc: "We prioritize your business goals above all else, ensuring every solution is tailored to your unique challenges.",
        label: "PARTNERSHIP"
    },
    {
        title: "Deep Industry Expertise",
        desc: "Our consultants bring decades of specialized experience across financial, healthcare, and manufacturing sectors.",
        label: "KNOWLEDGE"
    },
    {
        title: "End-to-End Ownership",
        desc: "From initial strategy to final deployment and maintenance, we take full accountability for outcomes.",
        label: "ACCOUNTABILITY"
    },
    {
        title: "Scalable Solutions",
        desc: "We architect systems designed to grow with you, ensuring future resilience and adaptability.",
        label: "GROWTH"
    },
    {
        title: "Trust & Security",
        desc: "Security is baked into everything we do, protecting your assets and reputation at every level.",
        label: "INTEGRITY"
    },
    {
        title: "Results That Matter",
        desc: "We focus on tangible business impact, measuring success by your operational improvements and ROI.",
        label: "IMPACT"
    }
];

export default function AboutWhyChooseUs() {
    const [currentIndex, setCurrentIndex] = useState(1); // Start with second item centered

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    // Calculate indices for visible cards (prev, current, next)
    // We actually need a window of indices. For a carousel where we want 3 visible,
    // we can render them all but position them based on `currentIndex`.
    // Actually, a simpler approach for a "center focused" slider with Framer Motion is to specific positions for relative indices.

    const getCardPosition = (index) => {
        const position = (index - currentIndex + services.length) % services.length;
        // Adjusted relative index where 0 is center, -1 is left, 1 is right
        // But with modulo logic above: 
        // If length is 6, current is 1.
        // index 0: (0-1+6)%6 = 5 (Left-Left) -> effectively left neighbor (wrap)
        // index 1: (1-1+6)%6 = 0 (Center)
        // index 2: (2-1+6)%6 = 1 (Right)

        // Let's refine relative index calculation for wrapping centered view
        let relativeIndex = index - currentIndex;
        if (relativeIndex > 2) relativeIndex -= services.length;
        if (relativeIndex < -2) relativeIndex += services.length;

        return relativeIndex;
    };

    return (
        <section className="w-full bg-[#FDFBF7] py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Why Choose Us
                    </h2>
                    <h3 className="text-xl md:text-2xl font-serif italic text-gray-700 mb-6 font-medium">
                        Clarity in Complexity. Impact at Scale.
                    </h3>
                    <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
                        We don't just deliver technology; we deliver confidence, crafting solutions that stand the test of time and market shifts.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative h-[450px] flex justify-center items-center">
                    <AnimatePresence>
                        {services.map((service, index) => {
                            const position = getCardPosition(index);

                            // We only render text/interaction for visible cards (-1, 0, 1)
                            const isVisible = position >= -1 && position <= 1;
                            if (!isVisible) return null;

                            return (
                                <motion.div
                                    key={index}
                                    className={`absolute w-[350px] md:w-[400px] h-[400px] rounded-[2rem] shadow-xl overflow-hidden cursor-pointer bg-slate-900 border border-white/10`}
                                    initial={false}
                                    animate={{
                                        x: position * 420, // Spacing
                                        scale: position === 0 ? 1 : 0.9, // Scale effect
                                        opacity: position === 0 ? 1 : 0.6,
                                        zIndex: position === 0 ? 10 : 5,
                                        filter: position === 0 ? "blur(0px)" : "blur(1px)",
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    {/* Card Background Image/Texture */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black z-0">
                                        {/* Subtle pattern overlay */}
                                        <div className="absolute inset-0 opacity-20 pattern-grid-lg"></div>
                                        {/* Abstract glow */}
                                        <div className={`absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-opacity duration-500 ${position === 0 ? 'opacity-100' : 'opacity-0'}`}></div>
                                    </div>

                                    {/* Card Content Overlay */}
                                    <div className="relative z-10 h-full flex flex-col p-8 md:p-10">

                                        {/* Upper Label */}
                                        <div className="mb-auto">
                                            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
                                                {service.label}
                                            </span>
                                        </div>

                                        {/* Main Content */}
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                                {service.desc}
                                            </p>
                                        </div>


                                    </div>

                                    {/* Dark Overlay for non-active cards (extra dimming) */}
                                    {position !== 0 && (
                                        <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none transition-all duration-300"></div>
                                    )}

                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center items-center gap-8 mt-12">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 group"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 group"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
