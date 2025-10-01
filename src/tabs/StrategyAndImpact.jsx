import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Lightbulb, Users, ShieldCheck, TrendingUp, DollarSign, Globe, Leaf, Zap, Award, Target, CheckCircle, SlidersHorizontal, HeartHandshake, ArrowRight } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const USP_Card = ({ icon: Icon, title, description }) => (
    <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg border h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <Icon className="w-10 h-10 text-indigo-500 mb-4" />
        <h4 className="font-bold text-lg text-slate-800">{title}</h4>
        <p className="text-slate-600 text-sm mt-1">{description}</p>
    </motion.div>
);

const ImpactStatCard = ({ icon: Icon, value, suffix, title, items, color }) => (
     <motion.div variants={itemVariants} className={`p-6 rounded-xl shadow-2xl text-white ${color}`}>
        <div className="flex items-center gap-4">
            <Icon className="w-10 h-10" />
            <div>
                {value && <span className="text-5xl font-extrabold"><CountUp end={value} duration={3} />{suffix}</span>}
                <h4 className="text-xl font-bold">{title}</h4>
            </div>
        </div>
        <ul className="mt-4 list-disc list-inside space-y-1">
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    </motion.div>
);

const BeforeAfterCard = ({ before, after }) => (
    <div className="space-y-2">
        <p className="flex items-center gap-2"><span className="text-red-500 font-bold">Old:</span> {before}</p>
        <p className="flex items-center gap-2"><span className="text-green-500 font-bold">New:</span> {after}</p>
    </div>
);

const StrategyAndImpact = () => {
    return (
        <div className="p-8 md:p-12 bg-slate-50">
            <motion.header 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold animated-gradient-text">Strategy & Impact</h2>
                <p className="text-slate-600 max-w-3xl mx-auto mt-4 text-xl">
                    Beyond the technology, here’s our blueprint for creating a viable, scalable, and impactful agri-ecosystem.
                </p>
            </motion.header>

            <motion.div
                variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
                className="space-y-20 max-w-7xl mx-auto"
            >
                {/* --- Section 1: Innovation & USP --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Innovation & Unique Selling Proposition</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <USP_Card icon={Zap} title="Tiered Query Support" description="A unique 3-level support system (AI Bot, Peer-to-Peer Community, and Officer Escalation) ensures every farmer gets a fast, trusted, and verified answer." />
                        <USP_Card icon={Award} title="Gamified Sustainability" description="Using missions, badges, and leaderboards to actively engage and educate farmers on sustainable practices." />
                        <USP_Card icon={Lightbulb} title="Integrated Data Fusion" description="Uniquely fuses multiple data sources (farmer inputs, satellite, weather, soil) for truly holistic and hyper-personalized advice." />
                        <USP_Card icon={SlidersHorizontal} title="Proactive & Predictive" description="Shifting farming from guesswork to strategy by providing proactive alerts for weather risks, pest outbreaks, and optimal selling times." />
                        <USP_Card icon={ShieldCheck} title="Trust via Technology" description="Building trust with blockchain-verified supply chain data for consumers and officer-verified advice for farmers." />
                        <USP_Card icon={Users} title="Built for Bharat" description="An offline-first, multilingual mobile app and a smart dashboard designed for the real-world connectivity and usability needs of rural India." />
                    </div>
                </motion.section>

                {/* --- Section 2: Business Model --- */}
                <motion.section variants={itemVariants}>
                     <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Business Model Canvas</h3>
                     <div className="grid md:grid-cols-3 gap-6">
                        <USP_Card icon={Target} title="Target Audience" description="Primarily small and marginal farmers, with dedicated dashboards for FPOs and Government Agricultural Departments." />
                        <USP_Card icon={DollarSign} title="Revenue Streams" description="A hybrid model including B2G licensing for the officer dashboard, B2B fees for supply chain data, and a freemium model for farmers." />
                        <USP_Card icon={Users} title="Value Proposition" description="Empowering farmers to shift from reactive guesswork to proactive, data-driven decisions that boost income and ensure sustainability." />
                     </div>
                </motion.section>

                {/* --- Section 3: Go-to-Market & Scalability --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Scalability & Go-to-Market Plan</h3>
                    <div className="relative flex flex-col md:flex-row justify-between items-center w-full">
                        <div className="absolute top-8 left-0 w-full h-1 bg-indigo-200 hidden md:block"></div>
                        <div className="flex flex-col md:flex-row w-full justify-between z-10 space-y-8 md:space-y-0">
                            <div className="text-center w-full md:w-1/3 px-4"><div className="p-4 bg-indigo-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-2xl border-4 border-white shadow-lg">1</div><h4 className="font-bold text-lg mt-3">Pilot Launch (Year 1)</h4><p className="text-sm text-slate-600">Deploy in target districts, partner with a local FPO, and onboard the first 1,000 farmers to refine AI models.</p></div>
                            <div className="text-center w-full md:w-1/3 px-4"><div className="p-4 bg-indigo-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-2xl border-4 border-white shadow-lg">2</div><h4 className="font-bold text-lg mt-3">State-Level Partnership</h4><p className="text-sm text-slate-600">Integrate with a state government's agricultural services, scaling the platform to cover all major crops and districts.</p></div>
                            <div className="text-center w-full md:w-1/3 px-4"><div className="p-4 bg-indigo-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-2xl border-4 border-white shadow-lg">3</div><h4 className="font-bold text-lg mt-3">National Rollout</h4><p className="text-sm text-slate-600">Expand across multiple states, leveraging network effects to enhance AI accuracy and onboard supply chain partners.</p></div>
                        </div>
                    </div>
                </motion.section>

                {/* --- Section 4: Impact Assessment (EXPANDED) --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Impact Assessment</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ImpactStatCard icon={TrendingUp} value={25} suffix="-40%" title="Economic Impact" items={["Boost farmer income", "Cut crop losses", "Ensure fair market prices"]} color="bg-green-600" />
                        <ImpactStatCard icon={HeartHandshake} title="Social Impact" items={["Empowers lakhs of small farmers", "Reduces distress & rural migration", "Builds a connected, knowledgeable community"]} color="bg-rose-500" />
                        <ImpactStatCard icon={Leaf} value={20} suffix="-30%" title="Environmental Impact" items={["Significantly reduce water usage", "Optimize fertilizer use by 25%", "Promote crop diversity & soil health"]} color="bg-sky-600" />
                        <ImpactStatCard icon={Globe} value={3} suffix=" UN SDGs" title="National Impact" items={["Strengthens India's AgriStack", "Supports key UN SDGs", "Positions India as a global leader"]} color="bg-blue-600" />
                    </div>
                </motion.section>
                
                {/* --- NEW SECTION: Before vs. After --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Krishi Mitra: The Paradigm Shift</h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-lg border">
                             <h4 className="font-bold text-lg text-slate-800 mb-3">Farming Decisions</h4>
                             <BeforeAfterCard before="Guesswork & traditional methods" after="AI-guided precision farming" />
                        </div>
                         <div className="bg-white p-6 rounded-xl shadow-lg border">
                             <h4 className="font-bold text-lg text-slate-800 mb-3">Market & Sales</h4>
                             <BeforeAfterCard before="Crop losses & unfair prices" after="Predictive alerts & blockchain-verified trade" />
                        </div>
                         <div className="bg-white p-6 rounded-xl shadow-lg border">
                             <h4 className="font-bold text-lg text-slate-800 mb-3">Resource Management</h4>
                             <BeforeAfterCard before="Overuse of water & fertilizers" after="Smart, sustainable, and optimized input use" />
                        </div>
                    </div>
                </motion.section>

            </motion.div>
        </div>
    );
};

export default StrategyAndImpact;