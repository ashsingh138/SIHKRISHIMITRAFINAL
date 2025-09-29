import React, { useState } from 'react';

// Import the separated components and data
import FeatureCard from '../components/implementation/FeatureCard';
import Modal from '../components/implementation/Modal';
import { implementationData } from '../data/ImplementationData';
import Icon from '../components/Icon'; // Import the Icon component

const ImplementationTab = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="p-8 md:p-12 bg-slate-50 animate-fade-in-up">
      {/* === UPDATED HEADER SECTION START === */}
      <header className="text-center">
        <h2 className="text-4xl font-bold animated-gradient-text">Technical Implementation</h2>
        <p className="text-slate-600 max-w-3xl mx-auto mt-4 mb-8">
          Our solution is built on a robust, scalable, and modern tech stack. Below is an interactive overview of our core components.
        </p>
        
        {/* New Animated Call-to-Action */}
        <div 
          className="inline-flex items-center gap-3 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full border-2 border-indigo-200 mb-16 shadow-sm call-to-action-pulse"
        >
          <Icon name="mouse-pointer-click" className="w-5 h-5" />
          <span>Click on a card for a detailed breakdown</span>
        </div>
      </header>
      {/* === UPDATED HEADER SECTION END === */}
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {implementationData.map(feature => (
          <FeatureCard 
            key={feature.id} 
            feature={feature} 
            onSelect={setSelectedFeature} 
          />
        ))}
      </div>

      <Modal 
        feature={selectedFeature} 
        onClose={() => setSelectedFeature(null)} 
      />
    </div>
  );
};

export default ImplementationTab;