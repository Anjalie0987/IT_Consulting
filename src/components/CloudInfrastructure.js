"use client";

import React from "react";
import CloudInfrastructureHero from "./CloudInfrastructureHero";
import CloudExpertise from "./CloudExpertise";
import CloudCapabilities from "./CloudCapabilities";
import Footer from "./Footer";

export default function CloudInfrastructure() {
    return (
        <div className="w-full bg-white">
            <CloudInfrastructureHero />
            <CloudExpertise />
            <CloudCapabilities />
            <Footer />
        </div>
    );
}
