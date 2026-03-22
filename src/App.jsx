import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-slate-950 py-8 border-t border-white/5 text-center px-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} John Doe. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
