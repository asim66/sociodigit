import React from 'react';
import type { Metadata } from 'next';
import CareersPage from './CareersPage';

export const metadata: Metadata = {
  title: 'Careers & Job Opportunities at Sociodigit | Join Our Team',
  description: 'Join our global engineering & design team. Explore open roles in software development, DevOps, AI, product design, and digital marketing.',
  alternates: {
    canonical: 'https://sociodigit.in/careers',
    languages: {
      'en': 'https://sociodigit.in/careers',
      'x-default': 'https://sociodigit.in/careers',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/careers',
    title: 'Careers & Job Opportunities at Sociodigit | Join Our Team',
    description: 'Join our global engineering & design team. Explore open roles in software development, DevOps, AI, product design, and digital marketing.',
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
    title: 'Careers & Job Opportunities at Sociodigit | Join Our Team',
    description: 'Join our global engineering & design team. Explore open roles in software development, DevOps, AI, product design, and digital marketing.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/careers#main",
    "url": "https://sociodigit.in/careers",
    "name": "Careers at Sociodigit",
    "description": "Join our global engineering & design team. Explore open roles in software development, DevOps, AI, product design, and digital marketing.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/careers#breadcrumb",
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
        "name": "Careers at Sociodigit",
        "item": "https://sociodigit.in/careers"
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
      <CareersPage />
    </>
  );
}
