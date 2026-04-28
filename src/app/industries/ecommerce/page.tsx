// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Users, Zap, LayoutGrid, ArrowRight } from 'lucide-react';
import EcommerceImage from '../../../assets/generated/ecommerce_dashboard_render_1773750773899.png';

const Ecommerce = () => {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-neutral-50 text-neutral-900 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-400/20 to-purple-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container-custom relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-orange-100 text-orange-600 font-bold tracking-wide text-xs md:text-sm mb-4 md:mb-6 uppercase">
              Retail & E-Commerce Solutions
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6 md:mb-8 text-neutral-900 font-display">
              Transactions that feel like <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">magic.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 mb-8 md:mb-12 font-medium max-w-2xl mx-auto">
              We design high-converting, experiential commerce platforms that turn casual browsers into loyal brand advocates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto justify-center bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 shadow-xl shadow-orange-500/30 flex items-center">
                Start Selling Better <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto justify-center bg-white hover:bg-neutral-100 text-neutral-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-colors border border-neutral-200 shadow-sm">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>

        {/* Dashboard/KPI Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 lg:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] mb-20 md:mb-32 border border-neutral-100 relative overflow-hidden mx-4 md:mx-0"
        >
          <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-orange-500 to-purple-600"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Checkouts Accelerated", value: "3.2x", icon: Zap, color: "text-orange-500", bg: "bg-orange-50" },
              { label: "Conv. Rate Increase", value: "+45%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
              { label: "Average Order Value", value: "+28%", icon: ShoppingCart, color: "text-blue-500", bg: "bg-blue-50" },
              { label: "Retention Rate", value: "85%", icon: Users, color: "text-emerald-500", bg: "bg-emerald-50" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl ${stat.bg} ${stat.color} mb-3 md:mb-4`}>
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-neutral-500 font-medium text-xs md:text-sm lg:text-base leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features Masonry */}
        <div className="mb-16 md:mb-24 px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 md:mb-0 font-display">The Modern Commerce Stack</h2>
            <LayoutGrid className="text-neutral-400 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 bg-neutral-900 text-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col justify-end min-h-[300px] md:min-h-[400px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <img src={(EcommerceImage as any).src || EcommerceImage} alt="Sociodigit - Modern E-commerce Intelligence Dashboard" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="relative z-20">
                <span className="bg-orange-500 text-white text-[10px] md:text-xs font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-wide mb-3 md:mb-4 inline-block">Headless Commerce</span>
                <h3 className="text-2xl md:text-3xl font-black mb-2 font-display">Decoupled Frontends</h3>
                <p className="text-white/80 text-sm md:text-base max-w-md">Blazing fast shopping experiences using Next.js/React connected to Shopify Plus, Commerce Layer, or Swell.</p>
              </div>
            </div>

            <div className="bg-purple-100 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[250px] md:min-h-[400px]">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Users className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-2 text-purple-900 font-display">Personalization Engine</h3>
                <p className="text-purple-800/80 text-sm md:text-base">AI-driven product recommendations tailored to browsing history and predictive buying patterns.</p>
              </div>
            </div>

            <div className="bg-orange-100 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[250px] md:min-h-[400px]">
               <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Zap className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-2 text-orange-900 font-display">One-Click Checkout</h3>
                <p className="text-orange-800/80 text-sm md:text-base">Frictionless payment flows integrating modern wallets (Apple Pay, Shop Pay) for instant purchases.</p>
              </div>
            </div>

            <div className="lg:col-span-2 bg-blue-50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col justify-center min-h-[250px] md:min-h-[400px] border border-blue-100">
              <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-4 text-blue-900 font-display">Omnichannel Integration</h3>
              <p className="text-sm md:text-xl text-blue-800/70 max-w-xl mb-6 md:mb-8">Unify your physical retail POS, mobile app, and online store into a single source of truth for inventory and customer profiles.</p>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {['Stripe', 'Algolia', 'Contentful', 'Klaviyo'].map(tech => (
                  <div key={tech} className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl font-bold text-xs md:text-sm shadow-sm text-blue-600">{tech}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ecommerce;
