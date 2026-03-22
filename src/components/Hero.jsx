import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Abstract Background Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1], 
          rotate: [0, -90, 0],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] -z-10 mix-blend-screen" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 pb-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 text-slate-300 text-sm font-medium mb-8"
          >
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            Software <span className="text-gradient">Engineer</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            I craft immersive, high-performance web experiences bridging the gap between exceptional design and robust engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-100}
              className="group relative px-8 py-4 rounded-full bg-white text-slate-950 font-bold overflow-hidden cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center">
                Explore Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium flex items-center transition-all hover:border-white/20 hover:scale-105 cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:hello@example.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
