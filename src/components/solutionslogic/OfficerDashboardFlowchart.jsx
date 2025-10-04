import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Server,
  LayoutDashboard,
  BarChart,
  Map,
  Siren,
  CheckCircle,
  FileDown,
  Send,
  ArrowDown,
  Activity,
  AlertTriangle,
  Cloud,
  Layers,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FlowCard = ({ children, className = "" }) => (
  <motion.div
    variants={itemVariants}
    className={`bg-white p-6 rounded-xl shadow-lg border ${className}`}
  >
    {children}
  </motion.div>
);

const Arrow = () => (
  <motion.div variants={itemVariants}>
    <ArrowDown className="w-10 h-10 text-slate-300 my-4 mx-auto" />
  </motion.div>
);

const OfficerDashboardFlowchart = () => {
  return (
    <div className="p-8 md:p-12 bg-slate-50 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* --- HEADER --- */}
        <motion.header variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Krishi Adhikari Dashboard Flow
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            How the Officer Dashboard integrates multi-source intelligence to
            provide real-time agricultural governance and actionable insights.
          </p>
        </motion.header>

        {/* --- STEP 1 --- */}
        <FlowCard>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">
            1️⃣ Data Sources & Pipelines
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <Database className="mx-auto w-6 h-6 text-blue-600 mb-1" />
              <p className="text-xs font-semibold">
                Farmer App Logs (Queries, Activities)
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-100">
              <Cloud className="mx-auto w-6 h-6 text-green-600 mb-1" />
              <p className="text-xs font-semibold">
                Satellite & Weather Data (NDVI, Rainfall, Temp)
              </p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
              <Layers className="mx-auto w-6 h-6 text-purple-600 mb-1" />
              <p className="text-xs font-semibold">
                Blockchain Ledger (Supply Chain Events)
              </p>
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 2 --- */}
        <FlowCard>
          <div className="flex items-center gap-3">
            <Server className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold">
                Backend Processing (Node.js + FastAPI)
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Dedicated microservices fetch, clean, and analyze the raw data, preparing it for the dashboard via secure APIs
              </p>
             
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 3 --- */}
        <FlowCard>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
            2️⃣ Officer Dashboard Interface (React)
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <LayoutDashboard size={20} className="text-blue-500" />
                <h4 className="font-semibold">Key Performance Indicators</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-red-50 p-2 rounded border">
                  <strong>12</strong>
                  <p>Active Outbreaks</p>
                </div>
                <div className="bg-yellow-50 p-2 rounded border">
                  <strong>327</strong>
                  <p>Pending Queries</p>
                </div>
                <div className="bg-green-50 p-2 rounded border">
                  <strong>1,247</strong>
                  <p>Farmers Served</p>
                </div>
                <div className="bg-blue-50 p-2 rounded border">
                  <strong>2.5 hrs</strong>
                  <p>Avg Response</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <Siren size={20} className="text-red-500" />
                <h4 className="font-semibold">Urgent Alerts Panel</h4>
              </div>
              <div className="text-sm bg-red-50 p-2 rounded-lg border border-red-200">
                ⚠️ Locust outbreak reported in District X
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BarChart size={20} className="text-purple-500" />
                <h4 className="font-semibold">Visual Insights & Trends</h4>
              </div>
              <ul className="list-disc list-inside text-slate-600 text-xs space-y-1">
                <li>📈 Line Chart – Query Volume Over Time</li>
                <li>🦠 Heatmap – Outbreak Hotspots by Season</li>
                <li>🌱 Radar Chart – Sustainability Index by District</li>
                <li>⏳ Bar Chart – Avg Response Time per District</li>
              </ul>

              <div className="flex items-center gap-3 mt-4">
                <Map size={20} className="text-green-500" />
                <h4 className="font-semibold">Interactive Map View</h4>
              </div>
              <p className="text-xs text-slate-500">
                Color-coded map showing regional stress zones (drought, pest,
                flood). Click a district to drill down for detailed metrics.
              </p>
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 4 --- */}
        <FlowCard>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
            3️⃣ Officer Actions & Controls
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <CheckCircle className="mx-auto w-6 h-6 text-green-600 mb-1" />
              <p className="text-xs font-semibold">✅ Verify Supply Chain</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <FileDown className="mx-auto w-6 h-6 text-blue-600 mb-1" />
              <p className="text-xs font-semibold">📊 Export Reports</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <Send className="mx-auto w-6 h-6 text-purple-600 mb-1" />
              <p className="text-xs font-semibold">📝 Resolve Queries</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg border border-red-200">
              <AlertTriangle className="mx-auto w-6 h-6 text-red-600 mb-1" />
              <p className="text-xs font-semibold">🚨 Acknowledge Alerts</p>
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 5 --- */}
        <FlowCard>
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-emerald-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold">
                4️⃣ Outcome – Data-Driven Agricultural Governance
              </h4>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2 text-sm">
                <li>📍 Officers gain district-level situational awareness.</li>
                <li>
                  ⚡ Rapid response to disease outbreaks and supply chain issues.
                </li>
                <li>
                  🌿 Improved sustainability planning and policy decision support.
                </li>
              </ul>
            </div>
          </div>
        </FlowCard>
      </motion.div>
    </div>
  );
};

export default OfficerDashboardFlowchart;
