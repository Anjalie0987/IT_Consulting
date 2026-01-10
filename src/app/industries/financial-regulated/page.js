import React from "react";
import FinancialRegulatedHero from "@/components/FinancialRegulatedHero";
import FinancialRegulatedCapabilities from "@/components/FinancialRegulatedCapabilities";
import Footer from "@/components/Footer";

export default function FinancialRegulatedPage() {
    return (
        <div className="w-full bg-white">
            <FinancialRegulatedHero />
            <FinancialRegulatedCapabilities />
            <Footer />
        </div>
    );
}
