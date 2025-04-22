import { Clock, UserCheck } from 'lucide-react'

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

export default CoursesSection
