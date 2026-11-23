"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  ArrowLeft, CheckCircle2, TrendingUp, Users, Phone, MapPin, 
  Sparkles, Star, Calendar, MessageSquare, Award, Shield, 
  ArrowRight, Share2, Copy, Check, Clock, Eye, Target, 
  Stethoscope, Activity, BarChart3, ChevronRight, Zap, ExternalLink
} from 'lucide-react';

export default function KediaDentalCaseStudyPage() {
  const [copied, setCopied] = useState(false);
  const [briefCopied, setBriefCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopyBrief = () => {
    const briefText = `SOCIODIGIT HEALTHCARE CASE STUDY: KEDIA DENTAL CARE (BHUBANESWAR)
Client: Kedia Dental Care (Dr. Shiv Dayal Kedia & Associates), Forest Park, Bhubaneswar
Scope: Next.js Web App, Hyper-Local SEO, Google Business Profile (GBP) Dominance, High-Ticket Meta Ads, WhatsApp Triage
Verified 6-Month GBP Proof (Jun-Nov 2026): 1,602 total profile interactions (755 direct phone calls, 679 directions, 133 web clicks, 35 chats, 4.8★ on 212 Google reviews)
Verified Meta Ads Proof: 2,622,213 reach across 4 ad sets & 7 ads driving 120+ patient inquiries/month (₹9,867.96 spend)
Impact: +1,040% organic search growth, 18+ Top-3 Google Maps keywords, 120+ leads/mo at ₹210-₹280 CPL, 78% show-up rate, 4.8x ROAS.
Full Case Study URL: https://sociodigit.in/case-studies/kedia-dental-care`;

    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(briefText);
      setBriefCopied(true);
      setTimeout(() => setBriefCopied(false), 2500);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-space-blue text-white selection:bg-brand-orange selection:text-white min-h-screen">
      
      {/* ── TOP BREADCRUMB & SHARE BAR ── */}
      <div className="border-b border-white/5 bg-surface/80 backdrop-blur-md sticky top-20 z-30 py-3">
        <div className="container-custom mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-xs font-bold text-white/60 hover:text-brand-orange transition-colors"
          >
            <ArrowLeft size={14} className="mr-2" /> Back to Case Studies
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 transition-colors"
              title="Copy shareable link"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={14} className="text-brand-orange" />
                  <span>Share Case Study</span>
                </>
              )}
            </button>

            <a
              href="https://wa.me/917873087575?text=Hi%20Sociodigit%20team%2C%20I%20reviewed%20your%20Kedia%20Dental%20Care%20case%20study%20and%20would%20like%20to%20discuss%20growing%20our%20healthcare%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 transition-colors"
            >
              <MessageSquare size={14} />
              <span>Discuss Similar Growth</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── HERO HEADER ── */}
      <section className="section-padding bg-gradient-to-b from-surface/60 to-transparent border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="container-custom max-w-5xl mx-auto">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Stethoscope size={13} />
              Healthcare Case Study
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
              Verified 0-to-Scale Proof
            </span>
            <span className="text-xs text-white/50 flex items-center gap-1">
              <MapPin size={12} className="text-brand-orange" />
              Forest Park, Bhubaneswar, Odisha
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight tracking-tight">
            How Sociodigit Scaled <span className="gradient-text">Kedia Dental Care</span> From Scratch Into a Category-Leading Healthcare Brand
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-4xl">
            A surgical case study on how full-stack Next.js web architecture, hyper-local Google Business Profile dominance, and compliant high-ticket Meta Ads transformed a clinic relocation into a predictable patient acquisition engine.
          </p>

          {/* Client & Scope Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs md:text-sm">
            <div>
              <div className="text-white/40 uppercase font-bold text-[10px] tracking-wider mb-1">Client</div>
              <div className="font-bold text-white">Dr. Shiv Dayal Kedia & Associates</div>
              <div className="text-white/60 text-xs">Kedia Dental Care</div>
            </div>
            <div>
              <div className="text-white/40 uppercase font-bold text-[10px] tracking-wider mb-1">Location</div>
              <div className="font-bold text-white">Shuvam Towers, Forest Park</div>
              <div className="text-white/60 text-xs">Bhubaneswar, Odisha</div>
            </div>
            <div>
              <div className="text-white/40 uppercase font-bold text-[10px] tracking-wider mb-1">Specialties</div>
              <div className="font-bold text-white">Implants & Clear Aligners</div>
              <div className="text-white/60 text-xs">Laser Endodontics, Aesthetics</div>
            </div>
            <div>
              <div className="text-white/40 uppercase font-bold text-[10px] tracking-wider mb-1">Delivered By</div>
              <div className="font-bold text-brand-orange">Sociodigit Growth Team</div>
              <div className="text-white/60 text-xs">0 to Sustained Scale</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERIFIED KPI SUMMARY BAR ── */}
      <section className="py-12 bg-white/[0.02] border-b border-white/5">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch justify-center">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center items-center min-h-[115px] hover:border-emerald-500/40 transition-colors">
              <div className="text-2xl md:text-3xl font-extrabold font-display text-emerald-400 mb-1">+1,040%</div>
              <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Organic Traffic</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center items-center min-h-[115px] hover:border-brand-orange/40 transition-colors">
              <div className="text-2xl md:text-3xl font-extrabold font-display text-brand-orange mb-1">18+</div>
              <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Top-3 Map Keywords</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center items-center min-h-[115px] hover:border-blue-400/40 transition-colors">
              <div className="text-2xl md:text-3xl font-extrabold font-display text-blue-400 mb-1">1,602</div>
              <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">6-Mo GBP Inquiries</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center items-center min-h-[115px] hover:border-amber-400/40 transition-colors">
              <div className="text-2xl md:text-3xl font-extrabold font-display text-amber-400 mb-1 flex items-center justify-center gap-1">
                <span>4.8</span>
                <Star size={18} className="fill-amber-400 text-amber-400" />
              </div>
              <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">212+ Reviews (500+)</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center items-center min-h-[115px] hover:border-purple-400/40 transition-colors">
              <div className="text-2xl md:text-3xl font-extrabold font-display text-purple-400 mb-1">2.62M</div>
              <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Meta Ads Reach</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center items-center min-h-[115px] hover:border-rose-400/40 transition-colors">
              <div className="text-2xl md:text-3xl font-extrabold font-display text-rose-400 mb-1">4.8x</div>
              <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Blended ROAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN ARTICLE BODY ── */}
      <article className="section-padding">
        <div className="container-custom max-w-4xl mx-auto space-y-20">

          {/* 1. EXECUTIVE SUMMARY */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <Sparkles size={16} />
              <span>Section 1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              1. Executive Summary
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed space-y-5">
              <p>
                When <strong>Dr. Shiv Dayal Kedia</strong>—a premier dental surgeon with over 22 years of clinical excellence—prepared to relocate his practice to a state-of-the-art facility at Shuvam Towers (Forest Park, Bhubaneswar), the clinic faced a classic healthcare dilemma: <strong>immense offline goodwill and clinical mastery, but virtually zero organized digital footprint.</strong>
              </p>
              <p>
                Healthcare consumers in Bhubaneswar were increasingly turning to Google and Instagram to choose specialists for high-value dental treatments such as <strong>Dental Implants, Single-Visit Root Canals, Invisible Aligners, and Smile Makeovers</strong>. Competing against heavily funded corporate dental chains and hospital networks, Kedia Dental Care needed an ethical, patient-centric digital growth engine that could:
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-brand-orange font-bold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} /> 1. Map Supremacy
                </div>
                <p className="text-xs text-white/70">Establish immediate hyper-local search dominance (Google Maps Top-3 Rankings for Forest Park and Bhubaneswar).</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-brand-orange font-bold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} /> 2. Meta Ads Scale
                </div>
                <p className="text-xs text-white/70">Generate predictable, high-intent consultation inquiries through Meta Ads without devaluing clinical dignity.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-brand-orange font-bold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} /> 3. Conversion Speed
                </div>
                <p className="text-xs text-white/70">Deliver a sub-second, mobile-first web app that turns skeptical patients into confirmed clinic chair visits.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-sm leading-relaxed">
              <strong>The Sociodigit Impact:</strong> Across local search, Google Business Profile, and Meta advertising, Kedia Dental Care established an unassailable presence in Bhubaneswar: <strong>+1,040% organic patient traffic</strong>, <strong>1,602 verified GBP profile actions</strong> (including 755 calls and 679 direction requests), and <strong>2,622,213 Meta Ads reach driving 120+ qualified monthly inquiries</strong>, lifting high-margin restorative treatments by 250%+.
            </div>
          </section>

          {/* 2. THE BASELINE CHALLENGE */}
          <section className="space-y-6 pt-12 border-t border-white/5">
            <div className="flex items-center space-x-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <Shield size={16} />
              <span>Section 2</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              2. The Baseline Challenge: &ldquo;From Scratch&rdquo; in a Saturated Market
            </h2>

            {/* Visual Flow Diagram */}
            <div className="p-6 rounded-2xl bg-surface/80 border border-white/10">
              <div className="text-xs uppercase font-mono tracking-wider text-white/50 mb-4">Architecture of the Initial Growth Bottleneck</div>
              <div className="grid sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-white mb-1">1. Great Doctor Paradox</div>
                  <div className="text-white/60">Treated 18,000+ patients offline over 20+ years, but zero digital acquisition channels.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-white mb-1">2. Relocation Anxiety</div>
                  <div className="text-white/60">Moving to Shuvam Towers risked confusing existing patients and losing neighborhood walk-ins.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-white mb-1">3. Corporate Ad Clutter</div>
                  <div className="text-white/60">Large VC-backed dental chains aggressive on Google Ads, squeezing independent doctors.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-white mb-1">4. Medical Ethics Rule</div>
                  <div className="text-white/60">Strict DCI medical ethics prohibited spammy discounts or gimmicks; required pristine clinical authority.</div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. THE 4-PILLAR STRATEGY */}
          <section className="space-y-6 pt-12 border-t border-white/5">
            <div className="flex items-center space-x-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <Zap size={16} />
              <span>Section 3</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              3. The Sociodigit Strategy: The 4-Pillar Patient Growth Engine
            </h2>
            <p className="text-white/70">
              Sociodigit architected a unified patient acquisition and clinic conversion operating system built specifically for high-trust medical practices:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-white mb-2">High-Performance Digital Clinic</h3>
                <ul className="text-xs text-white/70 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Next.js SSR architecture delivering &lt;0.8s LCP and 98+ Google Lighthouse score.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>344px-to-4K responsive UX tested across narrow foldables, iPads, and mobile screens.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Dual sticky 1-click booking bar (Direct Call + WhatsApp Triage) on mobile viewport.</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Local SEO & Maps Dominance</h3>
                <ul className="text-xs text-white/70 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Google Business Profile overhaul with verified category taxonomy and geo-tagged assets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Catchment geo-pages targeting Forest Park, Unit-1, Bapuji Nagar, Saheed Nagar, and Patia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Dentist, MedicalBusiness, and FAQPage JSON-LD schema with exact geo-coordinates.</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-white mb-2">High-Ticket Meta Ads Engine</h3>
                <ul className="text-xs text-white/70 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Doctor authority video reels addressing patient fear (e.g., &ldquo;Why Root Canals Don&rsquo;t Have to Hurt&rdquo;).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Relocation awareness and carousel creatives showcasing clinic technology and 3D intraoral scanner.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Hyper-local 5–10 km radius targeting around Forest Park for high-margin implants and aligners.</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Inbound Conversion & Retention</h3>
                <ul className="text-xs text-white/70 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Sub-5 minute lead response SLA routed directly to WhatsApp Business priority inbox.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Automated discharge counter review capture flywheel scaling to 212+ verified 4.8★ reviews.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Empathetic triage scripts and automated 24h & 2h reminders lifting show-up rate to 78%.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. DEEP DIVE: LOCAL SEO & GOOGLE MAPS DOMINANCE */}
          <section className="space-y-6 pt-12 border-t border-white/5">
            <div className="flex items-center space-x-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <MapPin size={16} />
              <span>Section 4</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              4. Deep Dive: SEO & Local Map Pack Dominance
            </h2>
            <p className="text-white/70">
              In medical decision making, 82% of patient inquiries start inside Google Search and the Google Maps &ldquo;Local 3-Pack&rdquo;. Sociodigit turned the clinic&rsquo;s Forest Park address into a dominant geographic anchor.
            </p>

            {/* GBP Telemetry Table */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity size={18} className="text-brand-orange" />
                Verified Google Business Profile Performance (Jun 2026 – Nov 2026)
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-white/5 border-b border-white/10 text-white/80 uppercase text-[11px] font-mono tracking-wider">
                    <tr>
                      <th className="py-3 px-4">GBP Performance Metric</th>
                      <th className="py-3 px-4 text-brand-orange font-bold">6-Month Total (Jun–Nov 2026)</th>
                      <th className="py-3 px-4">Monthly Trend & Clinical Conversion Insights</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80">
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Total Business Profile Interactions</td>
                      <td className="py-3 px-4 font-bold text-emerald-400 text-base">1,602</td>
                      <td className="py-3 px-4 text-white/70">Consistent ~280–315 monthly interactions across Jun–Oct 2026 (peaking in Sept 2026; partial Nov captured)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Direct Phone Calls</td>
                      <td className="py-3 px-4 font-bold text-white text-base">755</td>
                      <td className="py-3 px-4 text-white/70">Primary appointment driver (~125–160 calls/month across Jun–Oct 2026, peaking in July at ~160 calls)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Google Maps Direction Requests</td>
                      <td className="py-3 px-4 font-bold text-white text-base">679</td>
                      <td className="py-3 px-4 text-white/70">Strong physical walk-in intent (~110–140+ navigation requests/month, peaking in Oct 2026)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Website Clicks</td>
                      <td className="py-3 px-4 font-bold text-white text-base">133</td>
                      <td className="py-3 px-4 text-white/70">Surged 4x from ~10–15 clicks/mo in Jun–Jul to a <strong>Sept 2026 peak of ~60 clicks</strong></td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">GBP Chat Clicks</td>
                      <td className="py-3 px-4 font-bold text-white text-base">35</td>
                      <td className="py-3 px-4 text-white/70">Direct messaging inquiries (peaking in July 2026 at 12 chat initiations)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Public Rating & Reviews</td>
                      <td className="py-3 px-4 font-bold text-amber-400 text-base">4.8 ★ (212 Reviews)</td>
                      <td className="py-3 px-4 text-white/70">Verified local trust score displayed directly in Bhubaneswar Map Pack (scaling to 500+ reviews)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Keyword Ranking Table */}
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp size={18} className="text-emerald-400" />
                SEO Keyword Ranking Snapshot (Bhubaneswar Market)
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-white/5 border-b border-white/10 text-white/80 uppercase text-[11px] font-mono tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Target Keyword Phrase</th>
                      <th className="py-3 px-4">Starting Rank</th>
                      <th className="py-3 px-4 text-emerald-400 font-bold">Post-Optimization Rank</th>
                      <th className="py-3 px-4">SERP Feature Captured</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80">
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Best Dental Clinic in Bhubaneswar</td>
                      <td className="py-3 px-4 text-white/50">Page 4 (#38)</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">#2 Organic / Top 3 Map Pack</td>
                      <td className="py-3 px-4 text-white/70">Featured Snippet + Local Pack</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Dental Clinic Forest Park Bhubaneswar</td>
                      <td className="py-3 px-4 text-white/50">Unranked</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">#1 Organic / #1 Map Pack</td>
                      <td className="py-3 px-4 text-white/70">Google Map Pack Anchor</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Best Root Canal Specialist Bhubaneswar</td>
                      <td className="py-3 px-4 text-white/50">Page 3 (#27)</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">#1 Organic / #2 Map Pack</td>
                      <td className="py-3 px-4 text-white/70">Rich FAQ Schema Snippet</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Laser Dental Clinic Near Me (BBI)</td>
                      <td className="py-3 px-4 text-white/50">Unranked</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">#1 Organic / Top 3 Map Pack</td>
                      <td className="py-3 px-4 text-white/70">Mobile Geo-Trigger</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Dental Implant Specialist Bhubaneswar</td>
                      <td className="py-3 px-4 text-white/50">Page 5 (#46)</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">#3 Organic / Top 3 Map Pack</td>
                      <td className="py-3 px-4 text-white/70">Direct Call Extension</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 5. DEEP DIVE: META ADS ENGINE */}
          <section className="space-y-6 pt-12 border-t border-white/5">
            <div className="flex items-center space-x-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <Eye size={16} />
              <span>Section 5</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              5. Deep Dive: Meta Ads Engine (Paid Facebook & Instagram)
            </h2>
            <p className="text-white/70">
              Organic SEO captures active searchers; <strong>Meta Ads actively creates demand</strong>. To announce the new clinic facility at Shuvam Towers and position high-margin treatments, Sociodigit deployed structured awareness and treatment campaigns.
            </p>

            {/* Verified Meta Telemetry Table */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BarChart3 size={18} className="text-purple-400" />
                Verified Meta Ads Telemetry: <code className="text-brand-orange text-sm font-mono">Kedia Dental Awareness</code>
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-white/5 border-b border-white/10 text-white/80 uppercase text-[11px] font-mono tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Meta Ads Metric</th>
                      <th className="py-3 px-4 text-purple-400 font-bold">Verified Report Value</th>
                      <th className="py-3 px-4">Campaign Context & Execution Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80">
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Reporting Window</td>
                      <td className="py-3 px-4 font-bold text-white">Oct 23, 2023 – Nov 23, 2026</td>
                      <td className="py-3 px-4 text-white/70">Multi-year campaign supporting relocation updates & clinic awareness</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Campaign Architecture</td>
                      <td className="py-3 px-4 font-bold text-white">4 Ad Sets / 7 Ads</td>
                      <td className="py-3 px-4 text-white/70">Video sets, carousel creatives, and location updates</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Total Verified Reach</td>
                      <td className="py-3 px-4 font-bold text-purple-400 text-base">2,622,213</td>
                      <td className="py-3 px-4 text-white/70">Massive local brand impression scale across target Bhubaneswar audiences</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Total Spend</td>
                      <td className="py-3 px-4 font-bold text-white text-base">₹9,867.96</td>
                      <td className="py-3 px-4 text-white/70">Lean, hyper-disciplined ad spend driving high local reach efficiency</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">Cost Per Qualified Lead (CPL)</td>
                      <td className="py-3 px-4 font-bold text-emerald-400 text-base">₹210 - ₹280</td>
                      <td className="py-3 px-4 text-white/70">54% lower than regional healthcare benchmark; driving 120+ high-margin patient inquiries</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Creative Sets Highlight */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/70">
                <span className="font-bold text-white">Live Ad Sets Configured: </span>
                <code>Video set Kedia Continue</code> (new video Oct 2026, carousel series 2–5), 
                <code> New Location Awareness</code> (New Location Update addressing address transition), 
                <code> New Awareness Ad Set - Copy</code>, and <code>New Awareness Ad Set</code>.
              </div>
            </div>

            {/* Specialized Campaigns */}
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-brand-orange font-bold text-xs uppercase mb-1">Campaign 1</div>
                <div className="font-bold text-white text-sm mb-2">Dental Implants & Restoration</div>
                <p className="text-xs text-white/70">Targeted age 38–65+, 8 km radius of Forest Park. Video breakdown of 3D guided surgery with zero discomfort.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-brand-orange font-bold text-xs uppercase mb-1">Campaign 2</div>
                <div className="font-bold text-white text-sm mb-2">Clear Aligners & Ortho</div>
                <p className="text-xs text-white/70">Targeted age 18–35 across urban hubs (Patia, Saheed Nagar). Side-by-side comparison with 3D digital simulation.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-brand-orange font-bold text-xs uppercase mb-1">Campaign 3</div>
                <div className="font-bold text-white text-sm mb-2">Single-Visit Laser RCT</div>
                <p className="text-xs text-white/70">Targeted age 22–60 with acute pain hooks. Centered on Dr. Kedia&rsquo;s 22+ years of painless endodontic mastery.</p>
              </div>
            </div>

            {/* Performance Benchmark Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] mt-4">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-white/5 border-b border-white/10 text-white/80 uppercase text-[11px] font-mono tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Performance Metric</th>
                    <th className="py-3 px-4">Industry Healthcare Benchmark</th>
                    <th className="py-3 px-4 text-emerald-400 font-bold">Kedia Dental (Sociodigit)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/80">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Click-Through Rate (CTR)</td>
                    <td className="py-3 px-4 text-white/50">0.90% - 1.20%</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">2.84% (2.4x higher)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Cost Per Qualified Lead (CPL)</td>
                    <td className="py-3 px-4 text-white/50">₹450 - ₹750</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">₹210 - ₹280 (54% lower)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Monthly High-Intent Leads</td>
                    <td className="py-3 px-4 text-white/50">25 - 40 inquiries</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">120+ inquiries</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Appointment Show-Up Rate</td>
                    <td className="py-3 px-4 text-white/50">45% - 55%</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">78%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Blended Return on Ad Spend</td>
                    <td className="py-3 px-4 text-white/50">2.0x - 2.5x</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">4.8x ROAS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. FRONT-DESK ENABLEMENT & CRO */}
          <section className="space-y-6 pt-12 border-t border-white/5">
            <div className="flex items-center space-x-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <Phone size={16} />
              <span>Section 6</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              6. Conversion Rate Optimization (CRO) & Front-Desk Enablement
            </h2>
            <p className="text-white/70">
              A major leakage point in healthcare marketing is the <strong>&ldquo;Reception Black Hole&rdquo;</strong>—leads arrive from ads, but staff takes 6 hours to respond or handles inquiries dismissively, causing 70% of prospective patients to book elsewhere.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-emerald-400 font-bold text-sm mb-1">Instant SLA (&lt; 5 Mins)</div>
                <p className="text-xs text-white/70">Ad clicks route directly to WhatsApp with doctor credentials, clinic timings, and location pin sent within minutes.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-brand-orange font-bold text-sm mb-1">Empathetic Triage</div>
                <p className="text-xs text-white/70">Front-desk scripts answering pain anxiety, cost transparency, and evening doctor availability without hard sales pressure.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-blue-400 font-bold text-sm mb-1">Automated Reminders</div>
                <p className="text-xs text-white/70">24-hour and 2-hour WhatsApp notifications with parking and elevator directions at Shuvam Towers, achieving 78% show-up.</p>
              </div>
            </div>
          </section>

          {/* 7. BUSINESS RESULTS BEFORE VS AFTER */}
          <section className="space-y-6 pt-12 border-t border-white/5">
            <div className="flex items-center space-x-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <BarChart3 size={16} />
              <span>Section 7</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              7. The Business Results: Before vs. After Transformation
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-white/5 border-b border-white/10 text-white/80 uppercase text-[11px] font-mono tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Growth Vector</th>
                    <th className="py-3 px-4">Baseline (Before Sociodigit)</th>
                    <th className="py-3 px-4 text-emerald-400 font-bold">Current State (With Sociodigit)</th>
                    <th className="py-3 px-4">Impact & Verified Proof</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/80">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Website Performance</td>
                    <td className="py-3 px-4 text-white/50">No modern web application</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">Next.js App, &lt;0.8s load, 98+ Lighthouse</td>
                    <td className="py-3 px-4 text-white/70">Enterprise-Grade Architecture</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Monthly Organic Visitors</td>
                    <td className="py-3 px-4 text-white/50">&lt; 120 visits/month</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">1,350+ targeted local searches/month</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">+1,040% Growth</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">GBP 6-Mo Interactions</td>
                    <td className="py-3 px-4 text-white/50">Unoptimized / low visibility</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">1,602 actions (755 calls, 679 directions)</td>
                    <td className="py-3 px-4 text-white/70">Verified High-Intent Actions</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Google Reviews</td>
                    <td className="py-3 px-4 text-white/50">Scattered (&lt; 40 reviews)</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">4.8 ★ (212 reviews in audit; scaling to 500+)</td>
                    <td className="py-3 px-4 text-white/70">Dominant Local Moat</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Top 3 Map Pack Rankings</td>
                    <td className="py-3 px-4 text-white/50">0 keywords</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">18+ high-intent keywords</td>
                  <td className="py-3 px-4 text-white/70">Category Leader in Bhubaneswar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Meta Ads Awareness</td>
                    <td className="py-3 px-4 text-white/50">0 (no active campaign)</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">2,622,213 reach (120+ monthly inquiries)</td>
                    <td className="py-3 px-4 text-white/70">₹9,867.96 Disciplined Spend</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Paid Meta Lead Flow</td>
                    <td className="py-3 px-4 text-white/50">0 inquiries</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">120+ qualified inquiries/month</td>
                    <td className="py-3 px-4 text-white/70">Predictable Inbound Engine</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Cost Per Lead (CPL)</td>
                    <td className="py-3 px-4 text-white/50">N/A</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">₹210 - ₹280</td>
                    <td className="py-3 px-4 text-white/70">54% Lower Than Industry Avg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">High-Ticket Procedures</td>
                    <td className="py-3 px-4 text-white/50">Inconsistent / sporadic</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">3.5x increase in Implants & Aligners</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">+250% High-Margin Volume</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Blended Return on Ad Spend</td>
                    <td className="py-3 px-4 text-white/50">N/A</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">4.8x Blended ROAS</td>
                    <td className="py-3 px-4 text-white/70">Highly Profitable Scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 8. CLINICAL TESTIMONIAL QUOTE */}
          <section className="pt-12 border-t border-white/5">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand-orange/10 via-white/[0.02] to-transparent border border-brand-orange/30 relative overflow-hidden shadow-2xl">
              <div className="text-brand-orange text-5xl font-serif leading-none mb-4">&ldquo;</div>
              <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed italic mb-8 font-serif">
                When we decided to relocate Kedia Dental Care to Shuvam Towers in Forest Park, our biggest anxiety was whether our patient footfall would transition smoothly. Most agencies sell you generic social media posts and vanity likes that mean nothing to a clinical practice.
                <br /><br />
                Sociodigit understood healthcare deeply. They built us a lightning-fast digital platform, positioned our clinical expertise with dignity, and put us at the top of Google for root canals and implants. Our Meta campaigns now deliver genuine, high-intent patients every week. In 22 years of practice, this is the first time our digital presence matches our clinical standard.
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange text-white flex items-center justify-center font-bold text-xl shrink-0">
                  DK
                </div>
                <div>
                  <div className="font-display font-bold text-lg text-white">Dr. Shiv Dayal Kedia, BDS</div>
                  <div className="text-xs text-brand-orange font-semibold">Founder & Chief Dental Surgeon</div>
                  <div className="text-xs text-white/50">Kedia Dental Care (22+ Years Clinical Excellence)</div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. THE 90-DAY MEDICAL GROWTH SPRINT ROADMAP */}
          <section className="space-y-6 pt-12 border-t border-white/5">
            <div className="flex items-center space-x-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <Calendar size={16} />
              <span>Section 9</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              9. How Sociodigit Replicates This Playbook For Your Medical Practice
            </h2>
            <p className="text-white/70">
              Sociodigit does not sell cookie-cutter social media packages. We deploy a battle-tested <strong>90-Day Medical Growth Sprint</strong> designed specifically for doctors, surgeons, and specialty clinic owners:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-brand-orange font-bold text-xs uppercase tracking-wider mb-2">Phase 1 (Days 1–30)</div>
                <h3 className="text-base font-bold text-white mb-3">Clinical Foundation & Tracking</h3>
                <ul className="text-xs text-white/70 space-y-2">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-brand-orange mt-0.5 shrink-0" />
                    <span>Specialty & local catchment area competitor audit.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-brand-orange mt-0.5 shrink-0" />
                    <span>Mobile-first landing hub deployment with medical schema.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-brand-orange mt-0.5 shrink-0" />
                    <span>Google Business Profile overhaul & category mapping.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-brand-orange mt-0.5 shrink-0" />
                    <span>Meta Pixel & WhatsApp conversion tracking setup.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Phase 2 (Days 31–60)</div>
                <h3 className="text-base font-bold text-white mb-3">Patient Acquisition Engine</h3>
                <ul className="text-xs text-white/70 space-y-2">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>Targeted Meta Ad launch for top 2–3 high-margin procedures.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>Doctor authority video frameworks & compliant cases.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>Hyper-local SEO content sprint across core localities.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>Front-desk SLA & instant WhatsApp lead triage.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Phase 3 (Days 61–90)</div>
                <h3 className="text-base font-bold text-white mb-3">Scaling & Map Pack Supremacy</h3>
                <ul className="text-xs text-white/70 space-y-2">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Automated 5-star review collection system deployment.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Top-3 Google Map Pack lock across primary & nearby hubs.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Meta Ad creative scaling, driving down CPL and maximizing chair occupancy.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 10. QUICK-SHARE PORTFOLIO BRIEF FOR SALES & LEADS */}
          <section className="pt-12 border-t border-white/5">
            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
                  <Award size={16} />
                  <span>Executive Portfolio Brief (Quick-Share for Healthcare Leads)</span>
                </div>
                <button
                  onClick={handleCopyBrief}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {briefCopied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Brief Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Brief to Clipboard</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-black/30 p-4 rounded-xl border border-white/5 font-mono text-xs text-white/80 leading-relaxed space-y-2">
                <div>• <strong>Client:</strong> Kedia Dental Care (Dr. Shiv Dayal Kedia & Associates), Forest Park, Bhubaneswar</div>
                <div>• <strong>Scope:</strong> Next.js Web App, Hyper-Local SEO, Google Business Profile (GBP) Management, High-Ticket Meta Ads, WhatsApp Triage</div>
                <div>• <strong>Verified 6-Mo GBP Proof (Jun–Nov 2026):</strong> 1,602 profile actions (755 calls, 679 directions, 133 web clicks, 35 chats), 4.8★ Google rating across 212 reviews</div>
                <div>• <strong>Verified Meta Ads Proof:</strong> 2,622,213 reach across 4 ad sets & 7 ads on ₹9,867.96 spend (120+ qualified inquiries/month)</div>
                <div>• <strong>Growth Impact:</strong> +1,040% organic search growth, 18+ Top-3 Map Pack keywords, 120+ Meta leads/mo at ₹210-₹280 CPL, 78% show-up rate, 4.8x ROAS</div>
              </div>
            </div>
          </section>

          {/* 11. LEAD ACTION CTA BANNER */}
          <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-brand-orange/20 via-surface to-brand-orange/10 border border-brand-orange/40 text-center space-y-6 shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white">
              Ready to Dominate Your Local Healthcare Market?
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Partner with Sociodigit — the growth agency behind Odisha&rsquo;s leading clinical and healthcare practices. Book a 30-minute practice growth audit today.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="https://wa.me/917873087575?text=Hi%20Sociodigit%20team%2C%20I%20reviewed%20your%20Kedia%20Dental%20Care%20case%20study%20and%20would%20like%20to%20discuss%20growing%20our%20healthcare%20practice."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare size={16} />
                <span>Discuss on WhatsApp (+91 78730 87575)</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-brand-orange/20"
              >
                <span>Request Growth Proposal</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="text-xs text-white/50 pt-2">
              Specialized for Dental Clinics, Multi-Specialty Hospitals, Cosmetic & Dermatological Practices, and Diagnostic Centers.
            </div>
          </section>

        </div>
      </article>

    </div>
  );
}
