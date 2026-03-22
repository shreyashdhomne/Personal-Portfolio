import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured modern e-commerce platform with cart functionality, real-time product filtering, secure payment gateways, and a seamless checkout experience. Built from the ground up for performance and scalability.",
    image: "https://images.unsplash.com/photo-1557821552-b71ae53eff27?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Next.js", "Tailwind CSS", "Redux", "Stripe"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A productivity application that helps users organize daily tasks with drag-and-drop features and progress tracking. Supports real-time collaboration across multiple devices.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application showing detailed forecasts, interactive layered maps, and extensive historical climate data integrations for meteorology students.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "API Integration", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-300 text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4" />
            Portfolio Highlights
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg font-light">
            Here are some of my recent works. Each project reflects my focus on clean design, fluid animations, and robust engineering.
          </p>
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
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`group relative glass-card rounded-[2rem] overflow-hidden flex flex-col border border-white/[0.08] hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-colors duration-500 ${project.featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''}`}
            >
              <div className={`relative overflow-hidden ${project.featured ? 'lg:w-[60%] h-64 lg:h-auto' : 'h-64'}`}>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Image */}
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Hover Reveal Overlay UI Elements */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#030712]/90 via-slate-900/40 to-transparent">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a href={project.live} className="flex-1 glass bg-white/10 hover:bg-emerald-500 hover:border-emerald-400 text-white py-3 rounded-xl flex items-center justify-center font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Preview
                    </a>
                    <a href={project.github} className="flex-1 glass bg-white/10 hover:bg-slate-800 hover:border-slate-600 text-white py-3 rounded-xl flex items-center justify-center font-bold transition-all shadow-lg">
                      <Github className="w-5 h-5 mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              <div className={`p-8 flex flex-col flex-grow relative z-20 bg-slate-950/40 backdrop-blur-sm ${project.featured ? 'lg:w-[40%] justify-center' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                      Featured
                    </span>
                  )}
                </div>

                <p className={`text-slate-400 flex-grow leading-relaxed font-light ${project.featured ? 'text-lg mb-8' : 'text-sm mb-6'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-semibold px-3 py-1.5 glass text-blue-300 rounded-lg border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile fallback links */}
                <div className="flex gap-6 pt-6 mt-6 border-t border-white/10 lg:hidden">
                  <a href={project.github} className="flex items-center text-sm font-semibold text-slate-300 hover:text-white transition-colors group/link">
                    <Github className="w-5 h-5 mr-2 group-hover/link:text-blue-400 transition-colors" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center text-sm font-semibold text-slate-300 hover:text-white transition-colors group/link">
                    <ExternalLink className="w-5 h-5 mr-2 group-hover/link:text-emerald-400 transition-colors" />
                    Live
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
