import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  QrCode,
  Server,
  UserCheck,
  Check,
  AlertTriangle,
  ShieldCheck,
  ArrowDown,
  Database,
  Filter,
  Eye,
  FileText,
  Network,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
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

const SupplyChainFlowchart = () => {
  return (
    <div className="p-8 md:p-12 bg-slate-50 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* --- HEADER --- */}
        <motion.header variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Supply Chain Oversight & Verification
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            How officers ensure transparency and trust from farm to fork using
            blockchain-backed validation within the Krishi Adhikari dashboard.
          </p>
        </motion.header>

        {/* --- STEP 1 --- */}
        <FlowCard>
          <div className="flex items-center gap-4">
            <Leaf className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                1. Data Origination at the Farm
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Farmers log harvest details — crop type, quantity, and images —
                in the <strong>Kisan Sathi</strong> app. This initiates a new
                supply chain batch.
              </p>
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 2 --- */}
        <FlowCard>
          <div className="flex items-center gap-4">
            <QrCode className="w-8 h-8 text-slate-700 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                2. Blockchain Record & QR Code
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Each produce batch is assigned a unique QR code. Data is written
                immutably on the blockchain — including timestamps, farmer ID,
                and product metadata.
              </p>
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 3 --- */}
        <FlowCard>
          <div className="flex items-center gap-4">
            <Database className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                3. Backend & Smart Contract Integration
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                The backend syncs blockchain data with a PostgreSQL database,
                enabling fast queries and filtering by status, crop type, or
                location. Smart contracts hold verification states:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-500 mt-2">
                <li>
                  <b>Pending</b> — Awaiting officer review.
                </li>
                <li>
                  <b>Verified</b> — Confirmed as authentic.
                </li>
                <li>
                  <b>Flagged</b> — Marked incorrect or fraudulent.
                </li>
              </ul>
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 4 --- */}
        <FlowCard>
          <div className="flex items-center gap-4">
            <Server className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                4. Officer Dashboard View
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                On the <strong>Krishi Adhikari</strong> dashboard, all batches
                appear under the “Supply Chain Oversight” tab. Officers can:
              </p>
              <ul className="list-disc list-inside text-slate-600 text-sm mt-2 space-y-1">
                <li>Filter by verification status, stage, and district.</li>
                <li>View full produce history and ownership timeline.</li>
                <li>Access farmer details and original uploads.</li>
              </ul>
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 5 --- */}
        <FlowCard className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            5. Officer Verification Workflow
          </h3>
          <p className="text-slate-500 text-sm mb-4">
            Officers review data and take one of the following actions:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Check className="mx-auto w-6 h-6 text-green-600 mb-1" />
              <h4 className="font-semibold">Verify Batch</h4>
              <p className="text-xs text-slate-500">
                Confirms authenticity and updates the blockchain record to
                “Verified.” Automatically notifies all stakeholders.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <AlertTriangle className="mx-auto w-6 h-6 text-red-600 mb-1" />
              <h4 className="font-semibold">Flag as Incorrect</h4>
              <p className="text-xs text-slate-500">
                Marks the record as suspicious, stores officer remarks, and
                triggers an alert for farmer review and re-verification.
              </p>
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 6 --- */}
        <FlowCard>
          <div className="flex items-center gap-4">
            <Eye className="w-8 h-8 text-purple-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                6. Real-Time Monitoring & Analytics
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Officers can visualize the number of verified vs. flagged
                batches, trace supply chain delays, and identify hotspots of
                fraud using district-level analytics.
              </p>
            </div>
          </div>
        </FlowCard>
        <Arrow />

        {/* --- STEP 7 --- */}
        <FlowCard>
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                7. Outcome: A Trusted, Transparent Supply Chain
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2 text-sm">
                <li>
                  <b>Farmers</b> gain credibility and premium prices.
                </li>
                <li>
                  <b>Officers</b> ensure accountability and fraud prevention.
                </li>
                <li>
                  <b>Consumers</b> get confidence in origin, quality, and
                  handling of produce.
                </li>
              </ul>
            </div>
          </div>
        </FlowCard>
      </motion.div>
    </div>
  );
};

export default SupplyChainFlowchart;
