// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingCart, TrendingUp, Users, Zap, LayoutGrid, 
  ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, 
  Layers, Package, CreditCard, Sparkles 
} from 'lucide-react';
import Link from 'next/link';
import EcommerceImage from '../../../assets/generated/ecommerce_dashboard_render_1773750773899.png';

const ecomCapabilities = [
  {
    title: "Headless Next.js Storefronts",
    desc: "Decoupled frontends delivering sub-second page loads, zero CLS layout shifts, and dynamic localized shopping experiences.",
    features: ["Shopify Plus & Commerce Layer APIs", "Instant search via Algolia / Meilisearch", "Dynamic ISR product catalog caching", "Core Web Vitals scores > 95/100"]
  },
  {
    title: "High-Volume Checkout & Payment Systems",
    desc: "Frictionless multi-currency checkout funnels supporting Apple Pay, Google Pay, Razorpay, and Klarna.",
    features: ["One-click checkout acceleration", "Multi-region tax calculation (Avalara)", "Automated cart recovery workflows", "3D Secure 2.0 fraud protection"]
  },
  {
    title: "Real-Time ERP & Inventory Sync",
    desc: "Unify warehouse management systems (WMS), physical retail POS, and online storefronts into a single source of truth.",
    features: ["Bi-directional inventory webhooks", "Multi-warehouse order routing", "Automated shipping label generation", "Third-party 3PL logistics integrations"]
  },
  {
    title: "AI Personalization & Predictive Retention",
    desc: "Machine learning recommendation engines driving higher Average Order Value (AOV) and customer lifetime value (LTV).",
    features: ["Personalized 'Frequently Bought Together' bundles", "Dynamic pricing & discount rules", "Automated Klaviyo email/SMS journeys", "Predictive churn segmentation"]
  }
];

const ecomFaqs = [
  {
    q: "Why should we choose headless commerce over traditional Shopify themes?",
    a: "Headless commerce decouples your presentation layer (Next.js) from the commerce backend (Shopify Plus). This provides sub-second page load speeds, complete design flexibility, custom checkout flows, and significantly higher conversion rates without template restrictions."
  },
  {
    q: "How do you ensure zero inventory mismatch during high-traffic flash sales?",
    a: "We architect distributed Redis queue buffers and optimistic concurrency control to process high-frequency checkout requests instantaneously, syncing inventory counts across all channels in real time."
  },
  {
    q: "Can you migrate our existing store from WooCommerce or Magento to Next.js / Shopify?",
    a: "Yes. We execute comprehensive data migrations—transferring historical customer accounts, order histories, product variants, reviews, and SEO 301 redirect mappings with zero loss in search engine rankings."
  }
];

const Ecommerce = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-neutral-50 text-neutral-900 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-400/20 to-purple-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container-custom relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold tracking-wide text-xs md:text-sm mb-4 md:mb-6 uppercase">
              Retail &amp; E-Commerce Platform Engineering
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6 md:mb-8 text-neutral-900 font-display">
              Transactions that feel like <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">magic.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 mb-8 md:mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              We engineer high-converting headless storefronts, custom checkout funnels, and real-time inventory systems that convert casual shoppers into loyal brand advocates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto justify-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 shadow-xl shadow-orange-500/30 flex items-center">
                <span>Start Selling Better</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services/custom-apps" className="w-full sm:w-auto justify-center bg-white hover:bg-neutral-100 text-neutral-900 px-8 py-4 rounded-full font-bold text-base md:text-lg transition-colors border border-neutral-200 shadow-sm">
                Explore Custom Apps
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Dashboard/KPI Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-[2rem] p-6 md:p-8 lg:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] mb-20 md:mb-32 border border-neutral-100 relative overflow-hidden mx-4 md:mx-0"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-purple-600"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Checkout Acceleration", value: "3.2x", icon: Zap, color: "text-orange-500", bg: "bg-orange-50" },
              { label: "Conversion Lift", value: "+45%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
              { label: "Average Order Value", value: "+28%", icon: ShoppingCart, color: "text-blue-500", bg: "bg-blue-50" },
              { label: "Repeat Purchase Rate", value: "85%", icon: Users, color: "text-emerald-500", bg: "bg-emerald-50" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className={`p-3 md:p-4 rounded-2xl ${stat.bg} ${stat.color} mb-3 md:mb-4`}>
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-neutral-500 font-bold text-xs md:text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="mb-20 md:mb-32 px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 font-display">The Modern Commerce Stack</h2>
            <p className="text-neutral-600 text-lg">Decoupled, modular, and lightning-fast commerce engineering tailored for high-volume retailers.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {ecomCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-200/80 shadow-md hover:border-orange-500/40 transition-all">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 font-display">{cap.title}</h3>
                <p className="text-neutral-600 mb-6 text-sm md:text-base leading-relaxed">{cap.desc}</p>
                <div className="space-y-2.5">
                  {cap.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs md:text-sm font-medium text-neutral-700">
                      <CheckCircle2 size={16} className="text-orange-500 mr-2.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Callout */}
        <div className="bg-gradient-to-r from-orange-100 via-white to-purple-50 border border-orange-200 p-8 md:p-12 rounded-3xl mb-20 md:mb-32 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-sm">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 block mb-2">Verified Retailer Outcome</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-2">QA Automation &amp; Checkout Performance Hardening</h3>
            <p className="text-neutral-600 text-sm md:text-base max-w-2xl leading-relaxed">
              Designed an automated Playwright testing framework covering 300+ end-to-end cart scenarios for a high-volume retailer, reducing regression test cycles from 18 hours to 8 minutes with 75% fewer production bugs.
            </p>
          </div>
          <Link href="/case-studies" className="btn-primary whitespace-nowrap bg-orange-600 hover:bg-orange-700 text-white font-bold shrink-0">
            Read Case Study
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-3">E-Commerce Engineering FAQ</h2>
            <p className="text-neutral-600">Insights on headless architecture, flash-sale scaling, and migration strategies.</p>
          </div>

          <div className="space-y-4">
            {ecomFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-neutral-900 hover:text-orange-600 transition-colors"
                >
                  <span className="text-lg">{faq.q}</span>
                  <ChevronRight size={20} className={`transform transition-transform ${openFaq === idx ? 'rotate-90 text-orange-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-neutral-600 leading-relaxed text-sm md:text-base border-t border-neutral-100 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-neutral-900 text-white p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Accelerate Your E-Commerce Revenue?</h3>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Schedule a store architecture audit with Sociodigit's commerce engineering experts to unlock faster page load speeds and higher conversion rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all">
                Book Commerce Consultation
              </Link>
              <Link href="/services/digital-marketing" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition-colors">
                Explore Digital Marketing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
