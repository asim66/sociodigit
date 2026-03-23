import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Cpu, Globe, Layers, Shield, Smartphone, 
  ArrowRight, CheckCircle2, Users, Rocket, 
  Zap, Server, Search, 
  ChevronRight, Terminal, Database, Cloud, Activity, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HomeHeroImage from '../assets/generated/home_hero_tech_render_1773750696589.png';
import AnimatedCounter from '../components/AnimatedCounter';

const HomeLight = () => {
  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Software Development",
      desc: "Custom SaaS platforms, web apps, and enterprise software built with React, Next.js, and Node.js.",
      path: "/services/software-development",
      metric: "< 100ms Load"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Software Consulting",
      desc: "Strategic technology planning, MVP development, and architecture design for scaling startups.",
      path: "/services/consulting",
      metric: "50% Faster"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "QA & Automation",
      desc: "Comprehensive manual and automated testing using Playwright, Selenium, and Cypress.",
      path: "/services/qa-automation",
      metric: "99.9% Bug-Free"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Cloud & DevOps",
      desc: "Kubernetes, CI/CD pipelines, and cloud infrastructure management on AWS, GCP, and Azure.",
      path: "/services/devops",
      metric: "99.99% Uptime"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Digital Marketing",
      desc: "Data-driven SEO, PPC, and lead generation campaigns to grow your digital presence.",
      path: "/services/digital-marketing",
      metric: "+300% ROI"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "UI/UX Product Design",
      desc: "User-centric design that combines aesthetics with intuitive functionality for digital products.",
      path: "/services/product-design",
      metric: "4x Retention"
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
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans pt-20 relative z-20">
      
      {/* Absolute positioning cover for dark background from body */}
      <div className="absolute inset-0 bg-white -z-20 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 bg-white border-b border-slate-100 overflow-hidden">
        {/* Soft UI Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-brand-orange text-sm font-bold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                <span>Sociodigit 2.0 is Live. Explore the platform.</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight tracking-tight text-slate-900 mb-6 border-none">
                Build Faster.<br/>Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">Smarter.</span>
              </h1>

              <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                The all-in-one engineering partner for modern SaaS companies. We build scalable software, automate quality, and power your growth infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 w-full sm:w-auto">
                  Start Your Project
                </Link>
                <Link to="/services" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm w-full sm:w-auto">
                  View Solutions
                </Link>
              </div>
              
              <div className="mt-10 flex items-center justify-center space-x-6 text-sm font-medium text-slate-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Enterprise Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Zero Lock-in</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner - Light Mode Marquee */}
      <section className="py-10 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="container-custom">
           <p className="text-center text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted Infrastructure Powered By</p>
        </div>
        <div className="flex marquee-container overflow-hidden w-full relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee whitespace-nowrap items-center min-w-max">
            {/* First Set */}
            <div className="flex space-x-16 md:space-x-24 px-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              {['REACT', 'NEXT.JS', 'NODE.JS', 'AWS', 'KUBERNETES', 'POSTGRESQL', 'TERRAFORM', 'PLAYWRIGHT'].map((tech) => (
                <span key={`l1-${tech}`} className="text-xl md:text-2xl font-display font-black tracking-tighter text-slate-400 hover:text-brand-orange transition-colors cursor-default select-none">{tech}</span>
              ))}
            </div>
            {/* Duplicated set for seamless loop */}
            <div className="flex space-x-16 md:space-x-24 px-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              {['REACT', 'NEXT.JS', 'NODE.JS', 'AWS', 'KUBERNETES', 'POSTGRESQL', 'TERRAFORM', 'PLAYWRIGHT'].map((tech) => (
                <span key={`l2-${tech}`} className="text-xl md:text-2xl font-display font-black tracking-tighter text-slate-400 hover:text-brand-orange transition-colors cursor-default select-none">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-base font-bold text-brand-orange uppercase tracking-wide mb-3">Our Platform</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Everything you need to ship world-class software</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                A unified ecosystem of engineering and marketing services designed to take your product from ideation to initial public offering.
              </p>
            </div>
            <div className="mt-8 md:mt-0 hidden md:block">
              <Link to="/services" className="inline-flex items-center space-x-2 text-brand-orange font-bold hover:text-orange-600 transition-colors">
                <span>View all features</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-colors">
                  {service.icon}
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {service.desc}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-brand-orange transition-colors">
                    {service.metric}
                  </span>
                  <Link to={service.path} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics / Showcase Section */}
      <section className="py-24 bg-white border-y border-slate-200 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-base font-bold text-blue-600 uppercase tracking-wide mb-3">Scale Securely</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Built for teams that demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">performance</span>.
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Connect your engineering pipeline seamlessly. Scale your infrastructure with zero downtime. Accelerate growth and dominate your market.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Single Tenant Architecture Available', 'SOC2 Compliant Processes', 'Dedicated Engineering Pods', '24/7 Priority Support'].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
                <span>Talk to Technical Sales</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="relative">
              {/* SaaS Dashboard Mockup Illustration */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl shadow-2xl p-4 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex space-x-2 mb-4 px-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="bg-white border border-slate-100 rounded-xl p-6 h-80 flex flex-col blur-[1px] hover:blur-none transition-all">
                   <div className="h-8 w-1/3 bg-slate-100 rounded-md mb-6 animate-pulse"></div>
                   <div className="flex space-x-4 mb-6">
                     <div className="h-24 flex-1 bg-slate-50 border border-slate-100 rounded-lg flex flex-col justify-center px-4">
                       <span className="text-xs text-slate-400 font-bold mb-1">UPTIME</span>
                       <span className="text-2xl font-black text-emerald-500">99.99%</span>
                     </div>
                     <div className="h-24 flex-1 bg-slate-50 border border-slate-100 rounded-lg flex flex-col justify-center px-4">
                       <span className="text-xs text-slate-400 font-bold mb-1">LATENCY</span>
                       <span className="text-2xl font-black text-blue-500">24ms</span>
                     </div>
                   </div>
                   <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg relative overflow-hidden">
                     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-orange/20 to-transparent"></div>
                     <svg className="absolute bottom-0 w-full h-24" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,100 L0,50 Q25,80 50,30 T100,20 L100,100 Z" fill="#E8421A" opacity="0.1" />
                        <path d="M0,100 L0,60 Q25,90 50,40 T100,30 L100,100 Z" fill="none" stroke="#E8421A" strokeWidth="2" />
                     </svg>
                   </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 shadow-xl rounded-xl p-4 flex items-center space-x-4 animate-bounce hover:animate-none">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <Activity size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold">SYSTEM STATUS</div>
                  <div className="text-sm font-black text-slate-900">All systems operational</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTA4MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+Cjwvc3ZnPg==')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-800">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-orange-500/30 relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Code2 size={200} />
            </div>
            <div className="absolute bottom-0 left-0 p-12 opacity-10 -scale-y-100">
               <Layers size={180} />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Start building today.</h2>
              <p className="text-orange-100 text-lg md:text-xl mb-10">
                Join the fastest-growing startups and enterprises that run on our robust engineering frameworks and marketing engines.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="px-8 py-4 bg-white text-brand-orange rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-lg">
                  Get Started for Free
                </Link>
                <Link to="/about" className="px-8 py-4 bg-orange-700/50 text-white rounded-lg font-bold hover:bg-orange-700/70 border border-orange-500 transition-colors">
                  Learn about our process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeLight;
