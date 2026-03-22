import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured modern e-commerce platform with cart functionality, product filtering, and a seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1557821552-b71ae53eff27?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind CSS", "Redux"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application that helps users organize daily tasks with drag-and-drop features and progress tracking.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application showing detailed forecasts, interactive maps, and historical climate data.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "API Integration", "Tailwind CSS"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-blue-400">Projects</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent works. Each project reflects my focus on clean design and robust engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all group flex flex-col shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-blue-300 rounded-md border border-blue-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-slate-800 mt-auto">
                  <a href={project.github} className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
