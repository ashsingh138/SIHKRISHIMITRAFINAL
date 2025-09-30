import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, UserCheck, Users, BrainCircuit, Mic, Camera, FileText } from 'lucide-react';

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
        }, { threshold: 0.1 });
        elementsRef.current.forEach((el) => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);
    return (el) => { if (el && !elementsRef.current.includes(el)) { elementsRef.current.push(el); }};
};

const FlowCard = ({ icon: Icon, title, content, color, children }) => {
    const fadeInRef = useFadeInObserver();
    return (
        <motion.div ref={fadeInRef} className={`query-card bg-white p-6 rounded-xl shadow-lg border-l-4 ${color.border}`}>
            <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${color.bg}`}>
                    <Icon className={`w-6 h-6 ${color.text}`} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                    <p className="text-slate-600 mt-1">{content}</p>
                </div>
            </div>
            {children}
        </motion.div>
    );
};

const QueryBotFlowchart = () => {
    const fadeInRef = useFadeInObserver();
    return (
        <div className="bg-slate-50 w-full p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <header ref={fadeInRef} className="text-center mb-16 query-card">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Tiered Query Support System</h1>
                    <p className="mt-4 text-lg text-gray-600">Combining AI speed, human expertise, and community wisdom for trusted answers.</p>
                </header>

                <div className="relative">
                    {/* --- Connectors --- */}
                    <div className="absolute top-20 bottom-20 left-1/2 -translate-x-1/2 w-0.5 bg-slate-300"></div>
                    <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
                        <path ref={fadeInRef} d="M 50% 170 C 50% 250, 25% 250, 25% 350" className="connector-path"/>
                        <path ref={fadeInRef} d="M 50% 170 C 50% 250, 75% 250, 75% 350" className="connector-path"/>
                    </svg>

                    {/* --- Flow Start --- */}
                    <FlowCard icon={MessageSquare} title="1. Farmer Submits Query" content="A farmer asks a question in their local language using text, voice, or by uploading an image." color={{ bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-500' }}>
                        <div className="flex justify-end gap-4 mt-3">
                            <div className="flex items-center gap-2 text-slate-500"><FileText size={16} /> Text</div>
                            <div className="flex items-center gap-2 text-slate-500"><Mic size={16} /> Voice</div>
                            <div className="flex items-center gap-2 text-slate-500"><Camera size={16} /> Image</div>
                        </div>
                    </FlowCard>

                    <div ref={fadeInRef} className="h-28 flex items-center justify-center query-card"><BrainCircuit className="w-12 h-12 text-indigo-500" /></div>
                    
                    <FlowCard icon={Bot} title="2. AI First Response" content="An NLP model classifies the query and routes it to the correct engine (Pest, Market, etc.). The AI provides an instant, automated answer with a confidence score." color={{ bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-500' }} />

                    <div ref={fadeInRef} className="h-28 flex items-center justify-center text-center query-card">
                        <div className="p-4 bg-white rounded-xl shadow-md border">
                            <p className="font-bold">Escalation Check</p>
                            <p className="text-sm text-slate-500">Is AI confidence low OR did farmer request help?</p>
                        </div>
                    </div>
                    
                    {/* --- Escalation Paths --- */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <FlowCard icon={UserCheck} title="3a. Escalate to Officer" content="The query appears in the Krishi Adhikari's dashboard, sorted by urgency, for a verified, expert answer." color={{ bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-500' }} />
                        <FlowCard icon={Users} title="3b. Escalate to Community" content="The question is shared with trusted 'Power Farmers' in the same region for peer-to-peer support and practical tips." color={{ bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-500' }} />
                    </div>

                    <div ref={fadeInRef} className="h-28 flex items-center justify-center query-card"><div className="w-0.5 h-full bg-slate-300"></div></div>

                    <FlowCard icon={MessageSquare} title="4. Final Resolution" content="The farmer receives a complete, trustworthy answer combining the AI's speed, the officer's expertise, and the community's wisdom, all in one thread." color={{ bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-500' }}>
                         <div className="mt-3 p-3 bg-slate-100 rounded-lg text-sm">
                            <p><strong>AI:</strong> "Possibly rust disease..."</p>
                            <p><strong>Officer:</strong> "Confirmed. Avoid spraying before expected rain."</p>
                            <p><strong>Community:</strong> "Spraying early morning helps."</p>
                         </div>
                    </FlowCard>
                </div>
            </div>
        </div>
    );
};

export default QueryBotFlowchart;