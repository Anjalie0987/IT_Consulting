"use client";

import { motion } from "framer-motion";

export default function PoliciesHero() {
    return (
        <section className="w-full bg-white pt-32 pb-16 border-b border-gray-100">
            <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-4"
                    >
                        Our Policies
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="text-base text-gray-500 leading-relaxed font-normal"
                    >
                        Our commitment to transparency, trust, and ethical use of technology for all stakeholders.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
