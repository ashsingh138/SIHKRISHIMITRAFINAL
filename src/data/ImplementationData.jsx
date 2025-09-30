import React from 'react';

// CORRECTED: Import paths now point to your 'solutionslogic' folder
import GamificationFlowchart from '../components/solutionslogic/GamificationFlowChart';
import CropAdvisoryFlowchart from '../components/solutionslogic/CropAdvisoryFlowChart';
import PestDetectionFlowchart from '../components/solutionslogic/PestDetectionFlowChart';
import SpectralCropHealth from '../components/solutionslogic/SpectralCropHealth';
import BlockchainTraceability from '../components/solutionslogic/BlockChainTracability';
import MarketPriceFlowchart from '../components/solutionslogic/MarketPricePrediction';
import YieldPredictionFlowchart from '../components/solutionslogic/YieldPredictionFlowChart';
import CodeSnippetGallery from '../components/implementation/CodeSnippetGallery'; // NEW: Import the gallery
import SoilWeatherIntelligence from '../components/solutionslogic/SoilWeatherIntelligence';
import QueryBotFlowchart from '../components/solutionslogic/QueryBotFlowChart';
import TechStackDetails from '../components/solutionslogic/TechStackDetails'; // NEW: Import Tech Stack
import VisualAssets from '../components/solutionslogic/VisualAssets'; 
export const interactiveFlowsData = [
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
    modalContent: { type: 'component', component: <PestDetectionFlowchart /> }
  },
   {
    id: 'yield-prediction',
    title: 'Yield Prediction Engine',
    icon: 'bar-chart-2',
    description: 'A hybrid ML system for forecasting crop yield and profit margins.',
    modalContent: { type: 'component', component: <YieldPredictionFlowchart /> }
  },
  {
    id: 'market-price',
    title: 'Market Price Intelligence',
    icon: 'trending-up',
    description: 'An ML model for price forecasting and selling suggestions.',
    modalContent: { type: 'component', component: <MarketPriceFlowchart /> }
  },
  {
    id: 'spectral-analysis',
    title: 'Spectral Analysis Engine',
    icon: 'satellite',
    description: 'Processes Sentinel-2 imagery to calculate NDVI for crop health.',
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
    id: 'query-support',
    title: 'Smart Query Support',
    icon: 'message-square',
    description: 'A tiered system combining AI, human experts, and community help.',
    modalContent: { type: 'component', component: <QueryBotFlowchart /> }
  },
  {
    id: 'soil-weather',
    title: 'Soil & Weather Intelligence',
    icon: 'cloud-sun',
    description: 'A dual-pipeline for soil health cards and hyper-local weather alerts.',
    modalContent: { type: 'component', component: <SoilWeatherIntelligence /> }
  },
  {
    id: 'gamification',
    title: 'Gamified Sustainability',
    icon: 'award',
    description: 'Interactive flowchart detailing our system for encouraging sustainable practices.',
    modalContent: { type: 'component', component: <GamificationFlowchart /> }
  },
];

// --- ARRAY 2: For the "Assets & Resources" section ---
export const technicalAssetsData = [
    {
        id: 'code-snippets',
        title: 'Code & Output Snippets',
        icon: 'code',
        description: 'View key code and output snippets from our backend and AI models.',
        modalContent: { type: 'component', component: <CodeSnippetGallery /> }
    },
    {
        id: 'tech-stack',
        title: 'Tech Stack & Datasets',
        icon: 'layers',
        description: 'A detailed breakdown of the technologies, APIs, and data sources we use.',
        modalContent: { type: 'component', component: <TechStackDetails /> }
    },
    {
        id: 'visual-assets',
        title: 'Diagrams & Findings',
        icon: 'image',
        description: 'View our system architecture diagrams and key model performance metrics.',
        modalContent: { type: 'component', component: <VisualAssets /> }
    },
];