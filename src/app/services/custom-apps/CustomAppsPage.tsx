// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ShoppingCart, Code2, Blocks, Globe, Zap, ArrowRight, ChevronRight, ShieldCheck, Cpu } from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: <ShoppingBag size={28} />, title: 'Shopify Apps', desc: 'Custom private or public Shopify apps. Enhance your storefront with bespoke features, advanced liquid edits, and seamless integrations.' },
  { icon: <ShoppingCart size={28} />, title: 'Magento Extensions', desc: 'Scalable Magento modules designed for high-volume enterprise e-commerce. Optimize performance and extend your store functionality securely.' },
  { icon: <Blocks size={28} />, title: 'WordPress Plugins', desc: 'Secure, high-performance WordPress plugins. We build custom functionalities from scratch, avoiding bloated off-the-shelf solutions.' },
  { icon: <Zap size={28} />, title: 'API Integrations', desc: 'Connect your platforms. We build robust middleware and API integrations to sync ERPs, CRMs, and payment gateways effortlessly.' },
];

const roadmap = [
  {
    step: '01',
    title: 'Platform Analysis',
    desc: 'We analyze your current e-commerce or CMS setup, identifying bottlenecks and opportunities for custom extensions.',
  },
  {
    step: '02',
    title: 'Architecture Design',
    desc: 'Designing the module or app architecture with a focus on high availability, minimal latency, and strict security compliance.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    desc: 'Agile development pipeline with rigorous unit, integration, and load testing to ensure zero downtime on deployment.',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    desc: 'Seamless rollout into your production environment followed by proactive monitoring and dedicated ongoing support.',
  },
];

const stats = [
  { value: '500+', label: 'Platforms Integrated' },
  { value: '99.9%', label: 'API Uptime Guarantee' },
  { value: '10M+', label: 'Requests Processed Daily' },
  { value: 'Zero', label: 'Security Breaches' },
];

const CustomApps = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #05051a 0%, #03030f 100%)' }}>

      {/* ── HERO ── */}
      <section className="section-padding relative overflow-hidden">
        {/* Geometric pattern bg */}
        <div className="absolute inset-0 -z-10 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full -z-10"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -z-10"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: '#3b82f6' }}>
                <Code2 size={16} />
                <span>Custom Integrations</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Platform{' '}
                <span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Custom Apps
                </span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Elevate your Shopify, Magento, or WordPress ecosystem. We engineer high-performance custom apps and plugins that seamlessly integrate with your existing platforms, driving scale without compromise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>Calculate ROI</Link>
                <Link href="/services" className="btn-outline">← All Services</Link>
              </div>
            </motion.div>

            {/* Futuristic floating visual */}
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Orbital rings */}
                {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                  <motion.div key={i}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed"
                    style={{ borderColor: `rgba(99,102,241,${0.2 - i * 0.03})`, transform: `scale(${scale})`, top: `${(1 - scale) * 50}%`, left: `${(1 - scale) * 50}%`, width: `${scale * 100}%`, height: `${scale * 100}%` }}
                  >
                    <div className="absolute top-0 left-1/2 -mt-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                  </motion.div>
                ))}
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center border-2" style={{ background: 'rgba(59,130,246,0.1)', borderColor: '#3b82f6', boxShadow: '0 0 40px rgba(59,130,246,0.4)', color: '#3b82f6' }}>
                    <Cpu size={36} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16" style={{ borderTop: '1px solid rgba(59,130,246,0.1)', borderBottom: '1px solid rgba(59,130,246,0.1)', background: 'rgba(59,130,246,0.03)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-black mb-2" style={{ color: '#60a5fa' }}>{s.value}</div>
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
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Platform Expertise</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Deep technical knowledge across the leading CMS and E-commerce engines.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border transition-all duration-300 group cursor-default"
                style={{ background: 'rgba(59,130,246,0.02)', borderColor: 'rgba(59,130,246,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)'; e.currentTarget.style.background = 'rgba(59,130,246,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.12)'; e.currentTarget.style.background = 'rgba(59,130,246,0.02)'; }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ background: 'rgba(59,130,246,0.12)', color: '#60a5fa' }}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
                <div className="mt-6 flex items-center space-x-2 text-sm font-bold" style={{ color: 'rgba(96,165,250,0.8)' }}>
                  <span>View documentation</span>
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="section-padding" style={{ background: 'rgba(59,130,246,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Development Lifecycle</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>From whiteboard architecture to production deployment.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-0">
            {roadmap.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-display font-black shrink-0 border"
                    style={{ background: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: '#60a5fa' }}>
                    {item.step}
                  </div>
                  {i < roadmap.length - 1 && <div className="w-px flex-1 my-2" style={{ background: 'rgba(59,130,246,0.15)', minHeight: '60px' }} />}
                </div>
                <div className="pb-12 pt-2">
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
            style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.05))', borderColor: 'rgba(59,130,246,0.25)' }}>
            <div className="absolute inset-0 -z-10 opacity-30"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.08) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 65%)' }} />
            
            <ShieldCheck size={48} className="mx-auto mb-6 text-blue-400 opacity-80" />
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Launch Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>App Idea</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Whether you need a bespoke Shopify capability, a custom Magento module, or a WordPress plugin, our engineers are ready to build it.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', borderColor: 'transparent' }}>
                <span>Schedule a Call</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomApps;
