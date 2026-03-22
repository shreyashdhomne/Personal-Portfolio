import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Spring Data JPA", "REST API"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Postman", "Maven"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-spacing relative overflow-hidden bg-white/[0.01]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={groupIndex}
              className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
            >
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2 w-full">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skillGroup.items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/[0.03] text-slate-300 rounded-lg text-xs font-medium border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
