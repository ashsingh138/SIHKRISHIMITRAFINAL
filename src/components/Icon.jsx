import React from 'react';

const icons = {
    'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    'smartphone': '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    'layout-dashboard': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    'brain-circuit': '<path d="M12 2a2.5 2.5 0 0 1 3 2.5v.5a2.5 2.5 0 0 1-5 0v-.5A2.5 2.5 0 0 1 12 2Z"/><path d="M4.5 9.5A2.5 2.5 0 0 1 7 7h0a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-5 0v0Z"/><path d="M14.5 9.5A2.5 2.5 0 0 1 17 7h0a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-5 0v0Z"/><path d="M12 12a2.5 2.5 0 0 1 3 2.5v.5a2.5 2.5 0 0 1-5 0v-.5a2.5 2.5 0 0 1 2.5-2.5Z"/><path d="M3.5 16.5A2.5 2.5 0 0 1 6 14h0a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-5 0v0Z"/><path d="M15.5 16.5A2.5 2.5 0 0 1 18 14h0a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-5 0v0Z"/><path d="M7 12h1.5"/><path d="m15.5 12 h-1.5"/><path d="M12 9.5V7.5"/><path d="m9.5 16.5-1-1.5"/><path d="m14.5 16.5 1-1.5"/><path d="m6.5 14.5-1-1.5"/><path d="m17.5 14.5 1-1.5"/>',
    'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    'bug': '<path d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8"/><path d="M18 8h-2.3a6 6 0 0 0-9.4 0H4"/><path d="m21 14-4.5-4.5"/><path d="m3 14 4.5-4.5"/><path d="M12 16a4 4 0 0 0 4-4h-8a4 4 0 0 0 4 4z"/>',
    'lightbulb': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    'bar-chart-2': '<line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>',
    'cloud-sun': '<path d="M12 16a4 4 0 0 0 7.9-1.1A5.5 5.5 0 0 0 15 4.5V4a2 2 0 0 0-4 0v.5a2.5 2.5 0 1 0 5 0"/><path d="M12 2v2"/><path d="M22 12h-2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M4.93 19.07l1.41-1.41M2 12h2"/><path d="m4.93 4.93 1.41 1.41"/>',
    'sprout': '<path d="M7 20h10"/><path d="M12 20V8"/><path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="m8 12 4 4 4-4"/>',
    'award': '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'camera': '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    'calendar': '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
    'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41-1.41"/>',
    'shopping-cart': '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/>',
    'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>',
    'home': '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    'map': '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/>',
    'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    'mic': '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
    'wifi-off': '<line x1="1" x2="23" y1="1" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/>',
    'refresh-cw': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>',
};

const Icon = ({ name, className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} dangerouslySetInnerHTML={{ __html: icons[name] || '' }} />
    );
};
export default Icon;