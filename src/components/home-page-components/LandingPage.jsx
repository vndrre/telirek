import React from 'react';
import BlueButton from '../BlueButton';
import * as motion from "motion/react-client";

const LandingPage = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <img
                src="https://picsum.photos/1920/1080" // <-- replace with your image path
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay (optional dark layer for better text visibility) */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Centered Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-[#fbfbfb] px-4 text-center">
                
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        TELIREK
                    </h1>

                    <BlueButton href='/'>Kontakt</BlueButton> 
                    
                </motion.div>
            </div>
        </div>
    );
};

export default LandingPage;
