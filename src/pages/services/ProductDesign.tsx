import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, Eye, Smartphone, Layout, Heart, MousePointer, ArrowRight, Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: <Layout size={24} />, title: 'UI Design', desc: 'Visually stunning interfaces that align with your brand identity and delight your users on every screen.' },
  { icon: <Eye size={24} />, title: 'UX Research', desc: 'Deep user interviews, journey mapping, and behavioral analysis to inform every design decision.' },
  { icon: <MousePointer size={24} />, title: 'Prototyping', desc: 'Interactive high-fidelity prototypes to test and validate ideas before committing to development.' },
  { icon: <Layers size={24} />, title: 'Design Systems', desc: 'Scalable, consistent design languages and component libraries that ensure brand integrity everywhere.' },
];

const process = [
  { step: '01', title: 'Discover', color: '#a855f7', desc: 'User research, competitive analysis, and stakeholder alignment.' },
  { step: '02', title: 'Wireframe', color: '#9333ea', desc: 'Low-fidelity layouts and information architecture.' },
  { step: '03', title: 'Prototype', color: '#7c3aed', desc: 'High-fidelity interactive prototypes ready for testing.' },
  { step: '04', title: 'Test', color: '#a855f7', desc: 'Usability testing with real users and rapid iteration.' },
  { step: '05', title: 'Ship', color: '#c084fc', desc: 'Developer handoff with pixel-perfect specs and assets.' },
];

const tools = [
  { name: 'Figma', color: '#f24e1e' },
  { name: 'Adobe XD', color: '#ff61f6' },
  { name: 'Framer', color: '#0055ff' },
  { name: 'Principle', color: '#f97049' },
  { name: 'Zeplin', color: '#fdbd39' },
  { name: 'Maze', color: '#3000ba' },
];

const principles = [
  { title: 'Clarity Over Cleverness', desc: 'Every design decision must serve the user, not the designer\'s ego.' },
  { title: 'Intentional Delight', desc: 'Small, delightful moments of surprise that make products memorable.' },
  { title: 'Accessible by Default', desc: 'Inclusive design that works for everyone, regardless of ability.' },
];

const ProductDesign = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #07030f 0%, #050210 100%)' }}>

      {/* ── HERO ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.08) 0%, transparent 65%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(168,85,247,0.1)', borderColor: 'rgba(168,85,247,0.35)', color: '#a855f7' }}>
                <Sparkles size={16} />
                <span>Aesthetics & Function</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Product{' '}
                <span style={{ background: 'linear-gradient(135deg, #a855f7, #c084fc, #e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Design
                </span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We combine aesthetics with intuitive functionality to build digital products that users fall in love with. Our design-first philosophy ensures every pixel serves a purpose.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Start Designing</Link>
                <Link to="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {[{ val: '150+', label: 'Products Designed' }, { val: '4.9★', label: 'Dribbble Rating' }, { val: '100%', label: 'Client Satisfaction' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#a855f7' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Artboard / Figma-like Visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              {/* Outer canvas */}
              <div className="rounded-3xl border overflow-hidden" style={{ background: '#0d0818', borderColor: 'rgba(168,85,247,0.2)', boxShadow: '0 0 60px rgba(168,85,247,0.12)' }}>
                {/* Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-b" style={{ background: '#130c20', borderColor: 'rgba(168,85,247,0.1)' }}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>dashboard.fig · Draft</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#a855f7' }} />
                    <span className="text-xs font-bold" style={{ color: '#a855f7' }}>DESIGNING</span>
                  </div>
                </div>
                {/* Canvas */}
                <div className="p-6 relative">
                  {/* Mock UI artboard */}
                  <div className="rounded-2xl border p-4 relative" style={{ background: '#1a0f2e', borderColor: 'rgba(168,85,247,0.15)' }}>
                    {/* Mock navbar */}
                    <div className="flex justify-between items-center mb-4 pb-3 border-b" style={{ borderColor: 'rgba(168,85,247,0.1)' }}>
                      <div className="w-16 h-3 rounded-full" style={{ background: 'rgba(168,85,247,0.4)' }} />
                      <div className="flex space-x-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-8 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />)}
                      </div>
                      <div className="w-10 h-6 rounded-lg" style={{ background: 'rgba(168,85,247,0.5)' }} />
                    </div>
                    {/* Mock hero */}
                    <div className="mb-4">
                      <div className="w-48 h-4 rounded-full mb-2" style={{ background: 'rgba(168,85,247,0.3)' }} />
                      <div className="w-64 h-3 rounded-full mb-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
                      <div className="w-56 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    </div>
                    {/* Mock cards */}
                    <div className="grid grid-cols-3 gap-2">
                      {[['#a855f7', '#7c3aed'], ['#7c3aed', '#a855f7'], ['#c084fc', '#a855f7']].map(([c1, c2], i) => (
                        <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                          className="rounded-xl p-3 border" style={{ background: `linear-gradient(135deg, ${c1}15, ${c2}08)`, borderColor: `${c1}25` }}>
                          <div className="w-6 h-6 rounded-lg mb-2" style={{ background: `${c1}40` }} />
                          <div className="w-full h-2 rounded-full mb-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
                          <div className="w-3/4 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {/* Cursor */}
                  <motion.div animate={{ x: [80, 120, 90, 130, 80], y: [60, 80, 50, 100, 60] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute" style={{ top: '30%', left: '30%' }}>
                    <MousePointer size={18} style={{ color: '#a855f7', filter: 'drop-shadow(0 0 6px #a855f7)' }} />
                  </motion.div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(168,85,247,0.12)', borderColor: 'rgba(168,85,247,0.3)', color: '#a855f7' }}>
                ✦ Mobile First
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Design Services</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>End-to-end design craft — from first sketch to polished product.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(168,85,247,0.03)', borderColor: 'rgba(168,85,247,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'; e.currentTarget.style.background = 'rgba(168,85,247,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.12)'; e.currentTarget.style.background = 'rgba(168,85,247,0.03)'; }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(168,85,247,0.12)', color: '#a855f7' }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-padding" style={{ background: 'rgba(168,85,247,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Our Design Process</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>A disciplined, creative process that consistently ships great work.</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(192,132,252,0.4), transparent)' }} />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-display font-black border-2 relative z-10"
                    style={{ background: '#07030f', borderColor: p.color, color: p.color, boxShadow: `0 0 25px ${p.color}44` }}>
                    {p.step}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS + PRINCIPLES ── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Tools */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-display font-bold mb-10">Tools We Use</h2>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool, i) => (
                  <motion.div key={tool.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex items-center space-x-3 px-5 py-3 rounded-2xl border cursor-default transition-all"
                    style={{ background: `${tool.color}12`, borderColor: `${tool.color}30` }}>
                    <div className="w-6 h-6 rounded-md" style={{ background: tool.color }} />
                    <span className="font-bold text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{tool.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 flex space-x-8">
                {[
                  { icon: <Smartphone size={28} />, label: 'Mobile First' },
                  { icon: <Layout size={28} />, label: 'Responsive' },
                  { icon: <Sparkles size={28} />, label: 'Delightful' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div style={{ color: '#a855f7' }}>{item.icon}</div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Principles */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-display font-bold mb-10">Design Principles</h2>
              <div className="space-y-6">
                {principles.map((p, i) => (
                  <div key={i} className="p-8 rounded-3xl border"
                    style={{ background: 'rgba(168,85,247,0.04)', borderColor: 'rgba(168,85,247,0.15)' }}>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(168,85,247,0.12)', color: '#a855f7' }}>
                        <Heart size={18} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2" style={{ color: '#c084fc' }}>{p.title}</h4>
                        <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border"
            style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(192,132,252,0.06), rgba(233,121,249,0.05))', borderColor: 'rgba(168,85,247,0.25)' }}>
            <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.18) 0%, transparent 65%)' }} />
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Ready to{' '}
              <span style={{ background: 'linear-gradient(135deg, #a855f7, #c084fc, #e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Elevate</span>{' '}Your UX?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's build a product that your users love. Our designers are ready to craft something extraordinary.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Your Design Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-outline">← All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDesign;
