import React from 'react';
import { motion } from 'framer-motion';

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

const AboutView = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      className="container mx-auto px-4 max-w-7xl py-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">About Devam Computech</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Devam Computech, our mission is to provide high-quality technical education that empowers 
            individuals to pursue successful careers in the technology industry. We are committed to 
            delivering practical, industry-relevant training that bridges the gap between academic 
            learning and real-world application.
          </p>
          <p className="text-lg text-gray-700">
            We believe that everyone deserves access to quality education that can transform their lives
            and open doors to new opportunities. Our goal is to be a catalyst for positive change in
            the lives of our students and the communities we serve.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655" 
            alt="Team meeting" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg shadow mb-16">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Excellence</h3>
            <p className="text-gray-700">
              We are committed to excellence in everything we do, from curriculum 
              development to teaching methodologies and student support.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-700">
              We embrace innovation and continuously evolve our programs to 
              reflect the latest industry trends and technologies.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Student Success</h3>
            <p className="text-gray-700">
              We measure our success by the success of our students. Their growth, 
              achievements, and career advancement are our primary focus.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Our Story</h2>
        <p className="text-lg text-gray-700 mb-6">
          Founded in 2015, Devam Computech began with a simple idea: to create a learning 
          environment where technology education is accessible, practical, and transformative. 
          What started as a small training center with just two courses has now grown into a 
          comprehensive technical education provider offering a wide range of programs across 
          multiple technology domains.
        </p>
        <p className="text-lg text-gray-700">
          Over the years, we have helped thousands of students achieve their career goals and 
          have built strong partnerships with industry leaders. Today, we continue to expand 
          our offerings and impact, guided by our commitment to quality education and student success.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutView;
