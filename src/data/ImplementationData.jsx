import React from 'react';

// CORRECTED: Import paths now point to your 'solutionslogic' folder
import GamificationFlowchart from '../components/solutionslogic/GamificationFlowChart';
import CropAdvisoryFlowchart from '../components/solutionslogic/CropAdvisoryFlowChart';
import PestDetectionFlowChart from '../components/solutionslogic/PestDetectionFlowChart';
import SpectralCropHealth from '../components/solutionslogic/SpectralCropHealth';
import BlockchainTraceability from '../components/solutionslogic/BlockChainTracability';
import MarketPriceFlowchart from '../components/solutionslogic/MarketPricePrediction';
import YieldPredictionFlowchart from '../components/solutionslogic/YieldPredictionFlowChart';
import CodeSnippetGallery from '../components/implementation/CodeSnippetGallery'; // NEW: Import the gallery

export const implementationData = [
  {
    id: 'crop-advisory',
    title: 'Crop Advisory Engine',
    icon: 'sprout',
    description: 'AI-driven recommendations for crops, fertilizers, and irrigation schedules.',
    modalContent: { type: 'component', component: <CropAdvisoryFlowchart /> }
  },
  {
    id: 'pest-detection',
    title: 'Pest & Disease Detection',
    icon: 'bug',
    description: 'A CNN model to identify plant diseases from leaf images.',
    modalContent: { type: 'component', component: <PestDetectionFlowChart /> }
  },
  {
    id: 'gamification',
    title: 'Gamified Sustainability',
    icon: 'award',
    description: 'Interactive flowchart detailing the system for encouraging sustainable practices.',
    modalContent: { type: 'component', component: <GamificationFlowchart /> }
  },
  {
    id: 'spectral-analysis',
    title: 'Spectral Analysis Engine',
    icon: 'satellite',
    description: 'Processes Sentinel-2 satellite imagery to calculate NDVI for crop health.',
    modalContent: { type: 'component', component: <SpectralCropHealth /> }
  },
  {
    id: 'blockchain',
    title: 'Blockchain Traceability',
    icon: 'qr-code',
    description: 'A smart contract system for farm-to-fork produce traceability.',
    modalContent: { type: 'component', component: <BlockchainTraceability /> }
  },
  {
    id: 'market-price',
    title: 'Market Price Intelligence',
    icon: 'trending-up',
    description: 'An ML model for price forecasting and selling suggestions.',
    modalContent: { type: 'component', component: <MarketPriceFlowchart /> }
  },
  {
    id: 'yield-prediction',
    title: 'Yield Prediction Engine',
    icon: 'bar-chart-2',
    description: 'A hybrid ML system for forecasting crop yield and profit margins.',
    modalContent: { type: 'component', component: <YieldPredictionFlowchart /> }
  },
  {
    id: 'code-snippets', // REPLACED tech-stack with this new item
    title: 'Code  & Output Snippets',
    icon: 'code',
    description: 'View key code and output snippets.',
    modalContent: {
      type: 'component',
      component: <CodeSnippetGallery />,
    }
  },
];