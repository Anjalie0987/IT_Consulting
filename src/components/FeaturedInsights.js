"use client";

import { motion } from "framer-motion";

export default function FeaturedInsights() {
    // STATIC CONTENT - NO CMS
    const featuredInsights = [
        {
            category: "Digital Transformation",
            title: "Reimagining Digital Transformation for the Modern Enterprise",
            summary: "Organizations are moving beyond incremental digital initiatives toward enterprise-wide transformation. This insight explores how leaders can align technology, operating models, and culture to drive sustained business value.",
            meta: "Jan 2025 • 6 min read"
        },
        {
            category: "Data & Artificial Intelligence",
            title: "From Data to Decisions: Turning Analytics into Competitive Advantage",
            summary: "As data volumes grow, the challenge is no longer access but action. This perspective outlines how organizations can build analytics capabilities that enable faster, smarter decision-making at scale.",
            meta: "Jan 2025 • 5 min read"
        }
    ];

    return (
        <section className="bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-12 border-b border-gray-200 pb-4">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Featured Insights
                    </h2>
                </div>

                {/* Featured Insights Layout - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {featuredInsights.map((insight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-gray-100"
                        >
                            {/* Category */}
                            <div className="mb-4">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    {insight.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-200 leading-tight">
                                {insight.title}
                            </h3>

                            {/* Summary */}
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-grow">
                                {insight.summary}
                            </p>

                            {/* Meta */}
                            <div className="flex items-center pt-6 border-t border-gray-100 mt-auto">
                                <span className="text-sm text-gray-400 font-medium">
                                    {insight.meta}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
