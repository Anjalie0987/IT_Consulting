"use client";

import { useState } from "react";
import { newsMedia } from "../data/newsMedia";
import NewsMediaCard from "./NewsMediaCard";
import NewsMediaModal from "./NewsMediaModal";
import { AnimatePresence } from "framer-motion";

export default function NewsMediaGrid() {
    const [selectedMediaItem, setSelectedMediaItem] = useState(null);

    // Sorting logic (if needed, currently basic)
    const sortedMedia = [...newsMedia].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    return (
        <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Empty State */}
                {newsMedia.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-xl font-medium text-gray-900">No news or media updates available at the moment.</h3>
                        <p className="text-gray-500 mt-2">Please check back soon.</p>
                    </div>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsMedia.map((item) => (
                        <NewsMediaCard
                            key={item.id}
                            item={item}
                            onClick={setSelectedMediaItem}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedMediaItem && (
                    <NewsMediaModal
                        item={selectedMediaItem}
                        onClose={() => setSelectedMediaItem(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
