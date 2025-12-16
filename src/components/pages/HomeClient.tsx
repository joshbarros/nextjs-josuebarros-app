"use client";

import { HeroSection } from "@/components/HeroSection";
import { TechTicker } from "@/components/TechTicker";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ProcessSection } from "@/components/ProcessSection";
// import { ResultsSection } from "@/components/ResultsSection"; // TODO: Uncomment when we have real metrics
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

export const HomeClient = () => {
    return (
        <main className="bg-background min-h-screen">
            <HeroSection />
            <TechTicker />
            <CapabilitiesSection />
            <ProcessSection />
            {/* <ResultsSection /> */}{/* TODO: Uncomment when we have real metrics */}
            <PricingSection />
            <FAQSection />
            <ContactSection />
        </main>
    );
};
