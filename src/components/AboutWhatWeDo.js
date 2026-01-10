import Link from 'next/link';
import Image from 'next/image';

const services = [
    {
        title: "Digital & Cloud Transformation",
        desc: "Accelerating business innovation through secure, scalable, and cloud-native strategies tailored for the enterprise.",
        pattern: "bg-gradient-to-br from-blue-50 to-blue-100",
        img: "/images/cloud_engineering_platforms_abstract_1767989449348.png"
    },
    {
        title: "Data, Analytics & AI",
        desc: "Turning complex data ecosystems into actionable insights with advanced artificial intelligence and analytics.",
        pattern: "bg-gradient-to-br from-indigo-50 to-indigo-100",
        img: "/AI.jpg"
    },
    {
        title: "Enterprise Applications",
        desc: "Streamlining core operations with robust, integrated enterprise software solutions and automation.",
        pattern: "bg-gradient-to-br from-slate-50 to-slate-100",
        img: "/Enterprise.jpg"
    },
    {
        title: "Cybersecurity & Compliance",
        desc: "Protecting your digital assets and reputation with rigorous security frameworks and proactive compliance.",
        pattern: "bg-gradient-to-br from-gray-100 to-gray-200",
        img: "/cyber.jpg"
    },
    {
        title: "Tech Strategy & Architecture",
        desc: "Future-proofing your business with resilient, scalable IT roadmaps that align with long-term goals.",
        pattern: "bg-gradient-to-br from-blue-900 to-slate-900 opacity-10",
        img: "/images/enterprise_digital_transformation_abstract_1767989394636.png"
    },
    {
        title: "Managed Services",
        desc: "Ensuring operational excellence, reliability, and continuous improvement for your entire IT estate.",
        pattern: "bg-gradient-to-br from-white to-gray-50 border-b",
        img: "/images/cloud_engineering_platforms_abstract_1767989449348.png"
    },
];

export default function AboutWhatWeDo() {
    return (
        <section className="w-full bg-[#FAFAFA] py-24 border-t border-gray-200/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* 2. Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight relative inline-block">
                        What We Do
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed pt-4">
                        We deliver end-to-end technology solutions that drive efficiency, innovation, and competitive advantage for forward-thinking enterprises.
                    </p>
                </div>

                {/* 3. Cards Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full"
                        >
                            {/* A. Top Media Area (Image Holder) */}
                            <div className="h-48 w-full relative overflow-hidden bg-slate-100">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5"></div>
                            </div>

                            {/* B. Card Content Area */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 text-left flex-grow">
                                    {service.desc}
                                </p>


                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
