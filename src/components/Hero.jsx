import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const roles = ["Java Full Stack Developer", "Backend Developer", "React Developer"];

const Typewriter = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 min-h-[1em] inline-block">
      {text}<span className="text-white ml-1 animate-pulse font-light">|</span>
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-slate-400 text-xs font-medium mb-10 shadow-sm"
          >
            <span className="relative flex h-2 w-2 rounded-full bg-emerald-500"></span>
            Recruiter-Focused Portfolio
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black tracking-tight mb-4 text-white">
            Shreyash <span className="text-gradient">Dhomne</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="text-2xl md:text-5xl font-bold mb-8 text-slate-200">
            <Typewriter />
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Building real-world applications using <span className="text-white font-medium">React</span> and <span className="text-white font-medium">Spring Boot</span>.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6 mb-16">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer transition-all hover:scale-105 shadow-xl shadow-blue-600/20 flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-4 rounded-full glass hover:bg-white/5 text-white font-medium transition-all hover:border-white/20 cursor-pointer"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-8">
            {[
              { icon: Github, href: 'https://github.com/shreyashdhomne', label: "GitHub" },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shreyash-dhomne', label: "LinkedIn" },
              { icon: Mail, href: 'mailto:shreyashdhomne11@gmail.com', label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <social.icon className="w-5 h-5 shadow-sm" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
