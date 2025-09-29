import React, { useState, useMemo } from "react";
import Icon from "../Icon";
import BrowserMockup from "../BrowserMockup";

const OfficerScreens = () => {
    // Data for each officer screen, using your images
    const officerScreenData = useMemo(() => [
    {
        title: "Multi-Role Landing Page",
        description: "The central portal providing secure login and registration for all ecosystem roles, including Officers, Consumers, and Retailers.",
        image: "/images/features/officer/Landingpage.png"
    },
    {
        title: "Officer Dashboard",
        description: "A high-level overview of regional alerts, pending farmer queries, and key agricultural metrics to manage your jurisdiction effectively.",
        image: "/images/features/officer/Dashboard.png"
    },
    {
        title: "SMS,Whatsapp Alerts to farmers",
        description: "Send timely alerts and advisories to farmers via SMS and WhatsApp, ensuring they receive critical information on time.",
        image: "/images/features/officer/Alert.png"
    },
    {
        title: "Regional Analytics",
        description: "Access detailed charts and reports for analyzing regional crop data, soil health trends, and advisory adoption rates.",
        image: "/images/features/officer/Analytics.png"
    },
    {
        title: "Farmer Query Inbox",
        description: "A smart inbox to efficiently manage and resolve complex queries escalated from farmers, prioritized by AI-detected urgency.",
        image: "/images/features/officer/Query.png"
    },
    {
        title: "Scheme & Advisory Broadcast",
        description: "Compose and broadcast crucial advisories, government scheme updates, and weather warnings to specific, targeted groups of farmers.",
        image: "/images/features/officer/Scheme.png"
    },
    {
        title: "Regional Weather & Soil Hub",
        description: "View real-time, district-level weather patterns and aggregated soil health information to support regional planning.",
        image: "/images/features/officer/Weather&soil.png"
    },
    {
        title: "Disease Verification Panel",
        description: "Review and verify AI-powered pest and disease detections submitted by farmers to ensure accuracy and provide expert oversight.",
        image: "/images/features/officer/Disease.png"
    },
    {
        title: "Supply Chain Management",
        description: "An integrated module for monitoring and managing the agricultural supply chain, from farm procurement to retail distribution.",
        image: "/images/features/officer/SupplyChain.png"
    },
    {
        title: "Consumer Traceability Dashboard",
        description: "A portal for consumers to scan QR codes and view the complete farm-to-fork journey of their produce, ensuring transparency and trust.",
        image: "/images/features/officer/Consumer.png"
    },
    {
        title: "Secure Officer Login",
        description: "A dedicated and secure login interface for Agricultural Officers to access their powerful dashboard and management tools.",
        image: "/images/features/officer/Login.png"
    },
    {
        title: "User Registration",
        description: "A simple and intuitive registration form for new users to join the KisanSathi platform based on their designated role.",
        image: "/images/features/officer/Register.png"
    },
    {
        title: "Multilingual Support",
        description: "Full support for multiple regional languages, ensuring the platform is accessible and user-friendly for everyone.",
        image: "/images/features/officer/LanguageSupport.png"
    },
], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentScreen = officerScreenData[currentIndex];

    const goToNext = () => setCurrentIndex((prev) => (prev + 1) % officerScreenData.length);
    const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + officerScreenData.length) % officerScreenData.length);

    return (
        <section>
            <h2 className="text-4xl font-bold text-center mb-2 animated-gradient-text">
                KrishiAdhikari: The Officer's Dashboard
            </h2>
            <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                A powerful web command center for monitoring, analysis, and communication.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-xl border flex flex-col-reverse md:flex-row items-center gap-8 max-w-6xl mx-auto">
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-blue-700 mb-2">{currentScreen.title}</h3>
                    <p className="text-slate-600">{currentScreen.description}</p>
                </div>
                <div className="relative w-full md:w-2/3 flex items-center justify-center">
                    <button onClick={goToPrev} className="absolute -left-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md border">
                        <Icon name="chevron-left" className="w-6 h-6 text-slate-600" />
                    </button>
                    <BrowserMockup>
                        <img src={currentScreen.image} alt={currentScreen.title} className="w-full h-full object-cover" />
                    </BrowserMockup>
                    <button onClick={goToNext} className="absolute -right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md border">
                        <Icon name="chevron-right" className="w-6 h-6 text-slate-600" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OfficerScreens;