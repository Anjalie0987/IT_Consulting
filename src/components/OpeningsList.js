"use client";

import { useState } from "react";
import { openings } from "../data/openings";
import JobDetailModal from "./JobDetailModal";
import { motion, AnimatePresence } from "framer-motion";

export default function OpeningsList() {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24 min-h-[50vh]">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col gap-8">
                    {/* Empty State */}
                    {openings.length === 0 && (
                        <div className="text-center py-12">
                            <h3 className="text-xl font-medium text-gray-900">We don’t have any open positions at the moment.</h3>
                            <p className="text-gray-500 mt-2">Please check back later or contact us directly.</p>
                        </div>
                    )}

                    {/* Listings List */}
                    {openings.map((job) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedJob(job)}
                            className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 cursor-pointer hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {job.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium whitespace-nowrap">
                                    <span>{job.location}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{job.employmentType}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
                                {job.summary}
                            </p>

                            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                                View Details
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <JobDetailModal
                        job={selectedJob}
                        onClose={() => setSelectedJob(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
