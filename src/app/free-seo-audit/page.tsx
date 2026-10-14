import React from 'react';
import type { Metadata } from 'next';
import SeoAuditPage from './SeoAuditPage';

export const metadata: Metadata = {
  title: 'Free Website SEO & Speed Audit Tool | Instant Health Check by Sociodigit',
  description: 'Audit your website for on-page SEO issues, server response time (TTFB), Core Web Vitals, missing alt tags, and mobile readiness instantly with Sociodigit.',
  keywords: [
    'free SEO audit tool',
    'website speed checker',
    'free website audit Bhubaneswar',
    'Core Web Vitals test',
    'on-page SEO checker',
    'technical SEO audit tool',
    'Sociodigit website audit',
  ],
  alternates: {
    canonical: 'https://sociodigit.in/free-seo-audit',
    languages: {
      'en': 'https://sociodigit.in/free-seo-audit',
      'x-default': 'https://sociodigit.in/free-seo-audit',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/free-seo-audit',
    title: 'Free Website SEO & Speed Audit Tool | Sociodigit',
    description: 'Instant diagnostics for on-page SEO errors, server speed, Core Web Vitals, and mobile readiness.',
    siteName: 'Sociodigit',
    images: [{
      url: 'https://sociodigit.in/og-banner.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sociodigit',
    title: 'Free Website SEO & Speed Audit Tool | Sociodigit',
    description: 'Check your website for basic SEO issues, loading speed, and Core Web Vitals in seconds.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Sociodigit Free Website SEO & Speed Audit Tool",
    "url": "https://sociodigit.in/free-seo-audit",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "provider": {
      "@type": "Organization",
      "name": "Sociodigit",
      "url": "https://sociodigit.in",
    },
    "description": "An interactive web tool to audit on-page SEO, Core Web Vitals, server response times, heading structures, and social metadata.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoAuditPage />
    </>
  );
}
