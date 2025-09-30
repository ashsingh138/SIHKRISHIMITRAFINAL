import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const VideoTab = () => {
    // A ref to store the two video player instances
    const playerRefs = useRef({
        kisanSathi: null,
        krishiAdhikari: null,
    });

    // This function runs when a video starts playing
    const onPlay = (playingVideoKey) => {
        // Loop through all our stored player references
        for (const key in playerRefs.current) {
            // If the player exists and is NOT the one that just started playing...
            if (key !== playingVideoKey && playerRefs.current[key]) {
                // ...pause it.
                playerRefs.current[key].pauseVideo();
            }
        }
    };
    
    // YouTube player options
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
    };

    return (
        <div className="p-8 md:p-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-4 text-green-800">
                See It In Action
            </h2>
            <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                Watch our prototype walk-throughs to understand the seamless workflow of the Krishi Mitra ecosystem.
            </p>

            {/* --- Farmer App Prototype --- */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">KisanSathi – Farmer App Prototype</h3>
                <p className="text-center text-slate-600 max-w-2xl mx-auto mb-6">
                    A mobile-first platform for farmers to receive real-time crop advisory, weather alerts, and market insights.
                </p>
                <div className="max-w-4xl mx-auto aspect-video bg-black rounded-lg shadow-2xl overflow-hidden border-4 border-white">
                    <YouTube
                        videoId="N-xKY8TGgEA"
                        opts={opts}
                        className="w-full h-full"
                        onReady={(event) => (playerRefs.current.kisanSathi = event.target)}
                        onPlay={() => onPlay('kisanSathi')}
                    />
                </div>
            </div>

            {/* --- Officer Dashboard Prototype --- */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">KrishiAdhikari – Officer Dashboard Prototype</h3>
                <p className="text-center text-slate-600 max-w-2xl mx-auto mb-6">
                    A powerful dashboard for agriculture officers to monitor regions, detect hotspots, and provide targeted support.
                </p>
                <div className="max-w-4xl mx-auto aspect-video bg-black rounded-lg shadow-2xl overflow-hidden border-4 border-white">
                    <YouTube
                        videoId="yk9bGXn8ugQ"
                        opts={opts}
                        className="w-full h-full"
                        onReady={(event) => (playerRefs.current.krishiAdhikari = event.target)}
                        onPlay={() => onPlay('krishiAdhikari')}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoTab;