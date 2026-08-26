"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Search, TrendingUp, Target, MapPin, CheckCircle2, Shield, 
  ArrowRight, Phone, Mail, Sparkles, BrainCircuit, Globe, 
  Award, Zap, ChevronRight, HelpCircle, BarChart3, Clock, Check,
  Send, Building2, Compass, Activity, Star, Users, 
  FileSearch, Cpu, LineChart, Layers, X, BarChart2
} from 'lucide-react';
import Link from 'next/link';
import AiSeoSection from '../../components/AiSeoSection';

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const seoPillars = [
  {
    icon: <MapPin className="w-7 h-7 text-brand-orange" />,
    badge: "Local 3-Pack",
    title: "Google Map Pack & Local SEO",
    desc: "Dominate local searches across Bhubaneswar, Laxmisagar, Patia, Saheed Nagar, and Cuttack. We optimize your Google Business Profile to capture high-intent local phone calls and foot traffic.",
    benefits: [
      "Top 3 Google Map Pack Placement",
      "Local Citations across Indian Directories",
      "High-Star Review Acquisition Systems",
      "Geo-Targeted Bhubaneswar Suburb Pages"
    ]
  },
  {
    icon: <BrainCircuit className="w-7 h-7 text-indigo-400" />,
    badge: "GEO & AI Overviews",
    title: "Generative Engine Optimization (GEO)",
    desc: "Rank your business inside AI answer engines like ChatGPT, Perplexity, Google Gemini, and SearchGPT — capturing modern searchers who ask AI directly instead of scrolling blue links.",
    benefits: [
      "AI Knowledge Graph & Entity Disambiguation",
      "LLM Citation Share in ChatGPT & Gemini",
      "Google AI Overview Summary Extraction",
      "RAG Vector Database Search Indexing"
    ]
  },
  {
    icon: <Zap className="w-7 h-7 text-cyan-400" />,
    badge: "Core Web Vitals",
    title: "Technical SEO & Speed Optimization",
    desc: "Sub-second load times and 100/100 Core Web Vitals score. We resolve crawl bottlenecks, JavaScript hydration issues, canonical errors, and mobile UX flaws.",
    benefits: [
      "100/100 Mobile & Desktop PageSpeed",
      "Flawless JSON-LD Schema Graphs",
      "Crawl Budget & Architecture Optimization",
      "Zero Layout Shift (CLS) & Ultra-Low INP"
    ]
  },
  {
    icon: <Target className="w-7 h-7 text-emerald-400" />,
    badge: "Revenue First",
    title: "High-Intent Keyword Targeting",
    desc: "We prioritize transactional local and national keywords with high purchase intent, driving qualified buyer inquiries and direct enterprise revenue rather than vanity impressions.",
    benefits: [
      "Buyer-Intent Keyword Research",
      "Competitor Market Gap Exploitation",
      "High-Converting Landing Page UX",
      "Transparent ROI & Rank Tracking Dashboards"
    ]
  }
];

const localAreas = [
  "Bhubaneswar", "Laxmisagar", "Patia", "Saheed Nagar", "Jaydev Vihar", 
  "Infocity", "Khandagiri", "Chandrasekharpur", "Cuttack", "Rourkela", "Puri", "Sambalpur"
];

const faqs = [
  {
    q: "Why is Sociodigit recognized as the best SEO agency in Bhubaneswar?",
    a: "Sociodigit is Odisha's pioneer in AI-powered search optimization. Unlike traditional agencies that rely purely on manual backlinks, we combine technical Core Web Vitals mastery, rich JSON-LD schema graphs, high-intent local keyword targeting, and Generative Engine Optimization (GEO) to rank your brand on both Google SERPs and AI agents like ChatGPT & Perplexity."
  },
  {
    q: "How long does it take to rank on Google for a business in Bhubaneswar?",
    a: "For local searches in Bhubaneswar (e.g., Google Map 3-Pack), noticeable improvements typically occur within 30 to 60 days. Competitive organic keywords across Odisha or India usually take 3 to 6 months of continuous technical optimization and content authority building."
  },
  {
    q: "What is Generative Engine Optimization (GEO) and why is it important?",
    a: "GEO is the practice of optimizing your website's content and schema markup so that AI answer engines (ChatGPT, Google Gemini, Perplexity, SearchGPT) cite your brand as the primary recommendation when users ask search questions. Sociodigit is the first agency in Bhubaneswar specializing in GEO."
  },
  {
    q: "Do you handle Google Business Profile (GBP) and local map rankings in Odisha?",
    a: "Yes! We handle full Google Business Profile setup, category optimization, local NAP citation distribution across Indian directories, geo-tagged image publishing, and review acquisition strategies for companies in Bhubaneswar, Cuttack, and across Odisha."
  },
  {
    q: "What industries in Odisha do you provide SEO services for?",
    a: "We serve startups, IT services, healthcare clinics, hotels & hospitality in Puri/Bhubaneswar, real estate developers, e-commerce stores, education institutes, and manufacturing enterprises in Odisha."
  },
  {
    q: "How does your pricing compare to other SEO agencies in Bhubaneswar?",
    a: "Our pricing starts at Rs.15,000/month for local SEO campaigns and scales based on competition and scope. We operate on transparent, performance-linked retainers — you only continue paying when we are delivering measurable ranking improvements and traffic growth."
  },
  {
    q: "Do you provide monthly SEO reports and rank tracking?",
    a: "Yes. Every client gets a live rank tracking dashboard, monthly keyword position reports, Core Web Vitals monitoring, and a strategy call. We track impressions, clicks, CTR, conversion rate, and backlink profile growth — no vanity metrics."
  }
];

const blueprintSteps = [
  {
    step: "01",
    title: "Deep Technical Audit",
    duration: "Days 1-7",
    desc: "Comprehensive crawl analysis — Core Web Vitals, canonical issues, sitemap errors, duplicate content, schema gaps, and competitor benchmark mapping.",
    colorClass: "text-brand-orange",
    borderClass: "border-brand-orange/40",
    bgClass: "bg-brand-orange/10"
  },
  {
    step: "02",
    title: "Technical Foundation Fix",
    duration: "Days 7-21",
    desc: "Fix every crawl error, speed bottleneck, and schema gap. Deploy JSON-LD LocalBusiness schema, fix hreflang, repair canonical chains, and optimize Core Web Vitals to 98+.",
    colorClass: "text-cyan-400",
    borderClass: "border-cyan-400/40",
    bgClass: "bg-cyan-400/10"
  },
  {
    step: "03",
    title: "Content & Keyword Authority",
    duration: "Days 21-45",
    desc: "Publish high-intent local landing pages, suburb-specific service pages, and GEO-optimized content clusters targeting Bhubaneswar, Cuttack, and Puri searchers.",
    colorClass: "text-indigo-400",
    borderClass: "border-indigo-400/40",
    bgClass: "bg-indigo-400/10"
  },
  {
    step: "04",
    title: "Link & Citation Authority",
    duration: "Days 30-60",
    desc: "Build editorial backlinks from Indian business directories, Odisha-specific press, industry publications, and digital PR campaigns to establish domain authority.",
    colorClass: "text-emerald-400",
    borderClass: "border-emerald-400/40",
    bgClass: "bg-emerald-400/10"
  },
  {
    step: "05",
    title: "Monitor, Iterate & Scale",
    duration: "Day 60 - Ongoing",
    desc: "Weekly rank tracking, monthly strategy reviews, and algorithm update monitoring. We continuously expand keyword coverage as you rank for core terms.",
    colorClass: "text-rose-400",
    borderClass: "border-rose-400/40",
    bgClass: "bg-rose-400/10"
  }
];

const caseStudies = [
  {
    client: "Hotel Resort",
    location: "Puri, Odisha",
    industry: "Hospitality",
    gradientClass: "from-amber-500/20 to-orange-500/10",
    borderClass: "border-amber-500/30",
    accentClass: "text-amber-400",
    badgeClass: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    problem: "Lost 65% direct bookings to OTA platforms & fake Google listings created by competitors.",
    timeline: "4 months",
    results: [
      { label: "Direct Inquiries", before: "18/mo", after: "81/mo", change: "+350%" },
      { label: "Map Pack Position", before: "Not ranked", after: "#1 Puri Hotels", change: "Top 1" },
      { label: "Google Rating", before: "3.2 star", after: "4.7 star", change: "+1.5 star" },
      { label: "Organic Traffic", before: "320/mo", after: "2,100/mo", change: "+556%" }
    ]
  },
  {
    client: "IT Solutions Company",
    location: "Infocity, Bhubaneswar",
    industry: "Technology",
    gradientClass: "from-indigo-500/20 to-blue-500/10",
    borderClass: "border-indigo-500/30",
    accentClass: "text-indigo-400",
    badgeClass: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    problem: "Invisible in Google for high-value enterprise software keywords. All leads came from referral only.",
    timeline: "5 months",
    results: [
      { label: "Keywords in Top 10", before: "3 keywords", after: "47 keywords", change: "+1,467%" },
      { label: "Enterprise Leads/mo", before: "2", after: "19", change: "+850%" },
      { label: "PageSpeed Score", before: "41/100", after: "98/100", change: "+139%" },
      { label: "ChatGPT Citations", before: "0", after: "12/month", change: "New channel" }
    ]
  },
  {
    client: "Healthcare Clinic",
    location: "Saheed Nagar, Bhubaneswar",
    industry: "Healthcare",
    gradientClass: "from-emerald-500/20 to-teal-500/10",
    borderClass: "border-emerald-500/30",
    accentClass: "text-emerald-400",
    badgeClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    problem: "Competing with large hospital chains for top local search positions. Low awareness in new suburbs.",
    timeline: "3 months",
    results: [
      { label: "New Patient Calls/mo", before: "28", after: "112", change: "+300%" },
      { label: "Local Map Pack", before: "Page 3", after: "#2 Bhubaneswar", change: "Page 1" },
      { label: "Google Review Count", before: "14 reviews", after: "186 reviews", change: "+1,229%" },
      { label: "Appointment Bookings", before: "45/mo", after: "203/mo", change: "+351%" }
    ]
  }
];

const competitors = [
  { feature: "Dedicated Local Bhubaneswar Team", us: true, generic: false, diy: false },
  { feature: "Generative Engine Optimization (AI SEO / GEO)", us: true, generic: false, diy: false },
  { feature: "Core Web Vitals Engineering (100/100)", us: true, generic: false, diy: false },
  { feature: "JSON-LD Schema Graph Deployment", us: true, generic: "Partial", diy: false },
  { feature: "Google AI Overview Extraction", us: true, generic: false, diy: false },
  { feature: "Live Rank Tracking Dashboard", us: true, generic: true, diy: false },
  { feature: "Odisha / Indian Directory Citations", us: true, generic: "Partial", diy: false },
  { feature: "Monthly Strategy Calls", us: true, generic: false, diy: false },
  { feature: "Performance-Based Retainer Option", us: true, generic: false, diy: false },
  { feature: "GBP Spam-Fighter & Competitor Audit", us: true, generic: false, diy: false }
];

const industries = [
  { name: "Hotels & Hospitality", emoji: "Hotel", location: "Puri, Bhubaneswar", keywords: ["hotel near puri beach", "resort booking odisha", "beach hotel puri"], colorFrom: "from-amber-500/10" },
  { name: "IT & Software Companies", emoji: "Software", location: "Infocity, Patia", keywords: ["software company bhubaneswar", "it services odisha", "web development bbsr"], colorFrom: "from-indigo-500/10" },
  { name: "Healthcare & Clinics", emoji: "Healthcare", location: "Saheed Nagar, Bhubaneswar", keywords: ["best doctor bhubaneswar", "specialist clinic odisha", "health checkup bbsr"], colorFrom: "from-emerald-500/10" },
  { name: "Real Estate Developers", emoji: "Real Estate", location: "Khandagiri, Chandrasekharpur", keywords: ["flats in bhubaneswar", "plots odisha", "apartment near infocity"], colorFrom: "from-rose-500/10" },
  { name: "Education Institutes", emoji: "Education", location: "Bhubaneswar, Cuttack", keywords: ["coaching centre bhubaneswar", "best school odisha", "college admission bbsr"], colorFrom: "from-purple-500/10" },
  { name: "E-Commerce & Retail", emoji: "Retail", location: "Pan-Odisha", keywords: ["buy online odisha", "local delivery bhubaneswar", "odisha handicrafts online"], colorFrom: "from-cyan-500/10" }
];



/* ─── ANIMATED COUNTER ─────────────────────────────────────────────────── */
function AnimCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 80);
    const timer = setInterval(() => {
      start = Math.min(start + step, to);
      setCount(start);
      if (start >= to) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── PAGE COMPONENT ────────────────────────────────────────────────────── */
const SeoAgencyBhubaneswarPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [activeCase, setActiveCase] = useState(0);

  return (
    <div className="pt-28 md:pt-32 bg-space-blue text-white selection:bg-brand-orange selection:text-white">

      {/* HERO */}
      <section className="pt-4 md:pt-8 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 -z-10"></div>
        <div className="glow-bg top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-orange/15 blur-[160px] -z-10" />
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-md mb-6">
                <MapPin size={15} className="text-brand-orange shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Premier AI-Powered SEO Agency in Bhubaneswar, Odisha</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
                Best <span className="gradient-text">SEO Agency</span><br className="hidden sm:block" /> in Bhubaneswar.
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
                Dominate Google Search, Google Maps (3-Pack), and AI Answer Engines (ChatGPT, Perplexity, Gemini) with Odisha's premier data-driven SEO and GEO growth agency.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
                <a href="#audit-form" className="btn-primary inline-flex items-center space-x-2 text-base md:text-lg px-7 py-3.5">
                  <Sparkles size={18} />
                  <span>Get Free Bhubaneswar SEO Audit</span>
                </a>
                <a href="tel:+917008381630" className="btn-outline inline-flex items-center space-x-2 text-base md:text-lg px-7 py-3.5">
                  <Phone size={18} />
                  <span>Call +91 7008381630</span>
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                {[
                  { val: "98+", label: "PageSpeed Score", color: "text-brand-orange" },
                  { val: "+350%", label: "Avg Organic Growth", color: "text-cyan-400" },
                  { val: "3x", label: "AI Citation Share", color: "text-indigo-400" },
                  { val: "100%", label: "Local Odisha Coverage", color: "text-emerald-400" }
                ].map((s) => (
                  <div key={s.label} className="text-center p-2 md:p-3">
                    <div className={`text-2xl md:text-3xl font-display font-bold ${s.color} mb-0.5`}>{s.val}</div>
                    <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LIVE STATS BAR */}
      <section className="py-12 border-y border-white/5 bg-white/[0.015] relative">
        <div className="container-custom">
          <div className="flex items-center justify-center mb-6">
            <span className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span>Live Campaign Metrics Updated Weekly</span>
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {[
              { label: "Keywords in Top 3", value: 847, suffix: "", color: "text-brand-orange" },
              { label: "Active Odisha Campaigns", value: 34, suffix: "+", color: "text-cyan-400" },
              { label: "Avg Organic CTR Lift", value: 280, suffix: "%", color: "text-indigo-400" },
              { label: "GBP Profiles Managed", value: 58, suffix: "", color: "text-emerald-400" }
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-4xl lg:text-5xl font-display font-black ${s.color} mb-1`}>
                  <AnimCounter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SEO TERMINAL */}
      <AiSeoSection />

      {/* 90-DAY BLUEPRINT */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <Activity size={15} />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">90-Day Ranking</span> Blueprint
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              A proven, systematic process for taking Bhubaneswar businesses from invisible to top-ranked with full transparency at every step.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {blueprintSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-2xl border ${step.borderClass} p-6 md:p-7 flex items-start gap-6 hover:bg-white/[0.03] transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl ${step.bgClass} border ${step.borderClass} flex items-center justify-center shrink-0`}>
                  <span className={`text-lg font-display font-black ${step.colorClass}`}>{step.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-display font-bold">{step.title}</h3>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${step.borderClass} ${step.bgClass} ${step.colorClass} whitespace-nowrap`}>
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY RESULTS */}
      <section className="py-20 md:py-28 bg-white/[0.015] relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <BarChart3 size={15} />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Real Odisha Businesses. <span className="gradient-text">Real Rankings.</span>
            </h2>
            <p className="text-base md:text-lg text-white/60">Before-and-after results from clients across Bhubaneswar, Puri, and Odisha.</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {caseStudies.map((cs, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeCase === i
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/25'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cs.industry}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeCase === i ? 'bg-white/20' : 'bg-white/10'}`}>
                  {cs.location.split(',')[0]}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className={`glass rounded-[2rem] border ${caseStudies[activeCase].borderClass} overflow-hidden`}
            >
              <div className={`bg-gradient-to-r ${caseStudies[activeCase].gradientClass} p-8 md:p-12`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${caseStudies[activeCase].badgeClass} mb-3 inline-block`}>
                      {caseStudies[activeCase].industry} &middot; {caseStudies[activeCase].timeline} timeline
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-1">{caseStudies[activeCase].client}</h3>
                    <p className="text-white/60 flex items-center gap-1.5 text-sm">
                      <MapPin size={13} />{caseStudies[activeCase].location}
                    </p>
                  </div>
                  <div className="glass px-5 py-4 rounded-2xl border-white/10 max-w-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">The Problem</p>
                    <p className="text-sm text-white/80 leading-relaxed">{caseStudies[activeCase].problem}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Before vs After Results</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {caseStudies[activeCase].results.map((r, ri) => (
                    <motion.div
                      key={ri}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: ri * 0.08 }}
                      className="bg-white/[0.03] rounded-2xl border border-white/5 p-5"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">{r.label}</p>
                      <div className="flex items-end justify-between mb-2">
                        <span className="text-xs text-white/40 line-through">{r.before}</span>
                        <span className="text-sm font-bold text-white">{r.after}</span>
                      </div>
                      <div className={`text-lg font-display font-black ${caseStudies[activeCase].accentClass}`}>{r.change}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SEO PILLARS */}
      <section className="py-20 md:py-28 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <Award size={15} />
              <span>Proven Growth Architecture</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Why Sociodigit is the <span className="gradient-text">Top SEO Company</span> in Odisha
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              We combine deep technical software engineering with local search dominance to help Bhubaneswar enterprises outrank competitors and capture high-intent inquiries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {seoPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass p-7 md:p-9 rounded-3xl border border-white/10 hover:border-brand-orange/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-white/5 inline-block group-hover:scale-105 transition-transform">{pillar.icon}</div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70">{pillar.badge}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3">{pillar.title}</h3>
                  <p className="text-white/60 text-sm md:text-base mb-6 leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {pillar.benefits.map((b) => (
                      <li key={b} className="flex items-start space-x-2 text-xs md:text-sm text-white/80">
                        <CheckCircle2 size={15} className="text-brand-orange mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITOR COMPARISON TABLE */}
      <section className="py-20 md:py-28 bg-white/[0.015] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <Shield size={15} />
              <span>Competitive Advantage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Why Choose Sociodigit Over <span className="gradient-text">Other Agencies?</span>
            </h2>
            <p className="text-base md:text-lg text-white/60">An honest comparison of what is actually included in your SEO investment.</p>
          </div>

          <div className="glass rounded-[2rem] border border-white/10 overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-4 border-b border-white/10">
              <div className="p-5 col-span-1 text-xs font-bold uppercase tracking-widest text-white/40">Feature</div>
              <div className="p-5 text-center border-l border-white/10">
                <div className="text-brand-orange font-display font-bold text-sm">Sociodigit</div>
                <div className="text-[10px] text-white/40 mt-0.5">Bhubaneswar AI-First Agency</div>
              </div>
              <div className="p-5 text-center border-l border-white/10">
                <div className="text-white/60 font-bold text-sm">Generic Agency</div>
                <div className="text-[10px] text-white/40 mt-0.5">Typical outsourced SEO</div>
              </div>
              <div className="p-5 text-center border-l border-white/10">
                <div className="text-white/40 font-bold text-sm">DIY Tools</div>
                <div className="text-[10px] text-white/30 mt-0.5">Self-managed</div>
              </div>
            </div>
            {competitors.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 border-b border-white/5 transition-colors hover:bg-white/[0.02] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                <div className="p-4 md:p-5 text-xs md:text-sm text-white/70 flex items-center">{row.feature}</div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-white/5">
                  {row.us === true ? <CheckCircle2 size={18} className="text-emerald-400" /> : <X size={18} className="text-red-400/60" />}
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-white/5">
                  {row.generic === true ? <CheckCircle2 size={18} className="text-emerald-400" />
                    : row.generic === "Partial" ? <span className="text-[10px] font-bold text-amber-400 uppercase">Partial</span>
                    : <X size={18} className="text-red-400/60" />}
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-white/5">
                  {row.diy === true ? <CheckCircle2 size={18} className="text-emerald-400" /> : <X size={18} className="text-red-400/60" />}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-4 bg-brand-orange/5 border-t border-brand-orange/20">
              <div className="p-5 col-span-1" />
              <div className="p-5 flex justify-center border-l border-brand-orange/20">
                <a href="#audit-form" className="btn-primary !py-2.5 !px-5 text-xs cursor-pointer">Get Started</a>
              </div>
              <div className="p-5 border-l border-white/5" />
              <div className="p-5 border-l border-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <Building2 size={15} />
              <span>Industry Coverage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              SEO for Every Industry <span className="gradient-text">in Odisha</span>
            </h2>
            <p className="text-base md:text-lg text-white/60">Specialized local search strategies tailored to your industry's specific buying behavior and keyword landscape.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl border border-white/10 hover:border-brand-orange/40 p-6 transition-all duration-300 cursor-default group bg-gradient-to-br ${ind.colorFrom} to-transparent`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 rounded-lg bg-white/5 text-xs font-bold text-white/60">{ind.emoji}</div>
                  <span className="flex items-center gap-1 text-[10px] text-white/40 font-semibold">
                    <MapPin size={10} />{ind.location}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold mb-4">{ind.name}</h3>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Target Keywords</p>
                  {ind.keywords.map((kw) => (
                    <div key={kw} className="flex items-center space-x-2">
                      <Search size={10} className="text-brand-orange/60 shrink-0" />
                      <span className="text-xs text-white/60 font-mono group-hover:text-white/80 transition-colors">{kw}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL COVERAGE */}
      <section className="py-20 md:py-24 bg-surface/30">
        <div className="container-custom">
          <div className="glass p-8 md:p-14 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
                  <Globe size={15} />
                  <span>Regional Odisha Footprint</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 leading-tight">Targeted SEO Services Across Odisha</h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                  Whether your business is in Laxmisagar, Patia, Saheed Nagar, or serving clients across Cuttack, Rourkela, and Puri, our hyper-local SEO strategy ensures maximum market dominance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {localAreas.map((area) => (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      key={area}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm font-semibold text-white/80 hover:border-brand-orange/50 hover:text-white transition-colors cursor-default"
                    >
                      <MapPin size={10} className="inline mr-1" />{area}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 space-y-3.5">
                {[
                  { iconEl: <MapPin className="text-brand-orange" size={20} />, bg: "bg-brand-orange/10", title: "Sociodigit Headquarters", desc: "HP4, Phase 2, Brit Colony, Laxmisagar, Bhubaneswar, Odisha 751006" },
                  { iconEl: <Phone className="text-cyan-400" size={20} />, bg: "bg-cyan-500/10", title: "Direct SEO Consultation", desc: "+91 7008381630 - hi@sociodigit.in" },
                  { iconEl: <Compass className="text-emerald-400" size={20} />, bg: "bg-emerald-500/10", title: "Service Zones", desc: "Patia Tech Corridor - Infocity - Saheed Nagar - Cuttack Hub" }
                ].map((card, i) => (
                  <div key={i} className="glass p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-start space-x-3.5">
                      <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center shrink-0`}>{card.iconEl}</div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">{card.title}</h4>
                        <p className="text-xs text-white/60 leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white/[0.015]">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12 md:mb-14">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle size={15} />
              <span>Answers &amp; Insights</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-base md:text-lg text-white/60">Everything you need to know about SEO and AI search ranking in Bhubaneswar.</p>
          </div>
          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="glass rounded-2xl border border-white/10 overflow-hidden transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 md:p-6 text-left flex justify-between items-center space-x-4 font-display font-bold text-base md:text-lg hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronRight size={18} className={`shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-90 text-brand-orange' : 'text-white/40'}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-white/70 text-sm md:text-base leading-relaxed border-t border-white/5 pt-3.5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="audit-form" className="py-20 md:pb-32 relative">
        <div className="container-custom max-w-4xl">
          <div className="glass p-8 md:p-14 rounded-[2.5rem] border border-white/10 neon-border relative overflow-hidden text-center">
            <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/10 blur-[150px] -z-10" />
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} />
              <span>Zero Risk &bull; Instant Analysis</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ready to Rank <span className="gradient-text">#1 in Bhubaneswar</span>?
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Get a comprehensive free SEO and AI Search audit. Our Bhubaneswar engineers will analyze your rankings, Core Web Vitals, and competitor gaps.
            </p>
            {formSubmitted ? (
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-6 md:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-lg md:text-xl max-w-xl mx-auto">
                Thank you! Our Bhubaneswar SEO team will deliver your audit report within 2 hours.
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="grid sm:grid-cols-1 md:grid-cols-12 gap-3 max-w-2xl mx-auto">
                <div className="md:col-span-5">
                  <input type="url" required value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} placeholder="Website URL (e.g. yoursite.com)" className="w-full h-14 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40 outline-none text-white text-sm placeholder-white/40 transition-colors" />
                </div>
                <div className="md:col-span-4">
                  <input type="email" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="Your Email or Phone" className="w-full h-14 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40 outline-none text-white text-sm placeholder-white/40 transition-colors" />
                </div>
                <div className="md:col-span-3">
                  <button type="submit" className="w-full h-14 rounded-xl font-bold text-white bg-brand-orange hover:bg-brand-orange/90 transition-all cursor-pointer flex items-center justify-center space-x-2 text-sm shadow-lg shadow-brand-orange/20">
                    <span>Get Audit</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}
            <div className="mt-8 text-xs text-white/40 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <span className="flex items-center space-x-1.5"><Check size={14} className="text-emerald-400" /><span>100% Free Technical Audit</span></span>
              <span className="flex items-center space-x-1.5"><Clock size={14} className="text-cyan-400" /><span>Delivered in 2 Hours</span></span>
              <span className="flex items-center space-x-1.5"><MapPin size={14} className="text-brand-orange" /><span>Bhubaneswar Office Team</span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoAgencyBhubaneswarPage;
