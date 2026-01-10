import Link from 'next/link';
// Removed missing dependency import

export default function AboutHero() {
    return (
        <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/about_hero.jpg')",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-20 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

                    {/* Left Primary Card */}
                    <div className="lg:col-span-7 bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                            Shaping Technology. <br />
                            <span className="text-blue-400">Solving What Matters.</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mb-6">
                            We are an intelligent IT consulting firm helping organizations solve complex business challenges through technology, strategy, and execution.
                        </p>
                    </div>

                    {/* Right Secondary Card */}
                    <div className="lg:col-span-5 bg-black/40 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl self-end lg:mb-12">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Who We Are</h3>
                                <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
                            </div>
                            {/* Optional Visual Element / Icon */}
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed mb-4">
                            Founded in 2014, we partner with enterprises to design, build, and scale digital solutions that deliver lasting business impact.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
