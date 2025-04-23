import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/attachments/33c141a0-8d7d-449a-b8ba-9a8607344b10/image.png" 
              alt="Devam Computech Logo" 
              className="w-14 h-14 mr-4"
              data-testid="logo"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600 font-heading m-0">Devam Computech</h1>
              <p className="text-sm text-gray-500 m-0">Empowering Skills, Building Futures</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex">
              <li className="mx-4">
                <Link 
                  to="/" 
                  className={`font-medium relative pb-1 ${location.pathname === '/' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                  data-testid="nav-home"
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
                  data-testid="nav-about"
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
                  data-testid="nav-courses"
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
                  data-testid="nav-blog"
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
                  data-testid="nav-contact"
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    Contact
                  </motion.span>
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="burger-icon"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all duration-300"
              data-testid="get-started-btn"
            >
              <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                Get Started
              </motion.span>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden mt-4 py-2 ${isMenuOpen ? 'block' : 'hidden'}`}
          data-testid="mobile-menu"
        >
          <ul className="flex flex-col space-y-3">
            <li>
              <Link 
                to="/" 
                className={`block py-2 px-4 rounded-md ${location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block py-2 px-4 rounded-md ${location.pathname === '/about' ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/courses" 
                className={`block py-2 px-4 rounded-md ${location.pathname === '/courses' ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`block py-2 px-4 rounded-md ${location.pathname === '/blog' ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block py-2 px-4 rounded-md ${location.pathname === '/contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block py-2 px-4 bg-blue-600 text-white rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
