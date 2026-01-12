"use client";

import React from "react";

export default function TechnologyCapabilities() {
    return (
        <div className="w-full font-sans">

            {/* Section Header */}
            <div className="w-full bg-white py-20 px-6 md:px-12 text-center border-b border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Technology & Engineering Capabilities
                </h2>
                <div className="w-16 h-[2px] bg-blue-600 mx-auto mt-3 mb-8 rounded-[1px]"></div>
            </div>

            {/* BLOCK 1: Custom Software Engineering (Dark) */}
            <section id="custom-software" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Custom Software Engineering</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We design and build custom software solutions that are secure, scalable, and purpose-built for complex business environments. Our engineering approach focuses on long-term maintainability, performance at scale, and seamless integration with enterprise ecosystems.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Designed modular, domain-driven architectures aligned to business capabilities",
                                "Engineered high-performance applications with security-by-design principles",
                                "Built scalable systems optimized for cloud, data, and API-first environments",
                                "Reduced technical debt through clean code practices and continuous refactoring"
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
                                <p className="text-2xl font-bold text-white leading-tight">“Engineering is not just about writing code — it’s about building systems that endure.”</p>
                            </div>
                            <div className="border-l-2 border-gray-600 pl-6">
                                <p className="text-xl font-medium text-gray-300 leading-tight">“We help organizations move from fragile applications to resilient, scalable platforms built for long-term growth.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 2: Platform & API Engineering (White) */}
            <section id="platform-engineering" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">

                    {/* Visual Panel (Left on Desktop, First on Mobile) */}
                    <div className="h-full min-h-[480px] bg-gradient-to-br from-[#0B1120] via-[#0f172a] to-[#1e3a8a] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden rounded-sm shadow-sm order-1">
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="border-l-2 border-blue-400 pl-6">
                                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    “Strong platforms turn complexity into capability.”
                                </p>
                            </div>
                            <div className="border-l-2 border-blue-800/50 pl-6">
                                <p className="text-xl font-medium text-white/80 leading-tight">
                                    “We build platform foundations that empower teams, partners, and ecosystems to scale with confidence.”
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Platform & API Engineering</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-justify">
                            We design and engineer resilient platforms and API ecosystems that enable scale, integration, and long-term adaptability. Our platform and API engineering services help organizations modernize architectures, unlock data, and build foundations that support rapid innovation without sacrificing reliability.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Designed scalable, cloud-native platforms aligned to business and product strategy",
                                "Built secure, API-first architectures to enable seamless integration across systems",
                                "Implemented governance, versioning, and lifecycle management for APIs at scale",
                                "Enabled faster product delivery through reusable services and platform capabilities"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-2.5 h-1.5 w-1.5 bg-gray-900 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                            The result is a robust, integration-ready platform foundation that accelerates delivery, reduces complexity, and supports sustainable growth across the enterprise.
                        </p>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: Modern Application Development (Dark) */}
            <section id="modern-apps" className="w-full bg-[#0E0E0E] py-20 md:py-32 px-6 md:px-12 scroll-mt-20 text-white">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Modern Application Development</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                            We design and build modern, high-performance applications that deliver exceptional user experiences and adapt to evolving business needs. Our approach combines strong engineering foundations with product thinking to ensure scalability, security, and long-term maintainability.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Designed modular, cloud-ready applications using modern frameworks and architectures",
                                "Delivered responsive web and mobile experiences focused on performance and usability",
                                "Embedded security, scalability, and observability into application design",
                                "Enabled faster iteration through CI/CD, automation, and DevOps-aligned practices"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-400 leading-relaxed font-medium text-justify">
                            The result is modern, resilient applications that support rapid innovation while remaining stable, secure, and easy to evolve over time.
                        </p>
                    </div>
                    {/* Visual Panel */}
                    <div className="order-2 lg:order-2 h-[400px] bg-gradient-to-br from-blue-900 to-[#050510] rounded-sm p-8 flex flex-col justify-center relative border border-gray-800">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border-l-2 border-blue-500 pl-6">
                                <p className="text-2xl font-bold text-white leading-tight">“Modern applications are built for change — not just today.”</p>
                            </div>
                            <div className="border-l-2 border-gray-600 pl-6">
                                <p className="text-xl font-medium text-gray-300 leading-tight">“We help organizations deliver digital experiences that evolve as fast as their business.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 4: Legacy Modernization (White) */}
            <section id="legacy-modernization" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Legacy Modernization</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-justify">
                            We help organizations modernize legacy systems that limit agility, scalability, and innovation. Our legacy modernization approach focuses on reducing risk while incrementally transforming critical systems into modern, cloud-ready, and maintainable platforms—without disrupting ongoing operations.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium text-justify">
                            Rather than “rip and replace,” we apply a pragmatic modernization strategy that balances business continuity with long-term transformation goals.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Assessed legacy applications to identify modernization paths based on business value, technical risk, and complexity",
                                "Refactored and re-architected monolithic systems into modular, service-oriented, or cloud-native architectures",
                                "Improved performance, reliability, and scalability of mission-critical systems",
                                "Reduced technical debt while extending the lifespan of core platforms",
                                "Enabled seamless integration with modern applications, data platforms, and APIs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                            The result is a modernized technology foundation that supports faster innovation, lower operational risk, and improved time-to-market—while preserving the business logic that matters most.
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
                                    “Modernization is about unlocking value trapped in legacy systems.”
                                </p>
                            </div>
                            <div className="border-l-2 border-blue-800/50 pl-6">
                                <p className="text-xl font-medium text-white/80 leading-tight">
                                    “We help organizations evolve critical platforms without disrupting the business that depends on them.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
