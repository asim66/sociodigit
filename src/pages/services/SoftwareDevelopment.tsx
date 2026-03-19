import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Code2, Terminal, Database, Globe, GitBranch, ArrowRight, CheckCircle2, Cpu, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const techStack = [
  { name: 'React', color: '#61DAFB', letter: 'R' },
  { name: 'Next.js', color: '#ffffff', letter: 'N' },
  { name: 'Node.js', color: '#68A063', letter: 'N' },
  { name: 'TypeScript', color: '#3178C6', letter: 'T' },
  { name: 'Python', color: '#FFD43B', letter: 'P' },
  { name: 'Go', color: '#00ADD8', letter: 'G' },
  { name: 'PostgreSQL', color: '#336791', letter: 'P' },
  { name: 'Redis', color: '#FF4438', letter: 'R' },
  { name: 'Docker', color: '#2496ED', letter: 'D' },
  { name: 'GraphQL', color: '#E10098', letter: 'G' },
  { name: 'AWS', color: '#FF9900', letter: 'A' },
  { name: 'Kafka', color: '#231F20', letter: 'K' },
];

const codeLines = [
  { text: '// Sociodigit Engineering Engine v3.0', color: '#4a5568' },
  { text: 'import { scalability, performance } from "@sociodigit/core";', color: '#68a063' },
  { text: '', color: '' },
  { text: 'const buildProduct = async (vision: ClientVision) => {', color: '#61dafb' },
  { text: '  const blueprint = await architect.design(vision);', color: '#a0aec0' },
  { text: '  const code = engineers.write(blueprint, {', color: '#a0aec0' },
  { text: '    quality: "exceptional",', color: '#ffd43b' },
  { text: '    security: "enterprise-grade",', color: '#ffd43b' },
  { text: '    scalability: Infinity,', color: '#ffd43b' },
  { text: '  });', color: '#a0aec0' },
  { text: '  await qa.test(code); // 100% coverage', color: '#68a063' },
  { text: '  return deploy.toProduction(code); ✓', color: '#e10098' },
  { text: '};', color: '#61dafb' },
];

const features = [
  { icon: <Layers size={24} />, title: 'Custom SaaS Platforms', desc: 'Scalable, multi-tenant architectures built for modern business needs and rapid growth.' },
  { icon: <Globe size={24} />, title: 'Enterprise Web Apps', desc: 'Robust internal tools and customer-facing portals with complex business logic.' },
  { icon: <Database size={24} />, title: 'API Development', desc: 'Secure, well-documented RESTful and GraphQL APIs for seamless system integration.' },
  { icon: <Terminal size={24} />, title: 'Legacy Modernization', desc: 'Migrating outdated systems to modern stacks — zero data loss, full business continuity.' },
  { icon: <Cpu size={24} />, title: 'Microservices', desc: 'Breaking monoliths into scalable, independently deployable microservice architectures.' },
  { icon: <GitBranch size={24} />, title: 'Open Source Contrib', desc: 'Active contribution to the open-source ecosystem, building on proven foundations.' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'Deep dive into your business requirements, technical constraints, and success metrics.' },
  { step: '02', title: 'Architecture', desc: 'Design a battle-tested system architecture that scales with your ambitions.' },
  { step: '03', title: 'Development', desc: 'Agile sprints with continuous delivery, code reviews, and transparent progress.' },
  { step: '04', title: 'QA & Testing', desc: 'Exhaustive automated and manual testing across all layers of the stack.' },
  { step: '05', title: 'Deploy & Beyond', desc: 'Zero-downtime deployments, monitoring, and long-term performance partnership.' },
];

const SoftwareDevelopment = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #020d14 0%, #040a10 100%)' }}>

      {/* ── HERO ── */}
      <section className="section-padding relative overflow-hidden">
        {/* Grid lines bg */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(0,136,255,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border" style={{ background: 'rgba(0,136,255,0.1)', borderColor: 'rgba(0,136,255,0.3)', color: '#00aaff' }}>
                <Code2 size={16} />
                <span>Engineering Excellence</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Software &{' '}
                <span style={{ background: 'linear-gradient(135deg, #00aaff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Web Dev
                </span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We build high-performance, scalable software that empowers businesses to thrive. Our engineering-first mindset ensures every line of code is purposeful, clean, and built to last.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Start Your Project</Link>
                <Link to="/services" className="btn-outline">← All Services</Link>
              </div>
              {/* quick stats */}
              <div className="flex gap-10 mt-14">
                {[{ val: '200+', label: 'Projects Shipped' }, { val: '99.9%', label: 'Uptime SLA' }, { val: '12+', label: 'Years Experience' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#00aaff' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Code Editor Visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl overflow-hidden border" style={{ background: '#0d1117', borderColor: 'rgba(0,136,255,0.2)', boxShadow: '0 0 60px rgba(0,136,255,0.15), 0 0 120px rgba(0,255,136,0.05)' }}>
                {/* Title bar */}
                <div className="flex items-center justify-between px-5 py-4 border-b" style={{ background: '#161b22', borderColor: 'rgba(255,255,255,0.06)' }}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>buildProduct.ts</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold" style={{ color: '#00ff88' }}>LIVE</span>
                  </div>
                </div>
                {/* Code */}
                <div className="p-6 font-mono text-sm leading-8">
                  {codeLines.map((line, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                      <div className="flex">
                        <span className="w-8 shrink-0 text-right mr-5 text-xs leading-8" style={{ color: 'rgba(255,255,255,0.15)' }}>{line.text ? i + 1 : ''}</span>
                        <span style={{ color: line.color || 'transparent' }}>{line.text || '\u00a0'}</span>
                      </div>
                    </motion.div>
                  ))}
                  {/* Blinking cursor */}
                  <div className="flex mt-1">
                    <span className="w-8 shrink-0 mr-5" />
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2.5 h-5 rounded-sm"
                      style={{ background: '#00aaff' }}
                    />
                  </div>
                </div>
              </div>
              {/* floating badges */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-6 -right-6 px-4 py-2 rounded-2xl text-xs font-bold border" style={{ background: 'rgba(0,255,136,0.1)', borderColor: 'rgba(0,255,136,0.3)', color: '#00ff88' }}>
                ✓ Build Passed
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute -bottom-6 -left-6 px-4 py-2 rounded-2xl text-xs font-bold border" style={{ background: 'rgba(0,136,255,0.1)', borderColor: 'rgba(0,136,255,0.3)', color: '#00aaff' }}>
                ⚡ 98ms Response
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">What We Build</h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>From startup MVPs to enterprise platforms — no challenge too complex.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border group hover:border-opacity-50 transition-all duration-300 cursor-default"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(0,136,255,0.15)', '--hover-color': 'rgba(0,136,255,0.3)' } as any}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,136,255,0.4)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(0,136,255,0.15)')}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300" style={{ background: 'rgba(0,136,255,0.1)', color: '#00aaff' }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section-padding" style={{ background: 'rgba(0,136,255,0.03)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Tech Stack</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Battle-tested technologies chosen for performance, reliability, and developer experience.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center space-x-3 px-5 py-3 rounded-2xl border cursor-default transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: tech.color + '22', color: tech.color }}>{tech.letter}</div>
                <span className="font-bold text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">How We Build</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>A proven, transparent process from idea to production.</p>
          </motion.div>
          <div className="relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,136,255,0.3), rgba(0,255,136,0.3), transparent)' }} />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-black border-2 relative z-10"
                    style={{ background: '#020d14', borderColor: i % 2 === 0 ? '#00aaff' : '#00ff88', color: i % 2 === 0 ? '#00aaff' : '#00ff88', boxShadow: `0 0 30px ${i % 2 === 0 ? 'rgba(0,136,255,0.3)' : 'rgba(0,255,136,0.3)'}` }}>
                    {p.step}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border"
            style={{ background: 'linear-gradient(135deg, rgba(0,136,255,0.08), rgba(0,255,136,0.05))', borderColor: 'rgba(0,136,255,0.25)' }}>
            <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(0,136,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,136,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10" style={{ background: 'radial-gradient(ellipse, rgba(0,136,255,0.15) 0%, transparent 70%)' }} />
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Ready to Build Something{' '}
              <span style={{ background: 'linear-gradient(135deg, #00aaff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Extraordinary</span>?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's turn your vision into a high-performance digital product. Our engineers are ready to architect and build your next big thing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/case-studies" className="btn-outline">See Our Work</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
