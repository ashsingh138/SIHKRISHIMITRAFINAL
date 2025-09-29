import React, { useEffect, useRef } from 'react';

// A custom hook for handling scroll animations
const useFadeInObserver = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
};

const SpectralCropHealth = () => {
  const fadeInRef = useFadeInObserver();

  return (
    <div className="bg-slate-50 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <header ref={fadeInRef} className="text-center mb-16 fade-in-element">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Spectral Crop Health Workflow</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">From satellite data to actionable insights, powered by Krishi Mitra.</p>
        </header>

        <section ref={fadeInRef} className="text-center fade-in-element">
          <h2 className="text-3xl font-semibold mb-2">1. Data Sources</h2>
          <p className="text-gray-500 mb-8">Aggregating data from leading earth observation satellites.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="spectral-card p-6"><div className="icon-wrapper bg-blue-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><h3 className="font-bold text-xl mb-2">Sentinel-2</h3><p className="text-gray-600">10m resolution imagery with a 5-day revisit time from Copernicus/ESA.</p></div>
            <div className="spectral-card p-6"><div className="icon-wrapper bg-green-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.8 14.243l.11.11a2 2 0 002.828 0l1.157-1.157a2 2 0 012.828 0l.11.11M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="font-bold text-xl mb-2">Landsat 8/9</h3><p className="text-gray-600">Reliable 30m resolution data with a 16-day cycle from USGS/NASA.</p></div>
            <div className="spectral-card p-6"><div className="icon-wrapper bg-orange-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg></div><h3 className="font-bold text-xl mb-2">ISRO Bhuvan</h3><p className="text-gray-600">Valuable supplementary data, especially for Indian crop varieties.</p></div>
          </div>
        </section>

        <div ref={fadeInRef} className="animated-arrow fade-in-element"></div>

        <section ref={fadeInRef} className="text-center fade-in-element">
          <h2 className="text-3xl font-semibold mb-2">2. Backend Processing</h2>
          <p className="text-gray-500 mb-8">Transforming raw data into meaningful crop health indices.</p>
          <div className="p-8 spectral-card max-w-6xl mx-auto"><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              <div className="text-center"><div className="icon-wrapper bg-purple-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657l-5.657-5.657-5.657 5.657a4 4 0 105.657 5.657l5.657-5.657a4 4 0 00-5.657-5.657l-1.414 1.414" /></svg></div><h4 className="font-semibold text-lg">Field Boundary</h4><p className="text-sm text-gray-500">Farmer provides GPS polygon of their field.</p></div>
              <div className="text-center"><div className="icon-wrapper bg-indigo-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></div><h4 className="font-semibold text-lg">API Request</h4><p className="text-sm text-gray-500">Backend fetches cloud-masked imagery.</p></div>
              <div className="text-center lg:col-span-2"><div className="icon-wrapper bg-emerald-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div><h4 className="font-semibold text-lg">Compute Indices</h4><div className="grid sm:grid-cols-3 gap-2 mt-2"><div className="formula-card">NDVI</div><div className="formula-card">EVI</div><div className="formula-card">NDMI</div></div></div>
          </div></div>
        </section>

        <div ref={fadeInRef} className="animated-arrow fade-in-element"></div>

        <section ref={fadeInRef} className="text-center fade-in-element">
          <h2 className="text-3xl font-semibold mb-2">3. App Integration</h2>
          <p className="text-gray-500 mb-8">Delivering insights directly to the stakeholders.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="spectral-card p-6"><div className="icon-wrapper bg-sky-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div><h3 className="font-bold text-xl mb-2">Farmer View</h3><p className="text-gray-600 mb-4">Farmers see a simple, color-coded map of their field to identify stress areas.</p><div className="bg-gray-100 p-4 rounded-lg text-left"><p className="font-semibold">Example Advisory:</p><p className="text-sm text-red-600">"Red area shows water stress. Irrigate within 2 days."</p></div></div>
            <div className="spectral-card p-6"><div className="icon-wrapper bg-rose-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><h3 className="font-bold text-xl mb-2">Officer Dashboard</h3><p className="text-gray-600 mb-4">Officers view heatmaps to identify emerging stress zones and potential outbreaks.</p><div className="bg-gray-100 p-4 rounded-lg text-left"><p className="font-semibold">Primary Function:</p><p className="text-sm text-blue-600">"Identify outbreak hotspots and push targeted advisories."</p></div></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpectralCropHealth;