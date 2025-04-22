

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

export default HeroSection
