import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

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

export default ContactSection
