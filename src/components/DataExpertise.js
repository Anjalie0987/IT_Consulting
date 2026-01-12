"use client";

import React from "react";

const expertiseItems = [
    {
        title: "Data Strategy & Foundations",
        description: "We assess data maturity, architecture, and governance to define a clear data strategy aligned with business priorities. Our work establishes reliable data foundations that enable analytics, AI, and regulatory compliance at scale."
    },
    {
        title: "Enterprise Data Platforms",
        description: "We design and implement modern data platforms that integrate data across systems, functions, and cloud environments. These platforms are built for scalability, security, and performance—supporting both operational and analytical use cases."
    },
    {
        title: "Advanced Analytics & Business Intelligence",
        description: "We enable organizations to move from descriptive reporting to insight-driven decision-making. By applying advanced analytics and modern BI practices, we help teams uncover trends, measure performance, and act with confidence."
    },
    {
        title: "Applied AI & Machine Learning",
        description: "We apply AI and machine learning where they create tangible value—from automation and prediction to decision support. Our focus is on practical, explainable AI solutions that integrate seamlessly into business workflows and operating models."
    }
];

export default function DataExpertise() {
    return (
        <section className="w-full bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Desktop: Grid / Mobile: Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Sticky Content */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 lg:pb-24">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug mb-6">
                                Our Expertise in Data, Analytics & AI
                            </h2>
                            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-md text-justify">
                                We help organizations turn data into a strategic asset by building trusted analytics foundations and applying AI where it delivers real business impact. Our approach focuses on clarity, governance, and measurable outcomes—ensuring insights drive better decisions, not just more dashboards.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Scrolling List (No Cards) */}
                    <div className="lg:col-span-7 flex flex-col space-y-12">
                        {expertiseItems.map((item, index) => (
                            <div key={index} className="flex flex-col space-y-3">
                                <h3 className="text-xl font-bold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="text-base leading-relaxed text-slate-600 text-justify">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
