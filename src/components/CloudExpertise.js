"use client";

import React from "react";

const expertiseItems = [
    {
        title: "Cloud Strategy & Readiness",
        description: "We assess your current infrastructure, operating model, and cloud maturity to define a clear, actionable cloud strategy. Our approach aligns cloud adoption with business objectives, security requirements, and risk tolerance—laying the foundation for scalable and controlled transformation."
    },
    {
        title: "Cloud Architecture & Platform Design",
        description: "We design secure, resilient, and cloud-native architectures that support modern applications and enterprise workloads. Our platform designs emphasize scalability, availability, cost optimization, and governance—ensuring infrastructure is ready to support growth and innovation."
    },
    {
        title: "Infrastructure Engineering & Automation",
        description: "We engineer infrastructure using automation-first and infrastructure-as-code principles to improve reliability and speed. By standardizing environments and automating provisioning, we reduce operational risk while enabling faster delivery across development, testing, and production."
    },
    {
        title: "Cloud Operations & Optimization",
        description: "We help organizations operate cloud platforms efficiently through strong observability, cost management, and operational best practices. Our focus is on stability, performance, and continuous optimization—so cloud environments remain secure, predictable, and cost-effective over time."
    }
];

export default function CloudExpertise() {
    return (
        <section className="w-full bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Desktop: Grid / Mobile: Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Sticky Content */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 lg:pb-24">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug mb-6">
                                Our Expertise in Cloud & Infrastructure
                            </h2>
                            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-md text-justify">
                                We help organizations design, modernize, and operate cloud and infrastructure platforms that are secure, resilient, and built for scale. Our expertise bridges strategy and execution—ensuring cloud adoption delivers reliability, performance, and long-term business value.
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
