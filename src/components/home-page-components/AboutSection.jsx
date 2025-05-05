import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import image from '../../assets/home-page-assets/about image.jpeg';

const AboutSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const isTextInView = useInView(textRef, { rootMargin: '-50px 0px', threshold: 0.3 });
  const isImageInView = useInView(imageRef, { rootMargin: '-50px 0px', threshold: 0.3 });

  return (
    <div className='py-[80px] sm:py-[100px] md:py-[150px] px-6 sm:px-8 md:px-[100px] lg:px-[175px] text-center mt-[50px] sm:mt-[100px] md:mt-[150px] lg:mt-[225px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-[200px] md:mt-[180px] lg:mt-0'>
        
        {/* Text Section */}
        <motion.div 
          ref={textRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col text-left gap-5'
        >
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left lg:text-left'>Meist</h1>
          <p className='text-base sm:text-lg md:text-xl leading-[50px] font-light text-center md:text-left lg:text-left'>
            Ettevõtte personal on tegelenud ehitustöödega <span className='font-bold'>üle 12 aasta.</span> <br />
            Meie eesmärgiks on <span className='font-bold'>iga töö puhul</span> välja selgitada <span className='font-bold'> kliendi täpsed vajadused.</span> <br />
            Iga projekti lõpptulemus peab olema <span className='font-bold'>rahulolev klient ja positiivne tagasiside.</span> <br />
            Oma tööde teostamiseks kasutame ainult <span className='font-bold'>sertifitseeritud materjale ja <br /> anname garantii vastavalt tarbijakaitse seadustikule.</span>
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={image}
            className='w-full h-auto max-h-[400px] object-cover'
          />
        </motion.div>

      </div>
    </div>
  );
};

export default AboutSection;
