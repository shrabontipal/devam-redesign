import React from 'react'
import { Laptop, Users, Award, Handshake } from 'lucide-react'

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

export default FeaturesSection
