"use client";
// @ts-nocheck
import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Cpu, Globe, Layers, Shield, Smartphone, 
  ArrowRight, CheckCircle2, Users, Rocket, 
  Zap, Server, Search, 
  ChevronRight, Terminal, Database, Cloud, Activity
} from 'lucide-react';
import Link from 'next/link';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import BionicOperationsHub from '../components/BionicOperationsHub';
import InteractiveHeroDashboard from '../components/InteractiveHeroDashboard';
import AiSeoSection from '../components/AiSeoSection';

const Home = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Software Development",
      desc: "Custom SaaS platforms, web apps, and enterprise software built with React, Next.js, and Node.js.",
      path: "/services/software-development",
      metric: "< 100ms Load Times"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Software Consulting",
      desc: "Strategic technology planning, MVP development, and architecture design for scaling startups.",
      path: "/services/consulting",
      metric: "50% Faster Time-to-Market"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "QA & Automation",
      desc: "Comprehensive manual and automated testing using Playwright, Selenium, and Cypress.",
      path: "/services/qa-automation",
      metric: "99.9% Bug-Free Releases"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud & DevOps",
      desc: "Kubernetes, CI/CD pipelines, and cloud infrastructure management on AWS, GCP, and Azure.",
      path: "/services/devops",
      metric: "99.99% Uptime Achieved"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Digital Marketing",
      desc: "Data-driven SEO, PPC, and lead generation campaigns to grow your digital presence.",
      path: "/services/digital-marketing",
      metric: "+300% Average ROI"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "UI/UX Product Design",
      desc: "User-centric design that combines aesthetics with intuitive functionality for digital products.",
      path: "/services/product-design",
      metric: "4x User Retention"
    }
  ];

  const techStack = [
    { name: 'React', icon: <Code2 /> },
    { name: 'Next.js', icon: <Globe /> },
    { name: 'Tailwind', icon: <Layers /> },
    { name: 'Node.js', icon: <Terminal /> },
    { name: 'Python', icon: <Code2 /> },
    { name: 'AWS', icon: <Cloud /> },
    { name: 'Kubernetes', icon: <Server /> },
    { name: 'Docker', icon: <Database /> },
    { name: 'Selenium', icon: <Activity /> },
    { name: 'Playwright', icon: <Activity /> },
    { name: 'Cypress', icon: <Activity /> },
    { name: 'PostgreSQL', icon: <Database /> }
  ];

  const stats = [
    { label: "Projects Delivered", value: "250+" },
    { label: "Expert Engineers", value: "50+" },
    { label: "Client Retention", value: "98%" },
    { label: "Years Experience", value: "12+" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 grid-bg">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="glow-bg top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-orange/20" />
          <div className="glow-bg bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-amber/20" />
        </div>

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-sm font-bold mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
                </span>
                <span>Engineering the Future of Digital Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-[1.05] mb-8">
                Engineering Digital Products for the <span className="gradient-text">Future</span>
              </h1>

              <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-xl">
                We build scalable software, automate quality, power cloud infrastructure, and drive growth with digital marketing.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/contact" className="btn-primary flex items-center justify-center space-x-2">
                  <span>Book Free Consultation</span>
                  <ArrowRight size={20} />
                </Link>
                <Link href="/services" className="btn-outline flex items-center justify-center space-x-2">
                  <span>View Our Services</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              <InteractiveHeroDashboard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powered By - Infinite Marquee */}
      <section className="py-6 md:py-10 border-y border-white/5 bg-white/2 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-deep-space-blue to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-deep-space-blue to-transparent z-10 pointer-events-none"></div>
        <div className="container-custom">
          <p className="text-center text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.3em] mb-6 md:mb-8">Powered by next-gen technologies</p>
        </div>
        
        <div className="flex marquee-container overflow-hidden w-full">
          <div className="flex animate-marquee whitespace-nowrap items-center min-w-max">
            {/* First set of logos */}
            <div className="flex space-x-16 md:space-x-24 px-8 md:px-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
              {['REACT', 'NEXT.JS', 'NODE.JS', 'AWS', 'KUBERNETES', 'POSTGRESQL', 'TERRAFORM', 'PLAYWRIGHT'].map((tech) => (
                <span key={`1-${tech}`} className="text-2xl md:text-3xl font-display font-black tracking-tighter hover:text-brand-orange transition-colors cursor-default select-none">{tech}</span>
              ))}
            </div>
            {/* Duplicated set for seamless loop */}
            <div className="flex space-x-16 md:space-x-24 px-8 md:px-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
              {['REACT', 'NEXT.JS', 'NODE.JS', 'AWS', 'KUBERNETES', 'POSTGRESQL', 'TERRAFORM', 'PLAYWRIGHT'].map((tech) => (
                <span key={`2-${tech}`} className="text-2xl md:text-3xl font-display font-black tracking-tighter hover:text-brand-orange transition-colors cursor-default select-none">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI SEO Section */}
      <AiSeoSection />

      {/* Global Impact Data Section - Parallax/Scroll Triggers */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-black/40 border-b border-white/5">
         <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-5 z-0"></div>
         <div className="glow-bg top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] z-0"></div>
         <div className="glow-bg top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] z-0"></div>
         
         <div className="container-custom relative z-10">
           <div className="text-center mb-16 md:mb-24 px-4">
             <h2 className="text-xs md:text-sm font-bold text-indigo-400 uppercase tracking-[0.3em] mb-4">Scale at the Speed of Light</h2>
             <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">Metrics that Define Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Global Impact</span></h3>
           </div>
           
           <div className="space-y-20 md:space-y-32">
             {/* Data Row 1 */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, type: "spring" }}
               className="flex flex-col md:flex-row items-center justify-between text-center md:text-left"
             >
               <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-start">
                 <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-brand-orange/20 to-transparent flex items-center justify-center border border-brand-orange/30 shadow-[0_0_50px_rgba(232,66,26,0.2)] backdrop-blur-sm group hover:scale-105 transition-transform duration-500">
                   <div className="absolute inset-0 bg-brand-orange/10 rounded-3xl animate-pulse"></div>
                   <Zap className="w-20 h-20 sm:w-28 sm:h-28 text-brand-orange drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
                 </div>
               </div>
               <div className="md:w-5/12 px-4 md:px-0">
                 <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Digital Value Delivered</h4>
                 <p className="text-base md:text-lg text-white/60 leading-relaxed">
                   The products, platforms, and campaigns we've engineered have driven immense business value, helping our clients scale their operations and dominate their markets.
                 </p>
               </div>
             </motion.div>

             {/* Data Row 2 */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, type: "spring" }}
               className="flex flex-col md:flex-row items-center justify-between text-center md:text-right"
             >
               <div className="md:w-5/12 order-2 md:order-1 px-4 md:px-0 mt-6 md:mt-0">
                 <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Daily API Iterations</h4>
                 <p className="text-base md:text-lg text-white/60 leading-relaxed">
                   Our robust microservice architectures handle massive scale natively, processing over 50 million secure requests every single day without a hiccup.
                 </p>
               </div>
               <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2 md:text-right flex justify-center md:justify-end">
                 <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-bl from-indigo-500/20 to-transparent flex items-center justify-center border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.2)] backdrop-blur-sm group hover:scale-105 transition-transform duration-500">
                   <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl animate-pulse"></div>
                   <Activity className="w-20 h-20 sm:w-28 sm:h-28 text-indigo-400 drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
      </section>

      <BionicOperationsHub />

      {/* Services Overview */}
      <section className="section-padding relative">
        <div className="container-custom">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20" direction="up" delay={0}>
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-8">Cutting-Edge Tech Solutions</h3>

            <p className="text-lg text-white/60">
              We provide end-to-end services to help you build, scale, and market your digital products with engineering precision.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={index} direction="up">
                <Link
                  href={service.path}
                  className="group glass-card p-10 neon-border overflow-hidden relative h-full flex flex-col"
                >
                  {/* Bionic Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  <div className="relative z-10 w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(0,85,255,0.1)] group-hover:rotate-12 group-hover:scale-110">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors relative z-10">{service.title}</h4>
                  <p className="text-white/60 mb-8 leading-relaxed relative z-10">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="inline-flex items-center font-bold text-brand-orange group-hover:translate-x-2 transition-transform relative z-10">
                      <span>Learn More</span>
                      <ChevronRight size={20} className="ml-2" />
                    </div>
                    
                    {/* Bionic Hover Metric Badge */}
                    <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 bg-white text-space-blue font-bold text-[10px] uppercase tracking-widest py-2 px-4 rounded-full shadow-2xl z-20">
                      {service.metric}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section-padding bg-dark-indigo/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10"></div>
        <div className="container-custom relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20" direction="up">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Tech Stack</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold mb-8">Built with Modern Tech</h3>
            <p className="text-white/60">
              We leverage the most powerful and scalable technologies to build products that stand the test of time.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" staggerDelay={0.07}>
            {techStack.map((tech, i) => (
              <StaggerItem key={i} direction="up">
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="tech-card group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-brand-orange group-hover:text-brand-crimson transition-colors">
                    {tech.icon}
                  </div>
                  <span className="font-bold text-sm tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">{tech.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Digital Marketing - Reverse Marquee */}
      <section className="py-12 md:py-16 overflow-hidden relative border-y border-white/5 my-10 bg-transparent">
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
        
        <div className="container-custom mb-8 relative z-20">
          <div className="flex items-center justify-center space-x-4">
            <h2 className="text-center text-[10px] md:text-sm font-bold text-white/40 uppercase tracking-[0.4em]">Digital Marketing Ecosystem</h2>
          </div>
        </div>
        
        <div className="flex marquee-container overflow-hidden w-full">
          {/* Animation direction: reverse for opposite flow */}
          <div className="flex animate-marquee whitespace-nowrap items-center min-w-max" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
            {/* First Set */}
            <div className="flex space-x-6 md:space-x-10 px-4 items-center">
              {['SEO', 'BRANDING', 'FRAUD DETECTION', 'ORM', 'PAID ADS', 'SOCIAL MEDIA'].map((tool) => (
                <div key={`m1-${tool}`} className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.01] text-white/50 text-xs font-semibold tracking-wide hover:text-white hover:border-white/20 transition-all duration-300 cursor-default font-sans">
                  {tool}
                </div>
              ))}
            </div>
            {/* Second Set */}
            <div className="flex space-x-6 md:space-x-10 px-4 items-center">
              {['SEO', 'BRANDING', 'FRAUD DETECTION', 'ORM', 'PAID ADS', 'SOCIAL MEDIA'].map((tool) => (
                <div key={`m2-${tool}`} className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.01] text-white/50 text-xs font-semibold tracking-wide hover:text-white hover:border-white/20 transition-all duration-300 cursor-default font-sans">
                  {tool}
                </div>
              ))}
            </div>
            {/* Third Set to guarantee no jump on ultrawide monitors */}
            <div className="flex space-x-6 md:space-x-10 px-4 items-center">
              {['SEO', 'BRANDING', 'FRAUD DETECTION', 'ORM', 'PAID ADS', 'SOCIAL MEDIA'].map((tool) => (
                <div key={`m3-${tool}`} className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.01] text-white/50 text-xs font-semibold tracking-wide hover:text-white hover:border-white/20 transition-all duration-300 cursor-default font-sans">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Code Snippet Style */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] cursor-default transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-wider text-brand-orange font-bold font-mono">Performance Core</span>
                  <div className="text-3xl font-bold font-display text-white mt-2">&lt; 100ms</div>
                  <p className="text-xs text-white/50 mt-1">Average server response times.</p>
                </div>
                <div className="glass-card p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] cursor-default transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-wider text-brand-orange font-bold font-mono">SLA Guarantee</span>
                  <div className="text-3xl font-bold font-display text-white mt-2">99.99%</div>
                  <p className="text-xs text-white/50 mt-1">Guaranteed cloud application uptime.</p>
                </div>
              </div>
              <div className="glass-card p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] cursor-default transition-all duration-300">
                <span className="text-[10px] uppercase tracking-wider text-brand-orange font-bold font-mono">Security Benchmark</span>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-xl font-bold text-white font-display">SOC2 & ISO Ready</div>
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase rounded-md font-sans">Compliant</span>
                </div>
                <p className="text-xs text-white/50 mt-1.5">Penetration tested, cryptographically secured microservices.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 px-4">
              <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Why Sociodigit</h2>
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                Engineering Excellence Meets <span className="gradient-text">Strategic</span> Growth
              </h3>

              <p className="text-lg text-white/60 mb-12 leading-relaxed">
                We don't just build software; we build businesses. Our integrated approach combines deep technical expertise with growth-focused marketing strategies.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Enterprise-Grade Quality", desc: "We apply the same standards used by Fortune 500 companies to every project." },
                  { title: "Agile & Transparent", desc: "Real-time communication and iterative development for maximum velocity." },
                  { title: "Full-Stack Growth", desc: "From the first line of code to the first million users, we've got you covered." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,85,255,0.1)]">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-24 bg-white/2 relative">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-12" staggerDelay={0.12}>
            {stats.map((stat, i) => (
              <StaggerItem key={i} direction="up">
                <div className="text-center group">
                  <motion.div 
                    whileInView={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-5xl lg:text-7xl font-display font-bold gradient-text mb-4"
                  >
                    <AnimatedCounter value={stat.value} />
                  </motion.div>
                  <div className="text-sm font-bold text-white/40 uppercase tracking-widest group-hover:text-brand-orange transition-colors">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative">
        <div className="container-custom">
          <ScrollReveal className="relative glass p-12 lg:p-24 rounded-[3rem] overflow-hidden text-center border-white/10 neon-border" direction="up" scale>
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 grid-bg" />
            <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/10 blur-[150px]" />
            
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-8">Ready to Scale Your Digital Product?</h2>

              <p className="text-xl text-white/60 mb-12">
                Join 200+ companies that trust Sociodigit for their engineering and growth needs. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/contact" className="btn-primary">
                  <span>Book Free Consultation</span>
                </Link>
                <Link href="/services" className="btn-outline">
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
