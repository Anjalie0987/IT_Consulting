"use client";

import { motion } from "framer-motion";

export default function LeadershipPhilosophy() {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    >
                        Our Leadership Philosophy
                    </motion.h2>

                    {/* Accent Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-0.5 bg-red-600 mx-auto mb-8"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-500 leading-relaxed font-light"
                    >
                        Our leadership approach is built on clarity, accountability, and long-term thinking.
                        We believe that strong leadership starts with understanding complex challenges deeply
                        and aligning technology with real business outcomes.
                    </motion.p>
                </div>

                {/* Core Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

                    {/* Principle 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-left"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Clarity</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We focus on understanding problems before proposing solutions, ensuring that every
                            decision aligns with long-term business goals.
                        </p>
                    </motion.div>

                    {/* Principle 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-left"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Technology with Purpose</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We adopt modern technologies responsibly, prioritizing value, scalability, security,
                            and sustainability over trends.
                        </p>
                    </motion.div>

                    {/* Principle 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-left"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Execution Excellence</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We believe strategy only matters when it is delivered with precision, accountability,
                            and measurable outcomes.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
