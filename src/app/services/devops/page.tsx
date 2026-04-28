// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Server, Cloud, Activity, Shield, Zap, Terminal, GitBranch, ArrowRight, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: <Cloud size={24} />, title: 'Cloud Infrastructure', desc: 'Designing and managing scalable architectures on AWS, GCP, and Azure for maximum reliability.' },
  { icon: <GitBranch size={24} />, title: 'CI/CD Pipelines', desc: 'Automating deployment workflows for faster, safer, and more frequent production releases.' },
  { icon: <Server size={24} />, title: 'Kubernetes & Docker', desc: 'Containerizing applications for consistency from development all the way to production.' },
  { icon: <Activity size={24} />, title: 'Monitoring & Logging', desc: 'Real-time visibility into system performance with proactive alerting and root-cause analysis.' },
  { icon: <Shield size={24} />, title: 'Security Automation', desc: 'Automated vulnerability scanning, secret rotation, and compliance enforcement at scale.' },
  { icon: <RefreshCw size={24} />, title: 'Disaster Recovery', desc: 'Multi-region failover strategies and automated recovery to keep your business always on.' },
];

const pipelineStages = [
  { stage: 'Commit', color: '#06b6d4', icon: '⬆' },
  { stage: 'Build', color: '#0891b2', icon: '⚙' },
  { stage: 'Test', color: '#0e7490', icon: '✓' },
  { stage: 'Scan', color: '#155e75', icon: '🛡' },
  { stage: 'Deploy', color: '#06b6d4', icon: '🚀' },
  { stage: 'Monitor', color: '#22d3ee', icon: '📊' },
];

const metrics = [
  { label: 'CPU Usage', value: '24%', status: 'healthy', bar: 24 },
  { label: 'Memory', value: '4.2 / 16 GB', status: 'healthy', bar: 26 },
  { label: 'Network I/O', value: '1.2 GB/s', status: 'healthy', bar: 60 },
  { label: 'Disk Usage', value: '47%', status: 'warning', bar: 47 },
  { label: 'Active Pods', value: '24 / 30', status: 'healthy', bar: 80 },
];

const cloudProviders = ['AWS', 'GCP', 'Azure', 'DigitalOcean', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana'];

const DevOps = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #020a0f 0%, #020c12 100%)' }}>

      {/* ── HERO ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(6,182,212,0.1)', borderColor: 'rgba(6,182,212,0.3)', color: '#06b6d4' }}>
                <Server size={16} />
                <span>Infrastructure as Code</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Cloud{' '}&{' '}
                <span style={{ background: 'linear-gradient(135deg, #06b6d4, #22d3ee, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  DevOps
                </span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Automate your infrastructure, scale with confidence, and guarantee 99.9% uptime. Our DevOps experts build the engineering foundation that lets your product grow without limits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Optimize Your Infra</Link>
                <Link href="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {[{ val: '99.99%', label: 'Uptime Guaranteed' }, { val: '< 30s', label: 'Deploy Time' }, { val: '0', label: 'Unplanned Outages' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#06b6d4' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Live Dashboard Visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl overflow-hidden border" style={{ background: '#060f16', borderColor: 'rgba(6,182,212,0.25)', boxShadow: '0 0 60px rgba(6,182,212,0.12)' }}>
                {/* Header */}
                <div className="px-5 py-4 border-b flex items-center justify-between" style={{ background: '#091520', borderColor: 'rgba(6,182,212,0.1)' }}>
                  <div className="flex items-center space-x-3">
                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold" style={{ color: '#06b6d4' }}>SYSTEM MONITOR</span>
                  </div>
                  <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Uptime: 99.99% · 847 days</span>
                </div>
                {/* Metrics */}
                <div className="p-5 space-y-4">
                  {metrics.map((m, i) => (
                    <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.15 }}
                      className="flex items-center space-x-4">
                      <span className="text-xs font-mono w-28 shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }}>{m.label}</span>
                      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div initial={{ width: 0 }} animate={{ width: `${m.bar}%` }} transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                          className="h-full rounded-full" style={{ background: m.status === 'warning' ? '#f59e0b' : '#06b6d4', boxShadow: `0 0 8px ${m.status === 'warning' ? '#f59e0b66' : '#06b6d466'}` }} />
                      </div>
                      <span className="text-xs font-mono w-24 text-right" style={{ color: m.status === 'warning' ? '#f59e0b' : '#06b6d4' }}>{m.value}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Footer */}
                <div className="px-5 py-3 border-t flex justify-between" style={{ borderColor: 'rgba(6,182,212,0.1)', background: '#091520' }}>
                  <span className="text-xs font-bold" style={{ color: '#10b981' }}>● All systems operational</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>Last updated: 2s ago</span>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(6,182,212,0.1)', borderColor: 'rgba(6,182,212,0.3)', color: '#06b6d4' }}>
                🚀 30s Deploy
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CI/CD PIPELINE ── */}
      <section className="section-padding" style={{ background: 'rgba(6,182,212,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Your CI/CD Pipeline</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>From code to production — fully automated, zero friction.</p>
          </motion.div>
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(6,182,212,0.4), transparent)' }} />
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {pipelineStages.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center relative">
                  <motion.div
                    animate={{ boxShadow: [`0 0 0px ${s.color}44`, `0 0 20px ${s.color}88`, `0 0 0px ${s.color}44`] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-4 border-2 relative z-10 text-2xl"
                    style={{ background: `${s.color}15`, borderColor: s.color, color: s.color }}>
                    <span>{s.icon}</span>
                  </motion.div>
                  <span className="text-sm font-bold" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.stage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">What We Automate</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Every layer of your infrastructure, handled with precision.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(6,182,212,0.03)', borderColor: 'rgba(6,182,212,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'; e.currentTarget.style.background = 'rgba(6,182,212,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.12)'; e.currentTarget.style.background = 'rgba(6,182,212,0.03)'; }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4' }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOUD PARTNERS ── */}
      <section className="section-padding" style={{ background: 'rgba(6,182,212,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Cloud & DevOps Stack</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Battle-tested tools from the world's leading cloud providers.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {cloudProviders.map((brand, i) => (
              <motion.div key={brand} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-6 py-3 rounded-2xl border font-bold cursor-default transition-all"
                style={{ background: 'rgba(6,182,212,0.05)', borderColor: 'rgba(6,182,212,0.15)', color: 'rgba(255,255,255,0.6)' }}>
                {brand}
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
            style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(34,211,238,0.05))', borderColor: 'rgba(6,182,212,0.25)' }}>
            <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.15) 0%, transparent 65%)' }} />
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Automate Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #06b6d4, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Growth</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Stop worrying about servers and start focusing on your product. Our DevOps solutions handle the complexity so you don't have to.
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

export default DevOps;
