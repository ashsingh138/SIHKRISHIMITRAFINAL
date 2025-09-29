import React from 'react';
import Icon from '../components/Icon';
import videoFile from "../assets/85897-591840755_small.mp4";
import logo from "../assets/sih_logo.jpeg"; 
import iitkgpLogo from "../assets/iitkgp_logo.png"; 

const Homepage = ({ onExplore }) => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
            >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-4">

                {/* Top Header */}
                <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center animate-fade-in-up">
                    
                    {/* Left: IIT KGP Logo */}
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full overflow-hidden bg-white/10">
                        <img 
                            src={iitkgpLogo} 
                            alt="IIT Kharagpur Logo" 
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Center: Smart India Hackathon Text */}
                    <div className="font-bold text-xl md:text-2xl tracking-wide text-gray-100">
                        Smart India Hackathon 2025
                    </div>

                    {/* Right: SIH Logo */}
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-white rounded-full bg-white/10 animate-bounce-slow">
                        <img 
                            src={logo} 
                            alt="SIH Logo" 
                            className="w-4/5 h-4/5 object-contain transition-transform duration-700 ease-in-out hover:scale-110" 
                        />
                    </div>
                </header>

                {/* Main Content (unchanged) */}
                <div className="space-y-6 stagger-in">
                    <h1 
                        className="text-5xl md:text-7xl font-black tracking-tight animated-gradient-text"
                        style={{ '--stagger-index': 1 }}
                    >
                        The TechnoWizards
                    </h1>
                    <p 
                        className="text-xl md:text-2xl font-light text-slate-300"
                        style={{ '--stagger-index': 2 }}
                    >
                        Indian Institute of Technology, Kharagpur
                    </p>
                    <div 
                        className="w-24 h-1 bg-green-500 mx-auto rounded-full"
                        style={{ '--stagger-index': 3 }}
                    ></div>
                    <div 
                        className="mt-8 bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-slate-700 max-w-3xl"
                        style={{ '--stagger-index': 4 }}
                    >
                        <p className="text-sm font-semibold tracking-widest text-green-400 uppercase">
                            Problem Statement
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mt-2">
                            Smart Crop Advisory System for Small and Marginal Farmers
                        </h2>
                        <p className="mt-2 text-lg text-slate-400 font-mono">
                            ID: SIH25010
                        </p>
                    </div>
                    <div style={{ '--stagger-index': 5 }}>
                        <button 
                            onClick={onExplore}
                            className="cta-button"
                        >
                            Explore Our Solution
                            <Icon name="arrow-right" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
