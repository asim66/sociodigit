import React from 'react';
import type { Metadata } from 'next';
import TechAuditPage from './TechAuditPage';

export const metadata: Metadata = {
  title: 'Code & Infrastructure Technology Audit | Sociodigit',
  description: 'Comprehensive technical audits evaluating codebase health, security vulnerabilities, cloud cost efficiency, and bottlenecks.',
  alternates: {
    canonical: 'https://sociodigit.in/services/tech-audit',
    languages: {
      'en': 'https://sociodigit.in/services/tech-audit',
      'x-default': 'https://sociodigit.in/services/tech-audit',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/tech-audit',
    title: 'Code & Infrastructure Technology Audit | Sociodigit',
    description: 'Comprehensive technical audits evaluating codebase health, security vulnerabilities, cloud cost efficiency, and bottlenecks.',
    siteName: 'Sociodigit',
    images: [{
      url: 'https://sociodigit.in/og-banner.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sociodigit',
    title: 'Code & Infrastructure Technology Audit | Sociodigit',
    description: 'Comprehensive technical audits evaluating codebase health, security vulnerabilities, cloud cost efficiency, and bottlenecks.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/tech-audit#main",
    "url": "https://sociodigit.in/services/tech-audit",
    "name": "Technology Audit",
    "description": "Comprehensive technical audits evaluating codebase health, security vulnerabilities, cloud cost efficiency, and bottlenecks.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/tech-audit#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sociodigit.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Technology Audit",
        "item": "https://sociodigit.in/services/tech-audit"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechAuditPage />
    </>
  );
}
