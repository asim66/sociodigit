import React from 'react';
import type { Metadata } from 'next';
import ContentStrategyPage from './ContentStrategyPage';

export const metadata: Metadata = {
  title: 'Content Strategy & Copywriting Services | Sociodigit',
  description: 'Data-driven content strategy, SEO copywriting, brand positioning, and content marketing systems that drive qualified organic traffic.',
  alternates: {
    canonical: 'https://sociodigit.in/services/content-strategy',
    languages: {
      'en': 'https://sociodigit.in/services/content-strategy',
      'x-default': 'https://sociodigit.in/services/content-strategy',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/content-strategy',
    title: 'Content Strategy & Copywriting Services | Sociodigit',
    description: 'Data-driven content strategy, SEO copywriting, brand positioning, and content marketing systems that drive qualified organic traffic.',
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
    title: 'Content Strategy & Copywriting Services | Sociodigit',
    description: 'Data-driven content strategy, SEO copywriting, brand positioning, and content marketing systems that drive qualified organic traffic.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/content-strategy#main",
    "url": "https://sociodigit.in/services/content-strategy",
    "name": "Content Strategy",
    "description": "Data-driven content strategy, SEO copywriting, brand positioning, and content marketing systems that drive qualified organic traffic.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/content-strategy#breadcrumb",
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
        "name": "Content Strategy",
        "item": "https://sociodigit.in/services/content-strategy"
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
      <ContentStrategyPage />
    </>
  );
}
