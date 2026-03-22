import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Star } from 'lucide-react';

const projects = [
  {
    title: "Job Application Portal (JobHunt&Co)",
    description: "A full-stack job portal built with React and Java Spring Boot. Features include user authentication via cookies, protected routing, and seamless REST API integration for managing applications and job listings.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
    tags: ["React.js", "Spring Boot", "REST API", "Cookies", "MySQL"],
    github: "https://github.com/shreyashdhomne",
    live: "https://job-application-sigma-virid.vercel.app/",
    featured: true
  },
  {
    title: "Student Management API",
    description: "Robust RESTful backend designed to manage student records with full CRUD capabilities. Built using Spring Data JPA for persistent storage and optimized database operations.",
    image: "/student_management_api_mockup_1774210832915.png",
    tags: ["Java", "Spring Boot", "MySQL", "JPA"],
    github: "https://github.com/shreyashdhomne",
    live: "#",
    featured: false
  },
  {
    title: "Orrencia Royale",
    description: "Premium hotel landing page with high-quality visual experience, background video hero, and responsive booking layouts using Bootstrap.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/shreyashdhomne",
    live: "https://responsive-hotel-booking-site.vercel.app/",
    featured: false
  },
  {
    title: "To-Do List App",
    description: "Modern productivity tool with persistent storage, dynamic task management, and smooth DOM-driven user interactions.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "HTML5", "CSS3", "Vercel"],
    github: "https://github.com/shreyashdhomne",
    live: "https://to-do-list-web-app-navy.vercel.app/",
    featured: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">
            <Star className="w-3 h-3" /> Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative glass-card rounded-3xl overflow-hidden flex flex-col border border-white/5 transition-all duration-300 hover:shadow-blue-900/10 ${project.featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''}`}
            >
              <div className={`relative overflow-hidden bg-slate-900 ${project.featured ? 'lg:w-[55%] h-64 lg:h-auto' : 'h-56'}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                
                {/* Hover Reveal Overlay UI Elements */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#030712]/90 via-slate-900/40 to-transparent">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 glass bg-white/10 hover:bg-emerald-500 hover:border-emerald-400 text-white py-3 rounded-xl flex items-center justify-center font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] text-xs">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Preview
                    </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 glass bg-white/10 hover:bg-slate-800 hover:border-slate-600 text-white py-3 rounded-xl flex items-center justify-center font-bold transition-all shadow-lg text-xs">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              <div className={`p-8 flex flex-col ${project.featured ? 'lg:w-[45%] justify-center' : 'flex-grow'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-black tracking-widest rounded-md">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/[0.03] border border-white/5 text-slate-400 text-[10px] font-medium rounded-md group-hover:border-white/10 group-hover:text-slate-200 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
