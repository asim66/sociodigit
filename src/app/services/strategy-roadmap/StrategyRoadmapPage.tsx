// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Map, Target, TrendingUp, BarChart2, Lightbulb, GitBranch, ArrowRight, Compass } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: <Map size={24} />, title: 'Technology Roadmap', desc: 'A clear, phased plan mapping your tech evolution — from today\'s stack to the platform that scales with your ambition.' },
  { icon: <Target size={24} />, title: 'OKR Alignment', desc: 'Connecting engineering milestones directly to business objectives, so every sprint moves the needle.' },
  { icon: <TrendingUp size={24} />, title: 'Growth Modelling', desc: 'Scenario planning for 10x, 50x, and 100x scale — built into your architecture from day one.' },
  { icon: <BarChart2 size={24} />, title: 'Market Analysis', desc: 'Competitive intelligence and technology benchmarking to position your product for maximum market impact.' },
  { icon: <Lightbulb size={24} />, title: 'Innovation Sprints', desc: 'Structured ideation workshops to identify new product opportunities and disruptive technology bets.' },
  { icon: <GitBranch size={24} />, title: 'Prioritisation Frameworks', desc: 'RICE, MoSCoW, and custom scoring models to make confident build-vs-buy decisions.' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive workshops to understand your vision, constraints, and market context.' },
  { step: '02', title: 'Assessment', desc: 'Audit your current stack, team capabilities, and competitive landscape.' },
  { step: '03', title: 'Blueprint', desc: 'Design a phased roadmap with clear milestones, owners, and success metrics.' },
  { step: '04', title: 'Align', desc: 'Present and align stakeholders across product, engineering, and business.' },
  { step: '05', title: 'Execute', desc: 'Ongoing advisory to keep execution on track and adapt to new learnings.' },
];

const StrategyRoadmap = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #060412 0%, #040310 100%)' }}>

      {/* HERO */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)' }} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.35)', color: '#6366f1' }}>
                <Compass size={16} /><span>Navigate with Clarity</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Strategy &{' '}
                <span style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8, #a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Roadmap</span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                The clearest path from where you are to where you want to be. We translate business ambitions into actionable, sequenced technology roadmaps that your entire organisation can execute against.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Book Strategy Session</Link>
                <Link href="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {[{ val: '200+', label: 'Roadmaps Delivered' }, { val: '98%', label: 'On-Time Delivery' }, { val: '3.2x', label: 'Avg Revenue Impact' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#6366f1' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Roadmap timeline visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl border p-6" style={{ background: '#07051a', borderColor: 'rgba(99,102,241,0.2)', boxShadow: '0 0 60px rgba(99,102,241,0.1)' }}>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold font-mono" style={{ color: '#6366f1' }}>PRODUCT ROADMAP — 2025</span>
                </div>
                {[
                  { quarter: 'Q1', label: 'Foundation & Auth', progress: 100, color: '#6366f1' },
                  { quarter: 'Q2', label: 'Core Features MVP', progress: 80, color: '#818cf8' },
                  { quarter: 'Q3', label: 'Scale & Performance', progress: 45, color: '#a5b4fc' },
                  { quarter: 'Q4', label: 'Enterprise Tier', progress: 10, color: '#6366f1' },
                ].map((item, i) => (
                  <div key={i} className="mb-5">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-bold" style={{ color: item.color }}>{item.quarter}</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                      <span style={{ color: item.color }}>{item.progress}%</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${item.progress}%` }} transition={{ duration: 1.2, delay: 0.3 + i * 0.2 }}
                        className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`, boxShadow: `0 0 10px ${item.color}66` }} />
                    </div>
                  </div>
                ))}
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(99,102,241,0.12)', borderColor: 'rgba(99,102,241,0.3)', color: '#6366f1' }}>
                🗺 Clear Direction
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">What We Deliver</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Strategic outputs that give your organisation clarity, confidence, and momentum.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(99,102,241,0.03)', borderColor: 'rgba(99,102,241,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.background = 'rgba(99,102,241,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.12)'; e.currentTarget.style.background = 'rgba(99,102,241,0.03)'; }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}>{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding" style={{ background: 'rgba(99,102,241,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Our Approach</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>A proven consulting methodology refined across 200+ engagements.</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }} />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-black border-2 relative z-10"
                    style={{ background: '#060412', borderColor: '#6366f1', color: '#6366f1', boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}>{p.step}</div>
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
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(129,140,248,0.05))', borderColor: 'rgba(99,102,241,0.25)' }}>
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Define Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>North Star</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's turn your vision into a clear, executable roadmap that your whole team can rally behind.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Book Strategy Session</span><ArrowRight size={20} />
              </Link>
              <Link href="/services" className="btn-outline">← All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StrategyRoadmap;
