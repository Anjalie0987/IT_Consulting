"use client";

import React from "react";

export default function CommercialConsumerCapabilities() {
    return (
        <div className="w-full font-sans">

            {/* Section Header */}
            <div className="w-full bg-white py-20 px-6 md:px-12 text-center border-b border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Expertise in Commercial & Consumer Industries
                </h2>
                <div className="w-16 h-[2px] bg-blue-600 mx-auto mt-3 mb-8 rounded-[1px]"></div>
            </div>

            {/* BLOCK 1: Retail & E-Commerce (Dark) */}
            <section id="retail-ecommerce" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Retail & E-Commerce</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                            We help retailers and e-commerce businesses build digital platforms that deliver seamless customer experiences, optimize operations, and scale with changing consumer behavior.
                            <br /><br />
                            Our work spans omnichannel commerce, digital storefronts, supply chain integration, and data-driven personalization.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Omnichannel commerce platforms and customer journeys",
                                "Scalable e-commerce architectures and integrations",
                                "Data-driven personalization and customer analytics",
                                "Secure payment systems and performance optimization"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium">
                            High-performance retail platforms that adapt to demand, improve conversion, and enable long-term growth.
                        </p>
                    </div>
                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">“Modern retail is built on experience, speed, and insight.”</p>
                                <p className="text-base text-gray-400 mt-4 font-medium">We help brands meet customers where they are—and scale from there.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 2: Manufacturing (White) */}
            <section id="manufacturing" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
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
                                    “Digital manufacturing connects systems, data, and decisions.”
                                </p>
                                <p className="text-base text-gray-300 mt-4 font-medium">We help manufacturers modernize without disrupting operations.</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Manufacturing</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                            We support manufacturing organizations in modernizing technology foundations, improving operational visibility, and enabling smarter, more connected production environments.
                            <br /><br />
                            Our approach bridges IT and operational systems to unlock efficiency, resilience, and data-driven decision-making.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Manufacturing system modernization and integration",
                                "Data platforms for operational visibility and analytics",
                                "Automation, reliability, and performance optimization",
                                "Secure, scalable infrastructure supporting production systems"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Connected manufacturing environments that improve efficiency, reliability, and operational intelligence.
                        </p>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: Logistics & Supply Chain (Dark) */}
            <section id="logistics-supply-chain" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Logistics & Supply Chain</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                            We help logistics and supply chain organizations build resilient, data-driven platforms that improve visibility, coordination, and operational efficiency across complex ecosystems.
                            <br /><br />
                            Our solutions support real-time decision-making and scalable growth in dynamic environments.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Supply chain visibility and tracking platforms",
                                "Integration across logistics partners and systems",
                                "Data platforms enabling forecasting and optimization",
                                "Secure, scalable infrastructure for distributed operations"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium">
                            Agile, transparent supply chains that adapt quickly to change and scale with demand.
                        </p>
                    </div>

                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">
                                    “Resilient supply chains are powered by visibility and trust.”
                                </p>
                                <p className="text-base text-gray-400 mt-4 font-medium">We design platforms that keep operations moving.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 4: Education (White) */}
            <section id="education" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Panel (Left) */}
                    <div className="order-2 lg:order-1 h-[400px] bg-gradient-to-br from-[#0B1120] via-[#0f172a] to-[#1e3a8a] rounded-sm p-8 flex flex-col justify-center relative overflow-hidden shadow-sm border border-gray-100">
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                            </div>
                            <div className="border-l-2 border-blue-400 pl-6">
                                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    “Education technology succeeds when access and trust scale together.”
                                </p>
                                <p className="text-base text-gray-300 mt-4 font-medium">We help institutions modernize learning responsibly.</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Education</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                            We work with educational institutions and learning platforms to modernize digital infrastructure, improve access to learning, and enable data-driven decision-making.
                            <br /><br />
                            Our approach supports scalability, security, and long-term sustainability in evolving education ecosystems.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Digital learning platforms and system modernization",
                                "Secure data platforms for student and institutional insights",
                                "Scalable infrastructure supporting remote and hybrid learning",
                                "Governance, privacy, and compliance frameworks"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Future-ready education platforms that improve access, engagement, and operational effectiveness.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
