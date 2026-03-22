import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 pb-20 relative z-10">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 text-slate-300 text-sm font-medium mb-8 shadow-sm"
          >
             <span className="relative flex h-2 w-2 rounded-full bg-emerald-500"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-lg">
            Software <span className="text-gradient">Engineer</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            I craft immersive, high-performance web experiences bridging the gap between exceptional design and robust engineering.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-100}
              className="group relative px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer transition-colors shadow-lg"
            >
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
              className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium flex items-center transition-colors cursor-pointer"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-6 mt-4">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:hello@example.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
