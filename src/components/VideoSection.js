"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Helper to convert standard YouTube/Vimeo links to Embed URLs
const getEmbedUrl = (url) => {
    if (!url) return null;

    // Check for YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        const videoId = (match && match[2].length === 11) ? match[2] : null;

        // --- CHANGED HERE ---
        // 1. autoplay=0 (Don't start automatically)
        // 2. controls=1 (Show the seek bar and buttons)
        // 3. mute=0 (Let sound play)
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0` : null;
    }

    // Check for Vimeo
    if (url.includes('vimeo.com')) {
        const regExp = /vimeo.com\/(\d+)/;
        const match = url.match(regExp);
        const videoId = match ? match[1] : null;
        return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=0&controls=1` : null;
    }

    return url;
};

export default function VideoSection({ data }) {
    const sectionRef = useRef(null);

    if (!data || data.isActive === false) return null;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const videoX = useTransform(scrollYProgress, [0.1, 0.6], ["-40%", "0%"]);
    const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);

    // Removed specific shadow animations that might interfere with player UI
    const glowOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 0.8]);
    const textOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
    const textX = useTransform(scrollYProgress, [0.25, 0.55], [-20, 0]);

    const renderVideoContent = () => {
        // CASE A: Uploaded File
        if (data.videoType === 'file' && data.videoFileUrl) {
            return (
                <video
                    className="w-full h-full object-cover"
                    controls // Added controls for file uploads too
                    playsInline
                >
                    <source src={data.videoFileUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        }

        // CASE B: YouTube / Vimeo Embed
        if (data.videoType === 'embed' && data.videoUrl) {
            const embedUrl = getEmbedUrl(data.videoUrl);
            if (!embedUrl) return null;

            return (
                <iframe
                    src={embedUrl}
                    title="Video Section"
                    // --- CHANGED HERE ---
                    // Removed 'pointer-events-none' so you can click the buttons
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            );
        }

        return <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-500">No Video Source</div>;
    };

    return (
        <section
            ref={sectionRef}
            className="w-full relative py-24 lg:py-36 overflow-hidden"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    style={{ y: bgY }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%]"
                >
                    <img
                        src="/backgrounds/video.bg.gif"
                        alt="Background"
                        className="w-full h-full object-cover pointer-events-none opacity-80"
                    />
                </motion.div>
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
                            {data.heading}
                        </h2>
                        <p className="text-base md:text-lg text-slate-300 max-w-lg leading-relaxed">
                            {data.description}
                        </p>
                    </motion.div>

                    {/* MOBILE TEXT */}
                    <div className="order-2 lg:hidden block">
                        <span className="text-xs tracking-widest uppercase text-slate-300 font-bold mb-4 block">
                            INSIGHTS
                        </span>
                        <h2 className="text-3xl font-bold text-white leading-tight mb-6">
                            {data.heading}
                        </h2>
                        <p className="text-base text-slate-300 max-w-lg leading-relaxed">
                            {data.description}
                        </p>
                    </div>


                    {/* RIGHT SIDE - Video UI */}
                    <div className="order-1 lg:order-2 w-full flex justify-end relative z-10">
                        <motion.div
                            style={{ opacity: glowOpacity, x: videoX }}
                            className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full hidden lg:block z-0 transform translate-y-4"
                        />

                        {/* Desktop Video Container */}
                        <motion.div
                            style={{
                                x: videoX,
                                opacity: videoOpacity,
                            }}
                            className="relative w-full max-w-[740px] aspect-video bg-black rounded-3xl border border-white/10 overflow-hidden hidden lg:block z-10 shadow-2xl"
                        >
                            {renderVideoContent()}
                        </motion.div>

                        {/* Mobile Video Container */}
                        <div className="relative w-full aspect-video bg-black rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden lg:hidden block z-10">
                            {renderVideoContent()}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}