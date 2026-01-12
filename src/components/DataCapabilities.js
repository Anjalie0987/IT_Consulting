"use client";

import React from "react";

export default function DataCapabilities() {
    return (
        <div className="w-full font-sans">

            {/* Section Header */}
            <div className="w-full bg-white py-20 px-6 md:px-12 text-center border-b border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Data, Analytics & AI Capabilities
                </h2>
                <div className="w-16 h-[2px] bg-blue-600 mx-auto mt-3 mb-8 rounded-[1px]"></div>
            </div>

            {/* BLOCK 1: Data Engineering (Dark) */}
            <section id="data-engineering" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Data Engineering</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We design and build scalable, reliable data platforms that form the foundation for analytics and AI. Our data engineering approach ensures data is accessible, trusted, and ready to support enterprise-wide decision-making.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Designed modern data architectures for batch and real-time processing",
                                "Built scalable data pipelines with strong data quality controls",
                                "Integrated data from cloud, on-prem, and third-party sources",
                                "Enabled analytics and AI through well-governed data platforms"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium text-justify">
                            A resilient data foundation that enables faster insights, advanced analytics, and AI at scale.
                        </p>
                    </div>
                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">“Reliable insights start with reliable data.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 2: Business Intelligence (White) */}
            <section id="business-intelligence" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Intelligence</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-justify">
                            We help organizations turn data into clear, actionable insights through intuitive dashboards and reporting that empower leaders to make confident, data-driven decisions.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Designed executive and operational dashboards aligned to business KPIs",
                                "Standardized metrics and reporting across teams",
                                "Enabled self-service analytics for faster decision-making",
                                "Improved data transparency and trust across the organization"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                            A single, trusted view of performance that drives alignment and accountability.
                        </p>
                    </div>

                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-[#0B1120] via-[#0f172a] to-[#1e3a8a] rounded-sm p-8 flex flex-col justify-center relative overflow-hidden shadow-sm border border-gray-100">
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <div className="border-l-2 border-blue-400 pl-6">
                                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    “When everyone sees the same truth, decisions get better.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: AI / ML Solutions (Dark) */}
            <section id="ai-solutions" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">AI / ML Solutions</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We design and deploy AI and machine learning solutions that solve real business problems, focusing on practical, scalable, and responsible AI.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Identified high-value AI and ML use cases aligned to business goals",
                                "Built and deployed predictive and prescriptive models",
                                "Integrated AI solutions into existing business workflows",
                                "Ensured governance, transparency, and responsible AI practices"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium text-justify">
                            AI solutions that improve efficiency, accuracy, and decision-making at scale.
                        </p>
                    </div>

                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">
                                    “AI delivers value when it’s built for the business — not the lab.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 4: Advanced Analytics (White) */}
            <section id="advanced-analytics" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Advanced Analytics</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-justify">
                            We apply advanced analytical techniques to uncover deeper insights, identify patterns, and support complex decision-making with confidence.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Applied advanced statistical and analytical models",
                                "Enabled scenario modeling and forecasting",
                                "Identified hidden patterns and performance drivers",
                                "Supported strategic and operational decision-making"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                            Deeper insights that help organizations anticipate change and act with confidence.
                        </p>
                    </div>

                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-[#0B1120] via-[#0f172a] to-[#1e3a8a] rounded-sm p-8 flex flex-col justify-center relative overflow-hidden shadow-sm border border-gray-100">
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <div className="border-l-2 border-blue-400 pl-6">
                                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    “Advanced analytics turns uncertainty into insight.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
