// @ts-nocheck
"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Cloud, Database, ArrowRight, Activity, Server } from 'lucide-react';

const Saas = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "system.initialize({ mode: 'disrupt' });";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-space-blue text-white relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Cyan Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-400 text-xs md:text-sm font-mono tracking-wider uppercase">SaaS & Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 md:mb-8">
              Architecting the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Next Default</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-10 font-light max-w-xl">
              We engineer scalable, high-availability platforms for tech innovators. From multi-tenant architectures to serverless deployments, we build software that eats the world.
            </p>
            <button className="w-full sm:w-auto justify-center bg-cyan-500 hover:bg-cyan-400 text-space-blue font-bold font-mono py-4 px-8 rounded-none border-b-4 border-r-4 border-cyan-700 transition-transform active:translate-y-1 active:translate-x-1 active:border-b-0 active:border-r-0 flex items-center group">
              INITIATE_PROJECT <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Terminal UI */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.15)]"
          >
            {/* Terminal Header */}
            <div className="bg-white/5 px-4 py-3 flex items-center border-b border-white/10 relative">
              <div className="flex space-x-2 relative z-10 w-full">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[10px] md:text-xs text-white/40 font-mono">root@sociodigit-core:~</div>
              </div>
            </div>
            {/* Terminal Body */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed text-cyan-400 h-56 md:h-64 flex flex-col justify-end relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none z-10"></div>
              <div className="opacity-50 blur-[1px]">
                <p>&gt; Starting microservices...</p>
                <p>&gt; [OK] Connected to multi-region DB</p>
                <p>&gt; [OK] Auth cluster online</p>
                <p>&gt; Provisioning elastic nodes...</p>
                <p className="mb-4">&gt; Scaling to 10M concurrent connections</p>
              </div>
              <p className="text-white relative z-20"><span className="text-pink-500 mr-2">➜</span><span className="text-cyan-400">{typedText}</span><span className="animate-pulse">_</span></p>
            </div>
          </motion.div>
        </div>

        {/* Features/Capabilities Grid */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-12 text-center text-white/90">Core Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Cloud, title: 'Multi-Tenant SaaS', desc: 'Secure, scalable architectures for B2B applications with robust data isolation.' },
              { icon: Database, title: 'Data Pipelines', desc: 'High-throughput real-time processing and intelligent data warehousing.' },
              { icon: Cpu, title: 'Microservices', desc: 'Decoupled, resilient systems deployed via Kubernetes and Docker.' },
              { icon: Server, title: 'Serverless Edge', desc: 'Zero-maintenance compute executing globally at single-digit millisecond latency.' },
              { icon: Activity, title: 'High Availability', desc: '99.999% uptime architectures built to survive regional outages.' },
              { icon: Code2, title: 'API-First Design', desc: 'Developer-centric GraphQL and REST APIs with comprehensive documentation.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group cursor-crosshair"
              >
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-500 mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg md:text-xl font-display font-bold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-white/60 font-mono text-xs md:text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Saas;
