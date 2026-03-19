import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe2, Shield, Network, ArrowRight } from 'lucide-react';

const Enterprises = () => {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-slate-900 text-slate-200">
      
      <div className="container-custom relative z-10">
        
        {/* Corporate Hero */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-32 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-slate-400 uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4 md:mb-6 flex items-center justify-center">
              <Building2 className="mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5 text-blue-500" /> Enterprise Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8 font-display">
              Digital transformation <br className="hidden lg:block" /> at global scale.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              We partner with Fortune 500 companies to modernize legacy systems, automate complex workflows, and establish secure cloud-native architectures that drive operational excellence.
            </p>
            <button className="w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 font-semibold rounded-sm transition-colors flex items-center mx-auto text-sm md:text-base">
              Schedule Architecture Review <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </motion.div>
        </div>

        {/* Global Architecture / Metrics */}
        <div className="mb-16 md:mb-24 px-4 md:px-0">
          <div className="bg-slate-800/50 border border-slate-700 p-[2px] md:p-1 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700 bg-slate-900 rounded-lg">
              {[
                { metric: "99.999%", label: "SLA Guaranteed Availability" },
                { metric: "ISO 27001", label: "Certified Security Protocols" },
                { metric: "Global", label: "Multi-Region Deployments" },
              ].map((stat, idx) => (
                <div key={idx} className="p-8 md:p-12 text-center">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 font-display">{stat.metric}</h3>
                  <p className="text-slate-400 font-semibold tracking-wide uppercase text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus Areas Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-0">
          <div className="bg-slate-800 p-8 md:p-12 border border-slate-700 hover:border-blue-500/50 transition-colors group rounded-xl md:rounded-none">
            <Network className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 font-display">Legacy Modernization</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-md">
              Strangler-fig migrations of monolithic on-premise applications to resilient, cloud-agnostic microservices architectures.
            </p>
          </div>

          <div className="bg-slate-800 p-8 md:p-12 border border-slate-700 hover:border-blue-500/50 transition-colors group rounded-xl md:rounded-none">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 font-display">Enterprise Security</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-md">
              Identity & Access Management (IAM), zero-trust network architectures, and comprehensive data encryption at rest and in transit.
            </p>
          </div>

          <div className="bg-slate-800 p-8 md:p-12 border border-slate-700 hover:border-blue-500/50 transition-colors group rounded-xl md:rounded-none">
            <Globe2 className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 font-display">Cross-Border Integrations</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-md">
              Message queues and enterprise service buses communicating seamlessly across diverse geographical tech ecosystems.
            </p>
          </div>

          <div className="bg-slate-800 p-8 md:p-12 border border-slate-700 hover:border-blue-500/50 transition-colors group rounded-xl md:rounded-none">
            <Building2 className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 font-display">Workflow Automation</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-md">
              Custom internal tooling, ERP integrations, and RPA implementations to eliminate manual processes and reduce overhead.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Enterprises;
