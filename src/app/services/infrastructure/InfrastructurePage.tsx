// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Server, Network, HardDrive, Cpu, Shield, Zap, ArrowRight, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: <Server size={24} />, title: 'Server Management', desc: 'On-prem, hybrid, and fully cloud-managed server infrastructure designed for maximum reliability and throughput.' },
  { icon: <Network size={24} />, title: 'Network Architecture', desc: 'Secure, high-performance network design with load balancing, VPNs, and zero-trust segmentation.' },
  { icon: <HardDrive size={24} />, title: 'Storage Solutions', desc: 'Scalable block, object, and file storage systems optimized for speed, redundancy, and cost efficiency.' },
  { icon: <Cpu size={24} />, title: 'Compute Optimization', desc: 'Right-sizing compute resources — from bare metal to serverless — to hit your performance and cost targets.' },
  { icon: <Shield size={24} />, title: 'Compliance & Hardening', desc: 'SOC2, ISO 27001, and GDPR-aligned infrastructure hardening with continuous compliance monitoring.' },
  { icon: <Zap size={24} />, title: 'Edge Computing', desc: 'Deploying compute closer to your users with CDN integration and edge nodes for sub-50ms global latency.' },
];

const process = [
  { step: '01', title: 'Audit', desc: 'Deep analysis of your existing infrastructure, identifying bottlenecks, security gaps, and over-spending.' },
  { step: '02', title: 'Design', desc: 'Architect a future-proof infrastructure blueprint aligned with your growth trajectory and budget.' },
  { step: '03', title: 'Migrate', desc: 'Zero-downtime migration with a meticulously staged rollout and full rollback capability.' },
  { step: '04', title: 'Monitor', desc: '24/7 observability with alerting, dashboards, and proactive incident response.' },
  { step: '05', title: 'Optimize', desc: 'Continuous tuning for performance, cost, and reliability as your usage evolves.' },
];

const stats = [
  { val: '99.99%', label: 'Uptime SLA' },
  { val: '40%', label: 'Avg Cost Reduction' },
  { val: '<50ms', label: 'Global Latency' },
];

const Infrastructure = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #040b0f 0%, #020a0e 100%)' }}>

      {/* ── HERO ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.07) 0%, transparent 65%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(14,165,233,0.1)', borderColor: 'rgba(14,165,233,0.3)', color: '#0ea5e9' }}>
                <Server size={16} />
                <span>Always On. Always Fast.</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Infrastructure{' '}
                <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8, #7dd3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Services
                </span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Robust, scalable, and secure infrastructure that powers your digital products. From cloud migration to edge computing, we build the backbone your business depends on.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get Infrastructure Audit</Link>
                <Link href="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {stats.map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#0ea5e9' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Animated Infrastructure Visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl overflow-hidden border p-6" style={{ background: '#040d14', borderColor: 'rgba(14,165,233,0.2)', boxShadow: '0 0 60px rgba(14,165,233,0.1)' }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold font-mono" style={{ color: '#0ea5e9' }}>INFRASTRUCTURE HEALTH</span>
                  <span className="text-xs px-2 py-1 rounded-full font-bold" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>● All Systems Go</span>
                </div>
                {/* Node grid */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div key={i}
                      animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.05, 1] }}
                      transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                      className="aspect-square rounded-xl flex items-center justify-center border"
                      style={{ background: i % 7 === 5 ? 'rgba(245,158,11,0.1)' : 'rgba(14,165,233,0.08)', borderColor: i % 7 === 5 ? 'rgba(245,158,11,0.3)' : 'rgba(14,165,233,0.2)', color: i % 7 === 5 ? '#f59e0b' : '#0ea5e9' }}>
                      <Server size={16} />
                    </motion.div>
                  ))}
                </div>
                {/* Bandwidth */}
                {[{ label: 'Bandwidth In', val: 72 }, { label: 'Bandwidth Out', val: 45 }, { label: 'Packet Loss', val: 2 }].map((m, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-xs font-mono mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      <span>{m.label}</span><span style={{ color: '#0ea5e9' }}>{m.val}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${m.val}%` }} transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                        className="h-full rounded-full" style={{ background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)' }} />
                    </div>
                  </div>
                ))}
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(14,165,233,0.12)', borderColor: 'rgba(14,165,233,0.3)', color: '#0ea5e9' }}>
                ⚡ 99.99% Uptime
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">What We Manage</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>From a single server to a global multi-cloud fleet — we handle it all.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(14,165,233,0.03)', borderColor: 'rgba(14,165,233,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(14,165,233,0.4)'; e.currentTarget.style.background = 'rgba(14,165,233,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(14,165,233,0.12)'; e.currentTarget.style.background = 'rgba(14,165,233,0.03)'; }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(14,165,233,0.1)', color: '#0ea5e9' }}>{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-padding" style={{ background: 'rgba(14,165,233,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Our Process</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>A battle-tested approach to infrastructure transformation.</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.4), transparent)' }} />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-black border-2 relative z-10"
                    style={{ background: '#040b0f', borderColor: '#0ea5e9', color: '#0ea5e9', boxShadow: '0 0 30px rgba(14,165,233,0.3)' }}>
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
            style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(56,189,248,0.05))', borderColor: 'rgba(14,165,233,0.25)' }}>
            <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Build on a{' '}
              <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solid Foundation</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's assess your current infrastructure and design a scalable, cost-efficient architecture built for your future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Infrastructure Audit</span>
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

export default Infrastructure;
