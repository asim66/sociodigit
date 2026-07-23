import React from 'react';
import type { Metadata } from 'next';
import CustomAppsPage from './CustomAppsPage';

export const metadata: Metadata = {
  title: 'Custom App Development Services | React, Flutter, Node.js | Sociodigit',
  description: 'Tailor-made web & mobile applications engineered for high performance, reliability, and seamless user experiences.',
  alternates: {
    canonical: 'https://sociodigit.in/services/custom-apps',
    languages: {
      'en': 'https://sociodigit.in/services/custom-apps',
      'x-default': 'https://sociodigit.in/services/custom-apps',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/custom-apps',
    title: 'Custom App Development Services | React, Flutter, Node.js | Sociodigit',
    description: 'Tailor-made web & mobile applications engineered for high performance, reliability, and seamless user experiences.',
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
    title: 'Custom App Development Services | React, Flutter, Node.js | Sociodigit',
    description: 'Tailor-made web & mobile applications engineered for high performance, reliability, and seamless user experiences.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/custom-apps#main",
    "url": "https://sociodigit.in/services/custom-apps",
    "name": "Custom App Development",
    "description": "Tailor-made web & mobile applications engineered for high performance, reliability, and seamless user experiences.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/custom-apps#breadcrumb",
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
        "name": "Custom App Development",
        "item": "https://sociodigit.in/services/custom-apps"
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
      <CustomAppsPage />
    </>
  );
}
