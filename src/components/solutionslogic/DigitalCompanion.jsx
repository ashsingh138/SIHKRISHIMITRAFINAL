import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Calendar, Server, BrainCircuit, BarChart2, FileText, Award } from 'lucide-react';

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

const FlowStep = ({ icon: Icon, title, content, side, delay, children }) => {
    const fadeInRef = useFadeInObserver();
    const isRight = side === 'right';
    return (
        <div ref={fadeInRef} className="relative w-full md:w-1/2 companion-card" style={{ 
            transitionDelay: `${delay}s`,
            [isRight ? 'marginLeft' : 'marginRight']: '50%',
            [isRight ? 'paddingLeft' : 'paddingRight']: '4rem',
        }}>
            <div className="companion-timeline-dot"></div>
            <div className={`bg-white p-6 rounded-xl shadow-lg border`}>
                <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-8 h-8 text-indigo-500 flex-shrink-0" />
                    <h3 className="font-bold text-xl text-slate-800">{title}</h3>
                </div>
                <p className="text-slate-600 text-sm">{content}</p>
                {children}
            </div>
        </div>
    );
};

const DigitalCompanion = () => {
    const fadeInRef = useFadeInObserver();
    return (
        <div className="p-8 md:p-12 bg-slate-50 font-sans">
            <div className="max-w-4xl mx-auto">
                <header ref={fadeInRef} className="text-center mb-16 companion-card">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Digital Companion & Farm Logbook</h1>
                    <p className="mt-4 text-lg text-gray-600">A smart diary that automatically records farm activities to provide proactive, personalized insights.</p>
                </header>

                <div className="relative">
                    <div className="companion-timeline" style={{ top: '1rem', bottom: '1rem' }}></div>
                    
                    <FlowStep icon={BookOpen} title="1. Effortless Data Capture" content="Farmers log activities via manual entry or one-tap 'Smart Suggestions'." side="left" delay={0.1}>
                        <div className="mt-3 text-xs text-slate-500 space-y-1">
                            <p className="flex items-center gap-2"><MapPin size={14}/> <strong>Location-Based:</strong> "You were in Field A for 2 hours. Log an activity?"</p>
                            <p className="flex items-center gap-2"><Calendar size={14}/> <strong>Calendar-Based:</strong> "Did you apply fertilizer today as recommended?"</p>
                        </div>
                    </FlowStep>
                    
                    <FlowStep icon={Server} title="2. Backend Integration" content="Every log—manual or automated—is securely stored in a structured database, creating a rich history for each farm." side="right" delay={0.2} />

                    <FlowStep icon={BrainCircuit} title="3. AI Feedback Loop" content="The logged activity is fed back into our AI engines, making future recommendations more accurate and truly personalized to the farmer's actual practices." side="left" delay={0.3} />
                    
                    <FlowStep icon={BarChart2} title="4. Intelligent Insights" content="The companion analyzes the logbook to generate proactive advice and identify trends." side="right" delay={0.4}>
                         <div className="mt-3 p-3 bg-blue-50 text-blue-800 rounded-lg text-sm">
                            <strong>AI Suggestion:</strong> "Your log shows last year's paddy yield was low. Try crop rotation with legumes to improve soil nitrogen."
                        </div>
                    </FlowStep>
                    
                    <FlowStep icon={FileText} title="5. Digital Proof & Compliance" content="The logbook acts as a verifiable digital record of productivity and sustainable practices." side="left" delay={0.5}>
                        <p className="mt-3 text-xs text-green-600 font-semibold">Used for: Crop Insurance Claims, Subsidy Applications, and Bank Loans.</p>
                    </FlowStep>

                    <FlowStep icon={Award} title="6. Gamification Integration" content="Regularly updating the logbook earns farmers bonus points and badges in the Sustainability Hub, creating a positive feedback loop." side="right" delay={0.6} />
                </div>
            </div>
        </div>
    );
};

export default DigitalCompanion;