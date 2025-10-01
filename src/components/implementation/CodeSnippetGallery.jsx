import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../Icon';

// This is the data for your code snippets. Add your images and titles here.
const snippets = [
  { title: "Spectral Crop Health Map code", src: "/images/code/SpectralCropHealth.png" },
  { title: "Spectral Output", src: "/images/code/SpectralCrophealthoutput.png" },
  { title: "Yield Prediction  Democode", src: "/images/code/YieldPrediction.png" },
  { title: "Smart Crop Advisory Democode", src: "/images/code/Cropadvisory.png" },
  { title: "Yield Prediction Democode", src: "/images/code/yield2.png" },
  { title: "Market Price Prediction Democode", src: "/images/code/Price1.png" },
  { title: "Market Price Prediction Democode", src: "/images/code/Price2.png" },
  { title: "Market Price Prediction Democode", src: "/images/code/Price3.png" },
  { title: "Supply Chain Traceability by Blockchain", src: "/images/code/BlockChain.jpg" },
  { title: "Blockchain Output", src: "/images/code/Blockchain output.png" },
  { title: "Blockchain Output", src: "/images/code/Blockchainoutput1.png" },
  { title: "Blockchain Output", src: "/images/code/Blockchainoutput3.png" },
  { title: "Pest/Disease Detection PseudoCode", src: "/images/code/Pest.png" },
  // Add more images as needed
];

const CodeSnippetGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {snippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="border rounded-lg shadow-sm bg-white overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(snippet.src)}
            whileHover={{ y: -5, shadow: "lg" }}
          >
            <div className="p-3 border-b">
              <h4 className="font-semibold text-slate-700">{snippet.title}</h4>
            </div>
            <img src={snippet.src} alt={snippet.title} className="w-full h-auto" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              src={selectedImage}
              alt="Zoomed code snippet"
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when image is clicked
            />
             <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors">
                <Icon name="x" className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodeSnippetGallery;