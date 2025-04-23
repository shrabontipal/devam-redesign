import { useState } from 'react'

const Header = () => {
  const [activeTab, setActiveTab] = useState('home')
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
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
                <a 
                  href="#" 
                  className={`font-medium relative pb-1 ${activeTab === 'home' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('home')}
                >
                  Home
                </a>
              </li>
              <li className="mx-4">
                <a 
                  href="#" 
                  className={`font-medium relative pb-1 ${activeTab === 'about' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('about')}
                >
                  About Us
                </a>
              </li>
              <li className="mx-4">
                <a 
                  href="#" 
                  className={`font-medium relative pb-1 ${activeTab === 'courses' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('courses')}
                >
                  Courses
                </a>
              </li>
              <li className="mx-4">
                <a 
                  href="#" 
                  className={`font-medium relative pb-1 ${activeTab === 'blog' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('blog')}
                >
                  Blog
                </a>
              </li>
              <li className="mx-4">
                <a 
                  href="#" 
                  className={`font-medium relative pb-1 ${activeTab === 'contact' ? 'text-blue-600 after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
