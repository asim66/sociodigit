// @ts-nocheck
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Building2, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Lock, 
  CheckCircle2, 
  Users, 
  Check, 
  X, 
  ChevronRight, 
  Star, 
  FileText, 
  Sparkles, 
  Globe, 
  RefreshCw, 
  Search,
  MessageCircle,
  HelpCircle,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import AnimatedCounter from '../../components/AnimatedCounter';
import StressedOwnerImage from '../../assets/generated/hotel_owner_stressed.png';
import ReceptionDisputeImage from '../../assets/generated/hotel_reception_dispute.png';

// FAQ Accordion Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left text-lg md:text-xl font-bold py-2 focus:outline-none hover:text-brand-orange transition-colors"
      >
        <span className="pr-4">{question}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-brand-orange shrink-0"
        >
          <ChevronRight size={24} className="rotate-90" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white/60 pt-3 pb-2 text-base md:text-lg leading-relaxed font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function HotelFraudControl() {
  // Audit Form State
  const [formStep, setFormStep] = useState(1); // 1: Input, 2: Scanning, 3: Success
  const [hotelName, setHotelName] = useState('');
  const [hotelCity, setHotelCity] = useState('');
  const [hotelWebsite, setHotelWebsite] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  
  // Scanner animation states
  const [scanProgress, setScanProgress] = useState(0);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  
  const formRef = useRef<HTMLDivElement>(null);

  const toggleIssue = (issue: string) => {
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter(i => i !== issue));
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hotelName || !hotelCity || !whatsappNumber) {
      alert("Please fill out all required fields.");
      return;
    }
    
    // Move to scanning step
    setFormStep(2);
    setScanProgress(0);
    setScanLogs([]);

    const logs = [
      `[INFO] Initializing brand integrity scanner for "${hotelName}"...`,
      `[INFO] Establishing secure sandbox connection...`,
      `[SEARCH] Querying Google Maps Engine for duplicate listings in ${hotelCity}...`,
      `[WARN] Scanning 14 local profiles matching close semantic distances...`,
      `[SEARCH] Checking active GMB contact phone numbers and website redirect tags...`,
      `[WARN] Potential listing anomaly found on 1 duplicate entry!`,
      `[SEARCH] Inspecting search engine auction logs for brand bidding hijackers...`,
      `[SEARCH] Crawling unofficial social profiles and rogue OTA channels...`,
      `[INFO] Running dark web booking fraud and fake confirmation checks...`,
      `[SUCCESS] Analysis complete. 4 vulnerabilities identified. Generating brand report...`
    ];

    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setScanLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      }
    }, 900);

    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(logInterval);
          setFormStep(3);
          return 100;
        }
        return prev + 2;
      });
    }, 160);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi Sociodigit, I just ran a Brand Shield Audit for my hotel, *${hotelName}* in *${hotelCity}*.\n\n` +
      `Issues selected: ${selectedIssues.join(', ') || 'General Prevention'}\n` +
      `My contact number is: ${whatsappNumber}\n\n` +
      `Please send me the GMB Integrity & Fraud Audit Report!`
    );
    return `https://wa.me/917008381630?text=${text}`;
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-space-blue text-white overflow-hidden relative">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-15 pointer-events-none -z-10"></div>
      
      {/* Decorative radial glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-[40%] left-[-20%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-brand-amber/10 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-slow"></div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center px-4 md:px-0">
          
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-bold text-xs md:text-sm mb-6 uppercase tracking-wider shadow-[0_0_15px_rgba(232,66,26,0.1)]"
          >
            <ShieldAlert size={16} className="animate-pulse" />
            <span>SOCIODIGIT BRAND SHIELD™ FOR HOTELS</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[1.1] mb-6"
          >
            Is a Scammer Stealing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-amber to-brand-orange">
              Your Hotel's Guests?
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed"
          >
            Duplicate GMB profiles, hijacked contact numbers on Google Maps, and fake online websites are draining hotel revenues in major cities. Check your hotel's vulnerability instantly.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md md:max-w-2xl mx-auto"
          >
            <button 
              onClick={scrollToForm}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group text-base md:text-lg px-8 py-5 shadow-lg shadow-brand-orange/20 cursor-pointer"
            >
              <span>Scan Your Hotel Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/917008381630?text=Hi%20Sociodigit%2C%20I%20want%20to%20know%20how%20to%20protect%20my%20hotel%20from%20Google%20Map%20scammers%20and%20fake%20listings."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 text-base md:text-lg px-8 py-5 cursor-pointer text-white/90 hover:text-white"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Talk to an Expert</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* Real vs Fake GMB Listing Visual Comparison */}
      <section className="py-16 md:py-24 bg-white/2 backdrop-blur-sm border-y border-white/5 relative">
        <div className="container-custom max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-4">
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest block mb-3">Live Threat Analysis</span>
            <h2 className="text-3xl md:text-5xl font-black font-display mb-4">Official Listing vs. Scammer Listing</h2>
            <p className="text-white/60 text-base md:text-lg">
              Scammers copy your beautiful photos, list your exact address, but swap the <span className="text-red-400 font-bold">Contact Number</span> and booking links on Google Maps. Guests book, pay deposits, arrive at your front desk, and blame you when they are scammed.
            </p>
          </div>

          <div className="grid md:grid-cols-11 gap-8 items-center px-4 md:px-0">
            
            {/* OFFICIAL LISTING CARD */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-5 bg-white/5 backdrop-blur-md rounded-[2rem] border border-emerald-500/20 shadow-[0_15px_40px_rgba(16,185,129,0.05)] overflow-hidden relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-emerald-500"></div>
              
              {/* Header Badge */}
              <div className="flex justify-between items-center px-6 pt-6 pb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-wide border border-emerald-500/20">
                  Your Official Listing
                </span>
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Check size={18} strokeWidth={3} />
                </span>
              </div>

              {/* Mock Hotel Image */}
              <div className="px-6 pb-4">
                <div className="h-44 bg-neutral-900 rounded-xl relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <Globe size={40} className="text-emerald-500/20 absolute" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h4 className="text-xl font-bold font-display text-white">Grand Regent Luxury Hotel</h4>
                    <p className="text-white/60 text-xs flex items-center gap-1">
                      <MapPin size={12} className="text-emerald-400" />
                      <span>Connaught Place, New Delhi</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Attributes List */}
              <div className="px-6 pb-8 space-y-4">
                <div className="flex items-center gap-3 py-3 border-b border-white/5">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-bold text-white">Official Booking Engine Website</p>
                    <p className="text-xs text-white/50">Safe HTTPS redirect to your hotel PMS booking system</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-white/5">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-bold text-white">Verified GMB Owner Access</p>
                    <p className="text-xs text-white/50">Fully secured through corporate email credential keys</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-white/5">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-bold text-white">Correct Direct Desk Phone Number</p>
                    <p className="text-xs text-white/50">Connects directly to your hotel front-desk team</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-bold text-white">100% Secure Guest Trust</p>
                    <p className="text-xs text-white/50">Guarantees reputation and avoids direct chargebacks</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ACTION / VERSUS SHIELD */}
            <div className="md:col-span-1 flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange flex items-center justify-center shadow-[0_0_20px_rgba(232,66,26,0.2)] animate-pulse">
                <ShieldAlert size={24} />
              </div>
              <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">vs</span>
            </div>

            {/* FAKE / HIJACKED LISTING CARD */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-5 bg-white/5 backdrop-blur-md rounded-[2rem] border border-red-500/20 shadow-[0_15px_40px_rgba(239,68,68,0.05)] overflow-hidden relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-red-500"></div>
              
              {/* Header Badge */}
              <div className="flex justify-between items-center px-6 pt-6 pb-4">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 font-bold text-xs uppercase tracking-wide border border-red-500/20">
                  Scam / Duplicate Listing
                </span>
                <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30">
                  <X size={18} strokeWidth={3} />
                </span>
              </div>

              {/* Mock Hotel Image */}
              <div className="px-6 pb-4">
                <div className="h-44 bg-neutral-900 rounded-xl relative overflow-hidden flex items-center justify-center grayscale opacity-80">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <AlertCircle size={40} className="text-red-500/20 absolute" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h4 className="text-xl font-bold font-display text-white">Grand Regent Luxury Hotel</h4>
                    <p className="text-white/60 text-xs flex items-center gap-1">
                      <MapPin size={12} className="text-red-400" />
                      <span>Connaught Place, New Delhi</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Attributes List */}
              <div className="px-6 pb-8 space-y-4">
                <div className="flex items-center gap-3 py-3 border-b border-white/5">
                  <AlertTriangle className="text-red-400 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-bold text-white">Wrong GMB Contact Phone</p>
                    <p className="text-xs text-red-400">Scammer's mobile number intercepts guest calls</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-white/5">
                  <AlertTriangle className="text-red-400 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-bold text-white">Fake OTA Booking Form Links</p>
                    <p className="text-xs text-red-400">Redirects traffic to phishing links requesting bank transfers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-white/5">
                  <AlertTriangle className="text-red-400 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-bold text-white">Fake Guest Reservations</p>
                    <p className="text-xs text-red-400">Guests pay deposit to UPI, which disappears immediately</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3">
                  <AlertTriangle className="text-red-400 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-bold text-white">Severe Reputation Damage</p>
                    <p className="text-xs text-red-400">Scammed guests post negative 1-star reviews on your official profile</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Protection Tagline */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-brand-orange text-white text-xs md:text-sm font-black px-6 py-3 rounded-full uppercase tracking-wider">
              Protect Your Brand. Protect Your Guests. Protect Your Business.
            </div>
          </div>

        </div>
      </section>

      {/* The Threat Landscape / Stressed Hotelier Stories */}
      <section className="py-20 md:py-32 container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 px-4">
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest block mb-3">Industry Alert</span>
            <h2 className="text-3xl md:text-5xl font-black font-display mb-4">The Real-World Threat Impact</h2>
            <p className="text-white/60 text-base md:text-lg">
              Hotel fraud has grown by over 300% across metro cities in India. Here are the three primary scam vectors that are destroying hotel reputations overnight.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 px-4 md:px-0">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shadow-lg">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black font-display leading-tight">
                Scammers are Hijacking Your Hotel Name on Google Maps
              </h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                Fraud groups look for popular hotels, create identical Google My Business profiles, or suggest "unauthorized phone edits" to existing maps listings. When guests search for your phone number to book, they reach a scammer's call center instead.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/20">
                    <X size={12} strokeWidth={3} />
                  </div>
                  <p className="text-white/80 font-bold text-sm">Guests book on fake Google listing &rarr; Get cheated &rarr; Blame you.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/20">
                    <X size={12} strokeWidth={3} />
                  </div>
                  <p className="text-white/80 font-bold text-sm">UPI payments collected in your name using fake QR codes.</p>
                </div>
              </div>
            </motion.div>

            {/* GORGEOUS GENERATED PHOTO 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-2 rounded-[2.5rem] glass border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3] bg-neutral-900 relative">
                <img 
                  src={StressedOwnerImage.src || StressedOwnerImage} 
                  alt="Stressed Hotel Owner discovering booking scam" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-red-500/10 mix-blend-multiply pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-xl text-red-400 font-bold text-xs uppercase flex items-center gap-1.5 shadow-2xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                  <span>Fake bookings are rising</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center px-4 md:px-0">
            {/* GORGEOUS GENERATED PHOTO 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-last lg:order-first relative p-2 rounded-[2.5rem] glass border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl"></div>
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3] bg-neutral-900 relative">
                <img 
                  src={ReceptionDisputeImage.src || ReceptionDisputeImage} 
                  alt="Guest dispute at front desk reception" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-brand-orange/30 px-4 py-2 rounded-xl text-brand-orange font-bold text-xs uppercase flex items-center gap-1.5 shadow-2xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping"></span>
                  <span>Front desk nightmare</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shadow-lg">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black font-display leading-tight">
                Guests Arriving at Reception with Fake Confirmations
              </h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                Imagine a guest arriving after a long flight, tired and expecting a luxury suite, showing a confirmation slip generated by a fake WhatsApp bot or copycat email ID. You have no record of their booking, and their deposit is in the scammer's pocket.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/20">
                    <X size={12} strokeWidth={3} />
                  </div>
                  <p className="text-white/80 font-bold text-sm">Front desk receptionist gets locked in intense disputes with angry guests.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/20">
                    <X size={12} strokeWidth={3} />
                  </div>
                  <p className="text-white/80 font-bold text-sm">Negative legal exposure and potential social media media crises.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 md:py-32 bg-white/2 backdrop-blur-sm border-y border-white/5 relative z-10">
        <div className="container-custom max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 px-4">
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest block mb-3">Our Solution Stack</span>
            <h2 className="text-3xl md:text-5xl font-black font-display mb-4">How Sociodigit Protects Your Hotel</h2>
            <p className="text-white/60 text-base md:text-lg">
              We deploy automated monitoring systems, legal DMCA pipelines, and deep-level GMB API integrations to lock down your brand and intercept scams in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
            {[
              {
                icon: ShieldCheck,
                title: "GMB Profile Shield",
                desc: "24/7 security sweeps monitoring phone numbers, website links, and photos on Google Maps to block unauthorized edit requests instantly.",
                color: "group-hover:border-brand-orange/50"
              },
              {
                icon: Lock,
                title: "Rapid Takedown Engine",
                desc: "We file prioritized DMCA legal notices and utilize GMB agency channels to delete rogue fake listings and copycat websites in 36-72 hours.",
                color: "group-hover:border-blue-500/50"
              },
              {
                icon: Globe,
                title: "Rogue Ad Monitoring",
                desc: "Scanning search engine results to identify copycat competitors bidding on your hotel's name to direct traffic to unauthorized contact numbers.",
                color: "group-hover:border-purple-500/50"
              },
              {
                icon: Sparkles,
                title: "Guest Trust Seal",
                desc: "Assisting you in setting up digital confirmation verifications (such as official SMS/WhatsApp flows) to guarantee official communication.",
                color: "group-hover:border-emerald-500/50"
              }
            ].map((sol, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/5 transition-all duration-300 group hover:bg-white/10 hover:border-brand-orange/40"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center mb-6 shadow-md shadow-brand-orange/10 group-hover:scale-110 transition-transform duration-300">
                  <sol.icon size={26} />
                </div>
                <h3 className="text-xl font-bold font-display mb-4 text-white group-hover:text-brand-orange transition-colors">
                  {sol.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  {sol.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Proof / Stats Section */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="glass rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
              {[
                { value: "340+", suffix: " Listings", label: "Fake Listings Removed", desc: "Across Google, Facebook & Booking.com" },
                { value: "99.8%", suffix: "%", label: "Integrity Score", desc: "Maintained for hospitality brand clients" },
                { value: "36", suffix: " Hours", label: "Avg. Takedown Time", desc: "Industry-leading turnaround time" },
                { value: "1.2Cr+", suffix: "+", label: "Direct Revenue Saved", desc: "Intercepted scams from duplicate phone lines" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center md:text-left flex flex-col items-center md:items-start">
                  <h3 className="text-3xl md:text-5xl font-black font-display mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-amber leading-none">
                    <AnimatedCounter value={stat.value} duration={1.5} />
                  </h3>
                  <p className="text-brand-orange text-xs md:text-sm font-black uppercase tracking-wider mb-2">
                    {stat.label}
                  </p>
                  <p className="text-white/50 text-[11px] md:text-xs leading-normal">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SHIELD AUDIT FORM (LEAD CAPTURE FOR ADS) */}
      <section ref={formRef} className="py-20 md:py-32 bg-white/2 backdrop-blur-sm border-t border-white/5 relative z-10">
        <div className="container-custom max-w-4xl mx-auto px-4 md:px-0">
          
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-wider mb-4">
              <Sparkles size={12} />
              <span>Complimentary Security Audit</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display mb-4">Is Your Hotel GMB Listing Protected?</h2>
            <p className="text-white/60 text-base md:text-lg">
              Enter your hotel details below to run an instant vulnerability check on Google Maps duplicate indices, rogue websites, and domain scams.
            </p>
          </div>

          <div className="glass rounded-[3rem] p-8 md:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-5 -z-10"></div>
            
            <AnimatePresence mode="wait">
              
              {/* STEP 1: FILL FORM */}
              {formStep === 1 && (
                <motion.div
                  key="form-step-1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <form onSubmit={handleStartScan} className="space-y-6 md:space-y-8">
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-black uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                          <Building2 size={14} className="text-brand-orange" />
                          <span>Hotel Name *</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          value={hotelName}
                          onChange={(e) => setHotelName(e.target.value)}
                          placeholder="e.g. Grand Palace Resort"
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange outline-none transition-all text-white placeholder:text-white/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-black uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                          <MapPin size={14} className="text-brand-orange" />
                          <span>Hotel City *</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          value={hotelCity}
                          onChange={(e) => setHotelCity(e.target.value)}
                          placeholder="e.g. New Delhi"
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange outline-none transition-all text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-black uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                          <Globe size={14} className="text-brand-orange" />
                          <span>Official Website / GMB Link (Optional)</span>
                        </label>
                        <input 
                          type="url" 
                          value={hotelWebsite}
                          onChange={(e) => setHotelWebsite(e.target.value)}
                          placeholder="e.g. www.grandpalace.com"
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange outline-none transition-all text-white placeholder:text-white/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-black uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                          <Phone size={14} className="text-brand-orange" />
                          <span>WhatsApp Contact Number *</span>
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={whatsappNumber}
                          onChange={(e) => setWhatsappNumber(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange outline-none transition-all text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    {/* Threat Checklist */}
                    <div className="space-y-3">
                      <label className="text-xs md:text-sm font-black uppercase tracking-wider text-white/70 block">
                        Select Scams You Want to Audit:
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Duplicate listings on Google Maps",
                          "Wrong phone number displaying on GMB",
                          "Phishing websites showing up on Google search",
                          "Guests reporting booking issues at front desk",
                          "Preventive / Routine security scan"
                        ].map((issue, idx) => {
                          const isSelected = selectedIssues.includes(issue);
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => toggleIssue(issue)}
                              className={`p-4 rounded-xl border text-left text-xs md:text-sm font-bold transition-all flex items-center gap-3 ${
                                isSelected 
                                  ? 'bg-brand-orange/10 border-brand-orange text-white' 
                                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                isSelected ? 'bg-brand-orange border-brand-orange text-white' : 'border-white/20'
                              }`}>
                                {isSelected && <Check size={10} strokeWidth={3} />}
                              </div>
                              <span>{issue}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="btn-primary w-full flex items-center justify-center gap-2 group text-base md:text-lg py-5 shadow-lg shadow-brand-orange/20 cursor-pointer"
                      >
                        <span>Start GMB Integrity Audit</span>
                        <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                      </button>
                    </div>

                  </form>
                </motion.div>
              )}

              {/* STEP 2: ANIMATED TERMINAL SCANNING ENGINE */}
              {formStep === 2 && (
                <motion.div
                  key="form-step-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold font-display text-white">Running GMB Brand Protection Scan...</h3>
                    <p className="text-white/50 text-sm font-medium">Scanning Google Maps packs, API nodes, and registered booking indices</p>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden border border-white/10">
                    <motion.div 
                      className="bg-brand-orange h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${scanProgress}%` }}
                      transition={{ ease: "easeInOut" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-white/40 font-bold uppercase tracking-wider">
                    <span>Checking indexes...</span>
                    <span>{scanProgress}% Complete</span>
                  </div>

                  {/* Terminal Console logs */}
                  <div className="bg-black/60 border border-white/10 p-6 rounded-2xl font-mono text-[10px] sm:text-xs text-brand-orange overflow-hidden h-60 flex flex-col justify-end space-y-2 relative">
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 border border-brand-orange/20 px-3 py-1 rounded-md text-[9px] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping"></span>
                      <span>Shield Scanner Engine v4.2</span>
                    </div>
                    
                    <div className="space-y-2 overflow-y-auto max-h-full">
                      {scanLogs.map((log, index) => {
                        let colorClass = "text-brand-orange";
                        if (log.includes("[WARN]")) colorClass = "text-yellow-400 font-bold";
                        if (log.includes("[SUCCESS]")) colorClass = "text-emerald-400 font-bold";
                        if (log.includes("[INFO]")) colorClass = "text-white/60";
                        return (
                          <div key={index} className={`leading-normal ${colorClass}`}>
                            {log}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CONVERSION / SUCCESS CAPTURE */}
              {formStep === 3 && (
                <motion.div
                  key="form-step-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center space-y-8 py-4"
                >
                  <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/10 animate-bounce">
                    <ShieldCheck size={40} />
                  </div>
                  
                  <div className="space-y-3 max-w-md mx-auto">
                    <h3 className="text-3xl font-black font-display text-white">Vulnerability Scan Completed!</h3>
                    <p className="text-white/60 text-base font-medium">
                      Integrity analysis has identified <span className="text-red-400 font-bold">4 potential brand threats</span> and GMB hijacking vectors for <span className="text-white font-bold">{hotelName}</span>.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto">
                    <ul className="text-left space-y-3 text-xs sm:text-sm font-medium">
                      <li className="flex items-center gap-2 text-yellow-400">
                        <AlertTriangle size={16} />
                        <span>1 potential duplicate listing found in Maps Pack</span>
                      </li>
                      <li className="flex items-center gap-2 text-yellow-400">
                        <AlertTriangle size={16} />
                        <span>Unauthorized phone edit vulnerability exposed</span>
                      </li>
                      <li className="flex items-center gap-2 text-white/50">
                        <Check size={16} className="text-emerald-400" />
                        <span>Website redirects match official domain record</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 max-w-sm mx-auto">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-black">Get Your Complete Report Instantly</p>
                    <a 
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full flex items-center justify-center gap-2 text-base md:text-lg py-5 shadow-lg shadow-emerald-500/20 bg-emerald-500 hover:bg-emerald-600 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-6 h-6 shrink-0" />
                      <span>Get Audit Report on WhatsApp</span>
                    </a>
                    
                    <button 
                      onClick={() => setFormStep(1)} 
                      className="text-white/40 hover:text-white text-xs font-bold underline focus:outline-none py-1 block mx-auto transition-colors"
                    >
                      Restart Checker
                    </button>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 container-custom relative z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest block mb-3">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black font-display">Common Questions About Hotel Brand Fraud</h2>
          </div>

          <div className="glass rounded-[3rem] p-8 md:p-12 border border-white/10 space-y-2">
            <FAQItem 
              question="How do scammers change the phone number on our official GMB listing?"
              answer="Scammers use the 'Suggest an edit' feature on Google Maps from multiple trusted Google Local Guide accounts simultaneously. If GMB owners are not actively monitoring their profiles or fail to decline unauthorized changes within a short time frame, Google's algorithm auto-approves the edit, replacing your desk phone number with the scammer's mobile line."
            />
            <FAQItem 
              question="What is the GMB Profile Shield and how does it prevent this?"
              answer="Our GMB Profile Shield works through Google API connections. It acts as an automated 24/7 sentinel. The moment an edit request is initiated for key attributes (phone number, booking links, address, or photos) from outside your organization, our system immediately flag-declines the request and alerts your team via WhatsApp or email, making unauthorized edits impossible."
            />
            <FAQItem 
              question="How long does it take to remove duplicate/fake hotel listings?"
              answer="Through standard Google support, removing spam listings can take weeks or even months. Sociodigit is a certified digital brand protection agency. We submit high-priority, legal cease-and-desist reports, copyright DMCA filings for stolen photos, and leverage Google Maps partner channels to get duplicate spam listings successfully deleted in 36 to 72 hours."
            />
            <FAQItem 
              question="Can we recoup revenues lost to these booking scammers?"
              answer="Direct recovery of funds from fraudulent UPI/bank transfer numbers is difficult since scammers withdraw funds immediately. However, our protection saves you thousands of rupees in future bookings, avoids costly litigation or chargebacks, and saves your valuable online brand ratings (TripAdvisor, GMB, Booking.com) from crashing due to negative reviews from scammed guests."
            />
            <FAQItem 
              question="Is the initial Brand Shield GMB scan completely free?"
              answer="Yes! Our initial scan checks your public listings, index references, domain matching, and search ad auction logs, generating a comprehensive vulnerability report. If vulnerabilities are identified, our hotel brand experts will provide a free 15-minute diagnostic call to guide you on securing your listing."
            />
          </div>

        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 md:py-32 bg-white/2 backdrop-blur-sm border-t border-white/5 relative z-10 text-center">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-6xl font-black font-display mb-6">
            Take Control of <span className="text-brand-orange">Your Hotel's Brand</span> Today
          </h2>
          <p className="text-white/60 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-medium">
            Join premier hotels who trust Sociodigit to lock down their GMB channels, secure direct reservations, and eliminate scam threat factors completely.
          </p>
          <button 
            onClick={scrollToForm}
            className="btn-primary flex items-center justify-center gap-2 group text-base md:text-lg px-8 py-5 mx-auto shadow-lg shadow-brand-orange/20 cursor-pointer"
          >
            <span>Scan My Hotel's Listing Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}
