"use client";

import React from "react";

export default function EmergingDigitalCapabilities() {
    return (
        <div className="w-full font-sans">

            {/* Section Header */}
            <div className="w-full bg-white py-20 px-6 md:px-12 text-center border-b border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Expertise in Emerging Technologies
                </h2>
                <div className="w-16 h-[2px] bg-blue-600 mx-auto mt-3 mb-8 rounded-[1px]"></div>
            </div>

            {/* BLOCK 1: Startups & Digital Businesses (Dark) */}
            <section id="startups-digital-businesses" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Startups & Digital Businesses</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We partner with startups and digital-first businesses to design scalable technology foundations, accelerate product development, and support growth from early traction to enterprise scale.
                            <br /><br />
                            Our approach balances speed, reliability, and long-term architectural discipline—ensuring innovation does not create future constraints.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Product architecture and MVP-to-scale platforms",
                                "Cloud-native infrastructure and automation",
                                "Engineering velocity with security and governance",
                                "Data foundations supporting rapid experimentation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium text-justify">
                            Digital platforms that scale confidently, adapt quickly, and support sustained growth.
                        </p>
                    </div>
                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">“Digital-first companies win by scaling fast—without breaking foundations.”</p>
                                <p className="text-base text-gray-400 mt-4 font-medium">We help startups grow with intent, not technical debt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 2: Blockchain & Crypto Consulting (White) */}
            <section id="blockchain-crypto-consulting" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
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
                                    “Blockchain succeeds when innovation meets discipline.”
                                </p>
                                <p className="text-base text-gray-300 mt-4 font-medium">We help organizations move from hype to value.</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Blockchain & Crypto Consulting</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-justify">
                            We help organizations navigate blockchain and crypto initiatives with a focus on real-world utility, security, and regulatory awareness.
                            <br /><br />
                            Our consulting approach emphasizes architecture, risk management, and operational readiness—moving beyond experimentation toward sustainable adoption.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Blockchain platform architecture and integration",
                                "Crypto infrastructure, wallets, and custody solutions",
                                "Regulatory alignment and risk assessment",
                                "Secure smart contract and protocol design"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                            Blockchain solutions that are secure, compliant, and designed for real-world use.
                        </p>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: Web3 & Decentralized Platforms (Dark) */}
            <section id="web3-decentralized-platforms" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Web3 & Decentralized Platforms</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We support Web3 and decentralized platform initiatives with a focus on scalability, security, and integration with existing enterprise ecosystems.
                            <br /><br />
                            Our work bridges decentralized technologies with operational, governance, and user-experience realities.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Decentralized application (dApp) architecture",
                                "Web3 platform scalability and performance",
                                "Identity, access, and trust frameworks",
                                "Integration with traditional enterprise systems"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium text-justify">
                            Decentralized platforms that are resilient, usable, and built for long-term adoption.
                        </p>
                    </div>

                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">
                                    “Decentralization works when platforms are built for people—not just protocols.”
                                </p>
                                <p className="text-base text-gray-400 mt-4 font-medium">We design Web3 systems that scale responsibly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
