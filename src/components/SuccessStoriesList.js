"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SuccessStoryModal from "./SuccessStoryModal";

export default function SuccessStoriesList({ stories }) {
    const [selectedStory, setSelectedStory] = useState(null);

    if (!stories || stories.length === 0) {
        return <div className="py-24 text-center text-gray-500">No stories found yet.</div>;
    }

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative h-[400px] w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                            onClick={() => setSelectedStory(story)} // <--- Opens the Modal
                        >
                            {/* Background Image */}
                            {story.imageUrl ? (
                                <img
                                    src={story.imageUrl}
                                    alt={story.industry}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gray-800 w-full h-full" />
                            )}

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>

                            {/* Card Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left">
                                <div className="mb-4">
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        {story.industry}
                                    </span>
                                </div>

                                <p className="text-white text-lg font-medium leading-relaxed line-clamp-3 mb-6">
                                    {story.summary}
                                </p>

                                <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                                    <span className="text-xs font-bold uppercase tracking-wider">Read Story</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* The Modal Component */}
            {selectedStory && (
                <SuccessStoryModal
                    story={selectedStory}
                    isOpen={!!selectedStory}
                    onClose={() => setSelectedStory(null)}
                />
            )}
        </section>
    );
}