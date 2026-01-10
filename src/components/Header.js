"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../data/navigation";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const pathname = usePathname();

    // Close menus when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    // Static suggestion data
    const suggestionList = [
        "IT Consulting", "Cloud Services", "Cybersecurity",
        "Data Analytics", "AI Solutions", "Digital Transformation"
    ];

    const navRef = useRef(null);
    const searchRef = useRef(null); // Ref for the search container

    // Toggle dropdown on click
    const toggleDropdown = (label) => {
        if (isSearchOpen) return; // Disable menu when search is open
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.length > 0) {
            const filtered = suggestionList.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    // Close dropdown/search on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false); // Close search if clicking outside
                setShowSuggestions(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsSearchOpen(false);
                setShowSuggestions(false);
                setActiveDropdown(null);
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

    // Filter out "Contact" from the main desktop navigation as it moves to the utility bar
    const desktopNavItems = navigation.filter(item => item.label !== "Contact");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm font-sans min-h-[72px]">
            <div className="mx-auto flex h-full min-h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 perspective-1000 relative">

                {/* Logo Section */}
                <div className={`flex shrink-0 items-center min-h-[72px] transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-auto mr-8' : ''}`}>
                    <Link href="/" className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Company Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation (Center) - Animated shift */}
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
                                            {/* Section Title (Left Column) - Takes up 3 cols */}
                                            <div className="col-span-3 border-r border-gray-100 pr-10">
                                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                                    {item.megaMenu?.intro?.heading || item.label}
                                                </h2>
                                                <p className="text-base text-gray-500 leading-relaxed">
                                                    {item.megaMenu?.intro?.description || `Explore our comprehensive range of ${item.label.toLowerCase()} tailored for your enterprise needs.`}
                                                </p>
                                            </div>

                                            {/* Columns Grid - Takes up 9 cols */}
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

                {/* Right Side Utility Actions: Search & Contact */}
                <div className="flex items-center shrink-0 justify-end gap-2 md:gap-4 relative">

                    {/* Search Container (Flex Width Animation) */}
                    <div
                        ref={searchRef}
                        className={`relative flex items-center transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-[280px] lg:w-[400px] opacity-100' : 'w-[40px] opacity-100'}`}
                    >
                        {isSearchOpen ? (
                            /* Open State: Full Search Bar */
                            <div className="relative flex items-center w-full h-12 rounded-full bg-[#8B5CF6]/10 shadow-sm overflow-hidden whitespace-nowrap">
                                <div className="pl-4 text-[#8B5CF6] shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-full bg-transparent border-none outline-none ring-0 focus:ring-0 text-gray-700 placeholder-gray-500 px-3 text-sm font-medium"
                                    autoFocus
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <button className="shrink-0 h-9 mr-1.5 px-5 bg-white text-[#8B5CF6] text-xs font-bold rounded-full shadow-sm hover:bg-gray-50 transition-colors uppercase tracking-wider">
                                    GO
                                </button>

                                {/* Suggestions Dropdown */}
                                {showSuggestions && suggestions.length > 0 && (
                                    <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden z-30">
                                        <ul>
                                            {suggestions.map((suggestion, index) => (
                                                <li key={index}>
                                                    <button
                                                        className="w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1F4ED8] transition-colors flex items-center gap-3"
                                                        onClick={() => {
                                                            setSearchTerm(suggestion);
                                                            setShowSuggestions(false);
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                        </svg>
                                                        {suggestion}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Closed State: Icon Only */
                            <button
                                type="button"
                                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-[#1F4ED8] hover:bg-gray-50 transition-all duration-200"
                                onClick={() => setIsSearchOpen(true)}
                                aria-label="Open Search"
                                aria-expanded={isSearchOpen}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Contact Action (Icon Only) - Stays pinned right */}
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
                            {/* Simple Hamburger Icon */}
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
                            {navigation.map((item) => (
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
                            ))}
                        </div>

                        {/* Mobile Utility Actions */}
                        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col space-y-4">
                            <button type="button" className="flex items-center gap-3 px-3 py-2 text-base font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
