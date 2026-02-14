import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/NavBar';
import ParticleBackground from './components/ParticleBackground';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { AnimatePresence } from 'framer-motion';
import { Github, Instagram } from 'lucide-react';
import SEO from './components/SEO';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Check if user has already seen loading screen this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');

    if (!hasSeenLoading) {
      setShowLoading(true);
      sessionStorage.setItem('hasSeenLoading', 'true');
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <AnimatePresence>
        {showLoading && isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <SEO
        title="Bintang Ardhian Pratama - Portfolio"
        description="Portfolio of Bintang Ardhian Pratama, a passionate developer."
        name="Bintang Ardhian Pratama"
        type="website"
      />

      <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 selection:bg-primary-500/30">
        <ParticleBackground />
        <NavBar />

        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>

        <footer className="py-10 border-t border-gray-200 dark:border-white/5 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/bintangar541"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-primary-500 dark:hover:bg-primary-500 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.instagram.com/ardhnn10/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-primary-500 dark:hover:bg-primary-500 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Bintang Ardhian Pratama. All rights reserved.</p>
        </footer>

        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
