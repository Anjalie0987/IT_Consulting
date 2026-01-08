"use client";

import Link from 'next/link';

export default function CareersCTA() {
    return (
        <section className="bg-gray-100 py-20 px-6 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Can't find what you're looking for?
                </h2>
                <Link
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1"
                >
                    Get in Touch
                </Link>
            </div>
        </section>
    );
}
