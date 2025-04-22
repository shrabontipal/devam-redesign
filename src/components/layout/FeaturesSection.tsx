import React from 'react'
import { Laptop, Users, Award, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Why Choose <motion.span 
              className="text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >Devam Computech</motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Discover the advantages that set us apart
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Laptop size={30} />
            </motion.div>
            <h3 className="text-xl font-bold mb-4">Industry-Relevant Curriculum</h3>
            <p className="text-gray-600">
              Our courses are designed with input from industry experts to ensure you learn skills that employers value.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Users size={30} />
            </motion.div>
            <h3 className="text-xl font-bold mb-4">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from experienced professionals who bring real-world knowledge to the classroom.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Award size={30} />
            </motion.div>
            <h3 className="text-xl font-bold mb-4">Recognized Certification</h3>
            <p className="text-gray-600">
              Earn certificates that are recognized by leading companies and institutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Handshake size={30} />
            </motion.div>
            <h3 className="text-xl font-bold mb-4">Placement Assistance</h3>
            <p className="text-gray-600">
              Get support in finding job opportunities through our network of industry partners.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
