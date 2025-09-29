import React from 'react';
import Icon from '../Icon';

const FeatureCard = ({ title, icon, content, illustration, infographic, style }) => {
  return (
    // The 'group' class enables hover effects on child elements
    <div className="group" style={style}>
      <div className="bg-white rounded-xl shadow-md border border-slate-200/80 h-full overflow-hidden
                      transform transition-all duration-300 ease-in-out
                      group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-[1.02]">
        
        {/* Image Placeholder Area */}
        <div className="bg-slate-50 border-b p-4 h-40 flex items-center justify-center">
          <img src={illustration} alt={title} className="max-h-full max-w-full object-contain
                           transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Content Area */}
        <div className="p-5">
          <div className="flex items-start mb-3">
            <Icon name={icon} className="w-8 h-8 text-indigo-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg text-slate-800">{title}</h4>
            </div>
          </div>
          
          <ul className="list-disc list-inside text-slate-600 space-y-1 pl-12 text-sm">
            {content.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          {/* Optional Infographic Section */}
          {infographic && (
            <div className="mt-4 ml-12 bg-indigo-50 border-l-4 border-indigo-400 p-2 rounded-r-md">
              <p className="text-xl font-bold text-indigo-800">{infographic.value}</p>
              <p className="text-xs text-indigo-600 font-semibold uppercase">{infographic.label}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;