"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function JobDetailModal({ job, onClose }) {
    const modalRef = useRef(null);
    const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
    const [resumeName, setResumeName] = useState("");

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        // Disable body scroll when open
        document.body.style.overflow = "hidden";

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "unset";
        };
    }, [onClose]);

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setResumeName(e.target.files[0].name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("submitting");

        try {
            const formData = new FormData(e.target);

            const response = await fetch("/api/job-apply", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Submission failed");
            }

            setFormStatus("success");
        } catch (error) {
            console.error(error);
            setFormStatus("error");
        }
    };

    if (!job) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Container */}
            <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
                {/* Header */}
                <div className="flex-none p-6 md:p-8 border-b border-gray-100 flex justify-between items-start bg-white">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {job.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-500 font-medium">
                            <span className="bg-gray-100 px-3 py-1 rounded-full">{job.location}</span>
                            <span className="bg-gray-100 px-3 py-1 rounded-full">{job.employmentType}</span>
                            {job.experience && (
                                <span className="bg-gray-100 px-3 py-1 rounded-full">{job.experience}</span>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    {/* Summary */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 bg-gray-50/50 py-2">
                        {job.summary}
                    </p>

                    {/* Rich Description */}
                    <div
                        className="prose prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-headings:font-bold prose-li:marker:text-blue-500"
                        dangerouslySetInnerHTML={{ __html: job.description }}
                    />

                    <hr className="my-8 border-gray-100" />

                    {/* Unified Apply Form */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-6">
                            Apply for this position
                        </h3>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            {formStatus === "success" ? (
                                <div className="text-center py-8">
                                    <div className="mx-auto w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900">Application Sent!</h4>
                                    <p className="text-gray-600">Thank you for applying. Our team will review your application and get back to you.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <input type="hidden" name="jobTitle" value={job.title} />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                                            <input required name="firstName" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="First Name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                                            <input required name="lastName" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                                            <input required name="email" type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="john@example.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                                            <input name="phone" type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="+1 (555) 000-0000" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                                        <input name="location" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="City, Country" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Resume Upload *</label>
                                        <div className="relative">
                                            <input
                                                required
                                                name="resume"
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                                            />
                                            {resumeName && (
                                                <p className="mt-2 text-sm text-green-600 flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                    {resumeName}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {formStatus === "error" && (
                                        <p className="text-red-600 font-medium">
                                            Something went wrong. Please try again.
                                        </p>
                                    )}

                                    <button
                                        disabled={formStatus === "submitting"}
                                        type="submit"
                                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto self-start"
                                    >
                                        {formStatus === "submitting" ? "Sending..." : "Submit Application"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
