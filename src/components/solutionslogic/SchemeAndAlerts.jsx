import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, FileText, Bell, BarChart3, Server, Send, Target, Smartphone, MessageSquare, Mail } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
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

const SchemeAndAlerts = () => {
    return (
        <div className="p-8 md:p-12 bg-slate-50 font-sans">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <motion.header variants={itemVariants} className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Scheme & Alert System Workflow</h1>
                    <p className="mt-4 text-lg text-gray-600">How officers manage schemes and broadcast critical alerts to farmers.</p>
                </motion.header>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* --- Part 1: Scheme Management --- */}
                    <motion.div variants={containerVariants}>
                        <motion.h3 variants={itemVariants} className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-4">
                            <FileText className="w-8 h-8 text-green-600"/> Scheme Management Dashboard
                        </motion.h3>
                        <FlowCard>
                            <p className="font-semibold text-slate-700 mb-2">Scheme Status</p>
                            <div className="flex space-x-2 text-sm mb-4"><span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">Active</span><span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Upcoming</span><span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full">Expired</span></div>
                            <div className="space-y-3">
                                <div className="bg-slate-50 p-3 rounded-lg border">
                                    <p className="font-bold">PM-KISAN - 17th Installment</p>
                                    <p className="text-xs text-slate-500">Status: Active | Deadline: 31-10-2025</p>
                                    <div className="flex justify-end mt-2">
                                        <button className="text-xs font-bold text-white bg-indigo-600 px-3 py-1 rounded-full flex items-center gap-1 shadow-lg animate-pulse">
                                            <Megaphone size={14}/> Notify Farmers
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-lg border opacity-70">
                                    <p className="font-bold">New Solar Pump Subsidy</p>
                                    <p className="text-xs text-slate-500">Status: Upcoming | Starts: 01-11-2025</p>
                                </div>
                            </div>
                        </FlowCard>
                    </motion.div>

                    {/* --- Part 2: Alerting System --- */}
                    <motion.div variants={containerVariants} className="space-y-6">
                        <motion.h3 variants={itemVariants} className="flex items-center gap-3 text-2xl font-bold text-slate-800">
                           <Bell className="w-8 h-8 text-indigo-600"/> Advanced Alerting System
                        </motion.h3>
                        <FlowCard>
                            <h4 className="font-semibold text-lg flex items-center gap-2"><Target size={20}/> 1. Compose & Target</h4>
                            <p className="text-sm text-slate-500 mt-1">Officer drafts a message and uses filters to select a specific audience by district, block, or crop type.</p>
                        </FlowCard>
                        <FlowCard>
                            <h4 className="font-semibold text-lg flex items-center gap-2"><Send size={20}/> 2. Select Delivery Channels</h4>
                             <ul className="mt-2 space-y-2 text-sm">
                                <li><strong>Push Notification:</strong> Free, via Firebase Cloud Messaging (FCM).</li>
                                <li><strong>WhatsApp & SMS:</strong> Paid (per message), via a service like Twilio for wider reach.</li>
                             </ul>
                        </FlowCard>
                        <FlowCard>
                             <h4 className="font-semibold text-lg flex items-center gap-2"><Server size={20}/> 3. Backend Processing</h4>
                             <p className="text-sm text-slate-500 mt-1">The Node.js backend queries the database for the target farmers and sends thousands of alerts instantly via the chosen channels.</p>
                        </FlowCard>
                         <FlowCard>
                             <h4 className="font-semibold text-lg flex items-center gap-2"><BarChart3 size={20}/> 4. View Analytics</h4>
                             <p className="text-sm text-slate-500 mt-1">The officer can view a dashboard with stats on total alerts sent, farmers reached, and the distribution of alerts by type (e.g., Pest, Weather, Scheme).</p>
                        </FlowCard>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default SchemeAndAlerts;