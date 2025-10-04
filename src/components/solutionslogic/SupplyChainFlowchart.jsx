import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, QrCode, Server, UserCheck, Check, AlertTriangle, ShieldCheck, ArrowDown } from 'lucide-react';

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

const SupplyChainFlowchart = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Supply Chain Oversight & Verification</h1>
                    <p className="mt-4 text-lg text-gray-600">How officers ensure transparency and trust from farm to fork using the KrishiAdhikari dashboard.</p>
                </motion.header>

                <FlowCard className="w-full">
                    <div className="flex items-center gap-4">
                        <Leaf className="w-8 h-8 text-green-600 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">1. Origination at the Farm</h3>
                            <p className="text-slate-600 text-sm mt-1">A farmer logs harvest details (quantity, quality, timestamp) in the KisanSathi app.</p>
                        </div>
                    </div>
                </FlowCard>
                <Arrow />

                <FlowCard className="w-full">
                    <div className="flex items-center gap-4">
                        <QrCode className="w-8 h-8 text-slate-700 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">2. Blockchain Transaction & QR Code</h3>
                            <p className="text-slate-600 text-sm mt-1">A unique QR code is generated, and the initial data is recorded as an immutable transaction on the blockchain.</p>
                        </div>
                    </div>
                </FlowCard>
                <Arrow />
                
                <FlowCard className="w-full">
                     <div className="flex items-center gap-4">
                        <Server className="w-8 h-8 text-blue-600 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">3. Officer Dashboard Monitoring</h3>
                            <p className="text-slate-600 text-sm mt-1">The new batch appears on the officer's dashboard as "Pending Verification," showing all farmer-provided data and images.</p>
                        </div>
                    </div>
                </FlowCard>
                <Arrow />

                <FlowCard className="w-full text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">4. Officer Verification</h3>
                    <p className="text-slate-500 text-sm mb-4">The officer reviews the submitted data and takes action.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <Check className="mx-auto w-6 h-6 text-green-600 mb-1"/>
                            <h4 className="font-semibold">Verify Batch</h4>
                            <p className="text-xs text-slate-500">If details are correct, the officer verifies the transaction, updating its status on the blockchain to "Officer Verified".</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <AlertTriangle className="mx-auto w-6 h-6 text-red-600 mb-1"/>
                             <h4 className="font-semibold">Flag as Incorrect</h4>
                            <p className="text-xs text-slate-500">If there's an issue (e.g., incorrect quality claim), the officer flags the batch, which alerts the farmer and marks it for review.</p>
                        </div>
                    </div>
                </FlowCard>
                <Arrow />
                
                <FlowCard className="w-full">
                     <div className="flex items-center gap-4">
                        <ShieldCheck className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">5. Outcome: A Trusted Supply Chain</h3>
                             <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2 text-sm">
                                <li>**Farmers** gain trust and can command premium prices for verified produce.</li>
                                <li>**Officers** have easy monitoring and ensure accountability.</li>
                                <li>**Consumers** get full transparency into the origin and journey of their food.</li>
                             </ul>
                        </div>
                    </div>
                </FlowCard>

            </motion.div>
        </div>
    );
};

export default SupplyChainFlowchart;