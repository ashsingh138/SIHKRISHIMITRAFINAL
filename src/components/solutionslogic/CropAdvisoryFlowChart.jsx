import React, { useState, useRef, useLayoutEffect } from 'react';

// Card component is correct and does not need changes.
const Card = React.forwardRef(({ id, children, isVisible }, ref) => (
  <div id={id} ref={ref} className={`flow-card ${isVisible ? 'is-visible' : ''}`}>
    {children}
  </div>
));

const CropAdvisoryFlowchart = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef({});
  const [arrows, setArrows] = useState([]);
  const [visibleCards, setVisibleCards] = useState(new Set());

  // IntersectionObserver for animations remains the same.
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.2 }
    );
    const cards = Object.values(cardRefs.current).filter(Boolean);
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // ✅ FIX: This entire effect has been rewritten for reliability.
  useLayoutEffect(() => {
    const connections = [
        { from: ['card1', 'card2'], to: 'card3' }, { from: ['card3'], to: 'card4' },
        { from: ['card4'], to: 'card5' }, { from: ['card5'], to: 'card6' },
        { from: ['card6'], to: 'card7' }, { from: ['card7'], to: 'card8' },
        { from: ['card8'], to: 'card9' }, { from: ['card9'], to: 'card10' }
    ];

    function drawArrows() {
      const svgRect = containerRef.current?.getBoundingClientRect();
      // Wait until the container is ready
      if (!svgRect || svgRect.width === 0) return;

      const newArrows = [];
      connections.forEach(conn => {
        conn.from.forEach(fromId => {
          const fromEl = cardRefs.current[fromId];
          const toEl = cardRefs.current[conn.to];
          // Important: Only draw if BOTH elements are rendered and have dimensions
          if (!fromEl || !toEl || fromEl.offsetHeight === 0 || toEl.offsetHeight === 0) return;

          const fromRect = fromEl.getBoundingClientRect();
          const toRect = toEl.getBoundingClientRect();

          const startX = fromRect.right - svgRect.left;
          const startY = fromRect.top - svgRect.top + fromRect.height / 2;
          const endX = toRect.left - svgRect.left;
          const endY = toRect.top - svgRect.top + toRect.height / 2;
          const curveX1 = startX + (endX - startX) * 0.5;
          const d = `M ${startX},${startY} C ${curveX1},${startY} ${curveX1},${endY} ${endX},${endY}`;
          
          newArrows.push({ d, from: fromId, to: conn.to });
        });
      });
      setArrows(newArrows);
    }
    
    // Use a timeout to give React a moment to render everything before we measure.
    const timerId = setTimeout(drawArrows, 100);
    
    // Use ResizeObserver for efficient redrawing on layout changes.
    const resizeObserver = new ResizeObserver(drawArrows);
    const containerNode = containerRef.current;
    if (containerNode) {
        resizeObserver.observe(containerNode);
    }
    
    return () => {
      clearTimeout(timerId);
      if (containerNode) {
        resizeObserver.unobserve(containerNode);
      }
    };
  }, [visibleCards]); // Rerun this effect when new cards become visible.


  return (
    <div className="flowchart-dark-background w-full"> 
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 section-title">
        Smart Crop Advisory Flow
      </h1>
      <div ref={containerRef} className="relative grid md:grid-cols-4 gap-x-8 gap-y-24 items-center max-w-7xl mx-auto">
        <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            <defs>
                <marker id="arrowhead-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#arrow-gradient)" />
                </marker>
                <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:"#4f46e5"}} />
                    <stop offset="100%" style={{stopColor:"#a855f7"}} />
                </linearGradient>
            </defs>
            {arrows.map((arrow, i) => (
                <g key={i} className={`arrow ${visibleCards.has(arrow.to) ? 'is-visible' : ''}`}>
                    <path className="arrow-path" d={arrow.d} stroke="url(#arrow-gradient)" />
                </g>
            ))}
        </svg>

        {/* The rest of the JSX remains the same */}
        <div className="col-span-1 flex flex-col gap-6 z-10"><h2 className="text-2xl text-center section-title">Data Ingestion</h2>
          <Card id="card1" ref={el => cardRefs.current['card1'] = el} isVisible={visibleCards.has('card1')}>
            <h3 className="font-bold text-lg text-white">Farmer Input 📱</h3><p className="text-sm text-slate-400">Manual soil test, cropping history.</p><p className="mt-2 text-sm"><strong>Data In:</strong> <span className="data-point">Soil pH</span> <span className="data-point">NPK</span></p><p><strong>Tech:</strong> <span className="tech-tag">React Native</span></p>
          </Card>
          <Card id="card2" ref={el => cardRefs.current['card2'] = el} isVisible={visibleCards.has('card2')}>
            <h3 className="font-bold text-lg text-white">APIs 🌦️</h3><p className="text-sm text-slate-400">Fetches soil + weather info.</p><p className="mt-2 text-sm"><strong>Sources:</strong> <span className="tech-tag">Tomorrow.io</span> <span className="tech-tag">ISRIC SoilGrids</span> <span className="tech-tag">Bhuvan</span></p>
          </Card>
        </div>
        <div className="col-span-1 flex flex-col items-center z-10"><h2 className="text-2xl text-center section-title">Core Orchestration</h2>
          <Card id="card3" ref={el => cardRefs.current['card3'] = el} isVisible={visibleCards.has('card3')}>
            <h3 className="font-bold text-lg text-white">Backend Gateway ⚡</h3><p className="text-sm text-slate-400">Authenticates, routes data.</p><p className="mt-2"><strong>Tech:</strong> <span className="tech-tag">Node JS</span> <span className="tech-tag">PostgreSQL</span></p>
          </Card>
        </div>
        <div className="col-span-1 flex flex-col gap-6 z-10"><h2 className="text-2xl text-center section-title">Advisory Engines</h2>
          <Card id="card4" ref={el => cardRefs.current['card4'] = el} isVisible={visibleCards.has('card4')}>
            <h3 className="font-bold text-lg text-white">Crop Rec 🌱</h3><p className="text-sm text-slate-400">Suggests optimal crop to sow.</p><p className="mt-2"><strong>Model:</strong> Random Forest(~97%)</p>
          </Card>
          <Card id="card5" ref={el => cardRefs.current['card5'] = el} isVisible={visibleCards.has('card5')}>
            <h3 className="font-bold text-lg text-white">Fertilizer 💧</h3><p className="text-sm text-slate-400">Personalized NPK dosage.</p><p className="mt-2"><strong>Model:</strong> XGBoost(~0.90 R<sup>2</sup>)</p>
          </Card>
          <Card id="card6" ref={el => cardRefs.current['card6'] = el} isVisible={visibleCards.has('card6')}>
            <h3 className="font-bold text-lg text-white">Irrigation 💦</h3><p className="text-sm text-slate-400">When & how much to irrigate.</p><p className="mt-2"><strong>Model:</strong> Regression</p>
          </Card>
          <Card id="card7" ref={el => cardRefs.current['card7'] = el} isVisible={visibleCards.has('card7')}>
            <h3 className="font-bold text-lg text-white">Harvest 🌾</h3><p className="text-sm text-slate-400">Optimal harvest window.</p><p className="mt-2"><strong>Model:</strong> Time-series forecast</p>
          </Card>
        </div>
        <div className="col-span-1 flex flex-col gap-6 z-10"><h2 className="text-2xl text-center section-title">Output & Feedback</h2>
          <Card id="card8" ref={el => cardRefs.current['card8'] = el} isVisible={visibleCards.has('card8')}>
            <h3 className="font-bold text-lg text-white">Advisory Cards 📋</h3><p className="text-sm text-slate-400">Simple visual steps for farmer.</p><p className="mt-2"><strong>Output:</strong> <span className="data-point">Sow in 5 days</span> <span className="data-point">30kg urea/acre</span></p>
          </Card>
          <Card id="card9" ref={el => cardRefs.current['card9'] = el} isVisible={visibleCards.has('card9')}>
            <h3 className="font-bold text-lg text-white">Alerts 🔔</h3><p className="text-sm text-slate-400">SMS & WhatsApp reminders.</p>
          </Card>
          <Card id="card10" ref={el => cardRefs.current['card10'] = el} isVisible={visibleCards.has('card10')}>
            <h3 className="font-bold text-lg text-white">Feedback 🔄</h3><p className="text-sm text-slate-400">Farmer confirms actions → models improve.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisoryFlowchart;