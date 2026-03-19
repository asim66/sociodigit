import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Zap, Globe, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      title: "SaaS Platform for FinTech",
      client: "GlobalPay",
      category: "Software Development",
      image: "https://picsum.photos/seed/case-1/800/600",
      problem: "The client needed a scalable dashboard to handle millions of transactions with real-time analytics.",
      strategy: "We architected a microservices-based platform using Next.js and Go, deployed on AWS EKS.",
      results: ["40% increase in transaction speed", "99.99% uptime achieved", "2M+ active users supported"],
      metrics: [
        { label: "Speed", value: "+40%" },
        { label: "Uptime", value: "99.99%" }
      ]
    },
    {
      title: "Cloud Migration & DevOps",
      client: "StreamLine",
      category: "Cloud & DevOps",
      image: "https://picsum.photos/seed/case-2/800/600",
      problem: "High infrastructure costs and slow deployment cycles were hindering growth.",
      strategy: "Implemented IaC with Terraform and migrated to a serverless architecture on GCP.",
      results: ["60% reduction in cloud costs", "Deployment time reduced from hours to minutes", "Auto-scaling implemented"],
      metrics: [
        { label: "Cost Saving", value: "60%" },
        { label: "Deploy Time", value: "-85%" }
      ]
    },
    {
      title: "QA Automation for E-commerce",
      client: "ShopMax",
      category: "QA Automation",
      image: "https://picsum.photos/seed/case-3/800/600",
      problem: "Manual testing was causing frequent production bugs and delayed releases.",
      strategy: "Built a custom automation framework using Playwright and integrated it into the CI/CD pipeline.",
      results: ["90% test coverage achieved", "Bugs reduced by 75% in production", "Release frequency doubled"],
      metrics: [
        { label: "Coverage", value: "90%" },
        { label: "Bug Reduction", value: "75%" }
      ]
    },
    {
      title: "SEO & Content Growth",
      client: "HealthHub",
      category: "Digital Marketing",
      image: "https://picsum.photos/seed/case-4/800/600",
      problem: "Low organic traffic and high customer acquisition costs.",
      strategy: "Executed a comprehensive SEO audit and content strategy targeting high-intent keywords.",
      results: ["300% increase in organic traffic", "50% reduction in CAC", "#1 ranking for 50+ keywords"],
      metrics: [
        { label: "Traffic", value: "+300%" },
        { label: "CAC", value: "-50%" }
      ]
    }
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-display font-bold mb-8">
              Case <span className="gradient-text">Studies</span>.
            </h1>
            <p className="text-2xl text-primary/60 leading-relaxed">
              Real problems. Strategic solutions. Measurable results. Explore how we've helped our clients achieve engineering and growth excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom space-y-32">
          {cases.map((c, index) => (
            <div key={c.title} className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">{c.category}</div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">{c.title}</h2>
                <div className="text-xl font-bold text-primary/40 mb-8">Client: {c.client}</div>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <h4 className="text-lg font-bold mb-2 flex items-center text-primary">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">P</span>
                      The Problem
                    </h4>
                    <p className="text-primary/60 leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 flex items-center text-primary">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">S</span>
                      The Strategy
                    </h4>
                    <p className="text-primary/60 leading-relaxed">{c.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 flex items-center text-primary">
                      <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 text-sm">R</span>
                      The Results
                    </h4>
                    <ul className="space-y-2">
                      {c.results.map((r, i) => (
                        <li key={i} className="flex items-center text-primary/60">
                          <ArrowRight size={14} className="mr-2 text-emerald-500" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 p-8 glass rounded-3xl">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-3xl font-display font-bold text-secondary">{m.value}</div>
                      <div className="text-xs font-bold text-primary/40 uppercase tracking-widest">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl group">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-7xl font-display font-bold mb-8">Ready to be our next success story?</h2>
          <Link to="/contact" className="btn-primary">Start Your Project</Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
