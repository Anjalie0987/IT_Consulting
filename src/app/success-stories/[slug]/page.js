import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// 1. Fetch data for a SINGLE story based on the slug
async function getStory(slug) {
    const query = `*[_type == "successStory" && slug.current == $slug][0]{
    industry,
    summary,
    challenge,
    solution,
    "imageUrl": coverImage.asset->url
  }`

    const story = await client.fetch(query, { slug })
    return story
}

// 2. The Page Component
export default async function SuccessStoryDetail({ params }) {
    // Await params for Next.js 15+ compatibility, or use directly in 14
    const { slug } = await params;

    const story = await getStory(slug)

    // Safety: If slug doesn't exist, show 404
    if (!story) {
        notFound()
    }

    return (
        <article className="min-h-screen bg-white">

            {/* --- HERO SECTION --- */}
            <div className="relative h-[60vh] w-full bg-gray-900">
                {/* Background Image */}
                {story.imageUrl && (
                    <img
                        src={story.imageUrl}
                        alt={story.industry}
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-20">
                    {/* Back Button */}
                    <Link href="/success-stories" className="text-white/80 hover:text-white mb-6 flex items-center gap-2 w-fit">
                        &larr; Back to all stories
                    </Link>

                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-900/50 rounded-full w-fit border border-blue-400/30">
                        {story.industry}
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
                        {story.summary}
                    </h1>
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-3xl mx-auto grid gap-16">

                    {/* Challenge Block */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-red-500 pl-4">
                            The Challenge
                        </h2>
                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <PortableText value={story.challenge} />
                        </div>
                    </section>

                    {/* Solution Block */}
                    <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                            Our Solution
                        </h2>
                        <div className="prose prose-lg text-gray-700 leading-relaxed">
                            <PortableText value={story.solution} />
                        </div>
                    </section>

                </div>

                {/* CTA at bottom */}
                <div className="mt-20 text-center border-t pt-20">
                    <h3 className="text-2xl font-bold mb-4">Want results like this?</h3>
                    <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                        Contact Us Today
                    </Link>
                </div>
            </div>

        </article>
    )
}