import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const location = useLocation()
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://devam.tech/static/media/logo.a9e1c5e9.png" 
              alt="Devam Computech Logo" 
              className="w-14 h-14 mr-4"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600 font-heading m-0">Devam Computech</h1>
              <p className="text-sm text-gray-500 m-0">Empowering Skills, Building Futures</p>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex">
              <li className="mx-4">
                <Link 
                  to="/" 
                  className={`font-medium relative pb-1 ${location.pathname === '/' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    Home
                  </motion.span>
                </Link>
              </li>
              <li className="mx-4">
                <Link 
                  to="/about" 
                  className={`font-medium relative pb-1 ${location.pathname === '/about' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    About Us
                  </motion.span>
                </Link>
              </li>
              <li className="mx-4">
                <Link 
                  to="/courses" 
                  className={`font-medium relative pb-1 ${location.pathname === '/courses' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    Courses
                  </motion.span>
                </Link>
              </li>
              <li className="mx-4">
                <Link 
                  to="/blog" 
                  className={`font-medium relative pb-1 ${location.pathname === '/blog' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    Blog
                  </motion.span>
                </Link>
              </li>
              <li className="mx-4">
                <Link 
                  to="/contact" 
                  className={`font-medium relative pb-1 ${location.pathname === '/contact' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    Contact
                  </motion.span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all duration-300"
            >
              <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                Get Started
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
