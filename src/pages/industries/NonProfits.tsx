import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, TrendingUp } from 'lucide-react';
import NonProfitImage from '../../assets/generated/nonprofit_global_impact_render_1773750822773.png';

const NonProfits = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      
      {/* Immersive Image Hero */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply z-10"></div>
          <img 
            src={NonProfitImage} 
            alt="Sociodigit - Empowering Global Social Impact" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heart className="w-12 h-12 text-orange-500 mx-auto mb-8" />
            <h1 className="text-6xl lg:text-8xl font-black mb-6 tracking-tight font-display">
              Technology for <br/> <span className="text-orange-400 italic">Human</span> Impact.
            </h1>
            <p className="text-2xl text-stone-200 mb-12 max-w-2xl mx-auto font-light">
              We empower NGOs and non-profits with robust digital platforms to amplify their storytelling, streamline operations, and drive global fundraising.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-sm font-bold text-lg transition-colors tracking-wide uppercase">
              How We Help
            </button>
          </motion.div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="py-16 md:py-32 container-custom px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-stone-800 font-display">
            Mission-driven organizations shouldn't be held back by outdated technology.
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            Whether you are coordinating international disaster relief or managing local community initiatives, we build accessible, secure, and scalable solutions that reduce overhead so you can focus on what matters most: your mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <motion.div whileHover={{ y: -10 }} className="bg-white p-6 md:p-10 border-t-4 border-orange-500 shadow-xl">
            <Globe className="w-8 h-8 md:w-10 md:h-10 text-orange-600 mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-stone-900 font-display">Campaign Platforms</h3>
            <p className="text-sm md:text-base text-stone-600 leading-relaxed">
              Highly aesthetic, narrative-driven campaign websites optimized for conversion, enabling seamless digital fundraising and awareness at global scale.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white p-6 md:p-10 border-t-4 border-stone-800 shadow-xl">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-stone-800 mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-stone-900 font-display">Donor Portals</h3>
            <p className="text-sm md:text-base text-stone-600 leading-relaxed">
              Secure authentication portals where donors can track their contributions, see the direct impact of their funds, and manage recurring donations.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white p-6 md:p-10 border-t-4 border-sage-600 shadow-xl" style={{ borderTopColor: '#4b5563'}}>
            <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-stone-600 mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-stone-900 font-display">Operations & Logistics</h3>
            <p className="text-sm md:text-base text-stone-600 leading-relaxed">
              Custom internal tools to manage volunteers, track resources, and visualize data securely to report impact to stakeholders.
            </p>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default NonProfits;
