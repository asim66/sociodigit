import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, ShieldCheck, Settings, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | Sociodigit Transparent Web Analytics',
  description: 'Understand how Sociodigit uses cookies and analytics technologies to optimize performance and protect user experience.',
  alternates: {
    canonical: 'https://sociodigit.in/cookie-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  const lastUpdated = "August 26, 2026";

  return (
    <div className="pt-32 pb-24 bg-space-blue text-white selection:bg-brand-orange selection:text-white min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <Cookie size={14} />
            <span>Tracking & Analytics</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Cookie <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-white/60 text-sm">
            Last Updated: {lastUpdated} | Effective Date: January 1, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-white/80 leading-relaxed font-sans text-base">
          <section className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
              <ShieldCheck className="text-brand-orange w-6 h-6 shrink-0" />
              1. What Are Cookies?
            </h2>
            <p className="mb-4">
              Cookies are small text files placed on your device by web servers when you browse web pages. They enable the website to recognize your browser, preserve preferences, ensure cybersecurity integrity, and analyze web traffic flow.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">2. Categories of Cookies We Use</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Essential Cookies</h3>
                <p className="text-sm text-white/70">
                  Strictly necessary for site security, CDN caching, load balancing, and secure form submissions. These cannot be switched off.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Performance & Analytics</h3>
                <p className="text-sm text-white/70">
                  Aggregated, anonymized telemetry (e.g. Core Web Vitals, page rendering latency, bounce rates) that helps us optimize site performance without tracking personal identities.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">3. Managing Your Cookie Preferences</h2>
            <p>
              You can control or delete cookies directly through your browser settings (Chrome, Safari, Firefox, Edge). Note that disabling certain essential cookies may affect the interactive functionality of our web apps.
            </p>
          </section>

          <section className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-white mb-2">4. Questions & Contacts</h2>
            <p className="text-white/70 mb-2">
              For any questions regarding our cookie practices, reach out directly:
            </p>
            <p className="text-sm text-white/80">
              <strong>Email:</strong> <a href="mailto:hi@sociodigit.in" className="text-brand-orange underline">hi@sociodigit.in</a>
            </p>
          </section>
        </div>

        {/* Back navigation */}
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-sm">
          <Link href="/privacy-policy" className="text-brand-orange hover:underline">
            ← Privacy Policy
          </Link>
          <Link href="/" className="text-white/60 hover:text-white transition-colors">
            Return to Home →
          </Link>
        </div>
      </div>
    </div>
  );
}
