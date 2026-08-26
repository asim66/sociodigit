// @ts-nocheck
"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, Code2, Cpu, Cloud, Database, ArrowRight, 
  Activity, Server, CheckCircle2, ChevronRight, Lock, 
  Layers, Zap, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

const saasPillars = [
  {
    title: "Multi-Tenant Architecture & Data Isolation",
    desc: "Engineered with tenant-isolated database schemas, row-level security (RLS), and dynamic tenant routing for secure B2B SaaS operations.",
    points: ["Row-level database security", "Subdomain & custom domain routing", "Isolated tenant telemetry & analytics", "Automated tenant provisioning APIs"]
  },
  {
    title: "Subscription, Metering & Billing Engines",
    desc: "Seamless integration with Stripe Billing, Paddle, and custom usage-based metering pipelines.",
    points: ["Usage-based & tier-based subscription billing", "Automated invoice generation & tax reconciliation", "Failed payment dunning & churn mitigation", "Customer self-serve billing portals"]
  },
  {
    title: "High-Throughput Webhook & Event Streaming",
    desc: "Resilient asynchronous event workers using Apache Kafka and Redis streams processing high-frequency workloads.",
    points: ["Sub-10ms event processing latency", "Idempotent webhook delivery pipelines", "Dead-letter queue handling & automated retries", "Real-time bi-directional WebSockets"]
  },
  {
    title: "AI-Powered SaaS Capabilities & RAG",
    desc: "Embed generative AI workflows, vector search embeddings, and intelligent natural-language interfaces into your software product.",
    points: ["Vector database integrations (Pinecone, pgvector)", "Fine-tuned LLM retrieval pipelines", "Context-aware AI copilots", "Cost-controlled token streaming"]
  }
];

const saasFaqs = [
  {
    q: "What architectural pattern do you recommend for scaling a B2B SaaS platform?",
    a: "We recommend a modular monolith or microservices architecture built with Next.js, Node.js or Go, and PostgreSQL with Redis caching. Database tenancy is handled via PostgreSQL Row-Level Security (RLS) or schema-per-tenant isolation depending on enterprise compliance requirements."
  },
  {
    q: "How do you handle zero-downtime deployments for SaaS applications?",
    a: "We deploy applications on Kubernetes clusters or serverless edge infrastructure using blue/green and canary deployment strategies with automated database migrations and health-check rollbacks."
  },
  {
    q: "Can you help integrate usage-based billing and complex subscription tiers?",
    a: "Yes. We engineer automated event-ingestion pipelines that aggregate customer usage metrics in real time and sync seamlessly with Stripe Billing or custom enterprise contract engines."
  }
];

const Saas = () => {
  const [typedText, setTypedText] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const fullText = "system.initialize({ mode: 'disrupt' });";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-space-blue text-white relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Cyan Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-400 text-xs md:text-sm font-mono tracking-wider uppercase">SaaS Product Engineering</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 md:mb-8">
              Architecting the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Next Default</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-10 font-light max-w-xl leading-relaxed">
              We engineer scalable, high-availability software platforms for B2B and B2C tech innovators. From multi-tenant architectures to serverless cloud backends, we build software products that dominate markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto justify-center bg-cyan-500 hover:bg-cyan-400 text-space-blue font-bold font-mono py-4 px-8 rounded-none border-b-4 border-r-4 border-cyan-700 transition-transform active:translate-y-1 active:translate-x-1 active:border-b-0 active:border-r-0 flex items-center group">
                <span>INITIATE_PROJECT</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/services/software-development" className="w-full sm:w-auto justify-center border border-white/20 hover:border-cyan-400 text-white font-mono py-4 px-8 flex items-center transition-colors">
                VIEW_CAPABILITIES
              </Link>
            </div>
          </motion.div>

          {/* Terminal UI */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.15)]"
          >
            {/* Terminal Header */}
            <div className="bg-white/5 px-4 py-3 flex items-center border-b border-white/10 relative">
              <div className="flex space-x-2 relative z-10 w-full">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[10px] md:text-xs text-white/40 font-mono">root@sociodigit-core:~</div>
              </div>
            </div>
            {/* Terminal Body */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed text-cyan-400 h-56 md:h-64 flex flex-col justify-end relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none z-10"></div>
              <div className="opacity-50 blur-[1px]">
                <p>&gt; Starting microservices...</p>
                <p>&gt; [OK] Connected to multi-region DB</p>
                <p>&gt; [OK] Auth cluster online</p>
                <p>&gt; Provisioning elastic nodes...</p>
                <p className="mb-4">&gt; Scaling to 10M concurrent connections</p>
              </div>
              <p className="text-white relative z-20"><span className="text-pink-500 mr-2">➜</span><span className="text-cyan-400">{typedText}</span><span className="animate-pulse">_</span></p>
            </div>
          </motion.div>
        </div>

        {/* Core Architecture Matrix */}
        <div className="mb-24 md:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">SaaS Engineering Architecture</h2>
            <p className="text-white/60 text-lg">Scalable, audited, and resilient foundations designed for multi-tenant growth.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {saasPillars.map((pillar, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all">
                <h3 className="text-2xl font-display font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/60 text-sm md:text-base mb-6 leading-relaxed">{pillar.desc}</p>
                <div className="space-y-2.5">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center text-xs md:text-sm text-white/80">
                      <CheckCircle2 size={16} className="text-cyan-400 mr-2.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Callout */}
        <div className="bg-gradient-to-r from-cyan-950/60 via-space-blue to-space-blue border border-cyan-500/30 p-8 md:p-12 rounded-3xl mb-24 md:mb-32 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-2">Proven SaaS Outcome</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">High-Concurrency FinTech SaaS Platform</h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed">
              Architected a distributed microservices platform using Next.js, Go, and PostgreSQL on AWS EKS—handling 2M+ transaction queries with 65% latency reduction and 99.99% uptime.
            </p>
          </div>
          <Link href="/case-studies" className="btn-primary whitespace-nowrap bg-cyan-400 hover:bg-cyan-300 text-space-blue font-bold shrink-0">
            Read Case Study
          </Link>
        </div>

        {/* SaaS FAQ */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-3">SaaS Architecture FAQ</h2>
            <p className="text-white/60">Technical answers on tenancy, high-throughput workers, and scaling patterns.</p>
          </div>

          <div className="space-y-4">
            {saasFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="text-lg">{faq.q}</span>
                  <ChevronRight size={20} className={`transform transition-transform ${openFaq === idx ? 'rotate-90 text-cyan-400' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-white/70 leading-relaxed text-sm md:text-base border-t border-white/10 pt-4"
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
        <div className="glass p-10 md:p-16 rounded-[2.5rem] text-center border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Build Your Next SaaS Product?</h3>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Partner with Sociodigit's engineering squad to design, build, and scale your software product with enterprise-grade reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book SaaS Strategy Session
              </Link>
              <Link href="/services/devops" className="btn-outline">
                Explore Cloud &amp; DevOps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saas;
