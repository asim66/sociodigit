// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Globe2, Shield, Network, ArrowRight, 
  CheckCircle2, ChevronRight, Server, Lock, RefreshCw, 
  Database, Cpu, HelpCircle 
} from 'lucide-react';
import Link from 'next/link';

const enterpriseCapabilities = [
  {
    title: "Legacy Monolith Modernization",
    desc: "Strangler-fig migrations and domain-driven design decomposing on-premise systems into modular, cloud-native microservices.",
    points: ["Zero-downtime database replication", "Containerization via Docker & Kubernetes", "Event-driven Apache Kafka messaging", "Automated code refactoring pipelines"]
  },
  {
    title: "Zero-Trust Enterprise Security",
    desc: "Rigorous identity boundaries, role-based access controls, and automated compliance auditing across global infrastructure.",
    points: ["Multi-Factor SAML / SSO integration", "SOC 2 Type II & ISO 27001 readiness", "Automated static & dynamic security testing", "Encrypted data meshes at rest and in transit"]
  },
  {
    title: "Multi-Cloud & Hybrid Infrastructure",
    desc: "High-availability multi-region architectures deployed across AWS, GCP, and Azure with automated failover guarantees.",
    points: ["Infrastructure as Code with Terraform", "Automated blue/green deployment pipelines", "99.999% SLA availability targets", "Cost-governance & cloud spend optimization"]
  },
  {
    title: "Enterprise ERP & Workflow Automation",
    desc: "Custom internal portals, CRM/ERP integrations, and high-throughput data pipelines eliminating manual operational overhead.",
    points: ["Bi-directional SAP / Salesforce connectors", "Custom executive telemetry dashboards", "Automated RPA data extraction", "Real-time enterprise search indexation"]
  }
];

const enterpriseFaqs = [
  {
    q: "How do you guarantee zero downtime during legacy system migrations?",
    a: "We implement the Strangler Fig architectural pattern alongside shadow data pipelines and bi-directional replication. Both systems run in parallel with real-time verification before cutover, ensuring zero disruption to live enterprise workflows."
  },
  {
    q: "What security and governance standards do you adhere to?",
    a: "Our software engineering lifecycle is ISO 27001 and SOC 2 Type II compliant. Every pull request undergoes automated vulnerability scanning, dependency auditing, and strict role-based access enforcement."
  },
  {
    q: "How do your teams integrate with existing internal enterprise engineering groups?",
    a: "We operate as an embedded, co-engineering partner or dedicated squad. We align with your Jira, GitHub Enterprise, and agile release cadences to accelerate dev velocity while maintaining architectural rigor."
  }
];

const Enterprises = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-slate-900 text-slate-200">
      <div className="container-custom relative z-10">
        {/* Corporate Hero */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-slate-400 uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4 md:mb-6 flex items-center justify-center">
              <Building2 className="mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5 text-blue-500" /> Enterprise IT &amp; Cloud Engineering
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8 font-display">
              Digital transformation <br className="hidden lg:block" /> at global enterprise scale.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              We partner with scaling mid-market and enterprise organizations to modernize legacy systems, automate complex workflows, and establish secure cloud-native architectures that drive predictable operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 font-semibold rounded-xl transition-colors flex items-center shadow-lg shadow-blue-900/40 text-base">
                <span>Schedule Architecture Review</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services/digital-transformation" className="w-full sm:w-auto justify-center border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-4 font-semibold rounded-xl transition-colors flex items-center text-base">
                Explore Digital Transformation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Global Architecture / Metrics */}
        <div className="mb-20 md:mb-32 px-4 md:px-0">
          <div className="bg-slate-800/50 border border-slate-700 p-1 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700 bg-slate-900 rounded-xl">
              {[
                { metric: "99.999%", label: "SLA Guaranteed Availability" },
                { metric: "SOC 2 / ISO", label: "Enterprise Security Protocols" },
                { metric: "Multi-Cloud", label: "AWS, GCP & Azure Deployments" },
              ].map((stat, idx) => (
                <div key={idx} className="p-8 md:p-12 text-center">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 font-display">{stat.metric}</h3>
                  <p className="text-slate-400 font-semibold tracking-wide uppercase text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus Areas Matrix */}
        <div className="mb-20 md:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Enterprise Modernization Pillars</h2>
            <p className="text-slate-400 text-lg">Architectural discipline meets rapid execution to dismantle technical debt and accelerate delivery.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {enterpriseCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-slate-800 p-8 md:p-10 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-3 font-display">{cap.title}</h3>
                <p className="text-slate-400 mb-6 text-sm md:text-base leading-relaxed">{cap.desc}</p>
                <div className="space-y-2.5">
                  {cap.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center text-xs md:text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-400 mr-2.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Callout */}
        <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-900 border border-blue-500/30 p-8 md:p-12 rounded-3xl mb-20 md:mb-32 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block mb-2">Verified Enterprise Outcome</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Infrastructure as Code &amp; Serverless Migration</h3>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
              Standardized cloud infrastructure with Terraform across Google Cloud and Kubernetes, reducing monthly cloud infrastructure costs by 60% with zero deployment downtime.
            </p>
          </div>
          <Link href="/case-studies" className="btn-primary whitespace-nowrap bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold shrink-0">
            View Case Study
          </Link>
        </div>

        {/* Enterprise FAQ */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-3">Enterprise Governance &amp; Strategy FAQ</h2>
            <p className="text-slate-400">Technical insights on integration, team collaboration, and risk management.</p>
          </div>

          <div className="space-y-4">
            {enterpriseFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-white hover:text-blue-400 transition-colors"
                >
                  <span className="text-lg">{faq.q}</span>
                  <ChevronRight size={20} className={`transform transition-transform ${openFaq === idx ? 'rotate-90 text-blue-400' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-700 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-800/80 border border-slate-700 p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Ready to Modernize Your Enterprise Infrastructure?</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Schedule an executive discovery session with Sociodigit's enterprise architects to map your technical roadmap.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all">
                Request Architecture Consultation
              </Link>
              <Link href="/services/security-consulting" className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                Explore Security Consulting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprises;
