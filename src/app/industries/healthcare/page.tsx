import React from 'react';
import type { Metadata } from 'next';
import HealthcarePage from './HealthcarePage';

export const metadata: Metadata = {
  title: 'Healthcare Software & HIPAA-Compliant Solutions | Sociodigit',
  description: 'HIPAA-compliant patient portals, EHR integrations, telemedicine apps, and secure medical data pipelines.',
  alternates: {
    canonical: 'https://sociodigit.in/industries/healthcare',
    languages: {
      'en': 'https://sociodigit.in/industries/healthcare',
      'x-default': 'https://sociodigit.in/industries/healthcare',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/healthcare',
    title: 'Healthcare Software & HIPAA-Compliant Solutions | Sociodigit',
    description: 'HIPAA-compliant patient portals, EHR integrations, telemedicine apps, and secure medical data pipelines.',
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
    title: 'Healthcare Software & HIPAA-Compliant Solutions | Sociodigit',
    description: 'HIPAA-compliant patient portals, EHR integrations, telemedicine apps, and secure medical data pipelines.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/healthcare#main",
    "url": "https://sociodigit.in/industries/healthcare",
    "name": "Healthcare IT Solutions",
    "description": "HIPAA-compliant patient portals, EHR integrations, telemedicine apps, and secure medical data pipelines.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/healthcare#breadcrumb",
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
        "name": "Healthcare IT Solutions",
        "item": "https://sociodigit.in/industries/healthcare"
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
      <HealthcarePage />
    </>
  );
}
