import React from 'react';
import type { Metadata } from 'next';
import NonProfitsPage from './NonProfitsPage';

export const metadata: Metadata = {
  title: 'Technology Solutions for Non-Profits & NGOs | Sociodigit',
  description: 'Donor management portals, non-profit web development, campaign automation, and social impact analytics.',
  alternates: {
    canonical: 'https://sociodigit.in/industries/non-profits',
    languages: {
      'en': 'https://sociodigit.in/industries/non-profits',
      'x-default': 'https://sociodigit.in/industries/non-profits',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/non-profits',
    title: 'Technology Solutions for Non-Profits & NGOs | Sociodigit',
    description: 'Donor management portals, non-profit web development, campaign automation, and social impact analytics.',
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
    title: 'Technology Solutions for Non-Profits & NGOs | Sociodigit',
    description: 'Donor management portals, non-profit web development, campaign automation, and social impact analytics.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/non-profits#main",
    "url": "https://sociodigit.in/industries/non-profits",
    "name": "Non-Profit Tech Solutions",
    "description": "Donor management portals, non-profit web development, campaign automation, and social impact analytics.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/non-profits#breadcrumb",
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
        "name": "Non-Profit Tech Solutions",
        "item": "https://sociodigit.in/industries/non-profits"
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
      <NonProfitsPage />
    </>
  );
}
