export const successStories = [
    {
        id: "1",
        industry: "FINANCIAL SERVICES",
        coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
        summary: "Modernizing a legacy core banking platform to support real-time transactions and open banking APIs.",
        challenge: "The client was operating on a 20-year-old monolithic mainframe system that was costly to maintain, slow to update, and unable to support modern digital banking features. This resulted in poor customer experience and an inability to compete with fintech startups.",
        solution: "We implemented a strangler pattern migration strategy to gradually replace legacy modules with microservices deployed on a secure cloud infrastructure. We also built an API gateway to enable open banking integration, resulting in a 40% reduction in operational costs and 99.99% system availability."
    },
    {
        id: "2",
        industry: "HEALTHCARE",
        coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        summary: "Implementing an AI-driven predictive analytics solution for improving patient outcomes and resource allocation.",
        challenge: "The hospital network struggled with inefficient resource allocation and high readmission rates due to fragmented patient data and lack of actionable insights. Manual data analysis was time-consuming and prone to errors.",
        solution: "We developed a centralized data lake unifying patient records from disparate systems and settled a machine learning model to predict patient readmission risks. The solution provided real-time dashboards for hospital administrators, leading to a 15% drop in readmission rates and optimized staff scheduling."
    },
    {
        id: "3",
        industry: "LOGISTICS & SUPPLY CHAIN",
        coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        summary: "Blockchain-enabled supply chain transparency platform for a global manufacturing giant.",
        challenge: "The lack of visibility across the multi-tier supply chain led to counterfeiting issues, delays in tracking shipments, and disputes with vendors. The client needed a tamper-proof system to verify product authenticity and track provenance.",
        solution: "We designed and deployed a permissioned blockchain solution using Hyperledger Fabric. This allowed all stakeholders (suppliers, manufacturers, distributors) to share a single source of truth for goods in transit. The new system eliminated paperwork delays and reduced counterfeit incidents to near zero."
    },
    {
        id: "4",
        industry: "RETAIL & E-COMMERCE",
        coverImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
        summary: "End-to-end digital transformation of a brick-and-mortar retail chain into an omnichannel powerhouse.",
        challenge: "Facing declining foot traffic, the retailer needed to pivot quickly to e-commerce. Their existing inventory systems were not synced with online channels, leading to overselling and frustrated customers.",
        solution: "We built a unified commerce platform integrating POS, inventory management, and the online storefront. We implemented a 'Buy Online, Pick Up In-Store' (BOPIS) workflow and a personalized recommendation engine, driving a 200% increase in online sales within the first year."
    },
    {
        id: "5",
        industry: "ENERGY & UTILITIES",
        coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
        summary: "IoT-based grid monitoring system for proactive maintenance and outage prevention.",
        challenge: "The energy provider faced frequent power outages and high maintenance costs due to aging infrastructure and reactive repair schedules. Field crews lacked real-time data on equipment health.",
        solution: "We deployed thousands of IoT sensors across the grid to monitor voltage, temperature, and vibration. A real-time analytics platform now alerts control center operators of potential failures before they happen, enabling predictive maintenance and reducing outage duration by 30%."
    }
];
