// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Zap, Users2, Rocket, ChevronRight } from 'lucide-react';
import OriginStoryImage from '../../assets/generated/about_origin_dorm_room_modern_1773750717059.png';

const About = () => {
  const values = [
    { icon: <Zap />, title: "Velocity", desc: "We move fast without breaking things, delivering value at startup speed." },
    { icon: <ShieldCheck />, title: "Integrity", desc: "Transparency is our default. We build trust through honest engineering." },
    { icon: <Heart />, title: "Empathy", desc: "We build for humans. User experience is at the heart of everything we do." },
    { icon: <Target />, title: "Precision", desc: "Detail-oriented execution from the first line of code to the final pixel." }
  ];

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 -z-10"></div>
        <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/10 blur-[150px] -z-10" />
        
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-8xl font-display font-bold mb-8">
                We are <span className="gradient-text">Sociodigit</span>.
              </h1>
              <p className="text-2xl text-white/60 leading-relaxed">
                A team of passionate engineers, designers, and strategists dedicated to helping businesses build, scale, and market world-class digital products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[2.5rem] border-white/10 neon-border"
            >
              <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,85,255,0.2)]">
                <Target size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                To empower innovators by providing the technical excellence and strategic growth tools they need to turn ambitious ideas into market-leading digital products.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[2.5rem] border-white/10 neon-border"
            >
              <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,85,255,0.2)]">
                <Eye size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                To become the global standard for digital product engineering, where every line of code we write contributes to a more efficient and connected world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Origin Story */}
      <section className="section-padding bg-white/2 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5 -z-10"></div>
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Our Origin</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold">From a dorm room vision to a global software consultancy.</h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Master Vertical Glowing Line */}
            <div className="absolute left-10 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-orange via-cyan-400 to-transparent md:-translate-x-1/2 rounded-full opacity-50"></div>

            <div className="space-y-24 pt-8">
              
              {/* Timeline Iteration 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row items-center group"
              >
                <div className="md:w-1/2 text-right hidden md:block pr-16 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-[6rem] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-brand-orange to-transparent opacity-20 absolute top-1/2 -translate-y-1/2 right-12">01</div>
                  <h4 className="text-2xl font-display font-bold text-white mb-2 relative z-10">The Seed is Planted</h4>
                  <p className="font-mono text-brand-orange/80 tracking-widest uppercase text-sm relative z-10">Bhubaneswar, India</p>
                </div>
                
                {/* Node */}
                <div className="absolute left-10 md:left-1/2 w-10 h-10 rounded-full bg-space-blue border-2 border-brand-orange -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,85,255,0.6)] group-hover:scale-125 transition-transform duration-500">
                  <div className="w-3 h-3 bg-brand-orange rounded-full group-hover:animate-ping"></div>
                </div>

                <div className="w-full md:w-1/2 pl-20 md:pl-16 relative mt-8 md:mt-0">
                  {/* Stem connecting to card */}
                  <div className="absolute top-5 left-10 md:left-0 w-10 md:w-16 h-[2px] bg-brand-orange opacity-40 group-hover:opacity-100 transition-opacity -z-10"></div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 md:p-8 rounded-[2rem] border-white/10 group-hover:border-brand-orange/40 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent shadow-xl"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[40px] rounded-full"></div>
                    <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-4 py-1.5 rounded-full font-mono text-sm md:text-base font-bold tracking-widest mb-6 relative z-10">
                      <span>2014</span>
                    </div>
                    <div className="md:hidden mb-4 relative z-10">
                       <h4 className="text-xl font-display font-bold text-white leading-tight mb-1">The Seed is Planted</h4>
                       <p className="font-mono text-brand-orange/60 text-xs tracking-widest uppercase">Bhubaneswar, India</p>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl mb-6 border border-white/10 group">
                      <img 
                        src={(OriginStoryImage as any).src || OriginStoryImage} 
                        alt="The Dorm Room Vision" 
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-indigo/80 to-transparent"></div>
                      <p className="absolute bottom-4 left-4 text-white/60 text-xs font-mono tracking-widest uppercase">Archive: 2014 / Pre-Beta</p>
                    </div>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed relative z-10">
                      It started as a shared vision between <span className="text-white font-bold">our founders</span>. Driven by an obsession with technology, the early blueprints of Sociodigit were laid down from scratch in a dorm room.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Timeline Iteration 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row items-center group"
              >
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:pr-16 relative md:text-right order-2 md:order-1 mt-8 md:mt-0">
                  {/* Stem connecting to card (desktop) */}
                  <div className="hidden md:block absolute top-5 right-0 w-16 h-[2px] bg-cyan-400 opacity-40 group-hover:opacity-100 transition-opacity -z-10"></div>
                  {/* Stem connecting to card (mobile) */}
                  <div className="md:hidden absolute top-5 left-10 w-10 h-[2px] bg-cyan-400 opacity-40 group-hover:opacity-100 transition-opacity -z-10"></div>

                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 md:p-8 rounded-[2rem] border-white/10 group-hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden bg-gradient-to-bl from-white/5 to-transparent shadow-xl"
                  >
                    <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/10 blur-[40px] rounded-full"></div>
                    <div className="inline-flex items-center space-x-2 bg-cyan-400/20 text-cyan-400 px-4 py-1.5 rounded-full font-mono text-sm md:text-base font-bold tracking-widest mb-6 relative z-10">
                      <span>2017</span>
                    </div>
                    <div className="md:hidden mb-4 relative z-10">
                       <h4 className="text-xl font-display font-bold text-white leading-tight mb-1">The Bangalore Grind <br/>& Launch</h4>
                       <p className="font-mono text-cyan-400/60 text-xs tracking-widest uppercase">Bangalore, India</p>
                    </div>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed relative z-10 text-left md:text-right">
                      The launch happened in the middle of chaos. After securing full-time corporate jobs in Bangalore, we found ourselves living a double life. From 9 to 5, we were dedicated employees. From 5 to 9—and long into the night—we were founders, building <span className="text-white font-bold">Sociodigit</span> from the ground up, taking on freelance clients, and turning a side hustle into a scalable agency.
                    </p>
                  </motion.div>
                </div>
                
                {/* Node */}
                <div className="absolute left-10 md:left-1/2 w-10 h-10 rounded-full bg-space-blue border-2 border-cyan-400 -translate-x-1/2 flex items-center justify-center z-10 order-1 shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-125 transition-transform duration-500">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:animate-ping"></div>
                </div>

                <div className="md:w-1/2 hidden md:block text-left pl-16 order-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300 relative">
                  <div className="text-[6rem] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-bl from-cyan-400 to-transparent opacity-20 absolute top-1/2 -translate-y-1/2 left-12 -z-10">02</div>
                  <h4 className="text-2xl font-display font-bold text-white mb-2 relative z-10">The Bangalore Grind <br/>& The Launch</h4>
                  <p className="font-mono text-cyan-400/80 tracking-widest uppercase text-sm relative z-10">Bangalore, India</p>
                </div>
              </motion.div>

              {/* Timeline Iteration 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row items-center group"
              >
                <div className="md:w-1/2 text-right hidden md:block pr-16 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-[6rem] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-transparent opacity-20 absolute top-1/2 -translate-y-1/2 right-12">03</div>
                  <h4 className="text-2xl font-display font-bold text-white mb-2 relative z-10">The Pivot to Software</h4>
                  <p className="font-mono text-indigo-400/80 tracking-widest uppercase text-sm relative z-10">Digital Marketing Agency</p>
                </div>
                
                {/* Node */}
                <div className="absolute left-10 md:left-1/2 w-10 h-10 rounded-full bg-space-blue border-2 border-indigo-500 -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(99,102,241,0.6)] group-hover:scale-125 transition-transform duration-500">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full group-hover:animate-ping"></div>
                </div>

                <div className="w-full md:w-1/2 pl-20 md:pl-16 relative mt-8 md:mt-0">
                  {/* Stem connecting to card */}
                  <div className="absolute top-5 left-10 md:left-0 w-10 md:w-16 h-[2px] bg-indigo-500 opacity-40 group-hover:opacity-100 transition-opacity -z-10"></div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 md:p-8 rounded-[2rem] border-white/10 group-hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent shadow-xl"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[40px] rounded-full"></div>
                    <div className="inline-flex items-center space-x-2 bg-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full font-mono text-sm md:text-base font-bold tracking-widest mb-6 relative z-10">
                      <span>2017 - 2021</span>
                    </div>
                    <div className="md:hidden mb-4 relative z-10">
                       <h4 className="text-xl font-display font-bold text-white leading-tight mb-1">The Pivot to Software</h4>
                       <p className="font-mono text-indigo-400/60 text-xs tracking-widest uppercase">Digital Marketing Agency</p>
                    </div>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed relative z-10">
                      During these core years, we operated successfully as a Digital Marketing company. But by the end of 2021, realizing the massive gap in high-quality engineering, we <span className="text-white font-bold">pivoted aggressively</span> into custom software development to solve harder, deeper business problems.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Timeline Iteration 4 (Present) */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row items-center group"
              >
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:pr-16 relative md:text-right order-2 md:order-1 mt-8 md:mt-0">
                  {/* Stem connecting to card (desktop) */}
                  <div className="hidden md:block absolute top-6 right-0 w-16 h-[2px] bg-white opacity-20 group-hover:opacity-100 transition-opacity -z-10"></div>
                  {/* Stem connecting to card (mobile) */}
                  <div className="md:hidden absolute top-6 left-10 w-10 h-[2px] bg-white opacity-20 group-hover:opacity-100 transition-opacity -z-10"></div>

                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 md:p-8 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl group-hover:border-white/40 transition-all duration-300 relative overflow-hidden shadow-2xl"
                  >
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_2s_infinite] -rotate-45 pointer-events-none"></div>
                    <div className="inline-flex items-center space-x-2 bg-white text-space-blue px-5 py-2 rounded-full font-mono text-sm md:text-base font-bold tracking-widest mb-6 relative z-10 shadow-lg">
                      <span className="animate-pulse mr-2 w-2 h-2 rounded-full bg-brand-orange"></span>
                      <span>PRESENT</span>
                    </div>
                    <div className="md:hidden mb-4 relative z-10">
                       <h4 className="text-xl font-display font-bold text-white leading-tight mb-1">Full Scale Engineering</h4>
                       <p className="font-mono text-white/50 text-xs tracking-widest uppercase">Global Reach</p>
                    </div>
                    <p className="text-lg md:text-xl text-white leading-relaxed relative z-10 font-medium text-left md:text-right">
                      The transition is complete. Today, Sociodigit stands as a <span className="text-brand-orange border-b-2 border-brand-orange/30">full-fledged Software Consulting Company</span>. We architect, build, and scale world-class digital products and cloud infrastructures for businesses globally.
                    </p>
                  </motion.div>
                </div>
                
                {/* Node */}
                <div className="absolute left-10 md:left-1/2 w-12 h-12 rounded-full bg-white border-2 border-white -translate-x-1/2 flex items-center justify-center z-10 order-1 shadow-[0_0_30px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <div className="w-4 h-4 bg-brand-orange rounded-full animate-ping"></div>
                  <div className="w-4 h-4 bg-brand-orange rounded-full absolute"></div>
                </div>

                <div className="md:w-1/2 hidden md:block text-left pl-16 order-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300 relative">
                  <div className="text-[6rem] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-bl from-white to-transparent opacity-10 absolute top-1/2 -translate-y-1/2 left-12 -z-10">04</div>
                  <h4 className="text-2xl font-display font-bold text-white mb-2 relative z-10">Full Scale Engineering</h4>
                  <p className="font-mono text-white/80 tracking-widest uppercase text-sm relative z-10">Global Reach</p>
                </div>
              </motion.div>


            </div>
          </div>

        </div>
      </section>


      {/* Values (Moved Down) */}
      <section className="section-padding bg-white/2 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Our DNA</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold">What Drives Us Every Day</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2rem] text-center group border-white/10 hover:border-brand-orange/50 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(0,85,255,0.1)]">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{v.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
