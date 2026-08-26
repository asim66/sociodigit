"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, Cpu, Server, ShieldCheck, Database, Layers,
  ArrowRight, Phone, Mail, Sparkles, BrainCircuit, Globe, 
  Award, Zap, ChevronRight, HelpCircle, CheckCircle2, GitBranch,
  Terminal, Monitor, Laptop, Cloud
} from 'lucide-react';
import Link from 'next/link';

const engineeringServices = [
  {
    icon: <Code2 className="w-7 h-7 text-brand-orange" />,
    badge: "Full-Stack Web & SaaS",
    title: "Custom Enterprise Web Applications",
    desc: "Architecting high-performance web applications and multi-tenant SaaS platforms using Next.js, React, Node.js, Go, and Python. Engineered for sub-second UI response and high concurrency.",
    deliverables: [
      "Microservices & Modern API Architecture",
      "Multi-Tenant SaaS with RBAC & Auth",
      "Real-Time WebSockets & Event Streaming",
      "100/100 Core Web Vitals & PWA Capabilities"
    ]
  },
  {
    icon: <Cloud className="w-7 h-7 text-cyan-400" />,
    badge: "Cloud & DevOps",
    title: "Cloud Infrastructure & Kubernetes",
    desc: "Designing resilient, automated cloud infrastructure on AWS and Google Cloud using Terraform (IaC), Docker containerization, Kubernetes orchestration, and automated CI/CD pipelines.",
    deliverables: [
      "Zero-Downtime CI/CD GitHub Actions / GitLab",
      "Kubernetes (EKS / GKE) Auto-Scaling",
      "Serverless & Edge Compute Deployments",
      "Cloud Cost Optimization & Security Auditing"
    ]
  },
  {
    icon: <Database className="w-7 h-7 text-emerald-400" />,
    badge: "Data & Architecture",
    title: "High-Throughput Backend & APIs",
    desc: "Building rock-solid database architectures and performant backend services handling millions of transactions with PostgreSQL, Redis, GraphQL, and message brokers.",
    deliverables: [
      "High-Performance REST & GraphQL Endpoints",
      "Database Partitioning, Indexing & Caching",
      "FinTech-Grade Data Encryption & Compliance",
      "Third-Party ERP & CRM Integration"
    ]
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-indigo-400" />,
    badge: "Quality Assurance",
    title: "QA Automation & Modernization",
    desc: "Eliminating production regressions with comprehensive test automation suites using Playwright, Cypress, and Jest. Modernizing legacy monoliths without business disruption.",
    deliverables: [
      "End-to-End Automated Browser Testing",
      "Load & Stress Performance Profiling",
      "Monolith to Microservices Refactoring",
      "Code Quality & Vulnerability Auditing"
    ]
  }
];

const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Redux Toolkit", "Vue.js"] },
  { category: "Backend & APIs", items: ["Node.js", "Go", "Python", "FastAPI", "NestJS", "GraphQL"] },
  { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "Databases & Cache", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Kafka", "Elasticsearch"] }
];

const localAreas = [
  "Bhubaneswar", "Laxmisagar", "Patia", "Saheed Nagar", "Chandrasekharpur",
  "Infocity", "Jaydev Vihar", "Cuttack", "Rourkela", "Berhampur", "Puri", "Sambalpur"
];

const engineeringProofs = [
  { metric: "99.99%", label: "Target System Uptime", sub: "Production SLAs" },
  { metric: "40%", label: "Transaction Speed Lift", sub: "FinTech Platform" },
  { metric: "90%+", label: "Automated QA Coverage", sub: "Playwright CI/CD" },
  { metric: "60%", label: "Cloud Cost Reduction", sub: "IaC & Serverless" },
];

const faqs = [
  {
    q: "Why should businesses in Odisha hire Sociodigit for software development?",
    a: "Sociodigit combines senior software engineering expertise with local accessibility in Bhubaneswar. We build enterprise-grade architectures using clean code standards, modern microservices, and continuous automated testing, delivering products that scale effortlessly."
  },
  {
    q: "What is your typical software development lifecycle (SDLC)?",
    a: "We follow an Agile sprint-based methodology: 1) Technical Architecture & Requirement Analysis, 2) UX/UI Wireframing & Prototyping, 3) Bi-weekly iterative sprint development with client demo reviews, 4) Automated QA & security auditing, and 5) Cloud deployment with 24/7 telemetry monitoring."
  },
  {
    q: "Do you build custom SaaS platforms from scratch?",
    a: "Yes. We have built multi-tenant SaaS platforms featuring recurring subscription billing (Stripe/Razorpay), multi-role permissions, complex real-time reporting dashboards, and scalable database schemas."
  },
  {
    q: "Can you take over and refactor an existing software project?",
    a: "Yes. We regularly perform comprehensive code audits to identify security vulnerabilities, memory leaks, and performance bottlenecks, followed by incremental refactoring into modern, maintainable architectures."
  }
];

export default function SoftwareDevelopmentCompanyBhubaneswarPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-28 md:pt-32 bg-space-blue text-white selection:bg-brand-orange selection:text-white">
      {/* ── HERO SECTION ── */}
      <section className="pt-4 md:pt-8 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 -z-10"></div>
        <div className="glow-bg top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-orange/15 blur-[160px] -z-10" />

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-md mb-6">
                <Code2 size={15} className="text-brand-orange shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Software Development Company in Bhubaneswar, Odisha
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 leading-[1.08]">
                Engineering Scalable <br className="hidden sm:block" />
                <span className="gradient-text">Custom Software & Cloud Apps</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
                From high-concurrency SaaS products to enterprise cloud modernization, Sociodigit develops resilient, secure, and lightning-fast software systems for startups and industry leaders in Bhubaneswar and globally.
              </p>

              {/* Hero CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-orange/90 transition-all duration-300 shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 flex items-center justify-center space-x-2 group"
                >
                  <span>Discuss Your Software Project</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+917008381630"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/15 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone size={18} className="text-brand-orange" />
                  <span>Call +91 7008381630</span>
                </a>
              </div>
            </motion.div>

            {/* Proof Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              {engineeringProofs.map((item, idx) => (
                <div key={idx} className="text-center p-3">
                  <div className="text-3xl lg:text-4xl font-extrabold font-display text-brand-orange mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs font-semibold text-white/80">{item.label}</div>
                  <div className="text-[11px] text-white/40 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING CAPABILITIES ── */}
      <section className="py-20 border-t border-white/5 relative">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              <span>Full-Lifecycle Engineering</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Built for <span className="gradient-text">Speed, Scale & Security</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg">
              We design software architectures that handle heavy workloads with high availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {engineeringServices.map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-white/70">
                        <CheckCircle2 size={16} className="text-brand-orange shrink-0 mr-2.5 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-white transition-colors group/link"
                >
                  <span>Request technical architecture review</span>
                  <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODERN TECH STACK ── */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Enterprise <span className="gradient-text">Technology Stack</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base">
                Modern, high-performance tooling vetted for production reliability and developer productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((stack, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-white/10 text-brand-orange">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-white/80 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL ENGINEERING HUBS & CLIENTS ── */}
      <section className="py-20">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Laptop size={13} />
                <span>Odisha Engineering Center</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Local Software Partner with Global Engineering Standards
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Based out of Laxmisagar, Bhubaneswar, our core engineering team works closely with Odisha-based enterprises, fintech startups, and hospitals, providing in-person requirement workshops, agile sprints, and seamless communication.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-white/80">
                  <CheckCircle2 size={18} className="text-brand-orange shrink-0" />
                  <span>On-site discovery workshops across Bhubaneswar & Cuttack</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/80">
                  <CheckCircle2 size={18} className="text-brand-orange shrink-0" />
                  <span>Dedicated Slack & Jira integration with transparent sprints</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/80">
                  <CheckCircle2 size={18} className="text-brand-orange shrink-0" />
                  <span>Strict IP protection, code ownership transfer & SOC-2 compliance</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                <Globe className="text-brand-orange w-5 h-5" />
                Serving Clients Across Odisha
              </h3>
              <p className="text-sm text-white/60 mb-6">
                We engineer software solutions for enterprises and startups throughout Odisha&apos;s key tech hubs:
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {localAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/80 hover:border-brand-orange/40 hover:text-brand-orange transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>Direct Engineering Helpline:</span>
                <a href="tel:+917008381630" className="text-brand-orange font-bold hover:underline">
                  +91 7008381630
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20 border-t border-white/5">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-white/60">
              Answers to common queries regarding our software development process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 font-bold font-display text-base md:text-lg hover:text-brand-orange transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    size={20}
                    className={`text-brand-orange shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-white/70 text-sm leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-space-blue to-[#0b1021]">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="p-10 md:p-14 rounded-3xl bg-brand-orange/10 border border-brand-orange/30 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[100px] -z-10" />
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-white">
              Ready to Engineer Your Next Software Product?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-base md:text-lg">
              Book a 30-minute technical roadmap call with our lead solutions architect in Bhubaneswar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base font-bold">
                Book Architecture Consultation
              </Link>
              <Link href="/case-studies" className="btn-secondary px-8 py-4 text-base font-semibold">
                View Client Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
