// @ts-nocheck
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Globe,
  Star,
  Search,
  MapPin,
  UserX,
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  Lock,
  CheckCircle2,
  ChevronRight,
  Phone,
  Building2,
  MessageCircle,
  FileText,
  AlertCircle,
  Sparkles,
  ExternalLink,
  Flame,
  Check
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HotelHeroImage from '../../../assets/generated/hotel_luxury_lobby_render.png';
import StressedOwnerImage from '../../../assets/generated/hotel_owner_stressed.png';
import ReceptionDisputeImage from '../../../assets/generated/hotel_reception_dispute.png';
import ScamTimelineImage from '../../../assets/generated/hotel_scam_timeline.png';

export default function HospitalityHotelsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Quick Crisis Contact Trigger
  const emergencyWhatsAppUrl = "https://wa.me/917008129798?text=Hello%20Sociodigit%20Team%2C%20our%20hotel%20is%20facing%20an%20urgent%20brand%20impersonation%20%2F%20GMB%20issue.%20Please%20help.";

  const defensePillars = [
    {
      id: "fake-website-takedown",
      tag: "Turnaround < 48 Hours",
      tagColor: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
      title: "Rogue Domain & Fake Booking Website Takedowns",
      summary: "Fraudsters register lookalike domains, duplicate your official photos, run deceptive Google Search Ads, and collect fake booking deposits via UPI. We take them down fast.",
      icon: ShieldAlert,
      iconBg: "bg-rose-500/10 text-rose-400",
      stats: "150+ Domains Taken Down",
      features: [
        "Priority DMCA Takedown & Registrar Fraud Suspension",
        "Cloudflare, Hostinger & Namecheap Abuse Escalation",
        "Google Ads Scam Interception & Policy Strike Filing",
        "Legal Cyber Cell Complaint SOP & Evidence Dossier",
        "Continuous 24/7 Dark Web & Domain Typo-squatting Monitoring"
      ]
    },
    {
      id: "gmb-recovery-lock",
      tag: "100% Recovery Rate",
      tagColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
      title: "Google Business Profile (GMB) Crisis Recovery & Phone Lock",
      summary: "Scammers abuse Google Maps 'Suggest an edit' to replace your front desk phone number with fraud call centers. We restore your authentic phone number and permanently lock your profile.",
      icon: MapPin,
      iconBg: "bg-amber-500/10 text-amber-400",
      stats: "Zero Recurrence Guarantee",
      features: [
        "Immediate Google Maps Phone Number Hijack Restoration",
        "Escalated Verification Support with Google Trust & Safety",
        "Suspension Appeal & Hard Reinstatement for Flagged Listings",
        "Map Spam & Fake Competitor Pins Cleanup within 5km Radius",
        "Local 3-Pack SEO Dominance for High-Intent Tourist Searches"
      ]
    },
    {
      id: "hospitality-orm",
      tag: "24/7 Sentiment Shield",
      tagColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      title: "Hospitality ORM & Guest Sentiment Engineering",
      summary: "Cheated guests often blame the real hotel with angry 1-star reviews. We de-escalate crisis reviews on TripAdvisor & Google, legally remove fraudulent ratings, and elevate genuine guest loyalty.",
      icon: Star,
      iconBg: "bg-emerald-500/10 text-emerald-400",
      stats: "4.8★ Avg. Restored Rating",
      features: [
        "Removal of Fraud-Linked & Malicious 1-Star Google Reviews",
        "TripAdvisor Fraud Arbitration & Dispute Filing",
        "OTA Sentiment Monitoring (MakeMyTrip, Booking.com, Agoda)",
        "Automated Post-Stay Positive Review Harvesting Funnels",
        "Brand Search Cleansing (Pushing down scam complaints with PR)"
      ]
    }
  ];

  const nationalCorridors = [
    {
      region: "Goa & Coastal Belt",
      hubs: "Candolim, Calangute, Anjuna, Morjim, South Goa Beachfronts",
      desc: "India's highest volume market for fake luxury villa and beachfront resort booking scams. We protect resort brands from rogue Google Ads and WhatsApp booking impostors.",
      threatLevel: "Critical"
    },
    {
      region: "Rajasthan Heritage Corridor",
      hubs: "Udaipur, Jaipur, Jodhpur, Ranthambore Palace Properties",
      desc: "Heritage havelis and palace resorts frequently targeted by fraudsters using lookalike domain variations and fake banquet booking lines.",
      threatLevel: "Very High"
    },
    {
      region: "Kerala Backwaters & Wellness",
      hubs: "Alleppey, Munnar, Wayanad, Kovalam Ayurveda Retreats",
      desc: "Ayurveda wellness retreats and houseboat booking syndicates run unauthorized aggregator portals. We enforce brand exclusivity.",
      threatLevel: "High"
    },
    {
      region: "Himachal & Uttarakhand Hills",
      hubs: "Shimla, Manali, Rishikesh, Mussoorie, Dharamshala",
      desc: "Seasonal tourist rushes trigger waves of cloned booking sites targeting high-occupancy long weekends and summer peaks.",
      threatLevel: "High"
    },
    {
      region: "Tier-1 Metro Business Corridors",
      hubs: "Delhi-NCR, Mumbai, Bengaluru, Hyderabad, Kolkata",
      desc: "Business hotels and luxury chains face hijacked Google Maps phone numbers targeting corporate travel desks and banquet bookings.",
      threatLevel: "High"
    }
  ];

  const faqs = [
    {
      q: "How fast can Sociodigit take down a fake website pretending to be our hotel?",
      a: "Our emergency takedown team initiates action within 2 hours of verification. By serving coordinated DMCA notices, registrar fraud suspensions (Namecheap, GoDaddy, Hostinger), CDN abuse notices (Cloudflare), and Google Ads scam strike escalations, rogue domains are neutralized within 24 to 48 hours."
    },
    {
      q: "What should we do if scammers changed our phone number on Google Maps?",
      a: "Do not repeatedly submit standard edits, as this often triggers automatic profile suspension. Contact our emergency hotel response desk immediately. We use Google Trust & Safety escalation channels with entity ownership documentation to restore your authentic front desk number and apply edit-lock protection."
    },
    {
      q: "Can you help remove 1-star negative reviews left by scammed guests?",
      a: "Yes. When travelers are cheated by rogue websites or fake phone numbers, they frequently write furious 1-star reviews on TripAdvisor and Google Maps blaming the authentic property. We gather cyber incident proof and file specialized disputes under Google's Misrepresentation & Offline Scam policy to successfully remove unwarranted reviews."
    },
    {
      q: "How do you protect hotels across India on an ongoing basis?",
      a: "We maintain 24/7 automated monitoring across new domain registrations, Google Ads bidding on your hotel name, Google Maps attribute edits, and OTA sentiment. Whenever an unauthorized domain or map tamper attempt occurs, we neutralize it before guests are misled."
    },
    {
      q: "How does Sociodigit differ from a standard digital marketing agency?",
      a: "Standard agencies focus on generic social media posts. Sociodigit specializes in deep cyber brand defense, legal-technical takedowns, crisis hospitality ORM, and Google Business Profile protection. We protect your direct booking revenues from active cyber theft."
    }
  ];

  return (
    <div className="pt-28 pb-24 lg:pt-36 lg:pb-32 min-h-screen bg-neutral-950 text-white font-sans relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-blue-600/15 via-rose-600/10 to-transparent blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-0"></div>

      {/* Emergency Crisis Alert Bar */}
      <div className="bg-gradient-to-r from-rose-950/80 via-neutral-900 to-rose-950/80 border-b border-rose-500/20 py-2.5 px-4 sticky top-16 md:top-20 z-30 backdrop-blur-md">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-2 text-rose-300 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span className="font-bold text-white uppercase tracking-wider">Hotel Crisis Desk:</span>
            <span>Facing a fake booking site or hijacked Google Maps phone number?</span>
          </div>
          <a
            href={emergencyWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 hover:text-white bg-rose-500/20 hover:bg-rose-500/40 px-3 py-1 rounded-full transition-colors border border-rose-500/30"
          >
            Emergency SLA: &lt; 48 Hours <ArrowRight size={13} />
          </a>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-10">

        {/* Hero Section */}
        <section className="text-center max-w-5xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-xs md:text-sm mb-6 uppercase tracking-wider">
              <Sparkles size={14} className="text-blue-400" />
              National Hotel Brand Defense &amp; ORM
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-6 text-white font-display">
              Protect Your Hotel Brand: <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-300 to-rose-400">
                Rapid Fake Website Takedowns, GMB Recovery &amp; 24/7 ORM
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8 md:mb-10 font-normal max-w-3xl mx-auto leading-relaxed">
              India&apos;s specialized digital defense partner for luxury hotels, heritage resorts, and boutique chains. We neutralize lookalike booking sites stealing your direct revenue, recover hijacked Google Maps listings, and engineer 5-star reputation across TripAdvisor &amp; OTAs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={emergencyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center bg-rose-600 hover:bg-rose-500 text-white px-7 py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 shadow-xl shadow-rose-600/25 flex items-center gap-2.5"
              >
                <Phone size={18} /> Emergency Takedown Desk
              </a>

              <Link
                href="/hotel-fraud-control"
                className="w-full sm:w-auto justify-center bg-neutral-900 hover:bg-neutral-800 text-white px-7 py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 border border-neutral-700 flex items-center gap-2"
              >
                <Search size={18} className="text-emerald-400" /> Launch Hotel Threat Scanner <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Impact Visual Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-neutral-900/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl mb-20 md:mb-28 border border-neutral-800 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Rogue Domains Neutralized", value: "150+", icon: ShieldAlert, color: "text-rose-400", bg: "bg-rose-500/10" },
              { label: "Average Takedown Speed", value: "< 36h", icon: Zap, color: "text-amber-400", bg: "bg-amber-500/10" },
              { label: "Direct Bookings Protected", value: "₹5.8Cr+", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { label: "GMB Phone Recovery Rate", value: "100%", icon: MapPin, color: "text-blue-400", bg: "bg-blue-500/10" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} mb-3 border border-white/5`}>
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 text-white font-display">{stat.value}</h3>
                <p className="text-neutral-400 font-bold text-xs md:text-sm tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Flagship Defense Pillars (National Keywords) */}
        <section className="mb-20 md:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              The 360° Defense Stack
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 text-white font-display">
              End-to-End Hotel Brand Protection
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              We replace passive marketing with aggressive brand defense. Protect your official website, secure your Google Maps identity, and eliminate fraudulent reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {defensePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-neutral-900/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-800 hover:border-neutral-700 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl ${pillar.iconBg} border border-white/5`}>
                      <pillar.icon size={26} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${pillar.tagColor}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white font-display leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
                    {pillar.summary}
                  </p>

                  <div className="space-y-3 mb-6 pt-4 border-t border-neutral-800">
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{pillar.stats}</span>
                  <a
                    href={emergencyWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    Protect Property <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Crisis Breakdown: Why Indian Hotels are Being Targeted */}
        <section className="mb-20 md:mb-28">
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 rounded-3xl p-6 sm:p-10 md:p-14 border border-neutral-800 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-rose-400 bg-rose-500/10 px-3.5 py-1.5 rounded-full border border-rose-500/20">
                  The Hotelier&apos;s Crisis
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-4 mb-6 text-white font-display">
                  How Scammers Drain Hotel Revenue &amp; Destroy Trust
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  Cyber syndicates know luxury hotels charge premium rates. By spending a few hundred rupees on a lookalike domain and Google search ads, they siphon high-margin bookings straight into untraceable UPI accounts.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800">
                    <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 mt-1">
                      <AlertTriangle size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1">Cloned Booking Portals</h4>
                      <p className="text-xs sm:text-sm text-neutral-400">
                        Scammers bid on your exact hotel name on Google Ads. Prospective guests click the fake top result, believing it is official, and pay 100% advance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 mt-1">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1">Google Maps Phone Tampering</h4>
                      <p className="text-xs sm:text-sm text-neutral-400">
                        Fraudsters edit your Google Business Profile phone number to redirect front desk and banquet inquiry calls directly to scam call centers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 mt-1">
                      <Star size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1">Devastating Review Blowback</h4>
                      <p className="text-xs sm:text-sm text-neutral-400">
                        Scammed guests arrive at your lobby with fake vouchers. When turned away, they leave vicious 1-star reviews on TripAdvisor and Google blaming you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-neutral-700/60 shadow-2xl bg-neutral-900">
                  <Image
                    src={ReceptionDisputeImage}
                    alt="Hotel reception dispute caused by fake booking scam"
                    width={800}
                    height={533}
                    className="w-full h-auto object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">The Reality At Reception</span>
                    <p className="text-sm text-white font-medium mt-1">
                      Turned-away guests cause lobby scenes and direct PR nightmares unless rogue channels are permanently dismantled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* National Tourism Corridor Coverage (SEO Geo-Clusters) */}
        <section className="mb-20 md:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              National Footprint
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 text-white font-display">
              Protecting Properties Across India&apos;s Tourism Corridors
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              From beach resorts in Goa to heritage havelis in Rajasthan, our brand defense coverage spans every high-value hospitality cluster in the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalCorridors.map((corridor, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                    Threat: {corridor.threatLevel}
                  </span>
                  <MapPin size={16} className="text-neutral-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{corridor.region}</h3>
                <p className="text-xs font-bold text-emerald-400 mb-3">{corridor.hubs}</p>
                <p className="text-xs text-neutral-400 leading-relaxed">{corridor.desc}</p>
              </div>
            ))}

            {/* Quick Threat Scanner Action Box */}
            <div className="bg-gradient-to-br from-blue-900/40 via-neutral-900 to-emerald-950/40 border border-blue-500/30 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-300 bg-blue-500/20 px-2.5 py-1 rounded-full border border-blue-500/30">
                  Instant Diagnostic
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">Is Your Property Exposed?</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  Run an instant automated check across active lookalike domains, fake booking listings, and Google Maps phone changes.
                </p>
              </div>
              <Link
                href="/hotel-fraud-control"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-colors shadow-lg shadow-blue-600/30"
              >
                Run Free Property Threat Scan <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* 4-Step Hospitality Brand Defense Protocol */}
        <section className="mb-20 md:mb-28">
          <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-10 md:p-16 border border-neutral-800 relative overflow-hidden">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-10 text-white font-display text-center">
              Our 4-Stage Brand Defense Protocol
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "24/7 Threat Radar",
                  desc: "We continuously crawl new domain registrations, Google Search Ads, and Google Maps edits targeting your brand keywords."
                },
                {
                  step: "02",
                  title: "Emergency Strike (< 48h)",
                  desc: "We file multi-layered DMCA, host abuse, and registrar fraud notices to take down rogue domains and stop scam ads instantly."
                },
                {
                  step: "03",
                  title: "GMB Lock & Reinstatement",
                  desc: "We restore legitimate front desk phone numbers, appeal erroneous suspensions, and lock map edit permissions."
                },
                {
                  step: "04",
                  title: "Review & ORM Engineering",
                  desc: "We scrub unjustified 1-star reviews from scammed guests and deploy automated funnels to accelerate verified 5-star ratings."
                }
              ].map((stage, idx) => (
                <div key={idx} className="bg-neutral-950/60 p-6 rounded-2xl border border-neutral-800/80">
                  <div className="text-3xl sm:text-4xl font-black text-white/20 mb-3 font-display">{stage.step}</div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">{stage.title}</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">{stage.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">Need an urgent audit for your property?</h4>
                <p className="text-xs sm:text-sm text-neutral-400">Our senior brand defense engineers respond within 2 hours.</p>
              </div>
              <a
                href={emergencyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-white text-neutral-950 hover:bg-emerald-400 hover:text-neutral-950 px-8 py-3.5 rounded-full font-bold text-sm transition-colors"
              >
                Contact Emergency Desk
              </a>
            </div>
          </div>
        </section>

        {/* Schema-Synced Hoteliers FAQ */}
        <section className="mb-20 md:mb-28 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              Answers for Hoteliers &amp; GMs
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 text-white font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              Everything general managers, revenue heads, and hotel owners need to know about cyber defense and ORM.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left p-5 sm:p-6 font-bold text-base sm:text-lg text-white hover:text-emerald-400 transition-colors"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronRight
                      size={20}
                      className={`text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90 text-emerald-400' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 pt-0 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-neutral-800/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final Conversion CTA */}
        <section className="text-center max-w-4xl mx-auto bg-gradient-to-br from-rose-950/30 via-neutral-900 to-blue-950/30 border border-neutral-800 rounded-3xl p-8 sm:p-12 md:p-16">
          <div className="inline-flex p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4 text-white font-display">
            Take Control of Your Hotel Brand Today
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Don&apos;t wait for the next guest dispute at check-in or another hijacked phone number on Google Maps. Let our brand defense team secure your hotel today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={emergencyWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full font-bold text-base transition-transform hover:scale-105 shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> Chat with Hospitality Defense Desk
            </a>
            <Link
              href="/hotel-fraud-control"
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full font-bold text-base transition-transform hover:scale-105 border border-neutral-700 flex items-center justify-center gap-2"
            >
              Interactive Fraud Scanner <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
