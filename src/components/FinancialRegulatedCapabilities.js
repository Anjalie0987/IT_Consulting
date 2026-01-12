"use client";

import React from "react";

export default function FinancialRegulatedCapabilities() {
    return (
        <div className="w-full font-sans">

            {/* Section Header */}
            <div className="w-full bg-white py-20 px-6 md:px-12 text-center border-b border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Expertise in Financial Industries
                </h2>
                <div className="w-16 h-[2px] bg-blue-600 mx-auto mt-3 mb-8 rounded-[1px]"></div>
            </div>

            {/* BLOCK 1: Banking & Financial Services (Dark) */}
            <section id="banking-financial-services" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Banking & Financial Services</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We partner with banks and financial institutions to modernize core systems, strengthen security, and enable digital innovation—while maintaining regulatory compliance, operational resilience, and customer trust.
                            <br /><br />
                            Our experience spans retail banking, corporate banking, payments, lending platforms, and financial infrastructure modernization.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Core banking modernization and platform transformation",
                                "Secure digital channels and customer experience platforms",
                                "Regulatory compliance, risk management, and audit readiness",
                                "Data platforms supporting real-time insights and reporting"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium text-justify">
                            Modern, resilient financial platforms that balance innovation with stability and regulatory confidence.
                        </p>
                    </div>
                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">“Modern banking is built on trust, resilience, and secure innovation.”</p>
                                <p className="text-base text-gray-400 mt-4 font-medium">We help financial institutions modernize without compromising control.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 2: Healthcare & Life Sciences (White) */}
            <section id="healthcare-life-sciences" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Panel (Left) */}
                    <div className="order-2 lg:order-1 h-[400px] bg-gradient-to-br from-[#0B1120] via-[#0f172a] to-[#1e3a8a] rounded-sm p-8 flex flex-col justify-center relative overflow-hidden shadow-sm border border-gray-100">
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <div className="border-l-2 border-blue-400 pl-6">
                                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    “Healthcare innovation succeeds when technology earns trust.”
                                </p>
                                <p className="text-base text-gray-300 mt-4 font-medium">We design systems that protect data, enable insight, and scale with care.</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Healthcare & Life Sciences</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-justify">
                            We support healthcare organizations and life sciences companies in building secure, interoperable, and compliant digital platforms that improve patient outcomes, operational efficiency, and data-driven decision-making.
                            <br /><br />
                            Our work spans providers, payers, health-tech platforms, and research-driven organizations operating in highly regulated environments.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Secure healthcare data platforms and interoperability",
                                "Compliance with healthcare regulations and data privacy standards",
                                "Modern digital experiences for patients and providers",
                                "Analytics platforms supporting clinical and operational insights"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                            Technology ecosystems that enable better care delivery, trusted data usage, and long-term scalability.
                        </p>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: Public Sector & Government (Dark) */}
            <section id="public-sector-government" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Public Sector & Government</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We work with public sector organizations and government bodies to modernize legacy systems, improve service delivery, and strengthen digital infrastructure—while ensuring security, transparency, and compliance.
                            <br /><br />
                            Our approach balances modernization with accountability, accessibility, and long-term sustainability.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Digital government platforms and citizen services",
                                "Secure data platforms and identity systems",
                                "Legacy modernization for public infrastructure",
                                "Governance, risk, and compliance frameworks"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium text-justify">
                            Future-ready public systems that improve service outcomes while maintaining trust and accountability.
                        </p>
                    </div>

                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">
                                    “Digital government is about service, security, and scale.”
                                </p>
                                <p className="text-base text-gray-400 mt-4 font-medium">We help public institutions modernize responsibly and sustainably.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
