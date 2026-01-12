"use client";

import { motion } from "framer-motion";

export default function LeadershipProfile() {
    return (
        <section className="bg-[#FAFAFA] py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-[1200px] mx-auto">

                {/* Profile Container - Two Column Layout */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start justify-center">

                    {/* Left Column (40%) - Image Placeholder */}
                    <div className="w-full md:w-5/12 flex-shrink-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="aspect-[3/4] w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative"
                        >
                            {/* Placeholder Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24 text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column (60%) - Content */}
                    <div className="w-full md:w-7/12 flex flex-col justify-center pt-4 md:pt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Name & Designation */}
                            <div className="mb-8 text-center md:text-left">
                                <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                                    Arpan Aggarwal
                                </h3>
                                <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                                    Founder & Chief Executive Officer
                                </p>
                            </div>

                            {/* Body Text */}
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10 text-justify">
                                <p>
                                    Arpan Aggarwal is the Founder and Chief Executive Officer of Accordant Consultants, bringing over a decade of experience in building technology-driven solutions that solve complex business challenges.
                                </p>
                                <p>
                                    With a strong foundation in strategy, technology, and execution, Arpan has led Accordant Consultants since its inception in 2014, partnering with organizations across industries including banking, healthcare, retail, manufacturing, public sector, and emerging technologies such as blockchain and crypto.
                                </p>
                                <p>
                                    His leadership philosophy is rooted in clarity, accountability, and results. Arpan believes that technology should always serve a purpose — enabling growth, improving efficiency, and creating long-term value for businesses.
                                </p>
                            </div>

                            {/* Quote Block */}
                            <div className="border-l-4 border-red-600 pl-8 py-2 my-10">
                                <blockquote className="text-2xl font-bold italic text-gray-900 leading-snug">
                                    “You’ve got a problem. We’ve got a solution.”
                                </blockquote>
                            </div>

                            {/* Closing Paragraph */}
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
                                <p>
                                    Under his guidance, Accordant Consultants has grown into a trusted consulting partner known for practical thinking, honest advice, and outcome-driven delivery. Arpan continues to focus on building strong teams, fostering innovation, and helping clients navigate change with confidence.
                                </p>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
