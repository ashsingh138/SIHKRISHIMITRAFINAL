import React from 'react';
import { motion } from 'framer-motion';
import { Users, KeyRound, Waypoints, LayoutDashboard, Truck, ScanLine, ArrowDown } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const FlowCard = ({ icon: Icon, title, description, color, children }) => (
    <motion.div variants={itemVariants} className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color}`}>
        <div className="flex items-center gap-4 mb-3">
            <Icon className="w-8 h-8 text-slate-700 flex-shrink-0" />
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{description}</p>
        {children}
    </motion.div>
);

const Arrow = () => (
    <motion.div variants={itemVariants}>
        <ArrowDown className="w-10 h-10 text-slate-300 my-4 mx-auto" />
    </motion.div>
);

const RoleCard = ({ icon: Icon, title, permissions, color }) => (
    <motion.div variants={itemVariants} className={`bg-white p-6 rounded-xl shadow-lg border-t-4 h-full ${color}`}>
        <div className="flex flex-col items-center text-center">
            <div className={`p-3 rounded-full mb-3 bg-opacity-20 ${color.replace('border-', 'bg-')}`}>
                <Icon className={`w-8 h-8 ${color.replace('border-', 'text-')}`} />
            </div>
            <h4 className="font-bold text-lg text-slate-800">{title}</h4>
            <ul className="mt-2 text-sm text-slate-600 list-disc list-inside text-left">
                {permissions.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
        </div>
    </motion.div>
);

const MultiRole = () => {
    return (
        <div className="p-8 md:p-12 bg-slate-50 font-sans">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto flex flex-col items-center"
            >
                <motion.header variants={itemVariants} className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Multi-Role Access Control Flow</h1>
                    <p className="mt-4 text-lg text-gray-600">How our system provides a secure, tailored experience for every user in the ecosystem.</p>
                </motion.header>

                <FlowCard icon={Users} title="1. Unified Login" description="All users (Officers, Retailers, Consumers) start at a single, secure login screen, entering their credentials." color="border-blue-500" />
                <Arrow />

                <FlowCard icon={KeyRound} title="2. Backend Authentication (RBAC)" description="The Node.js backend validates the user's credentials and issues a secure JWT (JSON Web Token) containing a specific 'role' claim." color="border-slate-500">
                    <pre className="mt-3 bg-slate-800 text-slate-300 p-2 rounded-lg text-xs"><code>{`{ "userId": "12345", "role": "OFFICER" }`}</code></pre>
                </FlowCard>
                <Arrow />
                
                <FlowCard icon={Waypoints} title="3. Frontend Role-Based Routing" description="The React application inspects the role inside the JWT and dynamically routes the user to the appropriate dashboard, ensuring they only see the features they are authorized to access." color="border-purple-500" />

                {/* --- Branching Visualization --- */}
                <motion.div variants={itemVariants} className="w-full flex justify-center my-8">
                     <svg width="100%" height="60" viewBox="0 0 400 60">
                        <path d="M 200 0 V 20" stroke="#cbd5e1" strokeWidth="2" />
                        <path d="M 200 20 C 200 40, 50 40, 50 60" stroke="#cbd5e1" strokeWidth="2" fill="none"/>
                        <path d="M 200 20 C 200 40, 200 40, 200 60" stroke="#cbd5e1" strokeWidth="2" fill="none"/>
                        <path d="M 200 20 C 200 40, 350 40, 350 60" stroke="#cbd5e1" strokeWidth="2" fill="none"/>
                     </svg>
                </motion.div>

                {/* --- Role-Specific Dashboards --- */}
                <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8 w-full">
                    <RoleCard 
                        icon={LayoutDashboard} 
                        title="Officer Dashboard"
                        permissions={["Full analytics access", "Monitor regional stress zones", "Verify/Flag supply chain", "Resolve farmer queries"]}
                        color="border-indigo-500"
                    />
                     <RoleCard 
                        icon={Truck} 
                        title="Retailer / Transporter"
                        permissions={["Scan QR codes", "Add their stage to the supply chain", "View their own transaction history", "No access to regional analytics"]}
                        color="border-amber-500"
                    />
                     <RoleCard 
                        icon={ScanLine} 
                        title="Consumer"
                        permissions={["Scan QR codes on products", "View the complete, verified journey", "Read-only access to traceability data", "No login required for scanning"]}
                        color="border-green-500"
                    />
                </motion.div>

            </motion.div>
        </div>
    );
};

export default MultiRole;