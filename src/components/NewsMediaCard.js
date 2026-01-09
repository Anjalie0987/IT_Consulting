
"use client";

import { motion } from "framer-motion";

export default function NewsMediaCard({ item, onClick }) {

    // Extract YouTube ID
    const getYouTubeId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(item.youtubeUrl);
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
            onClick={() => onClick(item)}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer group transition-all duration-300 flex flex-col h-full"
        >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-200 overflow-hidden">
                {thumbnailUrl && (
                    <img
                        src={thumbnailUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-red-600 shadow-lg group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* Category Badge */}
                {item.category && (
                    <div className="absolute top-3 left-3 bg-white/95 px-2 py-1 rounded text-xs font-bold text-gray-900 uppercase tracking-wide shadow-sm">
                        {item.category}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.summary}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400 font-medium">
                    <span>{item.publishDate}</span>
                    <span className="flex items-center text-blue-600 group-hover:translate-x-1 transition-transform">
                        Watch Video
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
