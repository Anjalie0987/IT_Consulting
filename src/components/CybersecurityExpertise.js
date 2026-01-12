"use client";

import React from "react";

const expertiseItems = [
    {
        title: "Security Strategy & Risk Assessment",
        description: "We assess security posture, risk exposure, and regulatory requirements to define practical security strategies aligned with business objectives. Our work helps leadership teams understand where to invest, what to prioritize, and how to reduce risk effectively."
    },
    {
        title: "Cybersecurity Architecture & Controls",
        description: "We design and implement security architectures and controls that protect critical systems, data, and users. Our approach focuses on defense-in-depth, zero-trust principles, and integration with existing enterprise platforms."
    },
    {
        title: "Identity, Access & Data Protection",
        description: "We help organizations secure access to systems and data through strong identity, authentication, and authorization models. This includes protecting sensitive data across cloud, on-premise, and hybrid environments."
    },
    {
        title: "Risk, Compliance & Resilience",
        description: "We support organizations in meeting regulatory and compliance requirements while building resilience against cyber threats. Our work ensures security controls, processes, and governance models are sustainable, auditable, and aligned with operational realities."
    }
];

export default function CybersecurityExpertise() {
    return (
        <section className="w-full bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Desktop: Grid / Mobile: Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Sticky Content */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 lg:pb-24">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug mb-6">
                                Our Expertise in Cybersecurity & Risk
                            </h2>
                            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-md text-justify">
                                We help organizations manage cyber risk with confidence by embedding security into technology, operations, and decision-making. Our approach balances protection, compliance, and business agility—ensuring security enables growth rather than slowing it down.
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
