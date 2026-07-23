import React from 'react';
import type { Metadata } from 'next';
import StartupsPage from './StartupsPage';

export const metadata: Metadata = {
  title: 'Software & Growth Solutions for High-Growth Startups | Sociodigit',
  description: 'MVP engineering, rapid prototyping, scalable architecture, and seed-to-Series-A tech execution for ambitious founders.',
  alternates: {
    canonical: 'https://sociodigit.in/industries/startups',
    languages: {
      'en': 'https://sociodigit.in/industries/startups',
      'x-default': 'https://sociodigit.in/industries/startups',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/startups',
    title: 'Software & Growth Solutions for High-Growth Startups | Sociodigit',
    description: 'MVP engineering, rapid prototyping, scalable architecture, and seed-to-Series-A tech execution for ambitious founders.',
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
    title: 'Software & Growth Solutions for High-Growth Startups | Sociodigit',
    description: 'MVP engineering, rapid prototyping, scalable architecture, and seed-to-Series-A tech execution for ambitious founders.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/startups#main",
    "url": "https://sociodigit.in/industries/startups",
    "name": "Startups Industry Solutions",
    "description": "MVP engineering, rapid prototyping, scalable architecture, and seed-to-Series-A tech execution for ambitious founders.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/startups#breadcrumb",
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
        "name": "Startups Industry Solutions",
        "item": "https://sociodigit.in/industries/startups"
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
      <StartupsPage />
    </>
  );
}
