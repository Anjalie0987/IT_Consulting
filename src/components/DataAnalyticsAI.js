"use client";

import React from "react";
import DataAnalyticsAIHero from "./DataAnalyticsAIHero";
import DataExpertise from "./DataExpertise";
import DataCapabilities from "./DataCapabilities";
import Footer from "./Footer";

export default function DataAnalyticsAI() {
    return (
        <div className="w-full bg-white">
            <DataAnalyticsAIHero />
            <DataExpertise />
            <DataCapabilities />
            <Footer />
        </div>
    );
}
