"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../data/navigation";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

    const pathname = usePathname();

    // Close menus when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setMobileActiveDropdown(null);
    }, [pathname]);

    const navRef = useRef(null);

    // Toggle dropdown on click (Desktop)
    const toggleDropdown = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setActiveDropdown(null);
                setMobileActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    // Close dropdown on focus loss (accessibility)
    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setActiveDropdown(null);
        }
    };

    const desktopNavItems = navigation.filter(item => item.label !== "Contact");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm font-sans min-h-[72px]">
            <div className="mx-auto flex h-full min-h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 perspective-1000 relative">

                {/* Logo Section */}
                <div className="flex shrink-0 items-center min-h-[72px]">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Company Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav
                    className={`hidden md:flex flex-1 md:gap-x-10 h-full items-center justify-center pt-1 px-4`}
                    aria-label="Main Navigation"
                    ref={navRef}
                >
                    {desktopNavItems.map((item) => (
                        <div
                            key={item.label}
                            className={`flex items-center h-full`}
                            onBlur={handleBlur}
                        >
                            <Link
                                href={item.href || "#"}
                                className={`group inline-flex items-center text-sm font-medium leading-6 transition-colors duration-200 ${activeDropdown === item.label ? "text-[#1F4ED8]" : "text-[#0F172A] hover:text-[#1F4ED8]"
                                    } focus:outline-none focus:text-[#1F4ED8] relative whitespace-nowrap`}
                                onClick={(e) => {
                                    if (item.type === "dropdown") {
                                        e.preventDefault();
                                        toggleDropdown(item.label);
                                    }
                                }}
                                aria-expanded={activeDropdown === item.label}
                                aria-haspopup={item.type === "dropdown" ? "true" : undefined}
                                role={item.type === "dropdown" ? "button" : undefined}
                            >
                                <span>{item.label}</span>
                                {item.type === "dropdown" && (
                                    <svg
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180 text-[#1F4ED8]" : "text-gray-400 group-hover:text-[#1F4ED8]"
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                                <span className={`absolute bottom-[-24px] left-0 h-[2px] w-full bg-[#E84C3D] transition-transform duration-300 ease-out origin-left ${activeDropdown === item.label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                            </Link>

                            {/* Mega Menu Panel */}
                            {item.type === "dropdown" && item.megaMenu && (
                                <div
                                    className={`absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-200 ease-in-out origin-top
                                        ${activeDropdown === item.label ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"}
                                    `}
                                    role="region"
                                    aria-label={`${item.label} submenu`}
                                >
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                                        <div className="grid grid-cols-12 gap-10">
                                            {/* Section Title */}
                                            <div className="col-span-3 border-r border-gray-100 pr-10">
                                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                                    {item.megaMenu?.intro?.heading || item.label}
                                                </h2>
                                                <p className="text-base text-gray-500 leading-relaxed">
                                                    {item.megaMenu?.intro?.description || `Explore our comprehensive range of ${item.label.toLowerCase()} tailored for your enterprise needs.`}
                                                </p>
                                            </div>

                                            {/* Columns Grid */}
                                            <div className="col-span-9 grid grid-cols-4 gap-x-8 gap-y-10">
                                                {item.megaMenu.columns.map((col, idx) => (
                                                    <div key={idx} className="flex flex-col space-y-5">
                                                        {col.title && (
                                                            col.href ? (
                                                                <Link
                                                                    href={col.href}
                                                                    className="block group/title"
                                                                    onClick={() => setActiveDropdown(null)}
                                                                >
                                                                    <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase border-b border-gray-200 pb-2 hover:text-[#1F4ED8] transition-colors flex items-center justify-between">
                                                                        {col.title}
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-200">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                                        </svg>
                                                                    </h3>
                                                                </Link>
                                                            ) : (
                                                                <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase border-b border-gray-200 pb-2">
                                                                    {col.title}
                                                                </h3>
                                                            )
                                                        )}
                                                        <ul role="list" className={item.label === "Who We Are" ? "space-y-6" : "space-y-3"}>
                                                            {col.links.map((link) => (
                                                                <li key={link.label}>
                                                                    <Link
                                                                        href={link.href}
                                                                        onClick={() => setActiveDropdown(null)}
                                                                        className={`block transition-all duration-200 ${item.label === "Who We Are"
                                                                            ? "text-base font-semibold text-gray-800 hover:text-blue-700 hover:translate-x-1"
                                                                            : "text-sm text-gray-600 hover:text-blue-700 hover:underline hover:decoration-blue-700/30 hover:underline-offset-4"
                                                                            }`}
                                                                    >
                                                                        {link.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Side Utility Actions */}
                <div className="flex items-center shrink-0 justify-end gap-2 md:gap-4 relative">
                    <Link
                        href="/contact"
                        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-[#1F4ED8] hover:bg-gray-50 transition-all duration-200 ml-2"
                        aria-label="Contact Us"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle main menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <span className="text-2xl font-bold block w-6 h-6 text-center">✕</span>
                            ) : (
                                <span className="space-y-1.5 block w-6">
                                    <span className="block h-0.5 w-full bg-gray-900"></span>
                                    <span className="block h-0.5 w-full bg-gray-900"></span>
                                    <span className="block h-0.5 w-full bg-gray-900"></span>
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="space-y-1 px-4 py-8">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => {
                                if (item.type === "dropdown") {
                                    const isExpanded = mobileActiveDropdown === item.label;
                                    return (
                                        <div key={item.label}>
                                            <button
                                                type="button"
                                                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 focus:outline-none"
                                                onClick={() => setMobileActiveDropdown(isExpanded ? null : item.label)}
                                                aria-expanded={isExpanded}
                                            >
                                                {item.label}
                                                <svg
                                                    className={`h-5 w-5 flex-none transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>

                                            {/* Submenu Accordion */}
                                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                <div className="mt-2 space-y-2 pl-6">
                                                    {item.megaMenu?.columns.map((col, colIdx) => (
                                                        <div key={colIdx} className="space-y-2 pb-4">
                                                            {col.title && (
                                                                <div className="text-xs font-bold uppercase text-gray-500 tracking-wider pt-2">
                                                                    {col.title}
                                                                </div>
                                                            )}
                                                            {col.links.map((link) => (
                                                                <Link
                                                                    key={link.label}
                                                                    href={link.href}
                                                                    className="block rounded-lg py-2 text-sm font-semibold leading-7 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                                                    onClick={() => {
                                                                        setMobileMenuOpen(false);
                                                                        setMobileActiveDropdown(null);
                                                                    }}
                                                                >
                                                                    {link.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href || "#"}
                                            className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
