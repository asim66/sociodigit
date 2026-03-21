import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Search, Zap, Activity, ChevronRight, BarChart, Crosshair, ArrowRight, TrendingUp, Layers, Code2, AlertTriangle, CheckCircle2, RefreshCw, Clock, Settings, PieChart, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const comparisonData = [
  {
    traditional: "Keyword Stuffing & Density metrics",
    modern: "AI-driven Search Intent Modeling",
  },
  {
    traditional: "Spammy, low-quality Backlink buying",
    traditionalIcon: <AlertTriangle size={16} className="text-red-500" />,
    modern: "Digital PR & Authentic Authority Building",
    modernIcon: <CheckCircle2 size={16} className="text-emerald-500" />
  },
  {
    traditional: "Guesswork and 'gut feeling' strategies",
    modern: "Data Science & Predictive Analytics",
  },
  {
    traditional: "One-size-fits-all generic templates",
    modern: "Programmatic, hyper-localized SEO",
  }
];

const processSteps = [
  {
    icon: <Search size={24} />,
    title: "Deep Technical Audit",
    desc: "We analyze site architecture, crawlability, and core web vitals using advanced performance metrics.",
    color: "#f97316"
  },
  {
    icon: <Brain size={24} />,
    title: "AI Content Strategy",
    desc: "Leveraging LLMs and NLP to build topic clusters, entity optimization, and content that actually answers user intent.",
    color: "#ec4899"
  },
  {
    icon: <Code2 size={24} />,
    title: "Programmatic Optimization",
    desc: "Scaling on-page SEO dynamically across thousands of pages to capture long-tail, high-converting semantic search queries.",
    color: "#8b5cf6"
  },
  {
    icon: <Activity size={24} />,
    title: "Data-Driven Scaling",
    desc: "Continuous A/B testing, click-through-rate (CTR) optimization, and analytics tracking to compound your traffic growth over time.",
    color: "#10b981"
  }
];

const faqs = [
  {
    q: "Why do I need a specialized local SEO company in Bhubaneswar?",
    a: "Search intent in Odisha is highly localized and competitive. Generic SEO no longer works. You need a partner who understands hyper-localized entity optimization and how to structure your Google Business Profile to capture high-value queries in your specific market."
  },
  {
    q: "How is AI SEO different from traditional digital marketing?",
    a: "Traditional agencies guess which keywords to target and buy spammy backlinks. We use AI and semantic entity extraction to reverse-engineer exactly what Google's algorithm wants to see, ensuring your content perfectly matches user intent and builds sustainable authority."
  },
  {
    q: "How long until my Bhubaneswar business sees organic traffic growth?",
    a: "While SEO builds compounding equity over time, our programmatic optimization and technical audits often yield initial ranking improvements and traffic spikes within the first 30 to 60 days, especially for localized long-tail keywords."
  }
];

const FAQItem: React.FC<{ faq: { q: string; a: string } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass rounded-2xl border border-white/10 overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
        <span className="text-lg font-bold text-white pr-4">{faq.q}</span>
        {isOpen ? <Minus className="text-brand-orange shrink-0" /> : <Plus className="text-brand-orange shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-8 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4">
          {faq.a}
        </div>
      )}
    </div>
  );
};

const BhubaneswarSEO = () => {
  return (
    <div className="pt-32 pb-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f0500 0%, #0c0400 100%)' }}>
      
      <Helmet>
        <title>Best SEO Agency in Bhubaneswar | AI-Driven Digital Marketing | Sociodigit</title>
        <meta name="description" content="Stop relying on outdated keywords. Sociodigit is Bhubaneswar's top AI-driven SEO agency. We engineer organic growth, local search visibility, and ROI for Odisha businesses." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sociodigit",
              "image": "https://sociodigit.com/logo.png",
              "description": "Bhubaneswar's premier AI-driven SEO and digital marketing agency.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 20.2961,
                  "longitude": 85.8245
                },
                "geoRadius": "50000"
              }
            }
          `}
        </script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative px-6 py-20 lg:py-32">
        <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 65%)' }} />
        
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-8 border backdrop-blur-sm"
                style={{ background: 'rgba(236,72,153,0.1)', borderColor: 'rgba(236,72,153,0.3)', color: '#ec4899' }}>
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span>Exclusive for Bhubaneswar</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white">
                Bhubaneswar's Best{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-pink-500 to-purple-500">
                  AI-Driven SEO
                </span>
                {' '}Agency
              </h1>
              <p className="text-xl mb-10 leading-relaxed text-white/60">
                We don't just do SEO. We engineer <strong className="text-white/90">local search visibility in Odisha</strong> using modern technology, AI content analysis, and data science. Stop relying on outdated keywords and spammy backlinks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary group flex items-center justify-center">
                  <span>Get Free AI SEO Audit</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center space-x-4 ml-2 mt-4 sm:mt-0">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f0500] bg-dark-indigo flex items-center justify-center">
                        <Zap size={16} className="text-brand-orange" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-white/50">Trusted by local leaders</div>
                </div>
              </div>
            </motion.div>

            {/* Visual Right Side */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
              <div className="relative z-10 glass p-8 rounded-[2.5rem] shadow-[0_0_50px_rgba(236,72,153,0.1)] border-white/10">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                      <Brain size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-white">AI Engine</div>
                      <div className="text-xs text-white/40">Real-time analysis</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    System Active
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Semantic Entity Extraction", val: "94%" },
                    { label: "Search Intent Matching", val: "98%" },
                    { label: "Competitor Gap Analysis", val: "Running..." }
                  ].map((item, i) => (
                    <div key={i} className="glass px-4 py-3 rounded-xl border-white/5 flex items-center justify-between">
                      <span className="text-sm text-white/70">{item.label}</span>
                      <span className="text-sm font-bold text-brand-orange">{item.val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-end justify-between h-24 gap-2">
                    {[20, 35, 30, 50, 65, 80, 100].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-pink-500/20 to-pink-500/50 rounded-t-md relative group">
                        <motion.div 
                           initial={{ height: 0 }} 
                           animate={{ height: `${h}%` }} 
                           transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                           className="absolute bottom-0 w-full bg-gradient-to-t from-brand-orange to-pink-500 rounded-t-md shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-4 text-xs font-bold text-white/40 uppercase tracking-widest">
                    Projected Traffic Growth
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRADITIONAL VS MODERN ── */}
      <section className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.3em] mb-4">The Sociodigit Difference</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-white">SEO Has Evolved. <span className="text-white/40">Have You?</span></h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Column */}
            <div className="glass p-8 rounded-3xl border border-red-500/20 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
               <div className="flex items-center space-x-3 mb-8">
                 <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <AlertTriangle size={20} />
                 </div>
                 <h4 className="text-xl font-bold text-white">Traditional "SEO"</h4>
               </div>
               <div className="space-y-6">
                 {comparisonData.map((item, i) => (
                   <div key={i} className="flex items-start space-x-3 text-white/50">
                     <div className="mt-1">{item.traditionalIcon || <Crosshair size={16} className="text-red-500" />}</div>
                     <span>{item.traditional}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Modern Column */}
            <div className="glass p-8 rounded-3xl border border-brand-orange/30 relative overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.1)]">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-pink-500" />
               <div className="flex items-center space-x-3 mb-8">
                 <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <Zap size={20} />
                 </div>
                 <h4 className="text-xl font-bold text-white">Modern Tech SEO</h4>
               </div>
               <div className="space-y-6">
                 {comparisonData.map((item, i) => (
                   <div key={i} className="flex items-start space-x-3 text-white">
                     <div className="mt-1">{item.modernIcon || <CheckCircle2 size={16} className="text-brand-orange" />}</div>
                     <span className="font-medium">{item.modern}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR AI Process ── */}
      <section className="py-24">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">Our AI-Powered SEO Process</h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">Scalable, data-driven methodologies engineered to dominate Google Business Profiles and search engines in Bhubaneswar, Odisha, and beyond.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors relative group"
              >
                <div className="absolute top-0 right-0 p-6 text-9xl font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" style={{ color: step.color }}>
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg z-10 relative" style={{ background: `${step.color}20`, color: step.color }}>
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white z-10 relative">{step.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed z-10 relative">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO AS A CONTINUOUS PROCESS ── */}
      <section className="py-24 relative overflow-hidden border-y border-white/5 bg-black/40">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] -z-10 -translate-y-1/2" />
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-6 border"
                style={{ background: 'rgba(249,115,22,0.1)', borderColor: 'rgba(249,115,22,0.3)', color: '#f97316' }}>
                <RefreshCw size={16} className="animate-spin-slow" />
                <span>The SEO Engine</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
                Real SEO is an <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-pink-500">Engine</span>, Not a Switch.
              </h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Many agencies treat SEO like a one-time setup: "Optimize some tags and wait." <strong>That methodology is dead.</strong> Google updates its core search algorithm over 3,000 times a year. To dominate search results, your strategy must be a continuous cycle of data analysis, testing, and engineering.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Activity />, title: "Continuous Monitoring", desc: "We track ranking drops, algorithm flux, and competitor moves 24/7." },
                  { icon: <Settings />, title: "Iterative Engineering", desc: "A/B testing meta descriptions, schema markup, and performance metrics." },
                  { icon: <Clock />, title: "Compound Gains", desc: "SEO builds equity over time. The longer the engine runs, the higher the ROI." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Continuous Loop Visual */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="glass p-12 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.1)] flex items-center justify-center relative aspect-square">
                 {/* Glowing Center */}
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-pink-500/5 rounded-[3rem]" />
                 <div className="w-32 h-32 rounded-full border border-brand-orange/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)] relative z-20 bg-black">
                   <RefreshCw size={48} className="text-brand-orange" style={{ animation: 'spin 8s linear infinite' }} />
                 </div>
                 
                 {/* Orbiting Elements */}
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[75%] h-[75%] rounded-full border border-white/10 z-10 flex items-center justify-start">
                    <div className="w-10 h-10 -ml-5 rounded-full bg-pink-500 flex items-center justify-center shadow-[0_0_15px_#ec4899]"><Brain size={16} className="text-white" /></div>
                 </motion.div>
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[95%] h-[95%] rounded-full border border-white/5 z-0 flex items-end justify-center">
                    <div className="w-12 h-12 -mb-6 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_15px_#a855f7]"><Crosshair size={20} className="text-white" /></div>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DATA ANALYSIS & PIE CHARTS ── */}
      <section className="py-24">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">Data-Driven SEO Allocation</h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">See exactly where we invest engineering effort to maximize your organic growth and traffic retention.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Chart 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-10 rounded-3xl border border-white/10 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white mb-2">Modern SEO Time Allocation</h3>
              <p className="text-white/40 text-sm mb-10 text-center">How our AI Engine prioritizes optimization tasks</p>
              
              <div className="relative w-64 h-64 mb-10">
                {/* CSS Conic Gradient Pie Chart */}
                <div className="w-full h-full rounded-full shadow-[0_0_40px_rgba(236,72,153,0.15)]" 
                     style={{ background: 'conic-gradient(#ec4899 0% 45%, #f97316 45% 75%, #8b5cf6 75% 90%, #10b981 90% 100%)' }}>
                </div>
                {/* Inner cutout for Donut chart effect */}
                <div className="absolute inset-0 m-auto w-40 h-40 bg-[#0c0400] rounded-full flex flex-col items-center justify-center shadow-inner">
                  <PieChart size={32} className="text-white/20 mb-2" />
                  <span className="text-xl font-bold text-white">Data Shift</span>
                </div>
              </div>

              <div className="w-full space-y-3">
                <div className="flex justify-between items-center text-sm"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span><span className="text-white/80">AI Content Engineering</span></div><span className="font-bold text-white">45%</span></div>
                <div className="flex justify-between items-center text-sm"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-brand-orange mr-2"></span><span className="text-white/80">Technical Performance</span></div><span className="font-bold text-white">30%</span></div>
                <div className="flex justify-between items-center text-sm"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span><span className="text-white/80">Digital PR & Authority</span></div><span className="font-bold text-white">15%</span></div>
                <div className="flex justify-between items-center text-sm"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span><span className="text-white/80">A/B Testing & Analytics</span></div><span className="font-bold text-white">10%</span></div>
              </div>
            </motion.div>

            {/* Chart 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass p-10 rounded-3xl border border-white/10 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white mb-2">Sustainable Traffic Retention</h3>
              <p className="text-white/40 text-sm mb-10 text-center">AI-driven semantic clustering vs keyword stuffing</p>
              
              <div className="relative w-64 h-64 mb-10">
                {/* CSS Conic Gradient Pie Chart */}
                <div className="w-full h-full rounded-full shadow-[0_0_40px_rgba(16,185,129,0.15)]" 
                     style={{ background: 'conic-gradient(#10b981 0% 85%, #ef4444 85% 100%)' }}>
                </div>
                {/* Inner cutout for Donut chart effect */}
                <div className="absolute inset-0 m-auto w-40 h-40 bg-[#0c0400] rounded-full flex flex-col items-center justify-center shadow-inner">
                  <TrendingUp size={32} className="text-white/20 mb-2" />
                  <span className="text-xl font-bold text-emerald-400">ROI</span>
                </div>
              </div>

              <div className="w-full space-y-3">
                <div className="flex justify-between items-center text-sm"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span><span className="text-white/80">Modern SEO Rank Retention (12mo)</span></div><span className="font-bold text-emerald-400">85%</span></div>
                <div className="flex justify-between items-center text-sm"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span><span className="text-white/80">Traditional SEO Rank Retention</span></div><span className="font-bold text-red-400">15%</span></div>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/50 text-center">
                  Search engines penalize outdated tactics. Our continuous engineering ensures your rankings survive algorithmic shifts.
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── LOCAL SEO FAQ ── */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Semantic Search Intent</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">Bhubaneswar SEO FAQs</h3>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">Common questions about scaling your organic presence and local search visibility in Odisha.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="glass p-12 lg:p-20 rounded-[3rem] text-center relative overflow-hidden border border-brand-orange/20 shadow-[0_0_80px_rgba(249,115,22,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent" />
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 text-white relative z-10">
              Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-pink-500">Bhubaneswar</span> Search Results
            </h2>
            <p className="text-lg text-white/60 mb-10 relative z-10 max-w-2xl mx-auto">
              Ready to leave your competitors behind? Let our AI engine and growth engineers build a customized SEO strategy for your business.
            </p>
            <div className="relative z-10">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-3 shadow-2xl shadow-brand-orange/20">
                <Brain size={24} />
                <span>Get Your Free AI SEO Audit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BhubaneswarSEO;
