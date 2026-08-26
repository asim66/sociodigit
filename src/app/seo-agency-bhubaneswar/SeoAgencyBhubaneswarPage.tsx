"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, TrendingUp, Target, MapPin, CheckCircle2, Shield, 
  ArrowRight, Phone, Mail, Sparkles, BrainCircuit, Globe, 
  Award, Zap, ChevronRight, HelpCircle, BarChart3, Clock, Check,
  Send, Building2, Compass
} from 'lucide-react';
import Link from 'next/link';
import AiSeoSection from '../../components/AiSeoSection';

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
  }
];

const SeoAgencyBhubaneswarPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');

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
                <MapPin size={15} className="text-brand-orange shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Premier AI-Powered SEO Agency in Bhubaneswar, Odisha
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
                Best <span className="gradient-text">SEO Agency</span> in Bhubaneswar.
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
                Dominate Google Search, Google Maps (3-Pack), and AI Answer Engines (ChatGPT, Perplexity, Gemini) with Odisha’s premier data-driven SEO & GEO growth agency.
              </p>

              {/* CTA Buttons */}
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

              {/* Trust Indicators Bar with Verifiable Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-center p-2 md:p-3">
                  <div className="text-2xl md:text-3xl font-display font-bold text-brand-orange mb-0.5">98+</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">PageSpeed Score</div>
                </div>
                <div className="text-center p-2 md:p-3">
                  <div className="text-2xl md:text-3xl font-display font-bold text-cyan-400 mb-0.5">+350%</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">Avg Organic Growth</div>
                </div>
                <div className="text-center p-2 md:p-3">
                  <div className="text-2xl md:text-3xl font-display font-bold text-indigo-400 mb-0.5">3×</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">AI Citation Share</div>
                </div>
                <div className="text-center p-2 md:p-3">
                  <div className="text-2xl md:text-3xl font-display font-bold text-emerald-400 mb-0.5">100%</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">Local Odisha Coverage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AI SEO TERMINAL DEMO SECTION ── */}
      <AiSeoSection />

      {/* ── WHY WE ARE #1 IN BHUBANESWAR ── */}
      <section className="py-16 md:py-24 relative">
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
                    <div className="p-3.5 rounded-2xl bg-white/5 inline-block group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70">
                      {pillar.badge}
                    </span>
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

      {/* ── LOCAL BHUBANESWAR REGIONS COVERAGE ── */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="container-custom">
          <div className="glass p-8 md:p-14 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
                  <Globe size={15} />
                  <span>Regional Odisha Footprint</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 leading-tight">
                  Targeted SEO & Growth Services Across Odisha
                </h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                  Whether your business is located in Laxmisagar, Patia, Saheed Nagar, or serving clients across Cuttack, Rourkela, and Puri, our hyper-local geo-targeted SEO strategy ensures maximum market dominance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {localAreas.map((area) => (
                    <span 
                      key={area} 
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm font-semibold text-white/80 hover:border-brand-orange/50 hover:text-white transition-colors"
                    >
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column (5 cols) - Balanced 3-Card Stack */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="glass p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-orange" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Sociodigit Headquarters</h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        HP4, Phase 2, Brit Colony, Laxmisagar, Bhubaneswar, Odisha 751006
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <Phone className="text-cyan-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Direct SEO Consultation</h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        +91 7008381630 &bull; hi@sociodigit.in
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Compass className="text-emerald-400" size={20} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-0.5">
                        <h4 className="text-sm font-bold text-white">Live Search Grid</h4>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Patia Tech Corridor &bull; Infocity &bull; Saheed Nagar &bull; Cuttack Hub
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION (Targeting Local Search Queries) ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12 md:mb-14">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle size={15} />
              <span>Answers & Insights</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-base md:text-lg text-white/60">
              Everything you need to know about SEO & AI search ranking in Bhubaneswar.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div 
                key={faq.q} 
                className="glass rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 md:p-6 text-left flex justify-between items-center space-x-4 font-display font-bold text-base md:text-lg hover:text-brand-orange transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight 
                    size={18} 
                    className={`shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-90 text-brand-orange' : 'text-white/40'}`} 
                  />
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

      {/* ── AUDIT & LEAD FORM CTA ── */}
      <section id="audit-form" className="py-16 md:pb-28 relative">
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
              Get a comprehensive free SEO & AI Search audit of your website. Our Bhubaneswar search engineers will analyze your rankings, Core Web Vitals, and competitor gaps.
            </p>

            {formSubmitted ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-6 md:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-lg md:text-xl max-w-xl mx-auto"
              >
                ✓ Thank you! Our Bhubaneswar SEO team will deliver your comprehensive audit report within 2 hours.
              </motion.div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                className="grid sm:grid-cols-1 md:grid-cols-12 gap-3 max-w-2xl mx-auto"
              >
                <div className="md:col-span-5">
                  <input 
                    type="url" 
                    required
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="Website URL (e.g. yoursite.com)"
                    className="w-full h-14 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange outline-none text-white text-sm placeholder-white/40 transition-colors"
                  />
                </div>
                <div className="md:col-span-4">
                  <input 
                    type="email" 
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Your Email or Phone"
                    className="w-full h-14 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange outline-none text-white text-sm placeholder-white/40 transition-colors"
                  />
                </div>
                <div className="md:col-span-3">
                  <button 
                    type="submit" 
                    className="w-full h-14 rounded-xl font-bold text-white bg-brand-orange hover:bg-brand-orange/90 transition-all cursor-pointer flex items-center justify-center space-x-2 text-sm shadow-lg shadow-brand-orange/20"
                  >
                    <span>Get Audit</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 text-xs text-white/40 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <span className="flex items-center space-x-1.5">
                <Check size={14} className="text-emerald-400" />
                <span>100% Free Technical Audit</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock size={14} className="text-cyan-400" />
                <span>Delivered in 2 Hours</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <MapPin size={14} className="text-brand-orange" />
                <span>Bhubaneswar Office Team</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoAgencyBhubaneswarPage;
