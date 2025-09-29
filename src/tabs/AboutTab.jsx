// src/tabs/AboutTab.jsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// Import components and data from their new locations
import Icon from '../components/Icon';
import StatCard from '../components/about/StatCard';
import StoryCard from '../components/about/StoryCard';
import { farmerStories, yieldLossData } from '../components/about/data';

const AboutTab = ({ onNavigate, TABS }) => {
  return (
    <div className="bg-white p-8 md:p-12 animate-page-enter">
      <div className="max-w-6xl mx-auto">
        {/* Section 1: The Challenge */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animated-gradient-text">The Soil and the Struggle</h1>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Indian agriculture is the backbone of our nation, yet it stands at a critical crossroads, facing challenges that hinder the potential of millions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12 stagger-in">
            {/* You can add back prefixes like '~' or '>' and the StatCard will handle it correctly */}
            <StatCard value="86%" description="of farmers are small or marginal, often lacking access to modern technology." style={{ '--stagger-index': 1 }} />
            <StatCard value="~15%" description="contribution to GDP, a figure that belies its importance to over half our population." style={{ '--stagger-index': 2 }} />
            <StatCard value=">30%" description="of crop yield is lost annually to pests and diseases due to delayed response." style={{ '--stagger-index': 3 }} />
          </div>
        </section>

        {/* Section 2: Backed By Reality */}
        <section className="my-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animated-gradient-text">Backed By Reality</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://timesofindia.indiatimes.com/city/pune/heavy-rain-damages-273-hectares-of-crops-in-district/articleshow/124077876.cms" target="_blank" rel="noreferrer"
               className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src="/images/floods.jpg" alt="Flood impact" className="rounded-lg mb-4 w-full h-40 object-cover"/>
              <p className="text-slate-700">Heavy rain damages 273 hectares of crops  — <span className="font-bold">The Times of India</span></p>
            </a>
            <a href="https://share.google/RQAVescoDvP6IYWrB" target="_blank" rel="noreferrer"
               className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src="/images/pests.jpeg" alt="Pests" className="rounded-lg mb-4 w-full h-40 object-cover"/>
              <p className="text-slate-700">In a warmer, wetter world, pests are multiplying faster and damaging crops severel— <span className="font-bold">DownToEarth</span></p>
            </a>
            <a href="https://www.impriindia.com/insights/the-plight-of-small-farmers-in-india/" target="_blank" rel="noreferrer"
               className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src="/images/market.jpeg" alt="Market prices" className="rounded-lg mb-4 w-full h-40 object-cover"/>
              <p className="text-slate-700">Farmers’ income disparity continues to be a major challenge — <span className="font-bold">impriindia</span></p>
            </a>
          </div>
        </section>
        
        {/* Section 3: The Numbers Speak */}
        <section className="my-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animated-gradient-text">The Numbers Speak</h1>
          <p className="text-center text-slate-600 mb-12">The trend of yield loss due to preventable causes is on the rise.</p>
          <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-lg border">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yieldLossData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Yield Loss (%)" stroke="#22c55e" strokeWidth={3} activeDot={{ r: 8 }}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Section 4: Voices from the Field */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animated-gradient-text">Voices From The Field</h1>
          <div className="grid md:grid-cols-2 gap-8 stagger-in">
            {farmerStories.map((story, index) => (
              <StoryCard key={index} {...story} style={{ '--stagger-index': index + 1 }} />
            ))}
          </div>
        </section>

        {/* Section 5: Our Solution Intro */}
        <section className="text-center bg-slate-50 p-12 rounded-lg">
          <Icon name="sprout" className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Solution: Krishi Mitra</h1>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8">
            Krishi Mitra is an AI-powered digital companion designed to bridge these gaps...
          </p>
          <button onClick={() => onNavigate(TABS.SOLUTION)} className="cta-button">
            See The Full Solution
            <Icon name="arrow-right" className="w-6 h-6" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutTab;