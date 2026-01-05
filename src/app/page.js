import Hero from "../components/Hero";
import Industries from "../components/Industries";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Industries />
      <VideoSection />
    </main>
  );
}
