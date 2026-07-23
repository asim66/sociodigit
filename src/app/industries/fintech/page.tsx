import React from 'react';
import type { Metadata } from 'next';
import FintechPage from './FintechPage';

export const metadata: Metadata = {
  title: 'Fintech Software & Secure Payment Engineering | Sociodigit',
  description: 'PCI-DSS compliant payment processing, banking APIs, core ledger systems, and fraud prevention for fintech innovators.',
  alternates: {
    canonical: 'https://sociodigit.in/industries/fintech',
    languages: {
      'en': 'https://sociodigit.in/industries/fintech',
      'x-default': 'https://sociodigit.in/industries/fintech',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/fintech',
    title: 'Fintech Software & Secure Payment Engineering | Sociodigit',
    description: 'PCI-DSS compliant payment processing, banking APIs, core ledger systems, and fraud prevention for fintech innovators.',
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
    title: 'Fintech Software & Secure Payment Engineering | Sociodigit',
    description: 'PCI-DSS compliant payment processing, banking APIs, core ledger systems, and fraud prevention for fintech innovators.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/fintech#main",
    "url": "https://sociodigit.in/industries/fintech",
    "name": "Fintech Software Engineering",
    "description": "PCI-DSS compliant payment processing, banking APIs, core ledger systems, and fraud prevention for fintech innovators.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/fintech#breadcrumb",
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
        "name": "Fintech Software Engineering",
        "item": "https://sociodigit.in/industries/fintech"
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
      <FintechPage />
    </>
  );
}
