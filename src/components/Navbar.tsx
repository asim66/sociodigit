// @ts-nocheck
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Search, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  theme?: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'dark' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Unified styles for a premium dark look site-wide
  const textColorClass = 'text-white/70';
  const textHoverClass = 'hover:text-brand-orange';
  const activeTextClass = 'text-brand-orange font-bold';
  const borderColorClass = 'border-white/5';
  const glassBorderClass = 'border-white/10';
  const iconColorClass = 'text-white';
  const topBarTextColor = 'text-white/40';
  const isLight = false;

  const navLinks = [
    { 
      name: 'Services', 
      path: '/services',
      megaMenu: [
        {
          title: 'Digital Core',
          links: [
            { name: 'Cloud & DevOps', path: '/services/devops' },
            { name: 'Software Development', path: '/services/software-development' },
            { name: 'QA Automation', path: '/services/qa-automation' },
            { name: 'Infrastructure', path: '/services/infrastructure' },
            { name: 'Custom Apps', path: '/services/custom-apps' },
          ]
        },
        {
          title: 'Digital Experience',
          links: [
            { name: 'Product Design', path: '/services/product-design' },
            { name: 'Digital Marketing', path: '/services/digital-marketing' },
            { name: 'User Experience', path: '/services/user-experience' },
            { name: 'Content Strategy', path: '/services/content-strategy' },
          ]
        },
        {
          title: 'Consulting',
          links: [
            { name: 'Strategy & Roadmap', path: '/services/strategy-roadmap' },
            { name: 'Digital Transformation', path: '/services/digital-transformation' },
            { name: 'Tech Audit', path: '/services/tech-audit' },
            { name: 'Security Consulting', path: '/services/security-consulting' },
          ]
        }
      ]
    },
    { 
      name: 'Industries', 
      path: '/industries',
      megaMenu: [
        {
          title: 'Sectors',
          links: [
            { name: 'SaaS & Tech', path: '/industries/saas' },
            { name: 'E-commerce', path: '/industries/ecommerce' },
            { name: 'FinTech', path: '/industries/fintech' },
            { name: 'Healthcare', path: '/industries/healthcare' },
            { name: 'Education', path: '/industries/education' },
            { name: 'Hospitality & Hotels', path: '/industries/hospitality-hotels' },

          ]
        },
        {
          title: 'Specialized',
          links: [
            { name: 'Startups', path: '/industries/startups' },
            { name: 'Enterprises', path: '/industries/enterprises' },
            { name: 'Non-Profits', path: '/industries/non-profits' },
          ]
        }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      megaMenu: [
        {
          title: 'Knowledge',
          links: [
            { name: 'Blog', path: '/blog' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: 'Whitepapers', path: '/whitepapers' },
          ]
        },
        {
          title: 'Resources',
          links: [
            { name: 'Podcasts', path: '/podcasts' },
            { name: 'Events', path: '/events' },
          ]
        }
      ]
    },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav 
      className="fixed w-full z-50 transition-all duration-500"
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      {/* Background layer separated to prevent backdrop-filter from clipping the mega menu */}
      <div 
        className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-500 -z-10 bg-dark-indigo/95 backdrop-blur-xl border-b ${glassBorderClass} ${scrolled ? 'opacity-100' : 'opacity-90'}`}
      />
      {/* Top Bar */}
      <div className={`border-b ${borderColorClass} py-2 hidden lg:block transition-all duration-500 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
        <div className={`container-custom flex justify-end space-x-6 text-[10px] font-bold uppercase tracking-widest ${topBarTextColor}`}>
          <Link href="/csr" className={`${textHoverClass} transition-colors`}>CSR</Link>
          <Link href="/contact" className={`${textHoverClass} transition-colors`}>Contact Us</Link>
        </div>
      </div>

      <div className={`transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <Link href="/">
              <Logo theme={theme} />
            </Link>

            {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveMegaMenu(link.megaMenu ? link.name : null)}
              >
                <Link href={link.path}
                  className={`text-sm font-bold transition-all ${textHoverClass} flex items-center space-x-1 group ${location === link.path ? activeTextClass : textColorClass}`}
                >
                  <span className={isLight && location === link.path ? 'text-space-blue' : ''}>{link.name}</span>
                  {link.megaMenu && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${activeMegaMenu === link.name ? 'rotate-180' : ''}`} 
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className={`hidden lg:flex items-center space-x-6 ${textColorClass}`}>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className={`${textHoverClass} transition-colors`}
            >
              <Search size={20} />
            </button>
            <button className={`${textHoverClass} transition-colors`}>
              <Globe size={20} />
            </button>
          </div>
          
          <Link href="/contact" className="hidden lg:block btn-primary !py-2.5 !px-6 text-sm">
            <span>Contact Us</span>
          </Link>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 ${iconColorClass}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>

      {/* Mega Menu Panel */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 w-full hidden lg:block border-b ${glassBorderClass}`}
            style={{ 
              background: '#08090c', 
              zIndex: 100 
            }}
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          >
            <div className="container-custom py-12">
              <div className="grid grid-cols-4 gap-12">
                {navLinks.find(l => l.name === activeMegaMenu)?.megaMenu?.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-6">
                      {section.title}
                    </h4>
                    <ul className="space-y-4">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link href={link.path}
                            className="text-white/60 hover:text-white transition-colors flex items-center group"
                          >
                            <span>{link.name}</span>
                            <ChevronRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                {/* Featured Section in Mega Menu */}
                <div className="col-span-1 border-l border-white/10 pl-12">
                  <div className="glass p-6 rounded-2xl border-brand-orange/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 blur-2xl rounded-full -mr-12 -mt-12" />
                    <h4 className="text-lg font-bold mb-4 relative z-10">Latest Insights</h4>
                    <p className="text-sm text-white/60 mb-6 relative z-10">
                      Discover how we're helping enterprises scale with AI-driven DevOps.
                    </p>
                    <Link href="/blog" className="text-brand-orange font-bold text-sm flex items-center group/link">
                      Read Case Study
                      <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 w-full glass p-8 border-b border-white/10 hidden lg:block"
          >
            <div className="container-custom flex items-center">
              <Search className="text-white/40 mr-4" size={24} />
              <input 
                type="text" 
                placeholder="Search for services, industries, or insights..."
                className="w-full bg-transparent border-none outline-none text-2xl text-white placeholder:text-white/20"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="lg:hidden fixed inset-0 z-[60] bg-dark-indigo/95 backdrop-blur-3xl overflow-y-auto"
          >
            <div className="container-custom py-6 flex justify-between items-center border-b border-white/10">
              <Logo />
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="container-custom py-8 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/5 pb-6">
                  <div 
                    className="flex justify-between items-center cursor-pointer group"
                    onClick={() => {
                      if (link.megaMenu) {
                        setActiveMegaMenu(activeMegaMenu === link.name ? null : link.name);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <Link href={link.megaMenu ? '#' : link.path}
                      className={`text-2xl font-display font-bold transition-colors ${activeMegaMenu === link.name ? 'text-brand-orange' : 'text-white group-hover:text-brand-orange'}`}
                    >
                      {link.name}
                    </Link>
                    {link.megaMenu && (
                      <div className={`p-2 rounded-full transition-colors ${activeMegaMenu === link.name ? 'bg-brand-orange/10 text-brand-orange' : 'bg-white/5 text-white/50'}`}>
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${activeMegaMenu === link.name ? 'rotate-180' : ''}`} 
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile Accordion Dropdown */}
                  <AnimatePresence>
                    {link.megaMenu && activeMegaMenu === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-2 pl-4 space-y-8 border-l border-white/10 ml-2 mt-4">
                          {link.megaMenu.map((section) => (
                            <div key={section.title} className="space-y-4">
                              <h5 className="text-xs font-bold text-brand-orange uppercase tracking-widest flex items-center">
                                <span className="w-2 h-2 rounded-full bg-brand-orange mr-2"></span>
                                {section.title}
                              </h5>
                              <div className="space-y-3 flex flex-col">
                                {section.links.map((subLink) => (
                                  <Link
                                    key={subLink.name}
                                    to={subLink.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base text-white/60 hover:text-white transition-colors py-1 inline-flex items-center"
                                  >
                                    <ChevronRight size={14} className="mr-2 text-white/20" />
                                    {subLink.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="container-custom pb-12 pt-4">
              <div className="flex bg-white/5 rounded-2xl p-6 flex-col space-y-6">
                <div className="flex items-center justify-between text-white/60">
                  <span className="font-bold text-sm uppercase tracking-widest">Region</span>
                  <div className="flex items-center space-x-2 text-white">
                    <Globe size={18} />
                    <span className="font-medium">Global (EN)</span>
                  </div>
                </div>
                
                <Link href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full flex justify-center items-center space-x-2 py-4"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
