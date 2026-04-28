// @ts-nocheck
"use client";
import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-blue text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-orange/5 blur-[120px] -z-10"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-white/60 leading-relaxed">
              Engineering digital products for the future. We build scalable software, automate quality, and power cloud infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 border border-white/10 hover:border-brand-orange/50">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 border border-white/10 hover:border-brand-orange/50">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 border border-white/10 hover:border-brand-orange/50">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Software Development', path: '/services/software-development' },
                { name: 'Cloud & DevOps', path: '/services/devops' },
                { name: 'QA Automation', path: '/services/qa-automation' },
                { name: 'Digital Marketing', path: '/services/digital-marketing' },
                { name: 'Product Consulting', path: '/services/consulting' },
                { name: 'Custom Apps', path: '/services/custom-apps' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-white/60 hover:text-brand-orange transition-colors flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Case Studies', 'Blog', 'Careers', 'CSR', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-brand-orange transition-colors flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/60">
                <MapPin size={24} className="text-brand-orange shrink-0 mt-1" />
                <span className="leading-relaxed">HP4, Phase 2, Brit Colony,<br/>Laxmisagar, Bhubaneswar,<br/>751006</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Phone size={20} className="text-brand-orange shrink-0" />
                <span>+91 9438171771</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Mail size={20} className="text-brand-orange shrink-0" />
                <a href="mailto:hi@sociodigit.in" className="hover:text-white transition-colors">hi@sociodigit.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm">
            © {currentYear} Sociodigit. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
