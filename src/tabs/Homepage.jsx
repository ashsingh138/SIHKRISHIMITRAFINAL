import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../components/Icon';
import videoFile from "../assets/85897-591840755_small.mp4";
import sihLogo from "../assets/sih_logo.jpeg"; 
import iitkgpLogo from "../assets/iitkgp_logo.png"; 
import projectLogo from "../assets/krishiMitra_logo.png";

// --- UPDATED: Multi-Stage "Data Fusion" Preloader ---
const Preloader = () => {
    // UPDATED: Added even more relevant words
    const problemWords = [
        "Droughts", "Pests", "Low Prices", "Crop Loss", "Soil Degradation", 
        "Market Inefficiency", "Connectivity Gaps", "Water Stress", "Guesswork Farming",
        "Climate Shocks", "Lack of Advice"
    ];
    const solutionWords = [
        "AI Advisory", "Yield Prediction", "Blockchain", "Market Prices", "Sustainability", 
        "Data Fusion", "Proactive Alerts", "Community Help", "Offline First",
        "Gamification", "Spectral Maps"
    ];
  
    return (
      <motion.div
        exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 overflow-hidden"
      >
        {/* --- STAGE 1: Problems Converging --- */}
        {problemWords.map((word, i) => {
            const angle = (i / problemWords.length) * 360;
            const radius = window.innerWidth / 2.5;
            return (
                <motion.span
                    key={`problem-${i}`}
                    initial={{ x: Math.cos(angle * Math.PI / 180) * radius, y: Math.sin(angle * Math.PI / 180) * radius, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: [0, 1, 1, 0], scale: [1, 1.1, 0] }}
                    transition={{ 
                        duration: 3.0, // Increased duration
                        delay: i * 0.15, 
                        ease: "easeIn",
                        // UPDATED: Words are now fully visible for a much longer time
                        times: [0, 0.15, 0.85, 1] 
                    }}
                    className="absolute text-2xl md:text-3xl text-red-400 font-semibold"
                >
                    {word}
                </motion.span>
            );
        })}

        {/* --- STAGE 2: Logo Transformation --- */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.8, duration: 1.0, type: "spring" }}
            className="relative"
        >
             <img src={projectLogo} alt="Krishi Mitra Logo" className="w-48 h-48" />
        </motion.div>

        {/* --- STAGE 3: Solutions Radiating --- */}
         {solutionWords.map((word, i) => {
            const angle = (i / solutionWords.length) * 360 + 15;
            const radius = window.innerWidth / 2.5;
            return (
                <motion.span
                    key={`solution-${i}`}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{ 
                        x: Math.cos(angle * Math.PI / 180) * radius, 
                        y: Math.sin(angle * Math.PI / 180) * radius, 
                        opacity: [0, 1, 1, 0],
                        scale: 1
                    }}
                    transition={{ 
                        duration: 3.0, // Increased duration
                        delay: 3.5 + (i * 0.15), 
                        ease: "easeOut",
                        // UPDATED: Words are now fully visible for a much longer time
                        times: [0, 0.15, 0.85, 1] 
                    }}
                    className="absolute text-2xl md:text-3xl text-green-400 font-semibold"
                >
                    {word}
                </motion.span>
            );
        })}
      </motion.div>
    );
};


// --- Homepage Component ---
const Homepage = ({ onExplore }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 7000); // Updated preloader duration to match new animation
        return () => clearTimeout(timer);
    }, []);

    const title = "The TechnoWizards";
    const sentenceVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
    const letterVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

    return (
        <>
            <AnimatePresence>
                {isLoading && <Preloader />}
            </AnimatePresence>

            <div className="relative w-full h-screen overflow-hidden bg-black">
                <video autoPlay loop muted className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 z-10" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)' }}></div>
                
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-4">
                    {!isLoading && (
                        <>
                            <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
                                    <img src={iitkgpLogo} alt="IIT Kharagpur Logo" className="w-full h-full object-contain p-1 bg-white" />
                                </div>
                                <div className="font-bold text-lg md:text-xl tracking-wide text-gray-100 hidden sm:block">Smart India Hackathon 2025</div>
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm p-2">
                                    <img src={sihLogo} alt="SIH Logo" className="w-full h-full object-contain" />
                                </div>
                            </motion.header>

                            <div className="space-y-6">
                                <motion.h1 variants={sentenceVariants} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-black tracking-tight animated-gradient-text">
                                    {title.split("").map((char, index) => (<motion.span key={char + "-" + index} variants={letterVariants}>{char}</motion.span>))}
                                </motion.h1>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="text-xl md:text-2xl font-light text-slate-300">
                                    Indian Institute of Technology, Kharagpur
                                </motion.p>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="mt-8 bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-slate-700 max-w-3xl">
                                    <p className="text-sm font-semibold tracking-widest text-green-400 uppercase">Problem Statement</p>
                                    <h2 className="text-2xl md:text-3xl font-bold mt-2">Smart Crop Advisory System for Small and Marginal Farmers</h2>
                                    <p className="mt-2 text-lg text-slate-400 font-mono">ID: SIH25010</p>
                                </motion.div>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 0.8 }}>
                                    <button onClick={onExplore} className="cta-button">Explore Our Solution<Icon name="arrow-right" className="w-6 h-6" /></button>
                                </motion.div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Homepage;