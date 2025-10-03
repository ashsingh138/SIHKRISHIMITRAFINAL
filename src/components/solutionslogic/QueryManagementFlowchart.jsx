import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShieldAlert, User, HelpCircle, Inbox, Send, RefreshCw } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const FlowCard = ({ icon: Icon, title, description, color, children }) => (
    <motion.div variants={itemVariants} className={`query-flow-card p-6 rounded-xl shadow-lg border-l-4 ${color}`}>
        <div className="flex items-start gap-4">
            <Icon className="w-8 h-8 text-slate-700 flex-shrink-0" />
            <div>
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                <p className="text-slate-600 text-sm mt-1">{description}</p>
            </div>
        </div>
        {children}
    </motion.div>
);

const Arrow = () => (
    <motion.div variants={itemVariants} className="connector-line-vertical h-12"></motion.div>
);


const QueryManagementFlowchart = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Farmer Query Management Workflow</h1>
                    <p className="mt-4 text-lg text-gray-600">How unresolved queries are intelligently escalated and expertly resolved.</p>
                </motion.header>

                {/* --- Step 1: Farmer's Query --- */}
                <FlowCard 
                    icon={Smartphone} 
                    title="1. Farmer Submits Query"
                    description="A query is submitted via the KisanSathi app, and the AI provides an initial response."
                    color="border-blue-500"
                />
                <Arrow />

                {/* --- Step 2: Escalation Triggers --- */}
                <FlowCard 
                    icon={ShieldAlert} 
                    title="2. Smart Escalation Pipeline"
                    description="The backend automatically escalates the query if any of these conditions are met:"
                    color="border-amber-500"
                >
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-slate-100 p-2 rounded-md"><strong>Low AI Confidence</strong><br/>(e.g., &lt;70%)</div>
                        <div className="bg-slate-100 p-2 rounded-md"><strong>Farmer Request</strong><br/>("Not Satisfied" button)</div>
                        <div className="bg-slate-100 p-2 rounded-md"><strong>High-Priority Keywords</strong><br/>(e.g., "outbreak")</div>
                    </div>
                </FlowCard>
                <Arrow />

                {/* --- Step 3: Officer Dashboard --- */}
                 <FlowCard 
                    icon={Inbox} 
                    title="3. Krishi Adhikari Dashboard"
                    description="The escalated query appears in the officer's inbox, sorted by urgency, with the full context (farmer info, AI's answer, images)."
                    color="border-indigo-500"
                />
                <Arrow />

                {/* --- Step 4: Resolution --- */}
                <motion.div variants={itemVariants} className="w-full text-center">
                     <h3 className="text-2xl font-bold text-slate-800 mb-4">4. Resolution & Feedback Loop</h3>
                     <div className="flex items-center">
                        <div className="w-1/2 h-0.5 bg-slate-300"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0"></div>
                        <div className="w-1/2 h-0.5 bg-slate-300"></div>
                     </div>
                     <div className="grid md:grid-cols-2 gap-8 mt-[-1rem]">
                        <div className="flex flex-col items-center">
                            <div className="w-0.5 h-8 bg-slate-300"></div>
                            <FlowCard 
                                icon={Send} 
                                title="Farmer Resolution"
                                description="The officer's expert answer is sent back to the farmer's app via a push notification."
                                color="border-green-500"
                            />
                        </div>
                         <div className="flex flex-col items-center">
                            <div className="w-0.5 h-8 bg-slate-300"></div>
                            <FlowCard 
                                icon={RefreshCw} 
                                title="AI Improvement"
                                description="The verified 'question + expert answer' pair is used as new training data to make the AI smarter over time."
                                color="border-purple-500"
                            />
                        </div>
                     </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default QueryManagementFlowchart;