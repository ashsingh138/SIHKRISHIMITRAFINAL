import React from 'react';
import Icon from '../components/Icon';

const ResourcesTab = () => {
    return (
        <div className="p-8 md:p-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-4 text-green-800">Resources & References</h2>
            <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                Our work is built upon the foundation of extensive research and powerful open-source tools.
            </p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                    <h3 className="text-2xl font-bold mb-4">Links & APIs</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><Icon name="link" className="w-5 h-5 text-green-600"/><a href="#" className="text-blue-600 hover:underline">India Digital Ecosystem of Agriculture (IDEA)</a></li>
                        <li className="flex items-center gap-2"><Icon name="link" className="w-5 h-5 text-green-600"/><a href="#" className="text-blue-600 hover:underline">ISRO Bhuvan Portal</a></li>
                        <li className="flex items-center gap-2"><Icon name="link" className="w-5 h-5 text-green-600"/><a href="#" className="text-blue-600 hover:underline">FAO Agro-informatics</a></li>
                        <li className="flex items-center gap-2"><Icon name="link" className="w-5 h-5 text-green-600"/><a href="#" className="text-blue-600 hover:underline">PlantVillage Dataset</a></li>
                    </ul>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-md border">
                    <h3 className="text-2xl font-bold mb-4">Downloads</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><Icon name="file-text" className="w-5 h-5 text-green-600"/><a href="#" className="text-blue-600 hover:underline">Download Full Presentation (PDF)</a></li>
                        <li className="flex items-center gap-2"><Icon name="file-text" className="w-5 h-5 text-green-600"/><a href="#" className="text-blue-600 hover:underline">Download Technical Whitepaper (PDF)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResourcesTab;