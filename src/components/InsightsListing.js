"use client";

import { motion } from "framer-motion";

export default function InsightsListing() {
    // STATIC CONTENT - NO CMS
    const insights = [
        {
            category: "Cloud & Engineering",
            title: "Modernizing Legacy Systems Without Disrupting the Business",
            summary: "Legacy systems continue to power critical operations, yet they often limit agility and innovation. This insight explores practical approaches to modernization that balance risk, continuity, and long-term scalability.",
            meta: "Dec 2024 • 6 min read"
        },
        {
            category: "Cybersecurity",
            title: "Building Cyber Resilience in an Era of Constant Threats",
            summary: "As cyber risks evolve, organizations must shift from reactive security measures to resilient, proactive strategies. This perspective outlines how leaders can strengthen security while enabling business growth.",
            meta: "Dec 2024 • 5 min read"
        },
        {
            category: "Data & Analytics",
            title: "Why Data Platforms Fail — and How to Get Them Right",
            summary: "Many data initiatives struggle to deliver value due to fragmented ownership and unclear objectives. This insight examines the common pitfalls and the foundations of successful, business-aligned data platforms.",
            meta: "Nov 2024 • 7 min read"
        },
        {
            category: "Enterprise Applications",
            title: "Rethinking ERP Transformation for Long-Term Value",
            summary: "ERP programs often focus on technology upgrades rather than business outcomes. This article explores how organizations can approach ERP transformation as a strategic enabler, not just a system replacement.",
            meta: "Nov 2024 • 6 min read"
        },
        {
            category: "Artificial Intelligence",
            title: "Moving Beyond AI Experiments to Enterprise-Scale Impact",
            summary: "While many organizations pilot AI initiatives, few achieve enterprise-wide impact. This insight discusses how leaders can operationalize AI responsibly to drive measurable business results.",
            meta: "Oct 2024 • 6 min read"
        },
        {
            category: "Industry Perspectives",
            title: "Technology Priorities Shaping the Public Sector",
            summary: "Public sector organizations face increasing pressure to modernize services while maintaining trust and compliance. This perspective highlights key technology priorities shaping the future of public services.",
            meta: "Oct 2024 • 5 min read"
        }
    ];

    return (
        <section className="bg-[#fafafa] py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Grid Layout - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insights.map((insight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200"
                        >
                            {/* Category */}
                            <div className="mb-4">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    {insight.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-200 leading-tight">
                                {insight.title}
                            </h4>

                            {/* Summary */}
                            <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                                {insight.summary}
                            </p>

                            {/* Meta & Read Indicator (Hidden by default, visible on hover if desired, or simplified) */}
                            <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
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
