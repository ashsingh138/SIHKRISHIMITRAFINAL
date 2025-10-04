import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, LayoutDashboard, BarChart, Map, Siren, CheckCircle, FileDown, ArrowDown,Send } from 'lucide-react';

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

const OfficerDashboardFlowchart = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Krishi Adhikari Dashboard Workflow</h1>
                    <p className="mt-4 text-lg text-gray-600">How the officer's dashboard transforms diverse data into a real-time command center for data-driven governance.</p>
                </motion.header>

                <FlowCard className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">1. Data Sources & Pipelines</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-blue-50 p-3 rounded-lg"><p className="text-xs font-semibold">Farmer App Logs (Queries, Activities)</p></div>
                        <div className="bg-green-50 p-3 rounded-lg"><p className="text-xs font-semibold">Satellite & Weather APIs (NDVI, Forecasts)</p></div>
                        <div className="bg-purple-50 p-3 rounded-lg"><p className="text-xs font-semibold">Blockchain Ledger (Supply Chain Events)</p></div>
                    </div>
                </FlowCard>
                <Arrow />

                <FlowCard className="w-full">
                     <div className="flex items-center gap-3 bg-indigo-50 p-3 rounded-lg">
                        <Server className="w-8 h-8 text-indigo-600 flex-shrink-0"/>
                        <div>
                            <h4 className="font-bold">Backend Processing (Node.js + Python)</h4>
                            <p className="text-sm text-slate-600">Dedicated microservices fetch, clean, and analyze the raw data, preparing it for the dashboard via secure APIs.</p>
                        </div>
                    </div>
                </FlowCard>
                <Arrow />

                <FlowCard className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">2. The Officer's Dashboard UI (React)</h3>
                     <div className="grid md:grid-cols-2 gap-6 items-start">
                        {/* Left Column: KPIs and Alerts */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3"><LayoutDashboard size={20} className="text-blue-500"/> <h4 className="font-semibold">Key Performance Indicators (KPIs)</h4></div>
                            <div className="grid grid-cols-2 gap-2 text-center text-xs">
                                <div className="bg-red-50 p-2 rounded"><strong>12</strong><p>Active Outbreaks</p></div>
                                <div className="bg-yellow-50 p-2 rounded"><strong>327</strong><p>Pending Queries</p></div>
                                <div className="bg-green-50 p-2 rounded"><strong>1,247</strong><p>Farmers Served</p></div>
                                <div className="bg-blue-50 p-2 rounded"><strong>2.5 hrs</strong><p>Avg. Response</p></div>
                            </div>
                             <div className="flex items-center gap-3 mt-4"><Siren size={20} className="text-red-500"/> <h4 className="font-semibold">Urgent Alerts Panel</h4></div>
                             <div className="text-sm bg-red-50 p-2 rounded-lg border border-red-200">Locust outbreak reported in District X.</div>
                        </div>
                        {/* Right Column: Visuals */}
                        <div className="space-y-4">
                             <div className="flex items-center gap-3"><BarChart size={20} className="text-purple-500"/> <h4 className="font-semibold">Visual Insights & Trends</h4></div>
                             <ul className="list-disc list-inside text-slate-600 text-xs space-y-1">
                                <li>Line chart of query trends over time.</li>
                                <li>Heatmap of seasonal disease outbreaks.</li>
                                <li>Radar chart comparing sustainability indices.</li>
                             </ul>
                             <div className="flex items-center gap-3 mt-4"><Map size={20} className="text-green-500"/> <h4 className="font-semibold">Interactive Map View</h4></div>
                             <p className="text-xs text-slate-500">A color-coded map showing regional stress zones (drought, pests), with drill-down capabilities for each district.</p>
                        </div>
                     </div>
                </FlowCard>
                <Arrow />

                <FlowCard className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">3. Officer Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-green-50 p-3 rounded-lg"><CheckCircle className="mx-auto w-6 h-6 text-green-600 mb-1"/><p className="text-xs font-semibold">Verify Supply Chain</p></div>
                        <div className="bg-blue-50 p-3 rounded-lg"><FileDown className="mx-auto w-6 h-6 text-blue-600 mb-1"/><p className="text-xs font-semibold">Export Reports</p></div>
                        <div className="bg-purple-50 p-3 rounded-lg"><Send className="mx-auto w-6 h-6 text-purple-600 mb-1"/><p className="text-xs font-semibold">Resolve Queries</p></div>
                        <div className="bg-red-50 p-3 rounded-lg"><Siren className="mx-auto w-6 h-6 text-red-600 mb-1"/><p className="text-xs font-semibold">Acknowledge Alerts</p></div>
                    </div>
                </FlowCard>
            </motion.div>
        </div>
    );
};

export default OfficerDashboardFlowchart;