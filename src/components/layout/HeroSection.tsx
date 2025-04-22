
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 font-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Excellence in <motion.span 
                className="text-blue-600 block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >Skill Development</motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Transforming careers through quality training and industry-relevant skills development. 
              Join our programs to unlock your potential.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link 
                to="/courses" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all duration-300 text-center"
              >
                <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  Explore Courses
                </motion.span>
              </Link>
              <Link 
                to="/contact" 
                className="inline-block px-6 py-3 bg-transparent text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all duration-300 text-center"
              >
                <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  Contact Us
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
              alt="Students learning" 
              className="rounded-lg shadow-lg w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
