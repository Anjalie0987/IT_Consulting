"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PerspectiveModal from "./PerspectiveModal";

export default function KeyPerspectives() {
    const [selectedPerspective, setSelectedPerspective] = useState(null);

    const perspectives = [
        // 1. Digital Transformation
        {
            label: "DIGITAL TRANSFORMATION",
            heading: "Transformation isn’t about tools — it’s about how organizations think, operate, and deliver value.",
            bgImage: "/images/enterprise_digital_transformation_abstract_1767989394636.png",
            modalTitle: "Digital Transformation Beyond Technology",
            content: [
                "Digital transformation today extends far beyond the adoption of new technologies. It requires organizations to rethink how work gets done, how decisions are made, and how value is delivered to customers and stakeholders.",
                "Successful transformations align technology initiatives with operating models, governance, and culture. Leaders must move beyond isolated digital projects and focus on enterprise-wide change that enables agility, accountability, and long-term impact."
            ]
        },
        // 2. Data & Analytics
        {
            label: "DATA & ANALYTICS",
            heading: "Data creates value only when it changes decisions — not when it fills dashboards.",
            bgImage: "/images/data_analytics_decision_making_abstract_1767989416149.png",
            modalTitle: "Data, Analytics, and Decision-Making at Scale",
            content: [
                "As organizations generate more data than ever before, the challenge has shifted from access to effective use. Data and analytics only deliver value when they are embedded into everyday decision-making processes.",
                "Leading organizations invest in strong data foundations, clear ownership, and trust-driven governance models. This enables analytics to move from dashboards to decisions, supporting faster and more confident actions at scale."
            ]
        },
        // 3. Cybersecurity & Resilience
        {
            label: "CYBERSECURITY & RESILIENCE",
            heading: "Resilience is no longer optional — it is a leadership responsibility.",
            bgImage: "/images/cybersecurity_resilience_abstract_1767989433371.png",
            modalTitle: "Building Resilient and Secure Enterprises",
            content: [
                "In an environment defined by cyber threats, regulatory pressure, and operational disruption, resilience has become a core leadership concern.",
                "Building resilient enterprises requires integrating security, risk management, and compliance into the core architecture of systems and processes. Rather than reacting to incidents, organizations must design for continuity, trust, and long-term stability from the outset."
            ]
        },
        // 4. Engineering & Platforms
        {
            label: "ENGINEERING & PLATFORMS",
            heading: "Modern platforms must scale today without limiting tomorrow.",
            bgImage: "/images/cloud_engineering_platforms_abstract_1767989449348.png",
            modalTitle: "Engineering for Scale and Long-Term Value",
            content: [
                "Engineering excellence today means designing platforms that can evolve as business needs change. Organizations must modernize legacy systems while maintaining operational stability and minimizing risk.",
                "The most effective engineering strategies balance speed with discipline, enabling teams to innovate quickly without compromising reliability, security, or scalability over time."
            ]
        },
        // 5. Enterprise Strategy (New)
        {
            label: "ENTERPRISE STRATEGY",
            heading: "Strategy fails when technology and business move in different directions.",
            bgImage: "/images/enterprise_digital_transformation_abstract_1767989394636.png",
            modalTitle: "Strategic Alignment in a Digital-First World",
            content: [
                "In many organizations, technology strategy and business strategy operate in silos, leading to friction, inefficiency, and missed opportunities. True strategic alignment requires a unified vision where technology is seen not just as an enabler, but as a core driver of business value.",
                "We help leaders bridge this gap by defining shared outcomes, integrated roadmaps, and governance structures that ensure every technology investment directly supports top-line growth and operational excellence."
            ]
        },
        // 6. Cloud & Infrastructure (New)
        {
            label: "CLOUD & INFRASTRUCTURE",
            heading: "Cloud transformation is a business decision — not an IT migration.",
            bgImage: "/images/data_analytics_decision_making_abstract_1767989416149.png",
            modalTitle: "Cloud as a Catalyst for Business Agility",
            content: [
                "Treating cloud adoption as a mere data center migration misses the point. The true value of cloud lies in its ability to unlock specific business capabilities—from faster time-to-market and elastic scalability to advanced data services.",
                "A successful cloud strategy focuses on modernization, not just lift-and-shift. It allows organizations to reimagine how they build, deploy, and scale applications, turning infrastructure from a cost center into a competitive advantage."
            ]
        },
        // 7. Operating Models (New)
        {
            label: "OPERATING MODELS",
            heading: "New technology delivers value only when operating models evolve with it.",
            bgImage: "/images/cybersecurity_resilience_abstract_1767989433371.png",
            modalTitle: "Evolving Operating Models for the Digital Age",
            content: [
                "Implementing modern tools without updating how teams work is a recipe for failure. To realize the full potential of digital investments, organizations must evolve their operating models to embrace cross-functional collaboration, agile workflows, and product-centric delivery.",
                "We champion operating models that break down silos and empower teams. By aligning structure, skills, and incentives with new ways of working, organizations can achieve the speed and adaptability required to thrive in a digital ecosystem."
            ]
        },
        // 8. Innovation & Change (New)
        {
            label: "INNOVATION & CHANGE",
            heading: "Innovation succeeds when organizations design for change, not certainty.",
            bgImage: "/images/cloud_engineering_platforms_abstract_1767989449348.png",
            modalTitle: "Designing for Continuous Innovation",
            content: [
                "In a rapidly changing landscape, the ability to adapt is more valuable than rigid long-term planning. Innovation isn't just about 'labs' or experiments; it's about building a culture and capability that can systematically test, learn, and scale new ideas.",
                "We help organizations move from ad-hoc innovation to sustained change. By fostering a mindset that embraces uncertainty and leverages rapid feedback loops, we enable businesses to stay ahead of disruption and continuously deliver new value."
            ]
        }
    ];

    return (
        <section className="bg-[#fafafa] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-16 border-b border-gray-200 pb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                        Thinking That Drives Impact
                    </h2>
                    <p className="text-xl text-gray-500 font-light max-w-3xl">
                        Insight-led perspectives on the challenges leaders face as technology reshapes business.
                    </p>
                </div>

                {/* Perspective Cards - Grid Layout like Success Stories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {perspectives.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedPerspective(item)}
                            className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            {/* Top Image Section */}
                            <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={item.bgImage}
                                    alt={item.label}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Light Overlay */}
                                <div className="absolute inset-0 bg-black/5"></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow">
                                {/* Label */}
                                <div className="mb-3">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                                        {item.label}
                                    </span>
                                </div>

                                {/* Heading */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                                    {item.heading}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <PerspectiveModal
                    isOpen={!!selectedPerspective}
                    onClose={() => setSelectedPerspective(null)}
                    title={selectedPerspective?.modalTitle}
                    content={selectedPerspective?.content}
                />

            </div>
        </section>
    );
}
