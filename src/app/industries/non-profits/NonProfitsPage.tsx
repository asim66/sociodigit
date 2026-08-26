// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, Globe, Users, TrendingUp, ArrowRight, 
  CheckCircle2, ChevronRight, ShieldCheck, DollarSign, 
  Layers, Sparkles, HelpCircle 
} from 'lucide-react';
import Link from 'next/link';
import NonProfitImage from '../../../assets/generated/nonprofit_global_impact_render_1773750822773.png';

const nonProfitCapabilities = [
  {
    title: "Global Campaign & Awareness Platforms",
    desc: "Narrative-driven, highly aesthetic web platforms engineered for rapid mobile loading and international digital storytelling.",
    points: ["Accessible WCAG 2.1 AA compliant UI design", "Multi-lingual content localization", "Integrated social sharing & viral referral loops", "Zero-downtime traffic spike auto-scaling"]
  },
  {
    title: "Recurring Donor Portals & Micro-Giving",
    desc: "Frictionless donation funnels supporting recurring micro-gifts, corporate matching, and automated tax receipt generation.",
    points: ["Stripe & Razorpay non-profit payment gateways", "Automated 80G / 501(c)(3) tax receipt generation", "Donor self-service account management", "Transparent impact metric dashboards"]
  },
  {
    title: "Volunteer & Resource Coordination Tools",
    desc: "Custom internal portals for volunteer scheduling, event coordination, inventory distribution, and field communications.",
    points: ["Mobile-friendly volunteer signups", "Shift scheduling & automated SMS reminders", "Field asset tracking & dispatch logs", "Granular role-based privacy access"]
  },
  {
    title: "Impact Telemetry & Grant Reporting",
    desc: "Interactive data visualization portals turning raw field metrics into audited, visual reports for foundation donors and board members.",
    points: ["Automated KPI data aggregation", "Interactive Looker & Mapbox data maps", "Exportable compliance audit reports", "Real-time fund allocation transparency"]
  }
];

const nonProfitFaqs = [
  {
    q: "Do you offer special non-profit consulting rates or CSR assistance?",
    a: "Yes. Through Sociodigit's CSR initiative, we partner with verified NGOs, non-profits, and grassroots educational trusts to provide discounted engineering rates and pro-bono digital architecture consultations."
  },
  {
    q: "How do you protect donor data and payment security?",
    a: "All payment transactions are encrypted using PCI-DSS Level 1 tokenization. We enforce strict GDPR and data protection protocols to ensure donor lists and sensitive benefactor details are never compromised."
  },
  {
    q: "Can our platform handle sudden traffic surges during emergency fundraising appeals?",
    a: "Yes. We engineer serverless edge hosting and dynamic CDN caching that effortlessly handles tens of thousands of concurrent donors during live broadcast appeals and crisis fundraising campaigns."
  }
];

const NonProfits = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Immersive Image Hero */}
      <div className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/70 mix-blend-multiply z-10"></div>
          <img 
            src={(NonProfitImage as any).src || (null as any) || NonProfitImage} 
            alt="Sociodigit - Empowering Global Social Impact" 
            width="1200"
            height="800"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-400/40 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Heart className="w-4 h-4 mr-1 text-orange-400" />
              <span>Social Impact &amp; NGO Technology</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 tracking-tight font-display">
              Technology for <br/> <span className="text-orange-400 italic">Human</span> Impact.
            </h1>
            <p className="text-xl sm:text-2xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We empower NGOs, charities, and non-profits with robust digital platforms to amplify storytelling, streamline volunteer operations, and accelerate global fundraising.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 shadow-xl shadow-orange-600/30 flex items-center">
                <span>Partner with Our Team</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/csr" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base md:text-lg transition-colors flex items-center">
                Explore Our CSR Mission
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="py-20 md:py-32 container-custom px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-stone-800 font-display">
            Mission-driven organizations shouldn't be held back by outdated technology.
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            Whether you are coordinating international relief, managing local community educational initiatives, or fundraising for climate action, we engineer accessible, secure, and scalable solutions that reduce overhead so you can focus on your core mission.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 md:mb-32">
          {nonProfitCapabilities.map((cap, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-200/60 hover:border-orange-500/40 transition-all">
              <h3 className="text-2xl font-bold text-stone-900 mb-3 font-display">{cap.title}</h3>
              <p className="text-stone-600 mb-6 text-sm md:text-base leading-relaxed">{cap.desc}</p>
              <div className="space-y-2.5">
                {cap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center text-xs md:text-sm font-medium text-stone-700">
                    <CheckCircle2 size={16} className="text-orange-500 mr-2.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-stone-900 mb-3">Non-Profit Technology FAQ</h2>
            <p className="text-stone-600">Answers regarding CSR collaboration, donation security, and platform reliability.</p>
          </div>

          <div className="space-y-4">
            {nonProfitFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-stone-900 hover:text-orange-600 transition-colors"
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
                      className="px-6 pb-6 text-stone-600 leading-relaxed text-sm md:text-base border-t border-stone-100 pt-4"
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
        <div className="bg-stone-900 text-white p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Amplify Your Organization's Impact?</h3>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              Schedule a discovery session with Sociodigit to discuss how our software engineering and digital marketing teams can support your mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all">
                Request Social Impact Consultation
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

export default NonProfits;
