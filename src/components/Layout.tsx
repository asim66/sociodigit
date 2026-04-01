import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotWidget from './ChatbotWidget';

import { MessageCircle, ArrowUp, X, Mail, Sparkles } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('exit_popup_shown')) {
        setShowExitPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const closeExitPopup = () => {
    setShowExitPopup(false);
    localStorage.setItem('exit_popup_shown', 'true');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-deep-space-blue text-white">
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/919438171771"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-4 md:left-8 z-40 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
      >


        <MessageCircle size={32} />
        <span className="absolute left-full ml-4 px-4 py-2 glass text-white text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          Chat with us
        </span>
      </a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 md:right-8 z-40 w-10 h-10 md:w-12 md:h-12 glass text-brand-orange rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-orange hover:text-white transition-all duration-300 border border-white/10"

          >

            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-deep-space-blue/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass p-10 rounded-[2.5rem] shadow-2xl text-center border-white/10 neon-border overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 -z-10"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-orange/20 rounded-full blur-3xl -z-10" />
              
              <button 
                onClick={closeExitPopup}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(0,85,255,0.2)]">
                <Sparkles size={40} />
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-4 text-white">Wait! Before you go...</h3>
              <p className="text-white/60 mb-8 text-lg">
                Get our exclusive <span className="text-brand-orange font-bold">"SaaS Scaling Guide"</span> and a free 30-minute tech audit for your startup.
              </p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your work email"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-orange outline-none transition-all text-white placeholder:text-white/20"
                />
                <button className="btn-primary w-full">
                  Send Me the Guide
                </button>
              </form>
              
              <p className="mt-6 text-xs text-white/40">
                We respect your privacy. No spam, ever.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sociodigit Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default Layout;
