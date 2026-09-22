"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, Cpu, Server, ShieldCheck, Database, Layers,
  ArrowRight, Phone, Mail, Sparkles, BrainCircuit, Globe, 
  Award, Zap, ChevronRight, HelpCircle, CheckCircle2, GitBranch,
  Terminal, Monitor, Laptop, Cloud, Briefcase, Users, Building2,
  Rocket, Search, TestTube, ClipboardList, Cog
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

const trustMetrics = [
  { value: "50+", label: "Projects Delivered", icon: <Briefcase className="w-5 h-5" /> },
  { value: "8+", label: "Industries Served", icon: <Building2 className="w-5 h-5" /> },
  { value: "6+", label: "Years of Engineering", icon: <Award className="w-5 h-5" /> },
  { value: "100%", label: "Client Code Ownership", icon: <ShieldCheck className="w-5 h-5" /> },
];

const industryBadges = [
  { name: "FinTech & Payments", href: "/industries/fintech" },
  { name: "Healthcare & MedTech", href: "/industries/healthcare" },
  { name: "E-Commerce & Retail", href: "/industries/ecommerce" },
  { name: "SaaS & Startups", href: "/industries/saas" },
  { name: "Education & EdTech", href: "/industries/education" },
  { name: "Hospitality & Hotels", href: "/industries/hospitality-hotels" },
];

const sdlcSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    icon: <Search className="w-6 h-6" />,
    items: [
      "Stakeholder requirement workshops (on-site in Bhubaneswar)",
      "Technical architecture blueprint & system design",
      "Technology stack selection & feasibility analysis"
    ]
  },
  {
    step: "02",
    title: "UX/UI Design & Prototyping",
    icon: <Monitor className="w-6 h-6" />,
    items: [
      "Wireframing & interactive Figma prototypes",
      "Design system & component library creation",
      "Usability testing & stakeholder feedback cycles"
    ]
  },
  {
    step: "03",
    title: "Agile Sprint Development",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      "Bi-weekly iterative sprints with client demo reviews",
      "Clean code with TypeScript, Go, or Python backends",
      "Continuous integration with automated build pipelines"
    ]
  },
  {
    step: "04",
    title: "QA Automation & Security",
    icon: <TestTube className="w-6 h-6" />,
    items: [
      "End-to-end Playwright & Jest automated testing",
      "Security vulnerability scanning & penetration testing",
      "Load testing simulating 50,000+ concurrent users"
    ]
  },
  {
    step: "05",
    title: "Cloud Deployment & Monitoring",
    icon: <Cloud className="w-6 h-6" />,
    items: [
      "Zero-downtime deployment on AWS or Google Cloud",
      "24/7 observability with Prometheus & Grafana",
      "Ongoing maintenance, scaling & performance tuning"
    ]
  },
];

const caseStudyPreviews = [
  {
    badge: "FinTech SaaS",
    title: "High-Concurrency FinTech SaaS Platform",
    desc: "Architected a distributed microservices platform using Next.js, Go, and PostgreSQL with Redis caching on AWS EKS handling 2M+ concurrent transactions.",
    metrics: [
      { label: "Transaction Latency", value: "-65%" },
      { label: "Active Concurrency", value: "2M+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Dev Velocity", value: "3x Faster" },
    ],
    tech: ["Next.js", "Go", "PostgreSQL", "Redis", "AWS EKS", "Docker"]
  },
  {
    badge: "QA Automation",
    title: "End-to-End QA Automation & Performance Hardening",
    desc: "Designed an automated testing framework using Playwright and TypeScript integrated into CI/CD pipelines, reducing regression testing from 18 hours to 8 minutes.",
    metrics: [
      { label: "Test Coverage", value: "92%" },
      { label: "Production Bugs", value: "-75%" },
      { label: "Release Cadence", value: "Weekly" },
      { label: "Regression Time", value: "8 Mins" },
    ],
    tech: ["Playwright", "TypeScript", "Jest", "GitHub Actions", "Docker"]
  },
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
  },
  {
    q: "How much does custom software development cost in Bhubaneswar?",
    a: "Custom software development costs in Bhubaneswar typically range from ₹3–15 lakhs for MVPs and ₹15–80 lakhs for full enterprise platforms, depending on complexity, integrations, and timeline. Sociodigit provides transparent fixed-price quotes after a free technical discovery workshop."
  },
  {
    q: "Do you work with startups and early-stage companies?",
    a: "Absolutely. We partner with early-stage startups to build production-ready MVPs, SaaS platforms, and mobile apps using lean engineering sprints. Our startup engagements include architecture design, rapid prototyping, and cloud deployment optimized for cost efficiency."
  },
  {
    q: "What industries do you serve from your Bhubaneswar office?",
    a: "We serve FinTech, healthcare, e-commerce, SaaS, education, and hospitality industries from our Bhubaneswar office. Our engineering team has delivered platforms handling millions of transactions, patient management systems, and multi-tenant SaaS products across Odisha and globally."
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
                Software Development Company in Bhubaneswar <br className="hidden sm:block" />
                <span className="gradient-text">for Scalable Cloud Products</span>
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

      {/* ── CLIENT TRUST & SOCIAL PROOF ── */}
      <section className="py-16 border-t border-white/5">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {trustMetrics.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center hover:border-brand-orange/30 transition-colors">
                  <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange mb-3">
                    {item.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-extrabold font-display text-white mb-1">{item.value}</div>
                  <div className="text-xs font-semibold text-white/60 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Industry Badges */}
            <div className="text-center">
              <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">
                Trusted by startups & enterprises across industries
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {industryBadges.map((badge, idx) => (
                  <Link
                    key={idx}
                    href={badge.href}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white/70 hover:border-brand-orange/40 hover:text-brand-orange transition-all duration-300"
                  >
                    {badge.name}
                  </Link>
                ))}
              </div>
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

      {/* ── ENGINEERING PROCESS / SDLC ── */}
      <section className="py-20 border-t border-white/5">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <ClipboardList size={13} />
                <span>Our Development Process</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                How We Build <span className="gradient-text">Custom Software</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
                A battle-tested, five-phase engineering methodology refined across 50+ projects for startups and enterprises in Bhubaneswar and globally.
              </p>
            </div>

            <div className="space-y-6">
              {sdlcSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 md:min-w-[240px]">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-orange/60 uppercase tracking-widest mb-1">Phase {step.step}</div>
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-orange transition-colors">{step.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-white/70">
                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mr-2.5 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services/software-development"
                className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-white transition-colors group"
              >
                <span>Explore all our software development services</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
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

      {/* ── CASE STUDY PREVIEWS ── */}
      <section className="py-20 border-t border-white/5">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
                <Award size={13} />
                <span>Proven Engineering Results</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Software We&apos;ve <span className="gradient-text">Engineered</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
                Real projects. Quantifiable outcomes. Here&apos;s what our custom software development delivers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudyPreviews.map((cs, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20 mb-4 inline-block">
                      {cs.badge}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-3">{cs.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6">{cs.desc}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {cs.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                          <div className="text-lg font-extrabold font-display text-brand-orange">{m.value}</div>
                          <div className="text-[11px] text-white/50 font-semibold">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cs.tech.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-white/60 border border-white/5">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/15 transition-all duration-300 group"
              >
                <span>View All Case Studies</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
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

      {/* ── RELATED CONTENT ── */}
      <section className="py-16 border-t border-white/5">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 text-center">
            Related <span className="gradient-text">Resources</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "How Startups Build Scalable SaaS Platforms", href: "/blog/scalable-saas-platforms-startups" },
              { title: "DevOps Best Practices for Scaling Startups", href: "/blog/devops-best-practices-scaling-startups-2026" },
              { title: "Why Playwright is the Future of QA Testing", href: "/blog/playwright-future-automation-testing" },
            ].map((post, idx) => (
              <Link
                key={idx}
                href={post.href}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/30 transition-all duration-300 group"
              >
                <h3 className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors mb-2">{post.title}</h3>
                <span className="text-xs text-brand-orange font-semibold flex items-center gap-1">
                  Read article <ChevronRight size={12} />
                </span>
              </Link>
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
