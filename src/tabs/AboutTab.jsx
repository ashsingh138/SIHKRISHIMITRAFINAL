// src/tabs/AboutTab.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { BookOpen, AlertTriangle, TrendingDown, Wifi, ArrowRight, Droplet, CloudRain, Users, Factory } from 'lucide-react';
import Icon from '../components/Icon';
import StatCard from '../components/about/StatCard';
import StoryCard from '../components/about/StoryCard';
import { farmerStories, yieldLossData } from '../components/about/data';

// --- Reusable Problem Card ---
const ProblemCard = ({ icon: Icon, title, description, color }) => (
  <motion.div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color.border}`}>
    <div className="flex items-start gap-4">
      <Icon className={`w-8 h-8 flex-shrink-0 ${color.text}`} />
      <div>
        <h4 className="font-bold text-lg text-slate-800">{title}</h4>
        <p className="text-slate-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  </motion.div>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutTab = ({ onNavigate, TABS }) => {
  return (
    <div className="bg-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Section 1: Intro */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animated-gradient-text">
            The Soil and the Struggle
          </h1>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Indian agriculture is the backbone of our nation, yet it stands at a critical crossroads, 
            facing challenges that hinder the potential of millions.
          </p>
        </motion.section>

        {/* Section 2: Key Stats */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}><StatCard value="86%" description="of farmers are small or marginal, often lacking access to modern technology." /></motion.div>
            <motion.div variants={itemVariants}><StatCard value="~15%" description="contribution to GDP, despite employing nearly half of India’s workforce." /></motion.div>
            <motion.div variants={itemVariants}><StatCard value=">30%" description="of crop yield lost annually due to pests, diseases, and delayed interventions." /></motion.div>
            <motion.div variants={itemVariants}><StatCard value="70%" description="of farmland depends on monsoon rains, leaving farmers highly vulnerable to droughts." /></motion.div>
            <motion.div variants={itemVariants}><StatCard value="50%" description="of India’s soil is degraded, directly reducing fertility and productivity." /></motion.div>
            <motion.div variants={itemVariants}><StatCard value="$12B+" description="lost annually due to post-harvest inefficiencies and weak market linkages." /></motion.div>
            <motion.div variants={itemVariants}><StatCard value="200,000+" description="farmer suicides in the last two decades reflect systemic agrarian distress." /></motion.div>
            <motion.div variants={itemVariants}><StatCard value="60%" description="of farmers lack real-time market price information, reducing profitability." /></motion.div>
            <motion.div variants={itemVariants}><StatCard value="40%" description="of groundwater is over-exploited, threatening irrigation sustainability." /></motion.div>
          </div>
        </motion.section>

        {/* Section 3: Core Problems */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-slate-800">
            A Deeper Look at the Core Problems
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}><ProblemCard icon={BookOpen} title="The Information Gap" description="Over 57% of Indian farmers lack access to scientific advice, relying on outdated practices." color={{ border: 'border-blue-500', text: 'text-blue-500' }} /></motion.div>
            <motion.div variants={itemVariants}><ProblemCard icon={TrendingDown} title="Market Inefficiency" description="Farmers lose up to 35% of potential income due to unstable markets and poor price discovery." color={{ border: 'border-green-500', text: 'text-green-500' }} /></motion.div>
            <motion.div variants={itemVariants}><ProblemCard icon={AlertTriangle} title="Pest & Climate Shocks" description="Pests, floods, and heatwaves together account for ~30% of annual crop losses." color={{ border: 'border-red-500', text: 'text-red-500' }} /></motion.div>
            <motion.div variants={itemVariants}><ProblemCard icon={Wifi} title="The Digital Divide" description="Despite growing smartphone access, most agri apps fail to provide actionable local intelligence." color={{ border: 'border-purple-500', text: 'text-purple-500' }} /></motion.div>
            <motion.div variants={itemVariants}><ProblemCard icon={Droplet} title="Water Stress" description="40% of India’s groundwater blocks are over-exploited, making irrigation unsustainable." color={{ border: 'border-cyan-500', text: 'text-cyan-500' }} /></motion.div>
            <motion.div variants={itemVariants}><ProblemCard icon={Users} title="Smallholder Pressure" description="86% of farmers operate on less than 2 hectares, limiting mechanization and productivity." color={{ border: 'border-orange-500', text: 'text-orange-500' }} /></motion.div>
            <motion.div variants={itemVariants}><ProblemCard icon={Factory} title="Post-Harvest Losses" description="India wastes nearly 15-20% of produce post-harvest due to storage and transport inefficiencies." color={{ border: 'border-gray-500', text: 'text-gray-500' }} /></motion.div>
            <motion.div variants={itemVariants}><ProblemCard icon={CloudRain} title="Extreme Weather" description="Unseasonal rains and droughts have doubled in frequency in the last 50 years." color={{ border: 'border-indigo-500', text: 'text-indigo-500' }} /></motion.div>
          </div>
        </motion.section>

        {/* Section 4: Backed By Reality */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animated-gradient-text">Backed By Reality</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://timesofindia.indiatimes.com/city/pune/heavy-rain-damages-273-hectares-of-crops-in-district/articleshow/124077876.cms" target="_blank" rel="noreferrer"
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src="/images/floods.jpg" alt="Flood impact" className="rounded-lg mb-4 w-full h-40 object-cover"/>
              <p className="text-slate-700">Heavy rain damages 273 hectares of crops — <span className="font-bold">The Times of India</span></p>
            </a>
            <a href="https://www.downtoearth.org.in/" target="_blank" rel="noreferrer"
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src="/images/pests.jpeg" alt="Pests" className="rounded-lg mb-4 w-full h-40 object-cover"/>
              <p className="text-slate-700">Pests multiplying faster in a warming world — <span className="font-bold">DownToEarth</span></p>
            </a>
            <a href="https://www.impriindia.com/insights/the-plight-of-small-farmers-in-india/" target="_blank" rel="noreferrer"
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src="/images/market.jpeg" alt="Market prices" className="rounded-lg mb-4 w-full h-40 object-cover"/>
              <p className="text-slate-700">The plight of small farmers & income disparity — <span className="font-bold">IMPRI</span></p>
            </a>
          </div>
        </motion.section>

        {/* Section 5: Extra Charts */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animated-gradient-text">The Data Doesn’t Lie</h2>
          <p className="text-center text-slate-600 mb-12">Hard numbers reflect the urgent need for change in India’s agri ecosystem.</p>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Rainfall vs Yield */}
            <div className="bg-white rounded-lg p-4 shadow border">
              <h3 className="text-lg font-bold text-slate-700 mb-2">Rainfall Anomalies & Crop Yield</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={[
                  { year: 2015, Rainfall: -20, Yield: -8 },
                  { year: 2016, Rainfall: 5, Yield: 2 },
                  { year: 2017, Rainfall: -10, Yield: -4 },
                  { year: 2018, Rainfall: 15, Yield: 6 },
                  { year: 2019, Rainfall: -25, Yield: -12 },
                  { year: 2020, Rainfall: 8, Yield: 3 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="Rainfall" stroke="#3b82f6" />
                  <Line type="monotone" dataKey="Yield" stroke="#22c55e" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Farmer Income Disparity */}
            <div className="bg-white rounded-lg p-4 shadow border">
              <h3 className="text-lg font-bold text-slate-700 mb-2">Farmer vs Non-Farm Income</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={[
                  { year: 2000, Farmers: 3000, NonFarm: 7000 },
                  { year: 2010, Farmers: 6000, NonFarm: 15000 },
                  { year: 2020, Farmers: 8000, NonFarm: 25000 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="Farmers" stroke="#16a34a" />
                  <Line type="monotone" dataKey="NonFarm" stroke="#f97316" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Groundwater Stress */}
            <div className="bg-white rounded-lg p-4 shadow border">
              <h3 className="text-lg font-bold text-slate-700 mb-2">Groundwater Stress Index</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={[
                  { year: 2000, Stress: 40 },
                  { year: 2005, Stress: 55 },
                  { year: 2010, Stress: 65 },
                  { year: 2015, Stress: 72 },
                  { year: 2020, Stress: 85 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="Stress" stroke="#dc2626" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Voices from the Field */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animated-gradient-text">
            Voices From The Field
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <StoryCard name="Ramesh, Maharashtra" quote="Last year’s unseasonal rains destroyed my onion crop. I had no way of knowing in advance." source="IMD case study, 2022" />
            <StoryCard name="Sita, Bihar" quote="I spend more on fertilizer every year, but my soil is getting weaker." source="Soil Health Card Mission Report, 2021" />
            <StoryCard name="Arjun, Punjab" quote="I sold my wheat at half the price because I didn’t know the mandi rates in nearby towns." source="Agmarknet, 2020" />
            <StoryCard name="Meena, Telangana" quote="Pests destroyed my cotton crop in just a week — advice came too late." source="NABARD farmer survey, 2021" />
            {farmerStories.map((story) => (
              <StoryCard key={story.name} {...story} />
            ))}
          </div>
        </motion.section>

        {/* Section 7: Yield Loss Trend */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animated-gradient-text">
            A Worsening Trend
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Yield losses from climate shocks and preventable causes are rising year after year.
          </p>
          <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-lg border">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yieldLossData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Yield Loss (%)" stroke="#ef4444" strokeWidth={3} activeDot={{ r: 8 }}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        {/* Section 8: Solution */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center bg-slate-100 p-12 rounded-2xl"
        >
          <Icon name="sprout" className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solution: Krishi Mitra</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8">
            Krishi Mitra is a holistic agri-ecosystem that shifts farming from reactive guesswork 
            to proactive, data-driven decisions, boosting income and sustainability for every farmer.
          </p>
          <button onClick={() => onNavigate(TABS.SOLUTION)} className="cta-button">
            Explore The Full Solution
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.section>

      </div>
    </div>
  );
};

export default AboutTab;
