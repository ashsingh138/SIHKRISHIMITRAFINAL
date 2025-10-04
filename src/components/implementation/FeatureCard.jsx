import React from 'react';
import Icon from '../Icon';

const FeatureCard = ({ feature, onSelect }) => {
  // Decide badge color based on app
  const badgeColor =
    feature.app === 'Kisan Sathi'
      ? 'bg-green-100 text-green-700'
      : feature.app === 'Krishi Adhikari'
      ? 'bg-indigo-100 text-indigo-700'
      : 'bg-slate-100 text-slate-600';

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

      <p className="text-slate-600 mb-3">{feature.description}</p>

      {/* Badge */}
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
        {feature.app || 'General'}
      </span>
    </button>
  );
};

export default FeatureCard;
