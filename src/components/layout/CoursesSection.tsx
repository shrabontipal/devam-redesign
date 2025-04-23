import { Clock, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CoursesSection = () => {
  return (
    <section className="bg-gray-50 py-20" id="courses">
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
            Our <motion.span 
              className="text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >Popular Courses</motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Comprehensive training programs to advance your career
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="relative h-48">
              <motion.img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
                alt="Web Development" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                Popular
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Learn to build responsive websites using HTML, CSS, JavaScript, and modern frameworks.
              </p>
              <div className="flex justify-between text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  12 Weeks
                </span>
                <span className="flex items-center gap-1">
                  <UserCheck size={16} />
                  Beginner to Advanced
                </span>
              </div>
              <Link 
                to="/courses" 
                className="inline-block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  Learn More
                </motion.span>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="relative h-48">
              <motion.img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb" 
                alt="Mobile App Development" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Mobile App Development</h3>
              <p className="text-gray-600 mb-4">
                Master the skills to create native and cross-platform mobile applications.
              </p>
              <div className="flex justify-between text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  10 Weeks
                </span>
                <span className="flex items-center gap-1">
                  <UserCheck size={16} />
                  Intermediate
                </span>
              </div>
              <Link 
                to="/courses" 
                className="inline-block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  Learn More
                </motion.span>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="relative h-48">
              <motion.img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" 
                alt="Data Science" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                New
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Data Science & Analytics</h3>
              <p className="text-gray-600 mb-4">
                Develop skills in data analysis, machine learning, and statistical modeling.
              </p>
              <div className="flex justify-between text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  16 Weeks
                </span>
                <span className="flex items-center gap-1">
                  <UserCheck size={16} />
                  Advanced
                </span>
              </div>
              <Link 
                to="/courses" 
                className="inline-block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  Learn More
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <Link 
            to="/courses" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all duration-300"
          >
            <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              View All Courses
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CoursesSection
