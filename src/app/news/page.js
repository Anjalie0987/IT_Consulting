"use client";

import NewsMediaHero from '../../components/NewsMediaHero';
import NewsMediaGrid from '../../components/NewsMediaGrid';
import Footer from '../../components/Footer';

export default function NewsPage() {
    return (
        <main>
            <NewsMediaHero />
            <NewsMediaGrid />
            <Footer />
        </main>
    );
}
