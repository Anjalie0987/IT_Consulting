"use client";

import React from "react";

export default function CloudCapabilities() {
    return (
        <div className="w-full font-sans">

            {/* Section Header */}
            <div className="w-full bg-white py-20 px-6 md:px-12 text-center border-b border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Cloud & Infrastructure Capabilities
                </h2>
                <div className="w-16 h-[2px] bg-blue-600 mx-auto mt-3 mb-8 rounded-[1px]"></div>
            </div>

            {/* BLOCK 1: Cloud Strategy & Readiness (Dark) */}
            <section id="cloud-strategy" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Cloud Strategy & Readiness</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We help organizations assess their current infrastructure landscape and define a clear, actionable cloud strategy aligned with business goals. Our approach ensures cloud adoption is intentional, secure, and designed for long-term scalability—rather than driven by technology trends alone.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Assessed application portfolios, infrastructure, and operational readiness",
                                "Defined target cloud architectures aligned to security and compliance needs",
                                "Created phased migration and adoption roadmaps",
                                "Aligned cloud strategy with cost control and governance models"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium text-justify">
                            A clear, business-aligned cloud strategy that reduces risk, controls cost, and accelerates cloud adoption with confidence.
                        </p>
                    </div>
                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">“A successful cloud journey starts with clarity, not migration.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 2: Cloud Architecture & Engineering (White) */}
            <section id="cloud-architecture" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cloud Architecture & Engineering</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-justify">
                            We design and implement resilient, scalable cloud architectures that support modern workloads while meeting enterprise security and performance standards.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Designed secure, scalable cloud-native and hybrid architectures",
                                "Implemented infrastructure using automation and infrastructure-as-code",
                                "Built high-availability, fault-tolerant environments",
                                "Embedded security, monitoring, and cost controls by design"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                            Cloud platforms that are reliable, secure, and engineered to scale with business demand.
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
                                    “Cloud infrastructure should disappear into the background — and just work.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: Cloud Migration & Modernization (Dark) */}
            <section id="cloud-migration" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Cloud Migration & Modernization</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We help organizations modernize legacy environments and migrate workloads to the cloud with minimal disruption.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Assessed workloads for rehost, refactor, or replatform strategies",
                                "Planned and executed low-risk cloud migrations",
                                "Modernized legacy systems for cloud readiness",
                                "Ensured security, performance, and compliance throughout migration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium text-justify">
                            Modernized platforms that improve agility, reduce operational overhead, and unlock cloud value.
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
                                    “Migration is not the goal — modernization is.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 4: Cloud Operations, Security & Optimization (White) */}
            <section id="cloud-operations" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cloud Operations, Security & Optimization</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-justify">
                            We help organizations operate cloud platforms securely and efficiently at scale through governance, automation, and continuous optimization.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Implemented cloud operating models and governance frameworks",
                                "Optimized cloud spend through FinOps practices",
                                "Strengthened security, monitoring, and incident response",
                                "Enabled operational teams with automation and observability"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                            Well-governed, cost-efficient cloud environments that remain secure and resilient over time.
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
                                    “Well-governed cloud platforms scale without chaos.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
