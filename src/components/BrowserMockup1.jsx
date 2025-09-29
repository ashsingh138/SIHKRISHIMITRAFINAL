import React from 'react';

const BrowserMockup = ({ children }) => {
  return (
    <div className="border-2 border-gray-200 rounded-xl shadow-2xl bg-gray-100">
      <div className="flex items-center h-10 px-4 bg-gray-200 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-grow text-center">
            <p className="text-sm text-gray-500">KisanSathi</p>
        </div>
      </div>
      <div className="p-2 md:p-4 bg-white rounded-b-lg">
        {children}
      </div>
    </div>
  );
};

export default BrowserMockup;