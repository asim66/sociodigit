"use client";
// @ts-nocheck
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Globe, Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const formData = new FormData(e.currentTarget);
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '2b47a16d-1bbf-4e17-8ac1-50289978b8ad';
      formData.append("access_key", accessKey);
      formData.append("subject", `New Contact Inquiry from ${formState.name || 'Website Visitor'} | Sociodigit`);
      formData.append("from_name", "Sociodigit Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', company: '', phone: '', projectType: '', budget: '', message: '' });
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      console.error('Web3Forms Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 -z-10"></div>
        <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/10 blur-[150px] -z-10" />
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-8xl font-display font-bold mb-8">
                Let's <span className="gradient-text">Connect</span>.
              </h1>

              <p className="text-2xl text-white/60 leading-relaxed">
                Ready to start your next project? Have a question for our experts? We're here to help you build and grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,85,255,0.1)]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Email Us</div>
                      <div className="text-lg font-bold text-white"><a href="mailto:hi@sociodigit.in" className="hover:text-brand-orange transition-colors">hi@sociodigit.in</a></div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,85,255,0.1)]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Call Us</div>
                      <div className="text-lg font-bold text-white">+91 7008381630</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,85,255,0.1)]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Visit Bhubaneswar Office</div>
                      <div className="text-lg font-bold text-white leading-tight">HP4, Phase 2, Brit Colony,<br/>Laxmisagar, Bhubaneswar,<br/>Odisha 751006</div>
                      <div className="text-xs text-white/50 mt-1">Mon–Fri: 9:30 AM – 6:30 PM IST</div>
                      <a 
                        href="https://maps.google.com/?q=20.2724,85.8488" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-orange hover:text-white transition-colors mt-2"
                      >
                        <span>Get Directions on Google Maps</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-display font-bold mb-8">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/sociodigit"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Sociodigit on Twitter"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sociodigit"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Sociodigit on LinkedIn"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/sociodigit"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Sociodigit on GitHub"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 glass rounded-[2.5rem] border-white/10 neon-border relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-xl font-bold mb-4 flex items-center text-white relative z-10">
                  <MessageCircle className="text-brand-orange mr-2" />
                  Quick Chat
                </h4>
                <p className="text-white/60 mb-6 text-sm relative z-10">
                  Need an immediate answer? Chat with our team on WhatsApp.
                </p>
                <a 
                  href="https://wa.me/917008381630" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex justify-center items-center space-x-2 !py-3 relative z-10"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Chat</span>
                </a>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 lg:p-16 rounded-[3rem] border-white/10 relative"
              >

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-brand-orange/10 text-brand-orange rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,85,255,0.2)]">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-4xl font-display font-bold mb-4 text-white">Message Received!</h3>
                    <p className="text-xl text-white/60 mb-12">
                      Thank you for reaching out. One of our experts will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-4">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-8 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none transition-all duration-200 text-white placeholder:text-white/40 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />


                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-4">Work Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="john@company.com"
                        className="w-full px-8 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none transition-all duration-200 text-white placeholder:text-white/20 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />

                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-4">Company</label>
                      <input 
                        type="text" 
                        name="company"
                        placeholder="Sociodigit Inc."
                        className="w-full px-8 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none transition-all duration-200 text-white placeholder:text-white/20 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40"
                        value={formState.company}
                        onChange={(e) => setFormState({...formState, company: e.target.value})}
                      />

                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-4">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="+91 7008381630"
                        className="w-full px-8 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none transition-all duration-200 text-white placeholder:text-white/20 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />

                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-4">Project Type</label>
                      <select 
                        name="project_type"
                        className="w-full px-8 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none transition-all duration-200 appearance-none text-white/70 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40"
                        value={formState.projectType}
                        onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                      >

                        <option value="" className="bg-deep-space-blue">Select Project Type</option>
                        <option value="software" className="bg-deep-space-blue">Software Development</option>
                        <option value="cloud" className="bg-deep-space-blue">Cloud & DevOps</option>
                        <option value="qa" className="bg-deep-space-blue">QA Automation</option>
                        <option value="marketing" className="bg-deep-space-blue">Digital Marketing</option>
                        <option value="consulting" className="bg-deep-space-blue">Consulting</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-4">Budget Range</label>
                      <select 
                        name="budget"
                        className="w-full px-8 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none transition-all duration-200 appearance-none text-white/70 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40"
                        value={formState.budget}
                        onChange={(e) => setFormState({...formState, budget: e.target.value})}
                      >

                        <option value="" className="bg-deep-space-blue">Select Budget</option>
                        <option value="5-10k" className="bg-deep-space-blue">$5k - $10k</option>
                        <option value="10-25k" className="bg-deep-space-blue">$10k - $25k</option>
                        <option value="25-50k" className="bg-deep-space-blue">$25k - $50k</option>
                        <option value="50k+" className="bg-deep-space-blue">$50k+</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-4">Message</label>
                      <textarea 
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project goals and challenges..."
                        className="w-full px-8 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none transition-all duration-200 resize-none text-white placeholder:text-white/40 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      />


                    </div>
                    <div className="md:col-span-2 pt-4">
                      {error && (
                        <div className="mb-4 text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-4 py-3 rounded-xl text-sm font-bold flex items-center">
                          {error}
                        </div>
                      )}
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="btn-primary w-full flex justify-center items-center space-x-2 disabled:opacity-75 disabled:cursor-not-allowed transition-all"
                      >
                        <span>{loading ? 'Sending...' : 'Send Message'}</span>
                        {!loading && <Send size={20} />}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="h-[450px] w-full relative overflow-hidden border-t border-white/5">
        <iframe
          src="https://maps.google.com/maps?q=HP4+Phase+2+Brit+Colony+Laxmisagar+Bhubaneswar+Odisha+751006&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 grayscale contrast-125 opacity-80"
          allowFullScreen
          loading="lazy"
          title="Sociodigit Office Location — Bhubaneswar, Odisha"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Overlay Pin Card */}
        <div className="absolute top-6 left-6 md:left-12 glass px-6 py-4 rounded-2xl border-white/10 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-widest">Our Office</p>
              <p className="text-sm text-white font-semibold leading-tight">Laxmisagar, Bhubaneswar</p>
              <p className="text-xs text-white/50">Odisha, India — 751006</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
