import CareersHero from '../../components/CareersHero';
import CareersValues from '../../components/CareersValues';
import CareersOpenings from '../../components/CareersOpenings';
import CareersApply from '../../components/CareersApply';
import CareersCTA from '../../components/CareersCTA';
import Footer from '../../components/Footer';

export default function CareersPage() {
    return (
        <main>
            <CareersHero />
            <CareersValues />
            <CareersOpenings />
            <CareersApply />
            <CareersCTA />
            <Footer />
        </main>
    );
}
