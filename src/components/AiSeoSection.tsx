"use client";
// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import {
  BrainCircuit,
  TrendingUp,
  Settings2,
  ChevronRight,
  Zap,
  Eye,
  BarChart3,
  Code2,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Globe,
} from "lucide-react";

// ─────────────────────────────────────────────
// Animated counter hook
// ─────────────────────────────────────────────
function useAnimatedCounter(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return { value, ref };
}

// ─────────────────────────────────────────────
// Terminal typewriter
// ─────────────────────────────────────────────
const terminalLines = [
  { text: "$ sociodigit-ai --scan domain=client.com", color: "text-white/70", delay: 0 },
  { text: "→ Crawling 2,847 pages…", color: "text-cyan-400", delay: 600 },
  { text: "→ Running NLP entity extraction…", color: "text-cyan-400", delay: 1300 },
  { text: "→ Scoring semantic relevance [████████░░] 82%", color: "text-indigo-400", delay: 2100 },
  { text: "→ Detecting AI Overview eligibility…", color: "text-cyan-400", delay: 2900 },
  { text: "✓ 47 pages qualify for AI Overview targeting", color: "text-emerald-400", delay: 3700 },
  { text: "→ Analysing competitor LLM citations…", color: "text-cyan-400", delay: 4500 },
  { text: "✓ 12 citation gap opportunities found", color: "text-emerald-400", delay: 5300 },
  { text: "→ Running Core Web Vitals audit…", color: "text-cyan-400", delay: 6100 },
  { text: "✓ LCP: 0.8s  FID: 12ms  CLS: 0.01  INP: 74ms", color: "text-emerald-400", delay: 6900 },
  { text: "→ Building schema markup recommendations…", color: "text-cyan-400", delay: 7700 },
  { text: "✓ Report ready — projected +218% organic lift", color: "text-brand-orange font-bold", delay: 8500 },
];

function AiTerminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView) return;
    terminalLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, line.delay);
    });
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      {/* Terminal window chrome */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_0_80px_rgba(232,66,26,0.1)]">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
            sociodigit-ai · SEO Intelligence Engine v3.2
          </span>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] text-emerald-400 font-mono">LIVE</span>
          </div>
        </div>

        {/* Terminal body */}
        <div
          ref={containerRef}
          className="p-5 font-mono text-[11px] md:text-xs leading-6 h-64 overflow-y-auto scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {terminalLines.map((line, i) => (
            <div
              key={i}
              className={`transition-all duration-300 ${visibleLines.includes(i)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-1"
                } ${line.color}`}
            >
              {line.text}
            </div>
          ))}
          {/* Blinking cursor */}
          <span className="inline-block w-2 h-3.5 bg-brand-orange/80 animate-pulse ml-0.5 align-middle" />
        </div>
      </div>

      {/* Floating stat badges */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 4, duration: 0.5 }}
        className="absolute -right-4 top-12 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl rounded-xl px-3 py-2 text-center"
      >
        <div className="text-emerald-400 font-bold text-lg leading-none">+218%</div>
        <div className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">Organic Lift</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 5, duration: 0.5 }}
        className="absolute -left-4 bottom-12 bg-brand-orange/10 border border-brand-orange/20 backdrop-blur-xl rounded-xl px-3 py-2 text-center"
      >
        <div className="text-brand-orange font-bold text-lg leading-none">47</div>
        <div className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">AI Pages</div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Stats row
// ─────────────────────────────────────────────
const statItems = [
  { value: 218, suffix: "%", label: "Avg. Organic Lift", color: "text-brand-orange" },
  { value: 100, suffix: "/100", label: "PageSpeed Score", color: "text-cyan-400" },
  { value: 3, suffix: "×", label: "AI Engine Visibility", color: "text-indigo-400" },
  { value: 47, suffix: "+", label: "AI Overview Wins / Mo", color: "text-emerald-400" },
];

function StatCounter({ value, suffix, label, color }: typeof statItems[0]) {
  const { value: count, ref } = useAnimatedCounter(value, 1600);
  return (
    <div ref={ref} className="text-center group">
      <div className={`text-4xl md:text-5xl font-display font-bold ${color} mb-1`}>
        {count}
        <span className="text-2xl md:text-3xl">{suffix}</span>
      </div>
      <div className="text-[11px] text-white/40 uppercase tracking-widest font-semibold group-hover:text-white/60 transition-colors">
        {label}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Process flow steps
// ─────────────────────────────────────────────
const processSteps = [
  {
    num: "01",
    icon: <Eye className="w-5 h-5" />,
    title: "Deep Audit",
    desc: "Full-site NLP & technical crawl",
    color: "text-brand-orange",
    border: "border-brand-orange/30",
    bg: "bg-brand-orange/10",
  },
  {
    num: "02",
    icon: <Cpu className="w-5 h-5" />,
    title: "AI Modelling",
    desc: "ML signals & competitor mapping",
    color: "text-indigo-400",
    border: "border-indigo-400/30",
    bg: "bg-indigo-500/10",
  },
  {
    num: "03",
    icon: <Code2 className="w-5 h-5" />,
    title: "Implementation",
    desc: "Schema, speed & GEO content",
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-500/10",
  },
  {
    num: "04",
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Monitor & Scale",
    desc: "Real-time rank tracking & iteration",
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-500/10",
  },
];

// ─────────────────────────────────────────────
// Pillar cards (enriched)
// ─────────────────────────────────────────────
const pillars = [
  {
    icon: <BrainCircuit className="w-7 h-7" />,
    tag: "GEO",
    title: "Generative Engine Optimization",
    desc: "Get your brand cited in AI-generated answers from ChatGPT, Gemini, and Perplexity — where the next generation of search happens.",
    bullets: [
      "AI Overview targeting & prompt engineering",
      "LLM citation & authority signal optimization",
      "Entity disambiguation & Knowledge Graph linking",
      "E-E-A-T reinforcement for AI trustworthiness",
    ],
    techBadges: ["JSON-LD", "NLP", "E-E-A-T", "Entity API"],
    metric: "3× AI Visibility",
    scoreLabel: "AI Citability Score",
    scoreValue: 94,
    glowColor: "rgba(232, 66, 26, 0.2)",
    borderColor: "rgba(232, 66, 26, 0.3)",
    iconBg: "bg-brand-orange/10",
    iconText: "text-brand-orange",
    badgeBg: "bg-brand-orange/10 border-brand-orange/20 text-brand-orange",
    glowShadow: "shadow-[0_0_60px_rgba(232,66,26,0.1)]",
    tagColor: "text-brand-orange",
    progressColor: "bg-brand-orange",
    progressTrack: "bg-brand-orange/15",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    tag: "AI RANKING",
    title: "AI-Powered Ranking Intelligence",
    desc: "Leverage machine learning signals, predictive keyword analysis, and NLP content scoring to consistently outrank competitors.",
    bullets: [
      "Predictive SERP modeling with ML regression",
      "Semantic relevance & vector embedding scoring",
      "RankBrain & BERT signal optimization",
      "Competitor gap & cannibalisation detection",
    ],
    techBadges: ["BERT", "RankBrain", "Vectors", "ML Pipeline"],
    metric: "+210% Organic Traffic",
    scoreLabel: "Ranking Confidence Index",
    scoreValue: 88,
    glowColor: "rgba(99, 102, 241, 0.2)",
    borderColor: "rgba(99, 102, 241, 0.3)",
    iconBg: "bg-indigo-500/10",
    iconText: "text-indigo-400",
    badgeBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    glowShadow: "shadow-[0_0_60px_rgba(99,102,241,0.1)]",
    tagColor: "text-indigo-400",
    progressColor: "bg-indigo-400",
    progressTrack: "bg-indigo-400/15",
  },
  {
    icon: <Settings2 className="w-7 h-7" />,
    tag: "TECHNICAL SEO",
    title: "Technical SEO Excellence",
    desc: "From sub-100ms load times to flawless structured data and crawl budget mastery — bulletproof foundations that algorithms reward.",
    bullets: [
      "Core Web Vitals: LCP, INP, CLS optimisation",
      "Schema markup, JSON-LD & rich snippet targeting",
      "Log file analysis & crawl budget management",
      "JavaScript SEO & dynamic rendering fixes",
    ],
    techBadges: ["Lighthouse", "Schema.org", "HTTP/2", "Hreflang"],
    metric: "100/100 PageSpeed",
    scoreLabel: "Technical Health Score",
    scoreValue: 98,
    glowColor: "rgba(6, 182, 212, 0.2)",
    borderColor: "rgba(6, 182, 212, 0.3)",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    glowShadow: "shadow-[0_0_60px_rgba(6,182,212,0.1)]",
    tagColor: "text-cyan-400",
    progressColor: "bg-cyan-400",
    progressTrack: "bg-cyan-400/15",
  },
];

const marqueeItems = [
  "Schema Markup", "Core Web Vitals", "E-E-A-T", "LLM Citations",
  "Entity Optimization", "AI Overviews", "Perplexity Ranking", "Structured Data",
  "NLP Content Scoring", "Semantic SEO", "Crawl Efficiency", "Knowledge Graph",
  "BERT Optimization", "AI Visibility", "Log File Analysis", "SERP Domination",
];

const containerVariants: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// ─────────────────────────────────────────────
// Progress bar (animated on scroll)
// ─────────────────────────────────────────────
function AnimatedProgressBar({ value, color, track }: { value: number; color: string; track: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className={`w-full h-1.5 rounded-full ${track} overflow-hidden`}>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────
const AiSeoSection = () => {
  return (
    <section className="relative py-20 md:py-36 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/55 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.035] z-0 pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-[-8%] w-[45%] h-[70%] rounded-full -z-10 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(232,66,26,0.1) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-[-8%] w-[45%] h-[70%] rounded-full -z-10 blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[50%] rounded-full -z-10 blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />

      <div className="container-custom relative z-10">

        {/* ── HERO ROW: Left headline + right terminal ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange" />
              </span>
              <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-brand-orange">
                AI-Powered SEO · The New Standard
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-white leading-tight mb-6">
              Rank in the{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-indigo-400">
                  Age of AI
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-brand-orange to-indigo-400 origin-left"
                />
              </span>
            </h2>

            <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl">
              Traditional SEO is dead. We combine Generative Engine Optimization,
              machine-learning rank intelligence, and bulletproof technical foundations
              to make your brand visible in search engines <em>and</em> AI answer engines alike.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: <Globe className="w-3.5 h-3.5" />, label: "ChatGPT · Gemini · Perplexity" },
                { icon: <Zap className="w-3.5 h-3.5" />, label: "100/100 PageSpeed" },
                { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: "E-E-A-T Certified" },
              ].map((t, i) => (
                <span key={i} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/50">
                  <span className="text-brand-orange">{t.icon}</span>
                  <span>{t.label}</span>
                </span>
              ))}
            </div>

            {/* Process flow */}
            <div className="grid grid-cols-2 gap-3">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                  className={`flex items-center space-x-3 p-3 rounded-xl border ${step.border} ${step.bg} backdrop-blur-sm group hover:scale-[1.02] transition-transform duration-300 cursor-default`}
                >
                  <div className={`shrink-0 ${step.color}`}>{step.icon}</div>
                  <div>
                    <div className={`text-[10px] font-bold tracking-wider uppercase ${step.color} opacity-70`}>
                      {step.num}
                    </div>
                    <div className="text-xs font-semibold text-white">{step.title}</div>
                    <div className="text-[10px] text-white/40">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — AI Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <AiTerminal />
          </motion.div>
        </div>

        {/* ── ANIMATED STATS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 md:mb-28 py-10 px-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden"
        >
          {/* Horizontal gradient line across top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
          {statItems.map((s, i) => (
            <StatCounter key={i} {...s} />
          ))}
        </motion.div>

        {/* ── PILLAR CARDS ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.012 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`group relative rounded-3xl border bg-white/[0.025] backdrop-blur-xl flex flex-col cursor-pointer overflow-hidden ${pillar.glowShadow} transition-all duration-500`}
              style={{ borderColor: pillar.borderColor }}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                style={{ background: `radial-gradient(ellipse at 50% -10%, ${pillar.glowColor} 0%, transparent 60%)` }}
              />

              {/* Top shimmer bar */}
              <div
                className="absolute top-0 inset-x-0 h-px opacity-30 group-hover:opacity-70 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${pillar.borderColor}, transparent)` }}
              />

              {/* Scanning animation on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div
                  className="absolute top-0 left-0 w-full h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom, ${pillar.glowColor}, transparent)`,
                    animation: "scan 3s ease-in-out infinite",
                  }}
                />
              </div>

              <div className="relative z-10 p-8 md:p-9 flex flex-col h-full">
                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-7">
                  <div className={`relative w-14 h-14 ${pillar.iconBg} ${pillar.iconText} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    {pillar.icon}
                    {/* Orbit ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-6px] rounded-full border border-dashed opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ borderColor: pillar.borderColor }}
                    />
                  </div>
                  <span
                    className={`text-[9px] font-bold tracking-[0.28em] uppercase ${pillar.tagColor} border rounded-full px-3 py-1`}
                    style={{ borderColor: pillar.borderColor, background: pillar.glowColor }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[1.35rem] font-display font-bold text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>

                {/* Desc */}
                <p className="text-white/45 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-300">
                  {pillar.desc}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {pillar.techBadges.map((badge, bi) => (
                    <span
                      key={bi}
                      className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border text-white/40 border-white/8 bg-white/[0.03] group-hover:border-white/15 group-hover:text-white/55 transition-all duration-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {pillar.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start space-x-2.5">
                      <ArrowUpRight
                        size={13}
                        className={`mt-0.5 shrink-0 ${pillar.tagColor} opacity-60 group-hover:opacity-100 transition-opacity`}
                      />
                      <span className="text-[13px] text-white/55 group-hover:text-white/70 transition-colors duration-300 leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Score bar */}
                <div className="mb-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/35 uppercase tracking-wider font-semibold">
                      {pillar.scoreLabel}
                    </span>
                    <span className={`text-[11px] font-bold ${pillar.tagColor}`}>
                      {pillar.scoreValue}%
                    </span>
                  </div>
                  <AnimatedProgressBar
                    value={pillar.scoreValue}
                    color={pillar.progressColor}
                    track={pillar.progressTrack}
                  />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                  <span className={`inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border ${pillar.badgeBg}`}>
                    {pillar.metric}
                  </span>
                  <div className={`flex items-center space-x-1 text-xs font-bold ${pillar.tagColor} opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300`}>
                    <span>Explore</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── MARQUEE BAR ── */}
      <div className="mt-20 md:mt-28 py-5 border-y border-white/5 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 md:w-36 bg-gradient-to-r from-space-blue to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-36 bg-gradient-to-l from-space-blue to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-container overflow-hidden w-full">
          <div
            className="flex animate-marquee whitespace-nowrap items-center min-w-max"
            style={{ animationDuration: "40s", animationDirection: "reverse" }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center mx-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/25 hover:text-white/55 transition-colors cursor-default"
              >
                {item}
                <span className="ml-5 w-1 h-1 rounded-full bg-brand-orange/35 inline-block" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scan keyframe */}
      <style>{`
        @keyframes scan {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(900%); }
        }
      `}</style>
    </section>
  );
};

export default AiSeoSection;
