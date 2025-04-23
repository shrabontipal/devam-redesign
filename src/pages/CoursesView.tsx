import React from 'react';
import { motion } from 'framer-motion';
import CoursesSection from '../components/layout/CoursesSection';

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

const CoursesView = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">Our Courses</h1>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Explore our comprehensive range of technology courses designed to help you build the skills 
          needed for today's digital world. Whether you're just starting your journey or looking to 
          advance your existing skills, we have the right course for you.
        </p>
      </div>
      <CoursesSection />
    </motion.div>
  );
};

export default CoursesView;
