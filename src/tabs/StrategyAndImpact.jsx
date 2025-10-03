// src/tabs/StrategyAndImpact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { 
    Lightbulb, Users, ShieldCheck, TrendingUp, DollarSign, Globe, Leaf, Zap, Award, 
    Target, SlidersHorizontal, HeartHandshake, ArrowRight, AlertTriangle, Building2, 
    Landmark, Handshake, BookCheck, BookOpen, CloudLightning
} from 'lucide-react';

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

const RiskCard = ({ icon: Icon, risk, mitigation, color }) => (
    <motion.div variants={itemVariants} className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color.border}`}>
        <div className="flex items-center gap-3 mb-2">
            <Icon className={`w-6 h-6 ${color.text}`} />
            <h4 className="font-semibold text-lg text-slate-800">{risk}</h4>
        </div>
        <p className="text-sm text-slate-600 pl-9"><span className="font-bold">Mitigation:</span> {mitigation}</p>
    </motion.div>
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
                {/* --- Innovation & USP --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Innovation & Unique Selling Proposition</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <USP_Card icon={Zap} title="Tiered Query Support" description="3-level support: AI Bot, Peer Community, Officer Escalation — every farmer gets trusted answers." />
                        <USP_Card icon={Award} title="Gamified Sustainability" description="Missions, badges, and leaderboards to engage farmers in sustainable practices." />
                        <USP_Card icon={Lightbulb} title="Integrated Data Fusion" description="Merges farmer inputs, satellite, weather, and soil data for hyper-personalized advice." />
                        <USP_Card icon={SlidersHorizontal} title="Proactive & Predictive" description="Alerts for weather risks, pest outbreaks, and optimal selling times." />
                        <USP_Card icon={ShieldCheck} title="Trust via Technology" description="Blockchain-verified supply chain + officer-verified advisories for full transparency." />
                        <USP_Card icon={Users} title="Built for Bharat" description="Offline-first, multilingual mobile app + smart dashboard for rural usability." />
                    </div>
                </motion.section>

                {/* --- Business Model --- */}
                <motion.section variants={itemVariants}>
                     <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Business Model Canvas</h3>
                     <div className="grid md:grid-cols-3 gap-6">
                        <USP_Card icon={Target} title="Target Audience" description="Small & marginal farmers, FPOs, and Government Agriculture Departments." />
                        <USP_Card icon={DollarSign} title="Revenue Streams" description="B2G licensing, B2B supply chain fees, and freemium farmer access." />
                        <USP_Card icon={Users} title="Value Proposition" description="Empowering farmers with proactive, data-driven, income-boosting decisions." />
                     </div>
                </motion.section>

                {/* --- Go-to-Market --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Scalability & Go-to-Market Plan</h3>
                    <div className="relative flex flex-col md:flex-row justify-between items-center w-full">
                        <div className="absolute top-8 left-0 w-full h-1 bg-indigo-200 hidden md:block"></div>
                        <div className="flex flex-col md:flex-row w-full justify-between z-10 space-y-8 md:space-y-0">
                            <div className="text-center w-full md:w-1/3 px-4">
                                <div className="p-4 bg-indigo-500 text-white rounded-full w-16 h-16 mx-auto font-bold text-2xl border-4 border-white shadow-lg">1</div>
                                <h4 className="font-bold text-lg mt-3">Pilot Launch (Year 1)</h4>
                                <p className="text-sm text-slate-600">Deploy in select districts, partner with FPOs, onboard first 1,000 farmers.</p>
                            </div>
                            <div className="text-center w-full md:w-1/3 px-4">
                                <div className="p-4 bg-indigo-500 text-white rounded-full w-16 h-16 mx-auto font-bold text-2xl border-4 border-white shadow-lg">2</div>
                                <h4 className="font-bold text-lg mt-3">State-Level Partnership</h4>
                                <p className="text-sm text-slate-600">Integrate with a state’s agri services, covering all major crops/districts.</p>
                            </div>
                            <div className="text-center w-full md:w-1/3 px-4">
                                <div className="p-4 bg-indigo-500 text-white rounded-full w-16 h-16 mx-auto font-bold text-2xl border-4 border-white shadow-lg">3</div>
                                <h4 className="font-bold text-lg mt-3">National Rollout</h4>
                                <p className="text-sm text-slate-600">Expand across states, enhance AI with network effects, onboard supply chain partners.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* --- Impact Assessment --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Impact Assessment</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ImpactStatCard icon={TrendingUp} value={25} suffix="-40%" title="Economic Impact" items={["Boost farmer income", "Cut crop losses", "Ensure fair prices"]} color="bg-green-600" />
                        <ImpactStatCard icon={HeartHandshake} title="Social Impact" items={["Empowers lakhs of small farmers", "Reduces rural distress", "Builds strong communities"]} color="bg-rose-500" />
                        <ImpactStatCard icon={Leaf} value={20} suffix="-30%" title="Environmental Impact" items={["Reduce water use", "Optimize fertilizer by 25%", "Promote soil health"]} color="bg-sky-600" />
                        <ImpactStatCard icon={Globe} value={3} suffix=" UN SDGs" title="National Impact" items={["Strengthens AgriStack", "Supports UN SDGs", "Global leadership in agri-tech"]} color="bg-blue-600" />
                        <ImpactStatCard 
      icon={ShieldCheck} 
      title="Technological Impact" 
      items={[
        "Accelerates AI adoption in rural India",
        "Blockchain builds transparency & trust",
        "Bridges digital divide with multilingual access"
      ]} 
      color="bg-indigo-600" 
    /> <ImpactStatCard 
      icon={Users} 
      title="Farmer Wellbeing" 
      items={[
        "Reduces financial stress & uncertainty",
        "Improves decision confidence",
        "Enhances dignity & social recognition"
      ]} 
      color="bg-amber-600" 
    /><ImpactStatCard 
      icon={Lightbulb} 
      title="Policy Impact" 
      items={[
        "Data-driven policy formulation",
        "Supports govt. crop insurance schemes",
        "Improves subsidy targeting"
      ]} 
      color="bg-purple-600" 
    /><ImpactStatCard 
      icon={BookOpen} 
      title="Educational Impact" 
      items={[
        "Farmer digital literacy training",
        "Empowers youth with agri-tech skills",
        "Builds knowledge for next-gen farmers"
      ]} 
      color="bg-teal-600" 
    />
                    </div>
                </motion.section>

                {/* --- Paradigm Shift --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Krishi Mitra: The Paradigm Shift</h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-lg border">
                             <h4 className="font-bold text-lg text-slate-800 mb-3">Farming Decisions</h4>
                             <BeforeAfterCard before="Guesswork & tradition" after="AI-guided precision farming" />
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border">
                             <h4 className="font-bold text-lg text-slate-800 mb-3">Market & Sales</h4>
                             <BeforeAfterCard before="Losses & unfair prices" after="Predictive pricing & blockchain trade" />
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border">
                             <h4 className="font-bold text-lg text-slate-800 mb-3">Resource Management</h4>
                             <BeforeAfterCard before="Overuse of water/fertilizers" after="Smart, sustainable inputs" />
                        </div>
                    </div>
                </motion.section>

                {/* --- NEW: Risk & Mitigation --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Risk & Mitigation Strategy</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <RiskCard icon={AlertTriangle} risk="Low Farmer Adoption" mitigation="Partner with FPOs & offer gamified onboarding incentives." color={{ border: 'border-red-500', text: 'text-red-500' }} />
                        <RiskCard icon={Globe} risk="Climate Extremes" mitigation="Diversify advisories, integrate insurance, promote resilient crop choices." color={{ border: 'border-blue-500', text: 'text-blue-500' }} />
                        <RiskCard icon={ShieldCheck} risk="Data Privacy Concerns" mitigation="Use blockchain + anonymized datasets to protect farmers' identities." color={{ border: 'border-green-500', text: 'text-green-500' }} />
                        <RiskCard icon={DollarSign} risk="Financial Sustainability" mitigation="Hybrid revenue model ensures recurring B2G, B2B, and freemium farmer streams." color={{ border: 'border-amber-500', text: 'text-amber-500' }} />
                        <RiskCard icon={Users} risk="Digital Divide" mitigation="Offline-first app, voice commands, and regional language support." color={{ border: 'border-purple-500', text: 'text-purple-500' }} />
                         <RiskCard icon={CloudLightning} risk="Climate Uncertainty" mitigation="Use AI-driven climate modeling, adaptive cropping patterns, and early warning systems to minimize losses." color={{ border: 'border-orange-500', text: 'text-orange-500' }} />
                    </div>
                </motion.section>

                {/* --- NEW: Partnerships --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Partnership Ecosystem</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div className="bg-white p-6 rounded-xl shadow-lg border"><Landmark className="mx-auto w-10 h-10 text-green-600 mb-2"/><h4 className="font-semibold">Government</h4><p className="text-sm text-slate-500">Integration with AgriStack, Soil Health Mission, Fasal Bima Yojana.</p></div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border"><Building2 className="mx-auto w-10 h-10 text-blue-600 mb-2"/><h4 className="font-semibold">Private Sector</h4><p className="text-sm text-slate-500">Agri-tech startups, FMCG supply chains, precision farming companies.</p></div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border"><Handshake className="mx-auto w-10 h-10 text-orange-600 mb-2"/><h4 className="font-semibold">NGOs & FPOs</h4><p className="text-sm text-slate-500">Grassroots adoption, capacity building, women farmer collectives.</p></div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border"><BookCheck className="mx-auto w-10 h-10 text-indigo-600 mb-2"/><h4 className="font-semibold">Academia</h4><p className="text-sm text-slate-500">Collaboration with IITs & ICAR for R&D, trials, and AI validation.</p></div>
                    </div>
                </motion.section>

                {/* --- NEW: Policy Alignment --- */}
                <motion.section variants={itemVariants}>
                    <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Policy Alignment & SDG Mapping</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg border">
                            <h4 className="font-bold text-lg text-slate-800 mb-3">Indian Policy Alignment</h4>
                            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                <li>Digital Agriculture Mission 2021–25</li>
                                <li>National Mission on Sustainable Agriculture</li>
                                <li>Soil Health Card & PM-KUSUM schemes</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border">
                            <h4 className="font-bold text-lg text-slate-800 mb-3">UN SDGs Supported</h4>
                            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                <li>SDG 2: Zero Hunger</li>
                                <li>SDG 12: Responsible Consumption</li>
                                <li>SDG 13: Climate Action</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border">
                            <h4 className="font-bold text-lg text-slate-800 mb-3">Long-Term Vision</h4>
                            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                <li>Enable carbon credit trading for farmers</li>
                                <li>Global agri-trade intelligence</li>
                                <li>India as a climate-smart agri leader</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default StrategyAndImpact;
