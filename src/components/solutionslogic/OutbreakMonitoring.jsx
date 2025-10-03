import React from 'react';
import { motion } from 'framer-motion';
import { Map, UploadCloud, UserCheck, Satellite, Server, Siren, Send, ArrowDown } from 'lucide-react';

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

const OutbreakMonitoring = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Proactive Outbreak Monitoring</h1>
                    <p className="mt-4 text-lg text-gray-600">How officers use KrishiAdhikari to turn data into decisive action.</p>
                </motion.header>

                {/* --- Step 1: Data Aggregation --- */}
                <FlowCard className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">1. Data Aggregation & Hotspot Detection</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-slate-50 p-3 rounded-lg"><UploadCloud className="mx-auto w-6 h-6 text-blue-500 mb-1"/><p className="text-xs font-semibold">AI Farmer Reports</p></div>
                        <div className="bg-slate-50 p-3 rounded-lg"><UserCheck className="mx-auto w-6 h-6 text-purple-500 mb-1"/><p className="text-xs font-semibold">Officer Verifications</p></div>
                        <div className="bg-slate-50 p-3 rounded-lg"><Satellite className="mx-auto w-6 h-6 text-green-500 mb-1"/><p className="text-xs font-semibold">Spectral Analysis</p></div>
                    </div>
                    <ArrowDown className="w-6 h-6 text-slate-400 mx-auto my-3" />
                    <div className="flex items-center gap-3 bg-indigo-50 p-3 rounded-lg">
                        <Server className="w-8 h-8 text-indigo-600 flex-shrink-0"/>
                        <div>
                            <h4 className="font-bold">Backend Aggregation Engine</h4>
                            <p className="text-sm text-slate-600">Aggregates all geo-tagged reports and calculates hotspot density to identify high-risk zones.</p>
                        </div>
                    </div>
                </FlowCard>
                <Arrow />

                {/* --- Step 2: Monitoring Dashboard --- */}
                <FlowCard className="w-full">
                     <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">2. The Officer's Dashboard</h3>
                     <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center p-4 relative overflow-hidden">
                             <Map className="w-32 h-32 text-gray-400 opacity-50"/>
                             <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-red-500/50 rounded-full animate-ping"></div>
                             <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-orange-500/50 rounded-full animate-ping"></div>
                             <p className="absolute bottom-2 text-sm font-semibold text-gray-600">Live Heatmap</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Key Features:</h4>
                             <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2 text-sm">
                                <li>Interactive geospatial map (Mapbox/Leaflet)</li>
                                <li>Filter by disease, time range, and data source</li>
                                <li>Clickable hotspots for detailed information</li>
                             </ul>
                        </div>
                     </div>
                </FlowCard>
                <Arrow />

                {/* --- Step 3: Proactive Action --- */}
                <FlowCard className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">3. Targeted Action & Resolution</h3>
                    <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                        <Siren className="w-8 h-8 text-green-600 flex-shrink-0"/>
                        <div>
                            <h4 className="font-bold">Automated Hotspot Alerts</h4>
                            <p className="text-sm text-slate-600">Officers receive an immediate notification when a new high-risk hotspot is detected by the system.</p>
                        </div>
                    </div>
                    <ArrowDown className="w-6 h-6 text-slate-400 mx-auto my-3" />
                    <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                        <Send className="w-8 h-8 text-blue-600 flex-shrink-0"/>
                        <div>
                            <h4 className="font-bold">Issue Targeted Advisory</h4>
                            <p className="text-sm text-slate-600">From the dashboard, the officer writes and sends a push notification to all farmers in the affected region with specific, actionable advice.</p>
                        </div>
                    </div>
                </FlowCard>
            </motion.div>
        </div>
    );
};

export default OutbreakMonitoring;