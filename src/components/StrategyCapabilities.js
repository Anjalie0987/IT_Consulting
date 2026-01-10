"use client";

import React from "react";

export default function StrategyCapabilities() {
    return (
        <div className="w-full font-sans">

            {/* Section Header */}
            <div className="w-full bg-white py-20 px-6 md:px-12 text-center border-b border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Strategy & Consulting Capabilities
                </h2>
                <div className="w-16 h-[2px] bg-blue-600 mx-auto mt-3 mb-8 rounded-[1px]"></div>
            </div>

            {/* BLOCK 1: Digital Transformation (Dark) */}
            <section id="digital-transformation" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Digital Transformation</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                            We assess where your organization stands today and define a transformation strategy that modernizes operations, enhancing customer experiences and sustainability—without disrupting core business continuity.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Agreed a robust and systematic assessment methodology to enable enterprise-wide alignment",
                                "Tuned transformation priorities to business strategy, technology maturity, and risk appetite",
                                "Evaluated initiatives across operations, platforms, data, and security"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">“Transformation is not about technology — it’s about changing how the business works.”</p>
                            </div>
                            <div className="border-l-2 border-gray-600 pl-6">
                                <p className="text-xl font-medium text-gray-300 leading-tight">“We help organizations move from fragmented initiatives to enterprise-wide impact.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 2: IT Strategy & Roadmap (White) */}
            <section id="it-strategy-roadmap" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">

                    {/* Visual Panel (Left on Desktop, First on Mobile) */}
                    <div className="h-full min-h-[480px] bg-gradient-to-br from-[#0B1120] via-[#0f172a] to-[#1e3a8a] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden rounded-sm shadow-sm order-1">
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="border-l-2 border-blue-400 pl-6">
                                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    “A strong IT strategy turns ambition into an executable roadmap.”
                                </p>
                            </div>
                            <div className="border-l-2 border-blue-800/50 pl-6">
                                <p className="text-xl font-medium text-white/80 leading-tight">
                                    “We align technology investments with business priorities to deliver measurable outcomes.”
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content (Right on Desktop, Second on Mobile) */}
                    <div className="order-2">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">IT Strategy & Roadmap</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            We help organizations design technology strategies that are directly aligned with business priorities. Our IT strategy and roadmap services provide leadership teams with clarity on where to invest, what to modernize, and how to sequence initiatives for maximum impact.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Defined future-state technology architecture aligned to business goals",
                                "Prioritized initiatives based on value, risk, and feasibility",
                                "Balanced innovation with operational stability",
                                "Created phased roadmaps with measurable milestones"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-2.5 h-1.5 w-1.5 bg-gray-900 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            The result is a clear, actionable roadmap that enables confident decision-making, disciplined execution, and sustained technology-driven growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: Business Process Optimization (Dark) */}
            <section id="process-optimization" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20 text-white">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Business Process Optimization</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                            We analyze end-to-end business processes to identify inefficiencies, reduce operational cost, and improve performance. Our approach focuses on practical redesign, data-driven insights, and targeted automation to deliver measurable improvements across the value chain.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Assessed end-to-end workflows across functions to identify bottlenecks and redundancies",
                                "Redesigned processes using data, automation, and lean principles",
                                "Reduced operational overhead while improving speed, quality, and consistency"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-green-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">“Efficiency is not about doing more — it’s about doing what matters better.”</p>
                            </div>
                            <div className="border-l-2 border-gray-600 pl-6">
                                <p className="text-xl font-medium text-gray-300 leading-tight">“We simplify processes to improve performance, reduce cost, and scale with confidence.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 4: Technology Advisory (White) */}
            <section id="technology-advisory" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">

                    {/* Visual Panel (Left on Desktop, First on Mobile) */}
                    <div className="h-full min-h-[480px] bg-gradient-to-br from-[#0B1120] via-[#0f172a] to-[#1e3a8a] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden rounded-sm shadow-sm order-1">
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="border-l-2 border-blue-400 pl-6">
                                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    “The right technology decision today defines tomorrow’s advantage.”
                                </p>
                            </div>
                            <div className="border-l-2 border-blue-800/50 pl-6">
                                <p className="text-xl font-medium text-white/80 leading-tight">
                                    “Independent guidance that reduces risk and maximizes long-term value.”
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Technology Advisory</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                            We provide independent, experience-led guidance to help organizations make confident technology decisions. Our advisory services focus on selecting the right platforms, architectures, and partners—balancing innovation with risk, cost, and long-term business value.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Advised leadership teams on platform, architecture, and vendor decisions",
                                "Evaluated technology options based on business fit, scalability, and risk",
                                "Supported complex decision-making with practical, unbiased recommendations"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-2.5 h-1.5 w-1.5 bg-gray-900 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
}
