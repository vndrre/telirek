import React from 'react'

const AboutHeader = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden"> 
        
            {/* Background Image */}
            <img
                src="https://picsum.photos/1920/1080" // <-- replace with your image path
                alt="Background"
                className="absolute inset-0 w-full h-[420px] object-cover z-0"
            />
            {/* Overlay Content Example */}
            <div className="relative z-10 flex items-center justify-center h-[420px]">
                <h1 className="text-white text-5xl font-bold drop-shadow-lg">
                    Meist
                </h1>
            </div>

    </div>
  )
}

export default AboutHeader
