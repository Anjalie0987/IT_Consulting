// "use client";

// import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function SuccessStoryModal({ story, isOpen, onClose }) {
//     // Prevent background scrolling when modal is open
//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "unset";
//         }
//         return () => {
//             document.body.style.overflow = "unset";
//         };
//     }, [isOpen]);

//     // Handle ESC key to close
//     useEffect(() => {
//         const handleEsc = (e) => {
//             if (e.key === "Escape") onClose();
//         };
//         window.addEventListener("keydown", handleEsc);
//         return () => window.removeEventListener("keydown", handleEsc);
//     }, [onClose]);

//     return (
//         <AnimatePresence>
//             {isOpen && story && (
//                 <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
//                     {/* Backdrop */}
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={onClose}
//                         className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//                     ></motion.div>

//                     {/* Modal Container */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95, y: 20 }}
//                         animate={{ opacity: 1, scale: 1, y: 0 }}
//                         exit={{ opacity: 0, scale: 0.95, y: 20 }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                         className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
//                     >
//                         {/* Close Button */}
//                         <button
//                             onClick={onClose}
//                             className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-black/5 rounded-full backdrop-blur-md transition-colors border border-transparent hover:border-black/10 group"
//                             aria-label="Close Modal"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800 group-hover:text-black">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>

//                         {/* Scrollable Content Area */}
//                         <div className="overflow-y-auto flex-1 custom-scrollbar">

//                             {/* Cover Image */}
//                             <div className="relative w-full h-64 md:h-80 bg-gray-200">
//                                 <img
//                                     src={story.coverImage}
//                                     alt={`${story.industry} Success Story`}
//                                     className="w-full h-full object-cover"
//                                 />
//                                 {/* Industry Label Overlay (Optional visual touch) */}
//                                 <div className="absolute top-6 left-6 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20">
//                                     {story.industry}
//                                 </div>
//                             </div>

//                             {/* Text Content */}
//                             <div className="p-8 md:p-12 space-y-10">

//                                 {/* Header Section */}
//                                 <div className="border-b border-gray-100 pb-8">
//                                     <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">
//                                         {story.industry}
//                                     </h3>
//                                     <p className="text-xl md:text-2xl font-serif text-gray-900 leading-relaxed">
//                                         {story.summary}
//                                     </p>
//                                 </div>

//                                 {/* Challenge & Solution Grid */}
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                                     {/* Challenge */}
//                                     <div>
//                                         <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
//                                             <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
//                                             Client Challenge
//                                         </h4>
//                                         <p className="text-gray-600 leading-relaxed text-base">
//                                             {story.challenge}
//                                         </p>
//                                     </div>

//                                     {/* Solution */}
//                                     <div>
//                                         <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
//                                             <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
//                                             Our Solution
//                                         </h4>
//                                         <p className="text-gray-600 leading-relaxed text-base">
//                                             {story.solution}
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             )}
//         </AnimatePresence>
//     );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { useEffect } from "react";

export default function SuccessStoryModal({ story, isOpen, onClose }) {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => (document.body.style.overflow = "unset");
    }, [isOpen]);

    if (!isOpen || !story) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

                {/* Dark Backdrop (Click to close) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* The Modal Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col md:flex-row"
                >

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full text-gray-800 md:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Left Side: Image (Sticky on Desktop) */}
                    <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-gray-900 sticky top-0">
                        {story.imageUrl && (
                            <img
                                src={story.imageUrl}
                                alt={story.industry}
                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold tracking-wider uppercase bg-blue-600 rounded-full">
                                {story.industry}
                            </span>
                            <h2 className="text-2xl font-bold leading-tight">{story.summary}</h2>
                        </div>
                    </div>

                    {/* Right Side: Scrollable Content */}
                    <div className="w-full md:w-3/5 p-8 bg-white">

                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-red-500 pl-3 mb-3">The Challenge</h3>
                            <div className="prose prose-sm text-gray-600">
                                <PortableText value={story.challenge} />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-3">Our Solution</h3>
                            <div className="prose prose-sm text-gray-600">
                                <PortableText value={story.solution} />
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t text-center">
                            <p className="text-gray-500 text-sm mb-4">Want similar results?</p>
                            <a href="/contact" className="inline-block bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                Contact Us
                            </a>
                        </div>

                    </div>

                </motion.div>
            </div>
        </AnimatePresence>
    );
}