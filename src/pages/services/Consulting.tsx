import React from 'react';
import { motion } from 'motion/react';
import { Compass, BarChart2, Shield, Lightbulb, Target, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <Target size={28} />, title: 'Tech Strategy', desc: 'Align your technology roadmap with long-term business goals and market opportunities.' },
  { icon: <Lightbulb size={28} />, title: 'Architecture Design', desc: 'Robust, scalable system architectures engineered to grow with your user base.' },
  { icon: <TrendingUp size={28} />, title: 'MVP Planning', desc: 'Laser-focused on your core value proposition to get your product to market faster.' },
  { icon: <Shield size={28} />, title: 'Security Audits', desc: 'Identifying vulnerabilities and ensuring your data, systems, and users are protected.' },
];

const roadmap = [
  {
    step: '01',
    title: 'Discovery & Deep Dive',
    desc: 'We immerse ourselves in your business — goals, constraints, competitive landscape, and current tech stack. No assumptions. Just facts.',
  },
  {
    step: '02',
    title: 'Strategic Blueprint',
    desc: 'We design a clear, actionable technology roadmap covering build vs. buy decisions, scaling strategy, and risk mitigation.',
  },
  {
    step: '03',
    title: 'Execution & Advisory',
    desc: 'We embed with your team to guide implementation, remove blockers, and ensure the strategy is realized with precision.',
  },
];

const stats = [
  { value: '98%', label: 'Client Retention Rate' },
  { value: '12+', label: 'Years of Expertise' },
  { value: '90%', label: 'Automation' },
  { value: 'Zero', label: 'Security Breaches' },
];

const Consulting = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #0e0900 0%, #0a0700 100%)' }}>

      {/* ── HERO ── */}
      <section className="section-padding relative overflow-hidden">
        {/* Geometric pattern bg */}
        <div className="absolute inset-0 -z-10 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245,158,11,0.15) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full -z-10"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -z-10"
          style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 65%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.3)', color: '#f59e0b' }}>
                <Compass size={16} />
                <span>Strategic Guidance</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Software{' '}
                <span style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706, #92400e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Consulting
                </span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Navigate the complex landscape of modern technology with confidence. We provide the strategic insight, architecture expertise, and executive-level guidance needed to build scalable, secure digital products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Book Strategy Session</Link>
                <Link to="/services" className="btn-outline">← All Services</Link>
              </div>
            </motion.div>

            {/* Radar visual */}
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Concentric rings */}
                {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                  <motion.div key={i}
                    animate={{ scale: [scale, scale * 1.05, scale] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute inset-0 rounded-full border"
                    style={{ borderColor: `rgba(245,158,11,${0.12 - i * 0.02})`, transform: `scale(${scale})`, top: `${(1 - scale) * 50}%`, left: `${(1 - scale) * 50}%`, width: `${scale * 100}%`, height: `${scale * 100}%` }}
                  />
                ))}
                {/* Cross lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px" style={{ background: 'rgba(245,158,11,0.15)' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-px h-full" style={{ background: 'rgba(245,158,11,0.15)' }} />
                </div>
                {/* Radar sweep */}
                <motion.div className="absolute inset-0 rounded-full overflow-hidden"
                  style={{ background: 'conic-gradient(from 0deg, rgba(245,158,11,0.15) 0deg, transparent 60deg)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                {/* Blip dots */}
                {[
                  { top: '20%', left: '65%' }, { top: '55%', left: '30%' }, { top: '70%', left: '70%' }, { top: '35%', left: '20%' }
                ].map((pos, i) => (
                  <motion.div key={i} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                    className="absolute w-2.5 h-2.5 rounded-full" style={{ ...pos, background: '#f59e0b', boxShadow: '0 0 8px #f59e0b' }} />
                ))}
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border-2" style={{ background: 'rgba(245,158,11,0.1)', borderColor: '#f59e0b', boxShadow: '0 0 30px rgba(245,158,11,0.3)', color: '#f59e0b' }}>
                    <Compass size={28} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16" style={{ borderTop: '1px solid rgba(245,158,11,0.1)', borderBottom: '1px solid rgba(245,158,11,0.1)', background: 'rgba(245,158,11,0.03)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-black mb-2" style={{ color: '#f59e0b' }}>{s.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES BENTO ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Strategic Services</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Every engagement is tailored. No cookie-cutter advice, ever.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border transition-all duration-300 group cursor-default"
                style={{ background: 'rgba(245,158,11,0.03)', borderColor: 'rgba(245,158,11,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,158,11,0.35)'; e.currentTarget.style.background = 'rgba(245,158,11,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,158,11,0.12)'; e.currentTarget.style.background = 'rgba(245,158,11,0.03)'; }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b' }}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
                <div className="mt-6 flex items-center space-x-2 text-sm font-bold" style={{ color: 'rgba(245,158,11,0.6)' }}>
                  <span>Learn more</span>
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="section-padding" style={{ background: 'rgba(245,158,11,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Our Strategic Approach</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>A proven methodology refined over 200+ consulting engagements.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-0">
            {roadmap.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-display font-black shrink-0 border"
                    style={{ background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.3)', color: '#f59e0b' }}>
                    {item.step}
                  </div>
                  {i < roadmap.length - 1 && <div className="w-px flex-1 my-2" style={{ background: 'rgba(245,158,11,0.15)', minHeight: '60px' }} />}
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(217,119,6,0.05))', borderColor: 'rgba(245,158,11,0.25)' }}>
            <div className="absolute inset-0 -z-10 opacity-30"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245,158,11,0.08) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.15) 0%, transparent 65%)' }} />
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Ready to{' '}
              <span style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Strategize</span>?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's build a roadmap for your success. Our consultants are ready to guide your technology decisions and accelerate your growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Book Free Consultation</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/case-studies" className="btn-outline">View Case Studies</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
