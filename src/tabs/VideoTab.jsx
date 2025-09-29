import React from 'react';

const VideoSection = ({ title, description, videoUrl }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">{title}</h3>
    <p className="text-center text-slate-600 max-w-2xl mx-auto mb-6">
      {description}
    </p>
    <div className="max-w-4xl mx-auto aspect-video bg-black rounded-lg shadow-2xl overflow-hidden border-4 border-white">
      <iframe
        className="w-full h-full"
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

const VideoTab = () => {
  return (
    <div className="p-8 md:p-12 animate-fade-in-up">
      <h2 className="text-4xl font-bold text-center mb-4 text-green-800">
        See It In Action
      </h2>
      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
        Watch our prototype walk-throughs to understand the seamless workflow of the Krishi Mitra ecosystem.
      </p>

      {/* Farmer App Prototype */}
      <VideoSection
        title="KisanSathi – Farmer App Prototype"
        description="A mobile-first platform designed for farmers to receive real-time crop advisory, weather alerts, and market insights."
        videoUrl="https://www.youtube.com/embed/0GXLIbJuB6s"
      />

      {/* Officer Dashboard Prototype */}
      <VideoSection
        title="KrishiAdhikari – Officer Dashboard Prototype"
        description="A powerful dashboard for agriculture officers to monitor regions, detect hotspots, and provide targeted support."
        videoUrl="https://www.youtube.com/embed/nHyiu7ZXFO8"
      />
    </div>
  );
};

export default VideoTab;