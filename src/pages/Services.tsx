import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Cpu, Shield, Server, Search, Layers, 
  CheckCircle2, ArrowRight, Globe, Database, 
  Settings, BarChart, Lock, Map, RefreshCw, FileSearch, Pen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceGroups = [
    {
      category: "Digital Core",
      color: "from-orange-500/20 to-red-500/10",
      services: [
        {
          id: "devops",
          title: "Cloud & DevOps",
          path: "/services/devops",
          icon: <Server size={40} />,
          desc: "Automate your infrastructure and deployment pipelines for maximum reliability and speed.",
          benefits: ["99.9% Uptime", "Faster Deployments", "Auto-Scaling", "Disaster Recovery"],
          tech: ["AWS", "GCP", "Kubernetes", "Terraform"],
          process: ["Audit", "Automation", "Migration", "Monitoring"]
        },
        {
          id: "software-dev",
          title: "Software Development",
          path: "/services/software-development",
          icon: <Code2 size={40} />,
          desc: "We build scalable, high-performance software that empowers businesses to thrive in the digital age.",
          benefits: ["Scalable Architecture", "Modern Tech Stack", "Security First", "User-Centric Design"],
          tech: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"],
          process: ["Discovery", "Design", "Development", "QA", "Deployment"]
        },
        {
          id: "qa",
          title: "QA Automation",
          path: "/services/qa-automation",
          icon: <Shield size={40} />,
          desc: "Comprehensive testing services to ensure your software is bug-free and performs reliably under pressure.",
          benefits: ["Reduced Time-to-Market", "Higher Reliability", "Cost Savings", "Better UX"],
          tech: ["Selenium", "Playwright", "Cypress", "JMeter"],
          process: ["Test Planning", "Scripting", "Execution", "Reporting"]
        },
        {
          id: "infrastructure",
          title: "Infrastructure",
          path: "/services/infrastructure",
          icon: <Database size={40} />,
          desc: "Robust, secure infrastructure design and management to keep your systems running 24/7 at peak performance.",
          benefits: ["High Availability", "Cost Efficiency", "Security Hardening", "Scalable Setup"],
          tech: ["Linux", "Docker", "Nginx", "PostgreSQL", "Redis"],
          process: ["Assessment", "Architecture", "Setup", "Monitoring"]
        },
      ]
    },
    {
      category: "Digital Experience",
      color: "from-blue-500/20 to-purple-500/10",
      services: [
        {
          id: "design",
          title: "Product Design",
          path: "/services/product-design",
          icon: <Layers size={40} />,
          desc: "We combine aesthetics with intuitive functionality to build digital products that users love.",
          benefits: ["UI/UX Design", "Prototyping", "User Research", "Design Systems"],
          tech: ["Figma", "Adobe XD", "Sketch", "Framer"],
          process: ["Discovery", "Wireframing", "UI Design", "Testing"]
        },
        {
          id: "marketing",
          title: "Digital Marketing",
          path: "/services/digital-marketing",
          icon: <Search size={40} />,
          desc: "Data-driven marketing strategies to grow your user base and increase your ROI across all channels.",
          benefits: ["High-Quality Leads", "Brand Authority", "Increased Traffic", "Better Conversion"],
          tech: ["SEO", "PPC", "Meta Ads", "Google Ads"],
          process: ["Research", "Campaign Setup", "Optimization", "Scaling"]
        },
        {
          id: "ux",
          title: "User Experience",
          path: "/services/product-design",
          icon: <Globe size={40} />,
          desc: "End-to-end UX strategy and research to ensure your product delights users at every touchpoint.",
          benefits: ["Higher Retention", "Lower Bounce Rate", "Accessibility", "Intuitive Flows"],
          tech: ["User Interviews", "Usability Testing", "Heatmaps", "A/B Testing"],
          process: ["Research", "Personas", "Prototyping", "Validation"]
        },
        {
          id: "content",
          title: "Content Strategy",
          path: "/services/digital-marketing",
          icon: <Pen size={40} />,
          desc: "Strategic content planning and creation that builds authority, attracts audiences, and drives conversions.",
          benefits: ["Brand Voice", "SEO Content", "Lead Nurturing", "Audience Growth"],
          tech: ["Content Audits", "SEO Writing", "Social Media", "Email Marketing"],
          process: ["Audit", "Strategy", "Creation", "Distribution"]
        },
      ]
    },
    {
      category: "Consulting",
      color: "from-emerald-500/20 to-teal-500/10",
      services: [
        {
          id: "strategy",
          title: "Strategy & Roadmap",
          path: "/services/consulting",
          icon: <Map size={40} />,
          desc: "We work with your leadership team to craft a clear, actionable technology roadmap aligned with your business goals.",
          benefits: ["Clear Vision", "Prioritized Goals", "Resource Alignment", "Milestone Tracking"],
          tech: ["OKR Frameworks", "Agile Planning", "Market Analysis", "Competitive Research"],
          process: ["Discovery", "Analysis", "Strategy", "Roadmap"]
        },
        {
          id: "transformation",
          title: "Digital Transformation",
          path: "/services/consulting",
          icon: <RefreshCw size={40} />,
          desc: "End-to-end digital transformation programs to modernize legacy systems and build future-ready organizations.",
          benefits: ["Modernized Stack", "Operational Efficiency", "Competitive Edge", "Scalability"],
          tech: ["Cloud Migration", "Process Automation", "Data Analytics", "API Integration"],
          process: ["Assessment", "Planning", "Migration", "Adoption"]
        },
        {
          id: "tech-audit",
          title: "Tech Audit",
          path: "/services/consulting",
          icon: <FileSearch size={40} />,
          desc: "A thorough review of your existing technology stack to identify risks, bottlenecks, and opportunities for improvement.",
          benefits: ["Risk Identification", "Performance Gains", "Cost Reduction", "Security Review"],
          tech: ["Code Review", "Architecture Review", "Performance Testing", "Security Scanning"],
          process: ["Scoping", "Audit", "Findings", "Recommendations"]
        },
        {
          id: "security",
          title: "Security Consulting",
          path: "/services/consulting",
          icon: <Lock size={40} />,
          desc: "Protect your business with enterprise-grade security strategies, penetration testing, and compliance consulting.",
          benefits: ["Threat Mitigation", "Compliance", "Data Protection", "Incident Response"],
          tech: ["Pen Testing", "OWASP", "ISO 27001", "GDPR Compliance"],
          process: ["Assessment", "Testing", "Hardening", "Monitoring"]
        },
      ]
    }
  ];

  return (
    <div className="pt-32">
      {/* Header */}
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
                Our <span className="gradient-text">Services</span>.
              </h1>
              <p className="text-2xl text-white/60 leading-relaxed">
                From the first line of code to the final marketing campaign, we provide the full-stack expertise needed to build and grow digital products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding">
        <div className="container-custom space-y-40">
          {serviceGroups.map((group) => (
            <div key={group.category}>
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className={`inline-block px-6 py-3 rounded-2xl bg-gradient-to-r ${group.color} border border-white/10 mb-4`}>
                  <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">{group.category}</span>
                </div>
                <div className="h-px bg-gradient-to-r from-brand-orange/30 via-white/10 to-transparent mt-4" />
              </motion.div>

              {/* Services in this group */}
              <div className="space-y-32">
                {group.services.map((service, index) => (
                  <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-20 items-center`}>
                    <motion.div 
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className={index % 2 !== 0 ? 'lg:order-2' : ''}
                    >
                      <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,85,255,0.2)]">
                        {service.icon}
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">{service.title}</h2>
                      <p className="text-xl text-white/60 mb-10 leading-relaxed">
                        {service.desc}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 mb-12">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center space-x-3 group">
                            <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                              <CheckCircle2 className="text-brand-orange group-hover:text-white" size={14} />
                            </div>
                            <span className="font-bold text-white/80">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Technologies</h4>
                          <div className="flex flex-wrap gap-3">
                            {service.tech.map((t) => (
                              <span key={t} className="px-4 py-2 glass rounded-xl text-sm font-bold border border-white/10 hover:border-brand-orange/50 transition-colors">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Our Process</h4>
                          <div className="flex items-center space-x-4 overflow-x-auto pb-2 no-scrollbar">
                            {service.process.map((p, i) => (
                              <React.Fragment key={p}>
                                <div className="flex flex-col items-center shrink-0">
                                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-brand-orange flex items-center justify-center text-xs font-bold mb-2 shadow-[0_0_15px_rgba(0,85,255,0.1)]">
                                    {i + 1}
                                  </div>
                                  <span className="text-xs font-bold text-white/60 uppercase tracking-tighter">{p}</span>
                                </div>
                                {i < service.process.length - 1 && (
                                  <div className="w-8 h-px bg-white/10 shrink-0 mb-6" />
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-12">
                        <Link to={service.path} className="btn-primary inline-flex items-center space-x-2">
                          <span>Explore {service.title}</span>
                          <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="btn-outline inline-flex items-center space-x-2">
                          <span>Inquire Now</span>
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                    >
                      <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-[3rem] blur-3xl -z-10" />
                      <div className="glass p-4 rounded-[3rem] border-white/10 neon-border">
                        <img 
                          src={`https://picsum.photos/seed/service-${service.id}/800/600`} 
                          alt={service.title} 
                          className="rounded-[2rem] shadow-2xl"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="glass p-12 lg:p-24 rounded-[3rem] text-center border-white/10 neon-border relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10 -z-10"></div>
            <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/10 blur-[150px] -z-10" />
            
            <h2 className="text-4xl lg:text-7xl font-display font-bold mb-8">Not Sure What You Need?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Book a free 30-minute consultation with our experts to discuss your project and find the best solution for your business.
            </p>
            <Link to="/contact" className="btn-primary">Book Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
