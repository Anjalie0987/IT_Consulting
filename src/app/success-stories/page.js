export const dynamic = 'force-dynamic';
import SuccessStoriesHero from '../../components/SuccessStoriesHero';
import SuccessStoriesList from '../../components/SuccessStoriesList';
import Footer from '../../components/Footer';
import { client } from '@/lib/sanity';

export default async function SuccessStoriesPage() {
    const stories = await client.fetch(`*[_type == "successStory"]{
        _id,
        industry,
        summary,
        challenge, 
        solution,
        "slug": slug.current,
        "imageUrl": coverImage.asset->url
    }`);

    return (
        <main>
            <SuccessStoriesHero />
            <SuccessStoriesList stories={stories} />
            <Footer />
        </main>
    );
}