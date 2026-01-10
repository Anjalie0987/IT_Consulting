"use client";

import React from "react";
import CybersecurityRiskHero from "./CybersecurityRiskHero";
import CybersecurityExpertise from "./CybersecurityExpertise";
import CybersecurityCapabilities from "./CybersecurityCapabilities";
import Footer from "./Footer";

export default function CybersecurityRisk() {
    return (
        <div className="w-full bg-white">
            <CybersecurityRiskHero />
            <CybersecurityExpertise />
            <CybersecurityCapabilities />
            <Footer />
        </div>
    );
}
