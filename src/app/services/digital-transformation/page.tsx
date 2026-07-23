import React from 'react';
import type { Metadata } from 'next';
import DigitalTransformationPage from './DigitalTransformationPage';

export const metadata: Metadata = {
  title: 'Enterprise Digital Transformation Services | Sociodigit',
  description: 'Modernize legacy IT systems, migrate to scalable cloud infrastructure, automate core processes, and adopt AI technology.',
  alternates: {
    canonical: 'https://sociodigit.in/services/digital-transformation',
    languages: {
      'en': 'https://sociodigit.in/services/digital-transformation',
      'x-default': 'https://sociodigit.in/services/digital-transformation',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/digital-transformation',
    title: 'Enterprise Digital Transformation Services | Sociodigit',
    description: 'Modernize legacy IT systems, migrate to scalable cloud infrastructure, automate core processes, and adopt AI technology.',
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
    title: 'Enterprise Digital Transformation Services | Sociodigit',
    description: 'Modernize legacy IT systems, migrate to scalable cloud infrastructure, automate core processes, and adopt AI technology.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/digital-transformation#main",
    "url": "https://sociodigit.in/services/digital-transformation",
    "name": "Digital Transformation",
    "description": "Modernize legacy IT systems, migrate to scalable cloud infrastructure, automate core processes, and adopt AI technology.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/digital-transformation#breadcrumb",
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
        "name": "Digital Transformation",
        "item": "https://sociodigit.in/services/digital-transformation"
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
      <DigitalTransformationPage />
    </>
  );
}
