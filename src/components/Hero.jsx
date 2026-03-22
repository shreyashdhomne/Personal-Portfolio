import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
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
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 30 : 60);
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-400 text-xs font-bold mb-10 shadow-sm tracking-widest uppercase"
          >
            <span className="relative flex h-2 w-2 rounded-full bg-blue-500"></span>
            Java Full Stack Developer
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black tracking-tighter mb-6 text-white leading-[0.9]">
            Shreyash <span className="text-gradient">Dhomne</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="text-2xl md:text-5xl font-bold mb-8 text-slate-200 h-[1.2em]">
            <Typewriter />
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-4 font-medium leading-relaxed">
            I build real-world web applications with <span className="text-white">React</span> and <span className="text-white">Spring Boot</span>.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-sm md:text-base text-slate-500 mb-12 flex items-center justify-center gap-2 tracking-wide font-medium">
             Based in India <span className="w-1 h-1 rounded-full bg-slate-700"></span> Open to opportunities
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black cursor-pointer transition-all hover:scale-105 shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3 group"
            >
              Explore Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl glass hover:bg-white/10 text-white font-bold transition-all border border-white/10 hover:border-white/20 cursor-pointer flex items-center justify-center gap-3"
            >
              <FileText className="w-5 h-5 text-blue-400" /> View Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-10">
            {[
              { icon: Github, href: 'https://github.com/shreyashdhomne', label: "Github" },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shreyash-dhomne', label: "LinkedIn" },
              { icon: Mail, href: 'mailto:shreyashdhomne11@gmail.com', label: "Contact" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 text-slate-500 hover:text-white transition-all"
              >
                <div className="w-14 h-14 rounded-[1.25rem] glass flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] group-hover:rotate-[10deg] transition-all duration-300">
                  <social.icon className="w-6 h-6 transform group-hover:rotate-[-10deg] group-hover:scale-110 transition-all" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
