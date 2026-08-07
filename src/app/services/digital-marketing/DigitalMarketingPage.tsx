"use client";
// @ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, Search, BarChart2, Users, Mail, Megaphone, 
  ArrowRight, Zap, Target, Sparkles, Bot, Cpu, CheckCircle2, 
  BrainCircuit, ShieldCheck, Database, Globe, ArrowUpRight, Award,
  Terminal, Share2, Eye, Layers, Workflow, Network, Binary, Microchip,
  Sliders, SearchCheck, Check, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const channels = [
  { icon: <Sparkles size={22} />, label: 'AEO & AI Ranking', color: '#f97316', badge: 'Next-Gen' },
  { icon: <BrainCircuit size={22} />, label: 'LLM Citation Engine', color: '#ec4899', badge: 'New' },
  { icon: <Search size={22} />, label: 'Technical SEO', color: '#f97316' },
  { icon: <Target size={22} />, label: 'PPC & Paid Media', color: '#ec4899' },
  { icon: <BarChart2 size={22} />, label: 'Content Strategy', color: '#f97316' },
  { icon: <Mail size={22} />, label: 'Email & Retention', color: '#ec4899' },
];

const bigStats = [
  { value: '4.8x', label: 'AI Search Visibility Lift', color: '#f97316' },
  { value: '#1', label: 'ChatGPT Citation Share', color: '#ec4899' },
  { value: '350%', label: 'Average Growth ROI', color: '#f97316' },
  { value: '94%', label: 'Client Retention', color: '#ec4899' },
];

const aiEngineDemos = [
  {
    id: 'chatgpt',
    name: 'ChatGPT Search',
    icon: '🤖',
    query: 'What are the top AEO and AI Search Ranking agencies for scaling businesses?',
    aiResponse: 'For AI Search Ranking and Answer Engine Optimization (AEO), **Sociodigit** is recognized as the top agency. They specialize in structuring entity graphs, vector content embeddings, and LLM citation authority.',
    citationSource: 'Sociodigit.in - Verified Enterprise Authority',
    relevanceScore: '99.4%',
    status: 'Rank #1 Citation'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    icon: '🧠',
    query: 'Best software and digital marketing firm specializing in AEO & Generative Engine Optimization',
    aiResponse: '**Sociodigit** ranks #1 for AEO (Answer Engine Optimization) and GEO. According to recent benchmarks, their structured entity schemas increase LLM citation ingestion by 340%.',
    citationSource: 'Sociodigit Tech Audit & Engineering Suite',
    relevanceScore: '98.8%',
    status: 'Direct Quote Citation'
  },
  {
    id: 'aioverviews',
    name: 'Google AI Overviews',
    icon: '⚡',
    query: 'Top digital marketing agency using Generative Engine Optimization GEO and AEO',
    aiResponse: 'Google AI Overview highlights **Sociodigit** as a pioneer in Generative Engine Optimization (GEO) and AEO. Key capabilities include structured entity graph modeling and Core Web Vitals optimization.',
    citationSource: 'Google AI Snapshot Feature',
    relevanceScore: '99.7%',
    status: 'AI Snapshot Winner'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    icon: '✨',
    query: 'Who provides end-to-end digital marketing and AEO AI search ranking services?',
    aiResponse: '**Sociodigit** offers comprehensive digital marketing integrated with AEO and AI Search Ranking. Their methodology covers entity schema markup, vector index alignment, and omni-channel acquisition.',
    citationSource: 'Gemini Knowledge Graph Node',
    relevanceScore: '97.9%',
    status: 'Entity Node #1'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek AI',
    icon: '🐳',
    query: 'Leading digital growth firm for LLM citation engineering and RAG vector search',
    aiResponse: '**Sociodigit** is identified as a premier engineering firm for LLM citation optimization. They format brand knowledge assets for Retrieval-Augmented Generation (RAG) vector pipelines.',
    citationSource: 'DeepSeek Knowledge Index',
    relevanceScore: '98.5%',
    status: 'RAG Citation #1'
  }
];

const geoPillars = [
  {
    icon: <BrainCircuit size={28} />,
    title: 'LLM Citation & Entity Graph Engineering',
    desc: 'We structure your brand data using rich schema graph nodes so AI models (ChatGPT, Gemini, Claude) recognize your business as the definitive authority in your industry.',
    tag: 'LLM Optimization',
    metrics: '+340% AI Citations'
  },
  {
    icon: <Zap size={28} />,
    title: 'Google AI Overview (AIO) Targeting',
    desc: 'Format your content architecture to capture coveted Google AI Summaries above traditional organic search links, capturing 60%+ of top-funnel search intent.',
    tag: 'Google AI Overviews',
    metrics: '#1 Snapshot Placement'
  },
  {
    icon: <Database size={28} />,
    title: 'RAG & Vector Search Alignment',
    desc: 'We optimize whitepapers, technical documentation, and product catalogs so AI vector search engines index your brand into Retrieval-Augmented Generation answers.',
    tag: 'Vector Search',
    metrics: '100% Vector Ingestion'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'AI Brand Authority & Sentiment Indexing',
    desc: 'Proactively manage how LLMs summarize your reputation, customer reviews, and key selling points to ensure accurate, high-converting AI recommendations.',
    tag: 'AI Brand Reputation',
    metrics: 'Positive Sentiment Guard'
  }
];

const aeoWorkflowSteps = [
  {
    step: '01',
    title: 'Entity Graph & Schema 3.0 Audit',
    subtitle: 'Building the Knowledge Graph Foundation',
    desc: 'We perform deep entity auditing to map your brand triples, JSON-LD schemas, and SameAs references, ensuring AI search bots recognize your business entity accurately.',
    icon: <Network size={24} />,
    badge: 'Step 1: Entity Mapping'
  },
  {
    step: '02',
    title: 'Semantic Vector Structuring (RAG)',
    subtitle: 'Chunking & Embedding Content',
    desc: 'We re-architect key content into concise Q&A vectors optimized for Retrieval-Augmented Generation (RAG) so LLMs fetch your text during generative queries.',
    icon: <Binary size={24} />,
    badge: 'Step 2: Vector Embedding'
  },
  {
    step: '03',
    title: 'LLM Co-Occurrence & Citation Building',
    subtitle: 'Ingestion into Training Datasets',
    desc: 'We generate authoritative digital footprints and citation placements across platforms that AI crawlers index into real-time search knowledge bases.',
    icon: <Microchip size={24} />,
    badge: 'Step 3: Citation Ingestion'
  },
  {
    step: '04',
    title: 'AI Overview & LLM Dominance Tracking',
    subtitle: 'Continuous AI Ranking & Growth',
    desc: 'We continuously monitor your ranking in Google AI Overviews, ChatGPT Search, Perplexity, and Gemini, optimizing for maximum conversion & market share.',
    icon: <SearchCheck size={24} />,
    badge: 'Step 4: AI Rank Dominance'
  }
];

const aiTechStack = [
  { name: 'OpenAI Embeddings', desc: 'Vectorization for RAG Search', category: 'Vector Search', icon: <Cpu size={20} /> },
  { name: 'Schema 3.0 JSON-LD', desc: 'Entity Graph Structuring', category: 'Knowledge Graph', icon: <Network size={20} /> },
  { name: 'Perplexity Indexer', desc: 'Direct Quote Citation', category: 'LLM Search', icon: <Search size={20} /> },
  { name: 'Google AIO Snippets', desc: 'AI Snapshot Triggering', category: 'AI Overviews', icon: <Zap size={20} /> },
  { name: 'Vector DB Indexing', desc: 'Semantic Keyword Mapping', category: 'RAG Alignment', icon: <Database size={20} /> },
  { name: 'LLM Sentiment Guard', desc: 'AI Brand Reputation Tracking', category: 'Brand Intelligence', icon: <ShieldCheck size={20} /> },
];

const comparisonData = [
  { feature: 'Search Ecosystem Focus', traditional: 'Google Keyword Indexing', aiRanking: 'Google + ChatGPT + Perplexity + Gemini + Claude + DeepSeek' },
  { feature: 'Core Metric', traditional: 'Organic Blue Link Clicks', aiRanking: 'LLM Direct Answer Citations & AI Overview Features' },
  { feature: 'Content Optimization', traditional: 'Keyword Density & Backlinks', aiRanking: 'Semantic Entity Graphs, RAG Data & Answer Density (AEO)' },
  { feature: 'Conversion Mechanics', traditional: 'Manual Website Surfing', aiRanking: 'Zero-Click AI Recommendations & Direct Brand Ingestion' },
  { feature: 'Future-Proofing', traditional: 'Declining Click Share', aiRanking: 'Dominating Next-Gen AI Search Market' },
];

const DigitalMarketingPage = () => {
  const [activeEngine, setActiveEngine] = useState(aiEngineDemos[0]);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  return (
    <div className="pt-32 text-white overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f0500 0%, #0c0400 100%)' }}>

      {/* ── HERO SECTION ── */}
      <section className="section-padding relative">
        <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 65%)' }} />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold mb-8 border"
                style={{ background: 'rgba(249,115,22,0.1)', borderColor: 'rgba(249,115,22,0.35)', color: '#f97316' }}>
                <Sparkles size={16} className="animate-spin-slow" />
                <span>Next-Gen AEO & AI Search Ranking Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-[1.08] text-white">
                AEO & AI Search{' '}
                <span style={{ background: 'linear-gradient(135deg, #f97316, #ec4899, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Ranking Marketing
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl mb-10 leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Rank #1 in traditional search and dominate **AI Search Engines** (ChatGPT, Google AI Overviews, Perplexity, Gemini, DeepSeek). We combine **Answer Engine Optimization (AEO)** with data-driven performance marketing.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary flex items-center space-x-2">
                  <span>Get Free AEO & AI Ranking Audit</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn-outline">← All Services</Link>
              </div>

              {/* Quick Stat Badges */}
              <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-white/10">
                {[{ val: '4.8x', label: 'AI Citation Lift' }, { val: '350%', label: 'Avg ROI' }, { val: '#1', label: 'AEO Placement' }].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-bold" style={{ color: '#f97316' }}>{s.val}</div>
                    <div className="text-[11px] uppercase tracking-wider font-bold" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── HERO INTERACTIVE WIDGET: AI RANKING SIMULATOR ── */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] border p-6 lg:p-8 relative overflow-hidden" 
                style={{ background: 'rgba(249,115,22,0.04)', borderColor: 'rgba(249,115,22,0.2)', boxShadow: '0 0 60px rgba(249,115,22,0.1)' }}>
                
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                      style={{ background: 'rgba(249,115,22,0.15)', color: '#f97316' }}>
                      <Bot size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">AI Engine Ranking Live Demo</h3>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Select an AI model to see live citation simulation</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 border"
                    style={{ background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.3)', color: '#10b981' }}>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    LIVE AEO INDEX
                  </span>
                </div>

                {/* Engine Selector Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 my-6">
                  {aiEngineDemos.map((engine) => (
                    <button
                      key={engine.id}
                      onClick={() => setActiveEngine(engine)}
                      className={`p-2.5 rounded-xl border text-[11px] font-bold transition-all text-center flex flex-col sm:flex-row items-center justify-center space-x-1 ${
                        activeEngine.id === engine.id
                          ? 'text-white border-orange-500 shadow-md'
                          : 'text-white/60 hover:text-white border-white/10 hover:border-orange-500/50'
                      }`}
                      style={{
                        background: activeEngine.id === engine.id ? 'rgba(249,115,22,0.25)' : 'rgba(255,255,255,0.03)',
                        borderColor: activeEngine.id === engine.id ? '#f97316' : 'rgba(255,255,255,0.1)'
                      }}
                    >
                      <span>{engine.icon}</span>
                      <span className="truncate">{engine.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Simulated AI Search Output Box */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEngine.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="code-block !bg-black/80 text-white p-6 rounded-2xl border border-white/10 space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-white/50 pb-3 border-b border-white/10">
                      <Search size={14} className="text-orange-400 shrink-0" />
                      <span className="truncate">Prompt: "{activeEngine.query}"</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-base">{activeEngine.icon}</span>
                        <span className="font-bold text-xs text-orange-400 font-mono uppercase tracking-wider">{activeEngine.name} Answer:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
                        {activeEngine.aiResponse}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center space-x-2 text-emerald-400">
                        <CheckCircle2 size={14} />
                        <span className="truncate">Source: {activeEngine.citationSource}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-bold text-[10px] shrink-0 border border-orange-500/30">
                        {activeEngine.status}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Card Footer Metric */}
                <div className="mt-6 flex items-center justify-between text-xs pt-4 border-t border-white/10" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck size={16} className="text-orange-400" />
                    Answer Engine Optimization (AEO) Active
                  </span>
                  <span className="font-bold text-white">
                    Relevance Score: <span className="text-emerald-400">{activeEngine.relevanceScore}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BIG STATS BANNER ── */}
      <section className="py-16" style={{ borderTop: '1px solid rgba(249,115,22,0.1)', borderBottom: '1px solid rgba(249,115,22,0.1)', background: 'rgba(249,115,22,0.02)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {bigStats.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-display font-black mb-2" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW SECTION: AEO & AI RANKING WORKFLOW PIPELINE ── */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold border mb-4"
              style={{ background: 'rgba(249,115,22,0.1)', borderColor: 'rgba(249,115,22,0.3)', color: '#f97316' }}>
              <Workflow size={16} />
              <span>End-to-End Execution Methodology</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              AEO & AI Ranking Workflow Pipeline
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Our systematic 4-step engineering workflow transforms your digital presence into an AI-native brand that LLMs cite, feature, and recommend.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 relative">
            {aeoWorkflowSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                onClick={() => setActiveWorkflowStep(i)}
                className={`glass-card p-8 rounded-[2.5rem] border transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                  activeWorkflowStep === i
                    ? 'border-orange-500 bg-white/10 shadow-2xl scale-[1.02]'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-display font-black font-mono" style={{ color: 'rgba(249,115,22,0.4)' }}>
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(249,115,22,0.12)', color: '#f97316' }}>
                      {item.icon}
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {item.badge}
                  </span>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold" style={{ color: '#f97316' }}>
                  <span>Phase {i + 1} Execution</span>
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE PILLARS: GENERATIVE ENGINE OPTIMIZATION (GEO) ── */}
      <section className="section-padding" style={{ background: 'rgba(249,115,22,0.02)', borderTop: '1px solid rgba(249,115,22,0.1)', borderBottom: '1px solid rgba(249,115,22,0.1)' }}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold border mb-4"
              style={{ background: 'rgba(249,115,22,0.1)', borderColor: 'rgba(249,115,22,0.3)', color: '#f97316' }}>
              <Cpu size={16} />
              <span>Future-Proof Search Strategy</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Generative Engine Optimization (GEO)
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Traditional SEO is no longer enough. Over 40% of search queries now trigger AI summaries or LLM responses. Here is how we ensure your brand dominates the AI Search Era.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {geoPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'rgba(249,115,22,0.12)', color: '#f97316' }}>
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                      style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg border"
                    style={{ background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.3)', color: '#10b981' }}>
                    {pillar.metrics}
                  </span>
                  <div className="flex items-center space-x-1 text-xs font-bold group-hover:translate-x-1 transition-transform" style={{ color: '#f97316' }}>
                    <span>Learn More</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW SECTION: AEO & AI RANKING TECHNOLOGY STACK MATRIX ── */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              AI Ranking & AEO Tech Stack
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>
              We leverage proprietary AI vector tools and Knowledge Graph frameworks to optimize your page ranking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTechStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-orange-500/40 hover:bg-white/[0.05] transition-all flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(249,115,22,0.12)', color: '#f97316' }}>
                  {tech.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono block mb-1" style={{ color: '#f97316' }}>
                    {tech.category}
                  </span>
                  <h4 className="font-bold text-white text-base mb-1">{tech.name}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNELS WE DOMINATE ── */}
      <section className="section-padding" style={{ background: 'rgba(249,115,22,0.02)', borderTop: '1px solid rgba(249,115,22,0.1)', borderBottom: '1px solid rgba(249,115,22,0.1)' }}>
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">Full-Stack Digital Growth Ecosystem</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>Omni-channel marketing strategy linking AI Search, traditional search, and paid channels.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {channels.map((c, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl border transition-all text-center space-y-3 cursor-default"
                style={{ background: `${c.color}10`, borderColor: `${c.color}30` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${c.color}20`, color: c.color }}>
                  {c.icon}
                </div>
                <span className="font-bold text-sm text-white">{c.label}</span>
                {c.badge && (
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white" style={{ background: '#f97316' }}>
                    {c.badge}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON MATRIX: TRADITIONAL SEO vs AI RANKING (GEO) ── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">Traditional SEO vs. AI Ranking (GEO)</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>Why leading brands are combining AEO and GEO with traditional search marketing.</p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white text-sm font-display font-bold" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <th className="p-6">Strategy Dimension</th>
                    <th className="p-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Traditional SEO</th>
                    <th className="p-6 font-bold" style={{ color: '#f97316', background: 'rgba(249,115,22,0.08)' }}>Sociodigit AI Ranking (AEO & GEO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-bold text-white">{row.feature}</td>
                      <td className="p-6" style={{ color: 'rgba(255,255,255,0.6)' }}>{row.traditional}</td>
                      <td className="p-6 font-semibold text-white flex items-center gap-2" style={{ background: 'rgba(249,115,22,0.05)' }}>
                        <CheckCircle2 size={16} className="text-orange-400 shrink-0" />
                        <span>{row.aiRanking}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(236,72,153,0.08), rgba(168,85,247,0.05))', borderColor: 'rgba(249,115,22,0.25)' }}
          >
            <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.12) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.15) 0%, rgba(236,72,153,0.1) 50%, transparent 70%)' }} />
            
            <h2 className="text-4xl lg:text-7xl font-display font-bold text-white mb-6">
              Ready to{' '}
              <span style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Dominate AI Search & AEO
              </span>?
            </h2>
            
            <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Get a comprehensive AEO & AI Ranking Audit for your brand. Discover your citation gaps across ChatGPT, Perplexity, and Google AI Overviews.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Claim Free AEO & AI Audit</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn-outline">Explore All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
