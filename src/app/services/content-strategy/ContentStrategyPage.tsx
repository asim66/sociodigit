// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'motion/react';
import { FileText, Rss, Search, BarChart2, Globe, PenTool, ArrowRight, Mic } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: <FileText size={24} />, title: 'Content Strategy', desc: 'Brand-aligned content frameworks that attract, engage, and convert your ideal audience across every channel.' },
  { icon: <Search size={24} />, title: 'SEO Content', desc: 'Keyword-driven, topically authoritative content engineered to rank and drive compounding organic traffic.' },
  { icon: <Rss size={24} />, title: 'Blog & Editorial', desc: 'Thought leadership articles, guides, and case studies that establish your brand as an industry authority.' },
  { icon: <Globe size={24} />, title: 'Copywriting', desc: 'Conversion-focused web copy, landing pages, and product descriptions that turn readers into customers.' },
  { icon: <Mic size={24} />, title: 'Video & Podcast', desc: 'Scripts, storyboards, and production support for video series and branded podcast content.' },
  { icon: <BarChart2 size={24} />, title: 'Content Analytics', desc: 'Performance dashboards tracking engagement, reach, and content ROI to continuously refine your strategy.' },
];

const process = [
  { step: '01', title: 'Audit', desc: 'Assess existing content, identify gaps, and benchmark against competitors.' },
  { step: '02', title: 'Strategy', desc: 'Define pillars, personas, content calendar, and distribution channels.' },
  { step: '03', title: 'Create', desc: 'Expert writers, designers, and editors produce high-quality content at scale.' },
  { step: '04', title: 'Distribute', desc: 'Multi-channel distribution across owned, earned, and paid media.' },
  { step: '05', title: 'Optimize', desc: 'Continuous A/B testing and analytics-driven iteration to improve performance.' },
];

const articles = [
  { tag: 'DevOps', title: 'How We Cut Deploy Time by 80%', reads: '12.4k' },
  { tag: 'Design', title: 'The Psychology of Micro-interactions', reads: '8.7k' },
  { tag: 'Growth', title: '10 SaaS Onboarding Tactics That Work', reads: '21k' },
];

const ContentStrategy = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #0f0510 0%, #0c040e 100%)' }}>

      {/* HERO */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(236,72,153,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 65%)' }} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(236,72,153,0.1)', borderColor: 'rgba(236,72,153,0.35)', color: '#ec4899' }}>
                <PenTool size={16} /><span>Words That Work</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Content{' '}
                <span style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6, #fbcfe8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Strategy</span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Content is your brand's voice and your most powerful sales tool. We craft content strategies that attract the right audience and drive real results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get Content Audit</Link>
                <Link href="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {[{ val: '3x', label: 'Avg Organic Traffic' }, { val: '500+', label: 'Articles Published' }, { val: '85%', label: 'Retention Rate' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#ec4899' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl overflow-hidden border p-6" style={{ background: '#100614', borderColor: 'rgba(236,72,153,0.2)', boxShadow: '0 0 60px rgba(236,72,153,0.1)' }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold font-mono" style={{ color: '#ec4899' }}>EDITORIAL FEED</span>
                  <span className="text-xs px-2 py-1 rounded-full font-bold" style={{ background: 'rgba(236,72,153,0.12)', color: '#ec4899' }}>↑ +312% Organic</span>
                </div>
                <div className="space-y-4">
                  {articles.map((a, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.2 }}
                      className="p-4 rounded-2xl border" style={{ background: 'rgba(236,72,153,0.04)', borderColor: 'rgba(236,72,153,0.12)' }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(236,72,153,0.15)', color: '#f472b6' }}>{a.tag}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{a.reads} reads</span>
                      </div>
                      <p className="font-bold text-sm">{a.title}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(236,72,153,0.12)', borderColor: 'rgba(236,72,153,0.3)', color: '#ec4899' }}>
                ✍ Story-Led Growth
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Content Services</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Every content type, every format, every channel — done with craft and strategy.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(236,72,153,0.03)', borderColor: 'rgba(236,72,153,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.4)'; e.currentTarget.style.background = 'rgba(236,72,153,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.12)'; e.currentTarget.style.background = 'rgba(236,72,153,0.03)'; }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(236,72,153,0.1)', color: '#ec4899' }}>{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding" style={{ background: 'rgba(236,72,153,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Our Content Process</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Strategy before execution. Every time.</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.4), transparent)' }} />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-black border-2 relative z-10"
                    style={{ background: '#0f0510', borderColor: '#ec4899', color: '#ec4899', boxShadow: '0 0 30px rgba(236,72,153,0.3)' }}>{p.step}</div>
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
            style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(244,114,182,0.05))', borderColor: 'rgba(236,72,153,0.25)' }}>
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Tell Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Story</span>
              {' '}Better
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's build a content engine that grows your authority and attracts your ideal customers effortlessly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Content Strategy</span><ArrowRight size={20} />
              </Link>
              <Link href="/services" className="btn-outline">← All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContentStrategy;
