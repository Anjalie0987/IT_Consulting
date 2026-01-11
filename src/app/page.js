import Hero from "../components/Hero";
import Industries from "../components/Industries";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";
import { client } from '@/lib/sanity';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Home() {
  // Fetch the SINGLE video section document
  // We use [0] because we assume you only create one of these in the CMS
  const videoData = await client.fetch(`*[_type == "homeVideoSection"][0]{
    heading,
    description,
    videoType,
    videoUrl,
    "videoFileUrl": videoFile.asset->url,
    isActive
  }`);


  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Industries />
      <VideoSection data={videoData} />
      <Footer />
    </main>
  );
}