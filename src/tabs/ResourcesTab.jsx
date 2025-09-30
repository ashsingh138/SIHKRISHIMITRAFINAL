import React from 'react';
import { Link, Paperclip } from 'lucide-react';

const ResourceLink = ({ href, children }) => (
    <li className="flex items-start gap-3">
        <Link className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">
            {children}
        </a>
    </li>
);

const ResourceSection = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
        <ul className="space-y-3">
            {children}
        </ul>
    </div>
);

const ResourcesTab = () => {
    return (
        <div className="p-8 md:p-12 bg-slate-50 animate-fade-in-up">
            <header className="text-center">
                <h2 className="text-4xl font-bold animated-gradient-text">Resources & References</h2>
                <p className="text-slate-600 max-w-3xl mx-auto mt-4 mb-12">
                    Our work is built upon the foundation of extensive research, credible data sources, and powerful open-source tools.
                </p>
            </header>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Column 1 */}
                <div className="space-y-8">
                    <ResourceSection title="Smart Crop Advisory">
                        <ResourceLink href="https://tech-stack.com/blog/iot-in-weather-monitoring-systems-and-forecasting-for-agriculture/">IoT in Weather Monitoring for Agriculture</ResourceLink>
                        <ResourceLink href="https://www.projectpro.io/article/ai-in-agriculture-projects-and-examples/1115">AI in Agriculture Projects and Examples</ResourceLink>
                        <ResourceLink href="https://ijsret.com/wp-content/uploads/IJSRET_V11_issue3_968.pdf">Intelligent Crop Recommendation System (PDF)</ResourceLink>
                        <ResourceLink href="https://www.sciencedirect.com/science/article/pii/S2405844021005855">Smart Farming: The Future of Agriculture</ResourceLink>
                    </ResourceSection>
                    
                    <ResourceSection title="Pest & Disease Detection">
                        <ResourceLink href="https://www.sciencedirect.com/science/article/pii/S2214662825000271">Crop Pest Detection with Deep Learning</ResourceLink>
                        <ResourceLink href="https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2025.1538163/full">Deep Learning in Plant Disease/Pest Detection</ResourceLink>
                         <ResourceLink href="https://www.sciencedirect.com/science/article/pii/S2352340923004250">CCMT Crop Disease Datasets</ResourceLink>
                    </ResourceSection>

                     <ResourceSection title="Yield & Market Price Prediction">
                        <ResourceLink href="https://link.springer.com/article/10.1007/s10666-024-09978-6">Crop Yield Prediction in Agriculture</ResourceLink>
                         <ResourceLink href="https://onlinelibrary.wiley.com/doi/10.1002/agg.3382">Forecasting Spot Prices with Deep Learning (Wiley)</ResourceLink>
                         <ResourceLink href="https://farmonaut.com/blogs/price-forecasting-of-agricultural-commodities-shocking-new-tech">Methodologies for Price Forecasting</ResourceLink>
                    </ResourceSection>
                </div>

                {/* Column 2 */}
                <div className="space-y-8">
                     <ResourceSection title="Blockchain Supply Chain">
                        <ResourceLink href="https://onlinelibrary.wiley.com/doi/full/10.1155/2022/7358354">Blockchain-Based Traceability in Agri-Food</ResourceLink>
                        <ResourceLink href="https://hrcak.srce.hr/229259">Improving Traceability with Blockchain</ResourceLink>
                        <ResourceLink href="https://link.springer.com/chapter/10.1007/978-981-15-8685-9_5">A Conceptual Framework for Agri-Food Supply Chain</ResourceLink>
                        <ResourceLink href="https://www.sciencedirect.com/science/article/pii/S2772662223002035">Blockchain Technology in the Agri-Food Sector</ResourceLink>
                    </ResourceSection>

                    <ResourceSection title="Gamified Sustainability">
                        <ResourceLink href="https://cgspace.cgiar.org/bitstreams/8a125f17-6066-43c4-ab17-cd435d61ffa6/download">Digital Climate Advisory & Gamification (PDF)</ResourceLink>
                        <ResourceLink href="https://www.sciencedirect.com/science/article/pii/S0308521X24003287">Gamification for Sustainable Agriculture</ResourceLink>
                    </ResourceSection>
                    
                    <ResourceSection title="Key Data Portals & APIs">
                         <ResourceLink href="https://enam.gov.in/web/">eNAM (National Agriculture Market)</ResourceLink>
                         <ResourceLink href="https://agmarknet.gov.in/">Agmarknet (Govt. of India)</ResourceLink>
                         <ResourceLink href="https://bhuvan-app1.nrsc.gov.in/api/">ISRO Bhuvan Portal</ResourceLink>
                         <ResourceLink href="https://www.isric.org/explore/soilgrids">ISRIC SoilGrids</ResourceLink>
                    </ResourceSection>
                </div>
            </div>
        </div>
    );
};

export default ResourcesTab;