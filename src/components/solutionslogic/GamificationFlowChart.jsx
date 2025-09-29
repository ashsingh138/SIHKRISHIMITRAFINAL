import React, { useState, useRef, useLayoutEffect, forwardRef } from 'react'; // Import forwardRef

// --- Data for the flowchart (no changes here) ---
const flowchartData = [
    { id: 'admin', type: 'actor', content: { title: 'ADMIN', subtitle: '(Agri-Expert)', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>'}, position: { side: 'left', top: '5%' } },
    { id: 'admin-panel', type: 'process', content: { title: '1. Admin Panel', objective: 'Create missions & link rewards to real-world schemes.', tech: 'React/Angular, Node.js, Secure APIs', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>', feature: 'Incentive System' }, position: { side: 'right', top: '5%' } },
    { id: 'backend', type: 'process', content: { title: '2. Backend & Personalization', objective: 'Store data & tailor quests based on farmer profile.', tech: 'Node.js, PostgreSQL, JWT Auth', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>', feature: 'Personalized Quests' }, position: { side: 'left', top: '20%' } },
    { id: 'frontend', type: 'process', content: { title: '3. Frontend App', objective: 'Farmer sees personalized quests & visual dashboards.', tech: 'React Native/Flutter, Recharts', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>', feature: 'Progress Tracker' }, position: { side: 'right', top: '35%' } },
    { id: 'farmer', type: 'actor', content: { title: 'FARMER', subtitle: '(App User)', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 11a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1v-1z" /></svg>' }, position: { side: 'left', top: '42%' } },
    { id: 'submission', type: 'process', content: { title: '4. Mission Submission', objective: 'Farmer completes task & submits proof via app.', tech: 'REST API, Image Upload', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>', feature: 'Learning Through Play' }, position: { side: 'right', top: '50%' } },
    { id: 'engine', type: 'process', content: { title: '5. Gamification Engine', objective: 'Processes submission, updates score, badges & leaderboard.', tech: 'WebSockets, Custom Logic', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>', feature: 'Peer Sharing' }, position: { side: 'left', top: '65%' } },
    { id: 'reward', type: 'process', content: { title: '6. Reward & Feedback Loop', objective: 'Farmer sees rewards; Admin sees eligibility for schemes.', tech: 'Push Notifications, Admin Reports', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>', feature: 'Incentive System' }, position: { side: 'right', top: '80%' } },
];
const connections = [
    ['admin', 'admin-panel'], ['admin-panel', 'backend'], ['backend', 'frontend'],
    ['frontend', 'farmer'], ['frontend', 'submission'], ['submission', 'engine'],
    ['engine', 'reward']
];

// --- Sub-components wrapped with forwardRef ---

// ✅ FIXED: Wrapped ActorBox with forwardRef
const ActorBox = forwardRef(({ item, isVisible }, ref) => (
    <div id={item.id} ref={ref} className={`flow-box actor-box ${isVisible ? 'is-visible' : ''}`} style={{ top: item.position.top }}>
        <div dangerouslySetInnerHTML={{ __html: item.content.icon }} />
        <h3 className="font-bold mt-1">{item.content.title}</h3>
        <p className="text-xs font-normal text-gray-500">{item.content.subtitle}</p>
    </div>
));

// ✅ FIXED: Wrapped ProcessBox with forwardRef
const ProcessBox = forwardRef(({ item, isVisible }, ref) => (
    <div id={item.id} ref={ref} className={`flow-box rounded-xl p-4 w-80 ${isVisible ? 'is-visible' : ''}`} style={{ top: item.position.top }}>
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0" dangerouslySetInnerHTML={{ __html: item.content.icon }} />
            <div>
                <h3 className="font-bold text-gray-800">{item.content.title}</h3>
                <p className="objective mt-1">{item.content.objective}</p>
                <p className="core-feature">Core Feature: <strong>{item.content.feature}</strong></p>
                <p className="tech-stack mt-2">{item.content.tech}</p>
            </div>
        </div>
    </div>
));

// --- Main Flowchart Component ---
const GamificationFlowchart = () => {
    const containerRef = useRef(null);
    const boxRefs = useRef({});
    const [arrowPaths, setArrowPaths] = useState([]);
    const [visibleElements, setVisibleElements] = useState(new Set());

    useLayoutEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setVisibleElements(prev => new Set(prev).add(id));
                }
            });
        }, { threshold: 0.1 });

        const elements = flowchartData.map(item => boxRefs.current[item.id]).filter(Boolean);
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        const calculatePositions = () => {
            if (!containerRef.current) return;
            const container = containerRef.current;
            const center_x = container.clientWidth / 2;
            const side_offset = container.clientWidth > 768 ? 120 : 30;

            flowchartData.forEach(item => {
                const el = boxRefs.current[item.id];
                if (!el) return;
                if (item.position.side === 'left') {
                    el.style.left = `${center_x - el.offsetWidth - side_offset}px`;
                } else {
                    el.style.left = `${center_x + side_offset}px`;
                }
            });

            const newArrowPaths = connections.map(([fromId, toId]) => {
                const fromEl = boxRefs.current[fromId];
                const toEl = boxRefs.current[toId];
                if (!fromEl || !toEl) return null;
                
                const containerRect = container.getBoundingClientRect();
                const fromRect = fromEl.getBoundingClientRect();
                const toRect = toEl.getBoundingClientRect();

                const fromIsLeft = (fromRect.left + fromRect.width / 2) < (containerRect.left + containerRect.width / 2);
                
                const startX = (fromIsLeft ? fromRect.right : fromRect.left) - containerRect.left;
                const startY = fromRect.top - containerRect.top + fromRect.height / 2;
                
                const toIsLeft = (toRect.left + toRect.width / 2) < (containerRect.left + containerRect.width / 2);

                const endX = (toIsLeft ? toRect.right : toRect.left) - containerRect.left;
                const endY = toRect.top - containerRect.top + toRect.height / 2;

                const midY = startY + (endY - startY) / 2;
                const d = `M${startX},${startY} C${startX},${midY} ${endX},${midY} ${endX},${endY}`;
                return { d, toId };
            }).filter(Boolean);

            setArrowPaths(newArrowPaths);
        };
        
        // Use a timeout to ensure initial render is complete before measuring
        const timer = setTimeout(calculatePositions, 100);
        
        window.addEventListener('resize', calculatePositions);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculatePositions);
        }
    }, [visibleElements]); // Recalculate if visibility changes, which implies elements are rendered

    return (
        <div className="w-full min-h-screen p-4 sm:p-8 flex flex-col items-center">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    Gamified Sustainability Flow
                </h1>
            </div>

            <div ref={containerRef} className="relative w-full max-w-6xl my-16" style={{ minHeight: '1400px' }}>
                <div className="connector-line" style={{ top: '5%', height: '90%' }}></div>
                <svg width="0" height="0"><defs><marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af" /></marker></defs></svg>

                <svg className="absolute top-0 left-0 w-full h-full overflow-visible z-5">
                    {arrowPaths.map((path, index) => (
                        <path key={index} d={path.d} className={`arrow ${visibleElements.has(path.toId) ? 'is-visible' : ''}`} />
                    ))}
                </svg>
                
                {flowchartData.map(item => {
                    const props = {
                        key: item.id,
                        item: item,
                        isVisible: visibleElements.has(item.id),
                        ref: el => (boxRefs.current[item.id] = el)
                    };

                    if (item.type === 'actor') {
                        return <ActorBox {...props} />;
                    }
                    if (item.type === 'process') {
                        return (
                            <React.Fragment key={item.id}>
                                <div id={`dot-${item.id}`} className={`connector-dot ${visibleElements.has(item.id) ? 'is-active' : ''}`} style={{top: item.position.top}}></div>
                                <ProcessBox {...props} />
                            </React.Fragment>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default GamificationFlowchart;