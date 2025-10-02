import React from 'react';
import { motion } from 'framer-motion';
import {
    HeartHandshake, Tractor, CloudLightning, LineChart, MessageSquareText, Globe,
    Leaf, DollarSign, Users, ShieldCheck, Zap, Lightbulb
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 10, stiffness: 100 } }
};

const QuoteCard = ({ quote, author }) => (
    <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-500 to-emerald-700 text-white p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden">
        <Tractor className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 rotate-12" />
        <p className="text-2xl md:text-3xl font-serif italic leading-relaxed relative z-10">"{quote}"</p>
        <p className="mt-6 text-lg font-semibold text-right relative z-10">- {author}</p>
    </motion.div>
);

// --- UPDATED: Redesigned ImpactStoryCard ---
const ImpactStoryCard = ({ icon: Icon, title, before, after, colorClass }) => (
    <motion.div variants={itemVariants} className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${colorClass} h-full flex flex-col text-left`}>
        <div className="flex items-center gap-3 mb-4">
            <Icon className="w-8 h-8 text-slate-700 flex-shrink-0" />
            <h4 className="font-bold text-xl text-slate-800">{title}</h4>
        </div>
        <div className="space-y-3 text-sm flex-grow">
            <div>
                <p className="font-semibold text-red-600 uppercase tracking-wide">Before</p>
                <p className="text-slate-600">{before}</p>
            </div>
            <div className="w-full h-px bg-slate-200"></div>
            <div>
                <p className="font-semibold text-green-600 uppercase tracking-wide">After</p>
                <p className="text-slate-600">{after}</p>
            </div>
        </div>
    </motion.div>
);

const KrishiPillarCard = ({ icon: Icon, title, description }) => (
    <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg border h-full flex flex-col">
        <Icon className="w-10 h-10 text-indigo-600 mb-4" />
        <h4 className="font-bold text-xl text-slate-800 mb-2">{title}</h4>
        <p className="text-slate-600 text-sm flex-grow">{description}</p>
    </motion.div>
);

// --- NEW: Data for the transformation stories ---
const transformationStories = [
    { icon: CloudLightning, title: "Weather Resilience", before: "Unexpected storms or droughts led to total crop loss and despair.", after: "Proactive, hyper-local weather alerts enable preventative action, saving livelihoods.", colorClass: "border-blue-500" },
    { icon: Zap, title: "Pest Management", before: "Identifying pests too late, leading to widespread damage and heavy pesticide use.", after: "AI-driven early detection and precise, sustainable treatment plans minimize losses.", colorClass: "border-red-500" },
    { icon: DollarSign, title: "Market Fairness", before: "Vulnerability to middlemen and price manipulation, losing hard-earned profits.", after: "Transparent pricing, direct market access, and blockchain-verified trade ensure fair returns.", colorClass: "border-green-500" },
    { icon: Leaf, title: "Sustainable Growth", before: "Traditional practices sometimes harmed soil or overused resources.", after: "Gamified advisories and data-driven insights promote eco-friendly and resource-efficient farming.", colorClass: "border-yellow-500" },
    { icon: MessageSquareText, title: "Knowledge Empowerment", before: "Isolation and lack of expert advice, leading to uninformed decisions.", after: "A multi-tiered support system (AI, community, officers) ensures every query gets a trusted answer.", colorClass: "border-purple-500" },
    { icon: HeartHandshake, title: "Community & Trust", before: "Fragmented information and distrust among stakeholders.", after: "A vibrant community platform and transparent systems foster collaboration and confidence.", colorClass: "border-pink-500" },
    { icon: LineChart, title: "Economic Prosperity", before: "Unpredictable income and constant financial stress.", after: "Optimized yields and reduced costs lead to significant and stable income growth.", colorClass: "border-teal-500" },
    { icon: Globe, title: "National Contribution", before: "A sector struggling with inefficiency and a large carbon footprint.", after: "A stronger AgriStack that boosts food security and promotes climate-smart agriculture.", colorClass: "border-orange-500" },
];


const ExecutiveSummary = () => {
    return (
        <div className="bg-slate-50 text-slate-800">
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-8 text-center overflow-hidden">
                <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Krishi Mitra: Cultivating Tomorrow</h1>
                    <p className="text-xl md:text-2xl font-light opacity-90">Transforming the landscape of Indian agriculture, one farmer at a time.</p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-20 space-y-20">
                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <QuoteCard quote="The ultimate test of a moral society is the kind of world that it leaves to its children." author="Dietrich Bonhoeffer" />
                    <motion.p variants={itemVariants} className="mt-8 text-center text-lg max-w-3xl mx-auto text-slate-700">At Krishi Mitra, we believe this sentiment deeply resonates with the future of our food, our farmers, and our nation.</motion.p>
                </motion.section>

                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                    <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-4 text-slate-800">The Silent Struggle of Our Farmers</motion.h3>
                    <motion.p variants={itemVariants} className="text-lg max-w-4xl mx-auto text-slate-700">Millions of farmers battle daily against unpredictable weather, devastating pests, and opaque markets. This isn't just about lost crops; it's about lost livelihoods, shattered dreams, and a food system under strain.</motion.p>
                    <motion.p variants={itemVariants} className="mt-6 text-xl font-semibold text-green-700">Krishi Mitra rises to meet this challenge, empowering them with knowledge, resilience, and prosperity.</motion.p>
                </motion.section>

                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-slate-800">Stories of Transformation</motion.h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {transformationStories.map((story) => (
                            <ImpactStoryCard key={story.title} {...story} />
                        ))}
                    </div>
                </motion.section>

                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-slate-800">The Pillars of Krishi Mitra</motion.h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <KrishiPillarCard icon={Lightbulb} title="Intelligent & Adaptive AI" description="Our AI processes real-time data from satellites, weather forecasts, and farmer inputs to deliver hyper-personalized and proactive advisories." />
                        <KrishiPillarCard icon={Users} title="Empowering the Farmer" description="Designed for 'Bharat,' our multilingual, offline-first app with voice commands bridges the digital divide, making complex technology accessible to all." />
                        <KrishiPillarCard icon={ShieldCheck} title="Building an Ecosystem of Trust" description="From officer-verified advice to a blockchain-powered supply chain, Krishi Mitra builds unbreakable trust across the agricultural value chain." />
                    </div>
                </motion.section>

                <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                    <motion.div variants={itemVariants} className="mb-12">
                         <QuoteCard 
                            quote="Jai Jawan, Jai Kisan (Hail the Soldier, Hail the Farmer)" 
                            author="Lal Bahadur Shastri, 2nd Prime Minister of India"
                            colorClass="from-orange-500 to-amber-600"
                         />
                    </motion.div>
                    <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-4 text-slate-800">Our Enduring Vision</motion.h3>
                    <motion.p variants={itemVariants} className="text-xl max-w-4xl mx-auto text-slate-700">Krishi Mitra envisions an India where every farmer is empowered, every yield is maximized sustainably, and every harvest brings prosperity. We are not just building an app; we are cultivating a future where technology serves humanity.</motion.p>
                    <motion.p variants={itemVariants} className="mt-6 text-2xl font-bold text-indigo-700">Join us in this journey to redefine agriculture for a brighter, more sustainable tomorrow.</motion.p>
                </motion.section>
            </div>
        </div>
    );
};

export default ExecutiveSummary;