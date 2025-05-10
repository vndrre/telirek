import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Fassaaditööd',
    description: 'Teostame erinevaid fassaaditöid, tagades hoonete esteetilise ja tehnilise korrasoleku.',
    icon: '🏢',
  },
  {
    id: 2,
    title: 'Tellingute paigaldamine',
    description: 'Paigaldame tellinguid ohutult ja professionaalselt erinevateks ehitustöödeks.',
    icon: '🪜',
  },
  {
    id: 3,
    title: 'Üldehitus',
    description: 'Pakume laia valikut üldehitustöid nii era- kui äriklientidele.',
    icon: '🏗️',
  },
  {
    id: 4,
    title: 'Viimistlustööd',
    description: 'Teostame erinevaid sise- ja välisviimistlustöid vastavalt kliendi soovile.',
    icon: '🎨',
  },
  {
    id: 5,
    title: 'Lammutustööd',
    description: 'Lammutame hooneid ja konstruktsioone ohutult ja keskkonnasõbralikult.',
    icon: '🧱',
  },
  {
    id: 6,
    title: 'Remondi- ja hooldusteenused',
    description: 'Pakume remondi- ja hooldusteenuseid, et hoida teie vara heas korras.',
    icon: '🛠️',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  return (
    <div className='py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-[175px] min-h-screen w-full flex flex-col items-center justify-center'>
      {/* Title and description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, margin: '-100px' }}
        className='mb-8 sm:mb-12 md:mb-16 w-full text-center'
      >
        <p className='text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto text-[#00529c]'>
          Teostame fassaaditöid, tellingute paigaldamist, üldehitust, erinevaid viimistlustöid, lammutustöid, remondi ja hooldusteenuseid jne.
        </p>
      </motion.div>
      {/* Services grid */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, margin: '-50px' }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={`p-4 sm:p-5 md:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#00529c] bg-white flex flex-col items-start ${hoveredService === service.id ? 'transform -translate-y-2' : ''}`}
            variants={serviceVariants}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className='text-4xl sm:text-5xl mb-4'>{service.icon}</div>
            <h3 className='text-xl sm:text-2xl font-semibold mb-3 text-[#00529c]'>{service.title}</h3>
            <p className='text-base sm:text-lg text-gray-700'>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;