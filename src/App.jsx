import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-white/5 text-center px-4 relative z-10 bg-slate-950/20 backdrop-blur-md">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Shreyash Ravikant Dhomne. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
