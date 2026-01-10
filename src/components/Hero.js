"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative w-full min-h-screen overflow-hidden pt-24 pb-0 flex flex-col justify-center"
            style={{
                backgroundImage: 'url("/backgrounds/hero_bg.gif")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Dark Overlay - Strengthened */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center flex-grow justify-center">

                {/* Animation styles */}
                <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hero-animate {
            animation: fadeInUp 600ms ease-out forwards;
          }
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>

                {/* Headline */}
                <div className="mx-auto max-w-4xl text-center mb-24 relative z-10">
                    <h1 className="hero-animate opacity-0 flex flex-col items-center justify-center gap-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                        <span className="text-4xl md:text-6xl font-bold tracking-tight text-[#F8FAFC]">
                            Shaping the future of technology
                        </span>
                        <span className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F8FAFC]">
                            through intelligent{" "}
                            <span className="text-[#3B82F6]">IT consulting</span>
                        </span>
                    </h1>

                    {/* New Quote */}
                    <p
                        className="mt-8 text-sm md:text-base font-semibold tracking-widest uppercase text-[#F87171] hero-animate opacity-0 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]"
                        style={{ animationDelay: '200ms' }}
                    >
                        "YOU GOT A PROBLEM WE GOT A SOLUTION"
                    </p>
                </div>

            </div>

            {/* Auto-scrolling cards - Full Width */}
            <div className="w-screen overflow-hidden relative z-10 pb-12 mt-auto">
                <div className="flex w-max animate-scroll gap-6 hover:[animation-play-state:paused]">

                    {[
                        {
                            title: "Digital Transformation",
                            desc: "Modernizing enterprise systems to drive agility and growth.",
                            bg: "bg-[#EEF2FF]",
                            img: "/images/enterprise_digital_transformation_abstract_1767989394636.png"
                        },
                        {
                            title: "Cloud & Infrastructure",
                            desc: "Scalable, secure cloud architectures for modern businesses.",
                            bg: "bg-[#ECFEFF]",
                            img: "/images/cloud_engineering_platforms_abstract_1767989449348.png"
                        },
                        {
                            title: "Data, Analytics & AI",
                            desc: "Turning data into intelligent, actionable insights.",
                            bg: "bg-[#FFFBEB]",
                            img: "/AI.jpg"
                        },
                        {
                            title: "Cybersecurity & Risk",
                            desc: "Protecting digital assets with proactive security strategies.",
                            bg: "bg-[#ECFDF5]",
                            img: "/cyber.jpg"
                        },
                        {
                            title: "Blockchain, Crypto & Web3",
                            desc: "Decentralized solutions for next-generation platforms.",
                            bg: "bg-[#FFF1F2]",
                            img: "/bitcoin.jpg"
                        },
                        {
                            title: "Enterprise Applications",
                            desc: "Robust enterprise software to streamline operations.",
                            bg: "bg-[#F8FAFC]",
                            img: "/Enterprise.jpg"
                        },
                        // Duplicates for seamless loop
                        {
                            title: "Digital Transformation",
                            desc: "Modernizing enterprise systems to drive agility and growth.",
                            bg: "bg-[#EEF2FF]",
                            img: "/images/enterprise_digital_transformation_abstract_1767989394636.png"
                        },
                        {
                            title: "Cloud & Infrastructure",
                            desc: "Scalable, secure cloud architectures for modern businesses.",
                            bg: "bg-[#ECFEFF]",
                            img: "/images/cloud_engineering_platforms_abstract_1767989449348.png"
                        },
                        {
                            title: "Data, Analytics & AI",
                            desc: "Turning data into intelligent, actionable insights.",
                            bg: "bg-[#FFFBEB]",
                            img: "/AI.jpg"
                        },
                        {
                            title: "Cybersecurity & Risk",
                            desc: "Protecting digital assets with proactive security strategies.",
                            bg: "bg-[#ECFDF5]",
                            img: "/cyber.jpg"
                        },
                        {
                            title: "Blockchain, Crypto & Web3",
                            desc: "Decentralized solutions for next-generation platforms.",
                            bg: "bg-[#FFF1F2]",
                            img: "/bitcoin.jpg"
                        },
                        {
                            title: "Enterprise Applications",
                            desc: "Robust enterprise software to streamline operations.",
                            bg: "bg-[#F8FAFC]",
                            img: "/Enterprise.jpg"
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`
                                min-w-[360px] h-[340px] rounded-[32px]
                                ${item.bg} backdrop-blur-md
                                shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                                flex flex-col overflow-hidden
                            `}
                        >
                            <div className="relative w-full h-[160px]">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-center flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-snug font-medium line-clamp-2">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
