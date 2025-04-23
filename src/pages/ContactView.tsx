import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/layout/ContactSection';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const ContactView = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">Contact Us</h1>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          We'd love to hear from you! Whether you have a question about our courses, want to partner 
          with us, or just want to say hello, we're here to help.
        </p>
      </div>
      <ContactSection />
    </motion.div>
  );
};

export default ContactView;
