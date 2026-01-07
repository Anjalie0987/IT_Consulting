"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SuccessStoryModal({ story, isOpen, onClose }) {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && story && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    ></motion.div>

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-black/5 rounded-full backdrop-blur-md transition-colors border border-transparent hover:border-black/10 group"
                            aria-label="Close Modal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800 group-hover:text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Scrollable Content Area */}
                        <div className="overflow-y-auto flex-1 custom-scrollbar">

                            {/* Cover Image */}
                            <div className="relative w-full h-64 md:h-80 bg-gray-200">
                                <img
                                    src={story.coverImage}
                                    alt={`${story.industry} Success Story`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Industry Label Overlay (Optional visual touch) */}
                                <div className="absolute top-6 left-6 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20">
                                    {story.industry}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-8 md:p-12 space-y-10">

                                {/* Header Section */}
                                <div className="border-b border-gray-100 pb-8">
                                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">
                                        {story.industry}
                                    </h3>
                                    <p className="text-xl md:text-2xl font-serif text-gray-900 leading-relaxed">
                                        {story.summary}
                                    </p>
                                </div>

                                {/* Challenge & Solution Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {/* Challenge */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
                                            Client Challenge
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            {story.challenge}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                            Our Solution
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            {story.solution}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
