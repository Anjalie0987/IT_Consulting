"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersOpenings() {
    return (
        <section className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24 text-center">
            <div className="max-w-4xl mx-auto">

                {/* Optional Supporting Text */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
                >
                    Explore available opportunities and find the role that’s right for you.
                </motion.p>

                {/* Primary CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link
                        href="/careers/openings"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 px-10 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                        See Current Openings
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
