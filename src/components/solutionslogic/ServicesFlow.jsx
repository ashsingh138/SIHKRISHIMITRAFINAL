import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Bell, Youtube, Server, Smartphone, FileJson, ArrowDown, MessageSquare, Mail } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const FlowSection = ({ icon: Icon, title, color, children }) => (
    <motion.div variants={itemVariants}>
        <h3 className={`flex items-center gap-3 text-2xl font-bold mb-4 ${color}`}>
            <Icon className="w-8 h-8" />
            {title}
        </h3>
        <div className="space-y-4">{children}</div>
    </motion.div>
);

const StepCard = ({ icon: Icon, step, description, children }) => (
    <div className="flex items-start gap-4">
        <div className="bg-slate-100 p-3 rounded-full mt-1">
            <Icon className="w-6 h-6 text-slate-600" />
        </div>
        <div>
            <h4 className="font-bold text-slate-800">{step}</h4>
            <p className="text-slate-600 text-sm">{description}</p>
            {children}
        </div>
    </div>
);

const ServicesFlow = () => {
    return (
        <div className="p-8 md:p-12 bg-slate-50 font-sans">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <motion.header variants={itemVariants} className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Core Service Implementation</h1>
                    <p className="mt-4 text-lg text-gray-600">A breakdown of how key supporting features are implemented using robust and free-to-use technologies.</p>
                </motion.header>

                <div className="space-y-12">
                    {/* --- 1. Multilingual Support --- */}
                    <FlowSection icon={Languages} title="Multilingual & Regional Language Support" color="text-blue-600">
                        <div className="service-card border-t-blue-500">
                            <StepCard icon={FileJson} step="Step 1: Translation Files" description="All app text is stored in language-specific JSON files (en.json, hi.json). This is managed by the free 'i18next' library." />
                            <ArrowDown className="w-6 h-6 text-slate-300 mx-auto my-2" />
                            <StepCard icon={Smartphone} step="Step 2: App Integration" description="The React Native app uses the 'react-i18next' hook to dynamically load the correct text based on the user's saved language preference." />
                        </div>
                    </FlowSection>
                    
                    {/* --- 2. Alert System (UPDATED) --- */}
                    <FlowSection icon={Bell} title="Alert Notification System" color="text-purple-600">
                        <div className="service-card border-t-purple-500">
                            <StepCard icon={Server} step="Step 1: Backend Trigger" description="An event (e.g., pest risk) is detected in your Node.js backend." />
                            <ArrowDown className="w-6 h-6 text-slate-300 mx-auto my-2" />
                            <StepCard icon={Bell} step="Step 2: Notification Delivery" description="The backend routes the alert through the appropriate service based on user preference and urgency.">
                                <ul className="mt-3 space-y-3 text-sm">
                                    <li className="flex gap-3">
                                        <Smartphone className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <strong className="text-slate-700">Push Notification (Primary)</strong>
                                            <p className="text-xs text-slate-500">Service: Firebase Cloud Messaging (FCM) | Cost: <span className="font-bold text-green-600">Free</span></p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <MessageSquare className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <strong className="text-slate-700">WhatsApp Message</strong>
                                            <p className="text-xs text-slate-500">Service: Twilio API (or similar) | Cost: <span className="font-bold text-red-600">Paid</span> (per message)</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <strong className="text-slate-700">SMS Message (Fallback)</strong>
                                            <p className="text-xs text-slate-500">Service: Twilio API (or similar) | Cost: <span className="font-bold text-red-600">Paid</span> (per message)</p>
                                        </div>
                                    </li>
                                </ul>
                            </StepCard>
                            <ArrowDown className="w-6 h-6 text-slate-300 mx-auto my-2" />
                            <StepCard icon={Smartphone} step="Step 3: Alert Received" description="The farmer receives the alert on their phone via the chosen method." />
                        </div>
                    </FlowSection>

                    {/* --- 3. Video Tutorials --- */}
                    <FlowSection icon={Youtube} title="Video Tutorials" color="text-red-600">
                         <div className="service-card border-t-red-500">
                            <StepCard icon={Youtube} step="Step 1: Video Hosting" description="All tutorial videos are uploaded to YouTube as 'Unlisted'. This provides free, high-performance video hosting and streaming." />
                            <ArrowDown className="w-6 h-6 text-slate-300 mx-auto my-2" />
                            <StepCard icon={Server} step="Step 2: Content Management" description="Your backend stores the YouTube video ID, title, and category for each tutorial in a database." />
                            <ArrowDown className="w-6 h-6 text-slate-300 mx-auto my-2" />
                            <StepCard icon={Smartphone} step="Step 3: In-App Playback" description="The app fetches the video list from your API and uses the free 'react-youtube' library to embed and play the videos seamlessly." />
                        </div>
                    </FlowSection>
                </div>
            </motion.div>
        </div>
    );
};

export default ServicesFlow;