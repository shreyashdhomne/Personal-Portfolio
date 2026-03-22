import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend Excellence",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    category: "Architecture & Rules",
    items: ["Node.js", "REST APIs", "GraphQL", "Git Workflow", "CI/CD", "AWS Basics"],
  },
  {
    category: "Design & UX Tools",
    items: ["Figma Design", "Prototyping", "Design Systems", "A11y Standards", "Performance"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full shadow-sm"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg font-light">
            A curated overview of the modern technologies and architectural practices I use to engineer premium digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={groupIndex}
              className="glass-card p-10 rounded-[2rem] transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-xl group cursor-default"
            >
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight group-hover:text-blue-300 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 glass text-slate-300 rounded-lg text-sm font-medium border border-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white transition-colors"
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
