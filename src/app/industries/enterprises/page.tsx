import React from 'react';
import type { Metadata } from 'next';
import EnterprisesPage from './EnterprisesPage';

export const metadata: Metadata = {
  title: 'Enterprise IT & Cloud Engineering Solutions | Sociodigit',
  description: 'Enterprise software development, legacy system modernization, cloud migration, and SOC 2 security compliance.',
  alternates: {
    canonical: 'https://sociodigit.in/industries/enterprises',
    languages: {
      'en': 'https://sociodigit.in/industries/enterprises',
      'x-default': 'https://sociodigit.in/industries/enterprises',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/enterprises',
    title: 'Enterprise IT & Cloud Engineering Solutions | Sociodigit',
    description: 'Enterprise software development, legacy system modernization, cloud migration, and SOC 2 security compliance.',
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
    title: 'Enterprise IT & Cloud Engineering Solutions | Sociodigit',
    description: 'Enterprise software development, legacy system modernization, cloud migration, and SOC 2 security compliance.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/enterprises#main",
    "url": "https://sociodigit.in/industries/enterprises",
    "name": "Enterprise IT Solutions",
    "description": "Enterprise software development, legacy system modernization, cloud migration, and SOC 2 security compliance.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/enterprises#breadcrumb",
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
        "name": "Enterprise IT Solutions",
        "item": "https://sociodigit.in/industries/enterprises"
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
      <EnterprisesPage />
    </>
  );
}
