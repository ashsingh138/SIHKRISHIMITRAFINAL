import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Map, BarChart2, FileDown, Send, ArrowDown } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const FlowCard = ({ children, className = '' }) => (
    <motion.div variants={itemVariants} className={`bg-white p-6 rounded-xl shadow-lg border ${className}`}>
        {children}
    </motion.div>
);

const Arrow = () => (
    <motion.div variants={itemVariants}>
        <ArrowDown className="w-10 h-10 text-slate-300 my-4 mx-auto" />
    </motion.div>
);

const RegionalAnalyticsFlowchart = () => {
    return (
        <div className="p-8 md:p-12 bg-slate-50 font-sans">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto flex flex-col items-center"
            >
                <motion.header variants={itemVariants} className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Regional Analytics Workflow</h1>
                    <p className="mt-4 text-lg text-gray-600">How officers gain a macro-level overview of their entire jurisdiction.</p>
                </motion.header>

                {/* --- Step 1: Data Aggregation --- */}
                <FlowCard className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">1. Large-Scale Data Aggregation</h3>
                    <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                        <Database className="w-8 h-8 text-blue-600 flex-shrink-0"/>
                        <div>
                            <h4 className="font-bold">Automated Data Fetching</h4>
                            <p className="text-sm text-slate-600">The backend queries free APIs (ISRIC SoilGrids, Bhuvan, tomorrow.io etc) using the officer's jurisdictional boundary (GPS polygon).</p>
                        </div>
                    </div>
                </FlowCard>
                <Arrow />

                {/* --- Step 2: Backend Analysis --- */}
                <FlowCard className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">2. Backend Analysis & Indexing</h3>
                     <div className="flex items-center gap-3 bg-indigo-50 p-3 rounded-lg">
                        <Server className="w-8 h-8 text-indigo-600 flex-shrink-0"/>
                        <div>
                            <h4 className="font-bold">Data Processing Engine (Node.js)</h4>
                            <p className="text-sm text-slate-600">Aggregates gridded data to the block/village level and computes unified indices for easy visualization.</p>
                        </div>
                    </div>
                     <div className="mt-4 grid md:grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-slate-100 p-2 rounded-md"><strong>Soil Health Index</strong><br/>(pH, N, P, K)</div>
                        <div className="bg-slate-100 p-2 rounded-md"><strong>Weather Trends</strong><br/>(Rainfall vs. Average)</div>
                        <div className="bg-slate-100 p-2 rounded-md"><strong>Crop Health Index</strong><br/>(NDVI + Pest Reports)</div>
                    </div>
                </FlowCard>
                <Arrow />

                {/* --- Step 3: Analytics Dashboard --- */}
                <FlowCard className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">3. The Analytics Dashboard</h3>
                     <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center p-4 relative overflow-hidden">
                            <Map className="w-32 h-32 text-gray-400 opacity-50"/>
                            <p className="absolute bottom-2 text-sm font-semibold text-gray-600">Interactive Choropleth Map</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Data Visualization:</h4>
                             <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2 text-sm">
                                <li>Color-coded maps for Soil, Weather & Crop Health.</li>
                                <li>Trend charts for rainfall and temperature.</li>
                                <li>Data cards for key district-wide metrics.</li>
                                <li>Dynamic filters by block, crop, or time range.</li>
                             </ul>
                        </div>
                     </div>
                </FlowCard>
                <Arrow />

                {/* --- Step 4: Actionable Insights --- */}
                <FlowCard className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">4. Actionable Insights & Reporting</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                            <FileDown className="w-8 h-8 text-green-600 flex-shrink-0"/>
                            <div>
                                <h4 className="font-bold">Download Reports</h4>
                                <p className="text-sm text-slate-600">Generate and download comprehensive PDF reports for official records and planning.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
                            <Send className="w-8 h-8 text-purple-600 flex-shrink-0"/>
                            <div>
                                <h4 className="font-bold">Issue Advisory</h4>
                                <p className="text-sm text-slate-600">Directly send targeted advisories (e.g., for drought) to all farmers in an affected region.</p>
                            </div>
                        </div>
                    </div>
                </FlowCard>
            </motion.div>
        </div>
    );
};

export default RegionalAnalyticsFlowchart;