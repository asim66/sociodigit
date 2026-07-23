import React from 'react';
import type { Metadata } from 'next';
import HospitalityHotelsPage from './HospitalityHotelsPage';

export const metadata: Metadata = {
  title: 'Hospitality & Hotel Tech Solutions | Sociodigit',
  description: 'Property management systems (PMS), direct booking engines, hotel fraud prevention, and guest experience automation.',
  alternates: {
    canonical: 'https://sociodigit.in/industries/hospitality-hotels',
    languages: {
      'en': 'https://sociodigit.in/industries/hospitality-hotels',
      'x-default': 'https://sociodigit.in/industries/hospitality-hotels',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/hospitality-hotels',
    title: 'Hospitality & Hotel Tech Solutions | Sociodigit',
    description: 'Property management systems (PMS), direct booking engines, hotel fraud prevention, and guest experience automation.',
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
    title: 'Hospitality & Hotel Tech Solutions | Sociodigit',
    description: 'Property management systems (PMS), direct booking engines, hotel fraud prevention, and guest experience automation.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/hospitality-hotels#main",
    "url": "https://sociodigit.in/industries/hospitality-hotels",
    "name": "Hospitality Tech Solutions",
    "description": "Property management systems (PMS), direct booking engines, hotel fraud prevention, and guest experience automation.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/hospitality-hotels#breadcrumb",
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
        "name": "Hospitality Tech Solutions",
        "item": "https://sociodigit.in/industries/hospitality-hotels"
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
      <HospitalityHotelsPage />
    </>
  );
}
