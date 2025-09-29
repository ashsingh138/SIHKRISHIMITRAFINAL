// src/components/Footer.jsx

import React from 'react';
import Icon from './Icon'; // Assuming your Icon component is in the same folder

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start">
              <Icon name="sprout" className="w-6 h-6 mr-2 text-green-400" />
              Krishi Mitra
            </h3>
            <p className="text-sm text-slate-400 mt-1">Empowering the future of Indian agriculture.</p>
          </div>

          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} The TechnoWizards, IIT Kharagpur.</p>
            <p className="text-slate-400">Smart India Hackathon 2025</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;