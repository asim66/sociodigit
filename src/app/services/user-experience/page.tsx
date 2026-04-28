// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Users, Eye, MousePointer, Brain, BarChart2, Heart, ArrowRight, Compass } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: <Users size={24} />, title: 'User Research', desc: 'In-depth interviews, surveys, and ethnographic studies to understand your users at a fundamental level.' },
  { icon: <Eye size={24} />, title: 'Usability Testing', desc: 'Moderated and unmoderated sessions to uncover friction points before they reach production.' },
  { icon: <MousePointer size={24} />, title: 'Interaction Design', desc: 'Micro-interactions and motion design that make your product feel alive, intuitive, and delightful.' },
  { icon: <Brain size={24} />, title: 'Cognitive Mapping', desc: 'Journey maps and mental model analysis to align your product structure with how users actually think.' },
  { icon: <BarChart2 size={24} />, title: 'Analytics & Heatmaps', desc: 'Data-backed UX decisions using click maps, session recordings, and funnel analytics.' },
  { icon: <Heart size={24} />, title: 'Accessibility (A11y)', desc: 'WCAG 2.2 AA compliance built in from the start — inclusive design for every user.' },
];

const process = [
  { step: '01', title: 'Empathize', desc: 'Listen, observe, and understand your users through qualitative and quantitative research.' },
  { step: '02', title: 'Define', desc: 'Synthesize research into clear problem statements, personas, and journey maps.' },
  { step: '03', title: 'Ideate', desc: 'Collaborative design workshops to generate and prioritize creative solutions.' },
  { step: '04', title: 'Prototype', desc: 'Rapid low-to-high fidelity prototypes to test ideas before any code is written.' },
  { step: '05', title: 'Test & Iterate', desc: 'Continuous usability validation with real users to drive incremental improvements.' },
];

const UserExperience = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #070510 0%, #050310 100%)' }}>

      {/* ── HERO ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.06) 1px, transparent 0)', backgroundSize: '44px 44px' }} />
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 65%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.35)', color: '#8b5cf6' }}>
                <Compass size={16} />
                <span>Human-Centred by Design</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                User{' '}
                <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa, #c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Experience
                </span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Great software is invisible — users just feel it working. We design experiences grounded in real human behaviour, creating products that are effortless, accessible, and memorable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Start UX Research</Link>
                <Link href="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {[{ val: '93%', label: 'Task Success Rate' }, { val: '4.8★', label: 'Avg SUS Score' }, { val: '2.4x', label: 'Conversion Lift' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#8b5cf6' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* User Journey Visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl overflow-hidden border p-6" style={{ background: '#0a0618', borderColor: 'rgba(139,92,246,0.2)', boxShadow: '0 0 60px rgba(139,92,246,0.1)' }}>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold font-mono" style={{ color: '#8b5cf6' }}>USER JOURNEY MAP</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Persona: Sarah, 32</span>
                </div>
                {[
                  { stage: 'Awareness', emotion: 85, color: '#8b5cf6' },
                  { stage: 'Consideration', emotion: 55, color: '#a78bfa' },
                  { stage: 'Decision', emotion: 40, color: '#c4b5fd' },
                  { stage: 'Onboarding', emotion: 70, color: '#8b5cf6' },
                  { stage: 'Advocacy', emotion: 95, color: '#a78bfa' },
                ].map((item, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span style={{ color: 'rgba(255,255,255,0.5)' }}>{item.stage}</span>
                      <span style={{ color: item.color }}>{item.emotion > 70 ? '😊' : item.emotion > 50 ? '😐' : '😟'}</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${item.emotion}%` }} transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                        className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }} />
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t text-center text-xs font-bold" style={{ borderColor: 'rgba(139,92,246,0.1)', color: 'rgba(255,255,255,0.3)' }}>
                  Satisfaction Score after redesign: <span style={{ color: '#a78bfa' }}>+47%</span>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(139,92,246,0.12)', borderColor: 'rgba(139,92,246,0.3)', color: '#8b5cf6' }}>
                ✦ Research-Led Design
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">UX Services</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Every engagement is rooted in evidence, not assumptions.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(139,92,246,0.03)', borderColor: 'rgba(139,92,246,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; e.currentTarget.style.background = 'rgba(139,92,246,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.12)'; e.currentTarget.style.background = 'rgba(139,92,246,0.03)'; }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6' }}>{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-padding" style={{ background: 'rgba(139,92,246,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Design Thinking Process</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Five stages. One goal: experiences users love.</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(167,139,250,0.4), transparent)' }} />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-black border-2 relative z-10"
                    style={{ background: '#070510', borderColor: '#8b5cf6', color: '#8b5cf6', boxShadow: '0 0 30px rgba(139,92,246,0.3)' }}>
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
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(167,139,250,0.05))', borderColor: 'rgba(139,92,246,0.25)' }}>
            <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Ready to Delight{' '}
              <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Users</span>?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's turn your product into an experience your users rave about. Our UX team is ready to start the research.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start UX Engagement</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="btn-outline">← All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UserExperience;
