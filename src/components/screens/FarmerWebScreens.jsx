import React, { useState, useMemo } from "react";
import Icon from "../Icon";
import BrowserMockup from "../BrowserMockup1";

const FarmerWebScreens = () => {

  const farmerWebData = useMemo(() => [
    {
        title: "Farmer Dashboard",
        description: "An overview of weather, active alerts, daily tasks, and shortcuts to all key features of your smart farming assistant.",
        image: "/images/features/farmer/Dashboard.png"
    },
    {
        title: "Crop & Fertilization Advisory",
        description: "Receive personalized recommendations for crops, fertilizer, and irrigation based on your specific farm and soil data.",
        image: "/images/features/farmer/advisory.png"
    },
    {
        title: "Pest & Disease Detection",
        description: "Upload an image of a plant to get an instant, AI-powered diagnosis of pests and diseases, along with recommended treatments.",
        image: "/images/features/farmer/disease.png"
    },
    {
        title: "Yield Prediction",
        description: "Forecast your crop yield and profit margins with our AI engine by inputting your specific farm data and cultivation practices.",
        image: "/images/features/farmer/Yield.png"
    },
    {
        title: "Market Price Intelligence",
        description: "Track live mandi prices, view future price predictions, and get intelligent recommendations on the best time to sell your produce.",
        image: "/images/features/farmer/Price.png"
    },
    {
        title: "Query & Community Support",
        description: "Get instant answers from our AI, ask questions in the community forum, and escalate complex issues directly to an agricultural officer.",
        image: "/images/features/farmer/Query.png"
    },
    {
        title: "Spectral Health Monitoring",
        description: "Monitor your crop's health from space with satellite-powered NDVI maps that highlight plant vigor and water stress.",
        image: "/images/features/farmer/Spectral.png"
    },
    {
        title: "Soil & Weather Reports",
        description: "Access real-time, hyper-local weather forecasts and view your detailed Soil Health Card to make informed decisions.",
        image: "/images/features/farmer/Soil&Weather.png"
    },
    {
        title: "Sustainability Hub",
        description: "Join the Sustainability Hub to complete missions, earn rewards for eco-friendly practices, and climb the community leaderboard.",
        image: "/images/features/farmer/Sustainabilty.png"
    },
    {
        title: "Digital Companion & Logs",
        description: "Use your personal farm logbook to track all activities, from irrigation to fertilization, and receive proactive advice based on your history.",
        image: "/images/features/farmer/Digital.png"
    },
    {
        title: "Video Tutorials",
        description: "Learn from experts and innovative farmers through a comprehensive library of video tutorials on a wide range of agricultural topics.",
        image: "/images/features/farmer/Video.png"
    },
    {
        title: "App Guide & Support",
        description: "A clear and simple guide to help you learn and utilize all the powerful features of the KisanSathi platform.",
        image: "/images/features/farmer/APPGuide.png"
    },
    {
        title: "Alerts & Profile Management",
        description: "Manage your personal profile, contact information, and customize your alert preferences for SMS and WhatsApp notifications.",
        image: "/images/features/farmer/Settings.png"
    },
    {
        title: "Regional Language Support",
        description: "Access the entire platform in your preferred regional language for a more intuitive and comfortable user experience.",
        image: "/images/features/farmer/Regional.png"
    },
], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentScreen = farmerWebData[currentIndex];

    const goToNext = () => setCurrentIndex((prev) => (prev + 1) % farmerWebData.length);
    const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + farmerWebData.length) % farmerWebData.length);

    return (
        <section>
            <h2 className="text-4xl font-bold text-center mb-2 animated-gradient-text">
                KisanSathi: The Farmer's Web Portal
            </h2>
            <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                Access your farm data and community resources from any device.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-xl border flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
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
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-teal-700 mb-2">{currentScreen.title}</h3>
                    <p className="text-slate-600">{currentScreen.description}</p>
                </div>
            </div>
        </section>
    );
};

export default FarmerWebScreens;