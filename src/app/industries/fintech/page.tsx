// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LineChart, LockKeyhole, Landmark, ArrowRight, ChevronRight } from 'lucide-react';
import FintechImage from '../../../assets/generated/fintech_security_render_1773750797528.png';

const Fintech = () => {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-neutral-900 text-neutral-200 font-sans relative">
      
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center mb-16 md:mb-32 px-4 md:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center space-x-2 text-emerald-400 mb-4 md:mb-6 font-semibold tracking-wide text-xs md:text-sm uppercase">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
              <span>Financial Technology Services</span>
            </div>
            {/* Using the serif font (Playfair Display) for the header */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8 font-display">
              Building the <span className="text-emerald-500 italic">Future</span> of Finance.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-8 md:mb-10 leading-relaxed max-w-2xl">
              From neobanks to institutional trading platforms, we engineer secure, compliant, and highly performant financial ecosystems that inspire unshakeable trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-6 md:px-8 py-3 md:py-4 font-semibold transition-colors flex items-center justify-center text-sm md:text-base">
                Consult an Expert <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="w-full sm:w-auto border border-neutral-700 hover:border-neutral-500 text-neutral-300 px-6 md:px-8 py-3 md:py-4 font-semibold transition-colors text-center text-sm md:text-base">
                Explore Compliance
              </button>
            </div>
          </motion.div>

          {/* Abstract Data Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group overflow-hidden rounded-[2rem] border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10"></div>
              <img 
                src={(FintechImage as any).src || FintechImage} 
                alt="Sociodigit - Secure Financial Systems Visualization" 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center space-x-3 bg-neutral-900/80 backdrop-blur-md px-4 py-2 border border-emerald-500/30 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-mono text-xs text-emerald-400 tracking-wider">SECURE_NODE_ACTIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Strict Grid */}
        <div className="px-4 md:px-0 mb-16 md:mb-0">
          <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 font-display">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-neutral-800 border border-neutral-800">
            {[
              { title: "Payments Infrastructure", desc: "Global payment gateways, ledger systems, and automated reconciliation engines.", icon: Landmark },
              { title: "WealthTech & Trading", desc: "Low-latency algorithmic trading systems and robo-advisory platforms.", icon: LineChart },
              { title: "Digital Banking", desc: "Core banking replacements and intuitive consumer-facing mobile applications.", icon: ShieldCheck },
              { title: "Risk & Compliance", desc: "Automated KYC/AML pipelines and anomaly detection fraud systems.", icon: LockKeyhole }
            ].map((service, idx) => (
              <div key={idx} className="bg-neutral-900 p-6 md:p-8 group hover:bg-neutral-800/80 transition-colors">
                <service.icon className="text-emerald-600 mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10 group-hover:text-emerald-400 transition-colors" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{service.title}</h3>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                  {service.desc}
                </p>
                <a href="#" className="flex items-center text-emerald-500 text-xs md:text-sm font-semibold group-hover:text-emerald-400">
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Fintech;
