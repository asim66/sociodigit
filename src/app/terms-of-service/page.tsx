import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileCheck, ShieldCheck, Scale, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Sociodigit Client Agreement & Standards',
  description: 'Terms of service and client engagement terms for software engineering, cloud solutions, and digital consulting by Sociodigit.',
  alternates: {
    canonical: 'https://sociodigit.in/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "August 26, 2026";

  return (
    <div className="pt-32 pb-24 bg-space-blue text-white selection:bg-brand-orange selection:text-white min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale size={14} />
            <span>Client Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Terms of <span className="gradient-text">Service</span>
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
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing, browsing, or utilizing the services provided on <a href="https://sociodigit.in" className="text-brand-orange underline">sociodigit.in</a> or engaging Sociodigit for engineering, cloud architecture, QA automation, or digital marketing services, you agree to be bound by these Terms of Service.
            </p>
            <p>
              If you do not agree to these terms, you should refrain from using our digital services and consulting platforms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">2. Scope of Services</h2>
            <p>
              Sociodigit provides professional IT consulting, custom software development, cloud infrastructure design, quality assurance automation, search engine optimization (SEO), and digital marketing services. Specific project deliverables, timelines, milestones, and fees are defined in individual Master Services Agreements (MSA) or Statements of Work (SOW) executed between Sociodigit and the client.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise agreed upon in a custom written SOW:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 ml-2">
              <li>Clients retain full ownership of their proprietary business data, pre-existing intellectual property, and custom codebases commissioned and fully paid for under their agreement.</li>
              <li>Sociodigit retains rights to its proprietary algorithms, reusable utility libraries, frameworks, and generic development methodologies developed independently.</li>
              <li>The content, trademarks, logos, and visual elements on sociodigit.in remain the intellectual property of Sociodigit.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">4. Confidentiality & Non-Disclosure</h2>
            <p>
              We treat all client technical specifications, business metrics, and trade secrets with strict confidentiality under industry-standard non-disclosure protocols (NDAs).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Sociodigit shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from website downtime, third-party API changes, search engine algorithm updates, or hosting provider interruptions.
            </p>
          </section>

          <section className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-white mb-2">6. Governing Law & Dispute Resolution</h2>
            <p className="text-white/70 mb-4">
              These terms shall be governed by and construed in accordance with the laws of Odisha, India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts located in Bhubaneswar, Odisha.
            </p>
            <div className="text-sm text-white/80 space-y-1">
              <p><strong>Contact Legal:</strong> <a href="mailto:legal@sociodigit.in" className="text-brand-orange underline">legal@sociodigit.in</a> / <a href="mailto:hi@sociodigit.in" className="text-brand-orange underline">hi@sociodigit.in</a></p>
              <p><strong>Phone:</strong> +91 7008381630</p>
            </div>
          </section>
        </div>

        {/* Back navigation */}
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-sm">
          <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
            ← Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="text-white/60 hover:text-white transition-colors">
            Cookie Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
