import AboutHero from "../../components/AboutHero";
import AboutIntro from "../../components/AboutIntro";
import AboutWhatWeDo from "../../components/AboutWhatWeDo";
import AboutWhyChooseUs from "../../components/AboutWhyChooseUs";
import Footer from "../../components/Footer";

export default function About() {
    return (
        <main className="min-h-screen bg-gray-50">
            <AboutHero />
            <AboutIntro />
            <AboutWhatWeDo />
            <AboutWhyChooseUs />
            <Footer />
        </main>
    );
}
