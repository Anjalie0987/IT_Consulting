import Link from 'next/link';

export default function AboutIntro() {
    return (
        <section className="w-full bg-[#FAFAFA] py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Two Visual Cards (No Text) */}
                    {/* Left Column: Image Holder Group (Overlapping Layout) */}
                    <div className="relative h-[480px] w-full max-w-lg mx-auto lg:mx-0 order-1 lg:order-1">

                        {/* Secondary Card (Back - Top Left) */}
                        <div
                            className="absolute top-0 left-0 w-[85%] h-[340px] rounded-[2.5rem] shadow-lg transform -rotate-2 overflow-hidden"
                            style={{
                                backgroundImage: "url('/cyber.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        {/* Primary Card (Front - Bottom Right) */}
                        <div
                            className="absolute bottom-0 right-0 w-[85%] h-[360px] rounded-[2.5rem] shadow-2xl z-10 overflow-hidden transform rotate-1"
                            style={{
                                backgroundImage: "url('/who1.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>

                    </div>

                    {/* Right Column: Content Panel (No Button) */}
                    <div className="flex flex-col justify-center order-2 lg:order-2">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                                Who We Are
                            </h2>
                            {/* Subtle underline/accent */}
                            <div className="h-1 w-16 bg-blue-600 rounded-full"></div>
                        </div>

                        <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light text-justify">
                            <p>
                                Founded in 2014, we work at the intersection of technology, data, and business strategy to help organizations solve complex challenges and achieve sustainable growth.
                            </p>
                            <p>
                                Our teams bring together deep industry expertise, modern engineering practices, and a consulting mindset to design solutions that align technology with real business outcomes.
                            </p>
                            <p>
                                From strategic advisory to execution and scale, we partner with enterprises as long-term collaborators focused on measurable impact and resilience.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
