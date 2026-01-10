"use client";

import React from "react";
import Footer from "./Footer";
import TechnologyEngineeringHero from "./TechnologyEngineeringHero";
import TechnologyExpertise from "./TechnologyExpertise";
import TechnologyCapabilities from "./TechnologyCapabilities";

export default function TechnologyEngineering() {
    return (
        <div className="w-full bg-white font-sans text-gray-900">
            {/* 1. Hero Section */}
            <TechnologyEngineeringHero />

            {/* 2. Expertise Section */}
            <TechnologyExpertise />

            {/* 3. Capabilities Section */}
            <TechnologyCapabilities />

            {/* 4. Footer */}
            <Footer />
        </div>
    );
}
