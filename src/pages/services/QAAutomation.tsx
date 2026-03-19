import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle2, Bug, Zap, AlertTriangle, ArrowRight, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: <CheckCircle2 size={24} />, title: 'Automated Testing', desc: 'End-to-end test suites using Playwright, Selenium, and Cypress for continuous reliability.' },
  { icon: <Bug size={24} />, title: 'Manual QA', desc: 'Rigorous human testing for edge cases, UX nuances, and exploratory scenario coverage.' },
  { icon: <Zap size={24} />, title: 'Performance Testing', desc: 'Load and stress testing to ensure your application performs flawlessly under peak traffic.' },
  { icon: <Shield size={24} />, title: 'Security Testing', desc: 'Penetration testing and OWASP-aligned audits to harden your application against threats.' },
];

const coverageData = [
  { label: 'Unit Tests', value: 100, color: '#10b981' },
  { label: 'Integration Tests', value: 98, color: '#10b981' },
  { label: 'E2E Coverage', value: 95, color: '#34d399' },
  { label: 'Security Coverage', value: 100, color: '#10b981' },
  { label: 'Performance Benchmarks', value: 97, color: '#34d399' },
];

const testLog = [
  { status: 'pass', text: 'Auth › login with valid credentials' },
  { status: 'pass', text: 'Auth › token refresh flow' },
  { status: 'pass', text: 'API › POST /users returns 201' },
  { status: 'pass', text: 'Checkout › end-to-end purchase flow' },
  { status: 'fail', text: 'Payments › edge case: retry on timeout' },
  { status: 'pass', text: 'Dashboard › loads under 200ms' },
  { status: 'pass', text: 'Security › SQL injection blocked' },
  { status: 'pass', text: 'Security › XSS payloads sanitized' },
];

const pyramid = [
  { level: 'E2E Tests', width: '40%', count: '~50 tests', color: '#10b981', desc: 'Critical user flows' },
  { level: 'Integration', width: '65%', count: '~300 tests', color: '#34d399', desc: 'Service boundaries' },
  { level: 'Unit Tests', width: '100%', count: '1,200+ tests', color: '#6ee7b7', desc: 'Business logic' },
];

const whyAutomate = [
  { title: 'Faster Release Cycles', desc: 'Automated suites complete in minutes, not days—enabling multiple deployments per day.', stat: '10x' },
  {
    title: 'Eliminate Human Error', desc: "Consistent, repeatable tests catch regressions the moment they're introduced.", stat: '0' },
  { title: 'Cost Efficiency', desc: 'Reduce the long-term cost of QA by automating repetitive tasks permanently.', stat: '60%' },
];

const QAAutomation = () => {
  return (
    <div className="pt-32" style={{ background: 'linear-gradient(180deg, #020e08 0%, #030b06 100%)' }}>

      {/* ── HERO ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 65%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border"
                style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.3)', color: '#10b981' }}>
                <FlaskConical size={16} />
                <span>Quality First</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                QA &{' '}
                <span style={{ background: 'linear-gradient(135deg, #10b981, #34d399, #6ee7b7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Automation
                </span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Ensure your software is bug-free, secure, and performs flawlessly. Our automated testing solutions reduce time-to-market while dramatically increasing reliability and user trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Get a Tech Audit</Link>
                <Link to="/services" className="btn-outline">← All Services</Link>
              </div>
              {/* counters */}
              <div className="flex gap-10 mt-14">
                {[{ val: '1,200+', label: 'Tests Written' }, { val: '99.8%', label: 'Pass Rate' }, { val: '< 5min', label: 'Suite Runtime' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-black" style={{ color: '#10b981' }}>{s.val}</div>
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Test Runner Log */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="rounded-3xl overflow-hidden border" style={{ background: '#0a1a0f', borderColor: 'rgba(16,185,129,0.25)', boxShadow: '0 0 60px rgba(16,185,129,0.12)' }}>
                {/* Title bar */}
                <div className="flex items-center justify-between px-5 py-4 border-b" style={{ background: '#0d1f11', borderColor: 'rgba(16,185,129,0.1)' }}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>test-runner › suite.spec.ts</span>
                  <div className="flex items-center space-x-1">
                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold" style={{ color: '#10b981' }}>RUNNING</span>
                  </div>
                </div>
                {/* Logs */}
                <div className="p-5 font-mono text-xs space-y-2.5">
                  {testLog.map((log, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.15 }}
                      className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black shrink-0 ${log.status === 'pass' ? '' : ''}`}
                        style={{ background: log.status === 'pass' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)', color: log.status === 'pass' ? '#10b981' : '#ef4444' }}>
                        {log.status === 'pass' ? '✓' : '✗'}
                      </div>
                      <span style={{ color: log.status === 'pass' ? 'rgba(255,255,255,0.6)' : '#ef4444' }}>{log.text}</span>
                    </motion.div>
                  ))}
                  {/* Summary */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
                    className="mt-4 pt-4 border-t flex justify-between text-xs" style={{ borderColor: 'rgba(16,185,129,0.1)' }}>
                    <span style={{ color: '#10b981' }}>✓ 7 passed</span>
                    <span style={{ color: '#ef4444' }}>✗ 1 failed</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>2.3s</span>
                  </motion.div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-4 py-2 rounded-2xl text-xs font-bold border"
                style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.3)', color: '#10b981' }}>
                ✓ Zero-Bug Policy
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Testing Services</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Comprehensive coverage across every layer of your application.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border transition-all duration-300 cursor-default"
                style={{ background: 'rgba(16,185,129,0.03)', borderColor: 'rgba(16,185,129,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.background = 'rgba(16,185,129,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)'; e.currentTarget.style.background = 'rgba(16,185,129,0.03)'; }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE + PYRAMID ── */}
      <section className="section-padding" style={{ background: 'rgba(16,185,129,0.02)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Coverage */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-display font-bold mb-10">Coverage Dashboard</h2>
                <div className="space-y-6">
                  {coverageData.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span style={{ color: 'rgba(255,255,255,0.7)' }}>{item.label}</span>
                        <span style={{ color: item.color }}>{item.value}%</span>
                      </div>
                      <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.value}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.15 }}
                          className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}aa)`, boxShadow: `0 0 12px ${item.color}66` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Test Pyramid */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-display font-bold mb-10">Test Pyramid</h2>
                <div className="flex flex-col items-center space-y-2">
                  {pyramid.map((layer, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                      className="flex items-center justify-between px-6 py-4 rounded-2xl border"
                      style={{ width: layer.width, background: `${layer.color}10`, borderColor: `${layer.color}30`, color: layer.color }}>
                      <div>
                        <div className="font-bold text-sm">{layer.level}</div>
                        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{layer.desc}</div>
                      </div>
                      <div className="text-xs font-mono font-bold">{layer.count}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AUTOMATE ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Why Automation Matters</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>The numbers speak for themselves.</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyAutomate.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="p-10 rounded-3xl border text-center"
                style={{ background: 'rgba(16,185,129,0.03)', borderColor: 'rgba(16,185,129,0.12)' }}>
                <div className="text-6xl font-display font-black mb-4" style={{ color: '#10b981' }}>{item.stat}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
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
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(52,211,153,0.05))', borderColor: 'rgba(16,185,129,0.25)' }}>
            <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 65%)' }} />
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-6">
              Ready for{' '}
              <span style={{ background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Flawless</span>{' '}Quality?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's ensure your product is reliable, secure, and ready for scale. Our QA experts are here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Schedule a Tech Audit</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-outline">← All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QAAutomation;
