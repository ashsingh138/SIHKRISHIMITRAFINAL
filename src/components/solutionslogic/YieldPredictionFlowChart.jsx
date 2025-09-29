import React from 'react';
import { motion } from 'framer-motion';
import { User, Cloud, Satellite, BrainCircuit, BarChart2, DollarSign, Smartphone, ArrowDown } from 'lucide-react';

// Reusable components for the flowchart
const InputCard = ({ icon: Icon, title, items, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6, ease: "easeOut" }}
        className="bg-white p-6 rounded-xl shadow-lg border w-full"
    >
        <div className="flex items-center text-lg font-semibold text-slate-800">
            <Icon className="w-6 h-6 mr-3 text-indigo-500" />
            {title}
        </div>
        <ul className="mt-3 text-slate-600 text-sm list-disc list-inside space-y-1">
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    </motion.div>
);

const Stage = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col items-center w-full"
    >
        {children}
    </motion.div>
);

const AnimatedArrow = ({ delay }) => (
    <Stage delay={delay}>
        <ArrowDown className="w-10 h-10 text-slate-400 my-6 animate-pulse" />
    </Stage>
);

const YieldPredictionFlowchart = () => {
    return (
        <div className="bg-slate-50 w-full p-8 font-sans">
            <div className="max-w-5xl mx-auto">
                <Stage>
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Yield Prediction & Profit Engine</h1>
                        <p className="mt-4 text-lg text-gray-600">A detailed look at how we turn farm data into financial forecasts.</p>
                    </header>
                </Stage>

                {/* --- Stage 1: Data Aggregation --- */}
                <Stage>
                    <h2 className="text-3xl font-bold text-center mb-8">1. Data Aggregation</h2>
                    <div className="grid md:grid-cols-2 gap-8 w-full">
                        <InputCard 
                            icon={User}
                            title="Farmer Inputs"
                            items={["Sowing Date & Crop Variety", "Farm Size & Irrigation Data", "Input Costs (Seeds, Fertilizer)", "Optional Soil Test Reports"]}
                            delay={0.2}
                        />
                        <InputCard 
                            icon={Cloud}
                            title="External Data Sources"
                            items={["Spectral Health (NDVI, EVI)", "Weather & Climate Data", "Soil Grids (ISRIC)", "Market Prices (eNAM)"]}
                            delay={0.4}
                        />
                    </div>
                </Stage>

                <AnimatedArrow delay={0.5} />

                {/* --- Stage 2: AI/ML Engine --- */}
                <Stage delay={0.6}>
                    <h2 className="text-3xl font-bold text-center mb-8">2. AI/ML Prediction Engine</h2>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                        className="bg-slate-800 text-white p-8 rounded-2xl shadow-2xl w-full"
                    >
                        <div className="flex items-center text-2xl font-bold mb-6">
                            <BrainCircuit className="w-10 h-10 mr-4 text-indigo-400" />
                            <span>Hybrid Model Processing</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 text-indigo-200">
                            <div>
                                <h4 className="font-semibold mb-2">Tabular Data Models:</h4>
                                <p className="text-sm">Random Forest & XGBoost handle inputs, soil, and weather data.</p>
                                <p className="font-mono text-sm mt-2 model-typing">Training Model...</p>
                            </div>
                             <div>
                                <h4 className="font-semibold mb-2">Time-Series Models:</h4>
                                <p className="text-sm">LSTM & GRU capture spectral (NDVI) patterns over the crop lifecycle.</p>
                                <p className="font-mono text-sm mt-2 model-typing" style={{animationDelay: '1.5s'}}>Analyzing Time-Series...</p>
                            </div>
                        </div>
                    </motion.div>
                </Stage>

                <AnimatedArrow delay={0.8} />

                {/* --- Stage 3: Profit Estimation --- */}
                <Stage delay={0.9}>
                    <h2 className="text-3xl font-bold text-center mb-8">3. Profit Estimation Engine</h2>
                     <InputCard 
                        icon={DollarSign}
                        title="Financial Calculation"
                        items={["Revenue = Predicted Yield x Forecasted Market Price", "Profit = Revenue - Input Costs (from farmer)", "Sustainability Score Bonus adjustments"]}
                        delay={1.0}
                    />
                </Stage>

                <AnimatedArrow delay={1.1} />

                {/* --- Stage 4: App Output --- */}
                <Stage delay={1.2}>
                     <h2 className="text-3xl font-bold text-center mb-8">4. Farmer-Facing Output</h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
                        className="bg-white p-6 rounded-xl shadow-lg border w-full"
                    >
                        <div className="flex items-center text-lg font-semibold text-slate-800">
                           <Smartphone className="w-6 h-6 mr-3 text-green-500" />
                            Yield Prediction Dashboard
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
                            <div className="bg-green-50 p-3 rounded-lg"><p className="text-2xl font-bold text-green-800">48q</p><p className="text-xs text-green-600">Expected Yield</p></div>
                            <div className="bg-blue-50 p-3 rounded-lg"><p className="text-2xl font-bold text-blue-800">₹40k</p><p className="text-xs text-blue-600">Est. Profit</p></div>
                            <div className="bg-yellow-50 p-3 rounded-lg"><p className="text-2xl font-bold text-yellow-800">7.8/10</p><p className="text-xs text-yellow-600">Sustainability</p></div>
                            <div className="bg-red-50 p-3 rounded-lg"><p className="text-sm font-bold text-red-800">Drought Risk</p><p className="text-xs text-red-600">Detected</p></div>
                        </div>
                    </motion.div>
                </Stage>
            </div>
        </div>
    );
};

export default YieldPredictionFlowchart;