"use client";

import React, { useEffect, useState } from "react";
import PoliciesHero from "@/components/PoliciesHero";
import Footer from "@/components/Footer";

export default function PoliciesPage() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "privacy-policy",
                "terms-of-use",
                "cookie-policy",
                "accessibility",
                "data-security",
            ];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust for sticky header if needed, though this page is simple
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="w-full bg-white font-sans text-gray-800">
            <PoliciesHero />

            <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12 py-12 md:py-16">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

                    {/* Desktop Sidebar Navigation */}
                    <div className="hidden md:block w-[240px] flex-shrink-0">
                        <div className="sticky top-32">
                            <nav className="space-y-4 border-l border-gray-100 pl-4">
                                {[
                                    { id: "privacy-policy", label: "Privacy Policy" },
                                    { id: "terms-of-use", label: "Terms of Use" },
                                    { id: "cookie-policy", label: "Cookie Policy" },
                                    { id: "accessibility", label: "Accessibility Statement" },
                                    { id: "data-security", label: "Data Security" },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block text-sm font-medium transition-colors duration-200 text-left w-full ${activeSection === item.id
                                            ? "text-blue-600 border-l-2 border-blue-600 -ml-[18px] pl-[14px]"
                                            : "text-gray-500 hover:text-gray-900"
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 space-y-16 md:space-y-20">

                        {/* 2. PRIVACY POLICY */}
                        <section id="privacy-policy" className="scroll-mt-32">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">Privacy Policy</h2>
                            <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
                                <p>
                                    At Accordant Consultants, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your information when you visit our website or engage with our services.
                                </p>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Information We Collect</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Personal information you provide (name, email, business contact data)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Analytics and usage data through cookies and similar technologies</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Device, log, and interaction data to improve user experience</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">How We Use Your Information</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>To provide, personalize, and improve our services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>To communicate updates, marketing, and legal notices</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>To enhance security and protect against fraud</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Sharing Information</h3>
                                    <p className="mb-2">We do not sell your personal data. We may share data with:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Service providers acting on our behalf</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Legal or regulatory authorities as required by law</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Data Retention</h3>
                                    <p>We maintain personal information only as long as necessary for business operations, compliance, or legal requirements.</p>
                                </div>
                            </div>
                        </section>

                        {/* 3. TERMS OF USE */}
                        <section id="terms-of-use" className="scroll-mt-32 pt-8 border-t border-gray-100">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">Terms of Use</h2>
                            <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
                                <p>
                                    These Terms of Use govern your access to and use of the Accordant Consultants website. By using our site, you agree to comply with all terms, rules, and policies referenced here.
                                </p>

                                <div className="space-y-4">
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Key Terms</h3>
                                    <div className="pl-2 border-l-2 border-gray-200 space-y-3">
                                        <div>
                                            <strong className="text-gray-900">Use of Content:</strong> All content is proprietary. You may download or print for personal use only.
                                        </div>
                                        <div>
                                            <strong className="text-gray-900">Prohibited Use:</strong> Unauthorized reproduction, manipulation, or distribution is prohibited.
                                        </div>
                                        <div>
                                            <strong className="text-gray-900">Intellectual Property:</strong> All rights reserved by Accordant Consultants, including trademarks and logos.
                                        </div>
                                        <div>
                                            <strong className="text-gray-900">Limitation of Liability:</strong> Accordant Consultants is not liable for indirect or consequential losses from website use.
                                        </div>
                                        <div>
                                            <strong className="text-gray-900">Third-Party Links:</strong> Links to external sites are for convenience; Accordant Consultants is not responsible for their content.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. COOKIE POLICY */}
                        <section id="cookie-policy" className="scroll-mt-32 pt-8 border-t border-gray-100">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">Cookie Policy</h2>
                            <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
                                <p>
                                    We use cookies to enhance your experience, understand usage patterns, and improve our services. This Cookie Policy explains what cookies are (small text files stored on your device) and how we use them.
                                </p>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Types of Cookies</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span><strong className="text-gray-900 font-medium">Strictly Necessary Cookies:</strong> Required for site functionality.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span><strong className="text-gray-900 font-medium">Performance & Analytics Cookies:</strong> Help us understand website behavior.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span><strong className="text-gray-900 font-medium">Functional Cookies:</strong> Enable enhanced features and personalization.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span><strong className="text-gray-900 font-medium">Third-Party Cookies:</strong> Used by analytics providers.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Managing Cookies</h3>
                                    <p>You can manage or disable cookies through your browser settings. Disabling certain cookies may affect site performance.</p>
                                </div>
                            </div>
                        </section>

                        {/* 5. ACCESSIBILITY STATEMENT */}
                        <section id="accessibility" className="scroll-mt-32 pt-8 border-t border-gray-100">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">Accessibility Statement</h2>
                            <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
                                <p>
                                    Accordant Consultants is committed to accessibility for all users. We strive to ensure our site is navigable, understandable, and usable for people with a wide range of abilities.
                                </p>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Accessibility Features</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Clear headings and structured content</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Keyboard navigation support</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Text alternatives for non-text elements</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Compliance with accessibility best practices</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Ongoing Improvements</h3>
                                    <p>We regularly evaluate and enhance accessibility. If you experience any issues, please contact us (details below).</p>
                                </div>
                            </div>
                        </section>

                        {/* 6. DATA SECURITY & PROTECTION */}
                        <section id="data-security" className="scroll-mt-32 pt-8 border-t border-gray-100">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">Data Security & Protection</h2>
                            <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-600 text-justify">
                                <p>
                                    Protecting the data of our clients, partners, and visitors is a top priority. We implement industry-standard security measures including encryption, secure access controls, and monitoring to mitigate unauthorized access or data breaches.
                                </p>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Security Measures</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Secure Sockets Layer (SSL) encryption</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Access controls and authentication protocols</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 mt-1.5 h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>Regular security audits and monitoring</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Reporting Concerns</h3>
                                    <p>If you suspect a data security issue or breach, please contact us immediately.</p>
                                </div>
                            </div>
                        </section>

                        {/* 7. CONTACT FOR POLICIES */}
                        <section id="contact" className="bg-gray-50 border border-gray-100 p-8 rounded-sm mt-12">
                            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                            <div className="space-y-4 text-sm md:text-base text-gray-600">
                                <p>If you have questions or concerns about these policies or your data, contact us:</p>
                                <div className="space-y-1">
                                    <p><strong className="text-gray-900">Email:</strong>Hello@aconsultants.in</p>
                                    <p><strong className="text-gray-900">Phone:</strong> +91-9910219236</p>
                                    <p><strong className="text-gray-900">Address:</strong> Accordant Consultants, Gurugram, India</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
