import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sociodigit Data Protection & Compliance',
  description: 'Sociodigit privacy policy detailing how we collect, protect, and process your personal and business data in compliance with global standards.',
  alternates: {
    canonical: 'https://sociodigit.in/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 26, 2026";

  return (
    <div className="pt-32 pb-24 bg-space-blue text-white selection:bg-brand-orange selection:text-white min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield size={14} />
            <span>Legal & Compliance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-white/60 text-sm">
            Last Updated: {lastUpdated} | Effective Date: January 1, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-white/80 leading-relaxed font-sans text-base">
          <section className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="text-brand-orange w-6 h-6 shrink-0" />
              1. Overview & Scope
            </h2>
            <p className="mb-4">
              Sociodigit (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to safeguarding the privacy and security of individuals who visit our website (<a href="https://sociodigit.in" className="text-brand-orange underline">sociodigit.in</a>) and clients who utilize our software development, cloud infrastructure, AI engineering, QA automation, and digital marketing consulting services.
            </p>
            <p>
              This Privacy Policy explains the nature of personal data collected, how it is processed and secured, and your legal rights regarding your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">2. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Direct Information Provided</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span>Contact details (Name, business email, phone number)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span>Project briefs, technical requirements, and RFPs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span>Communications via contact forms and consultation bookings</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Automated & Technical Data</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span>Browser type, operating system, and IP address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span>Page interactions, referral source, and session metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span>Strictly necessary analytics cookies for site performance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">3. How We Use Your Data</h2>
            <p>Your information is collected solely for legitimate business operations:</p>
            <ul className="list-disc list-inside space-y-2 text-white/70 ml-2">
              <li>Delivering technical consulting, software architecture, and marketing services.</li>
              <li>Responding to project inquiries, quote requests, and providing ongoing support.</li>
              <li>Ensuring security, debugging performance bottlenecks, and preventing fraudulent activity.</li>
              <li>Complying with statutory, legal, and regulatory obligations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">4. Data Security & Storage</h2>
            <p>
              We implement enterprise-grade technical safeguards including TLS 1.3 encryption, role-based access control (RBAC), and SOC-2 compliant cloud infrastructure to protect your proprietary data from unauthorized access or disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">5. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you have rights under applicable privacy regulations (such as GDPR, CCPA, and India DPDP Act) to request access, correction, or deletion of your personal data held by Sociodigit.
            </p>
          </section>

          <section className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-white mb-2">6. Contact Our Privacy Officer</h2>
            <p className="text-white/70 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to our team:
            </p>
            <div className="text-sm text-white/80 space-y-1">
              <p><strong>Entity:</strong> Sociodigit Technologies</p>
              <p><strong>Address:</strong> HP4, Phase 2, Brit Colony, Laxmisagar, Bhubaneswar, Odisha 751006, India</p>
              <p><strong>Email:</strong> <a href="mailto:hi@sociodigit.in" className="text-brand-orange underline">hi@sociodigit.in</a></p>
              <p><strong>Phone:</strong> +91 7008381630</p>
            </div>
          </section>
        </div>

        {/* Back navigation */}
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-sm">
          <Link href="/" className="text-brand-orange hover:underline">
            ← Return to Homepage
          </Link>
          <Link href="/terms-of-service" className="text-white/60 hover:text-white transition-colors">
            Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
