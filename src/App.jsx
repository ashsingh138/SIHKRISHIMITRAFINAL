import React, { useState } from 'react';

// Import all pages and components
import Homepage from './tabs/Homepage';
import AboutTab from './tabs/AboutTab';
import SolutionTab from './tabs/SolutionTab';
import ScreensTab from './tabs/ScreensTab';
import VideoTab from './tabs/VideoTab';
import ImplementationTab from './tabs/ImplementationTab';
import ResourcesTab from './tabs/ResourcesTab';
import ArchitectureTab from './tabs/ArchitectureTab';
import Footer from './components/Footer';
import TeamTab from './tabs/TeamTab';
import StrategyAndImpact from './tabs/StrategyAndImpact';
import OurApproachTab from './tabs/OurApproachTab';
import { Menu, X } from 'lucide-react'; // NEW: Import icons for the hamburger menu

const TABS = {
    ABOUT: 'About',
    SOLUTION: 'Solution',
    ARCHITECTURE:'System Architecture',
    SCREENS: 'Mobile App & Screens',
    VIDEO: 'Prototype Video',
    IMPLEMENTATION: 'Full Implementation Logic',
    STRATEGY:'Strategy,Viability & Impact',
    APPROACH: 'Our Approach',
    RESOURCES: 'Resources & References',
    TEAM: 'Team',
};

const TAB_COMPONENTS = {
    [TABS.ABOUT]: AboutTab,
    [TABS.SOLUTION]: SolutionTab,
    [TABS.ARCHITECTURE]: ArchitectureTab,
    [TABS.SCREENS]: ScreensTab,
    [TABS.VIDEO]: VideoTab,
    [TABS.IMPLEMENTATION]: ImplementationTab,
    [TABS.STRATEGY]: StrategyAndImpact,
     [TABS.APPROACH]: OurApproachTab,
    [TABS.RESOURCES]: ResourcesTab,
    [TABS.TEAM]: TeamTab,
};

export default function App() {
    const [showHomepage, setShowHomepage] = useState(true);
    const [activeTab, setActiveTab] = useState(TABS.ABOUT);
    
    // NEW: State to manage the mobile menu's open/closed status
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // UPDATED: The navigation handler now also closes the mobile menu on selection.
    const handleNavigate = (tab) => {
        setActiveTab(tab);
        setIsMenuOpen(false); // Close menu after a link is clicked
        window.scrollTo(0, 0);
    };
    
    const ActiveTabComponent = TAB_COMPONENTS[activeTab] || AboutTab;

    if (showHomepage) {
        return <Homepage onExplore={() => setShowHomepage(false)} />;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
                <nav className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo / Home Button */}
                    <div className="py-4 font-bold text-green-700 cursor-pointer text-lg" onClick={() => setShowHomepage(true)}>
                        Krishi Mitra 🌱
                    </div>

                    {/* NEW: Hamburger Menu Button (Visible on mobile only) */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Desktop Navigation (Visible on medium screens and up) */}
                    <ul className="hidden md:flex items-center justify-center space-x-2">
                        {Object.values(TABS).map(tab => (
                            <li key={tab}>
                                <button 
                                    onClick={() => handleNavigate(tab)}
                                    className={`p-4 text-sm font-semibold border-b-4 transition-colors ${activeTab === tab ? 'border-green-500 text-green-600' : 'border-transparent text-slate-500 hover:text-green-600'}`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* NEW: Mobile Dropdown Menu (Conditionally rendered) */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                        <ul className="flex flex-col items-center">
                            {Object.values(TABS).map(tab => (
                                <li key={tab} className="w-full">
                                    <button 
                                        onClick={() => handleNavigate(tab)}
                                        className={`w-full p-4 text-center font-semibold transition-colors ${activeTab === tab ? 'bg-green-100 text-green-700' : 'text-slate-600 hover:bg-slate-100'}`}
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
            
            <main className="flex-grow">
                <ActiveTabComponent onNavigate={handleNavigate} TABS={TABS} />
            </main>

            <Footer />
        </div>
    );
}