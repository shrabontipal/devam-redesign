import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/layout/HeroSection';
import FeaturesSection from '../components/layout/FeaturesSection';
import CoursesSection from '../components/layout/CoursesSection';
import TestimonialsSection from '../components/layout/TestimonialsSection';

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

const HomeView = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
    >
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
    </motion.div>
  );
};

export default HomeView;
