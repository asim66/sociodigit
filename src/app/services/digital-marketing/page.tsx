import React from 'react';
import type { Metadata } from 'next';
import DigitalMarketingPage from './DigitalMarketingPage';

export const metadata: Metadata = {
  title: 'Digital Marketing & Performance Growth Agency | Sociodigit',
  description: 'Performance marketing, SEO, paid media campaigns, conversion rate optimization (CRO), and data-driven customer acquisition.',
  alternates: {
    canonical: 'https://sociodigit.in/services/digital-marketing',
    languages: {
      'en': 'https://sociodigit.in/services/digital-marketing',
      'x-default': 'https://sociodigit.in/services/digital-marketing',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/digital-marketing',
    title: 'Digital Marketing & Performance Growth Agency | Sociodigit',
    description: 'Performance marketing, SEO, paid media campaigns, conversion rate optimization (CRO), and data-driven customer acquisition.',
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
    title: 'Digital Marketing & Performance Growth Agency | Sociodigit',
    description: 'Performance marketing, SEO, paid media campaigns, conversion rate optimization (CRO), and data-driven customer acquisition.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/digital-marketing#main",
    "url": "https://sociodigit.in/services/digital-marketing",
    "name": "Digital Marketing",
    "description": "Performance marketing, SEO, paid media campaigns, conversion rate optimization (CRO), and data-driven customer acquisition.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/digital-marketing#breadcrumb",
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
        "name": "Digital Marketing",
        "item": "https://sociodigit.in/services/digital-marketing"
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
      <DigitalMarketingPage />
    </>
  );
}
