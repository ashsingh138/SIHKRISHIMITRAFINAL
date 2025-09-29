// src/components/about/StatCard.jsx

import React from 'react';
import CountUp from 'react-countup';

const StatCard = ({ value, description, style }) => {
  // This logic removes any non-numeric characters for calculation
  // but keeps the original symbols (like '~', '>') for display.
  const cleanValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^[~>]/)?.[0] || '';

  return (
    <div className="bg-slate-100 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition" style={style}>
      <h2 className="text-5xl font-black text-green-600">
        <CountUp
          end={cleanValue}
          duration={3}
          prefix={prefix}
          suffix={value.includes('%') ? '%' : ''}
        />
      </h2>
      <p className="text-slate-700 mt-2">{description}</p>
    </div>
  );
};

export default StatCard;