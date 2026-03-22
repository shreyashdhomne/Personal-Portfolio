import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend Excellence",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    accent: "blue"
  },
  {
    category: "Architecture & Rules",
    items: ["Node.js", "REST APIs", "GraphQL", "Git Workflow", "CI/CD", "AWS Basics"],
    accent: "indigo"
  },
  {
    category: "Design & UX Tools",
    items: ["Figma Design", "Prototyping", "Design Systems", "A11y Standards", "Performance"],
    accent: "emerald"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.02] border-y border-white/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg font-light">
            A curated overview of the modern technologies and architectural practices I use to engineer premium digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
              className="glass-card p-10 rounded-[2rem] group hover:-translate-y-2 transition-transform duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2.5 glass text-slate-300 rounded-xl text-sm font-medium border border-white/5 hover:border-white/20 hover:text-white hover:bg-white/10 transition-all cursor-crosshair hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
