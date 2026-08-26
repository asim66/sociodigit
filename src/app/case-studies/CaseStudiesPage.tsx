"use client";
// @ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, BarChart3, Zap, Globe, Shield, ExternalLink, 
  CheckCircle2, Sparkles, Server, Code2, Users, MapPin, 
  Layers, Lock, Database
} from 'lucide-react';
import Link from 'next/link';

const categories = ["All", "Software Development", "Cloud & DevOps", "Digital Marketing & SEO", "QA Automation"];

const cases = [
  {
    title: "Brand Defense, ORM & Cloud Modernization",
    client: "Hotel Holiday Resort, Puri (Odisha)",
    category: "Digital Marketing & SEO",
    timeline: "4 Months Execution",
    badge: "Hospitality & ORM",
    problem: "The resort was losing substantial direct revenue due to unauthorized fake Google Ads mimicking their brand, Google Business Profile data hijacking, and slow shared hosting.",
    strategy: "Conducted continuous ad-network trademark enforcement, eradicated fake phone numbers, secured the verified Google Business Profile, and migrated their web portal to a scalable high-performance cloud server.",
    execution: [
      "Removed 100% of malicious third-party Google Ads and fraudulent booking phone numbers",
      "Stabilized Google Business Profile and automated local citation verification",
      "Migrated CMS to cloud hosting with CDN edge caching and SSL hardening",
      "Engineered high-intent local SEO targeting Puri and Bhubaneswar tourists"
    ],
    techStack: ["Google Business Profile API", "Cloud Server", "Cloudflare CDN", "DNS Hardening", "Looker Studio"],
    metrics: [
      { label: "Fraudulent Ads Blocked", value: "100%" },
      { label: "Site Speed Lift", value: "+80%" },
      { label: "Direct Inquiries", value: "+45%" },
      { label: "Uptime SLA", value: "99.99%" }
    ]
  },
  {
    title: "High-Concurrency FinTech SaaS Platform",
    client: "GlobalPay Solutions",
    category: "Software Development",
    timeline: "6 Months Development",
    badge: "Enterprise SaaS",
    problem: "The client faced database contention and slow UI latency handling 2M+ transaction queries on a legacy monolithic architecture.",
    strategy: "Architected a distributed microservices platform using Next.js, Go (Golang), and PostgreSQL with Redis caching deployed on AWS EKS (Kubernetes).",
    execution: [
      "Decomposed monolithic backend into Go-based containerized microservices",
      "Implemented optimistic concurrency control and multi-region database replication",
      "Built a sub-second real-time analytics dashboard with WebSockets",
      "Conducted automated load testing simulating 50,000 concurrent API requests"
    ],
    techStack: ["Next.js", "TypeScript", "Go (Golang)", "PostgreSQL", "Redis", "AWS EKS", "Docker"],
    metrics: [
      { label: "Transaction Latency", value: "-65%" },
      { label: "Active Concurrency", value: "2M+" },
      { label: "Uptime Maintained", value: "99.99%" },
      { label: "Dev Velocity", value: "3x Faster" }
    ]
  },
  {
    title: "Infrastructure as Code & Serverless Migration",
    client: "StreamLine Cloud Systems",
    category: "Cloud & DevOps",
    timeline: "3 Months Execution",
    badge: "Cloud Engineering",
    problem: "Skyrocketing cloud infrastructure costs and manual, error-prone deployment cycles causing frequent downtime during release windows.",
    strategy: "Implemented automated Infrastructure as Code (IaC) using Terraform and migrated workloads to containerized Google Cloud Run and Kubernetes with automated GitHub Actions CI/CD pipelines.",
    execution: [
      "Standardized all cloud resources in modular, version-controlled Terraform code",
      "Engineered automated blue/green zero-downtime deployment pipelines",
      "Configured auto-scaling policies based on CPU and request telemetry",
      "Implemented comprehensive Prometheus & Grafana observability alerts"
    ],
    techStack: ["Terraform", "Google Cloud (GCP)", "GitHub Actions", "Docker", "Kubernetes", "Grafana"],
    metrics: [
      { label: "Monthly Cloud Bill", value: "-60%" },
      { label: "Deployment Cycle", value: "< 5 Mins" },
      { label: "Downtime During Releases", value: "0%" },
      { label: "IaC Coverage", value: "100%" }
    ]
  },
  {
    title: "End-to-End QA Automation & Performance Hardening",
    client: "ShopMax E-Commerce Retailer",
    category: "QA Automation",
    timeline: "3 Months Implementation",
    badge: "Quality Engineering",
    problem: "Manual QA bottlenecks delayed product feature releases by weeks and critical checkout regressions slipped into production.",
    strategy: "Designed an automated testing framework using Playwright, TypeScript, and Jest integrated directly into pre-merge GitHub Actions pull request checks.",
    execution: [
      "Authored 300+ end-to-end automated test scenarios covering critical cart/checkout funnels",
      "Integrated synthetic load and Core Web Vitals performance regression gates",
      "Reduced regression testing execution from 18 hours manually to 8 minutes in parallel CI runs",
      "Implemented cross-browser automated testing for Chrome, Safari, and Firefox"
    ],
    techStack: ["Playwright", "TypeScript", "Jest", "GitHub Actions", "Lighthouse CI", "Docker"],
    metrics: [
      { label: "Automated Test Coverage", value: "92%" },
      { label: "Production Bugs", value: "-75%" },
      { label: "Release Cadence", value: "Weekly" },
      { label: "Regression Time", value: "8 Mins" }
    ]
  },
  {
    title: "Local SEO & High-Intent Patient Lead Generation",
    client: "Apex Healthcare & Specialty Clinic, Bhubaneswar",
    category: "Digital Marketing & SEO",
    timeline: "5 Months Campaign",
    badge: "Healthcare Local SEO",
    problem: "Low local search visibility for specialized treatments across Bhubaneswar, Saheed Nagar, and Patia with high acquisition cost from paid search.",
    strategy: "Restructured website architecture with high-intent localized treatment pages, schema markup, Google Business Profile ranking signals, and E-E-A-T medical content optimization.",
    execution: [
      "Optimized Google Business Profile and claimed verified local citations across Odisha medical directories",
      "Achieved Top 3 Google Map Pack rankings for 18+ high-intent search terms",
      "Deployed responsive, sub-second landing pages with direct WhatsApp and appointment booking funnels",
      "Engineered structured JSON-LD MedicalWebPage and Physician schema markup"
    ],
    techStack: ["Next.js", "JSON-LD Schema", "Google Business Profile", "Google Tag Manager", "GA4"],
    metrics: [
      { label: "Organic Search Growth", value: "+380%" },
      { label: "Monthly Patient Inquiries", value: "+120%" },
      { label: "Top 3 Map Keywords", value: "18+" },
      { label: "PageSpeed Index", value: "99/100" }
    ]
  }
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCases = selectedCategory === "All" 
    ? cases 
    : cases.filter(c => c.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 bg-space-blue text-white selection:bg-brand-orange selection:text-white min-h-screen">
      {/* ── HEADER ── */}
      <section className="section-padding bg-surface/50 border-b border-white/5">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>Verifiable Evidence & Client Results</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tight">
              Client <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              Real engineering challenges. Strategic cloud architectures. Quantifiable growth metrics delivered for enterprises and local market leaders.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedCategory === category
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/25'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES LIST ── */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {filteredCases.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                {/* Left Overview & Strategy (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
                      {c.badge}
                    </span>
                    <span className="text-xs font-semibold text-white/50">
                      {c.timeline}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                      {c.title}
                    </h2>
                    <div className="text-sm font-semibold text-brand-orange/90 flex items-center gap-2">
                      <span>Client:</span>
                      <span className="text-white/80">{c.client}</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed text-white/80">
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                      <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-red-400">The Problem</h3>
                      <p className="text-white/70">{c.problem}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                      <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-blue-400">The Strategy</h3>
                      <p className="text-white/70">{c.strategy}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-2.5 text-emerald-400">Key Execution Points</h3>
                      <ul className="space-y-2">
                        {c.execution.map((step, i) => (
                          <li key={i} className="flex items-start text-xs md:text-sm text-white/70">
                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mr-2.5 mt-0.5" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Technology & Frameworks</div>
                    <div className="flex flex-wrap gap-2">
                      {c.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Metrics Grid (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center">
                        <div className="text-3xl md:text-4xl font-display font-extrabold text-brand-orange mb-1">
                          {m.value}
                        </div>
                        <div className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-center">
                    <h3 className="font-display font-bold text-white text-lg mb-2">Looking for similar results?</h3>
                    <p className="text-xs text-white/70 mb-4">Let our solutions architects analyze your technical bottlenecks.</p>
                    <Link href="/contact" className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-orange text-white text-xs font-bold rounded-xl hover:bg-brand-orange/90 transition-all">
                      <span>Request Proposal</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 border-t border-white/10 bg-surface">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to Engineer Your Success Story?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Book an introductory technical architecture call with our team in Bhubaneswar today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base font-bold">
              Start Your Project
            </Link>
            <Link href="/services" className="btn-secondary px-8 py-4 text-base font-semibold">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
