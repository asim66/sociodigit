import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, Cloud, Cpu, Database, Layers, Users, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: <Cloud size={24} />, title: 'Cloud Migration', desc: 'Lift-and-shift, re-platform, or full re-architecture — we plan and execute cloud migrations with zero disruption.' },
  { icon: <Cpu size={24} />, title: 'Legacy Modernisation', desc: 'Replace outdated monoliths and tech debt with modern, maintainable microservice architectures.' },
  { icon: <Database size={24} />, title: 'Data Transformation', desc: 'Migrate siloed data systems to unified data platforms — clean, connected, and analytics-ready.' },
  { icon: <Layers size={24} />, title: 'Process Automation', desc: 'Digitise and automate manual business processes to eliminate inefficiency and human error at scale.' },
  { icon: <Users size={24} />, title: 'Change Management', desc: 'People-first transformation programmes that drive adoption, upskilling, and cultural alignment.' },
  { icon: <RefreshCw size={24} />, title: 'Continuous Improvement', desc: 'Post-transformation optimisation cycles that keep your digital operations ahead of the curve.' },
];

const process = [
  { step: '01', title: 'Assess', desc: 'Map current processes, systems, and pain points across the organisation.' },
  { step: '02', title: 'Vision', desc: 'Define the target state and quantify the value of transformation.' },
  { step: '03', title: 'Plan', desc: 'Build a phased transformation roadmap with risk mitigation baked in.' },
  { step: '04', title: 'Transform', desc: 'Execute with agile delivery teams, keeping the business running throughout.' },
  { step: '05', title: 'Sustain', desc: 'Embed continuous improvement and coach internal teams for long-term success.' },
];

const DigitalTransformation = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #030f0a 0%, #020c07 100%)' }}>

      {/* HERO */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 65%)' }} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.35)', color: '#10b981' }}>
                <Zap size={16} /><span>Future-Proof Your Business</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Digital{' '}
                <span style={{ background: 'linear-gradient(135deg, #10b981, #34d399, #6ee7b7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Transformation</span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Transformation is not just about technology — it is about reimagining how your business operates. We partner with you to modernise systems, automate processes, and build a digital-first culture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Start Transformation</Link>
                <Link to="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {[{ val: '60+', label: 'Transformations Led' }, { val: '45%', label: 'Avg Cost Saving' }, { val: '2.8x', label: 'Productivity Gain' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#10b981' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Before/After visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl border p-6" style={{ background: '#040f08', borderColor: 'rgba(16,185,129,0.2)', boxShadow: '0 0 60px rgba(16,185,129,0.1)' }}>
                <div className="flex gap-6">
                  {/* Before */}
                  <div className="flex-1">
                    <div className="text-xs font-bold mb-3 text-center" style={{ color: 'rgba(239,68,68,0.7)' }}>BEFORE</div>
                    {['Manual Processes', 'Data Silos', 'Legacy Monolith', 'No Visibility'].map((item, i) => (
                      <div key={i} className="mb-2 p-2 rounded-lg text-xs text-center" style={{ background: 'rgba(239,68,68,0.05)', borderColor: 'rgba(239,68,68,0.15)', border: '1px solid', color: 'rgba(255,255,255,0.4)' }}>
                        {item}
                      </div>
                    ))}
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center">
                    <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ color: '#10b981' }}>
                      <ArrowRight size={24} />
                    </motion.div>
                  </div>
                  {/* After */}
                  <div className="flex-1">
                    <div className="text-xs font-bold mb-3 text-center" style={{ color: '#10b981' }}>AFTER</div>
                    {['Automated Workflows', 'Unified Platform', 'Microservices', 'Real-time Analytics'].map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.2 }}
                        className="mb-2 p-2 rounded-lg text-xs text-center" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399' }}>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(16,185,129,0.12)', borderColor: 'rgba(16,185,129,0.3)', color: '#10b981' }}>
                ✦ Zero Downtime
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Transformation Services</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>End-to-end transformation programmes from strategy through delivery.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(16,185,129,0.03)', borderColor: 'rgba(16,185,129,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.background = 'rgba(16,185,129,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)'; e.currentTarget.style.background = 'rgba(16,185,129,0.03)'; }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding" style={{ background: 'rgba(16,185,129,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Our Methodology</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Structured. Transparent. Business-continuity first.</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)' }} />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-black border-2 relative z-10"
                    style={{ background: '#030f0a', borderColor: '#10b981', color: '#10b981', boxShadow: '0 0 30px rgba(16,185,129,0.3)' }}>{p.step}</div>
                  <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(52,211,153,0.05))', borderColor: 'rgba(16,185,129,0.25)' }}>
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Transform{' '}
              <span style={{ background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Boldly</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's redesign how your business operates for the digital era — faster, smarter, and built for what's next.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Transformation</span><ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-outline">← All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
