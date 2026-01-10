"use client";

import React from "react";

const expertiseItems = [
    {
        title: "Custom Software Development",
        description: "We build bespoke software solutions tailored to specific business needs, operating environments, and growth objectives. Our teams design secure, scalable applications that integrate seamlessly with existing systems while remaining flexible enough to evolve as requirements change.",
        focusAreas: [
            "Enterprise-grade application architecture",
            "Secure development practices",
            "Scalable backend systems",
            "Long-term maintainability"
        ]
    },
    {
        title: "Web & Mobile Applications",
        description: "We design and engineer high-performance web and mobile applications that deliver consistent, intuitive experiences across devices and platforms, combining strong UX principles with robust engineering.",
        focusAreas: [
            "Responsive web applications",
            "Cross-platform mobile solutions",
            "Performance optimization",
            "Secure authentication"
        ]
    },
    {
        title: "Legacy System Modernization",
        description: "We help organizations modernize legacy systems without disrupting core business operations, reducing technical debt while preparing platforms for cloud-native and API-driven environments.",
        focusAreas: [
            "Legacy assessment and dependency mapping",
            "Incremental modernization",
            "Cloud-ready architecture",
            "Risk-managed transformation"
        ]
    },
    {
        title: "Platform & API Engineering",
        description: "We design resilient platforms and APIs that enable integration, scalability, and faster innovation, supporting ecosystem connectivity and long-term growth.",
        focusAreas: [
            "API-first architecture",
            "Platform scalability",
            "Secure service communication",
            "Integration enablement"
        ]
    }
];

export default function TechnologyExpertise() {
    return (
        <section className="w-full bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Desktop: Grid / Mobile: Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Sticky Content */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 lg:pb-24">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug mb-6">
                                Our Expertise in Technology & Engineering
                            </h2>
                            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-md">
                                We design, build, and modernize technology platforms that form the backbone of modern enterprises. Our engineering approach focuses on scalability, security, and long-term maintainability—ensuring technology accelerates business outcomes, not complexity.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Scrolling List */}
                    <div className="lg:col-span-7 flex flex-col space-y-16">
                        {expertiseItems.map((item, index) => (
                            <div key={index} className="flex flex-col space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-slate-600">
                                        {item.description}
                                    </p>
                                </div>

                                {item.focusAreas && (
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                                            Focus Areas
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                                            {item.focusAreas.map((area, i) => (
                                                <div key={i} className="flex items-center text-sm text-slate-700">
                                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                                                    {area}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
