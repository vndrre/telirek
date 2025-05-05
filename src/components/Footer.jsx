import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const ref = useRef(null);
  const isTextInView = useInView(ref, {
    once: false,
    rootMargin: "-20% 0px -20% 0px", // adjust as needed
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className='bg-[#00529c] text-[#fbfbfb] px-[32px] py-[24px]'
    >

        <div className='grid grid-cols-1 items-center'>

            <div>

            </div>

            <div className='text-center'>
                <p className='text-sm md:text-base'>
                    <strong>© 2025 TELIREK GRUPP OÜ.</strong> Kõik õigused kaitstud.
                </p>
            </div>
        </div>

    </motion.div>
  );
};

export default Footer;
