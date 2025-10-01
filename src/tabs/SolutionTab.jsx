import React from 'react';
import Icon from '../components/Icon';
import FeatureCard from '../components/solution/FeatureCard'; // Import the new card

const SolutionTab = () => {
    // UPDATED: Data now includes 'illustration' and optional 'infographic'
     const farmerFeatures = [
        { title: "Personalized Crop Advisory", icon: "lightbulb", illustration: "/images/features/farmer/advisory.png", content: ["Crop, fertilizer, irrigation, pest, and sowing-time recommendations.", "Profitability & sustainability score for each crop choice.", "Climate-smart practices + AgriStack / Soil Health Card integration."] },
        { title: "Yield Prediction", icon: "bar-chart-2", illustration: "/images/features/farmer/Yield.png", content: ["Forecast yield and profit margins using ML and your input data."], infographic: { value: "±5% Margin", label: "Forecast Accuracy" } },
        { title: "Soil & Weather Intelligence", icon: "cloud-sun", illustration:  "/images/features/farmer/Soil&Weather.png", content: ["Real-time soil health via SoilGrids, Bhuvan, or connected IoT sensors.", "Localized weather alerts for rain, drought, and pest risk."] },
        { title: "Pest/Disease Detection", icon: "bug", illustration:"/images/features/farmer/disease.png" , content: ["Upload plant images for instant AI diagnosis.", "Receive disease hotspot warnings from satellite and officer inputs."], infographic: { value: "97% Accuracy", label: "Diagnosis Model" } },
       { title: "Market Price Prediction & Selling Suggestions", icon: "qr-code", illustration: "/images/features/farmer/Price.png", content: [" Mandi prices prediction and selling suggestions to ensure profit for farmers and higher income"] },
             {title:"Blockchain-based Supply Chain Traceability", icon:"shield-check", illustration:"/images/features/farmer/Blockchain.png", content:["Generate QR codes for your produce to ensure transparency and trust.", "Enable retailers and consumers to verify origin, quality, and pricing history through blockchain-backed records."]},
        { title: "Query Support", icon: "message-square", illustration: "/images/features/farmer/Query.png", content: ["Ask questions via text, voice, or image.", "Get answers from our AI or trusted local 'Power Farmers'.", "Unresolved cases are escalated to an officer."] },
        { title: "Digital Companion Mode", icon: "book-marked", illustration: "/images/features/farmer/Digital.png", content: ["Automatically log activities with phone sensors and simple confirmations.", "AI learns your history to give proactive advice (e.g., 'Rain expected, delay spraying')."] },
        { title: "Gamified Sustainability", icon: "award", illustration: "/images/features/farmer/Sustainabilty.png", content: ["Complete 'missions' for sustainable practices.", "Earn badges, sustainability scores, and rank on a community leaderboard."] },
        { title: "Spectral Crop Health Maps", icon: "satellite", illustration:  "/images/features/farmer/Spectral.png", content: ["View simple NDVI/EVI maps showing crop vigor and water stress.", "Compare field health before and after taking action."] },
        { title: "Multilingual-Regional language Support", icon: "globe", illustration: "/images/features/farmer/Regional.png", content: ["App available in many Indian languages with voice input/output.", "Region-specific advice considering local crops, pests, and practices."] },
        {title:"Video Tutorials,App guide,Profile and notification management,offline functionality", icon:"video", illustration:"/images/features/farmer/features.png", content:["Access a library of video tutorials for best practices.","Manage your profile and notifications easily.","Use key features offline with data syncing when online."]}
    ];

    // RESTORED: The complete list of 6 officer features
    const officerFeatures = [
        { title: "Escalated Query Resolution", icon: "inbox", illustration: "/images/features/officer/Query.png", content: ["Manage and answer complex farmer questions sorted by urgency."] },
        { title: "Proactive Outbreak Monitoring", icon: "siren", illustration: "/images/features/officer/Disease.png", content: ["View heatmaps of reported diseases and pests.", "Get alerts on high-risk conditions to send mass advisories."] },
        { title: "Regional Analytics", icon: "bar-chart-2", illustration:"/images/features/officer/Dashboard.png" , content: ["Access aggregated soil fertility maps and district-wise weather reports."] },
        { title: "Scheme & Policy Updates", icon: "megaphone", illustration: "/images/features/officer/Scheme.png", content: ["Easily push information about subsidies, insurance, and new missions."] },
        { title: "Blockchain Oversight", icon: "shield-check", illustration: "/images/features/officer/SupplyChain.png", content: ["Verify farmer-produce claims and get alerts for anomalies."] },
        { title: "Feedback & Analytics", icon: "link", illustration: "/images/features/officer/Analytics.png", content: ["Track farmer adoption rates, regional stress zones, and sustainability scores."] }
    ];

    // RESTORED: The complete list of 5 backend features
    const backendFeatures = [
        { title: "Crop Advisory Engine", icon: "sprout", illustration: "/images/soil.png", content: ["Analyzes soil, weather, crop rotation, and market data to give optimal advice."] },
        { title: "Yield & Disease Engines", icon: "bar-chart-2", illustration: "/images/yield.jpeg", content: ["Uses LSTMs and CNNs to forecast yield and detect diseases from images."] },
        { title: "Farmer Query Bot", icon: "message-square", illustration: "/images/chat.jpeg", content: ["A multilingual NLP bot that understands and answers farmer queries."] },
        { title: "Spectral Intelligence Engine", icon: "satellite", illustration: "/images/band.png", content: ["Fuses Sentinel-2/Landsat and IoT data to compute NDVI, NDMI, and stress maps."] },
        { title: "Companion & Gamification Engines", icon: "award", illustration: "/images/Gamification.png", content: ["Learns from farmer logs to provide nudges and manage the reward system."] },
       { 
    title: "Blockchain-based Supply Chain Engine", 
    icon: "shield-check", 
    illustration: "/images/blockchain.jpeg", 
    content: [
        "Implements a distributed ledger (Hyperledger / Ethereum-based) for immutable crop transactions.", 
        "Generates unique blockchain-backed QR codes linked to farmer, crop, and mandi records.", 
        "Verifies authenticity, prevents fraudulent claims, and enables transparent farm-to-fork traceability."
    ] 
},

    ];
    return (
        <div className="p-4 md:p-8 bg-slate-100">
            <header className="text-center mb-12">
                <h2 className="text-4xl font-bold animated-gradient-text">A Unified Digital Ecosystem</h2>
                <p className="text-slate-600 max-w-4xl mx-auto mt-4">
                    Krishi Mitra is a holistic AI-powered platform designed to empower every stakeholder in the agricultural value chain.
                </p>
            </header>
            
            <div className="max-w-7xl mx-auto space-y-16">
                
                {/* Section 1: Farmer App */}
                <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 shadow-lg border border-green-200/80">
                    <header className="mb-8">
                        <h3 className="text-3xl font-bold text-green-800 flex items-center gap-3">
                            <Icon name="smartphone" className="w-8 h-8"/>
                            <span>KisanSathi: The Farmer's App</span>
                        </h3>
                        <p className="text-green-700/80 mt-2">An offline-ready, intuitive mobile assistant for data-driven farming.</p>
                    </header>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-in">
                        {farmerFeatures.map((feature, index) => <FeatureCard key={index} {...feature} style={{ '--stagger-index': index }} />)}
                    </div>
                </section>

                {/* Section 2: Officer Dashboard */}
                <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg border border-blue-200/80">
                    <header className="mb-8">
                        <h3 className="text-3xl font-bold text-blue-800 flex items-center gap-3">
                            <Icon name="layout-dashboard" className="w-8 h-8"/>
                            <span>KrishiAdhikari: The Officer's Dashboard</span>
                        </h3>
                        <p className="text-blue-700/80 mt-2">A powerful web-based command center for monitoring, analysis, and communication.</p>
                    </header>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-in">
                        {officerFeatures.map((feature, index) => <FeatureCard key={index} {...feature} style={{ '--stagger-index': index }} />)}
                    </div>
                </section>

                {/* Section 3: AI Backend */}
                <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 shadow-lg border border-purple-200/80">
                    <header className="mb-8">
                        <h3 className="text-3xl font-bold text-purple-800 flex items-center gap-3">
                            <Icon name="brain-circuit" className="w-8 h-8"/>
                            <span>The AI Brain: Backend Engines</span>
                        </h3>
                        <p className="text-purple-700/80 mt-2">Modular AI engines that fuse diverse data streams to provide actionable intelligence.</p>
                    </header>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-in">
                        {backendFeatures.map((feature, index) => <FeatureCard key={index} {...feature} style={{ '--stagger-index': index }} />)}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SolutionTab;