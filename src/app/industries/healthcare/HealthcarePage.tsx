"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartPulse, Stethoscope, Activity, FileText, ArrowRight, ShieldCheck, 
  Lock, Server, Cpu, Database, CheckCircle2, ChevronRight, HelpCircle, 
  Clock, Phone, Sparkles, Building2, Eye, FileSpreadsheet, Share2, 
  ShieldAlert, Zap, Check, Send, Award, Layers, Globe
} from 'lucide-react';
import Image from 'next/image';
import HealthcareImage from '../../../assets/generated/healthcare_portal_render_1773750748161.png';

const healthcarePillars = [
  {
    icon: <Stethoscope className="w-7 h-7 text-cyan-400" />,
    badge: "Virtual Care",
    title: "Telemedicine & Remote Patient Monitoring",
    desc: "HD WebRTC video consultation platforms with integrated appointment scheduling, digital prescriptions, patient consent forms, and medical IoT device data sync.",
    features: [
      "Encrypted HD Video Consultations",
      "e-Prescription & Pharmacy API Integration",
      "IoT Vital Signs Device Sync",
      "Multi-Specialty Clinical Triage"
    ]
  },
  {
    icon: <Database className="w-7 h-7 text-indigo-400" />,
    badge: "System Interop",
    title: "EHR & EMR System Interoperability",
    desc: "Seamless integration across hospital EHRs and clinic databases. Unified patient charts, automated sync, and real-time clinical data access.",
    features: [
      "Standardized Data Connectors",
      "Automated Medical Code Mapping",
      "Bi-Directional Patient Record Sync",
      "Legacy Database Integration"
    ]
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
    badge: "Patient First",
    title: "Patient Portals & Mobile Apps",
    desc: "Intuitive web and mobile applications designed for seamless patient registration, medical history tracking, lab test results, and direct care team messaging.",
    features: [
      "AES-256 Data & Storage Encryption",
      "Multi-Factor & Biometric Login",
      "Lab Results & Health History Hub",
      "Patient Engagement Notification Engine"
    ]
  },
  {
    icon: <Cpu className="w-7 h-7 text-brand-orange" />,
    badge: "Smart Analytics",
    title: "Medical Analytics & Decision Support",
    desc: "Intelligent analytics dashboards for clinical risk evaluation, patient flow optimization, diagnostic report parsing, and hospital capacity management.",
    features: [
      "Predictive Patient Care Insights",
      "Medical Image & Scan Processing",
      "Automated Lab Report Data Parsing",
      "Clinical Workflow Automation"
    ]
  },
  {
    icon: <Server className="w-7 h-7 text-purple-400" />,
    badge: "Cloud Imaging",
    title: "Medical Imaging & Cloud Storage",
    desc: "Web-native medical image viewers, cloud archives, and ultra-fast scan retrieval pipelines for radiology, ultrasound, and cardiology diagnostics.",
    features: [
      "Web-Based Medical Image Viewer",
      "High-Performance Cloud Archiving",
      "Radiology & Scan Workflow Sync",
      "Fast Multi-Device Render Delivery"
    ]
  },
  {
    icon: <Building2 className="w-7 h-7 text-rose-400" />,
    badge: "Hospital Ops",
    title: "Hospital Management Systems (HIMS)",
    desc: "Comprehensive software engines managing inpatient admissions, bed allocation, operating theater scheduling, inventory tracking, and billing.",
    features: [
      "Inpatient & Outpatient Management",
      "Integrated Billing & Claims Engine",
      "Pharmacy & Medical Inventory Sync",
      "Centralized Multi-Location Dashboard"
    ]
  }
];

const architectureMatrix = [
  {
    title: "End-to-End Data Encryption",
    desc: "All health data and communication streams are protected with advanced encryption standards at rest and in transit.",
    icon: <Lock className="w-6 h-6 text-brand-orange" />
  },
  {
    title: "Granular Access Control",
    desc: "Role-based access policies ensuring medical records are accessible strictly to authorized clinical personnel.",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "System Audit & Activity Logging",
    desc: "Comprehensive system logs tracking record views, updates, and system events to maintain operational integrity.",
    icon: <FileText className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "99.99% Multi-Region Uptime",
    desc: "High-availability cloud architecture with automated failover nodes guaranteeing zero downtime for clinical care.",
    icon: <Server className="w-6 h-6 text-indigo-400" />
  }
];

const techPillars = [
  { name: "HD Video Consultations", desc: "Low-latency WebRTC engines" },
  { name: "Real-Time Data Sync", desc: "Bi-directional EMR connectors" },
  { name: "Cross-Platform Apps", desc: "iOS, Android & Web experience" },
  { name: "Cloud Analytics", desc: "Clinical insights & reporting" },
  { name: "IoT Device Connect", desc: "Wearable & vital monitor sync" },
  { name: "High Availability", desc: "99.99% infrastructure uptime" }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Workflow Planning",
    duration: "Week 1",
    desc: "Deep analysis of your clinical operations, patient workflows, legacy system database schemas, and feature roadmap.",
    color: "text-brand-orange",
    border: "border-brand-orange/40",
    bg: "bg-brand-orange/10"
  },
  {
    step: "02",
    title: "UI/UX Design & Architecture",
    duration: "Weeks 2-3",
    desc: "Design accessible, patient-friendly interfaces and model real-time data structures for fast, reliable system performance.",
    color: "text-cyan-400",
    border: "border-cyan-400/40",
    bg: "bg-cyan-400/10"
  },
  {
    step: "03",
    title: "Agile Development & Encryption",
    duration: "Weeks 4-10",
    desc: "Sprint-based software development with secure data architecture, WebRTC video engines, and real-time database indexing.",
    color: "text-indigo-400",
    border: "border-indigo-400/40",
    bg: "bg-indigo-400/10"
  },
  {
    step: "04",
    title: "Systems Integration & Testing",
    duration: "Weeks 10-12",
    desc: "Integration with hospital databases, comprehensive security testing, automated quality assurance, and user acceptance testing.",
    color: "text-emerald-400",
    border: "border-emerald-400/40",
    bg: "bg-emerald-400/10"
  },
  {
    step: "05",
    title: "Deployment & Continuous Support",
    duration: "Ongoing",
    desc: "Zero-downtime cloud launch, continuous system monitoring, performance optimization, and 24/7 technical support.",
    color: "text-rose-400",
    border: "border-rose-400/40",
    bg: "bg-rose-400/10"
  }
];

const careDomains = [
  {
    title: "Hospital Networks & Clinics",
    desc: "Centralized management systems, multi-specialty patient charts, bed inventory tracking, and billing integration.",
    icon: "🏥"
  },
  {
    title: "Telehealth & Digital Clinics",
    desc: "Custom branded mobile apps for iOS & Android with virtual waiting rooms, digital prescriptions, and easy payment setup.",
    icon: "📱"
  },
  {
    title: "Diagnostic & Pathology Labs",
    desc: "Lab information systems with sample barcode tracking, automated report generation, and equipment data syncing.",
    icon: "🔬"
  },
  {
    title: "Medical IoT & Health Device Vendors",
    desc: "Secure cloud backends for connected health monitoring devices with real-time vital tracking and alert triggers.",
    icon: "⌚"
  }
];

const faqs = [
  {
    q: "What type of healthcare software does Sociodigit build?",
    a: "We design and build custom telemedicine platforms, patient engagement portals, EMR/EHR integrations, laboratory management software, scheduling portals, and comprehensive hospital management engines."
  },
  {
    q: "Can you integrate custom software with legacy hospital EMR databases?",
    a: "Yes. We engineer bi-directional APIs and custom data bridges that connect modern web or mobile applications seamlessly with existing clinic database systems."
  },
  {
    q: "Can you build custom telemedicine mobile apps for iOS and Android?",
    a: "Yes. We build high-definition video consultation apps with integrated appointment booking, digital prescriptions, in-app messaging, automated reminders, and device data synchronization."
  },
  {
    q: "How long does it take to launch a custom healthcare platform?",
    a: "A custom telemedicine or patient portal app typically launches in 8 to 12 weeks. Comprehensive multi-specialty enterprise platforms or hospital management suites take 14 to 20 weeks."
  },
  {
    q: "Who owns the source code and IP after development?",
    a: "You retain 100% full ownership of all source code, software architecture, intellectual property, and design assets upon project completion."
  },
  {
    q: "How do you handle medical imaging files in web and mobile apps?",
    a: "We implement fast, web-based image viewers and cloud archiving solutions capable of rendering multi-format diagnostic scans smoothly across desktop, tablet, and mobile devices."
  }
];

const HealthcarePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  return (
    <div className="pt-28 md:pt-32 bg-space-blue text-white selection:bg-brand-orange selection:text-white min-h-screen">

      {/* ── HERO SECTION ── */}
      <section className="pt-4 md:pt-8 pb-16 md:pb-24 relative overflow-hidden grid-bg">
        <div className="glow-bg top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/15 blur-[160px] -z-10" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-md mb-6">
                <HeartPulse size={16} className="text-brand-orange animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Next-Gen Digital Health &amp; Software Engineering
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
                Engineering <span className="gradient-text">Human-Centric</span> HealthTech Systems.
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                We build intuitive patient portals, WebRTC telemedicine platforms, real-time EHR integrations, and intelligent clinical software that transform healthcare delivery.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-12">
                <a href="#audit-form" className="btn-primary inline-flex items-center space-x-2 text-base md:text-lg px-7 py-3.5">
                  <Sparkles size={18} />
                  <span>Get Free HealthTech Consultation</span>
                </a>
                <a href="tel:+917008381630" className="btn-outline inline-flex items-center space-x-2 text-base md:text-lg px-7 py-3.5">
                  <Phone size={18} />
                  <span>Call +91 7008381630</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                {[
                  { val: "99.99%", label: "Cloud Uptime", color: "text-emerald-400" },
                  { val: "10M+", label: "Patient Records", color: "text-brand-orange" },
                  { val: "< 100ms", label: "Sync Latency", color: "text-cyan-400" },
                  { val: "24/7", label: "Reliability", color: "text-indigo-400" }
                ].map((s) => (
                  <div key={s.label} className="text-center p-2">
                    <div className={`text-xl md:text-2xl font-display font-bold ${s.color} mb-0.5`}>{s.val}</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative glass rounded-[2.5rem] border border-white/10 p-3 shadow-2xl overflow-hidden neon-border">
                <Image 
                  src={HealthcareImage} 
                  alt="Sociodigit Healthcare Solutions Portal Interface" 
                  className="rounded-[2rem] object-cover w-full h-[380px] md:h-[480px]"
                  priority
                />
                
                {/* Overlay Floating Pill Card 1 */}
                <div className="absolute top-8 left-6 glass px-4 py-3 rounded-2xl border-white/10 shadow-xl flex items-center space-x-3 backdrop-blur-md">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-emerald-400" size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">System Performance</p>
                    <p className="text-xs font-semibold text-white">Encrypted &amp; Reliable</p>
                  </div>
                </div>

                {/* Overlay Floating Pill Card 2 */}
                <div className="absolute bottom-8 right-6 glass px-4 py-3 rounded-2xl border-white/10 shadow-xl flex items-center space-x-3 backdrop-blur-md">
                  <div className="w-9 h-9 rounded-xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center shrink-0">
                    <Activity className="text-brand-orange" size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">Data Pipeline</p>
                    <p className="text-xs font-semibold text-white">Real-Time EMR Sync</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT STRIP ── */}
      <section className="py-8 border-y border-white/5 bg-white/[0.015]">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {techPillars.map((b) => (
              <div key={b.name} className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.02] flex items-center space-x-2.5 text-white/80">
                <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block leading-none text-white">{b.name}</span>
                  <span className="text-[10px] text-white/40 block mt-0.5">{b.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE HEALTHCARE SOLUTIONS GRID ── */}
      <section className="py-20 md:py-28 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <Award size={15} />
              <span>Full-Spectrum HealthTech Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Healthcare Software Solutions <span className="gradient-text">Engineered for Scale</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              From telemedicine platforms to multi-hospital health systems, we design intuitive digital software across the care continuum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {healthcarePillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass p-7 md:p-8 rounded-3xl border border-white/10 hover:border-brand-orange/40 transition-all duration-300 group flex flex-col justify-between"
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
                  <h3 className="text-xl font-display font-bold mb-3">{pillar.title}</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <ul className="space-y-2">
                    {pillar.features.map((f) => (
                      <li key={f} className="flex items-start space-x-2 text-xs text-white/80">
                        <CheckCircle2 size={14} className="text-brand-orange mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE & SECURITY MATRIX ── */}
      <section className="py-20 md:py-28 bg-white/[0.015] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
                <Lock size={15} />
                <span>Robust Infrastructure</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Secure &amp; Scalable <span className="gradient-text">Software Architecture</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Protecting medical data requires high-grade software design. We build multi-layered security controls, automated logging, and resilient cloud boundaries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3.5 rounded-2xl glass border border-white/10">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                  <span className="text-sm text-white/90 font-medium">Encrypted Storage &amp; Secure Cloud Instances</span>
                </div>
                <div className="flex items-center space-x-3 p-3.5 rounded-2xl glass border border-white/10">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                  <span className="text-sm text-white/90 font-medium">Multi-Layered Automated Threat Protection</span>
                </div>
                <div className="flex items-center space-x-3 p-3.5 rounded-2xl glass border border-white/10">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                  <span className="text-sm text-white/90 font-medium">Seamless API Connectivity with Existing Databases</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {architectureMatrix.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-2xl border border-white/10 hover:border-brand-orange/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CARE SUB-SECTORS WE SERVE ── */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <Building2 size={15} />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Care Domains <span className="gradient-text">We Empower</span>
            </h2>
            <p className="text-base md:text-lg text-white/60">
              Customized software architecture aligned with the operational needs of your healthcare vertical.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careDomains.map((cd, i) => (
              <motion.div
                key={cd.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass p-7 rounded-3xl border border-white/10 hover:border-brand-orange/40 transition-all cursor-default flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-4">{cd.icon}</div>
                  <h3 className="text-lg font-display font-bold mb-3">{cd.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{cd.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-brand-orange font-bold">
                  <span>Explore Solutions</span>
                  <ChevronRight size={14} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEALTHCARE DEVELOPMENT LIFECYCLE ── */}
      <section className="py-20 md:py-28 bg-surface/30 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <Layers size={15} />
              <span>Development Lifecycle</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our 5-Stage <span className="gradient-text">HealthTech Engineering</span> Process
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              From workflow discovery to cloud launch, our process ensures reliability, high performance, and human-centric design.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`glass rounded-2xl border ${step.border} p-6 flex flex-col md:flex-row md:items-center gap-6 hover:bg-white/[0.03] transition-all`}
              >
                <div className={`w-12 h-12 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center shrink-0`}>
                  <span className={`text-lg font-display font-black ${step.color}`}>{step.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                    <h3 className="text-lg font-display font-bold">{step.title}</h3>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${step.border} ${step.bg} ${step.color} w-fit`}>
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20 md:py-24">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12 md:mb-14">
            <div className="inline-flex items-center space-x-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle size={15} />
              <span>Answers &amp; Insights</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
              Healthcare Software <span className="gradient-text">FAQs</span>
            </h2>
            <p className="text-base md:text-lg text-white/60">
              Clear answers on digital health development, database integrations, and project timelines.
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
                  className="w-full p-5 md:p-6 text-left flex justify-between items-center space-x-4 font-display font-bold text-base md:text-lg hover:text-brand-orange transition-colors cursor-pointer"
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

      {/* ── LEAD CAPTURE & CONSULTATION CTA ── */}
      <section id="audit-form" className="py-20 md:pb-32 relative">
        <div className="container-custom max-w-4xl">
          <div className="glass p-8 md:p-14 rounded-[2.5rem] border border-white/10 neon-border relative overflow-hidden text-center">
            <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/10 blur-[150px] -z-10" />

            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} />
              <span>Technical Review &bull; Confidential</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ready to Build Your <span className="gradient-text">Healthcare App</span>?
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Schedule a technical consultation with our engineering team. We will analyze your system requirements, database integrations, and application architecture.
            </p>

            {formSubmitted ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-6 md:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-lg md:text-xl max-w-xl mx-auto"
              >
                ✓ Thank you! Our engineering team will reach out within 2 hours to schedule your consultation.
              </motion.div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                className="grid sm:grid-cols-1 md:grid-cols-12 gap-3 max-w-2xl mx-auto"
              >
                <div className="md:col-span-5">
                  <input 
                    type="text" 
                    required
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="Organization / App Name"
                    className="w-full h-14 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40 outline-none text-white text-sm placeholder-white/40 transition-colors"
                  />
                </div>
                <div className="md:col-span-4">
                  <input 
                    type="email" 
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Work Email or Phone"
                    className="w-full h-14 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40 outline-none text-white text-sm placeholder-white/40 transition-colors"
                  />
                </div>
                <div className="md:col-span-3">
                  <button 
                    type="submit" 
                    className="w-full h-14 rounded-xl font-bold text-white bg-brand-orange hover:bg-brand-orange/90 transition-all cursor-pointer flex items-center justify-center space-x-2 text-sm shadow-lg shadow-brand-orange/20"
                  >
                    <span>Request Audit</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 text-xs text-white/40 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <span className="flex items-center space-x-1.5">
                <Check size={14} className="text-emerald-400" />
                <span>100% Confidential Consultation</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock size={14} className="text-cyan-400" />
                <span>Response in 2 Hours</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheck size={14} className="text-brand-orange" />
                <span>Custom Enterprise Architecture</span>
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HealthcarePage;
