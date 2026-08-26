"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, Target, MapPin, CheckCircle2, Shield, 
  ArrowRight, Phone, Mail, Sparkles, BrainCircuit, Globe, 
  Award, Zap, ChevronRight, HelpCircle, BarChart3, Clock, Check,
  Send, Building2, Megaphone, Users, Search, DollarSign
} from 'lucide-react';
import Link from 'next/link';

const marketingPillars = [
  {
    icon: <Search className="w-7 h-7 text-brand-orange" />,
    badge: "Organic Growth",
    title: "High-Intent SEO & Local Visibility",
    desc: "Rank at the top of Google searches and local map packs across Bhubaneswar and Odisha. We capture active buyers searching for your exact products and services.",
    benefits: [
      "Top Google Map 3-Pack rankings",
      "Local keyword targeting for Bhubaneswar & Cuttack",
      "Generative Engine Optimization (GEO)",
      "Technical Core Web Vitals optimization"
    ]
  },
  {
    icon: <DollarSign className="w-7 h-7 text-emerald-400" />,
    badge: "PPC & Paid Ads",
    title: "Performance Google & Meta Ads",
    desc: "Maximize return on ad spend (ROAS). We design high-converting PPC campaigns, A/B test ad creatives, and manage conversion tracking with zero wasted ad budget.",
    benefits: [
      "Google Search, Performance Max & Display Ads",
      "Meta (Facebook & Instagram) hyper-local targeting",
      "Full-funnel remarketing & lead capture",
      "Verified negative keyword filtering"
    ]
  },
  {
    icon: <Users className="w-7 h-7 text-indigo-400" />,
    badge: "Social Media",
    title: "Brand Authority & Social Media",
    desc: "Build an active, engaged community across LinkedIn, Instagram, and YouTube with studio-grade creative design and data-led content distribution.",
    benefits: [
      "Creative brand strategy & visual design",
      "Multi-channel content scheduling",
      "Community management & engagement",
      "Influencer & regional PR amplification"
    ]
  },
  {
    icon: <Shield className="w-7 h-7 text-cyan-400" />,
    badge: "Reputation & CRO",
    title: "ORM & Conversion Rate Optimization",
    desc: "Protect your brand reputation from counterfeit ads and spam while turning site visitors into paying clients with high-converting UX architecture.",
    benefits: [
      "Brand protection & fake ads removal",
      "Google Business Profile review acquisition",
      "Landing page conversion audits & A/B testing",
      "Interactive analytics & custom live dashboards"
    ]
  }
];

const localAreas = [
  "Bhubaneswar", "Laxmisagar", "Patia", "Saheed Nagar", "Jaydev Vihar", 
  "Infocity", "Khandagiri", "Chandrasekharpur", "Cuttack", "Rourkela", "Puri", "Sambalpur"
];

const faqs = [
  {
    q: "Why is Sociodigit considered a premier digital marketing agency in Bhubaneswar?",
    a: "Unlike agencies focusing solely on vanity impressions, Sociodigit aligns digital marketing directly with measurable pipeline and revenue growth. We combine technical SEO, targeted Google Ads & Meta PPC, conversion-optimized landing pages, and AI-driven growth strategies tailored to businesses across Odisha and India."
  },
  {
    q: "How quickly can digital marketing deliver leads for my business?",
    a: "Targeted Google Ads and Meta paid media can generate qualified customer leads within 24 to 48 hours of campaign launch. High-intent organic SEO and content campaigns deliver sustainable compounded traffic and local authority within 60 to 90 days."
  },
  {
    q: "Do you manage social media accounts and paid advertisements?",
    a: "Yes. We offer end-to-end management covering creative strategy, visual asset creation, copy generation, ad campaign execution, A/B testing, and weekly performance reporting across Instagram, Facebook, LinkedIn, Google, and YouTube."
  },
  {
    q: "How do you track and report digital marketing ROI?",
    a: "We implement custom analytics tracking via Google Analytics 4, Google Tag Manager, and interactive Looker dashboards. You receive transparent, real-time insights into cost-per-lead (CPL), customer acquisition cost (CAC), and organic traffic growth."
  },
  {
    q: "What industries in Odisha do you work with?",
    a: "We work with hospitality & resorts, healthcare institutions, real estate developers, educational academies, e-commerce stores, tech startups, and manufacturing enterprises throughout Bhubaneswar, Cuttack, and Odisha."
  }
];

const localProofs = [
  { metric: "350%", label: "Average Organic Traffic Growth", time: "Within 6 months" },
  { metric: "4.8x", label: "Average Return on Ad Spend (ROAS)", time: "Across Meta & Google Ads" },
  { metric: "100%", label: "Brand Protection & Ad Defense", time: "Hotel Holiday Resort Puri" },
  { metric: "< 24hr", label: "Average Campaign Go-Live", time: "Fast execution cycles" },
];

export default function DigitalMarketingAgencyBhubaneswarPage() {
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
                <Megaphone size={15} className="text-brand-orange shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Digital Marketing Agency in Bhubaneswar, Odisha
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 leading-[1.08]">
                Digital Marketing Agency in Bhubaneswar <br className="hidden sm:block" />
                <span className="gradient-text">for Predictable Revenue Growth</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
                Stop wasting ad spend on empty clicks. Sociodigit delivers ROI-driven SEO, high-converting Google & Meta Ads, conversion rate optimization, and brand marketing for ambitious businesses in Bhubaneswar, Odisha, and beyond.
              </p>

              {/* Hero CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-orange/90 transition-all duration-300 shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 flex items-center justify-center space-x-2 group"
                >
                  <span>Claim Free Marketing Audit</span>
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
              {localProofs.map((item, idx) => (
                <div key={idx} className="text-center p-3">
                  <div className="text-3xl lg:text-4xl font-extrabold font-display text-brand-orange mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs font-semibold text-white/80">{item.label}</div>
                  <div className="text-[11px] text-white/40 mt-1">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE MARKETING SERVICES ── */}
      <section className="py-20 border-t border-white/5 relative">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              <span>Full-Stack Growth Solutions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Engineered for <span className="gradient-text">Commercial ROI</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg">
              Every campaign is built on proprietary data, audience intent research, and rigorous conversion tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {marketingPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-colors">
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-brand-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pillar.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-white/70">
                        <CheckCircle2 size={16} className="text-brand-orange shrink-0 mr-2.5 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-white transition-colors group/link"
                >
                  <span>Request strategy consultation</span>
                  <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL CASE STUDY SHOWCASE ── */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Award size={13} />
                  <span>Verified Odisha Case Study</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Hotel Holiday Resort, Puri & Bhubaneswar
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  The client was facing severe revenue loss due to counterfeit Google Ads targeting their brand name and unauthorized GMB spam. Sociodigit executed a comprehensive brand defense and search optimization strategy.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="font-bold text-white text-sm mb-1">Brand Defense & ORM</div>
                    <div className="text-xs text-white/60">Identified and removed fake booking ads and secured the verified Google Business Profile.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="font-bold text-white text-sm mb-1">Direct Cloud & Organic Visibility</div>
                    <div className="text-xs text-white/60">Migrated web platform to high-speed cloud hosting and achieved +80% faster load times for direct guest bookings.</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-center">
                    <div className="text-2xl font-bold font-display text-brand-orange">100%</div>
                    <div className="text-xs text-white/70">Fake Ads Blocked</div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <div className="text-2xl font-bold font-display text-emerald-400">+80%</div>
                    <div className="text-xs text-white/70">Speed & Booking Rate</div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
                <div className="text-lg font-bold font-display text-white mb-6 flex items-center gap-2">
                  <MapPin className="text-brand-orange w-5 h-5" />
                  Local Odisha Coverage
                </div>
                <p className="text-sm text-white/60 mb-6">
                  We manage digital marketing campaigns and local search authority for clients across all major commercial hubs in Odisha:
                </p>
                <div className="flex flex-wrap gap-2">
                  {localAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/80 hover:border-brand-orange/40 hover:text-brand-orange transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50 flex items-center justify-between">
                  <span>Physical Office: Laxmisagar, Bhubaneswar</span>
                  <Link href="/contact" className="text-brand-orange hover:underline font-bold">
                    Schedule On-Site Meeting →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-white/60">
              Clear answers to your digital marketing questions in Bhubaneswar.
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
              Ready to Accelerate Your Digital Growth in Bhubaneswar?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-base md:text-lg">
              Get a complimentary digital marketing roadmap and competitor gap analysis tailored specifically to your market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base font-bold">
                Schedule Strategy Call
              </Link>
              <Link href="/case-studies" className="btn-secondary px-8 py-4 text-base font-semibold">
                Explore Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
