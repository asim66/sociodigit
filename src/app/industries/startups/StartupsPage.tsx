// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, Zap, Flame, TerminalSquare, ArrowRight, 
  CheckCircle2, ChevronRight, Code2, ShieldCheck, 
  Layers, Database, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

const startupPillars = [
  {
    title: "Rapid MVP Engineering (6–8 Weeks)",
    desc: "We turn founders' PRDs and wireframes into production-grade, testable MVPs using Next.js, Node.js, and PostgreSQL.",
    features: [
      "Modular auth & role-based permissions",
      "Stripe / Razorpay payment gateways",
      "Event-driven background worker tasks",
      "Automated CI/CD deployment pipelines"
    ]
  },
  {
    title: "Pre-Series A Tech Debt Rescue",
    desc: "Refactor messy spaghetti prototypes into clean, tested, and documented architectures that pass VC technical due diligence.",
    features: [
      "Database schema normalization & indexing",
      "API response latency reduction (<100ms)",
      "Automated Playwright end-to-end test coverage",
      "Zero-downtime microservices containerization"
    ]
  },
  {
    title: "High-Growth Organic User Acquisition",
    desc: "Integrate high-intent SEO architecture, Generative Engine Optimization (GEO), and programmatic landing page funnels.",
    features: [
      "Topical authority cluster mapping",
      "AI answer engine citation architecture",
      "Product-Led Growth (PLG) viral loops",
      "Conversion Rate Optimization (CRO) audits"
    ]
  },
  {
    title: "Cloud Auto-Scaling for Scale Events",
    desc: "Serverless and Kubernetes infrastructure that seamlessly auto-scales from your first 100 users to millions.",
    features: [
      "Terraform Infrastructure as Code (IaC)",
      "Edge caching & Redis session stores",
      "Prometheus & Grafana observability",
      "Multi-region database backups"
    ]
  }
];

const startupFaqs = [
  {
    q: "How fast can you build and launch our startup's MVP?",
    a: "Our typical MVP delivery sprint is 6 to 8 weeks from kickoff to production launch. We prioritize core value features, clean architecture, and automated testing to ensure immediate market validation."
  },
  {
    q: "Do we retain full ownership of our intellectual property and source code?",
    a: "Yes, 100%. You retain full legal ownership of all repositories, database schemas, architectures, and UI designs. Everything is committed directly to your company's private GitHub/GitLab organizations."
  },
  {
    q: "Can you help our startup pass investor technical due diligence?",
    a: "Yes. We conduct complete code audits, security vulnerability scans, database indexing reviews, and provide detailed architecture documentation ready for angel and venture capital investors."
  }
];

const Startups = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-black text-white relative overflow-hidden">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>

      {/* Marquee */}
      <div className="absolute top-24 left-0 w-full overflow-hidden whitespace-nowrap bg-pink-500 py-2 rotate-[-2deg] scale-110 z-0 opacity-80">
        <div className="inline-block animate-marquee font-black uppercase tracking-tighter text-3xl md:text-4xl text-black">
          MOVE FAST BREAK NOTHING. BUILD SCALABLE. LAUNCH FASTER. SHIP CODE DAILY. MOVE FAST BREAK NOTHING. BUILD SCALABLE. LAUNCH FASTER.
        </div>
      </div>

      <div className="container-custom relative z-10 mt-16 md:mt-20">
        {/* Brutalist Hero */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-yellow-400 text-black px-4 py-1.5 font-mono font-bold text-xs uppercase tracking-widest mb-6">
              Startup &amp; Venture Engineering Squad
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none mb-8 uppercase font-display">
              Zero to <br />
              <span className="text-yellow-400 drop-shadow-[4px_4px_0_theme(colors.pink.500)]">One.</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-3xl font-bold mb-10 uppercase tracking-wide leading-relaxed">
              We act as the technical co-founders and elite engineering squads you need to build, launch, and scale high-velocity tech startups.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-yellow-400 text-black px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-colors border-4 border-black shadow-[6px_6px_0_white] inline-flex items-center">
                <span>Deploy Your MVP</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services/software-development" className="bg-neutral-900 text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors border-2 border-white/20 inline-flex items-center">
                Explore Software Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 md:mb-32">
          <div className="lg:col-span-8 bg-pink-500 p-8 md:p-12 border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.2)]">
            <Zap className="w-12 h-12 text-black mb-4" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4 font-display">MVP Engineering in 8 Weeks</h2>
            <p className="text-lg md:text-xl font-bold text-black/90 leading-relaxed">
              Stop debating tech stacks for months. We architect and ship fully functional, scalable web and mobile MVPs in 6 to 8 weeks using Next.js, Node.js, and PostgreSQL. Test hypotheses fast.
            </p>
          </div>

          <div className="lg:col-span-4 bg-yellow-400 p-8 md:p-12 border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.2)] flex flex-col justify-center">
            <Flame className="w-12 h-12 text-black mb-4" />
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black mb-3 font-display">Product-Market Fit</h2>
            <p className="text-base md:text-lg font-bold text-black/80">Rapid telemetry, user session tracking, and A/B test iterations driven by real customer behavioral data.</p>
          </div>

          <div className="lg:col-span-4 bg-neutral-900 p-8 md:p-12 border-4 border-neutral-700">
            <TerminalSquare className="w-12 h-12 text-emerald-400 mb-4" />
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-3 font-display">Tech Debt Rescue</h2>
            <p className="text-neutral-400 font-mono text-xs md:text-sm leading-relaxed">
              Refactoring monolithic spaghetti into clean, documented, microservices architecture before your Series A investor audit.
            </p>
          </div>

          <div className="lg:col-span-8 bg-white p-8 md:p-12 border-4 border-neutral-300">
            <Rocket className="w-12 h-12 text-pink-500 mb-4" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4 font-display">Scale Out Without Downtime</h2>
            <p className="text-lg md:text-xl font-bold text-black/80 leading-relaxed">
              When user 1,000 becomes user 1,000,000 overnight. We engineer Kubernetes auto-scaling, Redis distributed caching, and zero-downtime CI/CD pipelines that never fail under load.
            </p>
          </div>
        </div>

        {/* Startup Capabilities Matrix */}
        <div className="mb-20 md:mb-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-3 font-display">Full-Stack Startup Toolkit</h2>
            <p className="text-neutral-400 text-lg">Everything technical your startup needs from Day 1 to Series A.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {startupPillars.map((pillar, idx) => (
              <div key={idx} className="bg-neutral-900/90 border-2 border-white/10 p-8 rounded-2xl hover:border-yellow-400/60 transition-all">
                <h3 className="text-2xl font-bold text-white mb-3 font-display">{pillar.title}</h3>
                <p className="text-neutral-400 mb-6 text-sm md:text-base leading-relaxed">{pillar.desc}</p>
                <div className="space-y-2">
                  {pillar.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs md:text-sm text-neutral-300">
                      <CheckCircle2 size={16} className="text-yellow-400 mr-2.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Startup FAQ */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-black text-white mb-3 uppercase tracking-wider">Startup Engineering FAQ</h2>
            <p className="text-neutral-400">Straight answers for founders on speed, IP rights, and investor readiness.</p>
          </div>

          <div className="space-y-4">
            {startupFaqs.map((faq, idx) => (
              <div key={idx} className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-white hover:text-yellow-400 transition-colors"
                >
                  <span className="text-lg">{faq.q}</span>
                  <ChevronRight size={20} className={`transform transition-transform ${openFaq === idx ? 'rotate-90 text-yellow-400' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-neutral-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4"
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
        <div className="bg-yellow-400 text-black p-10 md:p-16 border-4 border-white shadow-[10px_10px_0_white] text-center">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 font-display">Ready to Build Your Product?</h3>
          <p className="text-lg md:text-xl font-bold text-black/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Stop waiting on unreliable contractors. Partner with Sociodigit's full-stack startup engineering team to build something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-black text-white hover:bg-pink-500 px-10 py-5 font-black uppercase tracking-widest transition-colors text-lg">
              Book Founder Strategy Session
            </Link>
            <Link href="/services/devops" className="bg-white text-black hover:bg-neutral-200 px-8 py-5 font-bold uppercase tracking-wider transition-colors text-lg">
              Explore DevOps Stack
            </Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Startups;
