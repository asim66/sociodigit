// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, LineChart, LockKeyhole, Landmark, 
  ArrowRight, ChevronRight, CheckCircle2, Lock, 
  Cpu, Server, DollarSign, Database 
} from 'lucide-react';
import Link from 'next/link';
import FintechImage from '../../../assets/generated/fintech_security_render_1773750797528.png';

const fintechPillars = [
  {
    title: "Payment Gateways & Ledger Engines",
    desc: "Engineered for multi-currency processing, instant settlement APIs, double-entry immutable ledgers, and automated reconciliation.",
    points: ["PCI-DSS compliant tokenization", "Sub-100ms authorization latencies", "Automated chargeback workflows", "ISO 20022 messaging standard"]
  },
  {
    title: "AI Fraud Detection & Risk Scoring",
    desc: "Real-time transaction anomaly detection algorithms trained on behavior graphs to intercept fraudulent transfers before settlement.",
    points: ["Real-time velocity checks", "Device fingerprinting & biometric auth", "Automated AML / PEP watchlist screening", "Zero-day fraud pattern detection"]
  },
  {
    title: "Core Banking & Embedded Finance",
    desc: "Cloud-native microservices architecture replacing rigid legacy banking cores with modular, API-first financial platforms.",
    points: ["Card issuing & wallet infrastructure", "BaaS (Banking-as-a-Service) integrations", "Real-time interest & amortization engines", "Open Banking & account aggregation"]
  },
  {
    title: "WealthTech & Automated Trading",
    desc: "High-frequency portfolio rebalancing engines, robo-advisory tools, and institutional algorithmic trade execution systems.",
    points: ["Real-time market data streaming via WebSockets", "Automated tax-loss harvesting logic", "Multi-broker order routing protocols", "End-to-end audit logging"]
  }
];

const fintechFaqs = [
  {
    q: "How do you handle PCI-DSS and financial regulatory compliance?",
    a: "Our software engineering protocols follow PCI-DSS Level 1 specifications, zero-trust network isolation, end-to-end AES-256 and TLS 1.3 encryption, and automated SOC 2 audit trailing. All payment data is tokenized to ensure zero plaintext card data storage."
  },
  {
    q: "Can you modernize our existing banking or core ledger system without service interruption?",
    a: "Yes. We employ the Strangler Fig pattern, systematically decomposing legacy monoliths into scalable microservices using Go and Node.js with zero-downtime database replication and blue/green deployments."
  },
  {
    q: "What database architecture do you use for high-concurrency financial ledgers?",
    a: "We architect distributed immutable ledgers using PostgreSQL with strict ACID transactional isolation, combined with Redis distributed locks and Kafka event streams to guarantee zero double-spending anomalies."
  }
];

const Fintech = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-neutral-900 text-neutral-200 font-sans relative">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center mb-16 md:mb-32 px-4 md:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center space-x-2 text-emerald-400 mb-4 md:mb-6 font-semibold tracking-wide text-xs md:text-sm uppercase">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
              <span>Financial Technology & Banking Engineering</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8 font-display">
              Building the <span className="text-emerald-500 italic">Future</span> of Finance.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-8 md:mb-10 leading-relaxed max-w-2xl">
              From neobanks and payment gateways to institutional trading systems, we engineer secure, compliant, and lightning-fast financial software architectures that inspire unshakeable user trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 font-semibold transition-colors flex items-center justify-center text-base rounded-xl shadow-lg shadow-emerald-900/40">
                <span>Schedule FinTech Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services/security-consulting" className="w-full sm:w-auto border border-neutral-700 hover:border-neutral-500 text-neutral-300 px-8 py-4 font-semibold transition-colors flex items-center justify-center text-base rounded-xl">
                Explore Security Consulting
              </Link>
            </div>
          </motion.div>

          {/* Abstract Data Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group overflow-hidden rounded-[2rem] border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10"></div>
              <img 
                src={(FintechImage as any).src || (null as any) || FintechImage} 
                alt="Sociodigit - Secure Financial Systems Visualization" 
                width="600"
                height="450"
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center space-x-3 bg-neutral-900/80 backdrop-blur-md px-4 py-2 border border-emerald-500/30 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-mono text-xs text-emerald-400 tracking-wider">PCI_DSS_LEVEL_1_VERIFIED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Competencies Matrix */}
        <div className="px-4 md:px-0 mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl mb-4 font-display text-white">FinTech Engineering Architecture</h2>
          <p className="text-neutral-400 mb-12 max-w-3xl text-lg">Resilient, audited, and ultra-high-throughput systems designed for zero-error financial operations.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {fintechPillars.map((pillar, idx) => (
              <div key={idx} className="bg-neutral-800/60 p-8 rounded-2xl border border-neutral-700/60 hover:border-emerald-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-neutral-400 mb-6 text-sm md:text-base leading-relaxed">{pillar.desc}</p>
                <div className="space-y-2">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center text-xs md:text-sm text-neutral-300">
                      <CheckCircle2 size={16} className="text-emerald-400 mr-2.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Callout Banner */}
        <div className="bg-gradient-to-r from-emerald-950/80 via-neutral-900 to-neutral-900 border border-emerald-500/30 p-8 md:p-12 rounded-3xl mb-20 md:mb-32 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">Proven FinTech Case Outcome</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">High-Concurrency FinTech SaaS Platform</h3>
            <p className="text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed">
              Engineered a distributed microservices platform processing 2M+ active queries with 65% latency reduction and 99.99% uptime for an enterprise financial services client.
            </p>
          </div>
          <Link href="/case-studies" className="btn-primary whitespace-nowrap bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold shrink-0">
            Read Case Study
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-3">FinTech FAQ & Architecture Specs</h2>
            <p className="text-neutral-400">Clear answers on compliance, latency guarantees, and migration strategies.</p>
          </div>

          <div className="space-y-4">
            {fintechFaqs.map((faq, idx) => (
              <div key={idx} className="bg-neutral-800/80 rounded-2xl border border-neutral-700/80 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  <span className="text-lg">{faq.q}</span>
                  <ChevronRight size={20} className={`transform transition-transform ${openFaq === idx ? 'rotate-90 text-emerald-400' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-neutral-400 leading-relaxed text-sm md:text-base border-t border-neutral-700 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-neutral-800 border border-neutral-700 p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Ready to Architect Your FinTech Infrastructure?</h3>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Connect with our financial systems architects to design an ultra-secure, scalable platform engineered for high-concurrency transactions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-8 py-4 rounded-xl transition-all">
                Book Architecture Consultation
              </Link>
              <Link href="/services/devops" className="bg-neutral-700 hover:bg-neutral-600 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                Explore Cloud & DevOps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fintech;
