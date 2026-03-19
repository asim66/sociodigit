import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, AlertTriangle, Server, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: <Lock size={24} />, title: 'Penetration Testing', desc: 'Ethical hacking simulations to uncover exploitable vulnerabilities before malicious actors do.' },
  { icon: <Eye size={24} />, title: 'Threat Modelling', desc: 'Systematic analysis of attack surfaces to identify and prioritise security risks at the design stage.' },
  { icon: <AlertTriangle size={24} />, title: 'Vulnerability Assessment', desc: 'Automated and manual scanning to identify known CVEs, misconfigurations, and weak credentials.' },
  { icon: <Server size={24} />, title: 'Cloud Security', desc: 'IAM policy reviews, S3/storage hardening, network security group audits, and compliance checks.' },
  { icon: <FileText size={24} />, title: 'Compliance Advisory', desc: 'GDPR, SOC 2, ISO 27001, and HIPAA readiness assessments and gap remediation roadmaps.' },
  { icon: <Shield size={24} />, title: 'Incident Response', desc: 'Rapid response playbooks, forensic analysis, and post-incident reviews to contain and learn from breaches.' },
];

const process = [
  { step: '01', title: 'Scope', desc: 'Define target systems, rules of engagement, and testing boundaries.' },
  { step: '02', title: 'Reconnaissance', desc: 'Passive and active information gathering to map the attack surface.' },
  { step: '03', title: 'Exploit', desc: 'Controlled exploitation of discovered vulnerabilities with full documentation.' },
  { step: '04', title: 'Report', desc: 'Severity-ranked findings with CVSS scores and step-by-step remediation guides.' },
  { step: '05', title: 'Re-test', desc: 'Validate that fixes are effective with a targeted follow-up assessment.' },
];

const SecurityConsulting = () => {
  const threats = [
    { type: 'SQL Injection', status: 'BLOCKED', color: '#10b981' },
    { type: 'XSS Payload', status: 'BLOCKED', color: '#10b981' },
    { type: 'Brute Force', status: 'BLOCKED', color: '#10b981' },
    { type: 'CSRF Attack', status: 'BLOCKED', color: '#10b981' },
    { type: 'Auth Bypass', status: 'PATCHED', color: '#f59e0b' },
  ];

  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #0a0206 0%, #080104 100%)' }}>

      {/* HERO */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(220,38,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 65%)' }} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(220,38,38,0.1)', borderColor: 'rgba(220,38,38,0.35)', color: '#dc2626' }}>
                <ShieldCheck size={16} /><span>Zero Compromise Security</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Security{' '}
                <span style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444, #fca5a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Consulting</span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                A single breach can destroy years of trust. We help you build impenetrable defences through penetration testing, compliance advisory, and 24/7 threat monitoring — before attackers find the gaps.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Get Security Assessment</Link>
                <Link to="/services" className="btn-outline">← All Services</Link>
              </div>
              <div className="flex gap-10 mt-14">
                {[{ val: 'Zero', label: 'Breaches on Watch' }, { val: '100%', label: 'CVE Coverage' }, { val: '< 4h', label: 'Response Time' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#dc2626' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Threat dashboard visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl border p-6" style={{ background: '#0d0208', borderColor: 'rgba(220,38,38,0.2)', boxShadow: '0 0 60px rgba(220,38,38,0.1)' }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold font-mono" style={{ color: '#dc2626' }}>THREAT MONITOR</span>
                  <motion.div className="flex items-center space-x-1" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs font-bold" style={{ color: '#10b981' }}>LIVE</span>
                  </motion.div>
                </div>
                <div className="space-y-3">
                  {threats.map((t, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.2 }}
                      className="flex items-center justify-between p-3 rounded-xl border"
                      style={{ background: 'rgba(220,38,38,0.04)', borderColor: 'rgba(220,38,38,0.1)' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                        <span className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.type}</span>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${t.color}15`, color: t.color }}>{t.status}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t flex justify-between text-xs" style={{ borderColor: 'rgba(220,38,38,0.1)' }}>
                  <span style={{ color: '#10b981' }}>4 threats blocked</span>
                  <span style={{ color: '#f59e0b' }}>1 patched</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>0 open</span>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(220,38,38,0.12)', borderColor: 'rgba(220,38,38,0.3)', color: '#dc2626' }}>
                🛡 Zero Breach Record
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Security Services</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Comprehensive defence-in-depth security across your entire technology stack.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(220,38,38,0.03)', borderColor: 'rgba(220,38,38,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(220,38,38,0.4)'; e.currentTarget.style.background = 'rgba(220,38,38,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(220,38,38,0.12)'; e.currentTarget.style.background = 'rgba(220,38,38,0.03)'; }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(220,38,38,0.1)', color: '#dc2626' }}>{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding" style={{ background: 'rgba(220,38,38,0.02)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Pentest Methodology</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Industry-standard PTES methodology, tailored to your environment.</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.4), transparent)' }} />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-black border-2 relative z-10"
                    style={{ background: '#0a0206', borderColor: '#dc2626', color: '#dc2626', boxShadow: '0 0 30px rgba(220,38,38,0.3)' }}>{p.step}</div>
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
            style={{ background: 'linear-gradient(135deg, rgba(220,38,38,0.1), rgba(239,68,68,0.05))', borderColor: 'rgba(220,38,38,0.25)' }}>
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Secure Before{' '}
              <span style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>You Scale</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Every line of code is a potential attack vector. Let our security experts find and fix them before someone else does.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Security Assessment</span><ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-outline">← All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityConsulting;
