import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: "Job Application Portal (JobHunt&Co)",
    description: "A complete job application platform with authentication and protected routes. Features include cookie-based sessions, comprehensive REST API integration, and a production-ready React frontend.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
    tags: ["React.js", "Spring Boot", "MySQL", "Authentication", "Tailwind"],
    github: "https://github.com/shreyashdhomne",
    live: "https://job-application-sigma-virid.vercel.app/",
    featured: true
  },
  {
    title: "Student Management API",
    description: "Professional RESTful service designed to manage academic records with full CRUD operations. Optimized for scalability using Spring Data JPA and MySQL persistence.",
    image: "/student_management_api_mockup_1774210832915.png",
    tags: ["Java", "Spring Boot", "MySQL", "Spring Data JPA", "REST API"],
    github: "https://github.com/shreyashdhomne",
    live: "#",
    featured: false
  },
  {
    title: "Orrencia Royale",
    description: "Premium hotel management frontend with responsive layouts, immersive video hero sections, and high-quality UI branding for a luxury experience.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    github: "https://github.com/shreyashdhomne",
    live: "https://responsive-hotel-booking-site.vercel.app/",
    featured: false
  },
  {
    title: "To-Do List App",
    description: "Sleek productivity tool with modular JavaScript and persistent localStorage, delivering a seamless task management experience.",
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 uppercase">
            <Star className="w-3 h-3 fill-blue-500/20" /> Selected Works
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white leading-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative glass-card rounded-[2.5rem] overflow-hidden flex flex-col border border-white/5 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10 ${project.featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''}`}
            >
              <div className={`relative overflow-hidden bg-slate-900 ${project.featured ? 'lg:w-[58%] h-72 lg:h-auto' : 'h-64'}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
                />
                
                {/* Hover Reveal Overlay UI Elements */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
                  <div className="flex gap-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 glass bg-white/10 hover:bg-white text-slate-950 hover:text-slate-950 rounded-2xl py-4 flex items-center justify-center font-black transition-all shadow-2xl text-[10px] uppercase tracking-widest bg-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Preview
                    </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 glass bg-white/5 hover:bg-slate-800 text-white rounded-2xl py-4 flex items-center justify-center font-black transition-all shadow-2xl text-[10px] uppercase tracking-widest border border-white/10">
                      <Github className="w-4 h-4 mr-2" />
                      Github Code
                    </a>
                  </div>
                </div>
              </div>

              <div className={`p-10 flex flex-col ${project.featured ? 'lg:w-[42%] justify-center' : 'flex-grow'}`}>
                <div className="flex items-center gap-4 mb-6">
                  {project.featured && (
                    <span className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-black tracking-widest rounded-lg">
                      Featured Work
                    </span>
                  )}
                  <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/[0.03] border border-white/5 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-lg group-hover:border-blue-500/20 group-hover:text-blue-300 transition-all">
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
