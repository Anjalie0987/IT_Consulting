import Link from 'next/link';
import Image from "next/image";


const industries = [
    {
        title: "Banking & Payments",
        desc: "Modern banking demands speed, security, and scale. We help financial institutions modernize core systems, enable real-time payments, improve compliance, and deliver seamless digital customer experiences across channels and platforms.",
        href: "/industries/banking-payments"
    },
    {
        title: "Capital Markets",
        desc: "Capital markets face rising complexity and regulation. We support firms with technology modernization, data-driven decision systems, risk optimization, and scalable platforms that improve efficiency and accelerate sustainable growth.",
        href: "/industries/capital-markets"
    },
    {
        title: "Insurance",
        desc: "The insurance industry is rapidly evolving. We help insurers modernize legacy platforms, enhance underwriting with analytics, improve claims automation, and strengthen customer engagement through digital solutions.",
        href: "/industries/insurance"
    },
    {
        title: "Energy",
        desc: "Energy organizations operate in volatile environments. We enable digital transformation across operations, risk management, trading platforms, and analytics, helping clients adapt to market shifts and improve operational resilience.",
        href: "/industries/energy"
    },
    {
        title: "Healthcare & Life Sciences",
        desc: "Healthcare demands precision, security, and compliance. We deliver technology solutions that improve data interoperability, patient outcomes, regulatory alignment, and digital innovation across healthcare ecosystems.",
        href: "/industries/healthcare-life-sciences"
    },
];

export default function Industries() {
    return (
        <section className="w-full bg-white py-20 lg:py-28 text-slate-900 border-t border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Desktop: Grid / Mobile: Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Sticky Content */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 lg:pb-24">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug mb-4">
                                Industries transformed.<br />
                                Challenges solved.
                            </h2>
                            <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-md mt-4">
                                Technology consulting tailored to the unique needs of every industry we serve.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Scrolling Cards */}
                    <div className="lg:col-span-7 flex flex-col space-y-6">
                        {industries.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="group block bg-white rounded-xl border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start gap-6">

                                    {/* Icon Container */}
                                    <div className="mb-4 flex items-center justify-start">
                                        <Image
                                            src="/icon.png"
                                            alt="Industry icon"
                                            width={44}
                                            height={44}
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                            {item.desc}
                                        </p>

                                        <div className="flex items-center justify-end">
                                            <span className="text-sm font-medium text-slate-900 mr-2">Read more</span>
                                            {/* Arrow Icon */}
                                            <svg
                                                className="w-4 h-4 text-slate-900 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
