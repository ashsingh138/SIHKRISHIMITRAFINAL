import React from 'react';
import Icon from '../Icon';

const FeatureCard = ({ feature, onSelect }) => {
  return (
    <button 
      onClick={() => onSelect(feature)} 
      className="bg-white p-6 rounded-xl shadow-md border border-slate-200/80 text-left
                 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-400 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-indigo-100 p-3 rounded-full">
          <Icon name={feature.icon} className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
      </div>
      <p className="text-slate-600">{feature.description}</p>
    </button>
  );
};

export default FeatureCard;