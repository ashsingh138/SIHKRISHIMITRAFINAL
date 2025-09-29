import React from 'react';

// Import the new, separated components
import OfficerScreens from '../components/screens/OfficerScreens';
import FarmerWebScreens from '../components/screens/FarmerWebScreens';
import FarmerMobileScreens from '../components/screens/FarmerMobileScreens';

const ScreensTab = () => {
    return (
        <div className="p-8 md:p-12 bg-slate-50 space-y-20">
            {/* Component for the code-based mobile prototype */}
            <FarmerMobileScreens />

            {/* Component for the image-based web prototype */}
            <FarmerWebScreens />

            {/* Component for the image-based officer prototype */}
            <OfficerScreens />
        </div>
    );
};

export default ScreensTab;