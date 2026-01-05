
export const navigation = [
  {
    label: "What We Do",
    href: null,
    type: "dropdown",
    megaMenu: {
      intro: {
        heading: "What We Do",
        description: "Explore our comprehensive range of services tailored for your enterprise needs."
      },
      columns: [
        {
          title: "Strategy & Consulting",
          links: [
            { label: "Digital Transformation", href: "/services/digital-transformation" },
            { label: "IT Strategy & Roadmap", href: "/services/it-strategy" },
            { label: "Business Process Optimization", href: "/services/business-process-optimization" },
            { label: "Technology Advisory", href: "/services/technology-advisory" },
          ],
        },
        {
          title: "Technology & Engineering",
          links: [
            { label: "Custom Software Development", href: "/services/software-development" },
            { label: "Web & Mobile Applications", href: "/services/web-mobile-apps" },
            { label: "Legacy System Modernization", href: "/services/legacy-modernization" },
            { label: "Platform & API Engineering", href: "/services/platform-engineering" },
          ],
        },
        {
          title: "Cloud & Infrastructure",
          links: [
            { label: "Cloud Migration & Modernization", href: "/services/cloud-migration" },
            { label: "DevOps & Site Reliability", href: "/services/devops-sre" },
            { label: "Infrastructure Management", href: "/services/infrastructure-management" },
            { label: "Cloud Security & Governance", href: "/services/cloud-security" },
          ],
        },
        {
          title: "Data, Analytics & AI",
          links: [
            { label: "Data Engineering", href: "/services/data-engineering" },
            { label: "Business Intelligence", href: "/services/business-intelligence" },
            { label: "AI / ML Solutions", href: "/services/ai-ml-solutions" },
            { label: "Advanced Analytics", href: "/services/advanced-analytics" },
          ],
        },
        {
          title: "Cybersecurity & Risk",
          links: [
            { label: "Security Assessment & Audits", href: "/services/security-assessment" },
            { label: "Data Protection & Privacy", href: "/services/data-protection" },
            { label: "Identity & Access Management", href: "/services/identity-access-management" },
            { label: "Risk & Compliance", href: "/services/risk-compliance" },
          ],
        },
      ],
    },
  },
  {
    label: "Insights",
    href: "/insights",
    type: "link",
  },
  {
    label: "Who We Are",
    href: null,
    type: "dropdown",
    megaMenu: {
      intro: {
        heading: "Who We Are",
        description: "We are an intelligent IT consulting firm helping organizations solve complex challenges through technology, strategy, and execution excellence."
      },
      columns: [
        {
          title: "",
          links: [
            { label: "About Us", href: "/about" },
            { label: "Leadership", href: "/company/leadership" },
            { label: "Success Stories", href: "/insights/success-stories" },
            { label: "Our Policies", href: "/policies" },
            { label: "News & Media", href: "/news" },
          ],
        },
      ],
    },
  },
  {
    label: "Industries",
    href: null,
    type: "dropdown",
    megaMenu: {
      intro: {
        heading: "Industries",
        description: "Our IT and crypto consulting solutions apply across all industries without boundaries."
      },
      columns: [
        {
          title: "Financial & Regulated Industries",
          links: [
            { label: "Banking & Financial Services", href: "/industries/banking-finance" },
            { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
            { label: "Public Sector & Government", href: "/industries/public-sector" },
          ],
        },
        {
          title: "Commercial & Consumer Industries",
          links: [
            { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
            { label: "Manufacturing", href: "/industries/manufacturing" },
            { label: "Logistics & Supply Chain", href: "/industries/logistics" },
            { label: "Education", href: "/industries/education" },
          ],
        },
        {
          title: "Emerging & Digital-First Domains",
          links: [
            { label: "Startups & Digital Businesses", href: "/industries/startups" },
            { label: "Blockchain & Crypto Consulting", href: "/industries/blockchain-crypto" },
            { label: "Web3 & Decentralized Platforms", href: "/industries/web3" },
          ],
        },
      ],
    },
  },
  {
    label: "Careers",
    href: "/careers",
    type: "link",
  },
  {
    label: "Contact Us",
    href: "/contact",
    type: "link",
  },
];
