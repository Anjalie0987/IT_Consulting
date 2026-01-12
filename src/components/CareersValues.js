"use client";

import { motion } from "framer-motion";

export default function CareersValues() {
    const values = [
        {
            title: "Learning & Growth",
            desc: "Continuous learning opportunities, mentorship, and hands-on experience to help you grow at every stage of your career.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
            )
        },
        {
            title: "Collaborative Culture",
            desc: "Work with talented, supportive teams that value openness, trust, and shared success.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.472m0 0a9.09 9.09 0 00-3.279-.475 3 3 0 00-4.681 2.719m.94-3.197l.001.031c0 .225.012.447.037.666A11.944 11.944 0 0112 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0118 18.719m-6-8.25c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
            )
        },
        {
            title: "Impactful Work",
            desc: "Solve meaningful problems and contribute to solutions that create real-world impact.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
            )
        },
        {
            title: "Technology-First Environment",
            desc: "Work with modern tools, platforms, and practices in a forward-thinking culture.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Intro */}
                    <div className="lg:col-span-5 flex flex-col justify-start">
                        <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                            Why join us?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Why Join Us
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-light text-justify">
                            We create an environment where people feel supported, challenged, and empowered to do their best work.
                        </p>
                    </div>

                    {/* Right Column: Values Grid 2x2 with Dividers */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`
                                        flex flex-row items-start gap-6 p-8
                                        ${index % 2 === 0 ? 'md:border-r' : ''} 
                                        ${index < 2 ? 'border-b' : ''}
                                        border-gray-100
                                    `}
                                >
                                    {/* Icon - Left */}
                                    <div className="flex-shrink-0 text-blue-600">
                                        {value.icon}
                                    </div>

                                    {/* Content - Right */}
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed text-sm text-justify">
                                            {value.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
