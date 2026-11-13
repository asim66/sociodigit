"use client";
// @ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Compass, 
  TrendingUp, 
  Layers, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  Zap, 
  GitPullRequest, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  Workflow, 
  FileText,
  Activity,
  Check,
  Sliders,
  Calendar,
  Flame,
  LayoutDashboard,
  Briefcase,
  Code2,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

// ─── IMPACT MATRIX: BUSINESS OUTCOMES ⇄ PM EXECUTION ───
const impactMatrix = [
  {
    businessGoal: "40% Faster Time-to-Market",
    businessDetail: "Eliminate endless scope creep and build-trap cycles. Ship working, market-ready iterations in predictable 2-week sprint cadences.",
    pmExecution: "Strict Scope Boxing & Dual-Track Agile",
    pmDetail: "Decouple product discovery from delivery. High-fidelity PRDs with verified acceptance criteria before engineers write a single line of code.",
    icon: <Zap className="w-5 h-5 text-brand-orange" />
  },
  {
    businessGoal: "3.4x Higher Feature Adoption",
    businessDetail: "Stop shipping ghost features that users never touch. Validate core pain points and willingness-to-use before committing budget.",
    pmExecution: "Opportunity Solution Trees & Pre-Build Prototypes",
    pmDetail: "Qualitative customer interviews, unmoderated usability tests, and quantitative demand signals before backlog prioritization.",
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
  },
  {
    businessGoal: "Zero Wasted Engineering Capital",
    businessDetail: "Every developer hour directly impacts revenue, trial-to-paid conversion, or customer retention metrics.",
    pmExecution: "Objective RICE Scoring & OKR Alignment",
    pmDetail: "Mathematical prioritization based on Reach, Impact, Confidence, and Effort, eliminating executive pet projects and subjective opinions.",
    icon: <Target className="w-5 h-5 text-cyan-400" />
  },
  {
    businessGoal: "Investor & Boardroom Ready",
    businessDetail: "Present a crystal-clear product roadmap with defensible unit economics, retention curves, and transparent milestone tracking.",
    pmExecution: "Cohort Telemetry & North Star Instrumentation",
    pmDetail: "Full-funnel Mixpanel, Amplitude, and PostHog tracking plans mapping real customer lifecycles from signup to expansion.",
    icon: <BarChart3 className="w-5 h-5 text-purple-400" />
  }
];

// ─── 4 ENGAGEMENT MODELS ───
const engagementModels = [
  {
    tag: "Strategic Leadership",
    title: "Fractional CPO / Head of Product",
    desc: "Executive-level product leadership for early-stage founders and scaling enterprises. We establish your product operating system, mentor your PMs, and lead roadmap defense.",
    cadence: "10-20 hrs / week",
    deliverables: [
      "Company-wide OKRs & North Star metric definition",
      "Product team hiring, coaching & process rituals",
      "Executive board updates & investor pitch deck narrative",
      "Build vs. Buy technical & vendor architecture reviews"
    ],
    highlight: false
  },
  {
    tag: "Most Popular",
    title: "Dedicated 0-to-1 Product Pod",
    desc: "An embedded Senior Product Manager partnered with your software engineers and UI/UX designers to take a new platform or major feature set from concept to launch.",
    cadence: "Full-Time Embedded",
    deliverables: [
      "End-to-end PRDs with detailed edge-case specifications",
      "Daily standups, sprint grooming, and milestone planning",
      "UX wireframe reviews & Figma design handoff approvals",
      "QA acceptance verification & release orchestration"
    ],
    highlight: true
  },
  {
    tag: "High Velocity",
    title: "4-Week Discovery & De-risking Sprint",
    desc: "An intensive sprint to validate an unbuilt product idea, pivot an underperforming module, or define the scope of an upcoming venture before committing capital.",
    cadence: "4-Week Fixed Sprint",
    deliverables: [
      "15-20 customer discovery interviews & synthesis",
      "Competitive teardown & market opportunity map",
      "Interactive clickable Figma prototype tested with users",
      "Airtight MVP Product Requirements Document (PRD)"
    ],
    highlight: false
  },
  {
    tag: "Growth & Retention",
    title: "Product Growth & Churn Audit",
    desc: "Deep-dive diagnostic into why users drop off during onboarding, fail to reach their 'aha' moment, or churn after trial periods. Built for live platforms.",
    cadence: "2-3 Week Intensive",
    deliverables: [
      "Full user onboarding funnel & activation drop-off audit",
      "Event tracking plan review in Mixpanel or Amplitude",
      "Time-to-Value (TTV) benchmark analysis",
      "Prioritized growth backlog with rapid win recommendations"
    ],
    highlight: false
  }
];

// ─── 4 REAL-WORLD DELIVERABLE ARTIFACTS (INTERACTIVE TABS) ───
const deliverableTabs = [
  {
    id: "kanban",
    title: "Sprint Cockpit (Linear/Jira)",
    badge: "Agile Execution",
    icon: <LayoutDashboard size={18} />
  },
  {
    id: "rice",
    title: "Live RICE Prioritizer",
    badge: "Interactive Calculator",
    icon: <Sliders size={18} />
  },
  {
    id: "prd",
    title: "Real PRD Specification",
    badge: "Engineering Blueprint",
    icon: <FileText size={18} />
  },
  {
    id: "funnel",
    title: "Telemetry & Funnel Loop",
    badge: "Analytics Tracking",
    icon: <Activity size={18} />
  }
];

// ─── FAQ DATA ───
const faqs = [
  {
    q: "How is a Sociodigit Product Manager different from a traditional Project Manager or Scrum Master?",
    a: "Project Managers track deadlines and budgets ('When will it ship?'). Scrum Masters facilitate agile ceremonies. A Sociodigit Product Manager owns the business outcome ('Why are we building this, will customers pay for it, and does it drive measurable retention?'). We write PRDs, interview customers, analyze telemetry, guide UI/UX flows, and ruthlessly prioritize engineering effort around business metrics."
  },
  {
    q: "Can you provide a Fractional CPO if our startup already has an in-house engineering team?",
    a: "Absolutely. Many technical founders have brilliant engineers but lack the senior product leadership needed to structure sprints, talk to customers, and translate business strategy into engineering tickets. Our Fractional CPO steps in to establish the product roadmap, mentor junior team members, and ensure every sprint builds value."
  },
  {
    q: "What tools do your Product Managers use to collaborate with our team?",
    a: "We integrate directly into your workspace. For backlog & issue tracking: Linear, Jira, GitHub Projects, or Shortcut. For specs and documentation: Notion, Coda, or Confluence. For analytics: Mixpanel, Amplitude, PostHog, or Segment. For design alignment: Figma. No forced tools — we meet you where your team already works."
  },
  {
    q: "How do you handle feature requests from aggressive sales teams or vocal clients?",
    a: "We replace emotional shouting matches with transparent, data-driven frameworks like RICE and Opportunity Trees. Every request is mapped to user reach, customer willingness-to-pay, strategic fit, and implementation effort. Stakeholders can visibly see where their feature ranks on the roadmap and why."
  },
  {
    q: "What is the typical ramp-up time before a Sociodigit PM begins driving value?",
    a: "Within 5 to 7 business days. Week 1 is dedicated to onboarding: reviewing current architecture, interviewing internal stakeholders, auditing customer support logs, and establishing sprint visibility. By Week 2, your PM is actively grooming tickets, refining PRDs, and running sprint rituals."
  }
];

const ProductManagementPage = () => {
  // Deliverable showcase tab
  const [activeTab, setActiveTab] = useState("kanban");

  // Interactive RICE Calculator state
  const [riceReach, setRiceReach] = useState(12000);
  const [riceImpact, setRiceImpact] = useState(2); // 1 = low, 2 = medium, 3 = high
  const [riceConfidence, setRiceConfidence] = useState(80); // percentage
  const [riceEffort, setRiceEffort] = useState(3); // person-weeks

  // Calculate RICE: (Reach * Impact * (Confidence/100)) / Effort
  const calculatedRice = Math.round((riceReach * riceImpact * (riceConfidence / 100)) / Math.max(riceEffort, 1));

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-28 lg:pt-36 bg-[#030303] text-white font-sans selection:bg-brand-orange/30 selection:text-white relative overflow-hidden">
      
      {/* ── AMBIENT GLOWS ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-brand-orange/15 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]" />
      </div>

      {/* ══════════════════════════════════════════
          1. HERO SECTION (HIGH VISIBILITY & PROMPT VALUE)
      ══════════════════════════════════════════ */}
      <section className="relative pb-20 lg:pb-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Clear Pitch & High Contrast */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-6 border border-brand-orange/30 bg-brand-orange/10 text-brand-orange shadow-[0_0_15px_rgba(232,66,26,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>Product Strategy · Agile Execution · Growth</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.12] mb-6 text-white">
                Turn your ambitious product vision into{" "}
                <span className="bg-gradient-to-r from-brand-orange via-[#ff7a45] to-[#ffb088] bg-clip-text text-transparent">
                  market-dominating software
                </span>.
              </h1>

              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                We eliminate the build-trap. Combining rigorous customer discovery, outcome-driven roadmaps, and disciplined sprint leadership to deliver products users actually adopt and pay for.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link 
                  href="/contact" 
                  className="btn-primary inline-flex items-center space-x-2 shadow-[0_0_25px_rgba(232,66,26,0.3)]"
                >
                  <span>Book Free Product Strategy Call</span>
                  <ArrowRight size={16} />
                </Link>
                <a 
                  href="#artifacts" 
                  className="btn-outline inline-flex items-center space-x-2 text-white/90 hover:text-white"
                >
                  <LayoutDashboard size={16} className="text-brand-orange" />
                  <span>Inspect Deliverables</span>
                </a>
              </div>

              {/* Core Proof Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl lg:text-4xl font-display font-black text-brand-orange">40%</div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-white/70 mt-1">Faster Time-to-Market</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-display font-black text-cyan-400">3.4x</div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-white/70 mt-1">Feature Adoption Lift</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-display font-black text-emerald-400">98%</div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-white/70 mt-1">Sprint Predictability</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Visual - Live Product Cockpit */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="rounded-3xl border border-white/15 bg-[#0a0a0d] p-6 shadow-2xl shadow-black relative overflow-hidden backdrop-blur-xl">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="font-mono text-white/70 ml-2 font-bold">Workspace · Sprint 28 (Active)</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-bold text-[11px]">
                    ● 46 / 48 Story Pts On-Track
                  </span>
                </div>

                {/* Live sprint status highlight */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-wider">North Star Focus</span>
                    <span className="text-xs font-bold text-white/90">Week 2 of 2-Week Cadence</span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Self-Serve Enterprise Onboarding & Team RBAC Permissions
                  </p>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-3">
                    <div className="bg-gradient-to-r from-brand-orange to-cyan-400 h-full w-[88%] rounded-full" />
                  </div>
                </div>

                {/* Live Kanban Ticket Preview */}
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">RICE: 195</span>
                      <span className="text-[11px] text-white/60 font-mono">SOCIO-142</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">One-Click Google Workspace SSO</h4>
                    <p className="text-xs text-white/60 line-clamp-2">Reduces onboarding friction for B2B teams with &gt;10 seats.</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-white/70 pt-2 border-t border-white/5">
                      <span className="text-emerald-400 font-semibold">✓ PRD Approved</span>
                      <span className="font-mono">8 pts · In Dev</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-orange/20 text-brand-orange font-bold">RICE: 168</span>
                      <span className="text-[11px] text-white/60 font-mono">SOCIO-148</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Usage-Based Metering Webhook</h4>
                    <p className="text-xs text-white/60 line-clamp-2">Stripe billing event stream with automatic dunning mitigation.</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-white/70 pt-2 border-t border-white/5">
                      <span className="text-amber-400 font-semibold">⏳ In QA Test</span>
                      <span className="font-mono">5 pts · Done</span>
                    </div>
                  </div>
                </div>

                {/* Telemetry bottom badge */}
                <div className="flex items-center justify-between text-xs bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 font-mono text-white/80">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>Post-Launch Lift: <strong className="text-white">+38% Signups</strong></span>
                  </div>
                  <span className="text-white/50">Verified via Mixpanel</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. DUAL IMPACT: BUSINESS OUTCOMES ⇄ PM EXECUTION
      ══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-t border-white/10 bg-[#060608] relative">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-4 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
              <Zap size={14} />
              <span>Engineered For Maximum ROI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
              Where Business Ambition Meets Sprint Discipline
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Great product management connects executive board goals directly to ticket backlogs. Here is how our execution translates into compounding bottom-line value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactMatrix.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-brand-orange/40 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.businessGoal}</h3>
                    <div className="text-xs font-mono text-brand-orange font-semibold uppercase tracking-wider mt-0.5">
                      Business Outcome
                    </div>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {item.businessDetail}
                </p>

                <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
                    How We Execute: {item.pmExecution}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.pmDetail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. INTERACTIVE ARTIFACT SHOWCASE (DESTROY THE AI FEEL)
      ══════════════════════════════════════════ */}
      <section id="artifacts" className="py-20 lg:py-32 border-t border-white/10 bg-[#030303] relative">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-4 border border-brand-orange/30 bg-brand-orange/10 text-brand-orange">
              <FileText size={14} />
              <span>Real Tangible Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
              Inspect What We Actually Deliver
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              No nebulous promises. Click through our actual product management artifacts, calculators, and telemetry models below.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {deliverableTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-brand-orange text-white shadow-[0_0_20px_rgba(232,66,26,0.3)]"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {tab.icon}
                <span>{tab.title}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === tab.id ? "bg-black/30 text-white" : "bg-white/10 text-white/60"}`}>
                  {tab.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="rounded-3xl border border-white/15 bg-[#0a0a0e] p-6 lg:p-10 shadow-2xl relative min-h-[460px]">
            
            {/* TAB 1: KANBAN SPRINT COCKPIT */}
            {activeTab === "kanban" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Sprint 28: Core B2B SaaS Activation</h3>
                    <p className="text-xs text-white/60 mt-0.5">Milestone: Enterprise Beta Release · Target Date: Nov 14</p>
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-mono">
                    <span className="text-white/60">WIP Limit: <strong>4</strong></span>
                    <span className="text-cyan-400 font-bold">Planned Points: 48 pts</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Column 1 */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-white/70 uppercase tracking-wider">1. Discovery & Specs (3)</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl border border-white/10 bg-black/40 hover:border-cyan-400/50 transition-colors">
                        <div className="text-[10px] font-mono text-cyan-400 font-bold mb-1">PRD DRAFTING</div>
                        <h5 className="text-sm font-bold text-white mb-2">Automated SOC-2 Audit Export</h5>
                        <p className="text-xs text-white/60 mb-3">Customer interview insight: 4 enterprise pilots blocked on compliance log exports.</p>
                        <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/5">
                          <span>PM: Lead</span>
                          <span className="font-mono">Est: 5 pts</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                        <div className="text-[10px] font-mono text-purple-400 font-bold mb-1">USER TESTING</div>
                        <h5 className="text-sm font-bold text-white mb-1">Bulk Seat Invites Flow</h5>
                        <p className="text-xs text-white/60">5 unmoderated Maze sessions completed; fixing invite modal drop-off.</p>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/[0.02] p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">2. In Active Sprint (4)</span>
                      <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl border border-brand-orange/40 bg-black/60 shadow-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono text-brand-orange font-bold">STORY #142</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-orange/20 text-brand-orange font-bold">8 pts</span>
                        </div>
                        <h5 className="text-sm font-bold text-white mb-2">SAML / Okta SSO Integration</h5>
                        <div className="space-y-1 mb-3 text-xs text-white/70">
                          <div className="flex items-center space-x-1.5">
                            <Check size={12} className="text-emerald-400" />
                            <span>Okta Metadata XML parser</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Check size={12} className="text-emerald-400" />
                            <span>JIT User Provisioning</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/5">
                          <span>Assignee: Senior Eng</span>
                          <span className="text-emerald-400 font-bold">PR in Review</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                        <div className="text-[10px] font-mono text-cyan-400 font-bold mb-1">STORY #145</div>
                        <h5 className="text-sm font-bold text-white mb-1">Usage-Based Metering Webhook</h5>
                        <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/5 mt-3">
                          <span>Assignee: Backend</span>
                          <span className="text-brand-orange font-bold">In Progress</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">3. Shipped & Verified (2)</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/10">
                        <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">VERIFIED IN PRODUCTION</div>
                        <h5 className="text-sm font-bold text-white mb-2">Onboarding Checklist V2</h5>
                        <p className="text-xs text-white/60 mb-2">Shipped behind LaunchDarkly feature flag to 100% of new signups.</p>
                        <div className="p-2 rounded-lg bg-black/40 text-emerald-300 font-mono text-[11px] font-bold">
                          Impact: +34% Complete Setup
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: INTERACTIVE RICE PRIORITIZER */}
            {activeTab === "rice" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Interactive RICE Scoring Engine</h3>
                    <p className="text-xs text-white/60 mt-0.5">Drag the sliders below to calculate how we prioritize roadmap features mathematically.</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 text-right">
                    <div className="text-xs font-mono text-white/70 uppercase">Computed RICE Score</div>
                    <div className="text-3xl font-display font-black text-brand-orange">{calculatedRice.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    {/* Reach */}
                    <div>
                      <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="text-white">Reach (Users impacted per quarter)</span>
                        <span className="font-mono text-cyan-400 font-bold">{riceReach.toLocaleString()} users</span>
                      </div>
                      <input 
                        type="range" 
                        min="1000" 
                        max="50000" 
                        step="1000"
                        value={riceReach}
                        onChange={(e) => setRiceReach(Number(e.target.value))}
                        className="w-full accent-brand-orange cursor-pointer"
                      />
                      <p className="text-xs text-white/50 mt-1">Total active users or prospective accounts touched by this release.</p>
                    </div>

                    {/* Impact */}
                    <div>
                      <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="text-white">Impact Level</span>
                        <span className="font-mono text-emerald-400 font-bold">
                          {riceImpact === 3 ? "3x Massive" : riceImpact === 2 ? "2x High" : "1x Medium"}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { val: 1, label: "1x Minimal" },
                          { val: 2, label: "2x High" },
                          { val: 3, label: "3x Massive" }
                        ].map(opt => (
                          <button
                            key={opt.val}
                            onClick={() => setRiceImpact(opt.val)}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              riceImpact === opt.val 
                                ? "bg-emerald-500 text-space-blue" 
                                : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Confidence */}
                    <div>
                      <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="text-white">Confidence (Data proof score)</span>
                        <span className="font-mono text-purple-400 font-bold">{riceConfidence}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="50" 
                        max="100" 
                        step="5"
                        value={riceConfidence}
                        onChange={(e) => setRiceConfidence(Number(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                      <p className="text-xs text-white/50 mt-1">Backed by qualitative interviews, user surveys, or competitor benchmarks.</p>
                    </div>

                    {/* Effort */}
                    <div>
                      <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="text-white">Engineering Effort</span>
                        <span className="font-mono text-amber-400 font-bold">{riceEffort} person-weeks</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="12" 
                        step="1"
                        value={riceEffort}
                        onChange={(e) => setRiceEffort(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                      <p className="text-xs text-white/50 mt-1">Total engineering, design, and QA weeks required to ship.</p>
                    </div>
                  </div>

                  {/* Prioritization Formula Explanation */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6 space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 font-mono">
                      How Sociodigit Defends Your Roadmap
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Every feature candidate goes through this exact scoring model. When stakeholders or sales demand competing features, we review the mathematical RICE score to prioritize what generates the highest ROI per engineering day.
                    </p>
                    <div className="p-4 rounded-xl border border-brand-orange/30 bg-brand-orange/[0.05] font-mono text-xs text-brand-orange">
                      Formula: (Reach × Impact × Confidence%) ÷ Effort = RICE Score
                    </div>
                    <div className="text-xs text-white/60 space-y-1.5 pt-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        <span>Filters out loud, low-impact opinions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        <span>Protects developers from thrash and context switching</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: PRD SPECIFICATION */}
            {activeTab === "prd" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-brand-orange font-bold uppercase">PRD Specification Standard</span>
                    <h3 className="text-xl font-bold text-white">DOC-104: Workspace Permission Tiers</h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Status: Approved for Sprint
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 font-mono text-xs">
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-white/10 bg-black/50">
                      <div className="text-white/40 font-bold mb-1">1. PROBLEM STATEMENT</div>
                      <p className="text-white/80 leading-relaxed font-sans">
                        Enterprise accounts with &gt;20 team members cannot grant read-only access to external auditors, leading to 32% security review drop-offs.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-white/10 bg-black/50">
                      <div className="text-white/40 font-bold mb-1">2. TARGET USER PERSONA</div>
                      <p className="text-white/80 font-sans">
                        IT Compliance Officer / SecOps Manager needing strict audit logging without edit access to production databases.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-white/10 bg-black/50">
                      <div className="text-white/40 font-bold mb-1">3. SUCCESS METRIC (NORTH STAR)</div>
                      <p className="text-emerald-400 font-bold font-sans">
                        Reduce enterprise compliance approval cycle from 28 days to under 4 business days.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-white/10 bg-black/50">
                      <div className="text-white/40 font-bold mb-1">4. ACCEPTANCE CRITERIA (GHERKIN FORMAT)</div>
                      <div className="space-y-2 text-white/70 font-sans text-xs">
                        <div className="p-2 rounded bg-white/5">
                          <strong>Given:</strong> A user with "Auditor" role logs into dashboard.<br/>
                          <strong>When:</strong> They navigate to financial records.<br/>
                          <strong>Then:</strong> Export button is active; write/delete inputs are disabled.
                        </div>
                        <div className="p-2 rounded bg-white/5">
                          <strong>Given:</strong> Any role permission change occurs.<br/>
                          <strong>Then:</strong> A cryptographic tamper-evident log event is emitted to Datadog.
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-white/10 bg-black/50">
                      <div className="text-white/40 font-bold mb-1">5. OUT OF SCOPE (AVOIDING SCOPE CREEP)</div>
                      <p className="text-rose-400/90 font-sans">
                        Custom role permission builder is deferred to v2.6. Only predefined standard roles ship in this milestone.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: TELEMETRY & FUNNEL LOOP */}
            {activeTab === "funnel" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Product-Led Growth Telemetry</span>
                    <h3 className="text-xl font-bold text-white">Full-Funnel Activation & Conversion Loop</h3>
                  </div>
                  <span className="text-xs font-mono text-white/60">Sample Mixpanel Instrumentation</span>
                </div>

                <div className="grid md:grid-cols-4 gap-4 text-center">
                  {[
                    { step: "1. Signup Started", count: "10,000", conv: "100%", color: "#06b6d4" },
                    { step: "2. Workspace Provisioned", count: "7,800", conv: "78%", color: "#0ea5e9" },
                    { step: "3. 'Aha' Moment Reached", count: "4,680", conv: "60%", color: "#10b981" },
                    { step: "4. Converted to Paid Tier", count: "1,540", conv: "33%", color: "#E8421A" },
                  ].map((f, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-white/10 bg-black/40">
                      <div className="text-xs font-mono text-white/50 mb-1">{f.step}</div>
                      <div className="text-2xl font-display font-black text-white mb-2">{f.count}</div>
                      <div className="inline-block px-2.5 py-1 rounded-full text-xs font-mono font-bold" style={{ background: `${f.color}20`, color: f.color }}>
                        {f.conv} step retention
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Continuous Telemetry Instrumentation Plan</h4>
                    <p className="text-xs text-white/70">
                      We specify exact event naming conventions (`workspace_created`, `integration_connected`, `invite_sent`) so your engineering team instruments tracking once, with zero guesswork.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 font-mono text-xs text-white/80">Mixpanel</span>
                    <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 font-mono text-xs text-white/80">Amplitude</span>
                    <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 font-mono text-xs text-white/80">PostHog</span>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. ENGAGEMENT MODELS (CLEAR & PRACTICAL)
      ══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-t border-white/10 bg-[#060608] relative">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-4 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <Briefcase size={14} />
              <span>Flexible Collaboration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
              How We Embed With Your Team
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Whether you need part-time executive leadership or a dedicated product manager embedded directly with your devs, we have a model that fits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model, idx) => (
              <div 
                key={idx}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  model.highlight 
                    ? "border-2 border-brand-orange bg-brand-orange/[0.04] shadow-[0_0_35px_rgba(232,66,26,0.15)]"
                    : "border border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                      model.highlight ? "bg-brand-orange text-white" : "bg-white/10 text-white/80"
                    }`}>
                      {model.tag}
                    </span>
                    <span className="text-xs font-mono text-white/60 font-semibold">{model.cadence}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">{model.desc}</p>

                  <div className="space-y-2.5 mb-8">
                    <div className="text-[11px] font-mono uppercase text-white/50 tracking-wider font-bold">Key Deliverables</div>
                    {model.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-white/80">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-full text-center text-xs font-bold font-mono transition-all block ${
                    model.highlight 
                      ? "bg-brand-orange hover:bg-brand-orange/90 text-white shadow-lg" 
                      : "border border-white/20 hover:border-white text-white bg-white/5"
                  }`}
                >
                  Inquire For This Role →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. FAQS SECTION (CLEAR & COMPLETE)
      ══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-t border-white/10 bg-[#030303] relative">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Clear answers on how Sociodigit Product Management operates alongside your developers and founders.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-base sm:text-lg text-white pr-4">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-brand-orange shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-white/70 text-sm leading-relaxed border-t border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. HIGH-CONVERTING BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-t border-white/10 bg-[#050505] relative">
        <div className="container-custom">
          <div className="rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden border border-white/15 bg-gradient-to-b from-white/[0.03] to-transparent shadow-2xl">
            
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-6 border border-brand-orange/30 bg-brand-orange/10 text-brand-orange">
                <Flame size={14} />
                <span>Ready to Build What Sells</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 tracking-tight">
                Stop guessing. Start shipping products{" "}
                <span className="bg-gradient-to-r from-brand-orange via-[#ff7a45] to-[#ffb088] bg-clip-text text-transparent">
                  users love
                </span>.
              </h2>

              <p className="text-base sm:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                Schedule a 30-minute discovery session with our senior product strategists. We will audit your current roadmap and show you where engineering effort is being lost.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2 shadow-[0_0_25px_rgba(232,66,26,0.3)]"
                >
                  <span>Book Free 30-Min Strategy Call</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="btn-outline text-white/80 hover:text-white"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductManagementPage;
