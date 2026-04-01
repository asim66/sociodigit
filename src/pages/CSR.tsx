import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe2, BookOpen, Leaf, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CSR = () => {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-stone-50 text-stone-900 relative overflow-hidden">
      
      {/* Soft Ambient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-100 to-teal-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-50 to-amber-100 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Editorial Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-bold mb-8 text-sm md:text-base tracking-wide uppercase border border-emerald-200">
              <Heart className="w-4 h-4" />
              <span>Social Impact & CSR</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] mb-8 text-stone-900 font-display">
              Building a better <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">tomorrow, today.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-600 mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
              At Sociodigit, we believe technology should be an equalizer, not a divider. Our Corporate Social Responsibility initiatives are designed to bridge the digital divide, foster tech education, and champion sustainable digital practices.
            </p>
          </motion.div>
        </div>

        {/* Impact Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24 md:mb-32"
        >
          {[
            { value: "50+", label: "NGOs Supported", color: "text-emerald-600", bg: "bg-emerald-50" },
            { value: "10k+", label: "Students Empowered", color: "text-blue-600", bg: "bg-blue-50" },
            { value: "100%", label: "Carbon Neutral Hosting", color: "text-teal-600", bg: "bg-teal-50" },
            { value: "5k+", label: "Pro-bono Tech Hours", color: "text-orange-600", bg: "bg-orange-50" }
          ].map((stat, idx) => (
            <div key={idx} className={`p-6 md:p-10 rounded-[2rem] border border-stone-200/60 shadow-sm ${stat.bg} text-center flex flex-col justify-center items-center hover:-translate-y-1 transition-transform`}>
              <div className={`text-4xl md:text-5xl lg:text-6xl font-black mb-3 ${stat.color} font-display tracking-tight`}>{stat.value}</div>
              <div className="text-stone-700 font-bold text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Key Pillars */}
        <div className="mb-24 md:mb-32 px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4 font-display">Our Core Pillars</h2>
              <p className="text-lg text-stone-600 font-medium">How we channel our expertise and resources to create lasting societal value.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: BookOpen,
                title: "Digital Literacy & Education",
                desc: "We run coding bootcamps and digital literacy workshops for underprivileged communities, equipping the next generation with the technical skills required for the modern economy.",
                theme: "emerald"
              },
              {
                icon: Globe2,
                title: "Tech for Non-Profits",
                desc: "Sociodigit dedicates a portion of its engineering resources annually to build scalable, secure platforms for NGOs pro-bono, amplifying their reach and operational efficiency.",
                theme: "blue"
              },
              {
                icon: Leaf,
                title: "Sustainable Digital Ecosystems",
                desc: "We are committed to green computing. All our internal operations and open-source infrastructure rely on 100% renewable energy and carbon-neutral cloud providers.",
                theme: "teal"
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group relative"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${pillar.theme}-100 text-${pillar.theme}-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4 font-display">{pillar.title}</h3>
                <p className="text-stone-600 leading-relaxed font-medium">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Narrative */}
        <div className="bg-stone-900 text-stone-50 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden mb-24 md:mb-32 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] font-display">
                Open Source <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Commitment.</span>
              </h2>
              <p className="text-lg md:text-xl text-stone-400 mb-8 leading-relaxed font-medium">
                We believe in democratizing access to high-quality software. That's why we continually open-source internal frameworks, boilerplates, and tools that help solo developers and cash-strapped startups build better architectures faster and entirely for free.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-stone-300 font-medium">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 mr-3" /> Dedicated monthly hours to OSS contributions
                </li>
                <li className="flex items-center text-stone-300 font-medium">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 mr-3" /> Free architectural audits for student initiatives
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
                 <div className="text-4xl font-black text-emerald-400 mb-2 font-display">50+</div>
                 <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Repositories</div>
               </div>
               <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md mt-12">
                 <div className="text-4xl font-black text-teal-400 mb-2 font-display">2M+</div>
                 <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Downloads</div>
               </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-10 md:p-20"
        >
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-6 font-display">Partner with our Impact Team</h2>
          <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto font-medium">
            Are you an NGO, community leader, or educator looking for technical partnership? We'd love to hear how we can help amplify your mission.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 md:px-10 py-4 rounded-full font-bold text-lg md:text-xl transition-all shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-1"
          >
            Reach Out <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default CSR;
