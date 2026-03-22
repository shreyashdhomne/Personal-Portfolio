import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-[2rem] blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="glass-card p-10 rounded-[2rem] relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">Who I am</h3>
                <p className="text-slate-300 leading-relaxed text-lg mb-6 font-light">
                  I'm a passionate developer with a keen eye for design and a drive to build scalable, user-centric applications. With a strong foundation in modern web technologies, I love transforming complex problems into elegant, intuitive interfaces.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg font-light">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while reading about the latest tech trends.
                </p>
                
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-2xl border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mb-2">3+</div>
                    <div className="text-sm text-slate-400 font-medium tracking-wide uppercase">Years Experience</div>
                  </div>
                  <div className="glass p-6 rounded-2xl border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 mb-2">50+</div>
                    <div className="text-sm text-slate-400 font-medium tracking-wide uppercase">Projects Done</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {[
              { title: "Frontend Development", desc: "Building responsive and accessible UI with React, Next.js, and modern CSS frameworks.", icon: "🎨", color: "from-blue-500/20 to-blue-500/0", borderHover: "hover:border-blue-500/30", shadowHover: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
              { title: "UI/UX Architecture", desc: "Creating intuitive user experiences and translating designs into pixel-perfect scalable code.", icon: "✨", color: "from-purple-500/20 to-purple-500/0", borderHover: "hover:border-purple-500/30", shadowHover: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]" },
              { title: "Performance Optimization", desc: "Ensuring web applications load lightning fast and run smoothly across all devices.", icon: "⚡", color: "from-emerald-500/20 to-emerald-500/0", borderHover: "hover:border-emerald-500/30", shadowHover: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]" }
            ].map((item, index) => (
              <div key={index} className={`glass p-6 rounded-2xl flex gap-6 items-start transition-all duration-500 ${item.borderHover} ${item.shadowHover} group`}>
                <div className={`text-3xl w-16 h-16 flex items-center justify-center rounded-2xl flex-shrink-0 bg-gradient-to-br ${item.color} border border-white/5`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
