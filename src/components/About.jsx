import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-20 text-balance">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">About <span className="text-gradient">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-[2rem] blur-[60px] opacity-10"></div>
              <div className="glass-card p-10 rounded-[2.5rem] relative z-10 border-white/5">
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">System Architect</h3>
                <p className="text-slate-400 leading-relaxed md:text-lg mb-6 font-light">
                  I am a <span className="text-white">Java Full Stack Developer</span> with a strong foundation in building both frontend and backend web applications.
                </p>
                <p className="text-slate-400 leading-relaxed md:text-lg mb-8 font-light">
                  I work with <span className="text-white">React</span> to create responsive user interfaces and use <span className="text-white">Java & Spring Boot</span> to develop RESTful APIs and robust backend systems.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 glass rounded-2xl border-white/5 hover:border-blue-500/20 transition-all">
                    <div className="text-3xl font-black text-white mb-1">5+</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Technologies</div>
                  </div>
                  <div className="p-6 glass rounded-2xl border-white/5 hover:border-emerald-500/20 transition-all">
                    <div className="text-3xl font-black text-white mb-1">3+</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Real-World Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { title: "Backend Architecture", desc: "Designing robust, scalable APIs and microservices using Java and Spring Boot.", icon: "⚙️" },
              { title: "Frontend Engineering", desc: "Building responsive and dynamic user interfaces with React and Tailwind CSS.", icon: "🎨" },
              { title: "Full Stack Sync", desc: "Seamlessly connecting RESTful backends with modern frontend frameworks.", icon: "🔗" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group p-6 glass rounded-2xl border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all flex gap-6 items-center"
              >
                <div className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
