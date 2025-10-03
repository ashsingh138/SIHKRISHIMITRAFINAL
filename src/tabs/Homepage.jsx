import React, {useState, useEffect}from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../components/Icon';
import videoFile from "../assets/85897-591840755_small.mp4";
import sihLogo from "../assets/sih_logo.jpeg"; 
import iitkgpLogo from "../assets/iitkgp_logo.png"; 
import projectLogo from "../assets/KrishiMitra_logo.png";

const Preloader = () => {
    const gridSize = 10;
    const dots = Array.from({ length: gridSize * gridSize });
    const connections = Array.from({ length: 30 }).map(() => ({
        from: Math.floor(Math.random() * 100),
        to: Math.floor(Math.random() * 100),
    }));
    const getDotPosition = (index) => {
        const x = (index % gridSize) * (100 / (gridSize - 1));
        const y = Math.floor(index / gridSize) * (100 / (gridSize - 1));
        return { x: `${x}%`, y: `${y}%` };
    };

    return (
        <motion.div
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 overflow-hidden"
        >
            <div className="absolute w-full h-full p-12">
                <motion.div 
                    className="relative w-full h-full"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.01 } } }}
                >
                    {dots.map((_, i) => (
                        <motion.div
                            key={i}
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.3 } }}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full"
                            style={getDotPosition(i)}
                        />
                    ))}
                </motion.div>
                <svg className="absolute top-0 left-0 w-full h-full" style={{ transform: 'scale(1.2) translate(-8.3%, -8.3%)'}}>
                    {connections.map((conn, i) => {
                        const fromPos = getDotPosition(conn.from);
                        const toPos = getDotPosition(conn.to);
                        return (
                            <motion.line
                                key={i}
                                x1={fromPos.x} y1={fromPos.y}
                                x2={toPos.x} y2={toPos.y}
                                stroke="rgba(96, 165, 250, 0.3)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 + i * 0.05, ease: "easeInOut" }}
                            />
                        );
                    })}
                </svg>
            </div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.0, duration: 1.0, type: "spring" }}
                className="relative z-10 flex flex-col items-center"
            >
                {/* UPDATED: Increased logo size */}
                <img src={projectLogo} alt="Krishi Mitra Logo" className="w-56 h-56" />
                <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="mt-4 text-2xl font-bold text-white tracking-widest animated-gradient-text"
                >
                    The TechnoWizards
                </motion.h2>
                {/* NEW: Added a mission statement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0, duration: 0.8 }}
                    className="mt-2 text-lg text-slate-300 font-medium"
                >
                    From Survival to Sustainability
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

const Homepage = ({ onExplore }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // UPDATED: Increased duration for the new animation
        const timer = setTimeout(() => setIsLoading(false), 5000); 
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
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full overflow-hidden bg-white/10 backdrop-blur-sm"><img src={iitkgpLogo} alt="IIT Kharagpur Logo" className="w-full h-full object-contain p-1 bg-white" /></div>
                                <div className="font-bold text-lg md:text-xl tracking-wide text-gray-100 hidden sm:block">Smart India Hackathon 2025</div>
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm p-2"><img src={sihLogo} alt="SIH Logo" className="w-full h-full object-contain" /></div>
                            </motion.header>
                            <div className="space-y-6">
                                <motion.h1 variants={sentenceVariants} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-black tracking-tight animated-gradient-text">
                                    {title.split("").map((char, index) => (<motion.span key={char + "-" + index} variants={letterVariants}>{char}</motion.span>))}
                                </motion.h1>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="text-xl md:text-2xl font-light text-slate-300">Indian Institute of Technology, Kharagpur</motion.p>
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