import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://devam.tech/static/media/logo.a9e1c5e9.png" 
                alt="Devam Computech Logo" 
                className="w-12 h-12 mr-3 bg-white rounded-full p-1"
              />
              <h3 className="text-xl font-bold">Devam Computech</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering Skills, Building Futures
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Devam Computech. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Science & Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full bg-gray-700 text-white rounded-l focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
