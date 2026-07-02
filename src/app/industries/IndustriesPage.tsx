// @ts-nocheck
"use client";

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Plane, 
  Briefcase, 
  Rocket, 
  Globe, 
  Heart,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    title: "SaaS & Tech",
    slug: "saas",
    icon: <Rocket className="w-8 h-8" />,
    description: "Scale your software-as-a-service with high-performance engineering and automated deployment.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "E-commerce",
    slug: "ecommerce",
    icon: <ShoppingBag className="w-8 h-8" />,
    description: "Build robust, high-conversion digital storefronts with seamless payment and logistics integration.",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "FinTech",
    slug: "fintech",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Secure, compliant, and lightning-fast financial technology solutions for the modern era.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    icon: <Stethoscope className="w-8 h-8" />,
    description: "HIPAA-compliant platforms that improve patient outcomes and streamline medical workflows.",
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    title: "Education",
    slug: "education",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Transform learning with interactive EdTech platforms and scalable management systems.",
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    title: "Hospitality & Hotels",
    slug: "hospitality-hotels",
    icon: <Plane className="w-8 h-8" />,
    description: "Next-gen booking systems and guest experience platforms for the travel and leisure industry.",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    title: "Startups",
    slug: "startups",
    icon: <Rocket className="w-8 h-8" />,
    description: "Rapid MVP development and growth-focused technology to take your idea from zero to one.",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Enterprises",
    slug: "enterprises",
    icon: <Building2 className="w-8 h-8" />,
    description: "Legacy modernization and scalable digital transformation for large-scale organizations.",
    color: "from-slate-500/20 to-gray-500/20"
  },
  {
    title: "Non-Profits",
    slug: "non-profits",
    icon: <Heart className="w-8 h-8" />,
    description: "Impact-driven technology solutions to help social organizations reach more people efficiently.",
    color: "from-red-500/20 to-rose-500/20"
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-space-blue">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 lg:pt-64 lg:pb-32 grid-bg">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="glow-bg top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-orange/10" />
          <div className="glow-bg bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Industries We Serve</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              Specialized Solutions for <span className="gradient-text">Global Markets</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              We combine deep technical expertise with industry-specific insights to build digital products that solve complex business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-32 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={`/industries/${industry.slug}`}>
                  <div className="glass-card p-10 h-full flex flex-col border-white/5 hover:border-brand-orange/30 transition-all duration-500 overflow-hidden group">
                    {/* Background Highlight */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                    
                    <div className="w-16 h-16 bg-white/5 text-brand-orange rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-xl group-hover:scale-110 group-hover:rotate-6">
                      {industry.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{industry.title}</h3>
                    <p className="text-white/60 mb-8 leading-relaxed flex-grow group-hover:text-white/80 transition-colors">
                      {industry.description}
                    </p>
                    
                    <div className="inline-flex items-center font-bold text-brand-orange group-hover:translate-x-2 transition-transform">
                      <span>Explore {industry.title}</span>
                      <ChevronRight size={20} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-32">
        <div className="container-custom">
          <div className="glass p-12 lg:p-20 rounded-[3rem] text-center border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10 -z-10"></div>
            <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/5 blur-[120px] -z-10" />
            
            <div className="max-w-2xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Don't See Your Industry?</h2>
              <p className="text-lg text-white/60 mb-12">
                We thrive on solving unique challenges across any sector. Let's discuss how our engineering expertise can work for your specific business.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start a Conversation</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
