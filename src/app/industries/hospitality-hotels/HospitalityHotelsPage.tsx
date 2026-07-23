// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Star, Search, MapPin, UserX, ArrowRight, LayoutGrid, Zap, TrendingUp, Users, Lock, CheckCircle2, LifeBuoy, BarChart3, CloudLightning } from 'lucide-react';
import HotelHeroImage from '../../../assets/generated/hotel_luxury_lobby_render.png';

const HospitalityHotels = () => {
  const serviceBlocks = [
    {
      title: "Complete Branding & Digital Identity",
      tag: "Visual Storytelling",
      desc: "We don't just design logos; we craft an immersive visual narrative that positions your hotel as a premier destination for luxury travelers.",
      features: [
        "Unique Visual Identity & Luxury Style-guides",
        "High-End Website UI/UX Design",
        "Story-driven Brand Positioning",
        "Copywriting for High-Value Guests"
      ],
      icon: Globe,
      color: "bg-neutral-900",
      textColor: "text-white",
      accent: "bg-blue-500",

      cols: "lg:col-span-2",
      image: HotelHeroImage
    },
    {
      title: "Advanced Fraud Control",
      tag: "Asset Protection",
      desc: "Proactive security measures to protect your hotel's revenue and guest data from sophisticated digital threats and reservation fraud.",
      features: [
        "Real-time Payment Security Audits",
        "Fake Reservation Pattern Detection",
        "Booking Engine Vulnerability Patching",
        "Guest ID Verification Flow Integration"
      ],
      icon: Lock,
      color: "bg-rose-100",
      textColor: "text-rose-900",
      accent: "bg-rose-500",
      cols: "lg:col-span-1"
    },
    {
      title: "Online Reputation Management",
      tag: "Trust Building",
      desc: "Turn your guest reviews into your strongest marketing asset with automated monitoring and expert sentiment analysis across all major platforms.",
      features: [
        "24/7 Tripadvisor & Booking.com Monitoring",
        "Crisis Management & Negative Review Mitigation",
        "Positive Review Harvesting Automation",
        "Social Media Sentiment Analysis"
      ],
      icon: Star,
      color: "bg-amber-100",
      textColor: "text-amber-900",
      accent: "bg-amber-500",
      cols: "lg:col-span-1"
    },
    {
      title: "Anti-Impersonation Stack",
      tag: "Brand Protection",
      desc: "Active defense against rogue entities attempting to steal your guests through phishing, fake websites, or unauthorized social media profiles.",
      features: [
        "Rogue Website Identification & Takedowns",
        "Phishing Site/Domain Monitoring (DMCA)",
        "Unauthorized Channel Removal",
        "Official Profile Verification (Blue Checks)"
      ],
      icon: UserX,
      color: "bg-emerald-50",
      textColor: "text-emerald-900",
      accent: "bg-emerald-600",
      cols: "lg:col-span-2"
    },
    {
      title: "GMB & Hyper-Local SEO",
      tag: "Local Dominance",
      desc: "Dominating local search results so your hotel remains the first choice for travelers searching for accommodations in your specific city or landmark area.",
      features: [
        "Google Maps Ranking (Local Pack #1)",
        "GMB Profile Health & Photo Optimization",
        "Attribute & Amenity Data Cleanup",
        "Map Spam & Fake Competitor Removal"
      ],
      icon: MapPin,
      color: "bg-blue-50",
      textColor: "text-blue-900",
      accent: "bg-blue-600",
      cols: "lg:col-span-1"
    },
    {
      title: "Hospitality-First Organic SEO",
      tag: "Organic Growth",
      desc: "Strategic content and technical SEO tailored for the travel sector to drive zero-commission direct organic traffic to your official site.",
      features: [
        "Travel Intent Keyword Research",
        "Seasonal Landing Page Optimization",
        "Backlink Building from Travel Media",
        "Core Web Vitals for Fast Mobile Browsing"
      ],
      icon: Search,
      color: "bg-purple-50",
      textColor: "text-purple-900",
      accent: "bg-purple-600",
      cols: "lg:col-span-1"
    },
    {
      title: "Guest Experience & Loyalty",
      tag: "Guest Retention",
      desc: "We help you build lasting relationships with your guests through digital touchpoints and personalized loyalty engagement strategies.",
      features: [
        "Loyalty Program Digitalization",
        "Push Notification Guest Engagement",
        "Personalized Guest Welcome Flows",
        "Post-Stay Sentiment Automation"
      ],
      icon: Users,
      color: "bg-emerald-50",
      textColor: "text-emerald-900",
      accent: "bg-emerald-500",
      cols: "lg:col-span-1"
    },
    {
      title: "Direct Booking Acceleration",
      tag: "Revenue Growth",
      desc: "We help you reclaim your revenue from OTAs by optimizing your booking engine and enhancing the direct value proposition for your guests.",
      features: [
        "Booking Engine Conversion Rate Optimization",
        "Loyalty & Direct-Only Offer Strategy",
        "Rate Parity Monitoring & Alerts",
        "Guest Journey Retargeting Campaigns"
      ],
      icon: Zap,
      color: "bg-indigo-900",
      textColor: "text-white",
      accent: "bg-indigo-500",
      cols: "lg:col-span-3"
    }

  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-neutral-50 text-neutral-900 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-emerald-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container-custom relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-100 text-blue-600 font-bold tracking-wide text-xs md:text-sm mb-4 md:mb-6 uppercase">
              Hospitality & Hotels
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.15] md:leading-[1.1] mb-6 md:mb-8 text-neutral-900 font-display">
              Elevate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Guest Journey</span> digitally.
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 mb-8 md:mb-12 font-medium max-w-2xl mx-auto">
              We provide end-to-end digital excellence for the hotel sector, from premium branding to advanced fraud protection and direct booking growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center">
                Check My Hotel's Digital Health <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Impact Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 lg:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] mb-20 md:mb-32 border border-neutral-100 relative overflow-hidden mx-4 md:mx-0"
        >
          <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-blue-500 to-emerald-600"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Direct Bookings Increased", value: "2.5x", icon: Zap, color: "text-blue-500", bg: "bg-blue-50" },
              { label: "Guest Trust Index", value: "98%", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "OTA Dependency Reduced", value: "-35%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
              { label: "Review Rating Avg.", value: "4.8", icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl ${stat.bg} ${stat.color} mb-3 md:mb-4`}>
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-neutral-500 font-bold text-[10px] md:text-sm lg:text-base leading-tight uppercase tracking-wider">{stat.label}</p>
              </div>

            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-16 md:mb-24 px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 md:mb-0 font-display">Sector Specialization</h2>
            <LayoutGrid className="text-neutral-400 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {serviceBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${block.cols} ${block.color} ${block.textColor} rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[400px] relative overflow-hidden group border border-neutral-100 shadow-sm`}
              >
                {block.image && (
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-neutral-900/80 z-10 transition-opacity group-hover:opacity-75" />
                    <img src={block.image} alt={block.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${block.accent} text-white shadow-lg shadow-black/5`}>
                      <block.icon size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${block.textColor === 'text-white' ? 'bg-white/10 text-white' : 'bg-black/5 text-neutral-600'}`}>
                      {block.tag}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl font-black mb-3 font-display leading-tight">{block.title}</h3>
                    <p className={`text-sm md:text-base mb-6 font-medium leading-relaxed ${block.textColor === 'text-white' ? 'text-white/80' : 'text-neutral-700/80'}`}>
                      {block.desc}
                    </p>
                    
                    <ul className="space-y-3 mb-4">
                      {block.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-xs md:text-sm font-bold opacity-90">
                          <CheckCircle2 size={16} className={block.textColor === 'text-white' ? 'text-emerald-400' : 'text-emerald-600'} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* New Process Section: How We Elevate Your Brand */}
        <section className="mb-20 md:mb-32 px-4 md:px-0">
          <div className="bg-neutral-900 text-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] -z-0"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-black mb-8 md:mb-12 font-display text-center md:text-left">The Hospitality Roadmap</h2>
              
              <div className="grid md:grid-cols-3 gap-8 lg:gap-20">
                {[
                  {
                    step: "01",
                    title: "Digital Audit",
                    desc: "We analyze your GMB health, OTA dependency, and brand mentions across the web to identify immediate threats and growth opportunities.",
                    icon: LifeBuoy
                  },
                  {
                    step: "02",
                    title: "Engine Optimization",
                    desc: "We fix your localized SEO and optimize your direct booking engine UX to ensure maximum conversion from search to stay.",
                    icon: CloudLightning
                  },
                  {
                    step: "03",
                    title: "Brand Guard",
                    desc: "Our automated systems monitor and block fake websites while our ORM team builds trust through active review management.",
                    icon: BarChart3
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="text-4xl md:text-6xl font-black text-white/10 mb-4 md:mb-6 font-display">{item.step}</div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 md:p-3 bg-blue-500 rounded-xl">
                        <item.icon size={18} />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                    </div>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10 flex flex-col lg:flex-row items-center gap-8 justify-between">
                <div className="text-center lg:text-left">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">Ready to take direct control of your brand?</h4>
                  <p className="text-sm md:text-base text-white/50 font-medium">Schedule a hospitality-specific audit with our experts today.</p>
                </div>
                <button className="w-full lg:w-auto bg-white text-neutral-900 px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
                  Book Free Hotel Audit
                </button>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default HospitalityHotels;
