// src/components/about/StoryCard.jsx

import React from 'react';

const StoryCard = ({ quote, name, need, style }) => (
  <div className="bg-white p-6 rounded-r-lg shadow-lg border-l-4 border-amber-500 h-full" style={style}>
    <blockquote className="text-lg italic text-slate-700">"{quote}"</blockquote>
    <p className="font-bold text-slate-800 mt-4">- {name}</p>
    <div className="mt-3">
      <span className="text-red-600 font-semibold">→ Need: </span>
      <span className="text-slate-600">{need}</span>
    </div>
  </div>
);

export default StoryCard;