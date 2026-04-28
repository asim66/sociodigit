// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Search, BarChart2, Users, Mail, Megaphone, ArrowRight, Zap, Target } from 'lucide-react';
import Link from 'next/link';

const channels = [
  { icon: <Search size={22} />, label: 'SEO', color: '#f97316' },
  { icon: <Target size={22} />, label: 'PPC', color: '#ec4899' },
  { icon: <Users size={22} />, label: 'Social Media', color: '#f97316' },
  { icon: <BarChart2 size={22} />, label: 'Content', color: '#ec4899' },
  { icon: <Mail size={22} />, label: 'Email', color: '#f97316' },
  { icon: <Megaphone size={22} />, label: 'Influencer', color: '#ec4899' },
];

const bigStats = [
  { value: '350%', label: 'Average ROI Increase', color: '#f97316' },
  { value: '10M+', label: 'Users Reached', color: '#ec4899' },
  { value: '2.8x', label: 'Avg Conversion Lift', color: '#f97316' },
  { value: '92%', label: 'Client Retention', color: '#ec4899' },
];

const funnelSteps = [
  { stage: 'Awareness', desc: 'SEO, Social & Paid Reach', width: '100%', color: '#f97316' },
  { stage: 'Interest', desc: 'Content & Retargeting', width: '78%', color: '#fb923c' },
  { stage: 'Decision', desc: 'Landing Pages & CRO', width: '56%', color: '#ec4899' },
  { stage: 'Conversion', desc: 'Email & Sales Nurture', width: '38%', color: '#f472b6' },
  { stage: 'Loyalty', desc: 'Retention & Advocacy', width: '22%', color: '#a855f7' },
];

const strategies = [
  { icon: <Search size={24} />, title: 'Audience Research', desc: 'We identify exactly who your customers are and where they spend their time online.' },
  { icon: <Zap size={24} />, title: 'Creative Execution', desc: 'Engaging visuals and copy that resonate with your audience and drive immediate action.' },
  { icon: <TrendingUp size={24} />, title: 'Continuous Optimization', desc: 'We constantly monitor, A/B test, and adjust campaigns to maximize every marketing dollar.' },
];

const DigitalMarketing = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #0f0500 0%, #0c0400 100%)' }}>

      {/* ── HERO ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 65%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(249,115,22,0.1)', borderColor: 'rgba(249,115,22,0.35)', color: '#f97316' }}>
                <TrendingUp size={16} />
                <span>Growth Engineering</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Digital{' '}
                <span style={{ background: 'linear-gradient(135deg, #f97316, #ec4899, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Marketing
                </span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Grow your user base, increase your ROI, and build a powerful brand. We combine data-driven strategies with creative execution to drive measurable, compounding results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get Growth Audit</Link>
                <Link href="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {[{ val: '200+', label: 'Campaigns Run' }, { val: '350%', label: 'Avg ROI' }, { val: '10M+', label: 'Users Reached' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#f97316' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Animated Chart Visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl overflow-hidden border p-8" style={{ background: 'rgba(249,115,22,0.05)', borderColor: 'rgba(249,115,22,0.2)', boxShadow: '0 0 60px rgba(249,115,22,0.1)' }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold" style={{ color: 'rgba(255,255,255,0.5)' }}>Weekly Traffic Growth</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>↑ +247% YoY</span>
                </div>
                {/* Bar chart */}
                <div className="flex items-end justify-between h-48 gap-2">
                  {[35, 55, 40, 80, 60, 92, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                        className="w-full rounded-t-lg relative overflow-hidden"
                        style={{ background: `linear-gradient(180deg, ${i === 6 ? '#ec4899' : '#f97316'}, ${i === 6 ? '#a855f7' : '#fb923c'})`, boxShadow: i === 6 ? '0 0 20px #ec489966' : '0 0 12px #f9731644' }}
                      >
                        {i === 6 && (
                          <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2), transparent)' }} />
                        )}
                      </motion.div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)}
                </div>
              </div>
              {/* Floating badges */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(249,115,22,0.12)', borderColor: 'rgba(249,115,22,0.3)', color: '#f97316' }}>
                🚀 +247% Traffic
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-5 -left-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(236,72,153,0.12)', borderColor: 'rgba(236,72,153,0.3)', color: '#ec4899' }}>
                💰 350% ROI
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BIG STATS ── */}
      <section className="py-16" style={{ borderTop: '1px solid rgba(249,115,22,0.1)', borderBottom: '1px solid rgba(249,115,22,0.1)', background: 'rgba(249,115,22,0.02)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {bigStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-black mb-2" style={{ color: s.color }}>{s.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNELS ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Channels We Dominate</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>A full-stack marketing approach covering every digital touchpoint.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {channels.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center space-x-3 px-6 py-4 rounded-2xl border cursor-default transition-all"
                style={{ background: `${c.color}10`, borderColor: `${c.color}30`, color: c.color }}>
                {c.icon}
                <span className="font-bold">{c.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUNNEL ── */}
      <section className="section-padding" style={{ background: 'rgba(249,115,22,0.02)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Funnel visual */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-display font-bold mb-10">The Growth Funnel</h2>
              <div className="flex flex-col items-center space-y-2">
                {funnelSteps.map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                    className="flex items-center justify-between px-6 py-4 rounded-2xl border"
                    style={{ width: step.width, background: `${step.color}10`, borderColor: `${step.color}30` } as any}>
                    <div>
                      <div className="font-bold text-sm" style={{ color: step.color }}>{step.stage}</div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{step.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Strategies */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-display font-bold mb-10">Growth-Focused Strategy</h2>
              <div className="space-y-8">
                {strategies.map((s, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(249,115,22,0.12)', color: '#f97316' }}>
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
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
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(236,72,153,0.08), rgba(168,85,247,0.05))', borderColor: 'rgba(249,115,22,0.25)' }}>
            <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.12) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.15) 0%, rgba(236,72,153,0.1) 50%, transparent 70%)' }} />
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Ready to{' '}
              <span style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Scale</span>{' '}Your Growth?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's build a marketing strategy that drives real, compounding results for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Your Growth Audit</span>
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

export default DigitalMarketing;
