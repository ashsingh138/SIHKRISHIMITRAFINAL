import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Thermometer, Database, BrainCircuit, Smartphone, ArrowDown } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const FlowCard = ({ icon: Icon, title, items, color, isML = false }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${color.border}`}>
        <div className="flex items-center">
            <div className={`p-3 rounded-full mr-4 ${color.bg}`}>
                <Icon className={`w-6 h-6 ${color.text}`} />
            </div>
            <h4 className="text-xl font-bold text-slate-800">{title}</h4>
        </div>
        <ul className="mt-4 text-slate-600 text-sm list-disc list-inside space-y-2">
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        {isML && <p className="mt-3 text-xs font-semibold text-purple-600">ML Model Applied</p>}
    </div>
);

const AnimatedArrow = () => (
    <motion.div variants={itemVariants} className="flex justify-center my-6">
        <ArrowDown className="w-10 h-10 text-slate-300" />
    </motion.div>
);

const SoilWeatherIntelligence = () => {
    return (
        <div className="bg-slate-50 w-full p-8 font-sans">
            <motion.div 
                className="max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <motion.header variants={itemVariants} className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Soil & Weather Intelligence Flow</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">From raw environmental data to real-time, adaptive advice for every farm.</p>
                </motion.header>

                <div className="grid md:grid-cols-2 gap-x-12">
                    {/* --- SOIL HEALTH PIPELINE --- */}
                    <div className="flex flex-col items-center">
                        <motion.div variants={itemVariants} className="w-full p-4 rounded-xl flow-bg-pattern bg-green-100 border-2 border-green-200 mb-8">
                           <h2 className="text-2xl font-bold text-green-800 text-center flex items-center justify-center gap-3"><Leaf/> Soil Health Report</h2>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="w-full">
                            <FlowCard 
                                icon={Database}
                                title="Data Sources"
                                items={["Farmer's Manual Soil Test", "SoilGrids API (ISRIC)", "Bhuvan Land-Use Maps", "Spectral Data (Moisture, Salinity)"]}
                                color={{ bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-400' }}
                            />
                        </motion.div>
                        <AnimatedArrow />
                         <motion.div variants={itemVariants} className="w-full">
                            <FlowCard 
                                icon={BrainCircuit}
                                title="Processing Engine"
                                items={["Merge farmer data with API profiles.", "Generate personalized Soil Health Card.", "Suggest crop suitability based on soil type."]}
                                color={{ bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-400' }}
                                isML={true}
                            />
                        </motion.div>
                    </div>

                    {/* --- WEATHER INTELLIGENCE PIPELINE --- */}
                    <div className="flex flex-col items-center mt-12 md:mt-0">
                         <motion.div variants={itemVariants} className="w-full p-4 rounded-xl flow-bg-pattern bg-blue-100 border-2 border-blue-200 mb-8">
                           <h2 className="text-2xl font-bold text-blue-800 text-center flex items-center justify-center gap-3"><Thermometer/> Weather Intelligence</h2>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="w-full">
                            <FlowCard 
                                icon={Database}
                                title="Data Sources"
                                items={["Tomorrow.io API (Forecasts)", "IMD / Bhuvan AgroMet (Alerts)", "Spectral Data (NDMI for drought)", "Farmer Logs (Irrigation history)"]}
                                color={{ bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-400' }}
                            />
                        </motion.div>
                        <AnimatedArrow />
                         <motion.div variants={itemVariants} className="w-full">
                             <FlowCard 
                                icon={BrainCircuit}
                                title="Alert Engine"
                                items={["Fetch 7-14 day GPS-based forecasts.", "Use ML thresholds to detect risks (e.g., blight risk at >80% humidity).", "Trigger contextual alerts based on crop stage."]}
                                color={{ bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-400' }}
                                isML={true}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* --- CONVERGENCE & OUTPUT --- */}
                <div className="flex flex-col items-center">
                    <AnimatedArrow />
                     <motion.div variants={itemVariants} className="w-full max-w-2xl">
                        <FlowCard 
                            icon={Smartphone}
                            title="Actionable Insight in App"
                            items={[
                                `Soil Report: "Your soil is moderately acidic (pH 5.6) with low nitrogen. Suggested crop: maize + lime treatment."`,
                                `Weather Alert: "🌧️ Rain expected tomorrow (35mm). Do not irrigate today to save water and prevent waterlogging."`
                            ]}
                            color={{ bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-400' }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default SoilWeatherIntelligence;