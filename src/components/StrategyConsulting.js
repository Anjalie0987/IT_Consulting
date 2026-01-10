"use client";

import React from "react";

import StrategyConsultingHero from "./StrategyConsultingHero";
import StrategyExpertise from "./StrategyExpertise";

import StrategyCapabilities from "./StrategyCapabilities";

import Footer from "./Footer";

export default function StrategyConsulting() {


    return (
        <div className="w-full bg-white font-sans text-gray-900">
            {/* 1. Hero Section */}
            <StrategyConsultingHero />

            {/* 2. Expertise Section */}
            <StrategyExpertise />


            <StrategyCapabilities />

            <Footer />
        </div>
    );

}
