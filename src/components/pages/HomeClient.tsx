"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { TechTicker } from "@/components/TechTicker";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ProcessSection } from "@/components/ProcessSection";
// import { ResultsSection } from "@/components/ResultsSection"; // TODO: Uncomment when we have real metrics
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PageTransition } from "@/components/PageTransition";

export const HomeClient = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Check if already loaded in this session
        const hasLoaded = sessionStorage.getItem("hasLoaded");
        if (hasLoaded) {
            setIsLoading(false);
            setShowContent(true);
        }
    }, []);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
        // Small delay before showing content for smooth transition
        setTimeout(() => setShowContent(true), 100);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen
                        key="loading"
                        onLoadingComplete={handleLoadingComplete}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showContent && (
                    <PageTransition>
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
                    </PageTransition>
                )}
            </AnimatePresence>
        </>
    );
};
