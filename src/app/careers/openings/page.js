export const dynamic = 'force-dynamic';
import OpeningsHero from '../../../components/OpeningsHero';
import OpeningsList from '../../../components/OpeningsList';
import Footer from '../../../components/Footer';
import { client } from '@/lib/sanity';

export default async function OpeningsPage() {
    const jobs = await client.fetch(`*[_type == "jobOpening"]{
    _id,
    title,
    location,
    employmentType,
    experience,
    summary,
    description,
    applyMode,
    applyEmail,
    applyUrl,
    enableInternalApply
  }`);
    return (
        <main>
            <OpeningsHero />
            <OpeningsList jobs={jobs} />
            <Footer />
        </main>
    );
}