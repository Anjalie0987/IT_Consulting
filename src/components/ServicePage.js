"use client";

import React from "react";

export default function ServicePage({ title, tagline, description, capabilities, howWeWork, whoThisIsFor }) {
    return (
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:py-24">
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
                        {tagline}
                    </p>
                    {description.map((desc, index) => (
                        <p key={index} className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 last:mb-0">
                            {desc}
                        </p>
                    ))}
                </div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-24">
                    {capabilities.map((item, index) => (
                        <div key={index} id={item.id} className="scroll-mt-32">
                            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h4>
                            <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Subsections: How We Work & Who This Is For */}
                {(howWeWork || whoThisIsFor) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-gray-100 pt-16">
                        {/* How We Work */}
                        {howWeWork && (
                            <div>
                                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
                                    How We Work
                                </h4>
                                <ul className="space-y-4">
                                    {howWeWork.map((item, index) => (
                                        <li key={index} className="flex items-start text-gray-500">
                                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                                            <span className="text-base md:text-lg leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Who This Is For */}
                        {whoThisIsFor && (
                            <div>
                                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
                                    Who This Is For
                                </h4>
                                <ul className="space-y-4">
                                    {whoThisIsFor.map((item, index) => (
                                        <li key={index} className="flex items-start text-gray-500">
                                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                                            <span className="text-base md:text-lg leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
