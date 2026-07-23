import React from 'react';
import type { Metadata } from 'next';
import ConsultingPage from './ConsultingPage';

export const metadata: Metadata = {
  title: 'Technology & IT Strategy Consulting | Sociodigit',
  description: 'Strategic technology consulting, architecture design, digital roadmaps, and tech stack optimization for scaling enterprises.',
  alternates: {
    canonical: 'https://sociodigit.in/services/consulting',
    languages: {
      'en': 'https://sociodigit.in/services/consulting',
      'x-default': 'https://sociodigit.in/services/consulting',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/consulting',
    title: 'Technology & IT Strategy Consulting | Sociodigit',
    description: 'Strategic technology consulting, architecture design, digital roadmaps, and tech stack optimization for scaling enterprises.',
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
    title: 'Technology & IT Strategy Consulting | Sociodigit',
    description: 'Strategic technology consulting, architecture design, digital roadmaps, and tech stack optimization for scaling enterprises.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/consulting#main",
    "url": "https://sociodigit.in/services/consulting",
    "name": "IT Strategy Consulting",
    "description": "Strategic technology consulting, architecture design, digital roadmaps, and tech stack optimization for scaling enterprises.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/consulting#breadcrumb",
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
        "name": "IT Strategy Consulting",
        "item": "https://sociodigit.in/services/consulting"
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
      <ConsultingPage />
    </>
  );
}
