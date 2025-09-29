import React, { useEffect, useRef } from 'react';
import Icon from '../Icon';

// Custom hook for managing scroll-triggered animations
const useFadeInObserver = () => {
  const elementsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    elementsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return (el) => { if (el && !elementsRef.current.includes(el)) { elementsRef.current.push(el); }};
};

// Reusable components for the flowchart
const Stage = ({ icon, title, subtitle, children, color }) => {
  const fadeInRef = useFadeInObserver();
  return (
    <div ref={fadeInRef} className="market-card">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full ${color.bg}`}>
          <Icon name={icon} className={`w-8 h-8 ${color.text}`} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="mt-4 pl-16 space-y-4">
        {children}
      </div>
    </div>
  );
};

const Arrow = () => {
  const fadeInRef = useFadeInObserver();
  return (
    <div ref={fadeInRef} className="h-16 flex justify-center market-arrow">
      <div className="w-1 bg-indigo-200"></div>
    </div>
  );
};

const MarketPriceFlowchart = () => {
  const fadeInRef = useFadeInObserver();

  return (
    <div className="bg-slate-50 w-full p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header ref={fadeInRef} className="text-center mb-16 market-card">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Market Price Intelligence Flow</h1>
          <p className="mt-4 text-lg text-gray-600">From raw mandi data to profitable selling decisions for the farmer.</p>
        </header>

        {/* Stage 1: Data Sources */}
        <Stage icon="database" title="1. Data Ingestion" subtitle="Collecting real-time and historical market data." color={{bg: 'bg-blue-100', text: 'text-blue-600'}}>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border"><strong>Agmarknet API:</strong> Daily wholesale prices from hundreds of mandis.</div>
                <div className="bg-white p-4 rounded-lg border"><strong>eNAM Portal:</strong> Real-time auction prices and transaction data.</div>
            </div>
        </Stage>
        <Arrow />

        {/* Stage 2: Processing */}
        <Stage icon="server" title="2. Backend Processing" subtitle="Cleaning, normalizing, and storing the data." color={{bg: 'bg-slate-100', text: 'text-slate-600'}}>
             <div className="bg-white p-4 rounded-lg border">
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Clean & Normalize:</strong> Remove outliers, convert units (quintal, kg), and standardize commodity names.</li>
                    <li><strong>Store Data:</strong> Save cleaned data in a PostgreSQL database for historical analysis.</li>
                </ul>
             </div>
        </Stage>
        <Arrow />

        {/* Stage 3: Prediction Engine */}
        <Stage icon="brain-circuit" title="3. Prediction Engine" subtitle="Forecasting future prices with Machine Learning." color={{bg: 'bg-purple-100', text: 'text-purple-600'}}>
            <div className="p-6 rounded-lg ml-engine-card text-white">
                <h4 className="text-lg font-bold">Time-Series Forecasting Models</h4>
                <p className="text-purple-200 text-sm mt-2">Models like ARIMA, Prophet, and LSTMs analyze patterns using features like:</p>
                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                    <span className="bg-white/20 px-2 py-1 rounded-full">Past Prices (7-30 days)</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full">Weather Forecasts</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full">Harvest Season Data</span>
                </div>
            </div>
        </Stage>
        <Arrow />
        
        {/* Stage 4: App Output */}
        <Stage icon="smartphone" title="4. Actionable Insights" subtitle="Delivering clear 'Sell or Hold' advice to the farmer's app." color={{bg: 'bg-green-100', text: 'text-green-600'}}>
            <div className="bg-white p-4 rounded-xl border-2 border-green-200 shadow-lg">
                <p className="font-bold text-sm text-gray-700">Farmer Input: <span className="font-normal">Crop = Tomato, Location = Varanasi</span></p>
                <hr className="my-2"/>
                <div className="text-center">
                    <p className="text-xs text-gray-500">Current Price (Varanasi)</p>
                    <p className="text-xl font-bold">₹1200/quintal</p>
                </div>
                <div className="mt-2 p-3 rounded-lg bg-green-50 text-green-800">
                    <p className="font-bold text-lg">✅ Suggestion: Hold & Sell</p>
                    <p className="text-sm">Forecasted price in Lucknow mandi is <strong className="text-green-900">₹1400/quintal</strong> in 4 days. This is a potential <strong>+15%</strong> increase after transport costs.</p>
                </div>
            </div>
        </Stage>
      </div>
    </div>
  );
};

export default MarketPriceFlowchart;