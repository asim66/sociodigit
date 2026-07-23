import React from 'react';
import type { Metadata } from 'next';
import CaseStudiesPage from './CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Case Studies & Client Success Stories | Sociodigit',
  description: 'Explore real-world case studies showcasing how Sociodigit delivers software engineering, cloud DevOps, and digital growth.',
  alternates: {
    canonical: 'https://sociodigit.in/case-studies',
    languages: {
      'en': 'https://sociodigit.in/case-studies',
      'x-default': 'https://sociodigit.in/case-studies',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/case-studies',
    title: 'Case Studies & Client Success Stories | Sociodigit',
    description: 'Explore real-world case studies showcasing how Sociodigit delivers software engineering, cloud DevOps, and digital growth.',
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
    title: 'Case Studies & Client Success Stories | Sociodigit',
    description: 'Explore real-world case studies showcasing how Sociodigit delivers software engineering, cloud DevOps, and digital growth.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/case-studies#main",
    "url": "https://sociodigit.in/case-studies",
    "name": "Client Case Studies",
    "description": "Explore real-world case studies showcasing how Sociodigit delivers software engineering, cloud DevOps, and digital growth.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/case-studies#breadcrumb",
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
        "name": "Client Case Studies",
        "item": "https://sociodigit.in/case-studies"
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
      <CaseStudiesPage />
    </>
  );
}
