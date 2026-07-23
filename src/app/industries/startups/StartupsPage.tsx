// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Flame, TerminalSquare } from 'lucide-react';

const Startups = () => {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      {/* Aggressive Marquee */}
      <div className="absolute top-24 left-0 w-full overflow-hidden whitespace-nowrap bg-pink-500 py-2 rotate-[-2deg] scale-110 z-0 opacity-80">
        <div className="inline-block animate-marquee font-black uppercase tracking-tighter text-4xl text-black">
          MOVE FAST BREAK NOTHING. BUILD SCALABLE. LAUNCH FASTER. MOVE FAST BREAK NOTHING. BUILD SCALABLE. LAUNCH FASTER.
        </div>
      </div>

      <div className="container-custom relative z-10 mt-20">
        
        {/* Brutalist Hero */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-none mb-8 uppercase font-display">
              Zero to <br />
              <span className="text-yellow-400 drop-shadow-[4px_4px_0_theme(colors.pink.500)]">One.</span>
            </h1>
            <p className="text-2xl lg:text-4xl text-white/80 max-w-3xl font-bold mb-12 uppercase tracking-wide">
              We are the technical co-founders you wish you had. From seed stage MVPs to series C scaling.
            </p>
            <button className="bg-yellow-400 text-black px-12 py-6 text-2xl font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-colors border-4 border-black box-border shadow-[8px_8px_0_white] active:translate-y-2 active:translate-x-2 active:shadow-none">
              Deploy MVP
            </button>
          </motion.div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 mx-4 md:mx-0">
          
          <div className="lg:col-span-8 bg-pink-500 p-6 md:p-12 border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.2)] md:shadow-[12px_12px_0_rgba(255,255,255,0.2)]">
            <Zap className="w-12 h-12 md:w-16 md:h-16 text-black mb-4 md:mb-6" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4 md:mb-6 font-display">MVP Engineering</h2>
            <p className="text-lg md:text-2xl font-bold text-black/80 leading-tight">
              Stop debating stack choices. We ship fully functional, scalable MVPs in 8 weeks utilizing Next.js, Supabase, and Tailwind. Test hypotheses, not patience.
            </p>
          </div>

          <div className="lg:col-span-4 bg-yellow-400 p-6 md:p-12 border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.2)] md:shadow-[12px_12px_0_rgba(255,255,255,0.2)] flex flex-col justify-center">
            <Flame className="w-12 h-12 md:w-16 md:h-16 text-black mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black mb-3 md:mb-4 font-display">Product <br className="hidden md:block"/> Market Fit</h2>
            <p className="text-lg md:text-xl font-bold text-black/80">Rapid iteration cycles based on pure analytics.</p>
          </div>

          <div className="lg:col-span-4 bg-neutral-900 justify-center p-6 md:p-12 border-4 border-neutral-700">
             <TerminalSquare className="w-12 h-12 md:w-16 md:h-16 text-emerald-400 mb-4 md:mb-6" />
             <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-3 md:mb-4 font-display">Tech Debt Rescue</h2>
             <p className="text-neutral-400 font-mono text-xs md:text-sm leading-relaxed">
              &gt; Migrating monolithic spaghetti to resilient serverless microservices before your Series A investors notice.
             </p>
          </div>

          <div className="lg:col-span-8 bg-white p-6 md:p-12 border-4 border-neutral-300">
             <Rocket className="w-12 h-12 md:w-16 md:h-16 text-pink-500 mb-4 md:mb-6" />
             <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4 md:mb-6 font-display">Scale out</h2>
             <p className="text-lg md:text-2xl font-bold text-black/70 leading-tight">
              When user 10,000 hits at the same time as user 10,000,000. We build Kubernetes architectures and CI/CD pipelines that never sleep.
             </p>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Startups;
