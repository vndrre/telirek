import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BlueButton from '../BlueButton';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, rootMargin: '-50px 0px', threshold: 0.3 });

  const Services = [
    {
      name: 'Fassaaditööd',
      description: 'Meie teenused hõlmavad fassaaditöid, sealhulgas soojustamist, värvimist ja renoveerimist.',
    },
    {
      name: 'Soojustamine',
      description: 'Pakume erinevaid soojustamislahendusi, sealhulgas kivivilla ja polüstürooli soojustamist.',
    },
    {
      name: 'Värvimine',
      description: 'Meie meeskond teostab kvaliteetset värvimistööd, et tagada teie hoone esteetika ja kaitse.',
    },
    {
      name: 'Värvimine',
      description: 'Meie meeskond teostab kvaliteetset värvimistööd, et tagada teie hoone esteetika ja kaitse.',
    },
  ];

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6 }}
      className="py-[80px] sm:py-[100px] md:py-[150px] px-6 sm:px-8 md:px-[100px] lg:px-[175px] bg-[#f9f9f9]"
    >
      <div className='flex justify-between items-center'>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left text-[#00529c] mb-16">
          Teenused
        </h2>

        <a href="/teenused" className='group flex items-center text-[#00529c] font-bold transition-all duration-200'>
          VAATA TEENUSEID
          
          <span className='ml-[1px] group-hover:translate-x-1 transition-transform duration-200'>
            <ArrowRight />
          </span>

        </a>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-[100px] gap-8">
        {Services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="bg-[#fbfbfb] shadow-md hover:shadow-xl p-8  transition duration-300 border-t-4 border-[#00529c]"
          >
            <h3 className="text-2xl font-semibold text-[#00529c] mb-4">{service.name}</h3>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
};

export default ServicesSection;
