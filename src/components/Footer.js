"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#020617] to-[#000000] text-white pt-16 pb-8 border-t border-white/5 relative z-10">
            {/* 1️⃣ FOOTER SEPARATOR */}
            <div className="w-full h-px bg-white/15 mb-16"></div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* COLUMN 1 — BRAND */}
                    <div className="space-y-6">
                        {/* Logo / Brand Name */}
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/logo.png"
                                alt="Company Logo"
                                height={40}
                                width={150}
                                className="w-auto h-10 object-contain"
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Intelligent IT consulting for complex challenges.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-6">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/aggarpan" className="text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* X (Twitter) */}
                            <a href="https://x.com/aggarpan" className="text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="https://youtube.com/@aggarpan" className="text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* COLUMN 2 — COMPANY & INSIGHTS */}
                    <div>
                        <h3 className="font-semibold text-white tracking-wide mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">About Us</Link></li>
                            <li><Link href="/about/leadership" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Leadership</Link></li>
                            <li><Link href="/success-stories" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Success Stories</Link></li>
                            <li><Link href="/careers" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Careers</Link></li>
                            <li><Link href="/news" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">News & Media</Link></li>
                        </ul>

                        <h3 className="font-semibold text-white tracking-wide mt-8 mb-6">Insights</h3>
                        <ul className="space-y-3">
                            <li><Link href="/insights" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Insights Home</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 3 — WHAT WE DO & INDUSTRIES */}
                    <div>
                        <h3 className="font-semibold text-white tracking-wide mb-6">What We Do</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services/it-consulting" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">IT Consulting</Link></li>
                            <li><Link href="/services/digital-transformation" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Digital Transformation</Link></li>
                            <li><Link href="/services/cloud" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Cloud & Infrastructure</Link></li>
                            <li><Link href="/services/data-ai" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Data, Analytics & AI</Link></li>
                            <li><Link href="/services/cybersecurity" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Cybersecurity & Risk</Link></li>
                            <li><Link href="/services/blockchain" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Blockchain / Crypto / Web3</Link></li>
                        </ul>

                        <h3 className="font-semibold text-white tracking-wide mt-8 mb-6">Industries</h3>
                        <ul className="space-y-3">
                            <li><Link href="/industries/banking" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Banking & Financial Services</Link></li>
                            <li><Link href="/industries/healthcare" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Healthcare & Life Sciences</Link></li>
                            <li><Link href="/industries/retail" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Retail & E-Commerce</Link></li>
                            <li><Link href="/industries/manufacturing" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Manufacturing</Link></li>
                            <li><Link href="/industries/logistics" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Logistics & Supply Chain</Link></li>
                            <li><Link href="/industries/education" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Education</Link></li>
                            <li><Link href="/industries/public-sector" className="text-sm text-slate-400 hover:text-white transition-colors duration-300">Public Sector</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 4 — CTA BLOCK */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">Let’s work together</h3>
                        <p className="text-sm text-slate-400 mb-6">Start your digital transformation journey.</p>
                        <Link
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* BOTTOM BAR (LEGAL STRIP) */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/60">
                        © 2026 IT Consulting. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {['Privacy', 'Cookies', 'Accessibility'].map((item) => (
                            <a key={item} href="#" className="text-xs text-white/60 hover:text-white transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
