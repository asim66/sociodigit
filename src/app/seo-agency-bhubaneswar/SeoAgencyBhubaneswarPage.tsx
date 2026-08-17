"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, TrendingUp, Target, MapPin, CheckCircle2, Shield, 
  ArrowRight, Phone, Mail, Sparkles, BrainCircuit, Globe, 
  Award, Zap, ChevronRight, HelpCircle, BarChart3, Clock, Check
} from 'lucide-react';
import Link from 'next/link';
import AiSeoSection from '../../components/AiSeoSection';

const seoPillars = [
  {
    icon: <MapPin className="w-8 h-8 text-brand-orange" />,
    title: "Google Map Pack & Local SEO",
    desc: "Dominate local searches in Bhubaneswar, Laxmisagar, Patia, Saheed Nagar, and Cuttack. We optimize your Google Business Profile to capture high-intent local customers.",
    benefits: ["Top 3 Map Pack Placement", "Local Citation Building", "Review Optimization", "Geo-Targeted Landing Pages"]
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
    title: "Generative Engine Optimization (GEO)",
    desc: "Rank your business inside AI answer engines like ChatGPT, Perplexity, Google Gemini, and SearchGPT — capturing modern searchers who ask AI instead of clicking links.",
    benefits: ["LLM Citation Share", "Structured Entity Graphs", "AI Overview Targeting", "RAG Vector Indexing"]
  },
  {
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
    title: "Technical SEO & Speed Optimization",
    desc: "Sub-second load times and 100/100 Core Web Vitals score. We fix crawl bottlenecks, JavaScript rendering errors, canonical issues, and mobile UX flaws.",
    benefits: ["100/100 Lighthouse Speed", "Flawless Schema Markup", "Crawl Budget Optimization", "Zero Layout Shift (CLS)"]
  },
  {
    icon: <Target className="w-8 h-8 text-emerald-400" />,
    title: "High-Intent Keyword Targeting",
    desc: "We research transactional local and global keywords with high purchase intent, driving qualified leads and direct revenue rather than vanity traffic.",
    benefits: ["Buyer Intent Keywords", "Competitor Gap Analysis", "Local Search Dominance", "High Lead Conversion"]
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

  return (
    <div className="pt-32 bg-space-blue text-white selection:bg-brand-orange selection:text-white">
      {/* ── HERO SECTION ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 -z-10"></div>
        <div className="glow-bg top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/15 blur-[160px] -z-10" />

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-md mb-8">
                <MapPin size={16} className="text-brand-orange" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  #1 SEO Agency in Bhubaneswar, Odisha
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                Best <span className="gradient-text">SEO Agency</span> in Bhubaneswar.
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto">
                Dominate Google Search, Google Maps (3-Pack), and AI Answer Engines (ChatGPT, Perplexity, Gemini) with Odisha’s premier data-driven SEO & GEO agency.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-5 mb-16">
                <a href="#audit-form" className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4">
                  <Sparkles size={20} />
                  <span>Get Free Bhubaneswar SEO Audit</span>
                </a>
                <a href="tel:+917008381630" className="btn-outline inline-flex items-center space-x-2 text-lg px-8 py-4">
                  <Phone size={20} />
                  <span>Call +91 7008381630</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-center p-3">
                  <div className="text-3xl font-display font-bold text-brand-orange mb-1">#1</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Local Ranking</div>
                </div>
                <div className="text-center p-3">
                  <div className="text-3xl font-display font-bold text-cyan-400 mb-1">+218%</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Avg Organic Traffic</div>
                </div>
                <div className="text-center p-3">
                  <div className="text-3xl font-display font-bold text-indigo-400 mb-1">3×</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">AI Citation Visibility</div>
                </div>
                <div className="text-center p-3">
                  <div className="text-3xl font-display font-bold text-emerald-400 mb-1">100%</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Odisha Coverage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AI SEO TERMINAL DEMO SECTION ── */}
      <AiSeoSection />

      {/* ── WHY WE ARE #1 IN BHUBANESWAR ── */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why Sociodigit is the <span className="gradient-text">Top SEO Company</span> in Odisha
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              We combine deep technical engineering with local search mastery to help Bhubaneswar businesses outrank competitors and capture high-intent leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-brand-orange/40 transition-all duration-300 group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{pillar.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed">{pillar.desc}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {pillar.benefits.map((b) => (
                    <li key={b} className="flex items-center space-x-2 text-sm text-white/80">
                      <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL BHUBANESWAR REGIONS COVERAGE ── */}
      <section className="section-padding bg-surface/30">
        <div className="container-custom">
          <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">
                  <Globe size={16} />
                  <span>Regional Odisha Coverage</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  SEO & Digital Growth Services Across Odisha
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Whether your business is located in Laxmisagar, Patia, Saheed Nagar, or serving customers across Cuttack and Rourkela, our geo-targeted SEO strategy ensures maximum local visibility.
                </p>
                <div className="flex flex-wrap gap-2">
                  {localAreas.map((area) => (
                    <span key={area} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white/80 hover:border-brand-orange transition-colors">
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass p-6 rounded-2xl border border-white/10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Sociodigit Headquarters</h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        HP4, Phase 2, Brit Colony, Laxmisagar, Bhubaneswar, Odisha 751006
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <Phone className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Direct SEO Consultation</h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        +91 7008381630 | hi@sociodigit.in
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
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-white/60">
              Everything you need to know about SEO services in Bhubaneswar & Odisha.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={faq.q} 
                className="glass rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 font-display font-bold text-lg hover:text-brand-orange transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight 
                    size={20} 
                    className={`shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-90 text-brand-orange' : 'text-white/40'}`} 
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-white/70 text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIT & LEAD FORM CTA ── */}
      <section id="audit-form" className="section-padding relative">
        <div className="container-custom max-w-4xl">
          <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/10 neon-border relative overflow-hidden text-center">
            <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/10 blur-[150px] -z-10" />

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Rank <span className="gradient-text">#1 in Bhubaneswar</span>?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Get a comprehensive free SEO & AI Search audit of your website. Our Bhubaneswar SEO specialists will analyze your rankings, Core Web Vitals, and competitor gaps.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xl">
                ✓ Thank you! Our Bhubaneswar SEO team will contact you within 2 hours with your audit report.
              </div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto"
              >
                <input 
                  type="url" 
                  required
                  placeholder="Your Website URL (e.g. yoursite.com)"
                  className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange outline-none text-white placeholder-white/40 md:col-span-2"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Get Free Audit
                </button>
              </form>
            )}

            <div className="mt-8 text-xs text-white/40 flex justify-center items-center space-x-6">
              <span>🔒 100% Free Audit</span>
              <span>⚡ Delivered in 2 Hours</span>
              <span>📍 Bhubaneswar Office</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoAgencyBhubaneswarPage;
