import React from "react";
import CommercialConsumerHero from "@/components/CommercialConsumerHero";
import CommercialConsumerCapabilities from "@/components/CommercialConsumerCapabilities";
import Footer from "@/components/Footer";

export default function CommercialConsumerPage() {
    return (
        <div className="w-full bg-white">
            <CommercialConsumerHero />
            <CommercialConsumerCapabilities />
            <Footer />
        </div>
    );
}
