"use client";

import React from 'react';

import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        termsAccepted: false,
        companyWebsite: ''
    });

    const [status, setStatus] = React.useState({
        submitting: false,
        submitted: false,
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent double submission
        if (status.submitting) return;

        setStatus({ submitting: true, submitted: false, success: false, message: '' });

        try {
            const payload = {
                ...formData,
                companyWebsite: '' // Honeypot field must be empty for real users
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus({
                    submitting: false,
                    submitted: true,
                    success: true,
                    message: data.message
                });
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    phone: '',
                    message: '',
                    termsAccepted: false
                });
            } else {
                setStatus({
                    submitting: false,
                    submitted: true,
                    success: false,
                    message: data.message || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                message: 'An unexpected error occurred. Please try again later.'
            });
        }
    };

    return (
        <section className="w-full bg-[#FAFAFA] py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight"
                    >
                        Get in Touch.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

                    {/* Left Column: Contact Form (Dominant - 60% Width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status.submitted && (
                                <div className={`p-4 rounded-xl ${status.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                                    {status.message}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="sr-only">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name*"
                                        className="w-full bg-[#F3F4F6] text-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-transparent placeholder-gray-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="sr-only">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name*"
                                        className="w-full bg-[#F3F4F6] text-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-transparent placeholder-gray-600"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email*"
                                        className="w-full bg-[#F3F4F6] text-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-transparent placeholder-gray-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="sr-only">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company*"
                                        className="w-full bg-[#F3F4F6] text-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-transparent placeholder-gray-600"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full bg-[#F3F4F6] text-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-transparent placeholder-gray-600"
                                />
                            </div>

                            <div className="pt-2">
                                <label className="sr-only">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message*"
                                    className="w-full bg-[#F3F4F6] text-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-transparent placeholder-gray-600 resize-none min-h-[200px]"
                                    required
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-4">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-500 leading-relaxed">
                                    I have read and accept the <a href="/policies" className="text-blue-600 underline hover:text-blue-800">Terms of Use</a>. Please read our <a href="/policies" className="text-blue-600 underline hover:text-blue-800">privacy statement</a> to understand how we plan to use your personal information.
                                </label>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status.submitting}
                                    className={`rounded-full px-10 py-4 text-white font-semibold shadow-lg transition-all duration-300 ${status.submitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1'}`}
                                >
                                    {status.submitting ? 'Submitting...' : 'Submit form'}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Column: Contact Info Panel (Subordinate - 40% Width) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        className="w-full lg:col-span-2"
                    >
                        {/* Refined Card: Smaller, lighter shadow, reduced padding */}
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 flex flex-col gap-8 lg:max-w-[85%] ml-auto">

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 bg-blue-50 rounded-full text-blue-600">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Primary Email Address</h3>
                                    <p className="text-sm font-medium text-slate-800">HELLO@ACONSULTANTS.IN</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 bg-blue-50 rounded-full text-blue-600">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Phone Number</h3>
                                    <p className="text-sm font-medium text-slate-800">+91-9910219236</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 bg-blue-50 rounded-full text-blue-600">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Office Address</h3>
                                    <p className="text-sm font-medium text-slate-800 uppercase max-w-xs leading-relaxed">
                                        SECTOR 49, GURUGRAM, HR-122018
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
