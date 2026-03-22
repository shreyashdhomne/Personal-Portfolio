import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full shadow-sm"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg font-light">
            Have a question or want to work together? Leave a message below or connect with me directly via email.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="glass-card p-10 rounded-[2rem] shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Contact Information</h3>
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", info: "hello@example.com", href: "mailto:hello@example.com" },
                { icon: Phone, title: "Phone", info: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: MapPin, title: "Location", info: "San Francisco, CA", href: "#" }
              ].map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-14 h-14 glass text-blue-400 rounded-2xl flex items-center justify-center flex-shrink-0 border-white/10 group-hover:border-blue-500/50 group-hover:shadow-md transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-lg group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 font-light text-base group-hover:text-white transition-colors">
                      {item.info}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-8 glass bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-2xl shadow-inner">
              <p className="text-base text-slate-300 leading-relaxed font-light">
                I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it!
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="glass-card p-10 rounded-[2rem] space-y-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-3 tracking-wide">Your Name</label>
                  <input type="text" id="name" className="w-full glass bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white/[0.05] transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3 tracking-wide">Your Email</label>
                  <input type="email" id="email" className="w-full glass bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white/[0.05] transition-all" placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-3 tracking-wide">Subject</label>
                <input type="text" id="subject" className="w-full glass bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white/[0.05] transition-all" placeholder="Project Inquiry" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3 tracking-wide">Message</label>
                <textarea id="message" rows="5" className="w-full glass bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white/[0.05] transition-all resize-none" placeholder="Hello..." required></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
