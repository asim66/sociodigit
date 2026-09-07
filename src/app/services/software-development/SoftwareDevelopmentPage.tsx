"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Terminal,
  Database,
  Globe,
  ArrowRight,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  Server,
  Cloud,
  BrainCircuit,
  ChevronDown,
  ExternalLink,
  Activity,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Briefcase,
  MessageSquare,
  Eye,
  Sliders,
  Check,
  LayoutDashboard,
  CreditCard,
  LineChart,
  Lock,
  Workflow
} from "lucide-react";
import Link from "next/link";

// ─── TECH STACK ───
const techStack = [
  { name: "Next.js 15", category: "Frontend", color: "#FFFFFF" },
  { name: "React 19", category: "Frontend", color: "#61DAFB" },
  { name: "TypeScript", category: "Language", color: "#3178C6" },
  { name: "Node.js", category: "Backend", color: "#68A063" },
  { name: "Python", category: "AI & Data", color: "#FFD43B" },
  { name: "Go", category: "Microservices", color: "#00ADD8" },
  { name: "PostgreSQL", category: "Database", color: "#336791" },
  { name: "Redis", category: "Cache", color: "#FF4438" },
  { name: "Docker", category: "DevOps", color: "#2496ED" },
  { name: "AWS", category: "Cloud", color: "#FF9900" },
  { name: "GraphQL", category: "API", color: "#E10098" },
  { name: "Tailwind CSS", category: "Design System", color: "#38BDF8" }
];

// ─── DUAL IMPACT: BUSINESS + TECH METRICS ───
const impactMetrics = [
  {
    businessGoal: "+38% Higher Conversion",
    businessDetail: "Fast-loading applications prevent drop-offs and drive higher customer checkout rates.",
    techEnabler: "Sub-50ms P99 Edge Latency",
    techDetail: "Next.js 15 Server Components streamed globally across Cloudflare edge networks.",
    icon: <TrendingUp className="w-5 h-5 text-brand-orange" />
  },
  {
    businessGoal: "Zero Revenue Loss",
    businessDetail: "Eliminate downtime during sales spikes, marketing campaigns, and product launches.",
    techEnabler: "99.99% Multi-Region Uptime",
    techDetail: "Automated failover, container auto-scaling, and health-checked load balancers.",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
  },
  {
    businessGoal: "Months Faster to Market",
    businessDetail: "Get working software into users' hands quickly to validate product-market fit.",
    techEnabler: "6 to 8 Week MVP Sprints",
    techDetail: "Reusable UI component libraries, pre-built auth schemas, and automated CI/CD.",
    icon: <Zap className="w-5 h-5 text-amber-400" />
  },
  {
    businessGoal: "Effortless Future Scaling",
    businessDetail: "Your internal team can easily take over and extend the code without costly rewrites.",
    techEnabler: "100% Strict Type Safety",
    techDetail: "Modular domain architecture, Zod validation, and documented API contracts.",
    icon: <Lock className="w-5 h-5 text-cyan-400" />
  }
];

// ─── VISUAL PRODUCT ARCHETYPES ───
const productArchetypes = [
  {
    id: "saas",
    title: "B2B SaaS Platform",
    subtitle: "Subscription Billing, Team Workspaces & User Management",
    businessAspect: "Self-serve onboarding flow that converts trial users into paying enterprise accounts.",
    techAspect: "PostgreSQL row-level security, Stripe recurring webhooks, and zero cold-start edge routes.",
    preview: {
      kpi1: { label: "Monthly Recurring Revenue", val: "$124,500", change: "+32% MoM" },
      kpi2: { label: "Active Organizations", val: "1,420", change: "99.4% retention" },
      badge: "Enterprise Ready",
      activity: [
        { text: "Apex Corp upgraded to Annual Enterprise Plan", time: "Just now", amount: "+$4,800/yr" },
        { text: "New workspace provisioned in us-east-1", time: "4m ago", amount: "24 seats" },
        { text: "Automated invoice generated for Acme Inc", time: "18m ago", amount: "$890.00" }
      ]
    }
  },
  {
    id: "analytics",
    title: "Interactive Analytics Portal",
    subtitle: "Real-Time Customer Insights & Automated Reporting",
    businessAspect: "Empowers leadership and stakeholders with live telemetry without waiting on engineering.",
    techAspect: "ClickHouse column-oriented database queries executing sub-second over 10M+ events.",
    preview: {
      kpi1: { label: "Query Processing Speed", val: "18ms", change: "4.8x faster" },
      kpi2: { label: "Data Pipeline Events", val: "8.4M/day", change: "Zero lag" },
      badge: "Real-Time Telemetry",
      activity: [
        { text: "Cohort retention analysis generated", time: "2m ago", amount: "1.2M rows" },
        { text: "Automated executive summary emailed", time: "12m ago", amount: "PDF Export" },
        { text: "Anomaly detection model triggered alert", time: "25m ago", amount: "Resolved" }
      ]
    }
  },
  {
    id: "portal",
    title: "Operations & Customer Hub",
    subtitle: "End-to-End Workflow Automation & Client Collaboration",
    businessAspect: "Reduces operational overhead and eliminates back-and-forth email bottlenecks.",
    techAspect: "Role-scoped access control (RBAC), real-time WebSockets, and encrypted file storage.",
    preview: {
      kpi1: { label: "Task Turnaround Time", val: "2.4 hrs", change: "-64% reduction" },
      kpi2: { label: "Customer Satisfaction", val: "4.9 / 5", change: "98% positive" },
      badge: "Frictionless UX",
      activity: [
        { text: "Contract digitally signed and verified", time: "1m ago", amount: "DocuSign API" },
        { text: "Client approved design milestone #2", time: "10m ago", amount: "Milestone 2" },
        { text: "Automated compliance audit report passed", time: "30m ago", amount: "100% Pass" }
      ]
    }
  }
];

// ─── HOW WE COLLABORATE (THE HUMAN PROCESS) ───
const collaborationPillars = [
  {
    icon: <MessageSquare className="w-6 h-6 text-brand-orange" />,
    title: "Direct Slack / Discord Access",
    desc: "No bureaucratic middlemen or slow account managers. You chat directly with the senior software engineers and designers building your product."
  },
  {
    icon: <Eye className="w-6 h-6 text-cyan-400" />,
    title: "Bi-Weekly Live Demos",
    desc: "Every alternate Friday, we walk you through working software on a live staging environment. You see real progress before we proceed."
  },
  {
    icon: <Workflow className="w-6 h-6 text-emerald-400" />,
    title: "Transparent Linear Boards",
    desc: "Complete visibility into our sprint backlogs, code reviews, and upcoming milestones. Watch tickets move to production in real time."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-amber-400" />,
    title: "Complete IP & Code Ownership",
    desc: "All source code, git history, documentation, and cloud deployment keys belong 100% to your company from the very first commit."
  }
];

// ─── FAQS ───
const faqs = [
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. 100% of all code, git repositories, architecture documentation, and cloud keys belong entirely to your company from day one."
  },
  {
    q: "How fast can we build and launch an MVP?",
    a: "Most MVP projects ship within 6 to 10 weeks, depending on scope. We work in disciplined 2-week sprints so you see live, testable progress every fortnight."
  },
  {
    q: "Can you work with our existing codebase or API?",
    a: "Yes. We frequently take over existing platforms, refactor backend bottlenecks, improve UX and speed, or add new capabilities alongside your in-house team."
  },
  {
    q: "What does post-launch support look like?",
    a: "Every project includes 60 days of post-launch warranty support covering bug fixes at no extra charge. We also offer flexible monthly retainer options for ongoing feature development."
  }
];

export default function SoftwareDevelopmentPage() {
  // Hero Dual Perspective Toggle: 'business' vs 'tech'
  const [heroView, setHeroView] = useState<"business" | "tech">("business");

  // Product Archetype Active Tab
  const [activeArchetype, setActiveArchetype] = useState(0);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const curProduct = productArchetypes[activeArchetype];

  return (
    <div className="pt-28 lg:pt-36 bg-[#030303] text-white font-sans selection:bg-brand-orange/30 selection:text-white">

      {/* ── BACKGROUND AMBIENCE ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[550px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px]" />
        <div className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px]" />
      </div>

      {/* ══════════════════════════════════════════
          1. HERO SECTION (WITH DUAL BUSINESS ⇄ TECH MOCKUP)
      ══════════════════════════════════════════ */}
      <section className="relative pb-16 lg:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-6 border border-brand-orange/30 bg-brand-orange/10 text-brand-orange shadow-[0_0_15px_rgba(232,66,26,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>Product Design & Engineering Studio</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.12] mb-6">
                Where intuitive product design meets{" "}
                <span className="bg-gradient-to-r from-brand-orange via-[#ff7a45] to-[#ffb088] bg-clip-text text-transparent">
                  serious engineering
                </span>.
              </h1>

              <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
                We bridge the gap between business vision and technical execution. Building high-converting SaaS platforms, intuitive web applications, and fast, scalable backends.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link 
                  href="/contact" 
                  className="btn-primary inline-flex items-center space-x-2 shadow-[0_0_25px_rgba(232,66,26,0.3)]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={16} />
                </Link>
                <a 
                  href="#archetypes" 
                  className="btn-outline inline-flex items-center space-x-2 text-white/80 hover:text-white"
                >
                  <LayoutDashboard size={16} className="text-brand-orange" />
                  <span>See Interactive Product Demos</span>
                </a>
              </div>

              {/* Trust proof */}
              <div className="flex items-center space-x-6 sm:space-x-10 pt-6 border-t border-white/10 text-xs text-white/50">
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white">200+</div>
                  <div>Shipped Products</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-brand-orange">99.9%</div>
                  <div>Uptime SLA</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-emerald-400">6-8 Wks</div>
                  <div>Avg. MVP Speed</div>
                </div>
              </div>
            </motion.div>

            {/* Right: DUAL PERSPECTIVE INTERACTIVE CARD (Business vs Tech) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl border border-white/15 bg-[#090d14]/90 backdrop-blur-xl shadow-2xl p-6 relative overflow-hidden">
                
                {/* Switcher Toggle Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="text-xs font-mono text-white/50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Simulation</span>
                  </div>

                  {/* Dual Mode Switcher */}
                  <div className="p-1 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-1">
                    <button
                      onClick={() => setHeroView("business")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center space-x-1.5 ${
                        heroView === "business"
                          ? "bg-brand-orange text-white shadow-[0_0_12px_rgba(232,66,26,0.4)]"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <Briefcase size={13} />
                      <span>Business View</span>
                    </button>
                    <button
                      onClick={() => setHeroView("tech")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center space-x-1.5 ${
                        heroView === "tech"
                          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <Code2 size={13} />
                      <span>Tech View</span>
                    </button>
                  </div>
                </div>

                {/* View 1: BUSINESS IMPACT PERSPECTIVE */}
                {heroView === "business" && (
                  <motion.div
                    key="biz"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Revenue & Growth Strip */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-xs text-white/50 mb-1 flex items-center justify-between">
                          <span>Monthly Recurring Revenue</span>
                          <span className="text-emerald-400 font-bold text-[11px]">+28.4%</span>
                        </div>
                        <div className="text-2xl font-display font-black text-white">$128,450</div>
                        <div className="text-[11px] text-white/40 mt-1">4,820 active paying seats</div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-xs text-white/50 mb-1 flex items-center justify-between">
                          <span>Onboarding Success</span>
                          <span className="text-brand-orange font-bold text-[11px]">Top 5%</span>
                        </div>
                        <div className="text-2xl font-display font-black text-white">94.2%</div>
                        <div className="text-[11px] text-white/40 mt-1">Zero friction signup flow</div>
                      </div>
                    </div>

                    {/* Visual Growth Sparkline representation */}
                    <div className="p-4 rounded-xl bg-[#06090e] border border-white/5">
                      <div className="flex items-center justify-between text-xs text-white/60 mb-2 font-mono">
                        <span>Customer Conversion Velocity</span>
                        <span className="text-emerald-400 font-bold">14.8 Days to Close</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex">
                        <div className="bg-brand-orange h-full rounded-full" style={{ width: "68%" }} />
                        <div className="bg-cyan-400 h-full rounded-full opacity-60" style={{ width: "22%" }} />
                      </div>
                      <div className="flex justify-between text-[10px] text-white/40 font-mono mt-2">
                        <span>Trial (100%)</span>
                        <span>Active Usage (68%)</span>
                        <span>Enterprise Upgrade (22%)</span>
                      </div>
                    </div>

                    {/* Live Business Event Feed */}
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs space-y-2">
                      <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider">Live Customer Activity</div>
                      <div className="flex items-center justify-between text-white/80">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Apex Logistics expanded to 50 team licenses
                        </span>
                        <span className="text-emerald-400 font-mono font-semibold">+$2,400</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          Automated Stripe renewal settled successfully
                        </span>
                        <span className="text-white/40 font-mono">Instant</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* View 2: TECH TELEMETRY PERSPECTIVE */}
                {heroView === "tech" && (
                  <motion.div
                    key="tech"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-xs text-white/50 mb-1">P99 Edge Latency</div>
                        <div className="text-2xl font-display font-black text-cyan-400">28ms</div>
                        <div className="text-[11px] text-white/40 mt-1">Cloudflare global POPs</div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-xs text-white/50 mb-1">Cluster Health</div>
                        <div className="text-2xl font-display font-black text-emerald-400">100%</div>
                        <div className="text-[11px] text-white/40 mt-1">Zero dropped requests</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#06090e] border border-white/5 font-mono text-xs text-white/80 leading-relaxed overflow-x-auto">
                      <div className="text-white/40 text-[10px] mb-2 pb-1 border-b border-white/5">
                        // Next.js 15 Edge SSR + Tenant Routing
                      </div>
                      <pre>
                        <code>{`export const runtime = "edge";

export async function POST(req: NextRequest) {
  const tenant = await resolveTenantShard(req);
  return NextResponse.json({ 
    status: "synchronized", 
    latency: "28ms" 
  });
}`}</code>
                      </pre>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/70 font-mono flex items-center justify-between">
                      <span>Strict TypeScript 5.8</span>
                      <span className="text-emerald-400">&gt;90% Test Coverage</span>
                    </div>
                  </motion.div>
                )}

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-mono">
                  <span>Sociodigit Architecture Core</span>
                  <span>Human UX + Engineering Rigor</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          2. THE DUAL ADVANTAGE: BUSINESS GOAL + TECH ENABLER
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5 bg-[#050505]">
        <div className="container-custom">
          
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-brand-orange bg-brand-orange/10 border border-brand-orange/20 mb-3">
              <Sparkles size={12} />
              <span>THE BUSINESS & ENGINEERING BRIDGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Technical Excellence That Drives Business Growth
            </h2>
            <p className="text-white/60 text-base">
              Clean code isn't just about good aesthetics — it is what prevents user churn, lowers hosting overhead, and accelerates feature velocity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {impactMetrics.map((item, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono text-white/40">ROI Indicator</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {item.businessGoal}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {item.businessDetail}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-xs font-mono text-brand-orange font-semibold mb-1">
                    Powered by: {item.techEnabler}
                  </div>
                  <div className="text-xs text-white/50 leading-relaxed">
                    {item.techDetail}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          3. INTERACTIVE PRODUCT ARCHETYPES (VISUAL UI CARDS)
      ══════════════════════════════════════════ */}
      <section id="archetypes" className="py-24 border-t border-white/5 bg-[#030303]">
        <div className="container-custom">
          
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <LayoutDashboard size={12} />
              <span>INTERACTIVE PRODUCT PREVIEWS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              What Modern Digital Products Look Like
            </h2>
            <p className="text-white/60 text-base">
              Explore how we translate complex user workflows into clean, interactive product interfaces.
            </p>
          </div>

          {/* Archetype Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {productArchetypes.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveArchetype(idx)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer border ${
                  activeArchetype === idx
                    ? "bg-brand-orange text-white border-brand-orange shadow-[0_0_20px_rgba(232,66,26,0.3)]"
                    : "bg-white/[0.03] text-white/60 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Active Archetype Showcase Card */}
          <motion.div
            key={curProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl p-8 lg:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Context: The Human & Business Angle */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-brand-orange bg-brand-orange/10 border border-brand-orange/20">
                    {curProduct.preview.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3">
                    {curProduct.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    {curProduct.subtitle}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono uppercase text-brand-orange font-semibold mb-1">
                      Business Experience
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {curProduct.businessAspect}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-1">
                      Technical Engine
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {curProduct.techAspect}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/contact" className="btn-primary inline-flex items-center space-x-2 text-sm">
                    <span>Discuss Your Solution</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right: Visual App UI Mockup */}
              <div className="lg:col-span-7 rounded-2xl bg-[#06090e] border border-white/10 p-6 shadow-xl">
                
                {/* Mockup Title bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-white/50">{curProduct.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
                  </div>
                  <span className="text-xs font-mono text-white/40">Real-Time Sync</span>
                </div>

                {/* Top Metrics Cards */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xs text-white/50 mb-1">{curProduct.preview.kpi1.label}</div>
                    <div className="text-2xl font-display font-bold text-white">{curProduct.preview.kpi1.val}</div>
                    <div className="text-[11px] text-emerald-400 font-mono mt-1">{curProduct.preview.kpi1.change}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xs text-white/50 mb-1">{curProduct.preview.kpi2.label}</div>
                    <div className="text-2xl font-display font-bold text-white">{curProduct.preview.kpi2.val}</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-1">{curProduct.preview.kpi2.change}</div>
                  </div>
                </div>

                {/* Activity Feed in Mockup */}
                <div className="rounded-xl bg-black/40 border border-white/5 p-4">
                  <div className="text-xs font-mono text-white/50 mb-3 flex items-center justify-between">
                    <span>Recent Customer Transactions & Events</span>
                    <span className="text-emerald-400">● Live Feed</span>
                  </div>
                  <div className="space-y-3">
                    {curProduct.preview.activity.map((act, i) => (
                      <div key={i} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5 last:border-0">
                        <div className="flex items-center space-x-2 text-white/80">
                          <CheckCircle2 size={13} className="text-brand-orange" />
                          <span>{act.text}</span>
                        </div>
                        <span className="font-mono text-white/50 text-[11px] shrink-0 ml-3">{act.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          4. HOW WE COLLABORATE (THE HUMAN PROCESS)
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5 bg-[#050505]">
        <div className="container-custom">
          
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
              <Users size={12} />
              <span>THE HUMAN EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              How We Actually Work With You
            </h2>
            <p className="text-white/60 text-base">
              Great software requires clear, constant communication. Here is what your day-to-day partnership with our team looks like.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationPillars.map((pillar, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          5. CORE TECH STACK (MINIMAL & SCANNABLE)
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5 bg-[#030303]">
        <div className="container-custom">
          
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
              Our Core Stack
            </h2>
            <p className="text-white/60 text-sm">
              Battle-tested technologies chosen for performance, active security updates, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {techStack.map((tech) => (
              <div 
                key={tech.name}
                className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center space-x-3"
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full shrink-0" 
                  style={{ backgroundColor: tech.color }}
                />
                <div>
                  <div className="text-sm font-semibold text-white">{tech.name}</div>
                  <div className="text-[11px] text-white/40 font-mono">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          6. CONCISE FAQS
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5 bg-[#050505]">
        <div className="container-custom max-w-3xl">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Questions & Answers
            </h2>
            <p className="text-white/60 text-base">
              Common questions about working together, pricing, and IP.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-white/40 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-orange" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          7. BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="py-24 border-t border-white/10 bg-gradient-to-b from-[#050505] to-[#020202]">
        <div className="container-custom">
          <div className="rounded-3xl p-10 sm:p-14 border border-white/10 bg-gradient-to-r from-brand-orange/15 via-white/[0.02] to-transparent text-center max-w-4xl mx-auto space-y-6">
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Have a product in mind? Let's talk.
            </h2>
            
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us about your project goals. We will provide an honest technical appraisal, estimated sprint scope, and prototype advice within 24 hours.
            </p>

            <div className="pt-2">
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center space-x-2 text-base shadow-[0_0_25px_rgba(232,66,26,0.35)]"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 text-xs text-white/50 font-mono">
              <span>Direct: <strong className="text-white">+91 7008381630</strong></span>
              <span>Email: <strong className="text-white">hi@sociodigit.in</strong></span>
              <span>Typical response: <strong className="text-emerald-400">&lt; 4 hours</strong></span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
