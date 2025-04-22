import Header from './components/layout/Header'
import HeroSection from './components/layout/HeroSection'
import FeaturesSection from './components/layout/FeaturesSection'
import CoursesSection from './components/layout/CoursesSection'
import TestimonialsSection from './components/layout/TestimonialsSection'
import ContactSection from './components/layout/ContactSection'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
