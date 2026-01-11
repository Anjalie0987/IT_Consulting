import NewsMediaHero from '../../../components/NewsMediaHero';
import NewsMediaGrid from '../../../components/NewsMediaGrid';
import Footer from '../../../components/Footer';
import { client } from '@/lib/sanity';

// Revalidate data every 60 seconds (optional, keeps site fast)
export const revalidate = 60;

export default async function NewsMediaPage() {
    // Fetch News & Media sorted by Newest Date first
    const newsItems = await client.fetch(`*[_type == "newsMedia"] | order(publishDate desc) {
    _id,
    title,
    mediaType,
    youtubeUrl,
    summary,
    publishDate,
    category
  }`);

    return (
        <main>
            <NewsMediaHero />
            <NewsMediaGrid items={newsItems} />
            <Footer />
        </main>
    );
}