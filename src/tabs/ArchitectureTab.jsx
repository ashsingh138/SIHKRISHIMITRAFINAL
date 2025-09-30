import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// The ImageCard now accepts an 'onImageClick' prop to trigger the zoom
const ImageCard = ({ title, description, imgSrc, delay, onImageClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.7, ease: "easeOut" }}
  >
    <h3 className="text-3xl font-bold text-slate-800">{title}</h3>
    <p className="text-slate-600 mt-2 max-w-lg">{description}</p>
    <div 
      className="mt-6 bg-white p-4 rounded-xl shadow-lg border hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      onClick={onImageClick} // Added onClick handler
    >
      <img 
        src={imgSrc} 
        alt={title} 
        className="rounded-lg w-full" 
      />
    </div>
  </motion.div>
);

const ArchitectureTab = () => {
  // NEW: State to track the currently zoomed image
  const [zoomedImage, setZoomedImage] = useState(null);

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
        <ImageCard
          title="Our Workflow"
          description="This diagram illustrates the end-to-end user journey and the logical flow of data from farmer input to actionable, AI-driven insights."
          imgSrc="/images/workflow.png" // Assuming this path is correct in your public folder
          delay={0.2}
          onImageClick={() => setZoomedImage("/images/workflow.png")} // Pass the image source to the state
        />
        <ImageCard
          title="System Architecture"
          description="A detailed look at the robust, scalable, and modern tech stack, showing the key services and their interactions."
          imgSrc="/images/system_architecture.png" // Assuming this path is correct
          delay={0.4}
          onImageClick={() => setZoomedImage("/images/system_architecture.png")} // Pass the image source to the state
        />
      </div>

      {/* NEW: Zoomed Image Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setZoomedImage(null)} // Close modal on backdrop click
          >
            <motion.img
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              src={zoomedImage}
              alt="Zoomed diagram"
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when image is clicked
            />
             <button 
                onClick={() => setZoomedImage(null)} 
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
             >
                <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArchitectureTab;