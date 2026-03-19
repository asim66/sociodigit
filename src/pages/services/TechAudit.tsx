import React from 'react';
import { motion } from 'motion/react';
import { Search, Code2, Server, Shield, BarChart2, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: <Code2 size={24} />, title: 'Code Quality Review', desc: 'In-depth static analysis, code smell detection, and architectural anti-pattern identification across your codebase.' },
  { icon: <Server size={24} />, title: 'Infrastructure Audit', desc: 'Cloud spend analysis, security group reviews, and infrastructure-as-code assessment for efficiency and safety.' },
  { icon: <Shield size={24} />, title: 'Security Assessment', desc: 'Vulnerability scanning, dependency audits, and OWASP Top 10 checks to harden your application.' },
  { icon: <BarChart2 size={24} />, title: 'Performance Profiling', desc: 'End-to-end performance benchmarking to identify slow queries, memory leaks, and bottlenecks.' },
  { icon: <Search size={24} />, title: 'Dependency Analysis', desc: 'Third-party library risk assessment — outdated packages, licensing issues, and supply chain vulnerabilities.' },
  { icon: <FileText size={24} />, title: 'Audit Report', desc: 'A clear, prioritised report with actionable recommendations and an effort/impact matrix for your team.' },
];

const process = [
  { step: '01', title: 'Scope', desc: 'Define audit boundaries: repositories, services, and environments in scope.' },
  { step: '02', title: 'Analyse', desc: 'Automated scanning plus expert manual review across all dimensions.' },
  { step: '03', title: 'Findings', desc: 'Categorise issues by severity: Critical, High, Medium, Low.' },
  { step: '04', title: 'Report', desc: 'Deliver a detailed report with remediation guidance and code examples.' },
  { step: '05', title: 'Remediate', desc: 'Optional: our engineers fix the issues and validate the fixes with a re-audit.' },
];

const TechAudit = () => {
  const findings = [
    { severity: 'Critical', count: 2, color: '#ef4444' },
    { severity: 'High', count: 7, color: '#f97316' },
    { severity: 'Medium', count: 14, color: '#f59e0b' },
    { severity: 'Low', count: 31, color: '#10b981' },
  ];

  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #0f0804 0%, #0c0602 100%)' }}>

      {/* HERO */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(234,88,12,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.1) 0%, transparent 65%)' }} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(234,88,12,0.1)', borderColor: 'rgba(234,88,12,0.35)', color: '#ea580c' }}>
                <AlertTriangle size={16} /><span>Know Before You Scale</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Tech{' '}
                <span style={{ background: 'linear-gradient(135deg, #ea580c, #fb923c, #fed7aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Audit</span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                A comprehensive health-check of your technology stack. We surface hidden risks, performance bottlenecks, and security gaps — giving you the full picture before they become expensive problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Request Free Audit</Link>
                <Link to="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {[{ val: '300+', label: 'Audits Completed' }, { val: '48h', label: 'Turnaround Time' }, { val: '100%', label: 'Actionable Findings' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#ea580c' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Findings visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl border p-6" style={{ background: '#100804', borderColor: 'rgba(234,88,12,0.2)', boxShadow: '0 0 60px rgba(234,88,12,0.1)' }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold font-mono" style={{ color: '#ea580c' }}>AUDIT FINDINGS SUMMARY</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>54 findings total</span>
                </div>
                <div className="space-y-4">
                  {findings.map((f, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
                      className="flex items-center gap-4">
                      <span className="text-xs font-bold w-16 shrink-0" style={{ color: f.color }}>{f.severity}</span>
                      <div className="flex-1 h-6 rounded-lg overflow-hidden relative" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <motion.div initial={{ width: 0 }} animate={{ width: `${(f.count / 31) * 100}%` }} transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                          className="h-full rounded-lg" style={{ background: `${f.color}33`, border: `1px solid ${f.color}44` }} />
                      </div>
                      <span className="text-sm font-bold w-6 text-right" style={{ color: f.color }}>{f.count}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t text-xs" style={{ borderColor: 'rgba(234,88,12,0.1)', color: 'rgba(255,255,255,0.3)' }}>
                  All findings include remediation guidance and code examples.
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(234,88,12,0.12)', borderColor: 'rgba(234,88,12,0.3)', color: '#ea580c' }}>
                🔍 48h Turnaround
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">What We Audit</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>A thorough review covering every layer of your technology stack.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(234,88,12,0.03)', borderColor: 'rgba(234,88,12,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(234,88,12,0.4)'; e.currentTarget.style.background = 'rgba(234,88,12,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(234,88,12,0.12)'; e.currentTarget.style.background = 'rgba(234,88,12,0.03)'; }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(234,88,12,0.1)', color: '#ea580c' }}>{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding" style={{ background: 'rgba(234,88,12,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Audit Process</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Rigorous, systematic, and always actionable.</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(234,88,12,0.4), transparent)' }} />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-black border-2 relative z-10"
                    style={{ background: '#0f0804', borderColor: '#ea580c', color: '#ea580c', boxShadow: '0 0 30px rgba(234,88,12,0.3)' }}>{p.step}</div>
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
            style={{ background: 'linear-gradient(135deg, rgba(234,88,12,0.1), rgba(251,146,60,0.05))', borderColor: 'rgba(234,88,12,0.25)' }}>
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Know Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #ea580c, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tech Debt</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Get a full picture of your codebase health in 48 hours. No surprises — just clear, actionable findings to move faster with confidence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Request Tech Audit</span><ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-outline">← All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechAudit;
