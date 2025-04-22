import { useState } from 'react'
import { 
  Laptop, 
  Users, 
  Award, 
  Handshake, 
  Clock, 
  UserCheck, 
  MapPin, 
  Phone, 
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react'

const Header = () => {
  const [activeTab, setActiveTab] = useState('home')
  
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

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Excellence in <span className="text-blue-600 block">Skill Development</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Transforming careers through quality training and industry-relevant skills development. 
              Join our programs to unlock your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#courses" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all duration-300 text-center"
              >
                Explore Courses
              </a>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-transparent text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
              alt="Students learning" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Why Choose <span className="text-blue-600">Devam Computech</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the advantages that set us apart
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Laptop size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4">Industry-Relevant Curriculum</h3>
            <p className="text-gray-600">
              Our courses are designed with input from industry experts to ensure you learn skills that employers value.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from experienced professionals who bring real-world knowledge to the classroom.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4">Recognized Certification</h3>
            <p className="text-gray-600">
              Earn certificates that are recognized by leading companies and institutions.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4">Placement Assistance</h3>
            <p className="text-gray-600">
              Get support in finding job opportunities through our network of industry partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const CoursesSection = () => {
  return (
    <section className="bg-gray-50 py-20" id="courses">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Our <span className="text-blue-600">Popular Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive training programs to advance your career
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
                alt="Web Development" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
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
              <a 
                href="#" 
                className="inline-block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb" 
                alt="Mobile App Development" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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
              <a 
                href="#" 
                className="inline-block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" 
                alt="Data Science" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                New
              </div>
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
              <a 
                href="#" 
                className="inline-block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all duration-300"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Success stories from our graduates
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-4">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md min-w-[350px] max-w-xl flex-1">
            <div className="mb-6 relative px-6">
              <p className="italic text-gray-800 relative">
                "The training at Devam Computech transformed my career. The hands-on approach and industry-focused curriculum helped me secure a job at a leading tech company."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Student" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold mb-1">Rajesh Kumar</h4>
                <p className="text-sm text-gray-600">Web Developer at TechSolutions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md min-w-[350px] max-w-xl flex-1">
            <div className="mb-6 relative px-6">
              <p className="italic text-gray-800 relative">
                "The instructors are extremely knowledgeable and supportive. They went above and beyond to ensure I understood complex concepts and could apply them in real-world scenarios."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Student" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold mb-1">Priya Sharma</h4>
                <p className="text-sm text-gray-600">Mobile App Developer at InnovateTech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Get in <span className="text-blue-600">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                We're here to answer your questions
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Address</h4>
                  <p className="text-gray-600">
                    Devam Bhaban, Thakurpara, Malancha, Bishnupur, Bankura, West Bengal, PIN - 722122
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone</h4>
                  <p className="text-gray-600">
                    +91 7001413211 / +91 9434189535
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <p className="text-gray-600">
                    devamco@gmail.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Your phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors resize-y"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                Submit Your Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://devam.tech/static/media/logo.a9e1c5e9.png" 
                alt="Devam Computech Logo" 
                className="w-12 h-12"
              />
              <h3 className="text-xl font-bold">Devam Computech</h3>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-10">
            <div className="w-full sm:w-auto">
              <h4 className="text-lg font-bold mb-4 pb-2 relative after:absolute after:w-10 after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">Contact</a></li>
              </ul>
            </div>
            
            <div className="w-full sm:w-auto">
              <h4 className="text-lg font-bold mb-4 pb-2 relative after:absolute after:w-10 after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0">
                Courses
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">Mobile App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">Data Science</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">Digital Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:pl-1">Graphic Design</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Devam Computech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
