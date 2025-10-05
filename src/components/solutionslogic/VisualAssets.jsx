import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';

// === DATA: All your visual assets, tables, and PDFs ===
const assetData = [
  // Blockchain Section
  {
    type: 'image',
    title: 'Blockchain',
    src: '/images/architecture/Blockchain.jpg'
  },
  {
    type: 'image',
    title: 'Blockchain',
    src: '/images/architecture/Blockchain1.png'
  },
  {
    type: 'image',
    title: 'Blockchain',
    src: '/images/architecture/Blockchain2.png'
  },
  {
    type: 'image',
    title: 'Blockchain',
    src: '/images/architecture/Blockchain3.png'
  },
  {
    type: 'image',
    title: 'Blockchain',
    src: '/images/architecture/Blockchain4.png'
  },

  // Market Price Prediction
  {
    type: 'image',
    title: 'Market Price Prediction',
    src: '/images/architecture/Market price prediction.jpg'
  },
  {
    type: 'image',
    title: 'Market Price Prediction',
    src: '/images/architecture/Marketprice1.png'
  },
  {
    type: 'image',
    title: 'Market Price Prediction-RNN Model',
    src: '/images/architecture/Price1.png'
  },
  {
    type: 'image',
    title: 'Market Price Prediction-Neural Network',
    src: '/images/architecture/Price2.png'
  },
  {
    type: 'image',
    title: 'Market Price Prediction-LSTM Model',
    src: '/images/architecture/Price3.png'
  },
  {
    type: 'image',
    title: 'Market Price Prediction-Echo State Network',
    src: '/images/architecture/Price4.png'
  },
  {
    type: 'image',
    title: 'Market Price Prediction-GRU Model',
    src: '/images/architecture/Price5.png'
  },
  {
    type: 'image',
    title: 'Market Price Prediction-RMSE of Models',
    src: '/images/architecture/Price6.png'
  },
  {
    type: 'image',
    title: 'Market Price Prediction-RNMSE of Models',
    src: '/images/architecture/Price7.png'
  },
  {
    type: 'image',
    title: 'Market Price Prediction-MAE of Models',
    src: '/images/architecture/Price8.png'
  },

  // ✅ PDF embedded inline (no new tab)
  {
    type: 'pdf',
    title: 'Market Price Prediction - Full Report',
    description: 'Detailed analysis and architecture of our market price forecasting model (ARIMA, LSTM, SVR, etc.)',
    src: 'https://drive.google.com/file/d/1cNAHuVTWfvSAq4GKj2y0hS8r8EOfWFSQ/preview' // Make sure this file is inside /public/images/architecture/
  },

  // Spectral Analysis
  {
    type: 'image',
    title: 'Spectral Health Map',
    src: '/images/architecture/Spectral.jpg'
  },

  // Crop Advisory
  {
    type: 'image',
    title: 'Crop Advisory',
    src: '/images/architecture/Cropadvisory.png'
  },
  {
    type: 'image',
    title: 'Crop Advisory',
    src: '/images/architecture/Crophealth.png'
  },
  {
    type: 'image',
    title: 'Crop Advisory',
    src: '/images/architecture/Crophealth1.png'
  },
  {
    type: 'image',
    title: 'Crop Advisory',
    src: '/images/architecture/Cropadvisory1.png'
  },
  {
    type: 'image',
    title: 'Crop Advisory',
    src: '/images/architecture/Cropadvisory2.png'
  },

  // Pest/Disease
  {
    type: 'image',
    title: 'Pest / Disease Detection',
    src: '/images/architecture/pest2.jpg'
  },
  {
    type: 'image',
    title: 'Pest / Disease Detection',
    src: '/images/architecture/Pest3.jpg'
  },
  {
    type: 'pdf',
    title: 'Pest/Disease Detection -  Report',
    description: 'Detailed analysis and architecture of Pest/Disease Detection Model( RTR_Lite_MobileNetV2,CNN etc) ',
    src: '/images/architecture/Pest4.pdf' // Make sure this file is inside /public/images/architecture/
  },
  {
    type: 'pdf',
    title: 'Pest/Disease Detection -RTR_Lite_MobileNetV2 Report',
    description: 'Detailed analysis and architecture of Pest/Disease Detection Model( RTR_Lite_MobileNetV2) ',
    src: 'https://drive.google.com/file/d/1BeZl-hzSceeW_o5s0qG35iVL4oNjlkB-/preview' // Make sure this file is inside /public/images/architecture/
  },
  {
    type: 'image',
    title: 'Pest / Disease Detection-Models Comparison',
    src: '/images/architecture/Pest5.png'
  },
  {
    type: 'image',
    title: 'Pest / Disease Detection-Models Comparison',
    src: '/images/architecture/Pest6.png'
  },
  {
    type: 'image',
    title: 'Pest / Disease Detection-Models Comparison',
    src: '/images/architecture/Pest7.png'
  },


  // Table: AI Model Results
  {
    type: 'table',
    title: 'Key Findings & Model Performance',
    description: 'A summary of performance metrics across our AI/ML models based on validation datasets.',
    content: (
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-3 font-semibold">AI Model / Technique</th>
            <th className="p-3 font-semibold">Application / Task</th>
            <th className="p-3 font-semibold">Key Metric</th>
            <th className="p-3 font-semibold">Achieved Performance</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3 font-medium">CNN (EfficientNet-B2)</td>
            <td className="p-3">Pest & Disease Detection</td>
            <td className="p-3">Accuracy</td>
            <td className="p-3 font-bold text-green-600">&gt; 97.2%</td>
          </tr>
          <tr className="border-t">
            <td className="p-3 font-medium">XGBoost / Random Forest</td>
            <td className="p-3">Yield Prediction (Tabular Data)</td>
            <td className="p-3">R² Score</td>
            <td className="p-3 font-bold text-green-600">~0.90</td>
          </tr>
          <tr className="border-t">
            <td className="p-3 font-medium">LSTM / GRU</td>
            <td className="p-3">Yield Prediction (Spectral Time-Series)</td>
            <td className="p-3">MAE</td>
            <td className="p-3 font-bold text-green-600">&lt; 8%</td>
          </tr>
          <tr className="border-t">
            <td className="p-3 font-medium">Facebook Prophet / ARIMA</td>
            <td className="p-3">Market Price Forecasting</td>
            <td className="p-3">MAE</td>
            <td className="p-3 font-bold text-green-600">~5%</td>
          </tr>
          <tr className="border-t">
            <td className="p-3 font-medium">Random Forest Classifier</td>
            <td className="p-3">Crop Recommendation</td>
            <td className="p-3">Accuracy</td>
            <td className="p-3 font-bold text-green-600">&gt; 95%</td>
          </tr>
          <tr className="border-t">
            <td className="p-3 font-medium">Fine-tuned LLM (BERT-based)</td>
            <td className="p-3">Query Classification & NLP</td>
            <td className="p-3">F1-Score</td>
            <td className="p-3 font-bold text-green-600">~0.92</td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

// === MAIN COMPONENT ===
const VisualAssets = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="p-8 bg-slate-50 font-sans">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Diagrams, Tables & Findings
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {assetData.map((asset, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg border"
          >
            <h3 className="text-2xl font-bold text-slate-800">{asset.title}</h3>
            {asset.description && (
              <p className="text-slate-600 mt-1 mb-4">{asset.description}</p>
            )}

            {/* === IMAGE === */}
            {asset.type === 'image' && (
              <div
                className="cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setZoomedImage(asset.src)}
              >
                <img
                  src={asset.src}
                  alt={asset.title}
                  className="w-full h-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}

            {/* === TABLE === */}
            {asset.type === 'table' && (
              <div className="overflow-x-auto">{asset.content}</div>
            )}

            {/* === INLINE PDF VIEW === */}
            {asset.type === 'pdf' && (
              <div className="bg-slate-50 border rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-6 h-6 text-indigo-600" />
                  <span className="text-slate-700 font-semibold">
                    {asset.title}
                  </span>
                </div>
                <div className="w-full h-[600px] border rounded-lg overflow-hidden">
                  <iframe
                    src={asset.src}
                    title={asset.title}
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* === ZOOM MODAL FOR IMAGES === */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setZoomedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.7, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.7, y: 50 }}
              src={zoomedImage}
              alt="Zoomed diagram"
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
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

export default VisualAssets;
