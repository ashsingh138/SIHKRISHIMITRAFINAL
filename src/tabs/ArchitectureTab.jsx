import React, { useState, useRef, useLayoutEffect, forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

// Data remains the same as the last version...
const flowchartData = [
    { id: 'farmer', type: 'actor', content: { title: 'FARMER', subtitle: '(App User)', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 11a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1v-1z" /></svg>' }, position: { side: 'left', top: '2%' } },
    { 
        id: 'mobile-app', type: 'process', 
        content: { title: '1. KisanSathi - Farmer App', objective: 'The primary interface for farmers, providing a full suite of smart farming tools.', tech: 'React Native, Offline Sync', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>', feature: 'User Input Gateway', iconAnim: 'pulse' }, 
        details: {
            title: "KisanSathi - Farmer App Features",
            description: "An all-in-one digital companion for farmers, providing AI-driven, actionable insights for the entire crop lifecycle, with full offline access and regional language support.",
            sections: [
                {
                    title: "Key Features",
                    layout: "grid",
                    points: ["Personalised Crop Advisory", "Fertilizer & Irrigation Advisory", "Yield Prediction", "Soil Health Report & Weather Alerts", "Pest/Disease Detection", "Market Price Prediction & Sell Suggestion", "Blockchain-based Supply Chain", "Smart Query Bot (Voice/Text/Image)", "Community Support and Training", "Officer Escalation to Unresolved Issues", "Digital Farm Companion (Activity Logs)", "Gamified Sustainability Missions", "Spectral Crop Health Maps", "Offline Mode Access & Auto Sync", "Regional Language Support", "SMS & WhatsApp Alerts",]
                }
            ]
        },
        position: { side: 'right', top: '9%' } 
    },
    { 
        id: 'cloud-infra', type: 'process', 
        content: { title: '2. Scalable Cloud Infrastructure', objective: 'Requests are routed via DNS and a load balancer to containerized services.', tech: 'AWS Route 53, EC2, Nginx, Docker', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>', feature: 'High Availability', iconAnim: 'float' },
        details: {
            title: "Cloud Infrastructure",
            description: "The entire system is built on a modern, cloud-native stack to ensure reliability and scalability. This architecture allows us to handle variable loads and deploy updates with zero downtime.",
            sections: [
                {
                    title: "Core Components",
                    points: ["DNS Management: AWS Route 53", "Compute: AWS EC2 Virtual Machines", "Load Balancing: Nginx Reverse Proxy", "Containerization: Docker for service isolation", "Content Delivery: CDN for fast web app asset delivery"]
                }
            ]
        },
        position: { side: 'left', top: '21%' } 
    },
    {
        id: 'backend', type: 'process', 
        content: { title: '3. Dockerized Node.js Servers', objective: 'A microservice architecture where each server has a dedicated role for clean, maintainable code.', tech: 'Node.js, Express, JWT, REST APIs', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>', feature: 'Business Logic Core', iconAnim: 'blink' },
        details: {
            title: "Backend Microservices (Node.js)",
            description: "Our backend is composed of several specialized Node.js services, each running in its own Docker container. This separation of concerns improves maintainability and allows for independent scaling.",
            sections: [
                {
                    title: "Dedicated Server Roles",
                    points: [
                        "Server-1: Handles user authentication and manages user data loading.",
                        "Server-2: Manages file uploads/downloads and gracefully handles requests when the primary server is busy.",
                        "Server-3: Service layer responsible for Machine Learning model management and logic execution.",
                        "Server-4: Service layer for handling all external API calls for Mapping, Weather, and Government Schemes."
                    ]
                }
            ]
        },
        position: { side: 'right', top: '33%' } 
    },
    { 
        id: 'ai-engine', type: 'process', 
        content: { title: '4. AI & Data Analytics Engine', objective: 'Analyzes geographical conditions, soil properties, and user images to provide intelligent insights.', tech: 'Python, TensorFlow, Scikit-learn,LLM,ML models', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>', feature: 'Decision Support', iconAnim: 'pulse' }, 
        details: {
            title: "AI & Data Analytics Engine",
            description: "Our core intelligence is powered by a suite of state-of-the-art machine learning models, each optimized for a specific agricultural task using a variety of data sources.",
            sections: [
                { title: "Data Inputs for Analysis", points: ["Geographical Conditions (Maps)", "Soil Chemical & Physical Properties", "Real-time Weather Data", "Farmer-uploaded Imagery"] },
                {
                    title: "AI Model Breakdown",
                    layout: "grid",
                    models: [
                        { name: "CNN (EfficientNet-B2)", useCase: "Pest & Disease Detection", metric: "Accuracy > 97.2%" },
                        { name: "XGBoost / Random Forest", useCase: "Yield Prediction (Tabular Data)", metric: "R² Score ~0.90" },
                        { name: "LSTM / GRU", useCase: "Yield Prediction (Time-Series)", metric: "MAE < 8%" },
                        { name: "ARIMA / Prophet", useCase: "Market Price Forecasting", metric: "MAE ~5%" },
                        { name: "Random Forest Classifier", useCase: "Crop Recommendation", metric: "Accuracy > 95%" },
                        { name: "Fine-tuned BERT", useCase: "Farmer Query Classification", metric: "F1-Score ~0.94" }
                    ]
                }
            ]
        },
        position: { side: 'left', top: '45%' } 
    },
    { id: 'storage', type: 'process', content: { title: '5. Persistent Data Storage', objective: 'Stores all relational data and unstructured files like photos and documents.', tech: 'PostgreSQL/MongoDB, AWS S3', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>', feature: 'Data Integrity', iconAnim: 'throb' }, details: { title: "Data & File Storage", description: "A robust, dual-storage strategy ensures that both structured application data and large binary files are stored efficiently and securely.", sections: [{ title: "Storage Solutions", points: ["Primary Database (PostgreSQL/MongoDB): Stores user profiles, crop data, soil reports, and transaction records.", "Object Storage (AWS S3 Bucket): Used for all user file uploads and downloads, such as photos of crops for pest detection."] }] }, position: { side: 'right', top: '57%' } },
    { id: 'agri-officer', type: 'actor', content: { title: 'AGRI OFFICER / EXPERT', subtitle: '(Web User)', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>' }, position: { side: 'left', top: '68%' } },
    { 
        id: 'web-app', type: 'process', 
        content: { title: '6. KrishiAdhikari - Officer Dashboard', objective: 'Web portal for Agri Officers to monitor data, manage escalations, and push updates.', tech: 'React, Tailwind CSS, Recharts', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>', feature: 'Monitoring & Control', iconAnim: 'none' },
        details: {
            title: "KrishiAdhikari - Officer Dashboard",
            description: "The web application serves as the command center for administrators and experts to manage the platform, support farmers, and derive high-level insights from the collected data.",
            sections: [
                {
                    title: "Key Features",
                    points: ["Escalated Farmer Queries Sorted by Urgency", "Outbreak Monitoring (Pest, Spectral Heatmaps)", "Regional Soil & Weather Reports", "Push Policy, Subsidy & Scheme Updates", "Supply Chain Oversight & Fraud Detection", "Farmer Adoption Analytics & Sustainability Index", "Role-Based Dashboards for Stakeholders"]
                }
            ]
        },
        position: { side: 'right', top: '74%' } 
    },
    { id: 'supply-chain', type: 'process', content: { title: '7. Supply Chain & Market Linkage', objective: 'Connects farmers with Dealers, Mandis, and Suppliers using a blockchain based traceable QR ID system.', tech: 'Blockchain, API Integration, QR Codes', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1z" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.5v5a2 2 0 01-2 2h-6a2 2 0 01-2-2v-5a2 2 0 012-2h6a2 2 0 012 2z" /></svg>', feature: 'Economic Enablement', iconAnim: 'slide' }, details: { title: "Supply Chain & Market Integration", description: "This module bridges the gap between farm production and the market, creating a transparent and efficient supply chain.", sections: [{ title: "Connected Stakeholders", points: ["Farmers: Provide production data.", "Dealers & Mandis: Access supply information.", "Suppliers: Manage logistics and transportation.", "Consumers: Can verify produce origin."] }, { title: "Core Technology", points: ["Blockchain-based Supply Chain: Ensures tamper-proof record-keeping for produce.", "QR ID System: Each batch of produce gets a unique QR code for full traceability from farm to table.", "API Integrations: Connect with logistics partners for real-time tracking."] }] }, position: { side: 'left', top: '88%' } },
    { id: 'consumer', type: 'actor', content: { title: 'CONSUMER', subtitle: '(End User)', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.993.883L4 8v9a1 1 0 001 1h10a1 1 0 001-1V8l-.007-.117A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4z" /></svg>' }, position: { side: 'right', top: '95%' } },
];
const connections = [ ['farmer', 'mobile-app'], ['mobile-app', 'cloud-infra'], ['cloud-infra', 'backend'], ['backend', 'ai-engine'], ['ai-engine', 'storage'], ['storage', 'web-app'], ['agri-officer', 'web-app'], ['web-app', 'supply-chain'], ['supply-chain', 'consumer'] ];

const ActorBox = forwardRef(({ item, isVisible }, ref) => ( <div id={item.id} ref={ref} className={`flow-box actor-box ${isVisible ? 'is-visible' : ''}`} style={{ top: item.position.top }}><div dangerouslySetInnerHTML={{ __html: item.content.icon }} /><h3 className="font-bold mt-1">{item.content.title}</h3><p className="text-xs font-normal text-gray-500">{item.content.subtitle}</p></div> ));
// UPDATED: Added a class for mobile responsiveness
const ProcessBox = forwardRef(({ item, isVisible, onClick }, ref) => ( <div id={item.id} ref={ref} onClick={onClick} className={`flow-box process-box rounded-xl p-4 w-80 md:w-80 ${isVisible ? 'is-visible' : ''}`} style={{ top: item.position.top }}><div className="flex items-start space-x-4"><div className={`icon-container ${item.content.iconAnim}`} dangerouslySetInnerHTML={{ __html: item.content.icon }} /><div><h3 className="font-bold text-gray-800">{item.content.title}</h3><p className="objective mt-1">{item.content.objective}</p><p className="core-feature">Key Function: <strong>{item.content.feature}</strong></p><p className="tech-stack mt-2">{item.content.tech}</p></div></div></div> ));
const ImageCard = ({ title, description, imgSrc, onImageClick }) => ( <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}><h3 className="text-3xl font-bold text-slate-800">{title}</h3><p className="text-slate-600 mt-2 max-w-lg">{description}</p><div className="mt-6 bg-white p-4 rounded-xl shadow-lg border hover:shadow-2xl transition-shadow duration-300 cursor-pointer" onClick={onImageClick}><img src={imgSrc} alt={title} className="rounded-lg w-full" /></div></motion.div> );

const DetailModal = ({ node, onClose }) => {
    if (!node) return null;
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-slate-50 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col"
                onClick={(e) => e.stopPropagation()}>
                <div className="sticky top-0 bg-slate-50/80 backdrop-blur-lg z-10 flex items-center gap-4 border-b p-4 md:p-6">
                    <div className="icon-container-modal" dangerouslySetInnerHTML={{ __html: node.content.icon }} />
                    <h2 className="text-2xl font-bold text-slate-800 flex-1">{node.details.title}</h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200"><X className="w-6 h-6 text-slate-600" /></button>
                </div>
                <div className="p-4 md:p-6 space-y-6">
                    <p className="text-slate-600 text-base leading-relaxed">{node.details.description}</p>
                    {node.details.sections?.map((section, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-md border border-slate-200">
                            <h3 className="text-lg font-semibold text-slate-700 mb-3">{section.title}</h3>
                            {section.layout === 'grid' ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {(section.points || section.models).map((item, index) => (
                                        <div key={index} className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                            <p className="font-bold text-slate-800">{item.name || item}</p>
                                            {item.useCase && <p className="text-sm text-slate-600">{item.useCase}</p>}
                                            {item.metric && <p className="text-sm font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full inline-block mt-2">{item.metric}</p>}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className="space-y-2">
                                    {section.points.map((point, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            <span className="text-slate-700">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

const ArchitectureTab = () => {
    const [zoomedImage, setZoomedImage] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);
    const containerRef = useRef(null);
    const boxRefs = useRef({});
    const [arrowPaths, setArrowPaths] = useState([]);
    const [visibleElements, setVisibleElements] = useState(new Set());
    
    useLayoutEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleElements(prev => new Set(prev).add(entry.target.id));
                }
            });
        }, { threshold: 0.1, rootMargin: "-150px 0px -150px 0px" });

        const elements = flowchartData.map(item => boxRefs.current[item.id]).filter(Boolean);
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        const calculatePositions = () => {
            if (!containerRef.current) return;
            const container = containerRef.current;
            
            // Check if we are in mobile view
            const isMobile = window.innerWidth < 768;

            flowchartData.forEach(item => {
                const el = boxRefs.current[item.id];
                if (!el) return;
                // On mobile, we let CSS handle the positioning.
                // On desktop, we calculate it with JS.
                if (!isMobile) {
                    const center_x = container.clientWidth / 2;
                    const side_offset = 140;
                    if (item.position.side === 'left') {
                        el.style.left = `${center_x - el.offsetWidth - side_offset}px`;
                    } else {
                        el.style.left = `${center_x + side_offset}px`;
                    }
                } else {
                    // Reset inline styles for mobile so CSS can take over
                    el.style.left = '';
                }
            });

            // Arrow calculation only happens on desktop
            if (!isMobile) {
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
                    const endX = (fromIsLeft ? toRect.left : toRect.right) - containerRect.left;
                    const endY = toRect.top - containerRect.top + toRect.height / 2;
                    const midY = startY + (endY - startY) / 2;
                    const d = `M${startX},${startY} C${startX},${midY} ${endX},${midY} ${endX},${endY}`;
                    return { d, toId };
                }).filter(Boolean);
                setArrowPaths(newArrowPaths);
            } else {
                setArrowPaths([]); // Clear arrows on mobile
            }
        };

        const debouncedCalculatePositions = () => {
            clearTimeout(window.resizeTimer);
            window.resizeTimer = setTimeout(calculatePositions, 100);
        };

        debouncedCalculatePositions();
        window.addEventListener('resize', debouncedCalculatePositions);
        return () => {
            window.removeEventListener('resize', debouncedCalculatePositions);
        }
    }, [visibleElements]);

    return (
        <div className="p-4 md:p-12 bg-slate-50 min-h-screen">
            <header className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 animated-gradient-text">System & Workflow Overview</h2>
                <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">A high-level look at the data flow and technical infrastructure that power the KisanSathi & KrishiAdhikari platform.</p>
            </header>

            <section className="mb-16 md:mb-28">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto items-start">
                    <ImageCard title="Our Workflow" description="This diagram illustrates the end-to-end user journey and the logical flow of data." imgSrc="/images/workflow.png" onImageClick={() => setZoomedImage("/images/workflow.png")} />
                    <ImageCard title="System Architecture" description="A detailed look at the robust, scalable, and modern tech stack." imgSrc="/images/system_architecture.png" onImageClick={() => setZoomedImage("/images/system_architecture.png")} />
                </div>
            </section>
            
            <section>
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">End-to-End System Flow</h3>
                    <p className="text-lg text-slate-600">This interactive flowchart details our platform's architecture. <span className="font-semibold text-blue-600">Click on a process box to see more details.</span></p>
                </div>
                <div ref={containerRef} className="flowchart-container relative w-full max-w-6xl mx-auto my-16" style={{ minHeight: '2400px' }}>
                     <div className="connector-line"></div>
                    <svg className="connector-svg absolute top-0 left-0 w-full h-full overflow-visible z-5">
                        <defs><marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af" /></marker></defs>
                        {arrowPaths.map((path, index) => (<path key={index} d={path.d} className={`arrow ${visibleElements.has(path.toId) ? 'is-visible' : ''}`} />))}
                    </svg>
                    {flowchartData.map(item => {
                        const props = { key: item.id, item: item, isVisible: visibleElements.has(item.id), ref: el => (boxRefs.current[item.id] = el) };
                        if (item.type === 'actor') return <ActorBox {...props} />;
                        if (item.type === 'process') return (<React.Fragment key={item.id}><div id={`dot-${item.id}`} className={`connector-dot ${visibleElements.has(item.id) ? 'is-active' : ''}`} style={{top: item.position.top}}></div><ProcessBox {...props} onClick={() => setSelectedNode(item)} /></React.Fragment>);
                        return null;
                    })}
                </div>
            </section>
            
            <AnimatePresence>
                {zoomedImage && ( <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setZoomedImage(null)}><motion.img initial={{ scale: 0.5, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.5, y: 50 }} src={zoomedImage} alt="Zoomed diagram" className="max-w-full max-h-full rounded-lg shadow-2xl object-contain" onClick={(e) => e.stopPropagation()}/><button onClick={() => setZoomedImage(null)} className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"><X className="w-6 h-6" /></button></motion.div> )}
                <DetailModal node={selectedNode} onClose={() => setSelectedNode(null)} />
            </AnimatePresence>
        </div>
    );
};

export default ArchitectureTab;