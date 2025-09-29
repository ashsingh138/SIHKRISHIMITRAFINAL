// src/components/PestDetectionFlowchart.jsx

import React, { useState, useRef, useLayoutEffect } from 'react';

// --- Data for the flowchart ---
const icons = {
    camera: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    brain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7v0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2m0 13.5A2.5 2.5 0 0 1 12 18v0a2.5 2.5 0 0 1-2.5 2.5v0A2.5 2.5 0 0 1 7 18v0a2.5 2.5 0 0 1 2.5-2.5m5 0A2.5 2.5 0 0 1 17 18v0a2.5 2.5 0 0 1-2.5 2.5v0A2.5 2.5 0 0 1 12 18v0a2.5 2.5 0 0 1 2.5-2.5m0-13.5A2.5 2.5 0 0 1 17 4.5v0A2.5 2.5 0 0 1 14.5 7v0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2m-5 7a2.5 2.5 0 0 1 5 0m-2.5 0a2.5 2.5 0 0 0-5 0m2.5 0v5"></path><path d="M12 2v2.5m0 15V22m-4.5-9.5H2m20 0h-5.5"></path></svg>`,
    split: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9-3-3"></path><path d="M21 3l-7.873 7.873a4 4 0 0 1-5.657 0L3 6"></path></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    warn: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    database: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
};
const flowchartData = [
    { id: 'start', type: 'user', title: '1. User Initiates Scan', icon: icons.camera, content: 'Farmer opens the app and taps "Detect Pest/Disease". They take a photo or upload one from their gallery.', position: { x: 50, y: 3 } },
    { id: 'preprocess', type: 'device', title: '2. On-Device Preprocessing', icon: icons.cpu, content: 'Image is compressed, resized (e.g., 224x224), and normalized. Augmentations like flips and rotations can be applied for a more robust on-device model.', position: { x: 50, y: 15 } },
    { id: 'inference_choice', type: 'decision', title: '3. Inference Strategy', icon: icons.split, content: 'The app decides whether to perform a quick on-device check or send the image to the server for a more powerful analysis. (MVP often starts with server-only).', position: { x: 50, y: 27 } },
    { id: 'on_device_model', type: 'device', title: '4a. On-Device Inference', icon: icons.cpu, content: 'A lightweight model (e.g., MobileNetV3) runs directly on the phone for instant results, even when offline. Ideal for common diseases.', position: { x: 20, y: 40 } },
    { id: 'server_upload', type: 'server', title: '4b. Server-Side Inference', icon: icons.cloud, content: 'Image is uploaded to the backend. This allows for larger, more accurate models (e.g., EfficientNet-B2, ResNet50) and ensemble methods.', position: { x: 80, y: 40 } },
    { id: 'server_model', type: 'server', title: '5. AI/ML Analysis', icon: icons.brain, content: 'A powerful CNN model analyzes the image. It may use a two-stage process: first segmenting the leaf, then classifying the disease on the isolated region.', position: { x: 80, y: 53 } },
    { id: 'confidence_check', type: 'decision', title: '6. Confidence Scoring', icon: icons.split, content: 'The model returns a diagnosis and a confidence score. This score is crucial for determining the next step.', position: { x: 50, y: 65 } },
    { id: 'high_confidence', type: 'output', title: '7a. High Confidence (>85%)', icon: icons.check, content: 'A clear diagnosis and actionable recommendation (e.g., "Apply Mancozeb") are displayed to the farmer via text, icons, and voice prompts.', position: { x: 20, y: 78 } },
    { id: 'low_confidence', type: 'output', title: '7b. Low Confidence (<50%)', icon: icons.warn, content: 'The result is flagged as uncertain. The app automatically suggests escalating the case to a human expert for review.', position: { x: 80, y: 78 } },
    { id: 'escalation', type: 'feedback', title: '8. Human Escalation', icon: icons.user, content: 'The image, metadata, and initial diagnosis are sent to the KrishiAdhikari (Officer) Dashboard for manual review and confirmation.', position: { x: 80, y: 90 } },
    { id: 'feedback_loop', type: 'feedback', title: '9. Data Storage & Retraining', icon: icons.database, content: 'All anonymized images and verified diagnoses (from high-confidence results and officer feedback) are stored. This data is vital for continuously retraining and improving the model.', position: { x: 20, y: 90 } },
];
const connections = [['start','preprocess'],['preprocess','inference_choice'],['inference_choice','on_device_model'],['inference_choice','server_upload'],['server_upload','server_model'],['on_device_model','confidence_check'],['server_model','confidence_check'],['confidence_check','high_confidence'],['confidence_check','low_confidence'],['low_confidence','escalation'],['high_confidence','feedback_loop'],['escalation','feedback_loop']];

// --- Sub-component for each node ---
const FlowNode = React.forwardRef(({ node, isVisible }, ref) => (
  <div
    ref={ref}
    id={node.id}
    className={`flow-node node-${node.type} ${isVisible ? 'is-visible' : ''}`}
    style={{ top: `${node.position.y}%`, left: `calc(${node.position.x}% - 140px)` }}
  >
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 text-slate-500" dangerouslySetInnerHTML={{ __html: node.icon }} />
      <div>
        <h3 className="font-bold text-slate-800">{node.title}</h3>
        <p className="text-sm text-slate-600 mt-1">{node.content}</p>
      </div>
    </div>
  </div>
));

// --- Main Flowchart Component ---
const PestDetectionFlowchart = () => {
  const containerRef = useRef(null);
  const nodeRefs = useRef({});
  const [arrows, setArrows] = useState([]);
  const [visibleNodes, setVisibleNodes] = useState(new Set());

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleNodes((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    const nodes = Object.values(nodeRefs.current).filter(Boolean);
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    function drawArrows() {
        const svgContainer = containerRef.current?.querySelector('.connector-arrow');
        if (!svgContainer) return;
        
        const newArrows = connections.map(([fromId, toId]) => {
            const fromEl = nodeRefs.current[fromId];
            const toEl = nodeRefs.current[toId];
            if (!fromEl || !toEl) return null;

            const containerRect = svgContainer.getBoundingClientRect();
            const fromRect = fromEl.getBoundingClientRect();
            const toRect = toEl.getBoundingClientRect();

            const startX = (fromRect.left - containerRect.left) + fromRect.width / 2;
            const startY = (fromRect.top - containerRect.top) + fromRect.height;
            const endX = (toRect.left - containerRect.left) + toRect.width / 2;
            const endY = toRect.top - containerRect.top;

            const controlY1 = startY + (endY - startY) * 0.4;
            const controlY2 = startY + (endY - startY) * 0.6;
            const d = `M ${startX} ${startY} C ${startX} ${controlY1}, ${endX} ${controlY2}, ${endX} ${endY - 10}`;
            
            return { d, toId };
        }).filter(Boolean);
        setArrows(newArrows);
    }
    
    const resizeObserver = new ResizeObserver(drawArrows);
    if(containerRef.current) {
        resizeObserver.observe(containerRef.current);
    }
    drawArrows();

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 w-full min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
          Dynamic Pest & Disease Detection Flow
        </h1>
        <p className="text-slate-600">
          An animated visualization of the end-to-end architecture, from image capture to AI-driven diagnosis and feedback loop.
        </p>
      </div>
      <div ref={containerRef} className="relative w-full max-w-5xl" style={{ minHeight: '2800px' }}>
        <svg className="connector-arrow">
          <defs>
            <marker id="arrowhead-pest" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
            </marker>
          </defs>
          {arrows.map((arrow, i) => (
            <path key={i} d={arrow.d} className={`arrow-path ${visibleNodes.has(arrow.toId) ? 'is-visible' : ''}`} />
          ))}
        </svg>

        {flowchartData.map((node) => (
          <FlowNode
            key={node.id}
            ref={(el) => (nodeRefs.current[node.id] = el)}
            node={node}
            isVisible={visibleNodes.has(node.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PestDetectionFlowchart;