import React from 'react';
import { motion } from 'framer-motion';

const infoVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: 'spring', bounce: 0.3 } }
};
const formVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: 'spring', bounce: 0.3 } }
};
const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.1, duration: 0.5 } })
};

const ContactSection = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-[175px] min-h-screen w-full flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Company Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={infoVariants}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#00529c]">TELIREK GRUPP OÜ</h2>
          <div>
            <span className="font-semibold">Projektijuht</span><br />
            Peeter Seppel
            <span className="ml-2 text-xl align-middle inline-flex gap-1">
              <img src='https://hatscripts.github.io/circle-flags/flags/ee.svg' alt='ee' className='w-5 h-5' />
              <img src='https://hatscripts.github.io/circle-flags/flags/ru.svg' alt='ru' className='w-5 h-5' />
              <img src='https://hatscripts.github.io/circle-flags/flags/gb.svg' alt='gb' className='w-5 h-5' />
              <img src='https://hatscripts.github.io/circle-flags/flags/fi.svg' alt='fi' className='w-5 h-5' />
            </span><br />
            Tel <a href="tel:+3725204303" className="underline text-[#00529c]">5204303</a>
          </div>
          <div>
            <div>E-mail <a href="mailto:info@telirekgrupp.ee" className="text-[#00529c] underline">info@telirekgrupp.ee</a></div>
            <div>Majandustegevusteate number EEH011485</div>
            <div>LHV Pank EE987700771003288349</div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          action="post"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={formVariants}
          className="space-y-6 w-full"
        >
          {['Nimi', 'E-mail', 'Teema', 'Teade'].map((label, i) => (
            label !== 'Teade' ? (
              <motion.input
                key={label}
                type={label === 'E-mail' ? 'email' : 'text'}
                placeholder={label}
                className="w-full border border-[#00529c] bg-[#f7f7f7] px-4 py-3 text-[#00529c] placeholder-[#00529c] focus:outline-none focus:ring-2 focus:ring-[#00529c] transition"
                variants={fieldVariants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              />
            ) : (
              <motion.textarea
                key={label}
                placeholder={label}
                rows={6}
                className="w-full border border-[#00529c] bg-[#f7f7f7] px-4 py-3 text-[#00529c] placeholder-[#00529c] focus:outline-none focus:ring-2 focus:ring-[#00529c] transition resize-none"
                variants={fieldVariants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              />
            )
          ))}
          <motion.button
            type="submit"
            className="bg-[#00529c] text-white font-bold tracking-widest px-8 py-3 shadow hover:bg-[#003d73] transition mt-2"
            variants={fieldVariants}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            SAADA
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactSection;
