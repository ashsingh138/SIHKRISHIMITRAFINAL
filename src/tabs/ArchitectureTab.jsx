import React from "react";
import { motion } from "framer-motion";

const ImageCard = ({ title, description, imgSrc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.7, ease: "easeOut" }}
  >
    <h3 className="text-3xl font-bold text-slate-800">{title}</h3>
    <p className="text-slate-600 mt-2 max-w-lg">{description}</p>
    <div className="mt-6 bg-white p-4 rounded-xl shadow-lg border hover:shadow-2xl transition-shadow duration-300">
      <img 
        src={imgSrc} 
        alt={title} 
        className="rounded-lg w-full" 
      />
    </div>
  </motion.div>
);

const ArchitectureTab = () => {
  return (
    <div className="p-8 md:p-12 bg-slate-50 min-h-screen">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-bold text-center mb-4 animated-gradient-text">
          System & Workflow Overview
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto">
          A high-level look at the data flow and technical infrastructure that power the Krishi Mitra ecosystem.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
        {/* Workflow Image Column */}
        <ImageCard
          title="Our Workflow"
          description="This diagram illustrates the end-to-end user journey and the logical flow of data from farmer input to actionable, AI-driven insights."
          imgSrc="/images/workflow.png"
          delay={0.2}
        />

        {/* System Architecture Image Column */}
        <ImageCard
          title="System Architecture"
          description="A detailed look at the robust, scalable, and modern tech stack, showing the key services and their interactions."
          imgSrc="/images/system_architecture.png"
          delay={0.4}
        />
      </div>
    </div>
  );
};

export default ArchitectureTab;