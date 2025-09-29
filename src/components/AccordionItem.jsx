import React, { useState } from 'react';
import Icon from './Icon';

const AccordionItem = ({ title, icon, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border rounded-lg overflow-hidden bg-white">
            <button 
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg hover:bg-slate-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-3">
                    <Icon name={icon} className="w-6 h-6 text-green-600"/>
                    <span>{title}</span>
                </div>
                <Icon name="chevron-down" className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-4 border-t text-slate-600 prose">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;