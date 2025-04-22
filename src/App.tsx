import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Toaster } from 'sonner'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomeView from './pages/HomeView'
import AboutView from './pages/AboutView'
import CoursesView from './pages/CoursesView'
import BlogView from './pages/BlogView'
import ContactView from './pages/ContactView'

const AnimationLayout = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/courses" element={<CoursesView />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <AnimationLayout />
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
