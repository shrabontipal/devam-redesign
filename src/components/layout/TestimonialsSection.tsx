import { motion } from 'framer-motion'

const TestimonialsSection = () => {
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
            What Our <motion.span 
              className="text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >Students Say</motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Success stories from our graduates
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg shadow-md min-w-[350px] max-w-xl flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="mb-6 relative px-6">
              <motion.p 
                className="italic text-gray-800 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                "The training at Devam Computech transformed my career. The hands-on approach and industry-focused curriculum helped me secure a job at a leading tech company."
              </motion.p>
            </div>
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <motion.img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Student" 
                className="w-14 h-14 rounded-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <div>
                <h4 className="text-lg font-bold mb-1">Rajesh Kumar</h4>
                <p className="text-sm text-gray-600">Web Developer at TechSolutions</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg shadow-md min-w-[350px] max-w-xl flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="mb-6 relative px-6">
              <motion.p 
                className="italic text-gray-800 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                "The instructors are extremely knowledgeable and supportive. They went above and beyond to ensure I understood complex concepts and could apply them in real-world scenarios."
              </motion.p>
            </div>
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.0 }}
            >
              <motion.img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Student" 
                className="w-14 h-14 rounded-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <div>
                <h4 className="text-lg font-bold mb-1">Priya Sharma</h4>
                <p className="text-sm text-gray-600">Mobile App Developer at InnovateTech</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
