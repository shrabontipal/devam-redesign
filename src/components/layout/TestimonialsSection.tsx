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

export default TestimonialsSection
