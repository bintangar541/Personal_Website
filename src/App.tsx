import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/NavBar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
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

        <footer className="py-10 border-t border-gray-200 dark:border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Bintang Ardhian Pratama. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
