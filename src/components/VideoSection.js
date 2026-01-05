"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Placeholder video ID

export default function VideoSection() {
    const sectionRef = useRef(null);

    // Track scroll progress: 0 when top of section hits bottom of viewport, 1 when bottom hits top.
    // Adjusted offset to trigger animation while section is in view.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // --- PARALLAX & MOTION VALUES (Desktop) ---

    // Background Parallax: Moves slower than scroll (y axis)
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    // Video Motion:
    // Starts closer to center (shifted left) and moves right to natural grid position.
    // "Centered" relative to the right column implies a significant negative X shift initially.
    // We'll move from approx -40% to 0%.
    const videoX = useTransform(scrollYProgress, [0.1, 0.6], ["-40%", "0%"]);

    // Video Opacity: Starts slightly lower, fully visible quickly
    const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);

    // Video Shadow: Deepens as it 'settles'
    const videoShadow = useTransform(
        scrollYProgress,
        [0.2, 0.8],
        ["0 20px 60px rgba(0,0,0,0.35)", "0 40px 120px rgba(0,0,0,0.55)"]
    );

    // Ambient Glow Intensity: Pulse/Increase with scroll
    const glowOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 0.8]);

    // Text Reveal: Staggered, simple fade + slight slide up/right to meet the video flow
    const textOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
    const textX = useTransform(scrollYProgress, [0.25, 0.55], [-20, 0]);


    return (
        <section
            ref={sectionRef}
            className="w-full relative py-24 lg:py-36 overflow-hidden"
        >
            {/* Background Layer (Fixed/Parallax & Subtle) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    style={{ y: bgY }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%]" // Taller for parallax
                >
                    <img
                        src="/backgrounds/video.bg.gif"
                        alt="Background"
                        className="w-full h-full object-cover pointer-events-none opacity-80"
                    />
                </motion.div>
                {/* Overlay for contrast */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>

            <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT SIDE - Text Content */}
                    <motion.div
                        style={{ opacity: textOpacity, x: textX }}
                        className="order-2 lg:order-1 hidden lg:block"
                    >
                        <span className="text-xs tracking-widest uppercase text-slate-300 font-bold mb-4 block">
                            INSIGHTS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                            Real impact. Real transformation.
                        </h2>
                        <p className="text-base md:text-lg text-slate-300 max-w-lg leading-relaxed">
                            Discover how we help organizations solve complex challenges through intelligent technology, deep industry expertise, and scalable digital solutions that deliver measurable business outcomes.
                        </p>
                    </motion.div>

                    {/* MOBILE TEXT (No Automation) */}
                    <div className="order-2 lg:hidden block">
                        <span className="text-xs tracking-widest uppercase text-slate-300 font-bold mb-4 block">
                            INSIGHTS
                        </span>
                        <h2 className="text-3xl font-bold text-white leading-tight mb-6">
                            Real impact. Real transformation.
                        </h2>
                        <p className="text-base text-slate-300 max-w-lg leading-relaxed">
                            Discover how we help organizations solve complex challenges through intelligent technology, deep industry expertise, and scalable digital solutions that deliver measurable business outcomes.
                        </p>
                    </div>


                    {/* RIGHT SIDE - Video UI */}
                    <div className="order-1 lg:order-2 w-full flex justify-end relative z-10">
                        {/* Ambient Glow Underlay (Desktop) */}
                        <motion.div
                            style={{ opacity: glowOpacity, x: videoX }}
                            className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full hidden lg:block z-0 transform translate-y-4"
                        />

                        {/* Video Container (Desktop Animated) */}
                        <motion.div
                            style={{
                                x: videoX,
                                opacity: videoOpacity,
                                boxShadow: videoShadow,
                            }}
                            className="relative w-full max-w-[740px] aspect-video bg-black rounded-3xl border border-white/10 overflow-hidden hidden lg:block z-10"
                        >
                            <iframe
                                src={VIDEO_URL}
                                title="Insights Video"
                                className="w-full h-full object-cover"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                        </motion.div>

                        {/* Mobile Video (Static) */}
                        <div className="relative w-full aspect-video bg-black rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden lg:hidden block z-10">
                            <iframe
                                src={VIDEO_URL}
                                title="Insights Video"
                                className="w-full h-full object-cover"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
