import React from 'react';
import type { Metadata } from 'next';
import StrategyRoadmapPage from './StrategyRoadmapPage';

export const metadata: Metadata = {
  title: 'Technology Roadmap & Architecture Strategy | Sociodigit',
  description: 'Define scalable technical architecture, milestone roadmaps, risk assessments, and execution plans for digital growth.',
  alternates: {
    canonical: 'https://sociodigit.in/services/strategy-roadmap',
    languages: {
      'en': 'https://sociodigit.in/services/strategy-roadmap',
      'x-default': 'https://sociodigit.in/services/strategy-roadmap',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/strategy-roadmap',
    title: 'Technology Roadmap & Architecture Strategy | Sociodigit',
    description: 'Define scalable technical architecture, milestone roadmaps, risk assessments, and execution plans for digital growth.',
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
    title: 'Technology Roadmap & Architecture Strategy | Sociodigit',
    description: 'Define scalable technical architecture, milestone roadmaps, risk assessments, and execution plans for digital growth.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/strategy-roadmap#main",
    "url": "https://sociodigit.in/services/strategy-roadmap",
    "name": "Strategy & Roadmap",
    "description": "Define scalable technical architecture, milestone roadmaps, risk assessments, and execution plans for digital growth.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/strategy-roadmap#breadcrumb",
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
        "name": "Strategy & Roadmap",
        "item": "https://sociodigit.in/services/strategy-roadmap"
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
      <StrategyRoadmapPage />
    </>
  );
}
