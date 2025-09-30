import React from 'react';
import { Layers, Database, Aperture } from 'lucide-react';

const DetailSection = ({ icon: Icon, title, items }) => (
    <div>
        <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
                <Icon className="w-6 h-6 text-indigo-600" />
            </div>
            {title}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-600 pl-4">
            {items.map((item, i) => <li key={i}><span className="font-semibold">{item.title}</span>: {item.desc}</li>)}
        </ul>
    </div>
);

const TechStackDetails = () => {
    const stack = [
        { title: 'Frontend', desc: 'React, React Native, Tailwind CSS, Framer Motion' },
        { title: 'Backend', desc: 'Node.js with Express.js for scalable API services' },
        { title: 'AI/ML', desc: 'Python, TensorFlow, Keras, Scikit-learn, Pandas' },
        { title: 'Database', desc: 'PostgreSQL with PostGIS for geospatial data' },
        { title: 'Blockchain', desc: 'Solidity on the Polygon network for traceability' },
        { title: 'DevOps', desc: 'Docker, GitHub Actions, AWS (EC2, S3, RDS)' },
    ];
    const datasets = [
        { title: 'PlantVillage', desc: 'Used for training our CNN model for pest and disease detection.' },
        { title: 'ISRIC SoilGrids', desc: 'Global soil information for soil type, pH, and nutrient content.' },
        { title: 'IMD & Copernicus', desc: 'Weather and climate data for predictive modeling.' },
    ];
    const apis = [
        { title: 'Google Earth Engine', desc: 'For accessing and processing Sentinel-2 & Landsat satellite imagery.' },
        { title: 'eNAM & Agmarknet', desc: 'Official Government of India portals for real-time and historical mandi prices.' },
        { title: 'Tomorrow.io', desc: 'Provides hyper-local weather forecasts for advisory and yield prediction.' },
    ];

    return (
        <div className="p-8 bg-slate-50 font-sans">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Technology & Data Foundation</h2>
            <div className="max-w-4xl mx-auto space-y-12">
                <DetailSection icon={Layers} title="Core Tech Stack" items={stack} />
                <hr />
                <DetailSection icon={Database} title="Key Datasets" items={datasets} />
                <hr />
                <DetailSection icon={Aperture} title="Third-Party APIs" items={apis} />
            </div>
        </div>
    );
};

export default TechStackDetails;