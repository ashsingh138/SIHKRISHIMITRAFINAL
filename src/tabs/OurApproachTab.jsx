import React from 'react';
import { motion } from 'framer-motion';
import { Layers, BrainCircuit, Share2, ShieldCheck, WifiOff, Ear, Users, Check, X } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const SectionHeader = ({ title, subtitle }) => (
    <motion.div variants={itemVariants} className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-800">{title}</h3>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
);

const TechChoiceCard = ({ icon: Icon, title, reasons }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border h-full">
        <div className="flex items-center gap-3 mb-3">
            <Icon className="w-8 h-8 text-indigo-500" />
            <h4 className="font-bold text-xl text-slate-800">{title}</h4>
        </div>
        <ul className="text-slate-600 space-y-2 text-sm list-disc list-inside">
            {reasons.map((reason, i) => <li key={i}>{reason}</li>)}
        </ul>
    </div>
);

const ChallengeSolutionCard = ({ icon: Icon, title, solution, color }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color.border}`}>
        <div className="flex items-center gap-3 mb-2">
            <Icon className={`w-6 h-6 ${color.text}`} />
            <h4 className="font-semibold text-lg text-slate-800">{title}</h4>
        </div>
        <p className="text-sm text-slate-600 pl-9">{solution}</p>
    </div>
);

const OurApproachTab = () => {
    return (
        <div className="p-8 md:p-12 bg-slate-50">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="space-y-20 max-w-7xl mx-auto"
            >
                <motion.header variants={itemVariants} className="text-center">
                    <h2 className="text-4xl font-bold animated-gradient-text">Our Approach & Rationale</h2>
                    <p className="text-slate-600 max-w-3xl mx-auto mt-4 text-xl">
                        Justifying the key technical and strategic decisions that make Krishi Mitra a robust and impactful solution.
                    </p>
                </motion.header>

                {/* --- Section 1: Technical Choices --- */}
                <motion.section variants={containerVariants}>
                    <SectionHeader title="Our Technical Choices" subtitle="Why we chose this specific stack for performance, scalability, and ease of development." />
                    <div className="grid md:grid-cols-2 gap-8">
                        <TechChoiceCard icon={Layers} title="Why React & React Native?" reasons={["Allows for maximum code sharing between the web and mobile apps, accelerating development.", "A massive ecosystem and strong community support ensure long-term maintainability."]} />
                        <TechChoiceCard icon={Share2} title="Why Node.js for Backend?" reasons={["Excellent for I/O-heavy, real-time applications, perfect for managing thousands of farmer connections and alerts.", "Its vast NPM ecosystem provides ready-made solutions for services like authentication and notifications."]} />
                        <TechChoiceCard icon={BrainCircuit} title="Why Python for AI?" reasons={["The undisputed industry standard for machine learning with unparalleled libraries like TensorFlow, Keras, and Scikit-learn.", "Seamless integration for data processing, model training, and deployment."]} />
                        <TechChoiceCard icon={ShieldCheck} title="Why Blockchain?" reasons={["It's not a buzzword; it's the core solution for the trust deficit in the supply chain.", "Provides an immutable, auditable, and transparent ledger to guarantee produce provenance and ensure fair pricing."]} />
                    </div>
                </motion.section>

                {/* --- Section 2: Addressing Key Challenges --- */}
                <motion.section variants={containerVariants}>
                    <SectionHeader title="Our Strategic Approach" subtitle="We designed our solution to overcome the most critical real-world challenges faced by Indian farmers." />
                    <div className="grid md:grid-cols-3 gap-6">
                        <ChallengeSolutionCard icon={Ear} title="Challenge: Low Digital Literacy" solution="Our app is multilingual, icon-based, and features voice commands to ensure accessibility for all users." color={{ border: 'border-red-500', text: 'text-red-500' }} />
                        <ChallengeSolutionCard icon={WifiOff} title="Challenge: Connectivity Gaps" solution="The mobile app is built to be offline-first. Farmers can access core advisories without internet and the app auto-syncs when reconnected." color={{ border: 'border-amber-500', text: 'text-amber-500' }} />
                        <ChallengeSolutionCard icon={Users} title="Challenge: Lack of Trust" solution="We build trust through a tiered query system where AI suggestions can be verified by a human officer, and blockchain provides market transparency." color={{ border: 'border-blue-500', text: 'text-blue-500' }} />
                    </div>
                </motion.section>

                {/* --- Section 3: Competitive Landscape --- */}
                <motion.section variants={itemVariants}>
                    <SectionHeader title="Competitive Landscape" subtitle="How Krishi Mitra stands apart from existing alternatives." />
                    <div className="bg-white p-4 rounded-xl shadow-lg border overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 text-sm">
                                <tr>
                                    <th className="p-3 font-semibold text-slate-700">Feature</th>
                                    <th className="p-3 font-semibold text-center text-indigo-600">Krishi Mitra</th>
                                    <th className="p-3 font-semibold text-center">Basic Agri-Apps</th>
                                    <th className="p-3 font-semibold text-center">Traditional Methods</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-t"><td className="p-3 font-semibold">Advisory</td><td className="p-3 text-center"><Check className="mx-auto text-green-500"/> Proactive & Hyper-Personalized</td><td className="p-3 text-center text-slate-500"><X className="mx-auto text-red-500"/> Generic & Static</td><td className="p-3 text-center text-slate-500"><X className="mx-auto text-red-500"/> Delayed & Inaccessible</td></tr>
                                <tr className="border-t"><td className="p-3 font-semibold">Query Support</td><td className="p-3 text-center"><Check className="mx-auto text-green-500"/> Tiered (AI + Human + Community)</td><td className="p-3 text-center text-slate-500"><X className="mx-auto text-red-500"/> Basic FAQ</td><td className="p-3 text-center text-slate-500"><X className="mx-auto text-red-500"/> Human Only (Officer)</td></tr>
                                <tr className="border-t"><td className="p-3 font-semibold">Market Linkage</td><td className="p-3 text-center"><Check className="mx-auto text-green-500"/> Predictive Pricing & Blockchain</td><td className="p-3 text-center text-slate-500"><X className="mx-auto text-red-500"/> Basic Price Ticker</td><td className="p-3 text-center text-slate-500"><X className="mx-auto text-red-500"/> Opaque (Middlemen)</td></tr>
                                <tr className="border-t"><td className="p-3 font-semibold">Sustainability</td><td className="p-3 text-center"><Check className="mx-auto text-green-500"/> Gamified & Incentivized</td><td className="p-3 text-center text-slate-500"><X className="mx-auto text-red-500"/> None</td><td className="p-3 text-center text-slate-500"><X className="mx-auto text-red-500"/> Not Tracked</td></tr>
                            </tbody>
                        </table>
                    </div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default OurApproachTab;