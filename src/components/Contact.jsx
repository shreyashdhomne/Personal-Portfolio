import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="glass-card p-10 rounded-[2.5rem] border-white/5 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Collaboration</h3>
              <p className="text-slate-400 font-light">Looking for a full-stack developer? Let's discuss your project.</p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "shreyashdhomne11@gmail.com", href: "mailto:shreyashdhomne11@gmail.com" },
                { icon: Phone, title: "Phone", info: "+91 9172939893", href: "tel:+919172939893" },
                { icon: MapPin, title: "Location", info: "Nagpur, Maharashtra, India", href: "#" }
              ].map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                    <item.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs group-hover:text-slate-300 transition-colors">{item.info}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="glass-card p-10 rounded-[2.5rem] border-white/5 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Name</label>
                  <input type="text" id="name" className="w-full glass bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-light" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Email</label>
                  <input type="email" id="email" className="w-full glass bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-light" placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Subject</label>
                <input type="text" id="subject" className="w-full glass bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-light" placeholder="Project Inquiry" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Message</label>
                <textarea id="message" rows="4" className="w-full glass bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-light resize-none" placeholder="How can I help you?" required></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
