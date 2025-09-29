import React, { useState, useMemo } from "react";
import Icon from "../Icon";
import PhoneMockup from "../PhoneMockup";

// --- Reusable Bottom Navigation Component ---
const BottomNavBar = ({ active }) => (
    <div className="flex justify-around items-center border-t bg-white py-2 absolute bottom-0 w-full">
        <div className={`text-center ${active === 'home' ? 'text-green-600' : 'text-gray-500'}`}>
            <Icon name="home" className="w-6 h-6 mx-auto" /><p className="text-xs font-semibold">Home</p>
        </div>
        <div className={`text-center ${active === 'advisory' ? 'text-green-600' : 'text-gray-500'}`}>
            <Icon name="sprout" className="w-6 h-6 mx-auto" /><p className="text-xs">Advisory</p>
        </div>
        <div className={`text-center ${active === 'maps' ? 'text-green-600' : 'text-gray-500'}`}>
            <Icon name="map" className="w-6 h-6 mx-auto" /><p className="text-xs">Maps</p>
        </div>
        <div className={`text-center ${active === 'profile' ? 'text-green-600' : 'text-gray-500'}`}>
            <Icon name="user" className="w-6 h-6 mx-auto" /><p className="text-xs">Profile</p>
        </div>
    </div>
);

// --- NEW UI for ALL 16 KisanSathi Mobile Screens ---

const LoginScreen = () => (
    <div className="h-full flex flex-col font-sans bg-slate-50 p-6 justify-center">
        <div className="text-center mb-8">
            <Icon name="sprout" className="w-16 h-16 mx-auto text-green-500" />
            <h1 className="text-3xl font-bold mt-2 text-gray-800">KisanSathi</h1>
            <p className="text-gray-500">Welcome back, Farmer!</p>
        </div>
        <div className="space-y-4">
            <input type="text" placeholder="Mobile Number" className="w-full p-3 border border-gray-300 rounded-lg text-sm" />
            <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg text-sm" />
            <button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors">LOGIN</button>
            <button className="w-full text-gray-600 font-semibold py-2">Create an Account</button>
        </div>
    </div>
);

const RegisterScreen = () => (
    <div className="h-full flex flex-col font-sans bg-slate-50 p-6 justify-center">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Create Your Account</h1>
            <p className="text-gray-500">Join the KisanSathi community</p>
        </div>
        <div className="space-y-3">
            <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg text-sm" />
            <input type="text" placeholder="Mobile Number" className="w-full p-3 border border-gray-300 rounded-lg text-sm" />
            <input type="password" placeholder="Create Password" className="w-full p-3 border border-gray-300 rounded-lg text-sm" />
            <select className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-500"><option>Select State</option></select>
            <button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors">REGISTER</button>
        </div>
    </div>
);

const DashboardScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative">
        <div className="p-4 space-y-4 pb-20 overflow-y-auto">
            <h1 className="text-xl font-bold text-gray-800">Welcome back, Farmer!</h1>
            <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg"><p className="font-bold text-lg">Partly Cloudy</p><div className="flex justify-between items-center"><p className="text-4xl font-bold">28°C</p><div><p className="text-sm">75% Humidity</p><p className="text-sm">12 km/h Wind</p></div></div><p className="text-xs mt-2">Rain expected in 2 days</p></div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-xl shadow"><Icon name="sprout" className="w-6 h-6 text-green-500 mb-1" /><h4 className="font-bold text-sm">Crop Advisory</h4><p className="text-xs text-gray-500">12 new</p></div>
                <div className="bg-white p-3 rounded-xl shadow"><Icon name="bar-chart-2" className="w-6 h-6 text-blue-500 mb-1" /><h4 className="font-bold text-sm">Yield Prediction</h4><p className="text-xs text-gray-500">85% accuracy</p></div>
                <div className="bg-white p-3 rounded-xl shadow"><Icon name="bug" className="w-6 h-6 text-red-500 mb-1" /><h4 className="font-bold text-sm">Pest Detection</h4><p className="text-xs text-red-500">2 alerts active</p></div>
                <div className="bg-white p-3 rounded-xl shadow"><Icon name="tag" className="w-6 h-6 text-orange-500 mb-1" /><h4 className="font-bold text-sm">Market Prices</h4><p className="text-xs text-gray-500">₹2,150/q</p></div>
            </div>
            <div><h3 className="font-bold">Today's Tasks</h3><div className="bg-white p-3 mt-1 rounded-xl shadow text-sm space-y-1"><p>• Apply Urea to Wheat field.</p><p>• Check pest alert in Field B.</p></div></div>
        </div>
        <BottomNavBar active="home" />
    </div>
);

const CropAdvisoryScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Crop Advisory</h1><div className="bg-white p-3 rounded-xl shadow space-y-2"><p className="font-semibold text-sm">Input Your Farm Data</p><div className="grid grid-cols-2 gap-2"><input placeholder="Nitrogen (kg/ha)" className="p-2 border rounded-md text-xs" /><input placeholder="Phosphorus (P)" className="p-2 border rounded-md text-xs" /></div><button className="w-full bg-gray-800 text-white text-sm font-bold py-2 rounded-lg">Get Personalized Advice</button></div><div className="mt-4 space-y-2"><h3 className="font-bold">Recent Advisories</h3><div className="bg-white p-3 rounded-xl shadow"><p className="font-bold text-red-600">Critical: Water stress detected</p><p className="text-xs text-gray-600">Your wheat crop is showing signs of water stress. Irrigate within 24 hours.</p></div><div className="bg-white p-3 rounded-xl shadow"><p className="font-bold">Fertilizer top-dressing</p><p className="text-xs text-gray-600">Apply second dose of Urea (40kg/ha) to your maize crop.</p></div></div></div><BottomNavBar active="advisory" /></div>
);

const YieldPredictionScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Yield Prediction</h1><div className="bg-white p-3 rounded-xl shadow space-y-2"><p className="font-semibold text-sm">Enter Crop Details</p><select className="w-full p-2 border rounded-md text-xs"><option>Wheat</option></select><input placeholder="Area (Hectares)" className="p-2 border rounded-md text-xs" /><input placeholder="Nitrogen (kg/ha)" className="p-2 border rounded-md text-xs" /><button className="w-full bg-green-600 text-white text-sm font-bold py-2 rounded-lg">Predict Yield</button></div><div className="mt-4 bg-white p-3 rounded-xl shadow text-center"><p className="font-semibold">Predicted Yield for Wheat</p><p className="text-3xl font-bold my-1">4500 <span className="text-lg font-normal">kg/ha</span></p><div className="grid grid-cols-2 gap-2 text-xs"><div className="bg-green-50 p-2 rounded-md"><p className="font-semibold">₹94,500</p><p>Est. Revenue</p></div><div className="bg-red-50 p-2 rounded-md"><p className="font-semibold">₹18,000</p><p>Input Costs</p></div></div></div></div><BottomNavBar active="advisory" /></div>
);

const SoilWeatherScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Soil & Weather</h1><div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg"><div className="flex justify-between items-center"><p className="text-4xl font-bold">29°C</p><p className="text-lg font-bold">Partly Cloudy</p></div></div><div className="mt-4 p-3 bg-red-100 border border-red-200 rounded-xl text-center"><p className="font-bold text-red-700">Heatwave Warning</p></div><div className="mt-4 bg-white p-3 rounded-xl shadow"><h3 className="font-bold mb-2">Soil Health Card</h3><div className="grid grid-cols-3 gap-2 text-center"><div className="bg-slate-100 p-2 rounded"><p className="font-bold">6.8</p><p className="text-xs">pH</p></div><div className="bg-slate-100 p-2 rounded"><p className="font-bold">135</p><p className="text-xs">N kg/ha</p></div><div className="bg-slate-100 p-2 rounded"><p className="font-bold">45</p><p className="text-xs">P kg/ha</p></div></div></div></div><BottomNavBar active="advisory" /></div>
);

const PestDetectionScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20"><h1 className="text-xl font-bold text-center mb-4">Pest & Disease Detection</h1><div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center"><Icon name="camera" className="w-10 h-10 text-gray-400 mb-2" /><p className="font-semibold text-gray-700">Upload Plant Image</p><p className="text-xs text-gray-500">Drop image or browse</p></div><div className="mt-4"><h3 className="font-bold">Recent Detections</h3><div className="bg-white p-3 mt-1 rounded-xl shadow text-sm space-y-2"><p><strong>Leaf Rust</strong> on Wheat - <span className="text-red-600 font-semibold">High Priority</span></p><p><strong>Early Blight</strong> on Tomato - <span className="text-yellow-600 font-semibold">Medium</span></p></div></div></div><BottomNavBar active="advisory" /></div>
);

const MarketPricesScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Market Prices</h1><div className="space-y-3"><div className="bg-white p-3 rounded-xl shadow"><div className="flex justify-between"><p className="font-bold">Wheat - PBW-725</p><p className="font-bold text-green-600">₹2150 <span className="text-sm font-normal text-gray-500">/quintal</span></p></div><p className="text-xs text-gray-500">Ludhiana Mandi, Punjab</p></div><div className="bg-white p-3 rounded-xl shadow"><div className="flex justify-between"><p className="font-bold">Rice - Basmati 1509</p><p className="font-bold">₹3850 <span className="text-sm font-normal text-gray-500">/quintal</span></p></div><p className="text-xs text-gray-500">Karnal Mandi, Haryana</p></div></div><div className="mt-4"><h3 className="font-bold">Selling Recommendations</h3><div className="bg-yellow-100 border border-yellow-200 text-yellow-800 p-2 rounded-xl mt-1 text-sm"><span className="font-bold">Hold Wheat:</span> Prices expected to rise 8% next week.</div></div></div><BottomNavBar active="advisory" /></div>
);

const QuerySupportScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Query Support</h1><div className="bg-white p-3 rounded-xl shadow"><h3 className="font-bold mb-2">Ask a New Question</h3><textarea placeholder="Type your question here..." rows="3" className="w-full p-2 border rounded-md text-sm"></textarea><button className="w-full mt-2 bg-green-500 text-white font-bold py-2 rounded-lg">Submit Query</button></div><div className="mt-4"><h3 className="font-bold">Community Answers</h3><div className="bg-white p-3 mt-1 rounded-xl shadow space-y-2"><p className="font-semibold text-sm">"My wheat leaves are turning yellow. What should I do?"</p><p className="text-xs text-blue-600 font-semibold">AI Answer: Can be Nitrogen deficiency or Yellow Rust. Please upload a clear photo.</p></div></div></div><BottomNavBar active="advisory" /></div>
);

const DigitalCompanionScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Digital Companion</h1><div className="bg-white p-3 rounded-xl shadow"><h3 className="font-bold mb-2">Farm Activity Log</h3><div className="space-y-2 text-sm border-l-2 pl-2"><p><strong>Irrigation:</strong> Used drip system for 2 hours.</p><p><strong>Fertilizer:</strong> Applied 50Kg Urea.</p></div></div><div className="mt-4"><h3 className="font-bold">Proactive Advice</h3><div className="bg-blue-50 p-3 mt-1 rounded-xl shadow text-sm text-blue-800">Rain expected tomorrow. Consider delaying irrigation for the Wheat field to save water.</div></div></div><BottomNavBar active="home" /></div>
);

const SustainabilityScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Sustainability Hub</h1><div className="bg-green-600 text-white p-4 rounded-xl shadow-lg text-center"><p>Your Sustainability Score</p><p className="text-4xl font-bold">8.5<span className="text-2xl">/10</span></p></div><div className="mt-4"><h3 className="font-bold">Active Missions</h3><div className="bg-white p-3 mt-1 rounded-xl shadow text-sm space-y-3"><p>Use Organic Manure (+50 pts)</p><p>Water Conservation (+100 pts)</p></div></div><div className="mt-4"><h3 className="font-bold">My Badges</h3><div className="flex space-x-2 mt-1"><div className="bg-orange-100 text-orange-600 p-2 rounded-full"><Icon name="award" className="w-5 h-5"/></div><div className="bg-blue-100 text-blue-600 p-2 rounded-full"><Icon name="droplets" className="w-5 h-5"/></div></div></div></div><BottomNavBar active="home" /></div>
);

const CropHealthMapScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Crop Health Maps</h1><div className="flex justify-around text-sm mb-2"><button className="font-bold text-green-600 border-b-2 border-green-600">NDVI (Vigor)</button><button className="text-gray-500">NDMI (Water)</button></div><div className="w-full h-48 rounded-xl bg-gradient-to-r from-red-400 via-yellow-300 to-green-500 shadow-inner"></div><div className="mt-4 bg-purple-50 p-3 rounded-xl shadow text-sm"><p className="font-bold text-purple-800">Analysis</p><p className="text-purple-700">Minor stress detected in the northwest corner. Recommend ground-truthing.</p></div></div><BottomNavBar active="maps" /></div>
);

const VideoTutorialsScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Video Tutorials</h1><div className="grid grid-cols-2 gap-3"><div className="bg-white rounded-lg shadow"><div className="h-20 bg-gray-300 rounded-t-lg flex items-center justify-center"><Icon name="play-circle" className="w-8 h-8 text-white"/></div><p className="text-xs font-semibold p-2">Advanced Drip Irrigation</p></div><div className="bg-white rounded-lg shadow"><div className="h-20 bg-gray-300 rounded-t-lg flex items-center justify-center"><Icon name="play-circle" className="w-8 h-8 text-white"/></div><p className="text-xs font-semibold p-2">Treating Leaf Curl Virus</p></div><div className="bg-white rounded-lg shadow"><div className="h-20 bg-gray-300 rounded-t-lg flex items-center justify-center"><Icon name="play-circle" className="w-8 h-8 text-white"/></div><p className="text-xs font-semibold p-2">Making Organic Compost</p></div></div></div><BottomNavBar active="profile" /></div>
);

const AppGuideScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">App Guide</h1><div className="space-y-2 text-sm"><div className="bg-white p-3 rounded-lg shadow font-semibold">Dashboard</div><div className="bg-white p-3 rounded-lg shadow font-semibold">Crop Advisory</div><div className="bg-white p-3 rounded-lg shadow font-semibold">Yield Prediction</div></div></div><BottomNavBar active="profile" /></div>
);

const SettingsScreen = () => (
    <div className="h-full font-sans bg-gray-50 relative"><div className="p-4 pb-20 overflow-y-auto"><h1 className="text-xl font-bold text-center mb-4">Settings</h1><div className="bg-white p-3 rounded-xl shadow"><h3 className="font-bold">Profile Information</h3><p className="text-sm text-gray-600">Name: Ashutosh Singh</p></div><div className="mt-4 bg-white p-3 rounded-xl shadow"><h3 className="font-bold">Alert Preferences</h3><div className="flex justify-between items-center text-sm mt-2"><p>SMS Alerts</p><div className="w-10 h-5 bg-green-500 rounded-full p-1 flex items-center"><div className="w-3 h-3 bg-white rounded-full ml-auto"></div></div></div><div className="flex justify-between items-center text-sm mt-2"><p>WhatsApp Alerts</p><div className="w-10 h-5 bg-green-500 rounded-full p-1 flex items-center"><div className="w-3 h-3 bg-white rounded-full ml-auto"></div></div></div></div></div><BottomNavBar active="profile" /></div>
);

const FarmerMobileScreens = () => {
    const mobileScreenData = useMemo(() => [
        { title: "Secure Login", description: "Access your smart farming dashboard with a secure mobile number and password.", component: <LoginScreen /> },
        { title: "Create an Account", description: "Join the KisanSathi community to get personalized advice and connect with farmers.", component: <RegisterScreen /> },
        { title: "Personalized Dashboard", description: "A daily snapshot of everything you need: local weather, urgent tasks, and key farm metrics.", component: <DashboardScreen /> },
        { title: "Crop Advisory", description: "Get personalized recommendations for your crops based on your specific farm data.", component: <CropAdvisoryScreen /> },
        { title: "Yield Prediction", description: "Forecast crop yield and profit margins with our AI-powered prediction engine.", component: <YieldPredictionScreen /> },
        { title: "Soil & Weather Intelligence", description: "Monitor real-time weather and critical soil health parameters for your farm.", component: <SoilWeatherScreen /> },
        { title: "AI Pest Detection", description: "Upload an image of a diseased plant to get an instant, accurate diagnosis and recommended treatments.", component: <PestDetectionScreen /> },
        { title: "Live Market Prices", description: "Track live mandi prices and get intelligent recommendations on when to sell your produce.", component: <MarketPricesScreen /> },
        { title: "AI & Community Query Support", description: "Get instant answers to your farming questions from our AI and fellow expert farmers.", component: <QuerySupportScreen /> },
        { title: "Digital Companion", description: "Your personal farm logbook that provides proactive advice and smart suggestions based on your activity.", component: <DigitalCompanionScreen /> },
        { title: "Sustainability Hub", description: "Earn rewards for sustainable farming practices and climb the community leaderboard.", component: <SustainabilityScreen /> },
        { title: "Spectral Crop Health Maps", description: "Satellite-powered insights into your crop's health, showing vigor and water stress.", component: <CropHealthMapScreen /> },
        { title: "Video Tutorials", description: "Learn from experts and innovative farmers through a library of short video guides.", component: <VideoTutorialsScreen /> },
        { title: "In-App Guide", description: "A handy guide to help you learn and use all the powerful features of KisanSathi.", component: <AppGuideScreen /> },
        { title: "Profile & Settings", description: "Manage your profile, preferences, and how you receive important alerts.", component: <SettingsScreen /> },
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentScreen = mobileScreenData[currentIndex];

    const goToNext = () => setCurrentIndex((prev) => (prev + 1) % mobileScreenData.length);
    const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + mobileScreenData.length) % mobileScreenData.length);

    return (
        <section>
            <h2 className="text-4xl font-bold text-center mb-2 animated-gradient-text">
                KisanSathi: The Farmer's App
            </h2>
            <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                An intuitive mobile-first experience designed for the field, with offline capabilities.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-xl border flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
                <div className="relative w-full md:w-1/2 flex items-center justify-center">
                    <button onClick={goToPrev} className="absolute -left-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md border">
                        <Icon name="chevron-left" className="w-6 h-6 text-slate-600" />
                    </button>
                    <PhoneMockup>{currentScreen.component}</PhoneMockup>
                    <button onClick={goToNext} className="absolute -right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md border">
                        <Icon name="chevron-right" className="w-6 h-6 text-slate-600" />
                    </button>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-green-700 mb-2">{currentScreen.title}</h3>
                    <p className="text-slate-600">{currentScreen.description}</p>
                </div>
            </div>
        </section>
    );
};

export default FarmerMobileScreens;