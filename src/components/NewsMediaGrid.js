"use client";

import { useState } from "react";
import NewsMediaModal from "./NewsMediaModal";
import { motion, AnimatePresence } from "framer-motion";

// Helper to extract YouTube ID for Thumbnail
const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default function NewsMediaGrid({ items }) {
    const [selectedMediaItem, setSelectedMediaItem] = useState(null);

    // Safety check for empty data
    const mediaList = items || [];

    return (
        <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Empty State */}
                {mediaList.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-xl font-medium text-gray-900">No news or media updates available at the moment.</h3>
                        <p className="text-gray-500 mt-2">Please check back soon.</p>
                    </div>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaList.map((item, index) => {
                        const videoId = getYouTubeId(item.youtubeUrl);
                        const thumbnailUrl = videoId
                            ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                            : '/images/default-news.jpg'; // Fallback if URL is invalid

                        return (
                            <motion.div
                                key={item._id || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedMediaItem(item)}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full border border-gray-100"
                            >
                                {/* Thumbnail Container */}
                                <div className="relative h-48 bg-black overflow-hidden">
                                    <img
                                        src={thumbnailUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </div>
                                    </div>
                                    {/* Category Badge */}
                                    {item.category && (
                                        <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm">
                                            {item.category}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-gray-400 text-xs font-medium mb-3">
                                        {new Date(item.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                                        {item.summary}
                                    </p>
                                    <div className="text-blue-600 text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Watch Video
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedMediaItem && (
                    <NewsMediaModal
                        item={selectedMediaItem}
                        isOpen={!!selectedMediaItem}
                        onClose={() => setSelectedMediaItem(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}