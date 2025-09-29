import React, { useEffect, useRef } from 'react';
import Icon from '../Icon';

const useFadeInObserver = () => {
  const elementsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 }
    );
    elementsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return (el) => { if (el && !elementsRef.current.includes(el)) { elementsRef.current.push(el); } };
};

const ActorCard = ({ actor, children }) => {
  const fadeInRef = useFadeInObserver();
  return (
    <div ref={fadeInRef} className="relative pl-24 pb-12 blockchain-card is-visible">
      <div className={`timeline-icon-wrapper ${actor.color.bg} ${actor.color.border}`}>
        <Icon name={actor.icon} className={`w-8 h-8 ${actor.color.text}`} />
      </div>
      <div className="pt-2">
        <p className="text-xs text-gray-500">{actor.step}</p>
        <h3 className="text-xl font-bold text-gray-800">{actor.name}</h3>
        <p className="text-gray-600 mt-1">{actor.description}</p>
        <div className="mt-4 bg-slate-800 text-slate-300 p-3 rounded-lg font-mono text-xs space-y-1">
          <p className="text-green-400 font-bold"># Blockchain Transaction Log</p>
          {children}
        </div>
      </div>
    </div>
  );
};


const BlockchainTraceability = () => {
    const fadeInRef = useFadeInObserver();
  return (
    <div className="bg-slate-50 w-full p-4 sm:p-8">
      <header ref={fadeInRef} className="text-center mb-16 fade-in-element">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Blockchain Supply Chain Traceability</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">A transparent, immutable farm-to-fork journey for every product.</p>
      </header>

      <div className="relative max-w-3xl mx-auto">
        <div className="timeline-line"></div>

        <ActorCard actor={{ name: 'Farmer', icon: 'leaf', step: 'Step 1: Origination', description: 'Generates a unique QR code for a produce batch, creating a digital asset on the blockchain.', color: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' }}}>
          <p className="data-log-entry"><strong>Block #1:</strong> Asset Minted</p>
          <p className="data-log-entry" style={{animationDelay: '0.7s'}}><strong>Data:</strong> Crop: Wheat, Qty: 50kg</p>
          <p className="data-log-entry" style={{animationDelay: '0.9s'}}><strong>Timestamp:</strong> 2025-10-01 08:00</p>
        </ActorCard>

        <ActorCard actor={{ name: 'Transporter', icon: 'truck', step: 'Step 2: Logistics', description: 'Scans the QR code upon pickup, immutably recording their digital ID and the transit timestamp.', color: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' }}}>
           <p className="data-log-entry"><strong>Block #2:</strong> Custody Transfer</p>
           <p className="data-log-entry" style={{animationDelay: '0.7s'}}><strong>Handler:</strong> Transporter ID 0x4B2</p>
           <p className="data-log-entry" style={{animationDelay: '0.9s'}}><strong>Timestamp:</strong> 2025-10-01 14:30</p>
        </ActorCard>

        <ActorCard actor={{ name: 'Retailer', icon: 'store', step: 'Step 3: Distribution', description: 'Scans upon receiving the goods, updating the product\'s journey and verifying its origin.', color: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' }}}>
           <p className="data-log-entry"><strong>Block #3:</strong> Custody Transfer</p>
           <p className="data-log-entry" style={{animationDelay: '0.7s'}}><strong>Handler:</strong> Retailer ID 0x9F7</p>
           <p className="data-log-entry" style={{animationDelay: '0.9s'}}><strong>Timestamp:</strong> 2025-10-02 10:00</p>
        </ActorCard>

        <ActorCard actor={{ name: 'Consumer', icon: 'qr-code', step: 'Step 4: Verification', description: 'Scans the final QR code in-store to view the product\'s complete, transparent, and trustworthy journey.', color: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' }}}>
           <p className="data-log-entry"><strong>Block #4:</strong> Final Scan</p>
           <p className="data-log-entry" style={{animationDelay: '0.7s'}}><strong>Action:</strong> View Full History</p>
           <p className="data-log-entry" style={{animationDelay: '0.9s'}}><strong>Result:</strong> Trust Verified ✅</p>
        </ActorCard>
        
        <div ref={fadeInRef} className="relative pl-24 pt-4 fade-in-element">
             <div className="timeline-icon-wrapper bg-slate-800 border-slate-700">
                <Icon name="shield-check" className="w-8 h-8 text-white" />
            </div>
            <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-800">Immutable Ledger</h3>
                <p className="text-gray-600 mt-1">Every transaction is cryptographically secured on the blockchain, making the data tamper-proof and guaranteeing authenticity for all stakeholders.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BlockchainTraceability;