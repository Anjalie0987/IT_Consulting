"use client";

import React from "react";

const expertiseItems = [
    {
        title: "Digital Transformation Strategy",
        description: "We assess where organizations stand today and define transformation strategies that modernize operations, improve customer experience, and enable sustainable growth—without disrupting business continuity."
    },
    {
        title: "IT Strategy & Roadmapping",
        description: "We design technology strategies aligned with business priorities, helping leadership teams plan investments, modernize platforms, and build roadmaps that balance innovation, risk, and stability."
    },
    {
        title: "Business Process Optimization",
        description: "We analyze end-to-end processes to identify inefficiencies, reduce operational cost, and improve performance—using data, automation, and practical redesign to deliver tangible outcomes."
    },
    {
        title: "Technology Advisory",
        description: "We provide independent, experience-led guidance on technology decisions—helping leaders choose the right platforms, architectures, and partners while minimizing risk and maximizing long-term value."
    }
];

export default function StrategyExpertise() {
    return (
        <section className="w-full bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Desktop: Grid / Mobile: Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Sticky Content */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 lg:pb-24">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug mb-6">
                                Our Expertise in Strategy & Consulting
                            </h2>
                            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-md">
                                We help organizations define direction, make confident decisions, and execute strategy with clarity. Our consulting expertise bridges business objectives and technology execution—ensuring strategy translates into measurable results.
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
                                <p className="text-base leading-relaxed text-slate-600">
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
