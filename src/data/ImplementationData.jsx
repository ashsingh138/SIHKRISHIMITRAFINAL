import React from 'react';

// CORRECT: Import flowcharts & components
import GamificationFlowchart from '../components/solutionslogic/GamificationFlowChart';
import CropAdvisoryFlowchart from '../components/solutionslogic/CropAdvisoryFlowChart';
import PestDetectionFlowchart from '../components/solutionslogic/PestDetectionFlowChart';
import SpectralCropHealth from '../components/solutionslogic/SpectralCropHealth';
import BlockchainTraceability from '../components/solutionslogic/BlockChainTracability';
import MarketPriceFlowchart from '../components/solutionslogic/MarketPricePrediction';
import YieldPredictionFlowchart from '../components/solutionslogic/YieldPredictionFlowChart';
import CodeSnippetGallery from '../components/implementation/CodeSnippetGallery';
import SoilWeatherIntelligence from '../components/solutionslogic/SoilWeatherIntelligence';
import QueryBotFlowchart from '../components/solutionslogic/QueryBotFlowChart';
import TechStackDetails from '../components/solutionslogic/TechStackDetails';
import VisualAssets from '../components/solutionslogic/VisualAssets';
import DigitalCompanion from '../components/solutionslogic/DigitalCompanion';
import ServicesFlow from '../components/solutionslogic/ServicesFlow';
import QueryManagementFlowchart from '../components/solutionslogic/QueryManagementFlowchart';
import OutbreakMonitoring from '../components/solutionslogic/OutbreakMonitoring';
import RegionalAnalyticsFlowchart from '../components/solutionslogic/RegionalAnalyticsFlowchart';
import SchemeAndAlerts from '../components/solutionslogic/SchemeAndAlerts';
import SupplyChainFlowchart from '../components/solutionslogic/SupplyChainFlowchart';
import OfficerDashboardFlowchart from '../components/solutionslogic/OfficerDashboardFlowchart';
import MultiRole from '../components/solutionslogic/MultiRole';

// --- ARRAY 1: Interactive Flows ---
export const interactiveFlowsData = [
  // Kisan Sathi (11 features)
  {
    id: 'crop-advisory',
    title: 'Crop Advisory Engine',
    icon: 'sprout',
    description: 'AI-driven recommendations for crops, fertilizers, and irrigation schedules.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <CropAdvisoryFlowchart /> }
  },
  {
    id: 'pest-detection',
    title: 'Pest & Disease Detection',
    icon: 'bug',
    description: 'A CNN model to identify plant diseases from leaf images.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <PestDetectionFlowchart /> }
  },
  {
    id: 'yield-prediction',
    title: 'Yield Prediction Engine',
    icon: 'bar-chart-2',
    description: 'A hybrid ML system for forecasting crop yield and profit margins.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <YieldPredictionFlowchart /> }
  },
  {
    id: 'market-price',
    title: 'Market Price Intelligence',
    icon: 'trending-up',
    description: 'An ML model for price forecasting and selling suggestions.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <MarketPriceFlowchart /> }
  },
  {
    id: 'spectral-analysis',
    title: 'Spectral Analysis Engine',
    icon: 'satellite',
    description: 'Processes Sentinel-2 imagery to calculate NDVI for crop health.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <SpectralCropHealth /> }
  },
  {
    id: 'blockchain',
    title: 'Blockchain Traceability',
    icon: 'qr-code',
    description: 'A smart contract system for farm-to-fork produce traceability.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <BlockchainTraceability /> }
  },
  {
    id: 'query-support',
    title: 'Smart Query Support',
    icon: 'message-square',
    description: 'A tiered system combining AI, human experts, and community help.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <QueryBotFlowchart /> }
  },
  {
    id: 'soil-weather',
    title: 'Soil & Weather Intelligence',
    icon: 'cloud-sun',
    description: 'A dual-pipeline for soil health cards and hyper-local weather alerts.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <SoilWeatherIntelligence /> }
  },
  {
    id: 'gamification',
    title: 'Gamified Sustainability',
    icon: 'award',
    description: 'Interactive missions, badges, and leaderboard for sustainable farming.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <GamificationFlowchart /> }
  },
  {
    id: 'digital-companion',
    title: 'Digital Farm Companion',
    icon: 'book-open',
    description: 'An intelligent logbook that learns from farmer activities to provide proactive advice.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <DigitalCompanion /> }
  },
  {
    id: 'supporting-services',
    title: 'Supporting Services',
    icon: 'wrench',
    description: 'Multilingual support, WhatsApp/SMS alerts, and video tutorials.',
    app: 'Kisan Sathi',
    modalContent: { type: 'component', component: <ServicesFlow /> }
  },

  // Krishi Adhikari (7 features)
  {
    id: 'query-management',
    title: 'Farmer Query Management',
    icon: 'inbox',
    description: 'Workflow for escalating and resolving farmer queries with expert oversight.',
    app: 'Krishi Adhikari',
    modalContent: { type: 'component', component: <QueryManagementFlowchart /> }
  },
  {
    id: 'outbreak-monitoring',
    title: 'Outbreak Monitoring Dashboard',
    icon: 'siren',
    description: 'Live heatmap for tracking disease outbreaks and issuing targeted advisories.',
    app: 'Krishi Adhikari',
    modalContent: { type: 'component', component: <OutbreakMonitoring /> }
  },
  {
    id: 'regional-analytics',
    title: 'Regional Analytics Dashboard',
    icon: 'map',
    description: 'Macro-level insights for planning across districts and regions.',
    app: 'Krishi Adhikari',
    modalContent: { type: 'component', component: <RegionalAnalyticsFlowchart /> }
  },
  {
    id: 'scheme-and-alerts',
    title: 'Scheme & Alert System',
    icon: 'megaphone',
    description: 'Managing schemes and broadcasting alerts to farmers in real-time.',
    app: 'Krishi Adhikari',
    modalContent: { type: 'component', component: <SchemeAndAlerts /> }
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Oversight',
    icon: 'qr-code',
    description: 'Track and verify produce at every stage of the supply chain.',
    app: 'Krishi Adhikari',
    modalContent: { type: 'component', component: <SupplyChainFlowchart /> }
  },
  {
    id: 'officer-dashboard',
    title: 'Krishi Adhikari Dashboard',
    icon: 'layout-dashboard',
    description: 'Turns complex agri-data into a real-time officer command center.',
    app: 'Krishi Adhikari',
    modalContent: { type: 'component', component: <OfficerDashboardFlowchart /> }
  },
  {
    id: 'multi-role-access',
    title: 'Multi-Role Access Control',
    icon: 'users',
    description: 'Secure login flows for officers, farmers, distributors, and consumers.',
    app: 'Krishi Adhikari',
    modalContent: { type: 'component', component: <MultiRole /> }
  },
];

// --- ARRAY 2: Assets & Resources ---
export const technicalAssetsData = [
  {
    id: 'code-snippets',
    title: 'Code & Output Snippets',
    icon: 'code',
    description: 'View backend and AI model snippets.',
    modalContent: { type: 'component', component: <CodeSnippetGallery /> }
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack & Datasets',
    icon: 'layers',
    description: 'Detailed breakdown of technologies, APIs, and data sources.',
    modalContent: { type: 'component', component: <TechStackDetails /> }
  },
  {
    id: 'visual-assets',
    title: 'Diagrams & Findings',
    icon: 'image',
    description: 'System architecture diagrams and key model metrics.',
    modalContent: { type: 'component', component: <VisualAssets /> }
  },
];
