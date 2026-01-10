import React from "react";
import EmergingDigitalHero from "@/components/EmergingDigitalHero";
import EmergingDigitalCapabilities from "@/components/EmergingDigitalCapabilities";
import Footer from "@/components/Footer";

export default function EmergingDigitalPage() {
    return (
        <div className="w-full bg-white">
            <EmergingDigitalHero />
            <EmergingDigitalCapabilities />
            <Footer />
        </div>
    );
}
